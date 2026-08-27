import { supabase } from "@/lib/supabase";
import type { Order, OrderItem } from "@/types/products";

export const orderService = {
  async getOrders(): Promise<Order[]> {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (error || !data) {
      console.error("Error fetching orders from Supabase:", error);
      return [];
    }

    return data.map(mapDbOrderToOrder);
  },

  async getOrderById(id: string): Promise<Order | null> {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("order_number", id.trim().toUpperCase())
      .maybeSingle();

    if (error || !data) return null;
    return mapDbOrderToOrder(data);
  },

  async createOrder(payload: {
    customerName: string;
    customerPhone: string;
    customerEmail: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    items: OrderItem[];
    subtotal: number;
    shippingFee: number;
    total: number;
  }): Promise<Order> {
    const orderNumber = `VAS-${Math.floor(100000 + Math.random() * 900000)}`;
    const shippingAddress = `${payload.address}, ${payload.city}, ${payload.state} - ${payload.pincode}`;

    const dbOrder = {
      order_number: orderNumber,
      customer_name: payload.customerName,
      customer_email: payload.customerEmail,
      customer_phone: payload.customerPhone,
      shipping_address: shippingAddress,
      items: payload.items as any, // jsonb
      subtotal: payload.subtotal,
      discount_amount: 0,
      total_amount: payload.total,
      order_status: "pending",
      payment_status: "pending",
      shipping_status: "unshipped",
    };

    const { data, error } = await supabase
      .from("orders")
      .insert(dbOrder)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to create order in Supabase: ${error.message}`);
    }

    // Deduct stock for each ordered item automatically
    try {
      for (const item of payload.items) {
        const itemCode = (item.code || "").toUpperCase();
        const sizeName = item.sizeName || "Standard";
        const quantity = Number(item.quantity || 1);

        // Fetch variants for this product
        const { data: variants, error: fetchErr } = await supabase
          .from("product_variants")
          .select("*")
          .eq("product_id", itemCode);

        if (!fetchErr && variants && Array.isArray(variants)) {
          const match = variants.find(
            (v: any) => (v.variant_name || "").toLowerCase() === sizeName.toLowerCase()
          );
          if (match) {
            const currentStock = Number(match.stock_quantity || 0);
            const newStock = Math.max(0, currentStock - quantity);

            // Update stock quantity in database
            await supabase
              .from("product_variants")
              .update({ stock_quantity: newStock })
              .eq("id", match.id);
          }
        }
      }
    } catch (stockErr) {
      console.error("Failed to deduct stock for order items:", stockErr);
    }

    return mapDbOrderToOrder(data);
  },
};

function mapDbOrderToOrder(dbOrder: any): Order {
  const addressParts = (dbOrder.shipping_address || "").split(", ");
  const address = addressParts[0] || "";
  const city = addressParts[1] || "";
  const stateZip = addressParts[2] || "";
  const stateParts = stateZip.split(" - ");
  const state = stateParts[0] || "";
  const pincode = stateParts[1] || "";

  return {
    id: dbOrder.id,
    customerName: dbOrder.customer_name,
    customerPhone: dbOrder.customer_phone,
    customerEmail: dbOrder.customer_email,
    address,
    city,
    state,
    pincode,
    items: dbOrder.items as OrderItem[],
    subtotal: Number(dbOrder.subtotal),
    shippingFee: Number(dbOrder.total_amount) - Number(dbOrder.subtotal),
    total: Number(dbOrder.total_amount),
    status: mapDbStatusToOrderStatus(dbOrder.order_status),
    trackingNumber: dbOrder.tracking_number || undefined,
    createdAt: dbOrder.created_at,
  };
}

function mapDbStatusToOrderStatus(dbStatus: string): Order["status"] {
  switch (dbStatus) {
    case "pending": return "Pending";
    case "processing": return "Confirmed";
    case "completed": return "Delivered";
    case "cancelled": return "Cancelled";
    default: return "Pending";
  }
}

export default orderService;

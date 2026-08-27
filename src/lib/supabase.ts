import type { Database } from '@/types/supabase'
import {
  products as rawStaticProducts,
  vases as rawStaticVases,
  auxiliaryProducts as rawStaticAuxiliary,
} from "@/data/products";

export type DbDynamicProduct = Database['public']['Tables']['products_dynamic']['Row']
export type DbProductVariant = Database['public']['Tables']['product_variants']['Row']

// Force local database mode
export const isSupabaseConfigured = true; // Set to true so services use our local storage client instead of falling back to default mock data!

// Database Version Migration to automatically seed PDF stock levels
const DB_VERSION = "v1.5_clean_1to1_product_images";
if (typeof window !== 'undefined') {
  try {
    const currentVer = localStorage.getItem("vassio_db_version");
    if (currentVer !== DB_VERSION) {
      localStorage.removeItem("vassio_db_products_dynamic");
      localStorage.removeItem("vassio_db_product_variants");
      localStorage.removeItem("vassio_db_orders");
      localStorage.setItem("vassio_db_version", DB_VERSION);
      console.log(`[Vassio DB] Database migrated to version ${DB_VERSION} with PDF seeds`);
    }
  } catch (e) {
    console.error("Local Database migration failed:", e);
  }
}

const mockAuth = {
  async getSession() {
    if (typeof window === 'undefined') return { data: { session: null }, error: null };
    const saved = localStorage.getItem("vassio_admin_user");
    return { data: { session: saved ? { user: JSON.parse(saved) } : null }, error: null };
  },
  async signInWithPassword({ email, password }: any) {
    const cleanEmail = email.trim().toLowerCase();
    const user = {
      id: "admin-master",
      email: cleanEmail,
      user_metadata: {
        name: cleanEmail.split("@")[0],
        role: cleanEmail.includes("staff") ? "staff" : "admin"
      }
    };
    if (typeof window !== 'undefined') {
      localStorage.setItem("vassio_admin_user", JSON.stringify(user));
    }
    return { data: { user }, error: null };
  },
  async signUp({ email, password, options }: any) {
    const cleanEmail = email.trim().toLowerCase();
    const user = {
      id: `admin-${Date.now()}`,
      email: cleanEmail,
      user_metadata: {
        name: options?.data?.name || cleanEmail.split("@")[0],
        role: options?.data?.role || "admin"
      }
    };
    return { data: { user }, error: null };
  },
  async signOut() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem("vassio_admin_user");
    }
    return { error: null };
  },
  onAuthStateChange(callback: any) {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("vassio_admin_user");
      if (saved) {
        try {
          callback("SIGNED_IN", JSON.parse(saved));
        } catch (e) {}
      }
    }
    return { data: { subscription: { unsubscribe: () => {} } } };
  }
};

function getInitialStock(productCode: string, variantName: string): number {
  const code = productCode.toUpperCase();
  const name = variantName.toUpperCase();

  // Seeding stock levels matching VASSIO NEW UPDATE 1.pdf
  if (code === "ROCK") {
    if (name.includes("ROCK-B")) return 1;
    if (name.includes("ROCK-C")) return 2;
    if (name.includes("ROCK-D")) return 1;
  }
  if (code === "DIAMOND") {
    if (name.includes("DIAMOND-A")) return 3;
    if (name.includes("DIAMOND-B")) return 2;
  }
  if (code === "BSHARK") {
    if (name.includes("B.SHARK-A")) return 1;
    if (name.includes("B.SHARK-B")) return 3;
    if (name.includes("B.SHARK-C")) return 1;
    if (name.includes("B.SHARK-D")) return 3;
  }
  if (code === "FLORA") {
    if (name.includes("FLORA-B")) return 2;
    if (name.includes("FLORA-D")) return 2;
  }
  if (code === "POOL") {
    if (name.includes("POOL-A")) return 1;
    if (name.includes("POOL-C")) return 2; // Black-1, White-1
  }
  if (code === "CONE") {
    if (name.includes("CONE-A")) return 1;
    if (name.includes("CONE-B")) return 2;
    if (name.includes("CONE-C")) return 1;
  }
  if (code === "KING") {
    return 1;
  }
  if (code === "COOL") {
    return 1;
  }
  if (code === "EPOT") {
    if (name.includes("E.POT-A")) return 4;
    if (name.includes("E.POT-B")) return 3;
  }
  if (code === "BALL") {
    return 1;
  }
  if (code === "POTA") {
    return 1;
  }
  if (code === "POPPY") {
    return 1;
  }
  if (code === "TULIP") {
    return 1;
  }
  if (code === "LILLY") {
    return 1;
  }
  if (code === "SUNFLOWER") {
    return 1;
  }
  if (code === "PANSY") {
    if (name.includes("PANSY-A")) return 2;
    if (name.includes("PANSY-B")) return 2;
    if (name.includes("PANSY-C")) return 3;
  }
  if (code === "HOLLY") {
    return 1;
  }
  if (code === "ROSE") {
    return 1;
  }
  if (code === "GLORY") {
    if (name.includes("GLORY-B")) return 1;
    if (name.includes("GLORY-C")) return 2;
    if (name.includes("GLORY-D")) return 2;
    if (name.includes("GLORY-E")) return 1;
  }
  if (code === "STAR") {
    return 1;
  }
  if (code === "FLAX" || code === "FLX48") {
    return 1;
  }
  if (code === "DAISY") {
    if (name.includes("DAISY-A")) return 2;
    if (name.includes("DAISY-B")) return 1;
    if (name.includes("DAISY-C")) return 3;
  }
  if (code === "ORCHID") {
    if (name.includes("A")) return 4;
    if (name.includes("B")) return 3;
    if (name.includes("C")) return 6;
    if (name.includes("D")) return 5;
  }
  if (code === "JUPITER") {
    if (name.includes("A")) return 4;
    if (name.includes("B")) return 3;
    if (name.includes("C")) return 4;
    if (name.includes("D")) return 4;
  }
  if (code === "ORANGE") {
    if (name.includes("A")) return 3;
    if (name.includes("B")) return 3;
    if (name.includes("C")) return 4;
  }
  if (code === "LEAF SET 3PCS" || code === "LFS69" || code === "LFS70") {
    if (name.includes("A")) return 4;
    if (name.includes("B")) return 2;
    if (name.includes("C")) return 1;
  }
  if (code === "LEAF SET 2PCS") {
    if (name.includes("A")) return 1;
    if (name.includes("B")) return 2;
  }
  if (code === "IRIS") {
    return 1;
  }
  if (code === "PATATO") {
    return 1;
  }
  if (code === "BOAT") {
    if (name.includes("A")) return 2;
    if (name.includes("B")) return 2;
    if (name.includes("C")) return 2;
  }
  if (code === "JUNIPER") {
    if (name.includes("A")) return 3;
    if (name.includes("B")) return 1;
    if (name.includes("C")) return 4;
    if (name.includes("D")) return 4;
  }
  if (code === "VANILLA" || code === "VNL83") {
    if (name.includes("A")) return 3;
    if (name.includes("B")) return 4;
    if (name.includes("C")) return 4;
  }
  if (code === "JACK") {
    if (name.includes("A")) return 4;
    if (name.includes("B")) return 4;
    if (name.includes("C")) return 1;
  }
  if (code === "DRUM") {
    return 1;
  }
  if (code === "ARECA" || code === "ARC84") {
    if (name.includes("A")) return 4;
    if (name.includes("B")) return 7;
    if (name.includes("C")) return 8;
  }
  if (code === "PANDA") {
    return 1;
  }

  return 10; // Default stock level
}

function getSeedData(tableName: string) {
  if (tableName === 'products_dynamic') {
    return [
      { product_id: "FLX48", featured: true, new_arrival: true, active: true, display_order: 1, id: "dyn-flx48" },
      { product_id: "LFS70", featured: true, new_arrival: false, active: true, display_order: 2, id: "dyn-lfs70" },
      { product_id: "LFS69", featured: false, new_arrival: true, active: true, display_order: 3, id: "dyn-lfs69" },
      { product_id: "VNL83", featured: true, new_arrival: true, active: true, display_order: 4, id: "dyn-vnl83" },
      { product_id: "ARC84", featured: true, new_arrival: false, active: true, display_order: 5, id: "dyn-arc84" },
      { product_id: "ROCK", featured: true, new_arrival: true, active: true, display_order: 6, id: "dyn-rock" }
    ];
  }
  if (tableName === 'product_variants') {
    const variantsList: any[] = [];
    const staticProds = [...rawStaticProducts, ...rawStaticVases, ...rawStaticAuxiliary];
    staticProds.forEach((sp: any) => {
      const code = (sp.code as string).toUpperCase();
      if (sp.sizes && Array.isArray(sp.sizes) && sp.sizes.length > 0) {
        sp.sizes.forEach((s: any, idx: number) => {
          const price = Number(s.price ?? sp.price ?? 0);
          const mrp = Number(s.mrp ?? sp.mrp ?? price);
          const varName = s.name || `Size ${idx + 1}`;
          variantsList.push({
            id: `var-${code}-${idx}`,
            product_id: code,
            variant_name: varName,
            dimensions: s.dimensions || sp.dimensions || "",
            selling_price: price,
            original_price: mrp,
            stock_quantity: getInitialStock(code, varName),
            available: true,
            display_order: idx + 1
          });
        });
      } else {
        const price = Number(sp.price ?? 0);
        const mrp = Number(sp.mrp ?? price);
        const varName = "Standard";
        variantsList.push({
          id: `var-${code}-std`,
          product_id: code,
          variant_name: varName,
          dimensions: sp.dimensions || "",
          selling_price: price,
          original_price: mrp,
          stock_quantity: getInitialStock(code, varName),
          available: true,
          display_order: 1
        });
      }
    });
    return variantsList;
  }
  if (tableName === 'orders') {
    return [
      {
        id: "ord-1001",
        order_number: "VAS-1001",
        customer_name: "Ananya Sharma",
        customer_email: "ananya.sharma@example.com",
        customer_phone: "+91 98765 43210",
        shipping_address: "42 Lotus Boulevard, Bandra West, Mumbai 400050",
        items: [{ product_id: "FLX48", name: "Flax Series Tapered Vases", price: 5200, quantity: 1, size: 'D (21")' }],
        subtotal: 5200,
        discount_amount: 260,
        total_amount: 4940,
        order_status: "completed",
        payment_status: "paid",
        shipping_status: "delivered",
        tracking_number: "BLRD-9988231",
        created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
      }
    ];
  }
  return [];
}

class MockQueryBuilder {
  tableName: string;
  operation: 'select' | 'insert' | 'update' | 'upsert' | null = null;
  payload: any = null;
  filters: Array<{ column: string; value: any }> = [];
  sortColumn: string | null = null;
  sortAscending: boolean = false;

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  select(columns: string = "*") {
    if (!this.operation) {
      this.operation = 'select';
    }
    return this;
  }

  insert(payload: any) {
    this.operation = 'insert';
    this.payload = payload;
    return this;
  }

  update(payload: any) {
    this.operation = 'update';
    this.payload = payload;
    return this;
  }

  upsert(payload: any, options?: { onConflict: string }) {
    this.operation = 'upsert';
    this.payload = payload;
    return this;
  }

  eq(column: string, value: any) {
    this.filters.push({ column, value });
    return this;
  }

  order(column: string, options?: { ascending: boolean }) {
    this.sortColumn = column;
    this.sortAscending = options?.ascending ?? false;
    return this;
  }

  execute() {
    if (typeof window === 'undefined') {
      return { data: [], error: null };
    }

    const key = `vassio_db_${this.tableName}`;
    let items = [];
    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        items = JSON.parse(stored);
      } else {
        items = getSeedData(this.tableName);
        localStorage.setItem(key, JSON.stringify(items));
      }
    } catch (e) {
      items = [];
    }

    // 1. Process Insert
    if (this.operation === 'insert') {
      const newRow = {
        id: this.payload.id || `row-${Date.now()}-${Math.floor(Math.random() * 1000000)}`,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        ...this.payload
      };
      items.push(newRow);
      localStorage.setItem(key, JSON.stringify(items));
      return { data: [newRow], error: null };
    }

    // 2. Process Filters
    let filtered = [...items];
    this.filters.forEach(filter => {
      filtered = filtered.filter(item => {
        const itemVal = item[filter.column];
        if (typeof itemVal === 'string' && typeof filter.value === 'string') {
          return itemVal.toLowerCase() === filter.value.toLowerCase();
        }
        return itemVal === filter.value;
      });
    });

    // 3. Process Update
    if (this.operation === 'update') {
      const filteredIds = new Set(filtered.map(item => item.id));
      const updatedList = items.map((item: any) => {
        if (filteredIds.has(item.id)) {
          return { ...item, ...this.payload, updated_at: new Date().toISOString() };
        }
        return item;
      });
      localStorage.setItem(key, JSON.stringify(updatedList));
      const updatedData = filtered.map(item => ({ ...item, ...this.payload }));
      return { data: updatedData, error: null };
    }

    // 4. Process Upsert
    if (this.operation === 'upsert') {
      let conflictColName = "id";
      if (this.tableName === 'products_dynamic') {
        conflictColName = 'product_id';
      }
      const conflictVal = this.payload[conflictColName];
      let foundIdx = -1;
      if (conflictVal) {
        foundIdx = items.findIndex((item: any) => {
          const itemVal = item[conflictColName];
          if (typeof itemVal === 'string' && typeof conflictVal === 'string') {
            return itemVal.toLowerCase() === conflictVal.toLowerCase();
          }
          return itemVal === conflictVal;
        });
      }

      const newRow = {
        ...this.payload,
        updated_at: new Date().toISOString()
      };

      if (foundIdx > -1) {
        items[foundIdx] = { ...items[foundIdx], ...newRow };
      } else {
        newRow.id = newRow.id || `row-${Date.now()}`;
        newRow.created_at = newRow.created_at || new Date().toISOString();
        items.push(newRow);
      }

      localStorage.setItem(key, JSON.stringify(items));
      return { data: items, error: null };
    }

    // 5. Process Order/Sorting (for Select)
    if (this.sortColumn) {
      filtered.sort((a, b) => {
        let valA = a[this.sortColumn!];
        let valB = b[this.sortColumn!];
        if (this.sortColumn === 'created_at') {
          valA = new Date(valA).getTime();
          valB = new Date(valB).getTime();
        }
        if (this.sortAscending) {
          return valA > valB ? 1 : -1;
        } else {
          return valA < valB ? 1 : -1;
        }
      });
    }

    return { data: filtered, error: null };
  }

  async single() {
    const { data, error } = this.execute();
    const row = data && data[0] ? data[0] : null;
    return { data: row, error: row ? null : { message: "No row found" } };
  }

  async maybeSingle() {
    const { data, error } = this.execute();
    const row = data && data[0] ? data[0] : null;
    return { data: row, error: null };
  }

  then(onfulfilled?: (value: { data: any[]; error: any }) => any) {
    const result = this.execute();
    return Promise.resolve(result).then(onfulfilled);
  }
}

export const supabase: any = {
  auth: mockAuth,
  from(tableName: string) {
    return new MockQueryBuilder(tableName);
  }
};

// --- Dynamic Products ---

export async function dbFetchAllDynamicProducts(): Promise<DbDynamicProduct[] | null> {
  const { data, error } = await supabase.from('products_dynamic').select('*')
  if (error) {
    console.error("Error fetching dynamic products:", error)
    return null
  }
  return data
}

export async function dbFetchDynamicProductById(productId: string): Promise<DbDynamicProduct | null> {
  const { data, error } = await supabase.from('products_dynamic').select('*').eq('product_id', productId).single()
  if (error) {
    return null
  }
  return data
}

export async function dbUpsertDynamicProduct(product: Partial<DbDynamicProduct> & { product_id: string }): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase.from('products_dynamic').upsert(product, { onConflict: 'product_id' })
  if (error) {
    console.error(`Error upserting dynamic product ${product.product_id}:`, error)
    return { success: false, error: error.message }
  }
  return { success: true }
}

// --- Product Variants ---

export async function dbFetchAllVariants(): Promise<DbProductVariant[] | null> {
  const { data, error } = await supabase.from('product_variants').select('*')
  if (error) {
    console.error("Error fetching variants:", error)
    return null
  }
  return data
}

export async function dbFetchVariantsByProductId(productId: string): Promise<DbProductVariant[] | null> {
  const { data, error } = await supabase.from('product_variants').select('*').eq('product_id', productId)
  if (error) {
    console.error(`Error fetching variants for ${productId}:`, error)
    return null
  }
  return data
}

export async function dbUpsertVariant(variant: Partial<DbProductVariant> & { product_id: string }): Promise<{ success: boolean; error?: string }> {
  const payload = { ...variant }
  if (!payload.id || payload.id === '') {
    delete payload.id
  }
  
  const { error } = await supabase.from('product_variants').upsert(payload as any, { onConflict: 'id' })
  if (error) {
    console.error(`Error upserting variant:`, error)
    return { success: false, error: error.message }
  }
  return { success: true }
}

import { getProductByCode } from "@/data/products";
import type { ProductVariants, ProductSizeVariant, ProductColorVariant } from "@/types/variants";

const STORAGE_KEY = "vassio_variants_v1";

const COLOR_HEX_MAP: Record<string, string> = {
  "BLACK": "#1F1F1F",
  "WHITE": "#FFFFFF",
  "GREY": "#8B8B8B",
  "BROWN": "#7A4B3A",
  "BEIGE": "#D9C6A5",
  "GREEN": "#4A6B3D",
  "RED": "#B84A39",
  "YELLOW": "#E0C068",
  "BLACK & GREY": "#3D3D3D",
  "GREEN & GREY": "#4A5D4E",
  "ORANGE": "#D96B27",
  "PLAIN": "#5C6B5E",
  "SHINING": "#3B82F6",
};

export function mapColorNamesToVariants(colorNames: string[]): ProductColorVariant[] {
  return colorNames.map((name, idx) => {
    const cleanName = name.trim();
    const upper = cleanName.toUpperCase();
    const hex = COLOR_HEX_MAP[upper] || "#739D30";
    const slug = cleanName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return {
      id: slug || `color-${idx}`,
      name: cleanName,
      hex,
      available: true,
      displayOrder: idx,
    };
  });
}

// ─── Local persistence helpers ─────────────────────────────────────────────────

function readAllVariants(): Record<string, ProductVariants> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeAllVariants(map: Record<string, ProductVariants>): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch { /* quota exceeded */ }
}

// ─── Public API ────────────────────────────────────────────────────────────────

export function getVariants(productCode: string): ProductVariants {
  const all = readAllVariants();
  if (all[productCode]) return all[productCode];
  return buildDefault(productCode);
}

export function saveVariants(productCode: string, variants: ProductVariants): void {
  const all = readAllVariants();
  all[productCode] = { ...variants, updatedAt: new Date().toISOString() };
  writeAllVariants(all);
}

export function toggleSizeAvailability(productCode: string, sizeId: string, available: boolean): void {
  const variants = getVariants(productCode);
  variants.sizes = variants.sizes.map((s) =>
    s.id === sizeId ? { ...s, available } : s
  );
  saveVariants(productCode, variants);
}

export function toggleColorAvailability(productCode: string, colorId: string, available: boolean): void {
  const variants = getVariants(productCode);
  variants.colors = variants.colors.map((c) =>
    c.id === colorId ? { ...c, available } : c
  );
  saveVariants(productCode, variants);
}

export function addSizeVariant(productCode: string, size: Omit<ProductSizeVariant, "displayOrder">): void {
  const variants = getVariants(productCode);
  const maxOrder = variants.sizes.reduce((m, s) => Math.max(m, s.displayOrder), -1);
  variants.sizes.push({ ...size, displayOrder: maxOrder + 1 });
  saveVariants(productCode, variants);
}

export function addColorVariant(productCode: string, color: Omit<ProductColorVariant, "displayOrder">): void {
  const variants = getVariants(productCode);
  const maxOrder = variants.colors.reduce((m, c) => Math.max(m, c.displayOrder), -1);
  variants.colors.push({ ...color, displayOrder: maxOrder + 1 });
  saveVariants(productCode, variants);
}

export function removeSizeVariant(productCode: string, sizeId: string): void {
  const variants = getVariants(productCode);
  variants.sizes = variants.sizes.filter((s) => s.id !== sizeId);
  saveVariants(productCode, variants);
}

export function removeColorVariant(productCode: string, colorId: string): void {
  const variants = getVariants(productCode);
  variants.colors = variants.colors.filter((c) => c.id !== colorId);
  saveVariants(productCode, variants);
}

// ─── Internal helpers ──────────────────────────────────────────────────────────

function buildDefault(productCode: string): ProductVariants {
  const prod = getProductByCode(productCode) as any;
  if (prod && prod.sizes && Array.isArray(prod.sizes) && prod.sizes.length > 0) {
    const sizes: ProductSizeVariant[] = prod.sizes.map((s: any, idx: number) => {
      let label = s.label || s.name || `Size ${idx + 1}`;
      if (label.includes("-")) {
        const parts = label.split("-");
        label = parts[parts.length - 1].trim();
      }
      if (label.toUpperCase().startsWith("SIZE ")) {
        label = label.substring(5).trim();
      }
      const available = (s.stock ?? 1) > 0;
      return {
        id: s.name || label,
        label,
        dimensions: s.dimensions || "",
        available,
        displayOrder: idx,
      };
    });

    const firstSize = prod.sizes[0];
    const firstColors = firstSize?.colors || (prod.color ? prod.color.split("/").map((c: string) => c.trim()) : ["Black"]);
    const colors: ProductColorVariant[] = mapColorNamesToVariants(firstColors);

    return {
      productCode,
      sizes,
      colors,
    };
  }

  const colorsList = prod?.color ? prod.color.split("/").map((c: string) => c.trim()) : ["Black"];
  return {
    productCode,
    sizes: [{ id: "Standard", label: "Standard", available: true, displayOrder: 0, dimensions: prod?.dimensions || "" }],
    colors: mapColorNamesToVariants(colorsList),
  };
}

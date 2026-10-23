import { getCategories, getProducts } from "@/lib/api";
import { formatPct, formatPrice, formatUnit, getDir } from "@/lib/format";

export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <main className="space-y-2 p-8">
      <p>
        পণ্য: {products.length}, ক্যাটাগরি: {categories.length}
      </p>
      {products.slice(0, 6).map((p) => (
        <p key={p.id}>
          {p.image} {p.nameBn} — {formatPrice(p.today)} ({formatUnit(p.unit)}){" "}
          {getDir(p)} {formatPct(p.change.pct)}
        </p>
      ))}
    </main>
  );
}
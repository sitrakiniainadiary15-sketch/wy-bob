import Link from "next/link";
import { connectDB } from "@/app/lib/db";
import Product from "@/app/models/Product";
import StockManager from "./StockManager";
import styles from "./products.module.css";

export default async function AdminProducts() {
  await connectDB();
  const products = await Product.find({}).sort({ name: 1 }).lean();

  // Sérialisation MongoDB → JSON simple
  const serialized = products.map((p) => ({
    _id:       p._id.toString(),
    name:      p.name      ?? "",
    color:     p.color     ?? "",
    colorCode: p.colorCode ?? "",
    image:     p.image     ?? "",
    price:     p.price     ?? 0,
    stock:     p.stock     ?? 0,
  }));

  const outOfStock = serialized.filter((p) => p.stock === 0).length;

  return (
    <div className={styles.container}>
      <Link href="/admin/dashboard" className={styles.backBtn}>
        ← Dashboard
      </Link>

      <div className={styles.header}>
        <h1 className={styles.title}>Gestion des stocks</h1>
        {outOfStock > 0 && (
          <div className={styles.alertBanner}>
            <span className={styles.alertDot} />
            {outOfStock} produit{outOfStock > 1 ? "s" : ""} en rupture de stock
          </div>
        )}
      </div>

      <StockManager initialProducts={serialized} />
    </div>
  );
}

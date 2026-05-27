import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import Product from "@/app/models/Product";

export async function GET() {
  await connectDB();

  await Product.deleteMany({});

  await Product.insertMany([
    { name: "WYBOB Essentials", color: "Bleu",   colorCode: "#1a4fa0", image: "/images/wybob_bleu.webp",   price: 85, stock: 10 },
    { name: "WYBOB Essentials", color: "Blanc",  colorCode: "#f5f5f0", image: "/images/wybob_blanc.webp",  price: 85, stock: 10 },
    { name: "WYBOB Essentials", color: "Jaune",  colorCode: "#e6a817", image: "/images/wybob_jaune.webp",  price: 85, stock: 10 },
    { name: "WYBOB Essentials", color: "Rouge",  colorCode: "#c0392b", image: "/images/wybob_rouge.webp",  price: 85, stock: 10 },
  ]);

  return NextResponse.json({ success: true, message: "Produits initialisés !" });
}
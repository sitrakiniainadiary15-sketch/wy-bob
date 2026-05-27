"use client";

import { useCart } from "@/components/panier-context";
import StripeWrapper from "./StripeWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "../page.css";
import "./checkout.css";

export default function CheckoutPage() {
  const { cartTotal } = useCart();
  const { data: session, status } = useSession();
  const router = useRouter();

  const TVA_RATE = 0.20;
  const tva = Math.round(cartTotal * TVA_RATE);
  const livraison = 25;
  const total = cartTotal + tva + livraison;

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login?redirect=/checkout");
    }
  }, [status, router]);

  // Chargement en cours
  if (status === "loading") {
    return (
      <div className="container">
        <Navbar />
        <div className="checkoutZone" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "400px" }}>
          <p>Chargement...</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Non connecté
  if (status === "unauthenticated") return null;

  return (
    <div className="container">
      <Navbar />
      <div className="checkoutZone">
        <StripeWrapper total={total} />
      </div>
      <Footer />
    </div>
  );
}
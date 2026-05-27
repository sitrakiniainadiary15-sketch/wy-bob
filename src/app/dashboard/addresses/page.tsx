import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";
import AddressesClient from "../components/AddressesClient";

export default async function AddressesPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/auth/login");

  await connectDB();
  const user = await User.findOne({ email: session.user.email }).lean() as any;

  const addresses = (user?.addresses ?? []).map((a: any) => ({
    label:    a.label    ?? "",
    fullName: a.fullName ?? "",
    street:   a.street   ?? "",
    zip:      a.zip      ?? "",
    city:     a.city     ?? "",
    country:  a.country  ?? "",
  }));

  return (
    <div>
      <h1 className="db-page-title">Mes adresses</h1>
      <div className="db-wrapper">
        <div className="db-card">
          <p className="db-section-title">Adresses de livraison</p>
          <AddressesClient initialAddresses={addresses} />
        </div>
      </div>
    </div>
  );
}

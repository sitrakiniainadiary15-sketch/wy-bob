"use client";
import { signIn, getSession, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../../page.css";
import "./login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/dashboard";
  const { data: session } = useSession();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (session?.user && !loading) {
      router.push(session.user?.role === "admin" ? "/admin" : redirectTo);
    }
  }, [session, router, loading]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {}
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function validateEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    if (!validateEmail(email)) {
      setError("Adresse e-mail invalide");
      return;
    }

    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères");
      return;
    }

    setLoading(true);
    const res = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);

    if (res?.error) {
      setError("Email ou mot de passe incorrect");
      return;
    }

    const updatedSession = await getSession();
    router.push(updatedSession?.user?.role === "admin" ? "/admin" : redirectTo);
  }

  return (
    <div className="container">
      <Navbar />

      <div className="loginZone">
        <div className="login-card" ref={menuRef}>

          <form onSubmit={handleLogin}>
            <div className="login-inputs">
              <div className="login-field">
                <label>Adresse e-mail</label>
                <div className="login-input-wrap">
                  <span>@</span>
                  <input
                    type="email"
                    placeholder="Tom.exemple@gmail.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    autoComplete="off"
                    required
                  />
                </div>
              </div>

              <div className="login-field">
                <label>Mot de passe</label>
                <div className="login-input-wrap">
                  <span>🔒</span>
                  <input
                    type={showPwd ? "text" : "password"}
                    placeholder="••••••••••••"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                  <button type="button" onClick={() => setShowPwd(!showPwd)}>
                    {showPwd ? "🙈" : "👁"}
                  </button>
                </div>
              </div>
            </div>

            <div className="login-actions">
              <div className="login-options">
                <label><input type="checkbox" /> Se souvenir de moi</label>
                <Link href="/auth/forgot-password">Mot de passe oublié</Link>
              </div>

              {error && <p className="login-error">{error}</p>}

              <button
                type="submit"
                className="login-btn"
                disabled={loading || !email || !password}
              >
                {loading ? "Connexion..." : "Se connecter"}
              </button>
            </div>
          </form>

          <div className="login-footer">
            <p>Pas encore de compte ?</p>
            <Link href="/auth/register">Créer un compte</Link>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
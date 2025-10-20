"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Signup démo: on sauvegarde et on connecte directement
    localStorage.setItem(
      "vyrelio_demo_user",
      JSON.stringify({ email: email || "demo@client.vy" })
    );
    router.replace("/dashboard/overview");
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-md px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Créer un compte</h1>
        <p className="mt-2 text-gray-700">Espace démo: vos métriques démarrent à 0.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-xl border px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="vous@exemple.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-xl border px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700"
          >
            {loading ? "Création…" : "Créer mon compte"}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Déjà inscrit ? {" "}
          <Link href="/dashboard/signin" className="text-emerald-700 font-semibold">Se connecter</Link>
        </p>
      </div>
    </main>
  );
}

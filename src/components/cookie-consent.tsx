"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { readConsent, writeConsent } from "@/lib/consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const c = readConsent();
    setVisible(!c);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4">
      <div className="mx-auto max-w-3xl rounded-2xl border bg-white p-4 shadow-lg sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-gray-700">
            <p className="font-semibold text-gray-900">Cookies</p>
            <p className="mt-1">
              Nous utilisons des cookies nécessaires au fonctionnement du site et, avec votre accord, des cookies marketing pour afficher
              l’intégration Calendly. Vous pouvez changer d’avis à tout moment. En savoir plus dans notre {" "}
              <Link href="/politique-de-cookies" className="text-emerald-700 underline">
                Politique de cookies
              </Link>
              .
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Button
              variant="outline"
              onClick={() => {
                writeConsent(false);
                setVisible(false);
              }}
            >
              Refuser
            </Button>
            <Button
              onClick={() => {
                writeConsent(true);
                setVisible(false);
              }}
            >
              Accepter tout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

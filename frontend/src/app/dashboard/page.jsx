"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardRedirect() {
  const router = useRouter();

  // Aquí colocarías la detección real del rol (por sesión o token)
  const role = "trabajador"; // Simulado

  useEffect(() => {
    router.push(`/dashboard/${role}`);
  }, []);

  return <p className="text-center p-10">Cargando dashboard...</p>;
}

"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (!role) return alert("Selecciona un rol");

    router.push(`/dashboard/${role}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between 
                       py-24 px-12 bg-white dark:bg-black shadow-md rounded-lg">
        
        <Image
          className="dark:invert mb-6"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">
          Iniciar Sesión
        </h1>

        <select
          onChange={(e) => setRole(e.target.value)}
          className="mt-6 w-full border p-3 rounded-md text-black"
        >
          <option value="">Selecciona tu Rol</option>
          <option value="trabajador">Trabajador</option>
          <option value="supervisor">Supervisor</option>
          <option value="administrador">Administrador</option>
        </select>

        <button
          onClick={handleLogin}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full w-full text-center hover:bg-blue-700"
        >
          Entrar
        </button>
      </main>
    </div>
  );
}

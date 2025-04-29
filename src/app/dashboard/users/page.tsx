import { auth } from "@/auth";
import ProfilePage from "@/components/users/profile";
import { redirect } from "next/navigation";
import { FC } from "react";

interface PageProps {}

/**
Componente `Page` – Vista de productos del panel de administrador.

Muestra una cuadrícula de productos disponibles, cada uno con su nombre, descripción, imagen y precio.
Si el usuario es administrador (`isAdmin`), se muestran opciones para crear y eliminar productos.

Funcionalidades:
- Visualización de una lista de productos con sus detalles.
- Botón para crear un nuevo producto (solo visible para administradores).
- Menú de opciones con acción de eliminación por producto (solo para administradores).

@component
@returns {JSX.Element} Interfaz de gestión de productos.
*/


const Page: FC<PageProps> = async ({}) => {

  const session = await auth()

  if(session?.user.role === "ADMIN"){
    redirect('/dashboard/admin')
  }

  return (
    <main className="text-white bg-[#0f0f0f] w-full min-h-svh flex flex-col gap-10 p-7">
      <header className="flex flex-col gap-3 font-bold">
        <h1 className="text-3xl">
          Bienvenido a la seccion de tu perfil.
        </h1>
        <p className="text-xl">
          Que bueno es verte por aca, {session?.user.name}
        </p>
      </header>
      <ProfilePage />
    </main>
  );
};

export default Page;

import { auth } from "@/auth";
import { UsersTableAdmin } from "@/components/admin/usersTable";
import { CreateUserModal } from "@/components/dashboard/CreateUserModal";
import { redirect } from "next/navigation";
import { FC } from "react";

interface PageProps {}

/**
 * Componente `Page` – Vista de usuarios del panel de administrador.
 *
 * Muestra una cuadrícula de usuarios disponibles, cada uno con su nombre, correo electrónico, edad y rol.
 * Si el usuario tiene el rol de "USER", se redirige a la vista de usuarios estándar.
 *
 * Funcionalidades:
 * - Visualización de una lista de usuarios con sus detalles.
 * - Redirección basada en el rol del usuario autenticado.
 *
 * @component
 * @returns {JSX.Element} Interfaz de gestión de usuarios.
 */

const Page: FC<PageProps> = async ({}) => {
  const session = await auth();

  if (session?.user.role === "USER") {
    redirect("/dashboard/users");
  }

  return (
    <main className="text-white bg-[#050505] w-full min-h-svh flex justify-center">
      <div className="w-full max-w-6xl px-5 md:px-10 flex flex-col gap-6 py-16">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Usuarios</h1>
          <CreateUserModal />
        </div>
        <UsersTableAdmin />
      </div>
    </main>
  );
};

export default Page;
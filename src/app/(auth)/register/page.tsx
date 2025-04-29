"use client";

import { RegisterCredentials } from "@/actions/register";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/schemas/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useEffect, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface PageProps {}

/**
Componente `Page` – Página de Registro de Usuarios.

Este componente permite a nuevos usuarios crear una cuenta llenando un formulario con nombre, apellido, correo y contraseña.
Valida los datos usando `zod` y maneja el envío del formulario usando `react-hook-form`.

Funcionalidades:
- Validación de campos con `registerSchema`.
- Envío de datos al backend a través de la función `RegisterCredentials`.
- Muestra una pantalla de carga durante el registro.
- Redirección automática según el rol del usuario después del registro.

@component
@returns {JSX.Element} Interfaz de registro de usuario.
*/


const Page: FC<PageProps> = ({}) => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const router = useRouter()
  const session = useSession()
  
  useEffect(() => {
    if(session.status !== "authenticated") return
  
    if(session.data.user.role === "ADMIN"){
      router.push("/dashboard/admin")
    }else{
      router.push("/dashboard/users")
    }
  
  }, [session])

  function onSubmit(values: z.infer<typeof registerSchema>) {
    startTransition(() => {
      RegisterCredentials(values)
        .then((res) => {
          if (res?.error) {
            toast(res.error as string)
          } else {
            toast(res?.success);
            router.push(res.data)
          }
        })
    })
  }
  return (
    <main className="w-full h-svh flex items-center justify-center text-white">
      {isPending && (
        <div className="w-full absolute h-full flex flex-1 justify-center items-center bg-black/50 z-20">
          <div className="animate-spin rounded-full size-18 border-b-2 border-[#881414]"></div>
        </div>
      )}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="rounded-2xl bg-neutral-950 border !border-white/20 py-4 px-6 pb-5 w-full max-w-[400px] flex flex-col gap-3 items-center justify-center">
        <div className="w-full text-muted-foreground">
          <Link
            href="/"
            className="flex items-center group text-xs transition "
          >
            <ChevronLeft
              size={16}
              className="group-hover:-translate-x-1 transition"
            />
            Regresar
          </Link>
        </div>
        <h1 className="text-center font-bold text-2xl">Registrarse</h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 w-full"
          >
            <div className="flex gap-3">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Juan"
                        className="!border-white/20 placeholder:text-white/50"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Pérez"
                        className="!border-white/20 placeholder:text-white/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ejemplo@email.com"
                      className="!border-white/20 placeholder:text-white/50"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="********"
                      type="password"
                      className="!border-white/20 placeholder:text-white/50"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full rounded-lg px-5 py-3 mt-4 bg-violet-600 hover:bg-violet-500 cursor-pointer text-white"
            >
              Registrarse
            </Button>
          </form>
        </Form>

        <p className="text-sm text-white/60 mt-2">
          Ya tienes una cuenta?{" "}
          <Link href={"/login"} className="text-violet-500 underline">
            Inicia Sesión
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Page;

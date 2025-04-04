"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface PageProps {}

const formSchema = z.object({
  firstName: z.string().min(1, "Por favor, introduce tu nombre"),
  lastName: z.string().min(1, "Por favor, introduce tu apellido"),
  email: z.string().email("Por favor, introduce un correo electrónico válido"),
  password: z.string().min(1, "Por favor, introduce una contraseña"),
});

const Page: FC<PageProps> = ({}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <main className="w-full h-svh flex items-center justify-center">
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
                    <FormLabel>Email</FormLabel>
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

"use client";

import { User } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState, useTransition } from "react";
import { CreateUser } from "@/actions/getUsers";
import { toast } from "sonner";
import { LoaderTransparent } from "../loader";

const UserSchema = z.object({
  firstName: z.string().min(1, { message: "El nombre es requerido" }),
  lastName: z.string().min(1, { message: "El apellido es requerido" }),
  email: z.string().email({ message: "El email es inválido" }),
  age: z.number({
    message: "La edad es requerida",
  }),
  role: z.enum(["USER", "ADMIN"]),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

/**
 * @file UserCard.tsx
 * @description This file contains the `UserCard` component, which displays user information and provides functionality to edit or delete a user.
 */

/**
 * @component
 * @name UserCard
 * @description Un componente de React que muestra la información de un usuario en formato de tarjeta. Incluye opciones para editar o eliminar al usuario.
 *
 * @param {User} user - El objeto usuario que contiene las siguientes propiedades:
 *   @param {string} user.firstName - El nombre del usuario.
 *   @param {string} user.lastName - El apellido del usuario.
 *   @param {string} user.email - La dirección de correo electrónico del usuario.
 *   @param {number} user.age - La edad del usuario.
 *   @param {string} user.role - El rol del usuario (por ejemplo, "USER", "ADMIN").
 *   @param {Date} user.createdAt - La fecha en que se creó el usuario.
 *
 * @returns {JSX.Element} Una tarjeta que muestra la información del usuario con opciones para editar o eliminar.
 *
 * @example
 * <UserCard
 *   user={{
 *     firstName: "John",
 *     lastName: "Doe",
 *     email: "john.doe@example.com",
 *     age: 30,
 *     role: "USER",
 *     createdAt: new Date(),
 *   }}
 * />
 */
export const CreateUserModal = () => {
  const [isPending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: undefined,
      role: "USER",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof UserSchema>) {
    startTransition(() => {
      CreateUser(values)
        .then(() => {
          toast.success("User created successfully.")
          setIsOpen(false)
        })
        .catch((err) => {
          toast.error(err.message)
        })
    })
  }

  const [isOpen, setIsOpen] = useState(false);
  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
    setTimeout(() => {
      form.reset();
    }, 150);
  };
  const [showDelete, setShowDelete] = useState(false);

  return (
    <>
      {isPending && <LoaderTransparent />}
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="bg-violet-500 hover:bg-violet-500/75 rounded-xl cursor-pointer">
          Crear usuario
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black text-white border-white/20">
        <DialogHeader>
          <DialogTitle>Crear usuario</DialogTitle>
          <DialogDescription className="text-sm text-white/60">
            Editar datos del usuario.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 w-full"
          >
            <div className="flex items-start gap-3">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John"
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
                  <FormItem>
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Doe"
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
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Edad</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="34"
                      className="!border-white/20 placeholder:text-white/50"
                      inputMode="decimal"
                      pattern="[0-9]*"
                      {...field}
                      value={field.value ?? ""}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value ? parseInt(e.target.value, 10) : null
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rol</FormLabel>
                  <select
                    className="bg-black text-white border border-white/20 rounded-lg p-2 w-full"
                    {...field}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  >
                    <option value="USER">Usuario</option>
                    <option value="ADMIN">Administrador</option>
                  </select>
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
                      type="password"
                      placeholder="********"
                      className="!border-white/20 placeholder:text-white/50"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="submit"
                className="rounded-xl hover:bg-violet-500/75 bg-violet-500 cursor-pointer w-full"
              >
                Guardar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
    </>
  );
};

"use client";

import { User } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { EllipsisVertical, Pencil, Trash } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
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
import { useEffect, useState, useTransition } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "../ui/alert-dialog";
import { DeleteUser, UpdateUser } from "@/actions/getUsers";
import { updateUserAdmin } from "@/schemas/updateUser";
import { toast } from "sonner";
import { LoaderTransparent } from "../loader";

const UserSchema = z.object({
  firstName: z.string().min(1, { message: "El nombre es requerido" }),
  lastName: z.string().min(1, { message: "El apellido es requerido" }),
  email: z.string().email({ message: "El email es inválido" }),
  age: z.number().nullable(),
  role: z.enum(["USER", "ADMIN"]),
  image: z.string().optional()
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
 *   @param {string} user.image - La fecha en que se creó el usuario.
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
export const UserCard = (user: User) => {
  const [isPending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof updateUserAdmin>>({
    resolver: zodResolver(updateUserAdmin),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age as number,
      role: user.role,
    },
  });

  function onSubmit(values: z.infer<typeof updateUserAdmin>) {
    startTransition(() => {
      UpdateUser(values)
        .then(() => {
          toast.success("User updated successfully.")
          setIsOpen(false)
        })
        .catch((err) => {
          toast.error(err?.message)
        })
    })
  }

  const handleDelete = () => {
    startTransition(() => {
      DeleteUser(user.id)
      .then(() => {
        toast.success("User deleted successfully.")
        setIsOpen(false)
      })
      .catch((err) => {
        toast.error(err?.message)
      })
    })
  }

  const [isOpen, setIsOpen] = useState(false);
  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
    setTimeout(() => {
      form.reset({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        age: user.age as number,
        role: user.role,
      });
    }, 150);
  };
  const [showDelete, setShowDelete] = useState(false);

  // ISSUE https://github.com/shadcn-ui/ui/issues/4900
  // FIX ⬇️
  useEffect(() => {
    // Callback to handle DOM changes
    const handleDomChanges = (mutationsList: MutationRecord[]) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "style"
        ) {
          const pointerEvents = document.body.style.pointerEvents;
          console.log("Pointer Events changed:", pointerEvents);

          // Reset pointer-events if set to 'none'
          if (pointerEvents === "none") {
            document.body.style.pointerEvents = "";
            console.log("Pointer Events reset to default");
          }
        }
      }
    };

    // Create a MutationObserver instance
    const observer = new MutationObserver(handleDomChanges);

    // Start observing the body element for style attribute changes
    observer.observe(document.body, {
      attributes: true, // Watch for attribute changes
      attributeFilter: ["style"], // Only observe changes to 'style'
    });

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, []); // Empty dependency array ensures it runs once

  return (
    <>
      {isPending && <LoaderTransparent />}
      <div className="relative border border-[#1a1a1a] rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform px-4 pt-6 pb-7 flex flex-col items-center justify-center">
      <div className="absolute top-2 right-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-white  rounded-full p-1 bg-black border-white/20 border cursor-pointer outline-none">
              <EllipsisVertical size={20} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#1a1a1a] text-white border-white/20">
            <DropdownMenuItem
              className="hover:bg-red-500/20  cursor-pointer"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <Pencil />
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-red-500/20 text-red-400 cursor-pointer"
              onClick={() => {
                setShowDelete(true);
              }}
            >
              <Trash />
              Eliminar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-full  border-white/20 border size-16 flex items-center justify-center">
        <span className="text-lg">
          {user.firstName.charAt(0).toUpperCase()}
          {user.lastName.charAt(0).toUpperCase()}
        </span>
      </div>

      <p className="mt-2">
        <span className="text-lg font-semibold mt-2">
          {user.firstName} {user.lastName}
        </span>
      </p>

      <p className="text-sm text-gray-400">{user.email}</p>

      <div className="flex items-center justify-center mt-3 space-x-2">
        <span className="bg-sky-950 text-sky-300 px-1.5 py-0.5 text-xs rounded-full font-semibold">
          {user.age} años
        </span>
        <span className="bg-emerald-950 text-emerald-300 px-1.5 py-0.5 text-xs rounded-full font-semibold">
          {user.createdAt.toLocaleDateString()}
        </span>
      </div>

      {/* EDIT USER MODAL */}
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px] bg-black text-white border-white/20">
          <DialogHeader>
            <DialogTitle>
              {user.firstName} {user.lastName}
            </DialogTitle>
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
      {/* DELETE DIALOG */}
      <AlertDialog open={showDelete} onOpenChange={setShowDelete}>
        <AlertDialogContent className="bg-black text-white border-white/20">
          <AlertDialogHeader>
            <AlertDialogTitle>
              ¿Estás seguro de que deseas eliminar este usuario?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. Asegúrate de que realmente
              deseas eliminar este usuario de forma permanente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="">
            <AlertDialogCancel className="flex-1 text-white border-white/20 bg-black hover:opacity-65">
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="flex-1 bg-rose-500 text-white hover:bg-rose-500/65">
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
    </>
  );
};

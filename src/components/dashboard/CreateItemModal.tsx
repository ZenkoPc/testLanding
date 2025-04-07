"use client";

import { Dialog, DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { FC } from "react";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { PlusCircle } from "lucide-react";

interface CreateItemModalProps {}

const itemSchema = z.object({
  name: z.string().min(1, { message: "El nombre es requerido" }),
  description: z.string().min(1, { message: "La descripción es requerida" }),
  price: z.coerce
    .number()
    .positive({ message: "El precio debe ser mayor a 0" }),
  imageUrl: z.string().url({ message: "La URL de la imagen es inválida" }),
});

const CreateItemModal: FC<CreateItemModalProps> = ({}) => {
  const form = useForm<z.infer<typeof itemSchema>>({
    resolver: zodResolver(itemSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      imageUrl: "",
    },
  });

  function onSubmit(values: z.infer<typeof itemSchema>) {
    console.log("Nuevo producto creado:", values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-xl hover:bg-violet-500/75 bg-violet-500 cursor-pointer">
          <PlusCircle />
          Nuevo <span className="hidden sm:inline-block">producto</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black text-white border-white/20">
        <DialogHeader>
          <DialogTitle>Nuevo producto</DialogTitle>
          <DialogDescription className="text-sm text-white/60">
            Agrega un nuevo producto a tu tienda. Asegúrate de que toda la
            información sea correcta antes de guardar.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 w-full"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Camiseta Negra"
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Una camiseta básica negra, cómoda y elegante."
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
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Precio</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="29.99"
                      className="!border-white/20 placeholder:text-white/50"
                      inputMode="decimal"
                      pattern="[0-9]*"
                      {...field}
                      value={field.value === 0 ? "" : field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL de la imagen</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://via.placeholder.com/150"
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
  );
};

export default CreateItemModal;

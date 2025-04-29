"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, SendIcon, User } from "lucide-react";
import { useSession } from "next-auth/react";
import { BorderBeam } from "../magicui/border-beam";

export default function ProfilePage() {
  const session = useSession();

  const [previewUrl, setPreviewUrl] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  };

  const handleImagePreview = () => {};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar los datos en un backend
    alert("Perfil actualizado correctamente");
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Mi Perfil</h1>

      <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
        <Card className="border-0 relative shadow-sm shadow-[#eaff9d]">
          <BorderBeam
            duration={6}
            size={400}
            className="from-transparent via-red-500 to-transparent"
          />
          <CardHeader>
            <CardTitle className="text-2xl">Imagen de Perfil</CardTitle>
            <CardDescription className="text-lg">
              Actualiza tu imagen de perfil
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <Avatar className="w-32 h-32">
              <AvatarImage
                src={previewUrl || session.data?.user.image}
                alt="Imagen de perfil"
              />
              <AvatarFallback className="text-4xl">
                <User className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>

            <div className="w-full space-y-2">
              <Label htmlFor="imageUrl">URL de la imagen</Label>
              <div className="flex gap-2 flex-col">
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="https://ejemplo.com/imagen.jpg"
                  defaultValue={session.data?.user.image}
                  onChange={handleChange}
                  className="placeholder:text-[#636363]"
                />
                <Button
                  type="button"
                  variant="default"
                  onClick={handleImagePreview}
                  className="max-w-max border hover:bg-[#444444] cursor-pointer"
                >
                  <Search />
                  Vista previa
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Ingresa la URL de tu imagen de perfil
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 relative shadow-sm shadow-[#eaff9d]">
          <BorderBeam
            duration={6}
            size={400}
            className="from-transparent via-red-500 to-transparent"
          />
          <CardHeader>
            <CardTitle className="text-2xl">Datos Personales</CardTitle>
            <CardDescription className="text-lg">Actualiza tu información personal</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre"
                  defaultValue={session.data?.user?.name?.split(" ")[0] as string}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="apellido">Apellido</Label>
                <Input
                  id="apellido"
                  name="apellido"
                  placeholder="Tu apellido"
                  defaultValue={session.data?.user?.name?.split(" ")[1] as string}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edad">Edad</Label>
                <Input
                  id="edad"
                  name="edad"
                  type="number"
                  placeholder="Tu edad"
                  defaultValue={session.data?.user?.age}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                className="w-full mt-6 bg-emerald-500 max-w-max cursor-pointer hover:bg-emerald-600"
              >
                <SendIcon />
                Guardar Cambios
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

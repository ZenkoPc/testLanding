"use client";

import type React from "react";

import { useEffect, useState, useTransition } from "react";
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
import { SendIcon, User } from "lucide-react";
import { BorderBeam } from "../magicui/border-beam";
import { DefaultSession } from "next-auth";
import { Loader } from "../loader";
import { UpdateUser } from "@/actions/updateUser";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

type ExtendedUser = DefaultSession["user"] & {
    role: "ADMIN" | "USER" | unknown,
    age?: number,
    image?: string,
    firstname: string,
    lastname: string
}

export default function ProfilePage({ user }:{ user: ExtendedUser | undefined }) {
  const [previewUrl, setPreviewUrl] = useState("");
  const [profile, setProfile] = useState(user)
  const [isPending, startTransition] = useTransition()
  const session = useSession()

  useEffect(() => {
    setProfile(user)
  }, [user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreviewUrl(e.currentTarget.value)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    startTransition(() => {
        UpdateUser({
            firstname: (form.elements.namedItem('nombre') as HTMLInputElement).value,
            lastname: (form.elements.namedItem('apellido') as HTMLInputElement).value,
            age: parseInt((form.elements.namedItem('edad') as HTMLInputElement).value),
            image: previewUrl
        })
            .then((res) => {
                if(res.error){
                    toast.error(res.error)
                }
                if(res.success){
                    toast.success("Updated user successfully.")
                    session.update({
                        user: {
                            ...user,
                            ...res.success
                        }
                    })
                    setProfile({
                        ...res.success as ExtendedUser
                    })
                }
            })
    })
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
        {isPending && <Loader />}
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
                src={previewUrl || profile?.image}
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
                  defaultValue={profile?.image}
                  onChange={handleChange}
                  className="placeholder:text-[#636363]"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Ingresa la URL de tu imagen de perfil, se mostrara el preview automaticamente
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
                  defaultValue={profile?.firstname}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="apellido">Apellido</Label>
                <Input
                  id="apellido"
                  name="apellido"
                  placeholder="Tu apellido"
                  defaultValue={profile?.lastname}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edad">Edad</Label>
                <Input
                  id="edad"
                  name="edad"
                  type="number"
                  placeholder="Tu edad"
                  defaultValue={profile?.age}
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

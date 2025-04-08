export const metadata = {
  title: "Registro - Registro de Usuarios",
  description:
    "Registrate en la plataforma para la gestión de servicios con sistema de roles de usuario mas confiable y rapida que jamas has visto",
};

/**
Componente `RegisterLayout` – Layout base para la página de registro.

Este componente define la estructura general de la vista de registro de usuarios.
Se utiliza para envolver los elementos de la página `/register`.

También exporta metadatos como título y descripción para mejorar el SEO.

@param {Object} props - Props del layout.
@param {React.ReactNode} props.children - Elementos hijos que serán renderizados dentro del layout.

@returns {JSX.Element} Layout renderizado para la página de registro. */

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
    return(
        <>
            {children}
        </>
    )
}
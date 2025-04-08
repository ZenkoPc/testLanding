/**
 * Layout de la página de inicio de sesión.
 * 
 * Este componente define el layout específico para la ruta de login,
 * incluyendo metadatos para SEO y compatibilidad con Next.js. */

export const metadata = {
  title: "Login - Iniciar Sesion",
  description:
    "Inicia sesion en la plataforma para la gestión de servicios con sistema de roles de usuario mas confiable y rapida que jamas has visto",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        {children}
    </>
  );
}
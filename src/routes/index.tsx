//mudanças: removemos o botoa que estava inutil, criamos uma p;agina com a logo, descriçao e dois links de navegaçao usando LINK do TaskStackRouter
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

const PITANG_LOGO = "https://www.pitang.com/o/pitang-theme/images/logo-pitang.png";

function RouteComponent() {
  return (
    <div
      className="min-h-screen text-white flex flex-col items-center justify-center gap-8 px-4"
      style={{
        backgroundColor: "#f23c32",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "600px",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Logo */}
      <div className="flex flex-col items-center gap-4">
        <img
          src={PITANG_LOGO}
          alt="Pitang Logo"
          style={{ width: "180px", filter: "brightness(0) invert(1)" }}
        />
        <p className="text-white text-lg text-center max-w-sm">
          Gerencie produtos, usuários e muito mais em um só lugar.
        </p>
      </div>

      {/* Botões */}
      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-xl font-medium transition-colors"
        >
          Entrar
        </Link>
        <Link
          to="/register"
          className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-xl font-medium transition-colors"
        >
          Criar conta
        </Link>
      </div>
    </div>
  );
}
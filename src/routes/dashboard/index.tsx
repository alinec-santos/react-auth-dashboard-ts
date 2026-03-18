import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/hooks/use-auth";
 
export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});
 
function RouteComponent() {
  const { loggedUser } = useAuth();
 
  return (
    <div className="p-8 flex flex-col gap-6">
      {/* Card de boas-vindas */}
      <div className="flex items-center gap-4 bg-muted rounded-2xl p-6">
        <img
          src={loggedUser?.image}
          alt="Foto do usuário"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">
            Olá, {loggedUser?.firstName} {loggedUser?.lastName}! 
          </h1>
          <p className="text-muted-foreground">
            {loggedUser?.company?.title} — {loggedUser?.company?.name}
          </p>
        </div>
      </div>
    </div>
  );
}
 
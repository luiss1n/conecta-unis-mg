import { Link } from "@tanstack/react-router";
import { Bell, Building2, Menu, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { demoNotifications } from "@/data/demo";
import { getCandidateProfile } from "@/services/api";
import logo from "@/assets/conecta-unis-logo.png";

const nav = [
  { to: "/", label: "Início", exact: true },
  { to: "/vagas", label: "Vagas" },
  { to: "/empresas", label: "Empresas" },
  { to: "/eventos", label: "Eventos" },
  { to: "/sobre", label: "Sobre nós" },
] as const;

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-ring">
      <img src={logo} alt="" className="h-9 w-9 shrink-0 object-contain" width={36} height={36} />
      <span className="font-display text-lg font-extrabold tracking-tight">
        CONECTA <span className={dark ? "text-footer-accent" : "text-brand-gradient"}>UNIS</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(demoNotifications.length);
  const user = getCandidateProfile();
  const initials = user.name.split(" ").map((p) => p[0]).slice(0, 2).join("");

  return (
    <header className="sticky top-0 z-40 border-b bg-surface/90 backdrop-blur">
      <div className="container-page flex h-16 items-center gap-4">
        <Logo />
        <nav aria-label="Principal" className="ml-6 hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: "exact" in n }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "!text-primary bg-primary-soft" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <Popover onOpenChange={(o) => o && setUnread(0)}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Notificações" className="relative">
                <Bell className="h-5 w-5" />
                {unread > 0 && (
                  <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-brand-purple" />
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-80 p-0">
              <div className="border-b px-4 py-3">
                <p className="text-sm font-semibold">Notificações</p>
                <p className="text-xs text-muted-foreground">Exemplos demonstrativos</p>
              </div>
              <ul className="divide-y">
                {demoNotifications.map((n) => (
                  <li key={n.id} className="px-4 py-3">
                    <p className="text-sm font-medium">{n.title}</p>
                    <p className="text-xs text-muted-foreground">{n.body}</p>
                  </li>
                ))}
              </ul>
            </PopoverContent>
          </Popover>
          <Link
            to="/area-empresa"
            className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground xl:inline-flex"
          >
            <Building2 className="h-4 w-4" /> Acesso para empresas
          </Link>
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/area-empresa">
              <Plus className="h-4 w-4" /> Publicar vaga
            </Link>
          </Button>
          <Link
            to="/perfil"
            aria-label={`Perfil de ${user.name}`}
            className="hidden h-9 w-9 place-items-center rounded-full bg-brand-purple-soft text-sm font-bold text-brand-purple ring-offset-2 hover:ring-2 hover:ring-brand-purple/30 sm:grid"
          >
            {initials}
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav aria-label="Menu móvel" className="mt-2 flex flex-col gap-1 px-4">
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: "exact" in n }}
                    className="rounded-md px-3 py-3 text-base font-medium hover:bg-muted"
                    activeProps={{ className: "bg-primary-soft text-primary" }}
                  >
                    {n.label}
                  </Link>
                ))}
                <hr className="my-2" />
                <Link to="/perfil" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 font-medium hover:bg-muted">
                  Meu perfil
                </Link>
                <Link to="/area-empresa" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 font-medium hover:bg-muted">
                  Acesso para empresas
                </Link>
                <Button asChild className="mt-2">
                  <Link to="/area-empresa" onClick={() => setOpen(false)}>
                    <Plus className="h-4 w-4" /> Publicar vaga
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

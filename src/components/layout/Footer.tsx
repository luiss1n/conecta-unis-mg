import { Link } from "@tanstack/react-router";
import { Logo } from "./Header";

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-surface">
      <div className="container-page grid gap-8 py-10 md:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-sm text-sm text-muted-foreground">
            Plataforma de carreiras e empregabilidade da Faculdade Unis São Lourenço, em apoio ao
            Núcleo de Carreira e Empregabilidade.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Navegação</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/vagas" className="hover:text-primary">Vagas</Link></li>
            <li><Link to="/empresas" className="hover:text-primary">Empresas</Link></li>
            <li><Link to="/eventos" className="hover:text-primary">Eventos</Link></li>
            <li><Link to="/sobre" className="hover:text-primary">Sobre nós</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Institucional</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/area-empresa" className="hover:text-primary">Área para empresas</Link></li>
            <li><Link to="/privacidade" className="hover:text-primary">Política de privacidade</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <p className="container-page py-4 text-xs text-muted-foreground">
          Versão demonstrativa — vagas, empresas, eventos e indicadores exibidos são fictícios.
        </p>
      </div>
    </footer>
  );
}

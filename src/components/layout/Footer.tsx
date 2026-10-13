import { Link } from "@tanstack/react-router";
import { Logo } from "./Header";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-footer-border bg-footer text-footer-foreground">
      <div className="container-page grid gap-8 py-10 md:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-3">
          <Logo dark />
          <p className="max-w-sm text-sm text-footer-muted">
            Plataforma de carreiras e empregabilidade da Faculdade Unis São Lourenço, em apoio ao
            Núcleo de Carreira e Empregabilidade.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Navegação</p>
          <ul className="space-y-2 text-sm text-footer-muted">
            <li><Link to="/vagas" className="hover:text-footer-accent">Vagas</Link></li>
            <li><Link to="/empresas" className="hover:text-footer-accent">Empresas</Link></li>
            <li><Link to="/eventos" className="hover:text-footer-accent">Eventos</Link></li>
            <li><Link to="/sobre" className="hover:text-footer-accent">Sobre nós</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Institucional</p>
          <ul className="space-y-2 text-sm text-footer-muted">
            <li><Link to="/area-empresa" className="hover:text-footer-accent">Área para empresas</Link></li>
            <li><Link to="/privacidade" className="hover:text-footer-accent">Política de privacidade</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-footer-border">
        <p className="container-page py-4 text-xs text-footer-muted">
          Versão demonstrativa — vagas, empresas, eventos e indicadores exibidos são fictícios.
        </p>
      </div>
    </footer>
  );
}

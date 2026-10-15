import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { DemoBadge } from "@/components/common/DemoBadge";
import { PageHeader } from "@/components/common/PageHeader";
import { getCandidateProfile } from "@/services/api";

export const Route = createFileRoute("/_authenticated/perfil")({
  head: () => ({
    meta: [
      { title: "Meu perfil — CONECTA UNIS" },
      { name: "description", content: "Perfil demonstrativo do estudante na plataforma CONECTA UNIS." },
      { property: "og:title", content: "Meu perfil — CONECTA UNIS" },
      { property: "og:description", content: "Perfil demonstrativo do estudante na plataforma CONECTA UNIS." },
    ],
  }),
  component: Profile,
});

function Profile() {
  // AUTENTICAÇÃO FUTURA: o perfil virá da sessão do usuário autenticado.
  const p = getCandidateProfile();
  return (
    <>
      <PageHeader eyebrow="Meu perfil" title={p.name} description={`${p.course} · ${p.period}`}>
        <DemoBadge>Perfil fictício — login ainda não disponível</DemoBadge>
      </PageHeader>
      <div className="container-page max-w-3xl py-10">
        <section className="rounded-xl border bg-card p-6 shadow-card">
          <h2 className="font-bold">Competências</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {p.skills.map((s) => <li key={s} className="rounded-full bg-primary-soft px-3 py-1 text-sm font-medium text-primary">{s}</li>)}
          </ul>
          <Button asChild className="mt-6"><Link to="/vagas">Explorar vagas</Link></Button>
        </section>
      </div>
    </>
  );
}

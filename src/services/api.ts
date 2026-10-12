/**
 * Camada de serviços do CONECTA UNIS.
 *
 * Nesta primeira versão, todas as funções retornam DADOS DEMONSTRATIVOS locais.
 * INTEGRAÇÃO FUTURA: substituir os retornos por chamadas à API REST (NestJS + Prisma/PostgreSQL),
 * por exemplo `fetch(`${API_URL}/vagas`)`. A interface consome apenas estas funções,
 * o que facilita a troca da fonte de dados (e uma eventual migração para Next.js).
 *
 * AUTENTICAÇÃO FUTURA: o perfil do candidato (getCandidateProfile) virá da sessão do usuário.
 * CANDIDATURAS FUTURAS: POST /candidaturas — hoje NÃO há envio nem armazenamento de dados.
 */
import { companies } from "@/data/companies";
import { events } from "@/data/events";
import { jobs } from "@/data/jobs";
import { demoCandidate } from "@/data/demo";

export const getJobs = () => jobs;
export const getJob = (slug: string) => jobs.find((j) => j.slug === slug);
export const getCompanies = () => companies;
export const getCompany = (slug: string) => companies.find((c) => c.slug === slug);
export const getCompanyName = (slug: string) => getCompany(slug)?.name ?? "";
export const getJobsByCompany = (slug: string) => jobs.filter((j) => j.companySlug === slug);
export const getEvents = () => events;
export const getEvent = (id: string) => events.find((e) => e.id === id);
export const getCandidateProfile = () => demoCandidate;

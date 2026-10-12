<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture rules
- UI reads data only through `src/services/api.ts`; demo data lives in `src/data/*` — so a future REST API (NestJS) can replace the source without touching components.
- Pure filtering/formatting logic lives in `src/lib/jobs.ts` (tested), separate from UI — eases migration to Next.js.
- No backend, auth or persistence yet: applications/interest are visual demos only and must say so.

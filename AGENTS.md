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
- The shared Logo renders the supplied image and supports a dark-surface variant; footer colors use dedicated semantic tokens so global accents remain independent.
- Legacy brand-purple tokens remain compatibility aliases for the blue accent palette to update all consumers consistently.
- UI reads data only through `src/services/api.ts`; demo data lives in `src/data/*` — so a future REST API (NestJS) can replace the source without touching components.
- Pure filtering/formatting logic lives in `src/lib/jobs.ts` (tested), separate from UI — eases migration to Next.js.
- Account and profile persistence uses Lovable Cloud; catalog applications/interest remain demos until explicitly replaced.
- Private profile reads and file operations live in the service layer; owner-scoped RLS and validation triggers enforce access independently of the UI.
- Profile files use the private profile-photos bucket, owner-prefixed unique paths and temporary signed URLs, so private files never become public by accident.

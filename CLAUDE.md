# Claude Code

Read and follow `AGENTS.md` for project-wide instructions.

Project skills are exposed as slash commands through generated adapters in `.claude/skills/`. Invoke them with `/comandos`, `/analisar-match-vaga`, `/adaptar-candidatura`, `/preparar-etapa`, or `/atualizar-status-vaga`.

The canonical instructions live under `.agents/skills/`. If an adapter is missing or out of sync, run `npm run agents:setup`; make lasting changes in the canonical skill and regenerate the adapters.

# ApplyCraft

Use `.agents/skills/` as the canonical source for every project skill. Read the matching `SKILL.md` completely before handling job matching, application documents, interview preparation, process tracking, or command discovery.

Read `CONTEXT.md` when changing domain terminology, persistence formats, or responsibility boundaries. Keep `perfil/` and `candidaturas/` local: they contain personal and application data and are intentionally ignored by Git.

Base every claim on repository sources supplied by the user. Treat missing evidence as a question and preserve `perfil/curriculo-base.md` as the canonical professional record.

After adding, renaming, or changing a skill's frontmatter, run `npm run agents:setup` to regenerate Claude adapters. Edit canonical skills instead of generated files under `.claude/skills/`. Run `npm run check` before handing off repository changes.

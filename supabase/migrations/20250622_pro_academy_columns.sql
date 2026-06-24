-- Pro Academy progress columns on game_saves
alter table game_saves
  add column if not exists far_progress jsonb,
  add column if not exists pricing_progress jsonb,
  add column if not exists acquisition_progress jsonb,
  add column if not exists quiz_history jsonb,
  add column if not exists certification_scores jsonb,
  add column if not exists bookmarked_clauses jsonb,
  add column if not exists tool_history jsonb;

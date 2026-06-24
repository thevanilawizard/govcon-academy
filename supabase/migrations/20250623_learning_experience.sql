-- Learning experience columns on game_saves
alter table game_saves
  add column if not exists learning_path text,
  add column if not exists current_week int default 1,
  add column if not exists current_day int default 1,
  add column if not exists xp_points int default 0,
  add column if not exists level int default 1,
  add column if not exists streak_days int default 0,
  add column if not exists last_active date,
  add column if not exists badges jsonb default '[]',
  add column if not exists flashcard_progress jsonb,
  add column if not exists concept_of_day_seen jsonb,
  add column if not exists lesson_progress jsonb,
  add column if not exists drill_history jsonb;

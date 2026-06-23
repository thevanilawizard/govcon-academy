-- Users table handled by Supabase Auth
-- Game saves (one per user, upserted on every meaningful state change)
create table game_saves (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null unique,
  form jsonb,
  profile jsonb,
  fin jsonb,
  quarter int default 1,
  opps jsonb,
  submitted jsonb default '[]'::jsonb,
  contracts jsonb default '[]'::jsonb,
  company_ops jsonb,
  bid_draft jsonb,
  tutorial_completed boolean default false,
  education_progress jsonb,
  updated_at timestamp with time zone default now()
);

-- Optional dedicated columns (also stored in education_progress jsonb for backward compatibility)
-- alter table game_saves add column if not exists quiz_scores jsonb;
-- alter table game_saves add column if not exists certificate_earned boolean default false;
-- alter table game_saves add column if not exists exam_score integer;

alter table game_saves enable row level security;

create policy "Users own their saves" on game_saves
  for all using (auth.uid() = user_id);

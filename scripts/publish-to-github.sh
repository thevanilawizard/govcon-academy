#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="govcon-academy"
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"

echo "==> GovCon Academy — GitHub publish script"
echo "    Directory: $PROJECT_DIR"
echo ""

# --- Require git (Xcode Command Line Tools on macOS) ---
if ! git --version >/dev/null 2>&1; then
  echo "ERROR: git is not available."
  echo "Install Xcode Command Line Tools, then re-run this script:"
  echo "  xcode-select --install"
  exit 1
fi

# --- Ensure GitHub CLI ---
if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI (gh) not found."
  if [[ "$(uname -m)" == "arm64" ]]; then
    GH_ARCH="macOS_arm64"
  else
    GH_ARCH="macOS_amd64"
  fi
  GH_VERSION="2.65.0"
  GH_URL="https://github.com/cli/cli/releases/download/v${GH_VERSION}/gh_${GH_VERSION}_${GH_ARCH}.zip"
  echo "Downloading gh ${GH_VERSION}..."
  TMPDIR="${TMPDIR:-/tmp}"
  curl -fsSL "$GH_URL" -o "$TMPDIR/gh.zip"
  unzip -qo "$TMPDIR/gh.zip" -d "$TMPDIR/gh-extract"
  mkdir -p "$HOME/.local/bin"
  cp "$TMPDIR/gh-extract/gh_${GH_VERSION}_${GH_ARCH}/bin/gh" "$HOME/.local/bin/gh"
  export PATH="$HOME/.local/bin:$PATH"
  echo "Installed gh to ~/.local/bin/gh"
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "ERROR: Not logged into GitHub. Run: gh auth login"
  exit 1
fi

GITHUB_USER="$(gh api user -q .login)"
echo "GitHub user: $GITHUB_USER"
echo ""

# --- Initialize git repo if needed ---
if [[ ! -d .git ]]; then
  git init -b main
fi

# --- Stage and commit ---
git add -A
if git diff --cached --quiet; then
  echo "No new changes to commit."
else
  git commit -m "$(cat <<'EOF'
Initial commit: GovCon Academy simulator.

Next.js 14 educational federal contracting game with Supabase auth,
Martin Business AI mentor, tutorial flow, and Vercel-ready config.
EOF
)"
fi

# --- Create GitHub repo and push ---
if git remote get-url origin >/dev/null 2>&1; then
  echo "Remote 'origin' already exists — pushing to existing remote."
  git push -u origin main
else
  echo "Creating GitHub repo: ${GITHUB_USER}/${REPO_NAME}"
  gh repo create "$REPO_NAME" \
    --public \
    --source=. \
    --remote=origin \
    --description "Educational federal government contracting simulator built with Next.js 14" \
    --push
fi

REPO_URL="https://github.com/${GITHUB_USER}/${REPO_NAME}"
echo ""
echo "✓ Repository published: ${REPO_URL}"
echo ""
echo "==> Deploy to Vercel"
echo "1. Open https://vercel.com/new"
echo "2. Import ${REPO_URL}"
echo "3. Add environment variables from .env.example:"
echo "   - NEXT_PUBLIC_SUPABASE_URL"
echo "   - NEXT_PUBLIC_SUPABASE_ANON_KEY"
echo "   - SUPABASE_SERVICE_ROLE_KEY"
echo "   - ANTHROPIC_API_KEY"
echo "4. Deploy (framework auto-detects Next.js)"
echo ""
echo "Or run: vercel --prod   (after npm i -g vercel && vercel login)"

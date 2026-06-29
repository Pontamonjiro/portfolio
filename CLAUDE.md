# CLAUDE.md

## プロジェクト概要

ホームページ・ランディングページ制作のポートフォリオサイト。
今後 LP やコーポレートサイトを 1 つずつ追加していき、Astro で静的サイトとしてビルドして GitHub Pages に公開する。

## Tech Stack

- 言語: TypeScript（strict）
- フレームワーク: Astro 7（静的サイト生成 / `output: "static"`）
- スタイル: 素の CSS（`src/styles/global.css` + 各コンポーネントの scoped style）
- ランタイム: **Node.js 22 以上必須**（`package.json` engines: `>=22.12.0`）。`.nvmrc` = `22.23.1`

## ディレクトリ構成

```
src/
  site.config.ts      … サイト全体設定 + 内部リンク用 href() ヘルパー
  data/works.ts       … 制作物一覧（型付き）。作品追加時はここに1件足す
  layouts/
    BaseLayout.astro  … 全ページ共通の <html>/<head>/メタ情報
  components/
    WorkCard.astro    … TOPの作品カード
  pages/
    index.astro         … ポートフォリオTOP（作品一覧）
    <slug>/index.astro  … 個別ページ。src/pages 直下にフォルダを1つ作る＝1ページ（URL /<slug>/）
                          例: sample-lp/index.astro → /sample-lp/（雛形）
  styles/global.css   … 共通ベーススタイル
public/               … そのまま配信される静的ファイル（画像・favicon等）
.github/workflows/deploy.yml … GitHub Pages デプロイ（2リポ構成）
source/work_progress.md      … 作業進捗ログ
```

## 開発コマンド

実行前に Node 22 を有効化すること（既定が 20 の場合）:
`$env:Path = "C:\ProgramData\nvm\v22.23.1;" + $env:Path`（このセッションのみ）
または管理者 PowerShell で `nvm use 22.23.1`（恒久切替）。

- 開発サーバー: `npm run dev` （http://localhost:4321）
- ビルド: `npm run build` （`dist/` に出力）
- プレビュー: `npm run preview` （ビルド結果を確認）

dev サーバーはバックグラウンド起動も可能:
```
astro dev --background
```
管理は `astro dev stop` / `astro dev status` / `astro dev logs`。

## 新しいLP/ページの追加手順

1. `src/pages/sample-lp/` フォルダごと複製し、フォルダ名を `<slug>` にリネーム
   （= 第一階層にフォルダを1つ作る。その中の `index.astro` がそのページ。URLは `/<slug>/`）
2. `index.astro` の中身を編集（`BaseLayout` に title / description を渡す）
3. `src/data/works.ts` に作品を1件追加（slug をフォルダ名と一致させる）→ TOPの一覧に出る
4. 内部リンクは必ず `href('...')`（`src/site.config.ts`）経由にする → base パス変更に追従

## コーディング規約

- インデントは半角スペース2つ
- TypeScript は strict。型は `src/data/works.ts` の `Work` のように明示的に定義する
- ページ間で共有する見た目は `global.css`、ページ/部品固有は Astro の `<style>`（scoped）に書く
- 内部リンクをハードコードしない（`href()` を使う）

## アーキテクチャ上の重要ルール（公開戦略 / 2リポ構成）

**Webコードは Public、メモ類は Private。役割で2つのリポに分ける。**

- **Public リポ `Pontamonjiro/portfolio`** … この Astro プロジェクト本体（コード）。
  - `main` に push → `.github/workflows/deploy.yml`（GitHub公式 `withastro/action` + `actions/deploy-pages`）がビルドして GitHub Pages へ公開。PAT不要。
  - 公開URL: **https://pontamonjiro.github.io/portfolio/**
  - そのため `astro.config.mjs` は `site: 'https://pontamonjiro.github.io'` / `base: '/portfolio/'`。
    内部リンクは `href()`、アセットは `import.meta.env.BASE_URL` 基準にすること（base変更に追従）。
- **Private リポ `Pontamonjiro/portfolio-notes`** … 非公開メモ。`source/` フォルダが丸ごとこの別リポ（Publicリポは `source/` を `.gitignore` で除外）。
  - 進捗ログ・コンセプト（なぜ作ったか）・リソースメモ等を入れる。`git -C source ...` で操作。

### 公開の運用
- コード変更 → Publicリポに push すれば自動でPages反映。
- メモ更新 → `source/`（Privateリポ）側で commit/push。

## 注意事項

- `.env` 等の秘密情報はコミットしない（`.gitignore` 済）
- `dist/` `.astro/` `source/`（非公開メモ）はPublicリポに含めない（`.gitignore` 済）
- Node 20 で `npm run dev`/`build` を実行すると engines 警告。22 を使うこと

## 進捗管理

- 進捗ログは **Privateリポ側 `source/work_progress.md`**（Publicには出さない）
- **セッション開始時に `source/work_progress.md` を確認し、未完了タスクを把握すること**
- 作業依頼を受けたら進捗ファイルに項目追加、完了したら「済」マーク
- フォーマット: 日付セクション → チェックリスト → 対応ログ表

// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages 公開用の設定。
// - site : 公開URLのオリジン。Public公開リポに合わせて変更する。
//   例) ユーザーサイト  : https://<user>.github.io
//       プロジェクトサイト: https://<user>.github.io  + base '/<repo>/'
// - base : サブパス。Public公開リポが <user>.github.io 以外（例: portfolio）なら '/portfolio/' のように指定。
//   内部リンクは src/site.config.ts の href() を使っているため、ここを変えるだけで追従する。
// https://astro.build/config
export default defineConfig({
  site: 'https://example.github.io',
  base: '/',
});

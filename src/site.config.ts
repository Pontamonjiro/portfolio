// サイト全体の設定。ここを1か所変えれば各ページのメタ情報に反映される。
export const SITE = {
  /** サイト名（ブラウザタブ・OGPなどに使用） */
  title: 'Portfolio',
  /** サイトの説明（meta description / OGP） */
  description: 'ホームページ・ランディングページ制作のポートフォリオ',
  /** 制作者名 */
  author: 'kogarashi',
  /** 既定の言語 */
  lang: 'ja',
} as const;

/**
 * BASE_URL を前置した内部リンクを返すヘルパー。
 * GitHub Pages の base パス（例: /portfolio/）が変わっても、
 * これ経由でリンクすれば壊れない。
 * 使い方: href('works/sample-lp/') -> '/portfolio/works/sample-lp/'
 */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL; // 末尾は通常 '/'
  const clean = path.replace(/^\//, '');
  return base.endsWith('/') ? base + clean : `${base}/${clean}`;
}

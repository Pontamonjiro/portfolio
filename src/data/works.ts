// ポートフォリオに並べる制作物（LP・ホームページ）の一覧。
// 新しい作品を追加したら、ここに1件足して src/pages/works/ に該当ページを作る。

export type Work = {
  /** URLスラッグ（src/pages/works/<slug>.astro と対応） */
  slug: string;
  /** 作品名 */
  title: string;
  /** 一覧に出す短い説明 */
  description: string;
  /** サムネイル画像のパス（public/ からの相対。未設定なら no-image 扱い） */
  thumbnail?: string;
  /** タグ（LP / コーポレート など） */
  tags?: string[];
};

export const works: Work[] = [
  {
    slug: 'sample-lp',
    title: 'サンプルLP',
    description: '構成の雛形となるランディングページのサンプル。',
    tags: ['LP', 'サンプル'],
  },
];

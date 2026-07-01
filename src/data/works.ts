// ポートフォリオに並べる制作物（LP・ホームページ）の一覧。
// 新しい作品を追加したら、ここに1件足して src/pages/<slug>/index.astro を作る。

export type Work = {
  /** URLスラッグ（src/pages/<slug>/index.astro と対応。URLは /<slug>/） */
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
    slug: 'ashimomi',
    title: '和み処 てもみ堂',
    description: '全身もみほぐしの店舗サイト。店舗データ差し替え式の量産テンプレート。',
    tags: ['店舗サイト', 'LP', 'テンプレート'],
  },
  {
    slug: 'sample-lp',
    title: 'サンプルLP',
    description: '構成の雛形となるランディングページのサンプル。',
    tags: ['LP', 'サンプル'],
  },
];

// 店舗サイトテンプレートの店舗データ型。
// 新規店舗はこの型に沿って src/data/shops/<slug>.ts を1つ作るだけで完成する。

export type Voice = {
  /** お客様の声（本文） */
  quote: string;
  /** 誰の声か（例: 50代・飲食店経営 K様） */
  who: string;
};

export type MenuItem = {
  name: string;
  price: string;
  desc: string;
};

export type ShopTheme = {
  /** 文字色（藍墨） */
  sumi: string;
  /** 背景（生成り和紙） */
  washi: string;
  /** 背景2 */
  washi2: string;
  /** メインアクセント（柿渋など、店ごとに変える色） */
  accent: string;
  /** アクセント濃いめ（ホバー等） */
  accentDark: string;
  /** サブ色（若竹） */
  sub: string;
};

export type Shop = {
  /** 店名 */
  name: string;
  /** 肩書き（足つぼ・リフレクソロジー専門 など）。ヒーローの eyebrow 既定値にもなる */
  tagline: string;
  /** meta description 用の説明文 */
  description: string;
  /** 営業用電話番号（数字のみ。例: 0312345678） */
  tel: string;
  /** LINE友だち追加URL（https://lin.ee/xxxx） */
  lineUrl: string;
  /** GoogleマップのURL（共有リンク） */
  mapUrl: string;
  /** Googleビジネスの埋め込みiframeのsrc。空ならプレースホルダー表示 */
  mapEmbed: string;
  /** 住所 */
  address: string;
  /** 営業時間の目安 */
  hoursNote: string;
  /** 定休日の note */
  closedNote: string;
  /** 支払い方法 */
  payment: string;
  /** ペット同伴に関する案内文 */
  petNote: string;
  /** 駐車場 */
  parking: string;
  /** 料金（Googleスプレッドシート連携） */
  pricing: {
    /** スプレッドシートのID。'REPLACE' のままならフォールバック表示 */
    sheetId: string;
    /** シート（タブ）名 */
    sheetName: string;
  };
  /** テーマ色 */
  theme: ShopTheme;
  /** お客様の声 */
  voices: Voice[];

  // ── 任意項目（未指定なら各コンポーネントの既定値を使用）──
  /** ロゴの2トーン表示（pre + accent(色付き) + post）。未指定なら name をそのまま表示 */
  logo?: { pre: string; accent: string; post: string };
  /** ヒーローの文言。未指定なら eyebrow=tagline / lead=description */
  hero?: {
    eyebrow?: string;
    /** 見出し（<br> 可） */
    title?: string;
    /** 見出しのサブ */
    titleSub?: string;
    lead?: string;
  };
  /** 料金未接続/取得失敗時に表示するサンプルメニュー */
  fallbackMenu?: MenuItem[];
};

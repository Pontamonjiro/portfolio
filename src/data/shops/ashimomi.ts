import type { Shop } from './types';

// あしもみ本舗（足つぼ専門店）の店舗データ。
// ── 新規店舗を作るときは、このファイルを複製して値とテーマ色を差し替えるだけ ──
// 差し替える主なもの: name / tagline / tel / lineUrl / mapUrl / mapEmbed / address / theme / voices
export const ashimomi: Shop = {
  name: '癒し処 あしもみ本舗',
  tagline: '全身マッサージ',
  description:
    'お一人おひとりの体に合わせて、肩・背中・腰から脚先まで全身をていねいにほぐす全身マッサージ。1.5〜2時間たっぷり、わかりやすい一律料金のお店です。',

  // ★ 本番では下を実値に差し替える（HTMLにベタ書きしない設計）
  tel: '0000000000',
  // 本番のLINE公式アカウント友だち追加URL（ベーシックID @791pdfns から生成）。
  // ※トーク画面デモは /ashimomi/line/ に残置（リンクは本物のLINEへ）。
  lineUrl: 'https://line.me/R/ti/p/@791pdfns',
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('栃木県那須塩原市下永田3-3-81')}`,
  // APIキー不要の埋め込み（output=embed）。和風版の店舗案内に実地図が出る
  mapEmbed: `https://maps.google.com/maps?q=${encodeURIComponent('栃木県那須塩原市下永田3-3-81')}&z=16&output=embed`,

  address: '〒329-2712 栃木県那須塩原市下永田3-3-81',
  access: '西那須野駅 東口から徒歩約7分',
  hoursNote: '10:00 〜 20:00（受付）',
  closedNote: '不定休',
  payment: '現金のみ',
  petNote: 'ペット同伴をご希望の方はご相談ください（事前にお知らせください）',
  parking: 'あり',

  pricing: {
    sheetId: 'REPLACE', // ← Googleスプレッドシートのidに差し替え
    sheetName: '料金',
  },

  theme: {
    sumi: '#1c2a30', // 藍墨
    washi: '#f4eee2', // 生成り和紙
    washi2: '#ece3d2',
    accent: '#9c5a34', // 柿渋（店ごとに変えるメインアクセント）
    accentDark: '#834628',
    sub: '#6f8c6a', // 若竹
  },

  logo: { pre: '癒し処 あし', accent: 'もみ', post: '本舗' },

  hero: {
    eyebrow: '全身マッサージ',
    title: 'その日の体に、<br>その日の手を。',
    titleSub: '― あなたに合わせた、全身もみほぐし ―',
    lead: 'マニュアルの「強さ」ではなく、その日の体の声を聞きながら。肩・背中・腰から脚先まで、一本一本の指で全身をていねいにほぐしていきます。',
  },

  fallbackMenu: [
    {
      name: '全身マッサージ',
      price: '4,000円',
      desc: 'お一人おひとりの体に合わせて、肩・背中・腰から脚先まで全身をていねいに。（1.5〜2時間）',
    },
  ],

  voices: [
    { quote: '肩から腰までガチガチだったのが、終わったら体がふっと軽い。月一の楽しみになっています。', who: '50代・飲食店経営 K様' },
    { quote: '強すぎず弱すぎず、その日の調子に合わせてくれるのがありがたい。出張帰りに必ず寄ってます。', who: '40代・会社経営 T様' },
    { quote: 'たっぷり時間をかけて全身をほぐしてくれるので、終わったあとぐっすり眠れます。', who: '60代・主婦 M様' },
    { quote: '一律料金でわかりやすいのも安心。毎回同じ心地よさで通いやすいです。', who: '30代・会社員 S様' },
  ],
};

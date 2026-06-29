import type { Shop } from './types';

// あしもみ本舗（足つぼ専門店）の店舗データ。
// ── 新規店舗を作るときは、このファイルを複製して値とテーマ色を差し替えるだけ ──
// 差し替える主なもの: name / tagline / tel / lineUrl / mapUrl / mapEmbed / address / theme / voices
export const ashimomi: Shop = {
  name: 'あしもみ本舗',
  tagline: '足つぼ・リフレクソロジー専門',
  description:
    '一本一本の指で、その日の体に合わせて。足つぼ・リフレクソロジー専門のあしもみ本舗。完全予約制・二人だけの小さなお店で、丁寧におもてなしします。',

  // ★ 本番では下を実値に差し替える（HTMLにベタ書きしない設計）
  tel: '0000000000',
  lineUrl: 'https://lin.ee/REPLACE',
  mapUrl: 'https://maps.google.com/?q=REPLACE',
  mapEmbed: '', // Googleビジネスの埋め込みiframeのsrc。空ならプレースホルダー

  address: '〒000-0000 ○○県○○市○○町0-0-0',
  hoursNote: '10:00 〜 19:00（目安）',
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

  logo: { pre: 'あし', accent: 'もみ', post: '本舗' },

  hero: {
    eyebrow: '足つぼ・リフレクソロジー専門',
    title: 'その日の足に、<br>その日の手を。',
    titleSub: '― 二人だけの、小さなおもてなし ―',
    lead: 'マニュアルの「強さ」ではなく、その日の体の声を聞きながら。一本一本の指で、こりと疲れの奥までほぐしていく足つぼ専門のお店です。完全予約制で、ゆっくりとお過ごしいただけます。',
  },

  fallbackMenu: [
    { name: '足つぼ お試し', price: '2,800円〜', desc: 'はじめての方に。ふくらはぎ〜足裏を中心に。（約20分）' },
    { name: '足つぼ スタンダード', price: '4,500円〜', desc: 'いちばん人気。足裏のツボをじっくりと。（約40分）' },
    { name: '足つぼ＋ふくらはぎ じっくり', price: '6,800円〜', desc: '足の疲れが強い方へ。むくみ・冷え対策にも。（約60分）' },
  ],

  voices: [
    { quote: '立ち仕事で足がパンパンだったのが、帰り道びっくりするくらい軽い。月一の楽しみになっています。', who: '50代・飲食店経営 K様' },
    { quote: '強すぎず弱すぎず、その日の調子に合わせてくれるのがありがたい。出張帰りに必ず寄ってます。', who: '40代・会社経営 T様' },
    { quote: 'こぢんまりしてて落ち着く。世間話もちょうどよくて、終わったあとぐっすり眠れます。', who: '60代・主婦 M様' },
    { quote: '冷えがひどかったのに、通い始めて足先がぽかぽか。もっと早く来ればよかった。', who: '30代・会社員 S様' },
  ],
};

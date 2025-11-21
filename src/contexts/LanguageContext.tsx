import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'jp';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Page Title
    'page.title': 'Ahmed Faiyaz | Portfolio',

    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.skills': 'Skills',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.blogs': 'Blogs',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hi!',
    'hero.intro': "I'm",
    'hero.name': 'AHMED FAIYAZ',
    'hero.title': 'Full Stack Developer',
    'hero.description': 'Tokyo-based developer crafting warm, fast web experiences for real people. I obsess over the details that make a product feel alive.',
    'hero.cta': 'Say Hello',
    'hero.resume': 'Resume',
    
    // About
    'about.title': 'About Me',
    'about.headline': 'Human stories translated into useful interfaces',
    'about.intro': "I'm Ahmed Faiyaz, a Bangladeshi-born developer now rooted in Tokyo. I blend product thinking, design sensitivity, and reliable engineering to turn messy ideas into calm digital spaces.",
    'about.journey': 'Years of freelancing and agency work taught me to listen first, prototype fast, and deliver code that teams can trust long after launch.',
    'about.passion': "When I'm not coding, I'm walking Tokyo with my camera—collecting quiet details like light on concrete or strangers laughing. That habit shapes how I think about UI rhythms and micro-interactions.",
    'about.philosophy': "Software should feel considerate. Whether it's a portfolio, internal tool, or launch site, I work closely with clients to understand the real problem before opening my editor.",
    'about.cta': "Let's build something honest together.",
    
    // Skills
    'skills.title': 'Skills & Technologies',
    'skills.subtitle': 'A comprehensive overview of my technical expertise and tools I work with',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.tools': 'Tools & Platforms',
    'skills.design': 'Design & Creative',
    
    // Services
    'services.title': 'Services',
    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'From workshops to clickable prototypes, I map journeys and craft calm interfaces that feel familiar on day one.',
    'services.webdev.title': 'Web Development',
    'services.webdev.desc': 'Clean, reusable components with progressive enhancement so your site stays fast on any device.',
    'services.backend.title': 'Backend Development',
    'services.backend.desc': 'Reliable APIs and background jobs built with TypeScript/Node or Python, always documented for handoff.',
    'services.customization.title': 'Product Support',
    'services.customization.desc': 'Need tweaks on an existing site? I jump into legacy code, tidy things up, and leave notes so your team can keep moving.',
    'services.mobile.title': 'Mobile Development',
    'services.mobile.desc': 'React Native / Expo apps with a shared design language, tuned for both major platforms.',
    'services.ecommerce.title': 'E-Commerce Solutions',
    'services.ecommerce.desc': 'Conversion-focused storefronts with thoughtful product storytelling, secure checkout, and understandable analytics.',
    'services.api.title': 'API Development',
    'services.api.desc': 'REST or GraphQL endpoints with monitoring hooks so you know about issues before your customers do.',
    'services.consulting.title': 'Technical Consulting',
    'services.consulting.desc': 'Honest guidance on stack choices, shipping strategy, and how to grow an efficient product team.',
    
    // Projects
    'projects.title': 'Projects',
    'projects.viewProject': 'View Project',
    'projects.liveDemo': 'Live Demo',
    'projects.sourceCode': 'Source Code',
    
    'projects.qrcode.title': 'QR Code',
    'projects.qrcode.desc': 'Playful QR generator for pop-up events so teams can share menus in seconds.',
    'projects.qrcode.tags': 'React, TypeScript, QR Library',
    
    'projects.travelsite.title': 'Travel Site',
    'projects.travelsite.desc': 'Weekend inspiration site pairing curated journeys with local tips.',
    'projects.travelsite.tags': 'React, Tailwind, API',
    
    'projects.groupware.title': 'Groupware',
    'projects.groupware.desc': 'Lightweight team hub that keeps async updates tidy for distributed crews.',
    'projects.groupware.tags': 'Next.js, TypeScript, Supabase',
    
    'projects.schoolhub.title': 'School HUB',
    'projects.schoolhub.desc': 'School dashboard keeping teachers, parents, and students on the same page.',
    'projects.schoolhub.tags': 'React, Node.js, MongoDB',
    
    'projects.portfolio.title': 'Portfolio',
    'projects.portfolio.desc': 'Living portfolio focused on motion, storytelling, and accessibility.',
    'projects.portfolio.tags': 'React, Motion, カスタムUI',
    
    // Blogs
    'blogs.title': 'Blogs',
    'blogs.scrollMore': 'Scroll More',
    
    'blogs.post1.title': 'Building Modern Web Applications with React & TypeScript',
    'blogs.post1.excerpt': 'Explore best practices for creating scalable, type-safe web applications using the latest React features and TypeScript.',
    'blogs.post1.date': 'Nov 15, 2024',
    'blogs.post1.readTime': '8 min read',
    'blogs.post1.category': 'Development',
    
    'blogs.post2.title': 'The Art of UI/UX Design: Creating Intuitive Interfaces',
    'blogs.post2.excerpt': 'Learn how to design user experiences that delight users and drive engagement through thoughtful interface design.',
    'blogs.post2.date': 'Nov 10, 2024',
    'blogs.post2.readTime': '6 min read',
    'blogs.post2.category': 'Design',
    
    'blogs.post3.title': 'Photography Tips: Capturing Life in Tokyo',
    'blogs.post3.excerpt': 'Discover the hidden gems of Tokyo through my lens and learn techniques for urban photography.',
    'blogs.post3.date': 'Nov 5, 2024',
    'blogs.post3.readTime': '5 min read',
    'blogs.post3.category': 'Photography',
    
    // Contact
    'contact.title': 'Contact',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'Subject',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Your message...',
    'contact.sendButton': 'Send Message',
    'contact.messageSent': 'Message Sent!',
    
    // Footer
    'footer.tagline': 'Full Stack Developer & Designer',
    'footer.description': "Crafting thoughtful digital experiences from Tokyo. If something here sparks an idea, let's chat.",
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.in': 'in Tokyo',
  },
  jp: {
    // Page Title
    'page.title': 'アーメド・ファイヤーズ｜ポートフォリオ',
    
    // Navigation
    'nav.home': 'ホーム',
    'nav.about': '私について',
    'nav.skills': 'スキル',
    'nav.services': 'サービス',
    'nav.projects': 'プロジェクト',
    'nav.blogs': 'ブログ',
    'nav.contact': 'お問い合わせ',
    
    // Hero
    'hero.greeting': 'こんにちは！',
    'hero.intro': '私は',
    'hero.name': 'アーメド  ファイヤーズ',
    'hero.title': 'フルスタック開発者',
    'hero.description': '東京を拠点に、人の温度を感じる高速なウェブ体験をつくっています。細部までこだわり、画面に息づかいを与えるのが得意です。',
    'hero.cta': '気軽に相談する',
    'hero.resume': '履歴書',
    
    // About
    'about.title': '私について',
    'about.headline': '人の物語を役立つインターフェースへ落とし込む',
    'about.intro': 'バングラデシュ出身で東京在住の開発者、アーメド・ファイヤーズです。プロダクト視点とデザイン感覚、そして堅実なエンジニアリングを掛け合わせ、曖昧なアイデアを落ち着いたデジタル体験へ育てています。',
    'about.journey': '学生時代の小さな開発から、フリーランスや制作会社での案件まで。耳を傾け、すばやく試作し、リリース後も安心して使えるコードを届ける方法を学びました。',
    'about.passion': '気分転換はカメラを持って東京を歩くこと。コンクリートに落ちる光やふとした笑い声など、ささやかな瞬間を切り取る時間が、UIのリズムやマイクロインタラクションへの気づきにつながっています。',
    'about.philosophy': 'ソフトウェアは思いやりを感じさせる存在であるべきだと考えています。ポートフォリオから社内ツール、ローンチサイトまで、コーディングを始める前に課題の本質をチームと一緒に深掘りします。',
    'about.cta': '一緒にまっすぐなプロダクトを作りましょう。',
    
    // Skills
    'skills.title': 'スキル & 技術',
    'skills.subtitle': '私の技術的な専門知識と使用するツールの総覧',
    'skills.frontend': 'フロントエンド開発',
    'skills.backend': 'バックエンド開発',
    'skills.tools': 'ツールとプラットフォーム',
    'skills.design': 'デザインとクリエイティブ',
    
    // Services
    'services.title': 'サービス',
    'services.uiux.title': 'UI/UXデザイン',
    'services.uiux.desc': 'ワークショップからプロトタイプまで、ユーザージャーニーを整理し、初日から馴染む落ち着いたUIを描きます。',
    'services.webdev.title': 'ウェブ開発',
    'services.webdev.desc': 'どのデバイスでも速く動くよう、再利用しやすいコンポーネントとプログレッシブエンハンスメントを徹底します。',
    'services.backend.title': 'バックエンド開発',
    'services.backend.desc': 'TypeScript/NodeやPythonで堅実なAPIやバッチ処理を構築し、引き継ぎ用のドキュメントも忘れません。',
    'services.customization.title': 'プロダクトサポート',
    'services.customization.desc': '既存サイトの微調整や保守も歓迎。レガシーコードを整え、チームが続きの作業をしやすいようメモを残します。',
    'services.mobile.title': 'モバイル開発',
    'services.mobile.desc': 'React NativeやExpoを使い、プラットフォームをまたいでも統一感のあるアプリを制作します。',
    'services.ecommerce.title': 'Eコマースソリューション',
    'services.ecommerce.desc': '商品ストーリーを伝えるコンテンツ、安心できる決済、読みやすい分析環境をセットで提供します。',
    'services.api.title': 'API開発',
    'services.api.desc': 'REST / GraphQL問わず、モニタリングまで含めたAPIを構築し、障害をユーザーより先に検知できるようにします。',
    'services.consulting.title': '技術コンサルティング',
    'services.consulting.desc': '技術選定や採用計画、ローンチ戦略まで、現場目線のアドバイスをお届けします。',
    
    // Projects
    'projects.title': 'プロジェクト',
    'projects.viewProject': 'プロジェクトを見る',
    'projects.liveDemo': 'ライブデモ',
    'projects.sourceCode': 'ソースコード',
    
    'projects.qrcode.title': 'QRコード',
    'projects.qrcode.desc': 'ポップアップイベント向けに作ったQRジェネレーター。リンクをすぐ共有できます。',
    'projects.qrcode.tags': 'React, TypeScript, QRライブラリ',
    
    'projects.travelsite.title': 'トラベルサイト',
    'projects.travelsite.desc': '週末旅のアイデアとローカル情報をまとめたインスピレーションサイト。',
    'projects.travelsite.tags': 'React, Tailwind, API',
    
    'projects.groupware.title': 'グループウェア',
    'projects.groupware.desc': '分散チームの非同期コミュニケーションを整える軽量グループウェア。',
    'projects.groupware.tags': 'Next.js, TypeScript, Supabase',
    
    'projects.schoolhub.title': 'スクールHUB',
    'projects.schoolhub.desc': '先生・保護者・生徒が同じ画面で状況を共有できる学校ダッシュボード。',
    'projects.schoolhub.tags': 'React, Node.js, MongoDB',
    
    'projects.portfolio.title': 'ポートフォリオ',
    'projects.portfolio.desc': 'モーションとストーリーテリングにこだわった現在進行形のポートフォリオ。',
    'projects.portfolio.tags': 'React, Motion, Custom UI',
    
    // Blogs
    'blogs.title': 'ブログ',
    'blogs.scrollMore': 'もっと',
    
    'blogs.post1.title': 'ReactとTypeScriptで最新のWebアプリケーションを構築する',
    'blogs.post1.excerpt': '最新のReact機能とTypeScriptを使用して、スケーラブルで型安全なWebアプリケーションを作成するためのベストプラクティスを探ります。',
    'blogs.post1.date': 'Nov 15, 2024',
    'blogs.post1.readTime': '8 min read',
    'blogs.post1.category': '開発',
    
    'blogs.post2.title': 'UI/UXデザインの芸術：直感的なインターフェイスの作成',
    'blogs.post2.excerpt': '思慮深いインターフェイスデザインを通じて、ユーザーを喜ばせ、エンゲージメントを促進するユーザー体験を設計する方法を学びます。',
    'blogs.post2.date': 'Nov 10, 2024',
    'blogs.post2.readTime': '6 min read',
    'blogs.post2.category': 'デザイン',
    
    'blogs.post3.title': '写真のヒント：東京の生活を捉える',
    'blogs.post3.excerpt': '私のレンズを通して東京の隠れた宝石を発見し、都市写真のテクニックを学びます。',
    'blogs.post3.date': 'Nov 5, 2024',
    'blogs.post3.readTime': '5 min read',
    'blogs.post3.category': '写真',
    
    // Contact
    'contact.title': 'お問い合わせ',
    'contact.name': '名前',
    'contact.namePlaceholder': 'お名前',
    'contact.email': 'メールアドレス',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.subject': '件名',
    'contact.subjectPlaceholder': '件名',
    'contact.message': 'メッセージ',
    'contact.messagePlaceholder': 'メッセージをご記入ください...',
    'contact.sendButton': '送信する',
    'contact.messageSent': '送信完了！',
    
    // Footer
    'footer.tagline': 'フルスタック開発者＆デザイナー',
    'footer.description': '東京から丁寧なデジタル体験をお届けしています。気になることがあれば、いつでもご連絡ください。',
    'footer.quickLinks': 'クイックリンク',
    'footer.connect': '繋がる',
    'footer.rights': '無断転載禁止。',
    'footer.madeWith': '❤️を込めて',
    'footer.in': '東京にて制作',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('jp');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'jp')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

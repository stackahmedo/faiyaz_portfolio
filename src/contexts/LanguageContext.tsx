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
    'hero.description': 'Crafting elegant digital experiences with modern web technologies. Passionate about creating intuitive, performant, and beautiful applications.',
    'hero.cta': 'Get In Touch',
    
    // About
    'about.title': 'About Me',
    'about.headline': 'I create digital experiences that inspire and engage',
    'about.intro': "Hello! I'm Ahmed Faiyaz, a passionate Full Stack Developer based in Tokyo, Japan. With a keen eye for design and a love for clean code, I transform ideas into elegant digital solutions.",
    'about.journey': 'My journey in web development has been driven by curiosity and a commitment to continuous learning. I specialize in building responsive, user-centric applications that not only look great but perform flawlessly.',
    'about.passion': 'When I\'m not coding, you\'ll find me exploring Tokyo\'s vibrant streets with my camera, capturing moments that tell stories. Photography has taught me to see details others might miss—a skill that translates beautifully into crafting pixel-perfect interfaces.',
    'about.philosophy': "I believe in the power of technology to connect people and create meaningful experiences. Whether it's a sleek portfolio, a robust web application, or an innovative digital solution, I approach every project with dedication and creativity.",
    'about.cta': "Let's build something amazing together!",
    
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
    'services.uiux.desc': 'Creating intuitive and visually stunning user interfaces that enhance user experience and drive engagement.',
    'services.webdev.title': 'Web Development',
    'services.webdev.desc': 'Building responsive, high-performance websites and web applications using modern frameworks and best practices.',
    'services.backend.title': 'Backend Development',
    'services.backend.desc': 'Developing robust server-side applications with secure APIs and efficient database management.',
    'services.customization.title': 'Customization',
    'services.customization.desc': 'Tailoring solutions to your unique needs with flexible configurations and personalized features.',
    'services.mobile.title': 'Mobile Development',
    'services.mobile.desc': 'Developing cross-platform mobile applications with native performance and seamless user experiences.',
    'services.ecommerce.title': 'E-Commerce Solutions',
    'services.ecommerce.desc': 'Building robust online stores with secure payment integration and optimized conversion funnels.',
    'services.api.title': 'API Development',
    'services.api.desc': 'Designing and implementing RESTful APIs and backend services for scalable applications.',
    'services.consulting.title': 'Technical Consulting',
    'services.consulting.desc': 'Providing expert guidance on architecture, tech stack selection, and optimization strategies.',
    
    // Projects
    'projects.title': 'Projects',
    'projects.viewProject': 'View Project',
    'projects.liveDemo': 'Live Demo',
    'projects.sourceCode': 'Source Code',
    
    'projects.qrcode.title': 'QR Code',
    'projects.qrcode.desc': 'weblink turn to QR Code',
    'projects.qrcode.tags': 'React, TypeScript, QR Library',
    
    'projects.travelsite.title': 'Travel Site',
    'projects.travelsite.desc': 'Discover your next adventure',
    'projects.travelsite.tags': 'React, Tailwind, API',
    
    'projects.groupware.title': 'Groupware',
    'projects.groupware.desc': 'Team collaboration platform',
    'projects.groupware.tags': 'Next.js, TypeScript, Supabase',
    
    'projects.schoolhub.title': 'School HUB',
    'projects.schoolhub.desc': 'Educational management system',
    'projects.schoolhub.tags': 'React, Node.js, MongoDB',
    
    'projects.portfolio.title': 'Portfolio',
    'projects.portfolio.desc': 'Personal showcase website',
    'projects.portfolio.tags': 'React, Motion, Figma',
    
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
    'footer.description': 'Creating digital experiences that inspire and engage. Let\'s build something amazing together.',
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.in': 'in Tokyo',
  },
  jp: {
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
    'hero.description': '最新のウェブ技術でエレガントなデジタル体験を創造しています。直感的で高性能、美しいアプリケーションの開発に情熱を注いでいます。',
    'hero.cta': 'お問い合わせ',
    
    // About
    'about.title': '私について',
    'about.headline': 'インスピレーションと関わりを生み出すデジタル体験を創造します',
    'about.intro': 'こんにちは！私はアハメッド・ファイヤズ、東京を拠点とする情熱的なフルスタック開発者です。デザインへの鋭い目とクリーンなコードへの愛情を持ち、アイデアをエレガントなデジタルソリューションに変えています。',
    'about.journey': '私のウェブ開発の旅は、好奇心と継続的な学習への献身によって推進されてきました。見た目が素晴らしいだけでなく、完璧に機能するレスポンシブでユーザー中心のアプリケーションの構築を専門としています。',
    'about.passion': 'コーディングをしていないときは、カメラを持って東京の活気ある街を探索し、物語を語る瞬間を捉えています。写真撮影は、他の人が見逃すかもしれない細部を見る能力を教えてくれました。これは、ピクセルパーフェクトなインターフェイスを作り上げることに美しく変換されるスキルです。',
    'about.philosophy': '私は、人々をつなぎ、意味のある体験を創造するテクノロジーの力を信じています。洗練されたポートフォリオであれ、堅牢なウェブアプリケーションであれ、革新的なデジタルソリューションであれ、すべてのプロジェクトに献身と創造性を持って取り組んでいます。',
    'about.cta': '一緒に素晴らしいものを作りましょう！',
    
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
    'services.uiux.desc': 'ユーザー体験を向上させ、エンゲージメントを促進する直感的で視覚的に魅力的なユーザーインターフェイスを作成します。',
    'services.webdev.title': 'ウェブ開発',
    'services.webdev.desc': '最新のフレームワークとベストプラクティスを使用して、レスポンシブで高性能なウェブサイトとウェブアプリケーションを構築します。',
    'services.backend.title': 'バックエンド開発',
    'services.backend.desc': 'セキュアなAPIと効率的なデータベース管理を持つ堅牢なサーバーサイドアプリケーションを開発します。',
    'services.customization.title': 'カスタマイズ',
    'services.customization.desc': '柔軟な構成とパーソナライズされた機能を使用して、ユニークなニーズに合わせたソリューションを調整します。',
    'services.mobile.title': 'モバイル開発',
    'services.mobile.desc': 'ネイティブのパフォーマンスとシームレスなユーザー体験を持つクロスプラットフォームのモバイルアプリケーションを開発します。',
    'services.ecommerce.title': 'Eコマースソリューション',
    'services.ecommerce.desc': '安全な決済統合と最適化されたコンバージョンファネルを備えた堅牢なオンラインストアを構築します。',
    'services.api.title': 'API開発',
    'services.api.desc': 'スケーラブルなアプリケーション向けのRESTful APIとバックエンドサービスを設計および実装します。',
    'services.consulting.title': '技術コンサルティング',
    'services.consulting.desc': 'アーキテクチャ、技術スタックの選択、最適化戦略に関する専門的なガイダンスを提供します。',
    
    // Projects
    'projects.title': 'プロジェクト',
    'projects.viewProject': 'プロジェクトを見る',
    'projects.liveDemo': 'ライブデモ',
    'projects.sourceCode': 'ソースコード',
    
    'projects.qrcode.title': 'QRコード',
    'projects.qrcode.desc': 'ウェブリンクをQRコードに変換',
    'projects.qrcode.tags': 'React, TypeScript, QRライブラリ',
    
    'projects.travelsite.title': 'トラベルサイト',
    'projects.travelsite.desc': '次の冒険を見つけよう',
    'projects.travelsite.tags': 'React, Tailwind, API',
    
    'projects.groupware.title': 'グループウェア',
    'projects.groupware.desc': 'チーム協力プラットフォーム',
    'projects.groupware.tags': 'Next.js, TypeScript, Supabase',
    
    'projects.schoolhub.title': 'スクールHUB',
    'projects.schoolhub.desc': '教育管理システム',
    'projects.schoolhub.tags': 'React, Node.js, MongoDB',
    
    'projects.portfolio.title': 'ポートフォリオ',
    'projects.portfolio.desc': '個人のショーケースウェブサイト',
    'projects.portfolio.tags': 'React, Motion, Figma',
    
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
    'footer.description': 'インスピレーションと関わりを生み出すデジタル体験を創造しています。一緒に素晴らしいものを作りましょう。',
    'footer.quickLinks': 'クイックリンク',
    'footer.connect': '繋がる',
    'footer.rights': '無断転載禁止。',
    'footer.madeWith': '❤️を込めて',
    'footer.in': '東京にて制作',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

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
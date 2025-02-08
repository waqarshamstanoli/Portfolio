import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    welcome: "Transforming Ideas into",
    heroText: "Madinatech Innovations is a leading software solutions provider that provides innovative solutions for web and mobile development, digital strategy, and more. We provide you with accurate and innovative vision.",
    language: "Change Language",
    home: "Home",
    services: "Services",
    clients: "Clients",
    portfolio: "Portfolio",
    careers: "Careers",
    skills: "Skills",
    uiux_design: "UI/UX Design",
    uiux_description: "Craft intuitive, visually appealing designs that enhance user experience and align with your brand’s vision.",
    custom_software: "Custom Software Development",
    custom_software_description: "Develop custom, scalable software solutions tailored to meet your business needs efficiently and securely.",
    web_development: "Web Development",
    web_development_description: "Create fast, responsive websites optimized for all devices, ensuring a flawless user experience.",
    mobile_development: "Mobile Development",
    mobile_development_description: "Develop high-performance mobile apps for iOS and Android, built to engage and meet your goals.",
    devops: "DevOps",
    devops_description: "Streamline development with automation, continuous delivery, and optimized cloud infrastructure.",
    support_maintenance: "Support & Maintenance",
    support_maintenance_description: "Ensure your software stays updated and secure with ongoing support and maintenance services.",
    industries: "Industries",
    telecommunications: "Telecommunications",
    banking_finance: "Banking & Finance",
    public_sector: "Public Sector",
    healthcare_pharmaceutical: "Healthcare & Pharmaceutical",
    retail_cpg: "Retail & CPG",
    have_questions: "Have Questions?",
    name: "Name",
    email: "E-mail",
    get_in_touch: "Get in touch",
    connect_with_us: "Connect with us",
    learn_more: "Learn more",
    details: "Details",
    live: "Live",
    submit: "Submit",
    email_us: "Email us"
  
  },
  ja: {
    welcome: "アイデアを形に変える",
    heroText:"Madinatech Innovations は、成功を促進する最先端のソフトウェア ソリューションを提供するパートナーです。 ウェブやモバイルの開発からデジタル戦略まで、私たちはあなたのものを提供します。  正確さと革新性を備えたビジョンを実現します",
    language: "Changer de langue",
    home: "ホーム",
    services: "サービス",
    clients: "クライアント",
    portfolio: "ポートフォリオ",
    careers: "キャリア",
    skills: "スキル",
    uiux_design: "UI/UXデザイン",
    uiux_description: "直感的で魅力的なデザインを作成し、ユーザーエクスペリエンスを向上させ、ブランドのビジョンに合わせます。",
    custom_software: "カスタムソフトウェア開発",
    custom_software_description: "ビジネスニーズに合わせたスケーラブルなカスタムソフトウェアソリューションを開発します。",
    web_development: "ウェブ開発",
    web_development_description: "すべてのデバイスに最適化された、迅速で応答性の高いウェブサイトを作成します。",
    mobile_development: "モバイル開発",
    mobile_development_description: "iOSとAndroid向けの高性能モバイルアプリを開発します。",
    devops: "DevOps",
    devops_description: "開発を自動化し、継続的デリバリーを実現し、最適なクラウドインフラストラクチャを提供します。",
    support_maintenance: "サポート＆メンテナンス",
    support_maintenance_description: "ソフトウェアを最新かつ安全に保つために、継続的なサポートとメンテナンスを提供します。",
    industries: "産業",
    telecommunications: "電気通信",
    banking_finance: "銀行・金融",
    public_sector: "公共部門",
    healthcare_pharmaceutical: "医療・製薬",
    retail_cpg: "小売・消費財",
    have_questions: "ご質問がありますか？",
    name: "名前",
    email: "Eメール",
    get_in_touch: "お問い合わせ",
    connect_with_us: "私たちとつながる",
    learn_more: "もっと詳しく知る",
    details: "詳細",
    live: "ライブ",
    submit: "送信",
    email_us: "メールを送る"
    

 
  },
  ur: {
    welcome: "ہماری ویب سائٹ پر خوش آمدید",
    language: "زبان تبدیل کریں",
    home: "ہوم",
    services: "خدمات",
    clients: "کلائنٹس",
    portfolio: "پورٹ فولیو",
    careers: "کیریئر",
    skills: "مہارتیں",
    uiux_design: "یو آئی/یو ایکس ڈیزائن",
    uiux_description: "ایسے ڈیزائن تیار کریں جو صارف کے تجربے کو بہتر بنائیں اور آپ کے برانڈ کے وژن کے مطابق ہوں۔",
    custom_software: "حسب ضرورت سافٹ ویئر ترقی",
    custom_software_description: "آپ کے کاروباری ضروریات کے مطابق حسب ضرورت سافٹ ویئر حل تیار کریں۔",
    web_development: "ویب ڈویلپمنٹ",
    web_development_description: "تیز، ذمہ دار ویب سائٹس بنائیں جو تمام آلات کے لئے موزوں ہوں۔",
    mobile_development: "موبائل ڈویلپمنٹ",
    mobile_development_description: "iOS اور Android کے لیے اعلیٰ کارکردگی والی موبائل ایپس تیار کریں۔",
    devops: "ڈیواپس",
    devops_description: "ترقی کو خودکار بنائیں، مسلسل فراہمی کو بہتر بنائیں، اور کلاؤڈ انفراسٹرکچر کو بہتر بنائیں۔",
    support_maintenance: "سپورٹ اور مینٹیننس",
    support_maintenance_description: "اپنے سافٹ ویئر کو جدید اور محفوظ رکھنے کے لیے مسلسل سپورٹ اور مینٹیننس فراہم کریں۔",
    industries: "صنعتیں",
    telecommunications: "ٹیلی کمیونیکیشن",
    banking_finance: "بینکنگ اور مالیات",
    public_sector: "عوامی شعبہ",
    healthcare_pharmaceutical: "صحت اور دواسازی",
    retail_cpg: "ریٹیل اور کنزیومر گڈز",
    have_questions: "کیا آپ کے پاس سوالات ہیں؟",
    name: "نام",
    email: "ای میل",
    get_in_touch: "رابطہ کریں",
    connect_with_us: "ہمارے ساتھ جڑیں",
    learn_more: "مزید جانیں",
    details: "تفصیلات",
    live: "لائیو",
    submit: "جمع کرائیں",
    email_us: "ہمیں ای میل کریں"


  
  }
};

const i18n = new VueI18n({
  locale: "en", // Default language
  fallbackLocale: "en",
  messages,
});

export default i18n;

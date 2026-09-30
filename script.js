const translations = {
  en: {
    eyebrow: 'Business Information Systems Graduate | Software Engineer',
    name: 'MARWA GHARIB ALSAYED MOHAMED',
    summary: 'I build mobile and web experiences with clean architecture, strong UI, and practical problem-solving.',
    workBtn: 'View Projects',
    contactBtn: 'Contact Me',
    aboutTitle: 'About Me',
    missionTitle: 'Mission',
    missionText: 'To build useful, scalable, and user-centered digital products that create real impact.',
    achievementTitle: 'Achievement',
    achievementText: 'Developed and led mobile and web solutions with practical business value and strong UX.',
    passionTitle: 'Passion',
    passionText: 'Turning complex ideas into clean, elegant, and human-centered experiences.',
    bio1: 'I am a Business Information Systems graduate with a focus on database analysis, web/mobile development, and product-minded engineering. I enjoy creating reliable software that balances technical quality with user experience.',
    bio2: 'I work with Flutter, Dart, Firebase, REST APIs, JavaScript, HTML, CSS, and modern front-end tools to build responsive solutions that feel smooth and professional.',
    statsTitle: 'Quick Stats & Education',
    experienceLabel: 'Experience',
    experienceText: 'Front-End Developer | Digital Platforms',
    educationLabel: 'Education',
    educationText: 'BIS in Business Information Systems',
    roleLabel: 'Key Role',
    roleText: 'Full-Stack / Mobile & Web Engineer',
    problemLabel: 'Problem Solving',
    problemText: 'Clean architecture, logic, and UX clarity',
    projectsTitle: 'Featured Projects',
    project1Title: 'Career Support Platform',
    project1Text: 'A full-stack mobile platform for guidance, interview preparation, and career matching.',
    project2Title: 'Training Projects',
    project2Text: 'Cross-platform app interfaces created during intensive learning and practical exercise sessions.',
    project3Title: 'Brand & Graphic Design',
    project3Text: 'Visual identity and digital branding work designed for impact and clarity.',
    dashboardTitle: 'GitHub Insights',
    langTitle: 'Programming Languages',
    statsSummaryTitle: 'Profile Summary',
    totalStars: 'Total stars',
    commits: 'Total commits',
    prs: 'Total PRs',
    issues: 'Total issues'
  },
  ar: {
    eyebrow: 'خريجة نظم معلومات أعمال | مهندسة برمجيات',
    name: 'مروة غريب السيد محمد',
    summary: 'أبني تجارب موبايل وويب باستخدام هندسة نظيفة، واجهات احترافية، وحل مشكلات عملي.',
    workBtn: 'عرض المشاريع',
    contactBtn: 'تواصل معي',
    aboutTitle: 'من أنا',
    missionTitle: 'المهمة',
    missionText: 'بناء منتجات رقمية مفيدة وقابلة للتطوير وتستجيب لاحتياجات المستخدمين.',
    achievementTitle: 'الإنجاز',
    achievementText: 'طورت وقادت حلول موبايل وويب تضيف قيمة عملية وتجربة مستخدم قوية.',
    passionTitle: 'الشغف',
    passionText: 'تحويل الأفكار المعقدة إلى تجارب نظيفة، أنيقة، وموجهة نحو الإنسان.',
    bio1: 'أنا خريجة نظم معلومات أعمال مع تركيز على تحليل قواعد البيانات، وتطوير الويب والموبايل، والهندسة الموجهة للمنتج. أحب بناء برامج موثوقة توازن بين الجودة التقنية وتجربة المستخدم.',
    bio2: 'أعمل مع Flutter و Dart و Firebase و REST APIs و JavaScript و HTML و CSS وأدوات الواجهة الحديثة لبناء حلول متجاوبة واحترافية.',
    statsTitle: 'إحصائيات سريعة والتعليم',
    experienceLabel: 'الخبرة',
    experienceText: 'مطور واجهات | منصات رقمية',
    educationLabel: 'التعليم',
    educationText: 'بكالوريوس نظم معلومات أعمال',
    roleLabel: 'الدور الرئيسي',
    roleText: 'مهندس واجهات / تطبيقات ويب وموبايل',
    problemLabel: 'حل المشكلات',
    problemText: 'هندسة نظيفة، منطق، ووضوح في تجربة المستخدم',
    projectsTitle: 'المشاريع المميزة',
    project1Title: 'منصة دعم الوظائف',
    project1Text: 'منصة موبايل كاملة لدعم الطلاب والخريجين في كتابة السيرة الذاتية والاستعداد للمقابلات.',
    project2Title: 'مشاريع تدريبية',
    project2Text: 'واجهات تطبيقات متعددة المنصات تم تطويرها خلالSessions تدريبية وعملية.',
    project3Title: 'تصميم الهوية والرسومات',
    project3Text: 'أعمال هوية بصرية وتصميمات رقمية مصممة لتحقيق التأثير والووضوح.',
    dashboardTitle: 'إحصائيات GitHub',
    langTitle: 'لغات البرمجة',
    statsSummaryTitle: 'ملخص الملف الشخصي',
    totalStars: 'إجمالي النجوم',
    commits: 'إجمالي الالتزامات',
    prs: 'إجمالي الـ PRs',
    issues: 'إجمالي المشكلات'
  }
};

const themeButtons = document.querySelectorAll('[data-theme-target]');
const langButtons = document.querySelectorAll('[data-lang-target]');
const i18nEls = document.querySelectorAll('[data-i18n]');

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  themeButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.themeTarget === theme);
  });
  localStorage.setItem('portfolio-theme', theme);
}

function applyLanguage(lang) {
  document.body.dataset.lang = lang;
  document.documentElement.lang = lang;

  langButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.langTarget === lang);
  });

  i18nEls.forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem('portfolio-lang', lang);
}

themeButtons.forEach((btn) => {
  btn.addEventListener('click', () => applyTheme(btn.dataset.themeTarget));
});

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.langTarget));
});

const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
const savedLang = localStorage.getItem('portfolio-lang') || 'en';
applyTheme(savedTheme);
applyLanguage(savedLang);

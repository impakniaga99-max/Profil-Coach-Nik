import type { LangCode } from './resumeData';

export interface MagazinePillar {
  number: string;
  title: string;
  description: string;
}

export interface MagazineFact {
  label: string;
  value: string;
}

export interface MagazineLocaleContent {
  navProfile: string;
  viewTabs: {
    magazine: string;
    resume: string;
  };
  actions: {
    downloadPdf: string;
    downloadingPdf: string;
    printPage: string;
    viewFullResume: string;
  };
  masthead: string;
  issueMeta: string;
  coverHeadline: string;
  coverDeck: string;
  portraitOverlayRole: string;
  figureCaption: string;
  storyHeading: string;
  storyByline: string;
  leadParagraphs: string[];
  pullQuote: {
    text: string;
    attribution: string;
  };
  pillarsHeading: string;
  pillars: MagazinePillar[];
  sidebar: {
    factSheetTitle: string;
    facts: MagazineFact[];
    credentialsTitle: string;
    ctaTitle: string;
    ctaDescription: string;
  };
}

export const MAGAZINE_DATA: Record<LangCode, MagazineLocaleContent> = {
  ms: {
    navProfile: 'Profil',
    viewTabs: {
      magazine: 'Profil Majalah',
      resume: 'Resume Lengkap',
    },
    actions: {
      downloadPdf: 'Muat Turun PDF',
      downloadingPdf: 'Menjana PDF...',
      printPage: 'Cetak Halaman',
      viewFullResume: 'Terokai Resume & 14 Rekod Projek',
    },
    masthead: 'EDISI EKSEKUTIF · PROFIL TOKOH KONSULTAN',
    issueMeta: 'Bachok, Kelantan · Johor Bahru · 18+ Tahun Kepimpinan',
    coverHeadline: 'Membina Ekosistem Usahawan & PKS Berdaya Saing',
    coverDeck:
      'Dari pembiayaan korporat bernilai RM90 juta di Wilayah Selatan hingga penggubalan Pelan Induk PMKS Negeri Selangor — menelusuri perjalanan kepimpinan Nik Mohd Nor Arif Bin Yahya dalam memperkasa komuniti perniagaan Malaysia.',
    portraitOverlayRole: 'Pengurus / Perunding Utama · IYBE Bis Point | Impak Niaga',
    figureCaption:
      'Fig. 01 — Nik Mohd Nor Arif Bin Yahya, Pengurus & Perunding Utama di IYBE Bis Point | Impak Niaga serta Jurulatih Bertauliah HRD Corp.',
    storyHeading: 'Profil Kepimpinan & Sumbangan Strategik',
    storyByline: 'Dossier Eksekutif · Pembangunan Keusahawanan & Strategi PKS',
    leadParagraphs: [
      'Berbekalkan lebih 18 tahun pengalaman di barisan hadapan pembangunan usahawan, Nik Mohd Nor Arif Bin Yahya menggabungkan disiplin kewangan institusi dengan pendekatan perundingan perniagaan yang praktikal dan berorientasikan hasil. Kepimpinan beliau merangkumi pengurusan portfolio pembiayaan berimpak tinggi, penggubalan dasar ekonomi negeri, serta latihan transformasi digital untuk usahawan mikro, kecil dan sederhana.',
      'Sepanjang 14 tahun menerajui Pejabat Wilayah Selatan Perbadanan Usahawan Nasional Berhad (PUNB) di Johor Bahru dari Jun 2005 hingga September 2019, beliau mengetuai pasukan 20 anggota mencapai 100% kelulusan dan pemantauan KPI serta meluluskan pembiayaan berjumlah RM90 juta kepada 400 usahawan—sekali gus mewujudkan 1,000 peluang pekerjaan baharu dan melancarkan lebih 200 perniagaan.',
      'Kini berkhidmat sebagai Pengurus dan Perunding Utama di IYBE Bis Point | Impak Niaga yang berpangkalan di Bachok, Kelantan, beliau terus memacu agenda pertumbuhan PKS di peringkat kebangsaan. Antara mandat utama beliau termasuk mengetuai pasukan 18 perunding bagi Pelan Induk Strategik PMKS Selangor 2023–2027, bertindak sebagai Pengarah Projek GrowBIZ 2025 Zon Utara dan Timur anjuran SME Corp Malaysia, serta membimbing lebih 1,500 peserta melalui program SME Go Digital dan bengkel anjuran INSKEN, PERNAS serta PUNB.',
    ],
    pullQuote: {
      text: 'Keusahawanan yang mampan lahir apabila akses pembiayaan yang berdisiplin digabungkan dengan bimbingan strategik dan penguasaan teknologi digital yang tepat.',
      attribution: 'Nik Mohd Nor Arif Bin Yahya · Perunding Utama & Jurulatih Bertauliah HRD Corp',
    },
    pillarsHeading: 'Teras Kepakaran & Mandat Utama',
    pillars: [
      {
        number: '01',
        title: 'Pembiayaan Korporat & Kredit Islam',
        description:
          'Pemegang tauliah iCCE dan iPCC (ADFIM) dengan rekod kelulusan pembiayaan RM90 juta, penilaian risiko kredit berstruktur, dan pemantauan prestasi portfolio PKS.',
      },
      {
        number: '02',
        title: 'Pelan Induk Strategik & Dasar PMKS',
        description:
          'Perunding Utama bagi Pelan Induk Strategik PMKS Selangor 2023–2027 yang mencatat peningkatan hasil 20% bagi perusahaan sasaran serta Pengarah Projek GrowBIZ 2025.',
      },
      {
        number: '03',
        title: 'Latihan Bertauliah & Transformasi Digital',
        description:
          'Jurulatih Bertauliah HRD Corp yang melatih lebih 1,500 usahawan dalam automasi perniagaan, Google Workspace, e-dagang, dan rancangan perniagaan dengan 95% kepuasan peserta.',
      },
    ],
    sidebar: {
      factSheetTitle: 'Fakta Eksekutif',
      facts: [
        { label: 'Jawatan Semasa', value: 'Pengurus / Perunding Utama, IYBE Bis Point | Impak Niaga' },
        { label: 'Lokasi Operasi', value: 'Bachok, Kelantan · Semenanjung Malaysia' },
        { label: 'Kelulusan Tertinggi', value: 'MBA (Global Marketing), Management & Science University (MSU)' },
        { label: 'Pengalaman Terdahulu', value: 'Ketua Pejabat Wilayah Selatan, PUNB (2005–2019)' },
        { label: 'Keahlian Industri', value: 'Ahli Dewan Perniagaan & Perindustrian ASEAN (ACCI) Selangor' },
      ],
      credentialsTitle: 'Tauliah Profesional',
      ctaTitle: 'Salinan Profil PDF',
      ctaDescription:
        'Muat turun dokumen profil dan resume eksekutif lengkap dalam format PDF yang tersusun untuk rujukan rasmi atau jemputan perundingan.',
    },
  },

  en: {
    navProfile: 'Profile',
    viewTabs: {
      magazine: 'Magazine Profile',
      resume: 'Full Resume',
    },
    actions: {
      downloadPdf: 'Download PDF',
      downloadingPdf: 'Generating PDF...',
      printPage: 'Print Page',
      viewFullResume: 'Explore Full Resume & 14 Projects',
    },
    masthead: 'EXECUTIVE EDITION · PRINCIPAL CONSULTANT FEATURE',
    issueMeta: 'Bachok, Kelantan · Johor Bahru · 18+ Years Leadership',
    coverHeadline: 'Architecting Resilient SME & Entrepreneurial Ecosystems',
    coverDeck:
      'From stewarding RM90 million in Southern Region corporate financing to authoring the Selangor MSME Strategic Masterplan — an editorial portrait of Nik Mohd Nor Arif Bin Yahya’s impact across Malaysia’s enterprise landscape.',
    portraitOverlayRole: 'Manager / Principal Consultant · IYBE Bis Point | Impak Niaga',
    figureCaption:
      'Fig. 01 — Nik Mohd Nor Arif Bin Yahya, Manager & Principal Consultant at IYBE Bis Point | Impak Niaga and HRD Corp Accredited Trainer.',
    storyHeading: 'Leadership Narrative & Strategic Footprint',
    storyByline: 'Executive Dossier · Entrepreneurship Development & SME Strategy',
    leadParagraphs: [
      'With over 18 years at the forefront of Malaysian entrepreneurship development, Nik Mohd Nor Arif Bin Yahya bridges institutional financial rigor with practical, outcome-driven business advisory. His career spans high-volume SME credit stewardship, state-level economic masterplanning, and hands-on digital transformation across micro, small, and medium enterprises.',
      'During his 14-year tenure as Head of the Southern Regional Office at Perbadanan Usahawan Nasional Berhad (PUNB) in Johor Bahru from June 2005 to September 2019, he led a 20-member team to 100% KPI approval and monitoring. Under his stewardship, RM90 million in financing was approved for 400 entrepreneurs, generating 1,000 new jobs and launching more than 200 new businesses.',
      'Today, as Manager and Principal Consultant at IYBE Bis Point | Impak Niaga in Bachok, Kelantan, he continues to shape national SME growth mandates. Highlights include leading an 18-person consulting team on the Selangor Strategic MSME Masterplan 2023–2027, serving as Project Director for SME Corp Malaysia’s GrowBIZ 2025 across Northern and Eastern Zones, and training over 1,500 entrepreneurs through SME Go Digital, INSKEN, PERNAS, and PUNB initiatives.',
    ],
    pullQuote: {
      text: 'Sustainable entrepreneurship emerges when disciplined access to capital is paired with structured strategic coaching and purposeful digital adoption.',
      attribution: 'Nik Mohd Nor Arif Bin Yahya · Principal Consultant & HRD Corp Accredited Trainer',
    },
    pillarsHeading: 'Core Advisory Pillars',
    pillars: [
      {
        number: '01',
        title: 'Corporate Financing & Islamic Credit',
        description:
          'Certified iCCE and iPCC (ADFIM) specialist with a RM90M financing approval track record, rigorous credit risk evaluation, and portfolio KPI governance.',
      },
      {
        number: '02',
        title: 'MSME Policy & Strategic Masterplans',
        description:
          'Principal Consultant for the Selangor Strategic MSME Masterplan 2023–2027 driving a 20% revenue uplift, and Project Director for GrowBIZ 2025.',
      },
      {
        number: '03',
        title: 'Executive Training & Digital Adoption',
        description:
          'HRD Corp Accredited Trainer who has coached 1,500+ entrepreneurs across Google Workspace, e-commerce, and business planning at a 95% satisfaction rate.',
      },
    ],
    sidebar: {
      factSheetTitle: 'Executive Fact Sheet',
      facts: [
        { label: 'Current Role', value: 'Manager / Principal Consultant, IYBE Bis Point | Impak Niaga' },
        { label: 'Operational Base', value: 'Bachok, Kelantan · Peninsular Malaysia' },
        { label: 'Academic Credential', value: 'MBA in Global Marketing, Management & Science University (MSU)' },
        { label: 'Prior Leadership', value: 'Head, Southern Regional Office, PUNB (2005–2019)' },
        { label: 'Industry Affiliation', value: 'Member, ASEAN Chamber of Commerce & Industry (ACCI) Selangor' },
      ],
      credentialsTitle: 'Verified Accreditations',
      ctaTitle: 'Download Profile PDF',
      ctaDescription:
        'Save a clean, board-ready PDF dossier containing the executive biography, impact metrics, work history, and certifications.',
    },
  },

  cn: {
    navProfile: '个人专访',
    viewTabs: {
      magazine: '杂志专访',
      resume: '完整履历',
    },
    actions: {
      downloadPdf: '下载 PDF',
      downloadingPdf: '正在生成 PDF...',
      printPage: '打印页面',
      viewFullResume: '查看完整履历与14项项目记录',
    },
    masthead: '高管特辑 · 首席顾问人物志',
    issueMeta: '吉兰丹万捷 · 柔佛新山 · 18年以上领导经验',
    coverHeadline: '构建高韧性与高增长的中小企业创业生态',
    coverDeck:
      '从主持南区9,000万令吉企业融资，到领导制定雪兰莪州2023–2027年微型及中小企业战略总体规划——深入解析 Nik Mohd Nor Arif Bin Yahya 的专业领导力与行业贡献。',
    portraitOverlayRole: '经理 / 首席顾问 · IYBE Bis Point | Impak Niaga',
    figureCaption:
      '图 01 — Nik Mohd Nor Arif Bin Yahya，IYBE Bis Point | Impak Niaga 经理兼首席顾问及 HRD Corp 认证培训师。',
    storyHeading: '领导历程与战略贡献',
    storyByline: '人物专访 · 创业发展与中小企业战略咨询',
    leadParagraphs: [
      '拥有超过18年马来西亚创业发展一线经验，Nik Mohd Nor Arif Bin Yahya 将金融机构严谨的风险评估体系与务实、结果导向的商业咨询相结合。他的职业版图涵盖大规模中小企业信贷管理、州级经济战略总体规划以及全国企业数字化转型。',
      '2005年6月至2019年9月期间，他在 Perbadanan Usahawan Nasional Berhad (PUNB) 担任南区办事处主管，带领20人团队实现100% KPI 核准与监控目标，累计向400位企业家批出9,000万令吉融资，创造1,000个新就业岗位并扶持启动200余家新企业。',
      '现任吉兰丹万捷 IYBE Bis Point | Impak Niaga 经理兼首席顾问期间，他持续引领国家级与州级中小企业成长项目，包括率领18人顾问团队编制《雪兰莪州2023–2027年MSME战略总体规划》、担任马来西亚中小企业机构 GrowBIZ 2025 北区及东区项目总监，并为超过1,500名企业家提供数字化转型与商业计划培训。',
    ],
    pullQuote: {
      text: '唯有将规范有序的资本支持、系统化的战略辅导与精准的数字化落地结合，中小企业才能实现真正可持续的增长。',
      attribution: 'Nik Mohd Nor Arif Bin Yahya · 首席顾问兼 HRD Corp 认证培训师',
    },
    pillarsHeading: '核心专业支柱',
    pillars: [
      {
        number: '01',
        title: '企业融资与伊斯兰信贷管理',
        description:
          '持有 ADFIM 颁发的 iCCE 与 iPCC 专业认证，具备9,000万令吉融资审批实绩与严谨的信贷组合风控治理能力。',
      },
      {
        number: '02',
        title: '州级规划与中小企业政策咨询',
        description:
          '担任雪兰莪州2023–2027年MSME战略总体规划首席顾问（推动目标企业营收提升20%）及 GrowBIZ 2025 项目总监。',
      },
      {
        number: '03',
        title: '高管培训与企业数字化转型',
        description:
          'HRD Corp 认证培训师，累计培训1,500余名企业家掌握 Google Workspace、电子商务与商业规划，满意度达95%。',
      },
    ],
    sidebar: {
      factSheetTitle: '高管档案摘要',
      facts: [
        { label: '现任职务', value: '经理 / 首席顾问，IYBE Bis Point | Impak Niaga' },
        { label: '运营基地', value: '吉兰丹万捷 (Bachok, Kelantan) · 马来西亚半岛' },
        { label: '最高学历', value: '工商管理硕士 (MBA，主修全球营销)，MSU' },
        { label: '核心履历', value: 'PUNB 南区办事处主管 (2005–2019)' },
        { label: '行业协会', value: '东盟工商会 (ACCI) 雪兰莪分会会员' },
      ],
      credentialsTitle: '专业资质认证',
      ctaTitle: '下载 PDF 个人档案',
      ctaDescription:
        '一键生成并下载排版精良的 PDF 人物专访与履历文件，方便董事会审阅、商务合作或演讲邀约参考。',
    },
  },

  tm: {
    navProfile: 'சுயவிவரம்',
    viewTabs: {
      magazine: 'இதழ் சுயவிவரம்',
      resume: 'முழு சுயவிவரம்',
    },
    actions: {
      downloadPdf: 'PDF பதிவிறக்கு',
      downloadingPdf: 'PDF உருவாகிறது...',
      printPage: 'பக்கத்தை அச்சிடு',
      viewFullResume: 'முழு சுயவிவரம் & 14 திட்டங்களைப் பார்க்க',
    },
    masthead: 'நிர்வாக இதழ் · முதன்மை ஆலோசகர் சிறப்புத் தொகுப்பு',
    issueMeta: 'பாச்சோக், கிளாந்தான் · ஜோகூர் பாரு · 18+ ஆண்டுகள் தலைமைத்துவம்',
    coverHeadline: 'வலுவான SME & தொழில்முனைவோர் சூழலமைப்பை உருவாக்குதல்',
    coverDeck:
      'தெற்கு மண்டலத்தில் RM90 மில்லியன் நிதியுதவியை வழிநடத்தியது முதல் சிலாங்கூர் மாநில MSME மூலோபாய மாஸ்டர் பிளான் வரை — Nik Mohd Nor Arif Bin Yahya அவர்களின் தொழில்முறை தலைமைத்துவப் பயணம்.',
    portraitOverlayRole: 'மேலாளர் / முதன்மை ஆலோசகர் · IYBE Bis Point | Impak Niaga',
    figureCaption:
      'படம் 01 — Nik Mohd Nor Arif Bin Yahya, IYBE Bis Point | Impak Niaga மேலாளர் மற்றும் முதன்மை ஆலோசகர், HRD Corp அங்கீகாரம் பெற்ற பயிற்சியாளர்.',
    storyHeading: 'தலைமைத்துவ வரலாறு & மூலோபாயப் பங்களிப்பு',
    storyByline: 'நிர்வாக ஆவணம் · தொழில்முனைவோர் மேம்பாடு & SME மூலோபாயம்',
    leadParagraphs: [
      'மலேசியத் தொழில்முனைவோர் மேம்பாட்டுத் துறையில் 18 ஆண்டுகளுக்கும் மேலான அனுபவத்துடன், Nik Mohd Nor Arif Bin Yahya நிதி நிறுவனங்களின் ஒழுங்குமுறையையும் நடைமுறை வணிக ஆலோசனையையும் இணைத்துப் பணியாற்றுகிறார். இவரது அனுபவம் பெருநிறுவன நிதியுதவி, மாநில அளவிலான பொருளாதாரத் திட்டமிடல் மற்றும் டிஜிட்டல் மாற்றம் ஆகியவற்றை உள்ளடக்கியது.',
      'ஜூன் 2005 முதல் செப்டம்பர் 2019 வரை ஜோகூர் பாருவில் உள்ள PUNB தெற்கு பிராந்திய அலுவலகத்தின் தலைவராகப் பணியாற்றியபோது, 20 பேர் கொண்ட குழுவை வழிநடத்தி 100% KPI ஒப்புதலை எட்டினார். 400 தொழில்முனைவோருக்கு RM90 மில்லியன் நிதியுதவி வழங்கி, 1,000 புதிய வேலைவாய்ப்புகளையும் 200+ புதிய வணிகங்களையும் உருவாக்கினார்.',
      'தற்போது கிளாந்தானின் பாச்சோக்கில் உள்ள IYBE Bis Point | Impak Niaga நிறுவனத்தின் மேலாளர் மற்றும் முதன்மை ஆலோசகராகப் பணியாற்றும் அவர், சிலாங்கூர் மாநில 2023–2027 MSME மூலோபாய மாஸ்டர் பிளான் உருவாக்கத்திற்கு 18 பேர் கொண்ட குழுவை வழிநடத்தினார். மேலும் SME Corp Malaysia-வின் GrowBIZ 2025 திட்ட இயக்குநராகவும், 1,500+ தொழில்முனைவோருக்கு டிஜிட்டல் மற்றும் வணிகப் பயிற்சியாளராகவும் பணியாற்றியுள்ளார்.',
    ],
    pullQuote: {
      text: 'ஒழுங்குபடுத்தப்பட்ட நிதி அணுகலும், சரியான மூலோபாய வழிகாட்டலும், டிஜிட்டல் தொழில்நுட்பப் பயன்பாடும் இணையும்போது நிலையான தொழில்முனைவு பிறக்கிறது.',
      attribution: 'Nik Mohd Nor Arif Bin Yahya · முதன்மை ஆலோசகர் & HRD Corp பயிற்சியாளர்',
    },
    pillarsHeading: 'முதன்மை நிபுணத்துவத் தூண்கள்',
    pillars: [
      {
        number: '01',
        title: 'நிறுவன நிதியுதவி & இஸ்லாமிய கடன்',
        description:
          'ADFIM வழங்கிய iCCE மற்றும் iPCC சான்றிதழ்களுடன் RM90 மில்லியன் நிதியுதவி ஒப்புதல் மற்றும் கடன் இடர் மதிப்பீட்டு அனுபவம்.',
      },
      {
        number: '02',
        title: 'மாநில MSME கொள்கை & மாஸ்டர் பிளான்',
        description:
          'இலக்கு நிறுவனங்களின் வருவாயை 20% உயர்த்திய சிலாங்கூர் MSME மாஸ்டர் பிளான் 2023–2027 முதன்மை ஆலோசகர் மற்றும் GrowBIZ 2025 திட்ட இயக்குநர்.',
      },
      {
        number: '03',
        title: 'அங்கீகரிக்கப்பட்ட பயிற்சி & டிஜிட்டல் மாற்றம்',
        description:
          '95% திருப்தி மதிப்பெண்ணுடன் 1,500+ தொழில்முனைவோருக்கு Google Workspace, மின்-வணிகம் மற்றும் வணிகத் திட்டப் பயிற்சி அளித்த HRD Corp பயிற்சியாளர்.',
      },
    ],
    sidebar: {
      factSheetTitle: 'நிர்வாக சுருக்க விவரம்',
      facts: [
        { label: 'தற்போதைய பதவி', value: 'மேலாளர் / முதன்மை ஆலோசகர், IYBE Bis Point | Impak Niaga' },
        { label: 'செயல்பாட்டுத் தளம்', value: 'பாச்சோக், கிளாந்தான் · மலேசியா' },
        { label: 'உயர் கல்வித்தகுதி', value: 'MBA (Global Marketing), MSU' },
        { label: 'முந்தைய தலைமைத்துவம்', value: 'தலைவர், தெற்கு பிராந்திய அலுவலகம், PUNB (2005–2019)' },
        { label: 'தொழில்முறை உறுப்பினர்', value: 'ஆசியான் வர்த்தக மற்றும் தொழில் சபை (ACCI) சிலாங்கூர்' },
      ],
      credentialsTitle: 'சான்றளிக்கப்பட்ட தகுதிகள்',
      ctaTitle: 'PDF சுயவிவரத்தைப் பதிவிறக்குக',
      ctaDescription:
        'நிர்வாக வாரியக் குறிப்புகள் அல்லது ஆலோசனை அழைப்புகளுக்காக முழுமையான PDF சுயவிவர ஆவணத்தைப் பதிவிறக்கம் செய்யவும்.',
    },
  },
};

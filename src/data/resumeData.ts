export type LangCode = 'ms' | 'en' | 'cn' | 'tm';

export type ProjectCategory = 'all' | 'strategy' | 'digital' | 'coaching';

export interface JobEntry {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface ProjectEntry {
  id: string;
  title: string;
  organizer: string;
  dateLabel: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
}

export interface CertificationEntry {
  acronym: string;
  title: string;
  issuer: string;
  location: string;
}

export interface SkillWithLevel {
  name: string;
  level: string;
  widthClass: string;
}

export interface ImpactMetric {
  value: string;
  label: string;
  detail: string;
}

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ResumeLocaleContent {
  langName: string;
  theme: {
    label: string;
    light: string;
    dark: string;
    system: string;
  };
  nav: {
    experience: string;
    projects: string;
    credentials: string;
    skills: string;
    printPdf: string;
  };
  hero: {
    kicker: string;
    role: string;
    summary: string;
    emailAction: string;
    copyEmail: string;
    copiedEmail: string;
    phoneLabel: string;
    linkedinLabel: string;
    portraitCaption: string;
  };
  metrics: ImpactMetric[];
  sections: {
    expNumber: string;
    expTitle: string;
    projNumber: string;
    projTitle: string;
    projSearchPlaceholder: string;
    projEmptyTitle: string;
    projEmptyReset: string;
    projCountLabel: string;
    eduNumber: string;
    eduTitle: string;
    certTitle: string;
    skillNumber: string;
    skillTitle: string;
    techLabel: string;
    langLabel: string;
    softLabel: string;
  };
  filters: Record<ProjectCategory, string>;
  jobs: JobEntry[];
  projects: ProjectEntry[];
  education: {
    degree: string;
    institution: string;
    location: string;
    date: string;
  };
  certifications: CertificationEntry[];
  skillsTech: SkillWithLevel[];
  skillsLang: { name: string; level: string }[];
  skillsSoft: string[];
  footer: {
    text: string;
    location: string;
    backToTop: string;
  };
}

export const RESUME_PROFILE = {
  fullName: 'Nik Mohd Nor Arif Bin Yahya',
  shortName: 'Nik Mohd Nor Arif',
  email: 'nikarifyahya@gmail.com',
  phoneDisplay: '+60 11-5676 7707',
  phoneHref: 'tel:+601156767707',
  linkedinUrl: 'https://www.linkedin.com/in/nik-mohd-nor-arif-yahya-0532a5186',
  portraitUrl: 'https://arleta.site/interactivelink/2841/Gambar-Pasport-Nik.jpg',
};

export const LANGUAGE_OPTIONS: { code: LangCode; label: string }[] = [
  { code: 'ms', label: 'Bahasa Melayu' },
  { code: 'en', label: 'English' },
  { code: 'cn', label: '中文 (Mandarin)' },
  { code: 'tm', label: 'தமிழ் (Tamil)' },
];

export const RESUME_DATA: Record<LangCode, ResumeLocaleContent> = {
  ms: {
    langName: 'Bahasa Melayu',
    theme: {
      label: 'Mod paparan',
      light: 'Cerah',
      dark: 'Gelap',
      system: 'Sistem',
    },
    nav: {
      experience: 'Pengalaman',
      projects: 'Projek',
      credentials: 'Kelayakan',
      skills: 'Kemahiran',
      printPdf: 'Cetak / PDF',
    },
    hero: {
      kicker: 'Bachok, Kelantan · Johor Bahru · Jurulatih Bertauliah HRD Corp',
      role: 'Pengurus / Perunding Utama',
      summary:
        'Pemimpin pembangunan keusahawanan dan perunding strategik berpengalaman lebih 18 tahun dalam pembiayaan korporat PKS, penggubalan pelan induk ekonomi negeri, serta transformasi digital bagi ribuan usahawan di seluruh Malaysia.',
      emailAction: 'Hantar E-mel',
      copyEmail: 'Salin E-mel',
      copiedEmail: 'Disalin',
      phoneLabel: 'Telefon',
      linkedinLabel: 'Profil LinkedIn',
      portraitCaption: 'MBA Pemasaran Global · Jurulatih Bertauliah HRD Corp',
    },
    metrics: [
      {
        value: '18+',
        label: 'Tahun Kepimpinan',
        detail: 'PUNB & IYBE Bis Point | Impak Niaga (2005 – Kini)',
      },
      {
        value: 'RM90J',
        label: 'Pembiayaan Diluluskan',
        detail: '400 usahawan · 1,000+ pekerjaan baharu',
      },
      {
        value: '1,500+',
        label: 'Peserta Dilatih',
        detail: '95% skor kepuasan program & bengkel',
      },
      {
        value: '+20%',
        label: 'Peningkatan Hasil & KPI',
        detail: 'Pelan Induk PKS Selangor & sasaran pembiayaan',
      },
    ],
    sections: {
      expNumber: '01',
      expTitle: 'Pengalaman Kerja',
      projNumber: '02',
      projTitle: 'Pengalaman Projek & Perundingan',
      projSearchPlaceholder: 'Cari projek, agensi atau tahun...',
      projEmptyTitle: 'Tiada rekod projek yang sepadan dengan carian anda.',
      projEmptyReset: 'Set semula penapis',
      projCountLabel: 'projek dipaparkan',
      eduNumber: '03',
      eduTitle: 'Pendidikan',
      certTitle: 'Pensijilan Profesional',
      skillNumber: '04',
      skillTitle: 'Kemahiran & Kecekapan',
      techLabel: 'Kemahiran Teknikal',
      langLabel: 'Bahasa',
      softLabel: 'Kemahiran Insaniah & Kepimpinan',
    },
    filters: {
      all: 'Semua',
      strategy: 'Strategik & Dasar',
      digital: 'Digital & E-Dagang',
      coaching: 'Latihan & Bimbingan',
    },
    jobs: [
      {
        id: 'iybe',
        title: 'Pengurus / Perunding Utama',
        company: 'IYBE Bis Point | Impak Niaga',
        location: 'Bachok, Kelantan',
        period: 'Apr 2021 – Kini',
        highlights: [
          'Menilai keperluan latihan dan mereka bentuk program khusus untuk 500+ peserta, meningkatkan kemahiran sebanyak 15% (diukur melalui penilaian pra dan pasca).',
          'Menyampaikan sesi latihan, bengkel, dan seminar berimpak tinggi untuk lebih 1,000 peserta dengan pencapaian kepuasan 95% berdasarkan tinjauan maklum balas.',
          'Menilai keberkesanan program latihan melalui penilaian berstruktur, menghasilkan peningkatan 10% dalam skor tinjauan keberkesanan latihan.',
          'Mengetuai pasukan 18 orang dalam membangunkan pelan induk strategik untuk PKS di Selangor, menyumbang kepada peningkatan 20% dalam hasil perniagaan perusahaan sasaran.',
          'Melatih dan menyediakan khidmat perundingan Program SME Go Digital kepada lebih 1,000 usahawan di Johor, menghasilkan lonjakan 30% dalam jualan dalam talian dan peningkatan 15% bahagian pasaran.',
        ],
      },
      {
        id: 'punb',
        title: 'Ketua, Pejabat Wilayah Selatan',
        company: 'Perbadanan Usahawan Nasional Berhad (PUNB)',
        location: 'Johor Bahru, Johor',
        period: 'Jun 2005 – Sept 2019',
        highlights: [
          'Memimpin pasukan 20 anggota untuk mencapai 100% kelulusan dan pemantauan KPI, memacu prestasi, kecekapan operasi, serta meningkatkan kepuasan pelanggan sebanyak 15%.',
          'Meluluskan pembiayaan untuk 400 usahawan berjumlah RM90 juta, memacu pertumbuhan ekonomi, mewujudkan 1,000 pekerjaan baharu, serta melancarkan lebih 200 perniagaan baharu.',
          'Menjana RM5 juta–RM10 juta dalam pembiayaan, melepasi sasaran KPI sebanyak 20% serta memperkukuh pertumbuhan hasil dan pencapaian sasaran kewangan.',
        ],
      },
    ],
    projects: [
      {
        id: 'p1',
        title: 'Pengarah Projek bagi Zon Utara dan Zon Timur, Program GrowBIZ 2025',
        organizer: 'SME Corp Malaysia',
        dateLabel: '2025',
        category: 'strategy',
        categoryLabel: 'Strategik & Dasar',
      },
      {
        id: 'p2',
        title: 'Perunding Utama — Pembangunan Pelan Induk Perusahaan Mikro, Kecil & Sederhana (PMKS) Strategik 2023–2027 Negeri Selangor',
        organizer: 'Kerajaan Negeri Selangor',
        dateLabel: '2023–2027',
        category: 'strategy',
        categoryLabel: 'Strategik & Dasar',
      },
      {
        id: 'p3',
        title: 'Ahli Dewan Perniagaan & Perindustrian ASEAN (ACCI), Cawangan Selangor',
        organizer: 'ACCI Selangor',
        dateLabel: 'Semasa',
        category: 'strategy',
        categoryLabel: 'Strategik & Dasar',
      },
      {
        id: 'p4',
        title: 'Jurulatih Bengkel Rancangan Perniagaan',
        organizer: 'Institut Keusahawanan Negara (INSKEN)',
        dateLabel: '28 Feb – 1 Mac 2023',
        category: 'coaching',
        categoryLabel: 'Latihan & Bimbingan',
      },
      {
        id: 'p5',
        title: 'Jurulatih Misi Onlinekan Bisnes Menggunakan Google Tools',
        organizer: 'Perbadanan Usahawan Nasional Berhad (PUNB)',
        dateLabel: '19 – 20 Jul 2022',
        category: 'digital',
        categoryLabel: 'Digital & E-Dagang',
      },
      {
        id: 'p6',
        title: 'Jurulatih Bengkel Rancangan Perniagaan',
        organizer: 'Institut Keusahawanan Negara (INSKEN)',
        dateLabel: '15 – 16 Mac 2022',
        category: 'coaching',
        categoryLabel: 'Latihan & Bimbingan',
      },
      {
        id: 'p7',
        title: 'Biskaunselor INSKEN untuk Program Ebisclinic',
        organizer: 'Institut Keusahawanan Negara (INSKEN)',
        dateLabel: '1 Jan – 31 Dis 2022',
        category: 'coaching',
        categoryLabel: 'Latihan & Bimbingan',
      },
      {
        id: 'p8',
        title: 'Bengkel Pembangunan Pelan Strategik Mikro, Kecil dan Sederhana (PMKS)',
        organizer: 'Kementerian Pembangunan Usahawan dan Koperasi (KUSKOP)',
        dateLabel: '12 Jan 2022',
        category: 'strategy',
        categoryLabel: 'Strategik & Dasar',
      },
      {
        id: 'p9',
        title: 'Jurulatih PEP Talk Siri 4: Automasi Pengurusan Perniagaan',
        organizer: 'Perbadanan Usahawan Nasional Berhad (PUNB)',
        dateLabel: '22 Dis 2021',
        category: 'digital',
        categoryLabel: 'Digital & E-Dagang',
      },
      {
        id: 'p10',
        title: 'Jurulatih Program SME Go Digital',
        organizer: 'Perbadanan Usahawan Johor Sdn Bhd (PUJB)',
        dateLabel: '17 Okt – 30 Nov 2021',
        category: 'digital',
        categoryLabel: 'Digital & E-Dagang',
      },
      {
        id: 'p11',
        title: 'Jurulatih Program Be Your Own Boss (BYOB)',
        organizer: 'Perbadanan Nasional Berhad (PERNAS)',
        dateLabel: '23 – 27 Nov 2021',
        category: 'coaching',
        categoryLabel: 'Latihan & Bimbingan',
      },
      {
        id: 'p12',
        title: 'Jurulatih Program Siswa Kalis Masa Hadapan',
        organizer: 'Kolej Komuniti Jeli',
        dateLabel: '2 – 3 Nov 2021',
        category: 'coaching',
        categoryLabel: 'Latihan & Bimbingan',
      },
      {
        id: 'p13',
        title: 'Jurulatih Kursus Membina Web E-Commerce',
        organizer: 'Kolej Komuniti Jeli',
        dateLabel: '28 Jun 2021',
        category: 'digital',
        categoryLabel: 'Digital & E-Dagang',
      },
      {
        id: 'p14',
        title: 'Jurulatih & Perunding Kursus Kesihatan dan Kecerdasan Diri',
        organizer: 'Majlis Bandaraya Johor Bahru (MBJB)',
        dateLabel: '1 – 2 Nov 2020',
        category: 'coaching',
        categoryLabel: 'Latihan & Bimbingan',
      },
    ],
    education: {
      degree: 'Sarjana Pentadbiran Perniagaan (MBA), Major Pemasaran Global',
      institution: 'Management & Science University (MSU)',
      location: 'Shah Alam, Selangor',
      date: 'Sept 2015',
    },
    certifications: [
      {
        acronym: 'HRD Corp',
        title: 'HRD CORP Accredited Trainer',
        issuer: 'Human Resource Development Corporation (HRD Corp)',
        location: 'Kuala Lumpur',
      },
      {
        acronym: 'iCCE',
        title: 'Islamic Certified Credit Executive',
        issuer: 'Association of Development Financial Institutions of Malaysia (ADFIM)',
        location: 'Kuala Lumpur',
      },
      {
        acronym: 'JAKIM',
        title: 'Professional Certificate in Halal Executive',
        issuer: 'Jabatan Kemajuan Islam Malaysia (JAKIM)',
        location: 'Kuala Lumpur',
      },
      {
        acronym: 'CEDAR',
        title: 'Professional Certificate in Business Coaching',
        issuer: 'Centre for Entrepreneur Development and Research (CEDAR)',
        location: 'Kuala Lumpur',
      },
      {
        acronym: 'iPCC',
        title: 'Islamic Professional Credit Certified',
        issuer: 'Association of Development Financial Institutions of Malaysia (ADFIM)',
        location: 'Kuala Lumpur',
      },
    ],
    skillsTech: [
      { name: 'Microsoft 365', level: 'Lanjutan', widthClass: 'w-[95%]' },
      { name: 'Google Workspace', level: 'Lanjutan', widthClass: 'w-[95%]' },
      { name: 'Canva', level: 'Lanjutan', widthClass: 'w-[92%]' },
      { name: 'Pembangunan Laman Web', level: 'Pertengahan', widthClass: 'w-[75%]' },
      { name: 'Adobe Illustrator', level: 'Pertengahan', widthClass: 'w-[72%]' },
      { name: 'SPSS', level: 'Pertengahan', widthClass: 'w-[70%]' },
    ],
    skillsLang: [
      { name: 'Bahasa Melayu', level: 'Bahasa Ibunda' },
      { name: 'Bahasa Inggeris', level: 'Fasih' },
    ],
    skillsSoft: [
      'Komunikasi Strategik',
      'Penyelesaian Masalah',
      'Kerja Berpasukan',
      'Kebolehsuaian',
      'Kepimpinan & Followership',
      'Pengesahan & Penilaian',
      'Managing Up',
      'Kematangan Emosi',
      'Kerendahan Hati',
      'Pelbagai Perspektif',
    ],
    footer: {
      text: 'Bersedia untuk berkhidmat dan menjalin kerjasama strategik.',
      location: 'Bachok, Kelantan · Johor Bahru, Malaysia',
      backToTop: 'Kembali ke atas',
    },
  },

  en: {
    langName: 'English',
    theme: {
      label: 'Display theme',
      light: 'Light',
      dark: 'Dark',
      system: 'System',
    },
    nav: {
      experience: 'Experience',
      projects: 'Projects',
      credentials: 'Credentials',
      skills: 'Skills',
      printPdf: 'Print / PDF',
    },
    hero: {
      kicker: 'Bachok, Kelantan · Johor Bahru · HRD Corp Accredited Trainer',
      role: 'Manager / Principal Consultant',
      summary:
        'Entrepreneurship development leader and principal consultant with over 18 years of experience across SME corporate financing, state-level strategic masterplanning, and digital transformation initiatives across Malaysia.',
      emailAction: 'Email Directly',
      copyEmail: 'Copy Email',
      copiedEmail: 'Copied',
      phoneLabel: 'Phone',
      linkedinLabel: 'LinkedIn Profile',
      portraitCaption: 'MBA Global Marketing · HRD Corp Accredited Trainer',
    },
    metrics: [
      {
        value: '18+',
        label: 'Years Leadership',
        detail: 'PUNB & IYBE Bis Point | Impak Niaga (2005 – Present)',
      },
      {
        value: 'RM90M',
        label: 'Financing Approved',
        detail: '400 entrepreneurs · 1,000+ jobs created',
      },
      {
        value: '1,500+',
        label: 'Participants Trained',
        detail: '95% workshop & seminar satisfaction',
      },
      {
        value: '+20%',
        label: 'Revenue & KPI Uplift',
        detail: 'Selangor SME Masterplan & financing targets',
      },
    ],
    sections: {
      expNumber: '01',
      expTitle: 'Work Experience',
      projNumber: '02',
      projTitle: 'Project & Advisory Experience',
      projSearchPlaceholder: 'Search project, agency, or year...',
      projEmptyTitle: 'No project entries match your current filter.',
      projEmptyReset: 'Reset filters',
      projCountLabel: 'projects shown',
      eduNumber: '03',
      eduTitle: 'Education',
      certTitle: 'Professional Certifications',
      skillNumber: '04',
      skillTitle: 'Skills & Competencies',
      techLabel: 'Technical Proficiency',
      langLabel: 'Languages',
      softLabel: 'Soft Skills & Leadership',
    },
    filters: {
      all: 'All',
      strategy: 'Strategy & Policy',
      digital: 'Digital & E-Commerce',
      coaching: 'Training & Coaching',
    },
    jobs: [
      {
        id: 'iybe',
        title: 'Manager / Principal Consultant',
        company: 'IYBE Bis Point | Impak Niaga',
        location: 'Bachok, Kelantan',
        period: 'Apr 2021 – Present',
        highlights: [
          'Assessed training needs and designed personalized programs for 500+ participants, boosting skills by 15% as measured by pre- and post-assessments.',
          'Delivered engaging training sessions, workshops, and seminars for over 1,000 participants, achieving 95% satisfaction via feedback surveys.',
          'Evaluated training program effectiveness through structured assessments, surveys, and feedback, driving a 10% increase in training effectiveness scores.',
          'Led an 18-person team in developing a strategic masterplan for SMEs in Selangor, resulting in a 20% increase in business revenue for targeted enterprises.',
          'Trained and provided consulting services for the SME Go Digital Program to over 1,000 entrepreneurs in Johor, yielding a 30% increase in online sales and a 15% gain in market share.',
        ],
      },
      {
        id: 'punb',
        title: 'Head, Southern Regional Office',
        company: 'Perbadanan Usahawan Nasional Berhad (PUNB)',
        location: 'Johor Bahru, Johor',
        period: 'Jun 2005 – Sept 2019',
        highlights: [
          'Led a 20-member team to achieve 100% KPI approval and monitoring, enhancing performance, operational efficiency, and organizational success while lifting customer satisfaction by 15%.',
          'Approved financing for 400 entrepreneurs totaling RM90 million, contributing to regional economic growth, creating 1,000 new jobs, and launching 200+ new businesses.',
          'Generated RM5M–RM10M in financing, surpassing KPIs by 20% to accelerate revenue, business growth, and financial target attainment.',
        ],
      },
    ],
    projects: [
      {
        id: 'p1',
        title: 'Project Director for Northern and Eastern Zones, GrowBIZ 2025 Program',
        organizer: 'SME Corp Malaysia',
        dateLabel: '2025',
        category: 'strategy',
        categoryLabel: 'Strategy & Policy',
      },
      {
        id: 'p2',
        title: 'Principal Consultant — Strategic Micro, Small & Medium Enterprise (MSME) Masterplan 2023–2027 for Selangor State',
        organizer: 'Selangor State Government',
        dateLabel: '2023–2027',
        category: 'strategy',
        categoryLabel: 'Strategy & Policy',
      },
      {
        id: 'p3',
        title: 'Member, ASEAN Chamber of Commerce & Industry (ACCI), Selangor Branch',
        organizer: 'ACCI Selangor',
        dateLabel: 'Active',
        category: 'strategy',
        categoryLabel: 'Strategy & Policy',
      },
      {
        id: 'p4',
        title: 'Trainer, Business Plan Workshop',
        organizer: 'Institut Keusahawanan Negara (INSKEN)',
        dateLabel: '28 Feb – 1 Mar 2023',
        category: 'coaching',
        categoryLabel: 'Training & Coaching',
      },
      {
        id: 'p5',
        title: 'Trainer, Misi Onlinekan Bisnes Menggunakan Google Tools',
        organizer: 'Perbadanan Usahawan Nasional Berhad (PUNB)',
        dateLabel: '19 – 20 Jul 2022',
        category: 'digital',
        categoryLabel: 'Digital & E-Commerce',
      },
      {
        id: 'p6',
        title: 'Trainer, Business Plan Workshop',
        organizer: 'Institut Keusahawanan Negara (INSKEN)',
        dateLabel: '15 – 16 Mar 2022',
        category: 'coaching',
        categoryLabel: 'Training & Coaching',
      },
      {
        id: 'p7',
        title: 'Biskaunselor INSKEN, Ebisclinic Advisory Program',
        organizer: 'Institut Keusahawanan Negara (INSKEN)',
        dateLabel: '1 Jan – 31 Dec 2022',
        category: 'coaching',
        categoryLabel: 'Training & Coaching',
      },
      {
        id: 'p8',
        title: 'Participant, Bengkel Pembangunan Pelan Strategik Mikro, Kecil dan Sederhana (PMKS)',
        organizer: 'Ministry of Entrepreneur Development and Cooperatives (KUSKOP)',
        dateLabel: '12 Jan 2022',
        category: 'strategy',
        categoryLabel: 'Strategy & Policy',
      },
      {
        id: 'p9',
        title: 'Trainer, PEP Talk Siri 4: Business Management Automation',
        organizer: 'Perbadanan Usahawan Nasional Berhad (PUNB)',
        dateLabel: '22 Dec 2021',
        category: 'digital',
        categoryLabel: 'Digital & E-Commerce',
      },
      {
        id: 'p10',
        title: 'Trainer, SME Go Digital Program',
        organizer: 'Perbadanan Usahawan Johor Sdn Bhd',
        dateLabel: '17 Oct – 30 Nov 2021',
        category: 'digital',
        categoryLabel: 'Digital & E-Commerce',
      },
      {
        id: 'p11',
        title: 'Trainer, Be Your Own Boss (BYOB) Program',
        organizer: 'Perbadanan Nasional Berhad (PERNAS)',
        dateLabel: '23 – 27 Nov 2021',
        category: 'coaching',
        categoryLabel: 'Training & Coaching',
      },
      {
        id: 'p12',
        title: 'Trainer, Program Siswa Kalis Masa Hadapan',
        organizer: 'Kolej Komuniti Jeli',
        dateLabel: '2 – 3 Nov 2021',
        category: 'coaching',
        categoryLabel: 'Training & Coaching',
      },
      {
        id: 'p13',
        title: 'Trainer, E-Commerce Web Development Course',
        organizer: 'Kolej Komuniti Jeli',
        dateLabel: '28 Jun 2021',
        category: 'digital',
        categoryLabel: 'Digital & E-Commerce',
      },
      {
        id: 'p14',
        title: 'Trainer / Consultant, Health & Personal Wellness Course',
        organizer: 'Majlis Bandaraya Johor Bahru (MBJB)',
        dateLabel: '1 – 2 Nov 2020',
        category: 'coaching',
        categoryLabel: 'Training & Coaching',
      },
    ],
    education: {
      degree: 'Master’s in Business Administration (MBA), Major in Global Marketing',
      institution: 'Management & Science University (MSU)',
      location: 'Shah Alam, Selangor',
      date: 'Sept 2015',
    },
    certifications: [
      {
        acronym: 'HRD Corp',
        title: 'HRD CORP Accredited Trainer',
        issuer: 'Human Resource Development Corporation (HRD Corp)',
        location: 'Kuala Lumpur',
      },
      {
        acronym: 'iCCE',
        title: 'Islamic Certified Credit Executive',
        issuer: 'Association of Development Financial Institutions of Malaysia (ADFIM)',
        location: 'Kuala Lumpur',
      },
      {
        acronym: 'JAKIM',
        title: 'Professional Certificate in Halal Executive',
        issuer: 'Jabatan Kemajuan Islam Malaysia (JAKIM)',
        location: 'Kuala Lumpur',
      },
      {
        acronym: 'CEDAR',
        title: 'Professional Certificate in Business Coaching',
        issuer: 'Centre for Entrepreneur Development and Research (CEDAR)',
        location: 'Kuala Lumpur',
      },
      {
        acronym: 'iPCC',
        title: 'Islamic Professional Credit Certified',
        issuer: 'Association of Development Financial Institutions of Malaysia (ADFIM)',
        location: 'Kuala Lumpur',
      },
    ],
    skillsTech: [
      { name: 'Microsoft 365', level: 'Advance', widthClass: 'w-[95%]' },
      { name: 'Google Workspaces', level: 'Advance', widthClass: 'w-[95%]' },
      { name: 'Canva', level: 'Advance', widthClass: 'w-[92%]' },
      { name: 'Website Development', level: 'Intermediate', widthClass: 'w-[75%]' },
      { name: 'Adobe Illustrator', level: 'Intermediate', widthClass: 'w-[72%]' },
      { name: 'SPSS', level: 'Intermediate', widthClass: 'w-[70%]' },
    ],
    skillsLang: [
      { name: 'Bahasa Melayu', level: 'Native' },
      { name: 'English', level: 'Fluent' },
    ],
    skillsSoft: [
      'Communication',
      'Problem solving',
      'Teamwork',
      'Adaptability',
      'Followership',
      'Validation',
      'Managing up',
      'Emotional maturity',
      'Humility',
      'Multiple perspectives',
    ],
    footer: {
      text: 'Ready to contribute and collaborate on strategic initiatives.',
      location: 'Bachok, Kelantan · Johor Bahru, Malaysia',
      backToTop: 'Back to top',
    },
  },

  cn: {
    langName: '中文 (Mandarin)',
    theme: {
      label: '显示主题',
      light: '浅色',
      dark: '深色',
      system: '跟随系统',
    },
    nav: {
      experience: '工作经验',
      projects: '项目经验',
      credentials: '学历认证',
      skills: '专业技能',
      printPdf: '打印 / PDF',
    },
    hero: {
      kicker: '吉兰丹万捷 (Bachok, Kelantan) · 新山 · HRD Corp 认证培训师',
      role: '经理 / 首席顾问',
      summary:
        '拥有超过18年中小企业企业融资、州级战略总体规划及全国企业家数字化转型经验的创业发展领导者与首席顾问。',
      emailAction: '发送邮件',
      copyEmail: '复制邮箱',
      copiedEmail: '已复制',
      phoneLabel: '电话',
      linkedinLabel: '领英档案',
      portraitCaption: '全球营销工商管理硕士 (MBA) · HRD Corp 认证培训师',
    },
    metrics: [
      {
        value: '18+',
        label: '年领导经验',
        detail: 'PUNB 与 IYBE Bis Point | Impak Niaga (2005 – 至今)',
      },
      {
        value: 'RM90M',
        label: '核准融资总额',
        detail: '400位企业家 · 创造1,000+个新岗位',
      },
      {
        value: '1,500+',
        label: '培训企业家人数',
        detail: '95% 研讨会与课程满意度',
      },
      {
        value: '+20%',
        label: '营收与KPI提升',
        detail: '雪兰莪中小企业规划与融资目标',
      },
    ],
    sections: {
      expNumber: '01',
      expTitle: '工作经验',
      projNumber: '02',
      projTitle: '项目与咨询经验',
      projSearchPlaceholder: '搜索项目、机构或年份...',
      projEmptyTitle: '没有符合筛选条件的项目记录。',
      projEmptyReset: '重置筛选',
      projCountLabel: '个项目',
      eduNumber: '03',
      eduTitle: '教育背景',
      certTitle: '专业认证',
      skillNumber: '04',
      skillTitle: '核心技能',
      techLabel: '技术技能',
      langLabel: '语言能力',
      softLabel: '软技能与领导力',
    },
    filters: {
      all: '全部',
      strategy: '战略与政策',
      digital: '数字化与电商',
      coaching: '培训与辅导',
    },
    jobs: [
      {
        id: 'iybe',
        title: '经理 / 首席顾问',
        company: 'IYBE Bis Point | Impak Niaga',
        location: '吉兰丹万捷 (Bachok, Kelantan)',
        period: '2021年4月 – 至今',
        highlights: [
          '评估培训需求，为500多名参与者设计个性化课程，通过前后评估测量，技能提升达15%。',
          '为1,000多名参与者主讲高互动性培训课程、研讨会及讲座，根据反馈调查满意度达95%。',
          '通过系统化评估、调查和反馈检验培训成效，推动培训有效性调查分数提升10%。',
          '带领18人团队制定雪兰莪州中小企业战略总体规划，推动目标企业业务收入增长20%。',
          '为柔佛州1,000多名企业家提供 SME Go Digital 计划的培训与咨询服务，带动线上销售增长30%、市场份额扩大15%。',
        ],
      },
      {
        id: 'punb',
        title: '南区办事处主管',
        company: 'Perbadanan Usahawan Nasional Berhad (PUNB)',
        location: '柔佛新山 (Johor Bahru)',
        period: '2005年6月 – 2019年9月',
        highlights: [
          '带领20人团队实现100%的KPI批准与监控，全面提升绩效、运营效率与组织成果，并将客户满意度提高15%。',
          '批准为400名企业家提供总计9,000万令吉融资，促进区域经济增长，创造1,000个新就业岗位并扶持启动200多家新企业。',
          '推动500万至1,000万令吉融资业绩，超越KPI指标20%，实现收入增长与财务目标达成。',
        ],
      },
    ],
    projects: [
      {
        id: 'p1',
        title: 'GrowBIZ 2025 计划（北区及东区）项目总监',
        organizer: '马来西亚中小企业机构 (SME Corp Malaysia)',
        dateLabel: '2025',
        category: 'strategy',
        categoryLabel: '战略与政策',
      },
      {
        id: 'p2',
        title: '首席顾问 — 雪兰莪州 2023–2027 年微型、小型及中型企业 (MSME) 战略总体规划',
        organizer: '雪兰莪州政府',
        dateLabel: '2023–2027',
        category: 'strategy',
        categoryLabel: '战略与政策',
      },
      {
        id: 'p3',
        title: '东盟工商会 (ACCI) 雪兰莪分会会员',
        organizer: 'ACCI 雪兰莪分会',
        dateLabel: '现职',
        category: 'strategy',
        categoryLabel: '战略与政策',
      },
      {
        id: 'p4',
        title: '商业计划研讨会培训师',
        organizer: '国家创业学院 (INSKEN)',
        dateLabel: '2023年2月28日 – 3月1日',
        category: 'coaching',
        categoryLabel: '培训与辅导',
      },
      {
        id: 'p5',
        title: '利用 Google 工具实现业务上线任务培训师',
        organizer: 'Perbadanan Usahawan Nasional Berhad (PUNB)',
        dateLabel: '2022年7月19日 – 20日',
        category: 'digital',
        categoryLabel: '数字化与电商',
      },
      {
        id: 'p6',
        title: '商业计划研讨会培训师',
        organizer: '国家创业学院 (INSKEN)',
        dateLabel: '2022年3月15日 – 16日',
        category: 'coaching',
        categoryLabel: '培训与辅导',
      },
      {
        id: 'p7',
        title: 'INSKEN Ebisclinic 项目商业辅导顾问 (Biskaunselor)',
        organizer: '国家创业学院 (INSKEN)',
        dateLabel: '2022年1月1日 – 12月31日',
        category: 'coaching',
        categoryLabel: '培训与辅导',
      },
      {
        id: 'p8',
        title: '微型、小型和中型企业 (PMKS) 战略规划发展研讨会',
        organizer: '企业发展及合作社部 (KUSKOP)',
        dateLabel: '2022年1月12日',
        category: 'strategy',
        categoryLabel: '战略与政策',
      },
      {
        id: 'p9',
        title: 'PEP Talk 系列4：商业管理自动化培训师',
        organizer: 'Perbadanan Usahawan Nasional Berhad (PUNB)',
        dateLabel: '2021年12月22日',
        category: 'digital',
        categoryLabel: '数字化与电商',
      },
      {
        id: 'p10',
        title: 'SME Go Digital 中小企业数字化计划培训师',
        organizer: 'Perbadanan Usahawan Johor Sdn Bhd',
        dateLabel: '2021年10月17日 – 11月30日',
        category: 'digital',
        categoryLabel: '数字化与电商',
      },
      {
        id: 'p11',
        title: 'Be Your Own Boss (BYOB) 创业项目培训师',
        organizer: 'Perbadanan Nasional Berhad (PERNAS)',
        dateLabel: '2021年11月23日 – 27日',
        category: 'coaching',
        categoryLabel: '培训与辅导',
      },
      {
        id: 'p12',
        title: '面向未来学生计划培训师',
        organizer: 'Kolej Komuniti Jeli',
        dateLabel: '2021年11月2日 – 3日',
        category: 'coaching',
        categoryLabel: '培训与辅导',
      },
      {
        id: 'p13',
        title: '电子商务网站建设课程培训师',
        organizer: 'Kolej Komuniti Jeli',
        dateLabel: '2021年6月28日',
        category: 'digital',
        categoryLabel: '数字化与电商',
      },
      {
        id: 'p14',
        title: '个人健康与智力提升课程培训师 / 顾问',
        organizer: '新山市政厅 (MBJB)',
        dateLabel: '2020年11月1日 – 2日',
        category: 'coaching',
        categoryLabel: '培训与辅导',
      },
    ],
    education: {
      degree: '工商管理硕士 (MBA)，主修全球营销',
      institution: '管理与科学大学 (MSU)',
      location: '雪兰莪莎阿南',
      date: '2015年9月',
    },
    certifications: [
      {
        acronym: 'HRD Corp',
        title: 'HRD CORP 认证培训师',
        issuer: '马来西亚人力资源发展机构 (HRD Corp)',
        location: '吉隆坡',
      },
      {
        acronym: 'iCCE',
        title: '伊斯兰认证信贷执行员 (Islamic Certified Credit Executive)',
        issuer: '马来西亚发展金融机构协会 (ADFIM)',
        location: '吉隆坡',
      },
      {
        acronym: 'JAKIM',
        title: '清真执行员专业证书 (Halal Executive)',
        issuer: '马来西亚伊斯兰发展局 (JAKIM)',
        location: '吉隆坡',
      },
      {
        acronym: 'CEDAR',
        title: '商业辅导专业证书 (Business Coaching)',
        issuer: '创业发展与研究中心 (CEDAR)',
        location: '吉隆坡',
      },
      {
        acronym: 'iPCC',
        title: '伊斯兰专业信贷认证 (Islamic Professional Credit Certified)',
        issuer: '马来西亚发展金融机构协会 (ADFIM)',
        location: '吉隆坡',
      },
    ],
    skillsTech: [
      { name: 'Microsoft 365', level: '高级', widthClass: 'w-[95%]' },
      { name: 'Google Workspace', level: '高级', widthClass: 'w-[95%]' },
      { name: 'Canva', level: '高级', widthClass: 'w-[92%]' },
      { name: '网站建设 (Website)', level: '中级', widthClass: 'w-[75%]' },
      { name: 'Adobe Illustrator', level: '中级', widthClass: 'w-[72%]' },
      { name: 'SPSS', level: '中级', widthClass: 'w-[70%]' },
    ],
    skillsLang: [
      { name: '马来语 (Bahasa Melayu)', level: '母语' },
      { name: '英语 (English)', level: '流利' },
    ],
    skillsSoft: [
      '沟通能力',
      '解决问题',
      '团队协作',
      '适应能力',
      '追随力与执行力',
      '评估与验证',
      '向上管理',
      '情绪成熟度',
      '谦逊包容',
      '多元视角',
    ],
    footer: {
      text: '随时准备为您服务并开展战略合作。',
      location: '吉兰丹万捷 (Bachok, Kelantan) · 柔佛新山 · 马来西亚',
      backToTop: '返回顶部',
    },
  },

  tm: {
    langName: 'தமிழ் (Tamil)',
    theme: {
      label: 'காட்சி தீம்',
      light: 'ஒளி',
      dark: 'இருள்',
      system: 'கணினி',
    },
    nav: {
      experience: 'அனுபவம்',
      projects: 'திட்டங்கள்',
      credentials: 'தகுதிகள்',
      skills: 'திறன்கள்',
      printPdf: 'அச்சிடு / PDF',
    },
    hero: {
      kicker: 'பாச்சோக், கிளாந்தான் · ஜோகூர் பாரு · HRD Corp அங்கீகாரம் பெற்ற பயிற்சியாளர்',
      role: 'மேலாளர் / முதன்மை ஆலோசகர்',
      summary:
        'சிறு மற்றும் நடுத்தர நிறுவனங்களுக்கான (SME) நிதியுதவி, மாநில அளவிலான மூலோபாயத் திட்டமிடல் மற்றும் டிஜிட்டல் மாற்றத்தில் 18 ஆண்டுகளுக்கும் மேலான அனுபவம் கொண்ட தொழில்முனைவோர் மேம்பாட்டுத் தலைவர் மற்றும் முதன்மை ஆலோசகர்.',
      emailAction: 'மின்னஞ்சல் அனுப்பு',
      copyEmail: 'மின்னஞ்சலை நகலெடு',
      copiedEmail: 'நகலெடுக்கப்பட்டது',
      phoneLabel: 'தொலைபேசி',
      linkedinLabel: 'LinkedIn சுயவிவரம்',
      portraitCaption: 'MBA குளோபல் மார்க்கெட்டிங் · HRD Corp பயிற்சியாளர்',
    },
    metrics: [
      {
        value: '18+',
        label: 'ஆண்டுகள் தலைமைத்துவம்',
        detail: 'PUNB & IYBE Bis Point | Impak Niaga (2005 – தற்சமயம்)',
      },
      {
        value: 'RM90M',
        label: 'அங்கீகரிக்கப்பட்ட நிதி',
        detail: '400 தொழில்முனைவோர் · 1,000+ புதிய வேலைகள்',
      },
      {
        value: '1,500+',
        label: 'பயிற்சி பெற்றவர்கள்',
        detail: '95% பயிலரங்கு & கருத்தரங்கு திருப்தி',
      },
      {
        value: '+20%',
        label: 'வருவாய் & KPI வளர்ச்சி',
        detail: 'சிலாங்கூர் SME மாஸ்டர் பிளான் & நிதி இலக்குகள்',
      },
    ],
    sections: {
      expNumber: '01',
      expTitle: 'வேலை அனுபவம்',
      projNumber: '02',
      projTitle: 'திட்டம் மற்றும் ஆலோசனை அனுபவம்',
      projSearchPlaceholder: 'திட்டம், நிறுவனம் அல்லது ஆண்டைத் தேடுங்கள்...',
      projEmptyTitle: 'தேடலுக்குப் பொருத்தமான திட்டங்கள் எதுவும் இல்லை.',
      projEmptyReset: 'வடிகட்டியை மீட்டமை',
      projCountLabel: 'திட்டங்கள் காட்டப்படுகின்றன',
      eduNumber: '03',
      eduTitle: 'கல்வி',
      certTitle: 'தொழில்முறை சான்றிதழ்கள்',
      skillNumber: '04',
      skillTitle: 'திறன்கள் மற்றும் தகுதிகள்',
      techLabel: 'தொழில்நுட்ப திறன்',
      langLabel: 'மொழிகள்',
      softLabel: 'மென் திறன்கள் & தலைமைத்துவம்',
    },
    filters: {
      all: 'அனைத்தும்',
      strategy: 'மூலோபாயம் & கொள்கை',
      digital: 'டிஜிட்டல் & மின்-வணிகம்',
      coaching: 'பயிற்சி & வழிகாட்டல்',
    },
    jobs: [
      {
        id: 'iybe',
        title: 'மேலாளர் / முதன்மை ஆலோசகர்',
        company: 'IYBE Bis Point | Impak Niaga',
        location: 'பாச்சோக், கிளாந்தான்',
        period: 'ஏப்ரல் 2021 – தற்சமயம்',
        highlights: [
          'பயிற்சித் தேவைகளை மதிப்பிட்டு, 500+ பங்கேற்பாளர்களுக்கு தனிப்பயனாக்கப்பட்ட திட்டங்களை வடிவமைத்தார்; முன்/பின் மதிப்பீடுகள் மூலம் திறன்களை 15% உயர்த்தினார்.',
          '1,000-க்கும் மேற்பட்ட பங்கேற்பாளர்களுக்கு ஈர்க்கக்கூடிய பயிற்சி அமர்வுகள், பயிலரங்குகள் மற்றும் கருத்தரங்குகளை வழங்கி 95% திருப்தி மதிப்பெண் பெற்றார்.',
          'மதிப்பீடுகள் மற்றும் கருத்துக் கணிப்புகள் மூலம் பயிற்சித் திட்டங்களின் செயல்திறனை மதிப்பீடு செய்து, செயல்திறன் மதிப்பெண்களில் 10% அதிகரிப்பை ஏற்படுத்தினார்.',
          'சிலாங்கூர் SME-களுக்கான மூலோபாய மாஸ்டர் பிளானை உருவாக்க 18 பேர் கொண்ட குழுவை வழிநடத்தி, இலக்கு நிறுவனங்களின் வணிக வருவாயில் 20% வளர்ச்சியை ஏற்படுத்தினார்.',
          'ஜோகூரில் 1,000+ தொழில்முனைவோருக்கு SME Go Digital திட்டத்திற்கான பயிற்சி மற்றும் ஆலோசனை வழங்கி, ஆன்லைன் விற்பனையில் 30% மற்றும் சந்தைப் பங்கில் 15% அதிகரிப்பைக் கொண்டுவந்தார்.',
        ],
      },
      {
        id: 'punb',
        title: 'தலைவர், தெற்கு பிராந்திய அலுவலகம்',
        company: 'Perbadanan Usahawan Nasional Berhad (PUNB)',
        location: 'ஜோகூர் பாரு, ஜோகூர்',
        period: 'ஜூன் 2005 – செப்டம்பர் 2019',
        highlights: [
          '20 பேர் கொண்ட குழுவை வழிநடத்தி 100% KPI ஒப்புதல் மற்றும் கண்காணிப்பை அடைந்து, செயல்திறன், செயல்பாட்டுத் திறன் மற்றும் வாடிக்கையாளர் திருப்தியை 15% அதிகரித்தார்.',
          '400 தொழில்முனைவோருக்கு மொத்தம் RM90 மில்லியன் நிதியுதவிக்கு ஒப்புதல் அளித்து, 1,000 புதிய வேலைவாய்ப்புகளையும் 200+ புதிய வணிகங்களையும் உருவாக்கினார்.',
          'RM5M–RM10M நிதியுதவியை உருவாக்கி, KPI இலக்கை 20% தாண்டி வருவாய் மற்றும் வணிக வளர்ச்சியை மேம்படுத்தினார்.',
        ],
      },
    ],
    projects: [
      {
        id: 'p1',
        title: 'வடக்கு மற்றும் கிழக்கு மண்டலங்களுக்கான திட்ட இயக்குனர், GrowBIZ 2025 திட்டம்',
        organizer: 'SME Corp Malaysia',
        dateLabel: '2025',
        category: 'strategy',
        categoryLabel: 'மூலோபாயம் & கொள்கை',
      },
      {
        id: 'p2',
        title: 'முதன்மை ஆலோசகர் — சிலாங்கூர் மாநிலத்திற்கான MSME மூலோபாய மாஸ்டர் பிளான் 2023–2027',
        organizer: 'சிலாங்கூர் மாநில அரசு',
        dateLabel: '2023–2027',
        category: 'strategy',
        categoryLabel: 'மூலோபாயம் & கொள்கை',
      },
      {
        id: 'p3',
        title: 'ஆசியான் வர்த்தக மற்றும் தொழில் சபை (ACCI) சிலாங்கூர் கிளை உறுப்பினர்',
        organizer: 'ACCI சிலாங்கூர்',
        dateLabel: 'தற்போது',
        category: 'strategy',
        categoryLabel: 'மூலோபாயம் & கொள்கை',
      },
      {
        id: 'p4',
        title: 'வணிகத் திட்டப் பயிலரங்கு பயிற்சியாளர்',
        organizer: 'Institut Keusahawanan Negara (INSKEN)',
        dateLabel: '28 பிப் – 1 மார்ச் 2023',
        category: 'coaching',
        categoryLabel: 'பயிற்சி & வழிகாட்டல்',
      },
      {
        id: 'p5',
        title: 'Google Tools மூலம் வணிகத்தை ஆன்லைன் செய்யும் திட்டத்தின் பயிற்சியாளர்',
        organizer: 'Perbadanan Usahawan Nasional Berhad (PUNB)',
        dateLabel: '19 – 20 ஜூலை 2022',
        category: 'digital',
        categoryLabel: 'டிஜிட்டல் & மின்-வணிகம்',
      },
      {
        id: 'p6',
        title: 'வணிகத் திட்டப் பயிலரங்கு பயிற்சியாளர்',
        organizer: 'Institut Keusahawanan Negara (INSKEN)',
        dateLabel: '15 – 16 மார்ச் 2022',
        category: 'coaching',
        categoryLabel: 'பயிற்சி & வழிகாட்டல்',
      },
      {
        id: 'p7',
        title: 'INSKEN இன் Ebisclinic திட்டத்திற்கான வணிக ஆலோசகர் (Biskaunselor)',
        organizer: 'Institut Keusahawanan Negara (INSKEN)',
        dateLabel: '1 ஜன – 31 டிச 2022',
        category: 'coaching',
        categoryLabel: 'பயிற்சி & வழிகாட்டல்',
      },
      {
        id: 'p8',
        title: 'PMKS மூலோபாயத் திட்ட மேம்பாட்டுப் பயிலரங்கு பங்கேற்பாளர்',
        organizer: 'தொழில்முனைவோர் மேம்பாடு மற்றும் கூட்டுறவு அமைச்சகம் (KUSKOP)',
        dateLabel: '12 ஜன 2022',
        category: 'strategy',
        categoryLabel: 'மூலோபாயம் & கொள்கை',
      },
      {
        id: 'p9',
        title: 'PEP Talk வரிசை 4: வணிக மேலாண்மை ஆட்டோமேஷன் பயிற்சியாளர்',
        organizer: 'Perbadanan Usahawan Nasional Berhad (PUNB)',
        dateLabel: '22 டிச 2021',
        category: 'digital',
        categoryLabel: 'டிஜிட்டல் & மின்-வணிகம்',
      },
      {
        id: 'p10',
        title: 'SME Go Digital திட்டத்தின் பயிற்சியாளர்',
        organizer: 'Perbadanan Usahawan Johor Sdn Bhd',
        dateLabel: '17 அக் – 30 நவ 2021',
        category: 'digital',
        categoryLabel: 'டிஜிட்டல் & மின்-வணிகம்',
      },
      {
        id: 'p11',
        title: 'Be Your Own Boss (BYOB) திட்டத்தின் பயிற்சியாளர்',
        organizer: 'Perbadanan Nasional Berhad (PERNAS)',
        dateLabel: '23 – 27 நவ 2021',
        category: 'coaching',
        categoryLabel: 'பயிற்சி & வழிகாட்டல்',
      },
      {
        id: 'p12',
        title: 'Program Siswa Kalis Masa Hadapan பயிற்சியாளர்',
        organizer: 'Kolej Komuniti Jeli',
        dateLabel: '2 – 3 நவ 2021',
        category: 'coaching',
        categoryLabel: 'பயிற்சி & வழிகாட்டல்',
      },
      {
        id: 'p13',
        title: 'Web Ecommerce உருவாக்கும் பாடத்தின் பயிற்சியாளர்',
        organizer: 'Kolej Komuniti Jeli',
        dateLabel: '28 ஜூன் 2021',
        category: 'digital',
        categoryLabel: 'டிஜிட்டல் & மின்-வணிகம்',
      },
      {
        id: 'p14',
        title: 'சுகாதாரம் மற்றும் சுய அறிவுத்திறன் பாடத்தின் பயிற்சியாளர் / ஆலோசகர்',
        organizer: 'Majlis Bandaraya Johor Bahru (MBJB)',
        dateLabel: '1 – 2 நவ 2020',
        category: 'coaching',
        categoryLabel: 'பயிற்சி & வழிகாட்டல்',
      },
    ],
    education: {
      degree: 'வணிக நிர்வாகத்தில் முதுகலை (MBA), குளோபல் மார்க்கெட்டிங்',
      institution: 'Management & Science University (MSU)',
      location: 'ஷா ஆலாம், சிலாங்கூர்',
      date: 'செப்டம்பர் 2015',
    },
    certifications: [
      {
        acronym: 'HRD Corp',
        title: 'HRD CORP Accredited Trainer',
        issuer: 'Human Resource Development Corporation (HRD Corp)',
        location: 'கோலாலம்பூர்',
      },
      {
        acronym: 'iCCE',
        title: 'Islamic Certified Credit Executive',
        issuer: 'Association of Development Financial Institutions of Malaysia (ADFIM)',
        location: 'கோலாலம்பூர்',
      },
      {
        acronym: 'JAKIM',
        title: 'Professional Certificate in Halal Executive',
        issuer: 'Jabatan Kemajuan Islam Malaysia (JAKIM)',
        location: 'கோலாலம்பூர்',
      },
      {
        acronym: 'CEDAR',
        title: 'Professional Certificate in Business Coaching',
        issuer: 'Centre for Entrepreneur Development and Research (CEDAR)',
        location: 'கோலாலம்பூர்',
      },
      {
        acronym: 'iPCC',
        title: 'Islamic Professional Credit Certified',
        issuer: 'Association of Development Financial Institutions of Malaysia (ADFIM)',
        location: 'கோலாலம்பூர்',
      },
    ],
    skillsTech: [
      { name: 'Microsoft 365', level: 'மேம்பட்ட நிலை', widthClass: 'w-[95%]' },
      { name: 'Google Workspaces', level: 'மேம்பட்ட நிலை', widthClass: 'w-[95%]' },
      { name: 'Canva', level: 'மேம்பட்ட நிலை', widthClass: 'w-[92%]' },
      { name: 'Website', level: 'இடைநிலை', widthClass: 'w-[75%]' },
      { name: 'Adobe Illustrator', level: 'இடைநிலை', widthClass: 'w-[72%]' },
      { name: 'SPSS', level: 'இடைநிலை', widthClass: 'w-[70%]' },
    ],
    skillsLang: [
      { name: 'Bahasa Melayu', level: 'தாய்மொழி' },
      { name: 'English', level: 'சரளமாக' },
    ],
    skillsSoft: [
      'தொடர்பு திறன்',
      'பிரச்சனை தீர்வு',
      'குழுப்பணி',
      'தகவமைப்பு',
      'தலைமைத்துவம் & பின்தொடர்தல்',
      'மதிப்பீடு & உறுதிப்படுத்தல்',
      'மேல்நிலை மேலாண்மை',
      'உணர்ச்சி முதிர்ச்சி',
      'பணிவு',
      'பல்வேறு கோணங்கள்',
    ],
    footer: {
      text: 'சேவையாற்றவும் மூலோபாய கூட்டாண்மைக்கும் தயார்.',
      location: 'பாச்சோக், கிளாந்தான் · ஜோகூர் பாரு, மலேசியா',
      backToTop: 'மேலே செல்',
    },
  },
};

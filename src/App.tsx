/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useMemo, useState } from 'react';
import {
  BookOpen,
  Check,
  Copy,
  Download,
  ExternalLink,
  FileText,
  Mail,
  Monitor,
  Moon,
  Phone,
  Printer,
  Search,
  Sun,
  X,
} from 'lucide-react';
import { MagazineProfile } from './components/MagazineProfile';
import { PortraitAvatar } from './components/PortraitAvatar';
import { MAGAZINE_DATA } from './data/magazineData';
import {
  LANGUAGE_OPTIONS,
  ProjectCategory,
  RESUME_DATA,
  RESUME_PROFILE,
  type LangCode,
  type ThemeMode,
} from './data/resumeData';
import { generateProfilePdf } from './utils/generateProfilePdf';

type ActiveView = 'magazine' | 'resume';

const THEME_STORAGE_KEY = 'resume-theme';

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'system';
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'light' || saved === 'dark' || saved === 'system') {
      return saved;
    }
  } catch {
    // Ignore storage access errors in restricted frames
  }
  return 'system';
}

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('magazine');
  const [lang, setLang] = useState<LangCode>('ms');
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const content = RESUME_DATA[lang];
  const magazine = MAGAZINE_DATA[lang];

  useEffect(() => {
    document.documentElement.lang = lang === 'cn' ? 'zh-Hans' : lang === 'tm' ? 'ta' : lang;
  }, [lang]);

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      const shouldUseDark =
        theme === 'dark' || (theme === 'system' && mediaQuery.matches);
      root.classList.toggle('dark', shouldUseDark);
    };

    applyTheme();

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage access errors
    }

    if (theme === 'system') {
      mediaQuery.addEventListener('change', applyTheme);
      return () => mediaQuery.removeEventListener('change', applyTheme);
    }
    return undefined;
  }, [theme]);

  useEffect(() => {
    if (!copiedEmail) return;
    const timer = window.setTimeout(() => setCopiedEmail(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copiedEmail]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(RESUME_PROFILE.email);
      setCopiedEmail(true);
    } catch {
      window.location.href = `mailto:${RESUME_PROFILE.email}`;
    }
  };

  const handleDownloadPdf = async () => {
    if (isGeneratingPdf) return;
    setIsGeneratingPdf(true);
    try {
      await generateProfilePdf(lang);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const navigateToResumeSection = (sectionId: string) => {
    setActiveView('resume');
    window.setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  const navigateToMagazine = () => {
    setActiveView('magazine');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return content.projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'all' || project.category === activeCategory;
      if (!matchesCategory) return false;
      if (!query) return true;
      return (
        project.title.toLowerCase().includes(query) ||
        project.organizer.toLowerCase().includes(query) ||
        project.dateLabel.toLowerCase().includes(query) ||
        project.categoryLabel.toLowerCase().includes(query)
      );
    });
  }, [content.projects, activeCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    return {
      all: content.projects.length,
      strategy: content.projects.filter((p) => p.category === 'strategy').length,
      digital: content.projects.filter((p) => p.category === 'digital').length,
      coaching: content.projects.filter((p) => p.category === 'coaching').length,
    };
  }, [content.projects]);

  const themeOptions: {
    mode: ThemeMode;
    label: string;
    Icon: typeof Sun;
  }[] = [
    { mode: 'light', label: content.theme.light, Icon: Sun },
    { mode: 'dark', label: content.theme.dark, Icon: Moon },
    { mode: 'system', label: content.theme.system, Icon: Monitor },
  ];

  return (
    <div
      id="top"
      className="min-h-screen bg-[#F8F8F6] text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-150"
    >
      {/* Top Bar Contract: 3 clean zones separated by gap-8 */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 dark:border-slate-800 dark:bg-slate-900/95 backdrop-blur-sm print:hidden">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-8 px-6 lg:px-8">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              navigateToMagazine();
            }}
            className="font-display text-lg font-semibold tracking-tight text-slate-950 dark:text-slate-50 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900 dark:focus-visible:outline-blue-400"
          >
            {RESUME_PROFILE.shortName}
          </a>

          <nav
            aria-label="Primary sections"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300"
          >
            <button
              type="button"
              onClick={navigateToMagazine}
              className={`whitespace-nowrap shrink-0 py-1 hover:text-slate-950 dark:hover:text-white hover:underline underline-offset-4 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900 dark:focus-visible:outline-blue-400 ${
                activeView === 'magazine'
                  ? 'text-slate-950 dark:text-white underline'
                  : ''
              }`}
            >
              {magazine.navProfile}
            </button>
            <button
              type="button"
              onClick={() => navigateToResumeSection('experience')}
              className="whitespace-nowrap shrink-0 py-1 hover:text-slate-950 dark:hover:text-white hover:underline underline-offset-4 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900 dark:focus-visible:outline-blue-400"
            >
              {content.nav.experience}
            </button>
            <button
              type="button"
              onClick={() => navigateToResumeSection('projects')}
              className="whitespace-nowrap shrink-0 py-1 hover:text-slate-950 dark:hover:text-white hover:underline underline-offset-4 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900 dark:focus-visible:outline-blue-400"
            >
              {content.nav.projects}
            </button>
            <button
              type="button"
              onClick={() => navigateToResumeSection('credentials')}
              className="whitespace-nowrap shrink-0 py-1 hover:text-slate-950 dark:hover:text-white hover:underline underline-offset-4 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900 dark:focus-visible:outline-blue-400"
            >
              {content.nav.credentials}
            </button>
            <button
              type="button"
              onClick={() => navigateToResumeSection('skills')}
              className="whitespace-nowrap shrink-0 py-1 hover:text-slate-950 dark:hover:text-white hover:underline underline-offset-4 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900 dark:focus-visible:outline-blue-400"
            >
              {content.nav.skills}
            </button>
          </nav>

          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={isGeneratingPdf}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-950 px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-blue-900 disabled:opacity-60 dark:bg-blue-600 dark:hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 dark:focus-visible:outline-blue-400 cursor-pointer"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            <span>
              {isGeneratingPdf
                ? magazine.actions.downloadingPdf
                : magazine.actions.downloadPdf}
            </span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8 lg:px-8 lg:py-10">
        {/* Workspace Toolbar: View Mode, Language Switcher & Light/Dark/System Theme Toggle */}
        <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-5 dark:border-slate-800 print:hidden">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              {/* View Switcher: Magazine Profile vs Full Resume */}
              <div
                role="group"
                aria-label="View mode"
                className="inline-flex items-center gap-1 rounded-lg bg-slate-200/75 p-1 dark:bg-slate-800/90"
              >
                <button
                  type="button"
                  aria-pressed={activeView === 'magazine'}
                  onClick={() => setActiveView('magazine')}
                  className={`inline-flex items-center gap-1.5 rounded-md px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 dark:focus-visible:outline-blue-400 ${
                    activeView === 'magazine'
                      ? 'bg-white text-slate-950 shadow-sm dark:bg-slate-950 dark:text-slate-50'
                      : 'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{magazine.viewTabs.magazine}</span>
                </button>

                <button
                  type="button"
                  aria-pressed={activeView === 'resume'}
                  onClick={() => setActiveView('resume')}
                  className={`inline-flex items-center gap-1.5 rounded-md px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 dark:focus-visible:outline-blue-400 ${
                    activeView === 'resume'
                      ? 'bg-white text-slate-950 shadow-sm dark:bg-slate-950 dark:text-slate-50'
                      : 'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{magazine.viewTabs.resume}</span>
                </button>
              </div>

              {/* Language Switcher */}
              <div
                role="group"
                aria-label="Language switcher"
                className="inline-flex flex-wrap items-center gap-1 rounded-lg bg-slate-200/75 p-1 dark:bg-slate-800/90"
              >
                {LANGUAGE_OPTIONS.map((option) => {
                  const isActive = lang === option.code;
                  return (
                    <button
                      key={option.code}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setLang(option.code)}
                      className={`rounded-md px-3 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 dark:focus-visible:outline-blue-400 ${
                        isActive
                          ? 'bg-white text-slate-950 shadow-sm dark:bg-slate-950 dark:text-slate-50'
                          : 'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Theme Toggle: Light / Dark / System */}
            <div
              role="group"
              aria-label={content.theme.label}
              className="inline-flex items-center gap-1 rounded-lg bg-slate-200/75 p-1 dark:bg-slate-800/90"
            >
              {themeOptions.map(({ mode, label, Icon }) => {
                const isActive = theme === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setTheme(mode)}
                    className={`inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 dark:focus-visible:outline-blue-400 ${
                      isActive
                        ? 'bg-white text-slate-950 shadow-sm dark:bg-slate-950 dark:text-slate-50'
                        : 'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {activeView === 'magazine' ? (
          <MagazineProfile
            magazine={magazine}
            resume={content}
            isGeneratingPdf={isGeneratingPdf}
            copiedEmail={copiedEmail}
            onDownloadPdf={handleDownloadPdf}
            onPrint={handlePrint}
            onCopyEmail={handleCopyEmail}
            onViewFullResume={() => navigateToResumeSection('experience')}
          />
        ) : (
          /* Executive Resume Dossier Surface */
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 lg:p-12 dark:border-slate-800 dark:bg-slate-900 print:border-none print:bg-white print:p-0">
            {/* Split Hero Section */}
            <section className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-stretch">
              <div className="flex flex-col justify-between lg:col-span-8">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-blue-900 dark:text-blue-400">
                    {content.hero.role}
                  </p>

                  <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl leading-[1.12] [text-wrap:balance]">
                    {RESUME_PROFILE.fullName}
                  </h1>

                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {content.hero.summary}
                  </p>
                </div>

                {/* Contact & Export Actions */}
                <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={`mailto:${RESUME_PROFILE.email}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-blue-950 dark:bg-blue-600 dark:hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 dark:focus-visible:outline-blue-400"
                  >
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{RESUME_PROFILE.email}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 whitespace-nowrap shrink-0 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-white cursor-pointer print:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 dark:focus-visible:outline-blue-400"
                  >
                    {copiedEmail ? (
                      <>
                        <Check
                          className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400"
                          aria-hidden="true"
                        />
                        <span className="text-emerald-800 dark:text-emerald-300">
                          {content.hero.copiedEmail}
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{content.hero.copyEmail}</span>
                      </>
                    )}
                  </button>

                  <a
                    href={RESUME_PROFILE.phoneHref}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-800 whitespace-nowrap shrink-0 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 dark:focus-visible:outline-blue-400"
                  >
                    <Phone
                      className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400"
                      aria-hidden="true"
                    />
                    <span className="font-mono-tabular">{RESUME_PROFILE.phoneDisplay}</span>
                  </a>

                  <a
                    href={RESUME_PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-800 whitespace-nowrap shrink-0 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 dark:focus-visible:outline-blue-400"
                  >
                    <span>{content.hero.linkedinLabel}</span>
                    <ExternalLink
                      className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400"
                      aria-hidden="true"
                    />
                  </a>

                  <button
                    type="button"
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 whitespace-nowrap shrink-0 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-white cursor-pointer print:hidden"
                  >
                    <Printer className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{magazine.actions.printPage}</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4">
                <PortraitAvatar
                  src={RESUME_PROFILE.portraitUrl}
                  alt={RESUME_PROFILE.fullName}
                  caption={content.hero.portraitCaption}
                />
              </div>
            </section>

            {/* 4-Column Quantitative Impact Strip */}
            <section
              aria-label="Key achievements"
              className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-800 sm:grid-cols-2 lg:grid-cols-4"
            >
              {content.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-[#FAF9F6] p-5 dark:bg-slate-800/60"
                >
                  <div className="font-mono-tabular text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-3xl">
                    {metric.value}
                  </div>
                  <div className="mt-1.5 text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {metric.label}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {metric.detail}
                  </div>
                </div>
              ))}
            </section>

            {/* 01. Work Experience */}
            <section id="experience" className="mt-14 scroll-mt-20">
              <div className="flex items-baseline gap-3 border-b border-slate-200 pb-4 dark:border-slate-800">
                <span className="font-mono-tabular text-xs font-semibold text-blue-900 dark:text-blue-400">
                  {content.sections.expNumber}.
                </span>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-3xl">
                  {content.sections.expTitle}
                </h2>
              </div>

              <div className="divide-y divide-slate-200 dark:divide-slate-800">
                {content.jobs.map((job) => (
                  <article
                    key={job.id}
                    className="print-avoid-break grid grid-cols-1 gap-6 py-8 lg:grid-cols-12 lg:gap-10"
                  >
                    <div className="lg:col-span-4">
                      <div className="font-mono-tabular text-xs font-semibold text-blue-900 dark:text-blue-400">
                        {job.period}
                      </div>
                      <h3 className="mt-2 text-base font-semibold text-slate-950 dark:text-slate-50">
                        {job.company}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {job.location}
                      </p>
                    </div>

                    <div className="lg:col-span-8">
                      <h4 className="text-lg font-semibold text-slate-950 dark:text-slate-50">
                        {job.title}
                      </h4>
                      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-[15px]">
                        {job.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900 dark:bg-blue-400"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* 02. Project & Advisory Experience */}
            <section id="projects" className="mt-14 scroll-mt-20">
              <div className="flex flex-col gap-4 border-b border-slate-200 pb-4 dark:border-slate-800 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono-tabular text-xs font-semibold text-blue-900 dark:text-blue-400">
                    {content.sections.projNumber}.
                  </span>
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-3xl">
                    {content.sections.projTitle}
                  </h2>
                </div>

                <span className="font-mono-tabular text-xs font-medium text-slate-500 dark:text-slate-400">
                  {filteredProjects.length} {content.sections.projCountLabel}
                </span>
              </div>

              {/* Interactive Filter & Search Controls */}
              <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between print:hidden">
                <div
                  role="group"
                  aria-label="Project category filter"
                  className="inline-flex flex-wrap items-center gap-1 rounded-lg bg-slate-100 p-1 dark:bg-slate-800"
                >
                  {(
                    [
                      { key: 'all', label: content.filters.all, count: categoryCounts.all },
                      { key: 'strategy', label: content.filters.strategy, count: categoryCounts.strategy },
                      { key: 'digital', label: content.filters.digital, count: categoryCounts.digital },
                      { key: 'coaching', label: content.filters.coaching, count: categoryCounts.coaching },
                    ] as const
                  ).map((tab) => {
                    const isActive = activeCategory === tab.key;
                    return (
                      <button
                        key={tab.key}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setActiveCategory(tab.key)}
                        className={`rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 dark:focus-visible:outline-blue-400 ${
                          isActive
                            ? 'bg-white text-slate-950 shadow-sm dark:bg-slate-950 dark:text-slate-50'
                            : 'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'
                        }`}
                      >
                        {tab.label}{' '}
                        <span className="font-mono-tabular text-slate-400 dark:text-slate-500">
                          ({tab.count})
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="relative w-full lg:w-72">
                  <Search
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={content.sections.projSearchPlaceholder}
                    aria-label={content.sections.projSearchPlaceholder}
                    className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-9 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-400"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-200 cursor-pointer"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {filteredProjects.length > 0 ? (
                <div className="mt-6 divide-y divide-slate-200 border-t border-slate-200 dark:divide-slate-800 dark:border-slate-800">
                  {filteredProjects.map((project, index) => (
                    <div
                      key={project.id}
                      className="print-avoid-break grid grid-cols-1 gap-2 py-4 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                    >
                      <div className="font-mono-tabular text-xs font-medium text-slate-500 dark:text-slate-400 sm:col-span-3">
                        <span className="mr-2 text-slate-400 dark:text-slate-500">
                          {String(index + 1).padStart(2, '0')}.
                        </span>
                        {project.dateLabel}
                      </div>

                      <div className="sm:col-span-9">
                        <h3 className="text-sm font-semibold text-slate-950 dark:text-slate-50 sm:text-[15px]">
                          {project.title}
                        </h3>
                        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                          <span className="font-medium text-slate-700 dark:text-slate-300">
                            {project.organizer}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{project.categoryLabel}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-6 rounded-xl border border-slate-200 bg-[#FAF9F6] p-8 text-center dark:border-slate-800 dark:bg-slate-800/50">
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {content.sections.projEmptyTitle}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory('all');
                      setSearchQuery('');
                    }}
                    className="mt-4 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 cursor-pointer"
                  >
                    {content.sections.projEmptyReset}
                  </button>
                </div>
              )}
            </section>

            {/* 03. Education & Professional Certifications */}
            <section id="credentials" className="mt-14 scroll-mt-20">
              <div className="flex items-baseline gap-3 border-b border-slate-200 pb-4 dark:border-slate-800">
                <span className="font-mono-tabular text-xs font-semibold text-blue-900 dark:text-blue-400">
                  {content.sections.eduNumber}.
                </span>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-3xl">
                  {content.sections.eduTitle} &amp; {content.sections.certTitle}
                </h2>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
                {/* Education Column */}
                <div className="lg:col-span-5">
                  <h3 className="text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                    {content.sections.eduTitle}
                  </h3>

                  <div className="mt-4 rounded-xl border border-slate-200 bg-[#FAF9F6] p-6 dark:border-slate-800 dark:bg-slate-800/60 print-avoid-break">
                    <div className="font-mono-tabular text-xs font-semibold text-blue-900 dark:text-blue-400">
                      {content.education.date}
                    </div>
                    <h4 className="font-display mt-2 text-xl font-semibold leading-snug text-slate-950 dark:text-slate-50">
                      {content.education.degree}
                    </h4>
                    <p className="mt-3 text-sm font-medium text-slate-800 dark:text-slate-200">
                      {content.education.institution}
                    </p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {content.education.location}
                    </p>
                  </div>
                </div>

                {/* Certifications Column */}
                <div className="lg:col-span-7">
                  <h3 className="text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                    {content.sections.certTitle}
                  </h3>

                  <div className="mt-4 divide-y divide-slate-200 border-t border-slate-200 dark:divide-slate-800 dark:border-slate-800">
                    {content.certifications.map((cert) => (
                      <div
                        key={cert.title}
                        className="print-avoid-break grid grid-cols-1 gap-1 py-4 sm:grid-cols-12 sm:items-baseline sm:gap-4"
                      >
                        <div className="font-mono-tabular text-xs font-semibold text-blue-900 dark:text-blue-400 sm:col-span-3">
                          {cert.acronym}
                        </div>
                        <div className="sm:col-span-9">
                          <div className="text-sm font-semibold text-slate-950 dark:text-slate-50">
                            {cert.title}
                          </div>
                          <div className="mt-1 flex flex-wrap items-center gap-x-2 text-xs text-slate-500 dark:text-slate-400">
                            <span>{cert.issuer}</span>
                            <span aria-hidden="true">·</span>
                            <span>{cert.location}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 04. Skills & Competencies */}
            <section id="skills" className="mt-14 scroll-mt-20">
              <div className="flex items-baseline gap-3 border-b border-slate-200 pb-4 dark:border-slate-800">
                <span className="font-mono-tabular text-xs font-semibold text-blue-900 dark:text-blue-400">
                  {content.sections.skillNumber}.
                </span>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-3xl">
                  {content.sections.skillTitle}
                </h2>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
                {/* Technical Skills with clean level meter */}
                <div className="lg:col-span-5">
                  <h3 className="text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                    {content.sections.techLabel}
                  </h3>

                  <div className="mt-4 space-y-4">
                    {content.skillsTech.map((skill) => (
                      <div key={skill.name} className="print-avoid-break">
                        <div className="flex items-baseline justify-between text-sm">
                          <span className="font-medium text-slate-900 dark:text-slate-100">
                            {skill.name}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {skill.level}
                          </span>
                        </div>
                        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                          <div
                            className={`h-full rounded-full bg-blue-900 dark:bg-blue-400 ${skill.widthClass}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="lg:col-span-3">
                  <h3 className="text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                    {content.sections.langLabel}
                  </h3>

                  <div className="mt-4 divide-y divide-slate-200 border-t border-slate-200 dark:divide-slate-800 dark:border-slate-800">
                    {content.skillsLang.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-baseline justify-between py-3 text-sm"
                      >
                        <span className="font-medium text-slate-900 dark:text-slate-100">
                          {item.name}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Soft Skills & Leadership (Clean editorial list, zero pills) */}
                <div className="lg:col-span-4">
                  <h3 className="text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                    {content.sections.softLabel}
                  </h3>

                  <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 border-t border-slate-200 pt-4 text-sm text-slate-700 dark:border-slate-800 dark:text-slate-300">
                    {content.skillsSoft.map((skill) => (
                      <li key={skill} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500"
                        />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Quiet Editorial Footer */}
      <footer className="mx-auto max-w-6xl px-6 pb-12 pt-4 lg:px-8 print:hidden">
        <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="font-medium text-slate-700 dark:text-slate-200">
              © {new Date().getFullYear()} {RESUME_PROFILE.fullName}
            </span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>{content.footer.text}</span>
          </div>

          <div className="flex items-center gap-4">
            <span>{content.footer.location}</span>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-semibold text-slate-700 hover:text-slate-950 hover:underline underline-offset-4 dark:text-slate-300 dark:hover:text-white"
            >
              {content.footer.backToTop}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

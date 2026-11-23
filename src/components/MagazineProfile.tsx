import { useState } from 'react';
import {
  ArrowRight,
  Check,
  Copy,
  Download,
  ExternalLink,
  Mail,
  Phone,
  Printer,
} from 'lucide-react';
import type { MagazineLocaleContent } from '../data/magazineData';
import { RESUME_PROFILE, type ResumeLocaleContent } from '../data/resumeData';

interface MagazineProfileProps {
  magazine: MagazineLocaleContent;
  resume: ResumeLocaleContent;
  isGeneratingPdf: boolean;
  copiedEmail: boolean;
  onDownloadPdf: () => void;
  onPrint: () => void;
  onCopyEmail: () => void;
  onViewFullResume: () => void;
}

export function MagazineProfile({
  magazine,
  resume,
  isGeneratingPdf,
  copiedEmail,
  onDownloadPdf,
  onPrint,
  onCopyEmail,
  onViewFullResume,
}: MagazineProfileProps) {
  const [portraitError, setPortraitError] = useState(false);

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 lg:p-12 dark:border-slate-800 dark:bg-slate-900 print:border-none print:bg-white print:p-0">
      {/* Magazine Masthead Bar */}
      <header className="border-b-2 border-slate-950 pb-4 dark:border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold tracking-widest text-blue-900 dark:text-blue-400">
          <span>{magazine.masthead}</span>
          <span className="font-mono-tabular text-slate-500 dark:text-slate-400">
            {magazine.issueMeta}
          </span>
        </div>

        <h1 className="font-display mt-5 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl lg:text-[3.35rem] leading-[1.08] [text-wrap:balance]">
          {magazine.coverHeadline}
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
          {magazine.coverDeck}
        </p>
      </header>

      {/* Cover Spread: Editorial Portrait + Identity & Metrics */}
      <section className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-stretch">
        {/* Left: 3:4 Feature Portrait */}
        <div className="lg:col-span-5">
          <figure className="flex h-full flex-col">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800">
              {!portraitError ? (
                <img
                  src={RESUME_PROFILE.portraitUrl}
                  alt={RESUME_PROFILE.fullName}
                  referrerPolicy="no-referrer"
                  onError={() => setPortraitError(true)}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 p-8 text-center text-white">
                  <span className="font-display text-6xl font-semibold tracking-tight text-slate-100">
                    NM
                  </span>
                  <span className="mt-3 text-xs tracking-wider text-slate-300">
                    {RESUME_PROFILE.fullName}
                  </span>
                </div>
              )}

              {/* Measured Scrim Overlay for Cover Readability */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent p-5 pt-16">
                <div className="font-display text-xl font-semibold text-white">
                  {RESUME_PROFILE.fullName}
                </div>
                <div className="mt-1 text-xs font-medium text-slate-200">
                  {magazine.portraitOverlayRole}
                </div>
              </div>
            </div>

            <figcaption className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400 italic">
              {magazine.figureCaption}
            </figcaption>
          </figure>
        </div>

        {/* Right: Executive Bio Summary, 2x2 Impact Grid & Direct Actions */}
        <div className="flex flex-col justify-between lg:col-span-7">
          <div>
            <div className="text-xs font-semibold tracking-wider text-blue-900 dark:text-blue-400">
              {resume.hero.role}
            </div>
            <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-3xl">
              {RESUME_PROFILE.fullName}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              {resume.hero.summary}
            </p>

            {/* 2x2 Impact Grid */}
            <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-800 sm:grid-cols-2">
              {resume.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-[#FAF9F6] p-4 dark:bg-slate-800/60"
                >
                  <div className="font-mono-tabular text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-900 dark:text-slate-100">
                    {metric.label}
                  </div>
                  <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    {metric.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & PDF Action Panel */}
          <div className="mt-6 space-y-4 border-t border-slate-200 pt-6 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={`mailto:${RESUME_PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 whitespace-nowrap shrink-0 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" aria-hidden="true" />
                <span>{RESUME_PROFILE.email}</span>
              </a>

              <button
                type="button"
                onClick={onCopyEmail}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 whitespace-nowrap shrink-0 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-white cursor-pointer print:hidden"
              >
                {copiedEmail ? (
                  <>
                    <Check
                      className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400"
                      aria-hidden="true"
                    />
                    <span className="text-emerald-800 dark:text-emerald-300">
                      {resume.hero.copiedEmail}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{resume.hero.copyEmail}</span>
                  </>
                )}
              </button>

              <a
                href={RESUME_PROFILE.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 whitespace-nowrap shrink-0 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-white"
              >
                <Phone className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" aria-hidden="true" />
                <span className="font-mono-tabular">{RESUME_PROFILE.phoneDisplay}</span>
              </a>

              <a
                href={RESUME_PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 whitespace-nowrap shrink-0 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-white"
              >
                <span>{resume.hero.linkedinLabel}</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" aria-hidden="true" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 print:hidden">
              <button
                type="button"
                onClick={onDownloadPdf}
                disabled={isGeneratingPdf}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-950 px-5 py-2.5 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-blue-900 disabled:opacity-60 dark:bg-blue-600 dark:hover:bg-blue-500 cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                <span>
                  {isGeneratingPdf
                    ? magazine.actions.downloadingPdf
                    : magazine.actions.downloadPdf}
                </span>
              </button>

              <button
                type="button"
                onClick={onViewFullResume}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-900 whitespace-nowrap shrink-0 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 cursor-pointer"
              >
                <span>{magazine.actions.viewFullResume}</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onPrint}
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-xs font-semibold text-slate-600 whitespace-nowrap shrink-0 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white cursor-pointer"
              >
                <Printer className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{magazine.actions.printPage}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Article & Margin Dossier */}
      <section className="mt-14 border-t border-slate-200 pt-10 dark:border-slate-800">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Main Editorial Narrative Column */}
          <div className="lg:col-span-8">
            <div className="border-b border-slate-200 pb-4 dark:border-slate-800">
              <p className="text-xs font-semibold tracking-wider text-blue-900 dark:text-blue-400">
                {magazine.storyByline}
              </p>
              <h2 className="font-display mt-1.5 text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-3xl">
                {magazine.storyHeading}
              </h2>
            </div>

            <div className="mt-6 space-y-5 text-[15px] leading-[1.82] text-slate-700 dark:text-slate-300 sm:text-base">
              {magazine.leadParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? 'first-letter:float-left first-letter:mr-3.5 first-letter:mt-1 first-letter:font-display first-letter:text-5xl first-letter:font-semibold first-letter:leading-none first-letter:text-blue-900 dark:first-letter:text-blue-400'
                      : undefined
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Editorial Pull Quote (Top & Bottom Hairlines Only) */}
            <blockquote className="my-9 border-y border-slate-200 py-7 dark:border-slate-800 print-avoid-break">
              <p className="font-display text-xl italic leading-snug text-slate-950 dark:text-slate-100 sm:text-2xl">
                “{magazine.pullQuote.text}”
              </p>
              <footer className="mt-3 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
                — {magazine.pullQuote.attribution}
              </footer>
            </blockquote>

            {/* 3 Strategic Advisory Pillars */}
            <div className="mt-10">
              <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-slate-50 sm:text-2xl">
                {magazine.pillarsHeading}
              </h3>

              <div className="mt-5 grid grid-cols-1 gap-6 border-t border-slate-200 pt-6 dark:border-slate-800 sm:grid-cols-3">
                {magazine.pillars.map((pillar) => (
                  <div key={pillar.number} className="print-avoid-break">
                    <div className="font-mono-tabular text-xs font-semibold text-blue-900 dark:text-blue-400">
                      {pillar.number}.
                    </div>
                    <h4 className="mt-1.5 text-sm font-semibold text-slate-950 dark:text-slate-50">
                      {pillar.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Margin Notes / Executive Fact Dossier */}
          <aside className="space-y-8 lg:col-span-4">
            <div className="rounded-xl border border-slate-200 bg-[#FAF9F6] p-6 dark:border-slate-800 dark:bg-slate-800/60 print-avoid-break">
              <h3 className="text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                {magazine.sidebar.factSheetTitle}
              </h3>

              <dl className="mt-4 divide-y divide-slate-200 border-t border-slate-200 dark:divide-slate-700/70 dark:border-slate-700/70">
                {magazine.sidebar.facts.map((fact) => (
                  <div key={fact.label} className="py-3">
                    <dt className="text-[11px] font-semibold tracking-wide text-slate-500 dark:text-slate-400">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-xs font-medium leading-relaxed text-slate-900 dark:text-slate-100">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="border-t border-slate-200 pt-6 dark:border-slate-800 print-avoid-break">
              <h3 className="text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                {magazine.sidebar.credentialsTitle}
              </h3>

              <ul className="mt-4 space-y-3">
                {resume.certifications.map((cert) => (
                  <li key={cert.title} className="text-xs leading-relaxed">
                    <span className="font-mono-tabular font-semibold text-blue-900 dark:text-blue-400">
                      {cert.acronym}
                    </span>
                    <span className="mx-1.5 text-slate-400" aria-hidden="true">
                      ·
                    </span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">
                      {cert.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-800/40 print:hidden">
              <h3 className="font-display text-lg font-semibold text-slate-950 dark:text-slate-50">
                {magazine.sidebar.ctaTitle}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {magazine.sidebar.ctaDescription}
              </p>
              <button
                type="button"
                onClick={onDownloadPdf}
                disabled={isGeneratingPdf}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-950 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-900 disabled:opacity-60 dark:bg-blue-600 dark:hover:bg-blue-500 cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                <span>
                  {isGeneratingPdf
                    ? magazine.actions.downloadingPdf
                    : magazine.actions.downloadPdf}
                </span>
              </button>
            </div>
          </aside>
        </div>
      </section>
    </article>
  );
}

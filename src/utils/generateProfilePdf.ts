import { jsPDF } from 'jspdf';
import { MAGAZINE_DATA } from '../data/magazineData';
import { RESUME_DATA, RESUME_PROFILE, type LangCode } from '../data/resumeData';

async function loadImageAsDataUrl(url: string): Promise<string | null> {
  try {
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) return null;
    const blob = await response.blob();
    return await new Promise<string | null>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(typeof reader.result === 'string' ? reader.result : null);
      };
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

export async function generateProfilePdf(lang: LangCode): Promise<void> {
  // jsPDF built-in Helvetica supports Latin scripts cleanly;
  // when viewing in Mandarin or Tamil, export the English executive dossier
  // so text remains crisp and free of missing glyph boxes.
  const pdfLang: 'ms' | 'en' = lang === 'ms' ? 'ms' : 'en';
  const resume = RESUME_DATA[pdfLang];
  const magazine = MAGAZINE_DATA[pdfLang];

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = 16;

  const ensureSpace = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 16) {
      doc.addPage();
      y = 18;
    }
  };

  // Top Masthead Band
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, pageWidth, 50, 'F');

  // Attempt to embed portrait image cleanly on top-right of masthead
  const portraitDataUrl = await loadImageAsDataUrl(RESUME_PROFILE.portraitUrl);
  const photoBoxW = 28;
  const photoBoxH = 34;
  const photoX = pageWidth - margin - photoBoxW;
  const photoY = 8;

  if (portraitDataUrl) {
    try {
      doc.addImage(portraitDataUrl, 'JPEG', photoX, photoY, photoBoxW, photoBoxH);
      doc.setDrawColor(148, 163, 184);
      doc.setLineWidth(0.3);
      doc.rect(photoX, photoY, photoBoxW, photoBoxH);
    } catch {
      // Fallback monogram box if image decoding fails
      doc.setFillColor(30, 58, 138);
      doc.rect(photoX, photoY, photoBoxW, photoBoxH, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      doc.text('NM', photoX + photoBoxW / 2, photoY + 20, { align: 'center' });
    }
  } else {
    doc.setFillColor(30, 58, 138);
    doc.rect(photoX, photoY, photoBoxW, photoBoxH, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('NM', photoX + photoBoxW / 2, photoY + 20, { align: 'center' });
  }

  const headerTextWidth = contentWidth - photoBoxW - 8;

  doc.setTextColor(147, 197, 253);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.text(magazine.masthead, margin, 13);

  doc.setTextColor(255, 255, 255);
  doc.setFont('times', 'bold');
  doc.setFontSize(19);
  doc.text(RESUME_PROFILE.fullName, margin, 22, { maxWidth: headerTextWidth });

  doc.setTextColor(203, 213, 225);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(resume.hero.role, margin, 29, { maxWidth: headerTextWidth });

  doc.setTextColor(148, 163, 184);
  doc.setFontSize(8.2);
  const contactLine = `${RESUME_PROFILE.email}  |  ${RESUME_PROFILE.phoneDisplay}  |  Bachok, Kelantan`;
  doc.text(contactLine, margin, 36, { maxWidth: headerTextWidth });
  doc.text(RESUME_PROFILE.linkedinUrl, margin, 41.5, { maxWidth: headerTextWidth });

  y = 59;

  // Magazine Cover Headline & Deck
  doc.setTextColor(15, 23, 42);
  doc.setFont('times', 'bold');
  doc.setFontSize(15);
  const headlineLines = doc.splitTextToSize(magazine.coverHeadline, contentWidth);
  doc.text(headlineLines, margin, y);
  y += headlineLines.length * 6.2 + 2;

  doc.setTextColor(71, 85, 105);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  const deckLines = doc.splitTextToSize(magazine.coverDeck, contentWidth);
  doc.text(deckLines, margin, y);
  y += deckLines.length * 4.5 + 5;

  // 4-Column Impact Metrics Bar
  const colW = contentWidth / 4;
  doc.setDrawColor(226, 232, 240);
  doc.setFillColor(248, 250, 252);
  doc.rect(margin, y, contentWidth, 18, 'FD');

  resume.metrics.forEach((metric, idx) => {
    const x = margin + idx * colW + 3;
    if (idx > 0) {
      doc.line(margin + idx * colW, y, margin + idx * colW, y + 18);
    }
    doc.setTextColor(30, 58, 138);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(metric.value, x, y + 6.5);

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(7.5);
    doc.text(metric.label, x, y + 11, { maxWidth: colW - 5 });

    doc.setTextColor(100, 116, 139);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.text(metric.detail, x, y + 14.8, { maxWidth: colW - 5 });
  });

  y += 25;

  // Executive Narrative Paragraphs
  doc.setTextColor(30, 58, 138);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text(magazine.storyHeading.toUpperCase(), margin, y);
  y += 2;
  doc.setDrawColor(203, 213, 225);
  doc.line(margin, y, pageWidth - margin, y);
  y += 5;

  doc.setTextColor(51, 65, 85);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.2);
  magazine.leadParagraphs.forEach((para) => {
    const lines = doc.splitTextToSize(para, contentWidth);
    ensureSpace(lines.length * 4.3 + 4);
    doc.text(lines, margin, y);
    y += lines.length * 4.3 + 3.5;
  });

  // Pull Quote
  ensureSpace(22);
  y += 2;
  doc.setDrawColor(148, 163, 184);
  doc.line(margin, y, pageWidth - margin, y);
  y += 5;
  doc.setTextColor(15, 23, 42);
  doc.setFont('times', 'italic');
  doc.setFontSize(10.5);
  const quoteLines = doc.splitTextToSize(`"${magazine.pullQuote.text}"`, contentWidth);
  doc.text(quoteLines, margin, y);
  y += quoteLines.length * 4.8 + 1.5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.8);
  doc.setTextColor(100, 116, 139);
  doc.text(`— ${magazine.pullQuote.attribution}`, margin, y);
  y += 3;
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  // Section Helper
  const drawSectionHeading = (num: string, title: string) => {
    ensureSpace(14);
    doc.setTextColor(30, 58, 138);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text(`${num}. ${title.toUpperCase()}`, margin, y);
    y += 2;
    doc.setDrawColor(203, 213, 225);
    doc.line(margin, y, pageWidth - margin, y);
    y += 5.5;
  };

  // 01. Work Experience
  drawSectionHeading(resume.sections.expNumber, resume.sections.expTitle);
  resume.jobs.forEach((job) => {
    ensureSpace(22);
    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(job.title, margin, y);

    doc.setTextColor(30, 58, 138);
    doc.setFontSize(8.5);
    doc.text(job.period, pageWidth - margin, y, { align: 'right' });
    y += 4.5;

    doc.setTextColor(71, 85, 105);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.8);
    doc.text(`${job.company}  ·  ${job.location}`, margin, y);
    y += 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.6);
    doc.setTextColor(51, 65, 85);
    job.highlights.forEach((bullet) => {
      const bLines = doc.splitTextToSize(`•  ${bullet}`, contentWidth - 2);
      ensureSpace(bLines.length * 4 + 2);
      doc.text(bLines, margin + 2, y);
      y += bLines.length * 4 + 1.5;
    });
    y += 3;
  });

  // 02. Project Experience
  drawSectionHeading(resume.sections.projNumber, resume.sections.projTitle);
  resume.projects.forEach((project, index) => {
    const lineText = `${String(index + 1).padStart(2, '0')}. ${project.title}`;
    const pLines = doc.splitTextToSize(lineText, contentWidth - 38);
    ensureSpace(pLines.length * 4 + 5);

    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text(pLines, margin, y);

    doc.setTextColor(100, 116, 139);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(project.dateLabel, pageWidth - margin, y, { align: 'right' });
    y += pLines.length * 3.9 + 0.5;

    doc.setTextColor(71, 85, 105);
    doc.setFontSize(7.8);
    doc.text(`${project.organizer}  ·  ${project.categoryLabel}`, margin + 5, y);
    y += 4.8;
  });

  y += 3;

  // 03. Education & Certifications
  drawSectionHeading(
    resume.sections.eduNumber,
    `${resume.sections.eduTitle} & ${resume.sections.certTitle}`,
  );
  ensureSpace(16);
  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text(resume.education.degree, margin, y);
  doc.setTextColor(30, 58, 138);
  doc.setFontSize(8.5);
  doc.text(resume.education.date, pageWidth - margin, y, { align: 'right' });
  y += 4.5;
  doc.setTextColor(71, 85, 105);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text(`${resume.education.institution}  ·  ${resume.education.location}`, margin, y);
  y += 7;

  resume.certifications.forEach((cert) => {
    ensureSpace(10);
    doc.setTextColor(30, 58, 138);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.2);
    doc.text(cert.acronym, margin, y);

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(8.6);
    doc.text(cert.title, margin + 22, y);
    y += 3.8;

    doc.setTextColor(100, 116, 139);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.text(`${cert.issuer}  ·  ${cert.location}`, margin + 22, y);
    y += 4.8;
  });

  y += 3;

  // 04. Skills
  drawSectionHeading(resume.sections.skillNumber, resume.sections.skillTitle);
  ensureSpace(22);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text(`${resume.sections.techLabel}:`, margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  const techList = resume.skillsTech.map((s) => `${s.name} (${s.level})`).join('  ·  ');
  const techLines = doc.splitTextToSize(techList, contentWidth);
  y += 4;
  doc.text(techLines, margin, y);
  y += techLines.length * 4 + 3;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(`${resume.sections.langLabel}:`, margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  const langList = resume.skillsLang.map((l) => `${l.name} (${l.level})`).join('  ·  ');
  doc.text(langList, margin + 26, y);
  y += 6;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(`${resume.sections.softLabel}:`, margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  const softLines = doc.splitTextToSize(resume.skillsSoft.join('  ·  '), contentWidth);
  y += 4;
  doc.text(softLines, margin, y);

  const fileName =
    pdfLang === 'ms'
      ? 'Nik_Mohd_Nor_Arif_Profil_Eksekutif.pdf'
      : 'Nik_Mohd_Nor_Arif_Executive_Profile.pdf';

  doc.save(fileName);
}

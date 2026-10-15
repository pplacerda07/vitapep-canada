// Site copy. English only (Canadian spelling): VitaPep Pharma is a Canadian
// laboratory that sources its raw materials from China.

export type Lang = 'en'

export const t = {
  en: {
    // Hero
    heroTitle1: 'Research peptides with',
    heroTitle2: 'clear provenance',
    heroDesc:
      'A Canadian laboratory working with selected raw materials, in-house preparation and batch identification on every vial.',
    heroBtn: 'View catalogue',
    heroStatLab: 'Laboratory',
    heroStatOrigin: 'Raw materials',
    heroStatOp: 'Purity',
    heroStatLabVal: 'Canada',
    heroStatOriginVal: 'China',
    heroStatOpVal: '99%+',

    // Trust bar
    trustFocus: 'Canadian laboratory',
    trustUnit: 'Raw materials sourced in China',
    trustLab: 'In-house preparation',
    trustFill: 'Filling in a controlled environment',
    trustBatch: 'Batch identification',
    trustCatalog: 'Specialized catalogue',

    // Purity section
    purityTag: 'Process',
    purityTitle1: 'Purity is a matter of',
    purityTitle2: 'process, not luck',
    purityPillar1Title: 'Certified raw materials',
    purityPillar1Desc:
      'We work with suppliers that provide input traceability and purity reports for every batch.',
    purityPillar2Title: 'Specialized preparation',
    purityPillar2Desc:
      'Every product is prepared in our Canadian laboratory, in a controlled environment that follows good practice standards.',
    purityPillar3Title: 'Batch identification',
    purityPillar3Desc:
      'Every vial carries its batch number, concentration and preparation date, leaving no room for ambiguity.',

    // Why VitaPep
    whyTag: 'Why us',
    whyTitle: 'Why VitaPep?',
    whyDesc:
      'We built a Canadian laboratory that pairs technical rigour with consultative service. Every detail is designed for people who take research seriously.',
    whyCard1Title: 'Laboratory in Canada',
    whyCard1Desc:
      'All preparation and final filling take place in our laboratory in Canada, with controlled infrastructure and good practice standards.',
    whyCard2Title: 'Raw materials from China',
    whyCard2Desc:
      'We source from selected suppliers in China that provide purity reports and input traceability for every batch we produce.',
    whyCard3Title: 'Specialized catalogue',
    whyCard3Desc:
      'Our catalogue is focused and selective. Every peptide is reviewed before it joins the VitaPep line.',
    whyCard4Title: 'Batch identification',
    whyCard4Desc:
      'Every vial is labelled with batch number, concentration and preparation date, a standard that goes beyond the market basics.',
    whyCard5Title: 'Consultative support',
    whyCard5Desc:
      'Our team is available to help researchers choose the products best suited to their protocol.',
    whyCard6Title: 'Reliable supply',
    whyCard6Desc:
      'Organized inventory and a structured restocking cycle keep your research from stalling for lack of material.',

    // Catalogue
    catalogTag: 'VitaPep line',
    catalogTitle: 'Peptide catalogue',
    catalogDesc:
      'A focused line of high-purity research peptides, prepared in our laboratory in Canada.',
    catalogAll: 'All',
    catalogView: 'View product',

    // Product modal
    modalPurity: 'Purity',
    modalVol: 'Volume',
    modalDosage: 'Dosage',
    modalPrep: 'Prepared and filled in Canada',
    modalDisclaimer:
      'For research use only. Not intended for human consumption, diagnosis or treatment.',

    // Facilities
    facilitiesTag: 'Facilities',
    facilitiesTitle: 'From raw material to vial, under controlled conditions',
    facilitiesDesc:
      'Raw materials arrive from China and every step that follows happens in our laboratory in Canada.',
    facilitiesSince: 'Since',
    facilitiesStep1Title: 'Raw material sourcing',
    facilitiesStep1Desc:
      'Raw materials are selected based on purity reports and traceability, from a supplier we have worked with for years.',
    facilitiesStep4Title: 'Preparation and filling',
    facilitiesStep4Desc:
      'Preparation, purity analysis and filling in a controlled environment, with batch, concentration and date applied to every vial.',
    facilitiesStrip: 'Prepared and filled in Canada, with',

    // Peptide science
    scienceTag: 'Science',
    scienceTitle: 'What are research peptides?',
    scienceDesc:
      'Peptides are short chains of amino acids that act as signalling molecules in the body. In scientific research, they are studied for their role in a range of physiological pathways.',
    scienceCard1Title: 'Molecular structure',
    scienceCard1Desc:
      'Peptides are built from specific amino acid sequences joined by peptide bonds, which gives each molecule its own properties.',
    scienceCard2Title: 'Cell signalling',
    scienceCard2Desc:
      'They act as messengers between cells and tissues, modulating physiological responses with high specificity and selectivity.',
    scienceCard3Title: 'Research applications',
    scienceCard3Desc:
      'Used in studies on recovery, metabolism, cognition and longevity, peptides are valuable tools for modern scientific research.',

    // FAQ
    faqTag: 'Questions',
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        q: 'Where do VitaPep peptides come from?',
        a: 'Raw materials are produced in China by selected suppliers. Preparation, analysis and final filling are carried out in our laboratory in Canada.',
      },
      {
        q: 'How is product purity ensured?',
        a: 'Every batch goes through purity analysis before filling and is documented. We only work with raw material suppliers that provide purity reports and traceability.',
      },
      {
        q: 'Where do you ship?',
        a: 'We serve research clients across Canada. Availability and shipping for other destinations are confirmed directly with our team.',
      },
      {
        q: 'Are the products for human consumption?',
        a: 'No. All VitaPep products are intended for research use only and are not intended for human consumption, diagnosis or treatment.',
      },
      {
        q: 'How do I place an order?',
        a: 'Orders are handled directly by our team. Get in touch by email to check availability and terms.',
      },
      {
        q: 'What does VitaPep do?',
        a: 'VitaPep is a Canadian laboratory. We source raw materials in China and handle preparation, quality control, filling and batch identification in Canada.',
      },
    ],

    // CTA
    ctaTitle: 'Ready to start your research?',
    ctaDesc:
      'Get in touch with our team and find out which peptides are available for your research protocol.',

    // Footer
    footerTagline: 'High-purity research peptides, prepared in Canada.',
    footerLinks: 'Links',
    footerContact: 'Contact',
    footerRights: 'All rights reserved.',
    footerNotice: 'Important notice:',
    footerDisclaimer:
      'Products intended for research use only. Not intended for human consumption.',
  },
} as const

export type Translations = (typeof t)['en']

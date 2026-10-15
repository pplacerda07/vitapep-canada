export type ProductCategory =
  | 'Metabolism'
  | 'Recovery'
  | 'Cognition'
  | 'Longevity'
  | 'Aesthetics'

export type Product = {
  slug: string
  name: string
  dosage: string
  volume: string
  purity: string
  category: ProductCategory
  tagline: string
  description: string
  highlights: string[]
  image: string
  featured?: boolean
}

export const PRODUCTS: Product[] = [
  {
    slug: 'retatrutide',
    name: 'Retatrutide',
    dosage: '15mg',
    volume: '3 mL',
    purity: '99%+',
    category: 'Metabolism',
    tagline: 'Advanced weight and appetite research',
    description:
      'A next-generation peptide that stands out in research protocols focused on appetite regulation, metabolism and body composition.',
    highlights: [
      'Appetite regulation research',
      'Weight management studies',
      'Focus on advanced metabolic response',
    ],
    image: '/products/reta.webp',
    featured: true,
  },
  {
    slug: 'ghk-cu',
    name: 'GHK-Cu',
    dosage: '100mg',
    volume: '3 mL',
    purity: '99%+',
    category: 'Aesthetics',
    tagline: 'Renewal, skin and collagen',
    description:
      'A peptide widely studied in protocols focused on skin quality, collagen stimulation and regeneration.',
    highlights: [
      'Collagen production research',
      'Skin appearance studies',
      'Tissue regeneration support',
    ],
    image: '/products/ghk-cu.webp',
    featured: true,
  },
  {
    slug: 'bpc-157',
    name: 'BPC-157',
    dosage: '10mg',
    volume: '3 mL',
    purity: '99%+',
    category: 'Recovery',
    tagline: 'Advanced recovery research',
    description:
      'A peptide known for its prominence in research protocols focused on physical recovery, tissue integrity and overall support.',
    highlights: [
      'Tissue recovery research',
      'Tendon and ligament studies',
      'More efficient physical recovery',
    ],
    image: '/products/bpc.webp',
    featured: true,
  },
  {
    slug: 'tesamorelin',
    name: 'Tesamorelin',
    dosage: '10mg',
    volume: '3 mL',
    purity: '99%+',
    category: 'Metabolism',
    tagline: 'Body composition and metabolism',
    description:
      'A peptide widely associated with research on body composition, metabolism and the hormonal axis.',
    highlights: [
      'Body metabolism research',
      'Focus on body composition',
      'GH axis balance studies',
    ],
    image: '/products/tesa.webp',
  },
  {
    slug: 'igf-1lr3',
    name: 'IGF-1 LR3',
    dosage: '1mg',
    volume: '3 mL',
    purity: '99%+',
    category: 'Recovery',
    tagline: 'Anabolic performance and muscle research',
    description:
      'A peptide widely associated with protocols focused on cell growth, anabolic signalling and muscle development.',
    highlights: [
      'Muscle growth research',
      'Post-training recovery studies',
      'Focus on anabolic signalling',
    ],
    image: '/products/igf.webp',
  },
  {
    slug: 'mots-c',
    name: 'MOTS-c',
    dosage: '40mg',
    volume: '3 mL',
    purity: '99%+',
    category: 'Longevity',
    tagline: 'Cellular energy and metabolic efficiency',
    description:
      'A peptide strongly associated with cellular energy, metabolism and physiological adaptation.',
    highlights: [
      'Cellular energy research',
      'Metabolic efficiency studies',
      'Focus on performance and vitality',
    ],
    image: '/products/mots.webp',
  },
  {
    slug: 'wolverine',
    name: 'Wolverine',
    dosage: '20mg',
    volume: '3 mL',
    purity: '99%+',
    category: 'Recovery',
    tagline: 'Intensive regeneration and recovery',
    description:
      'A peptide blend prominent in research protocols focused on muscle recovery, tissue integrity and regenerative support.',
    highlights: [
      'Muscle recovery research',
      'Tissue repair studies',
      'Focus on intensive regeneration',
    ],
    image: '/products/wolverine.webp',
  },
  {
    slug: 'cjc-ipa',
    name: 'CJC-1295 + Ipamorelin',
    dosage: '10mg',
    volume: '3 mL',
    purity: '99%+',
    category: 'Metabolism',
    tagline: 'GH axis enhancement',
    description:
      'A combination widely used in research on body composition, recovery and physical performance.',
    highlights: [
      'GH release research',
      'Muscle recovery studies',
      'Focus on body composition',
    ],
    image: '/products/cjc-ipa.webp',
  },
  {
    slug: 'klow',
    name: 'KLOW',
    dosage: '80mg',
    volume: '3 mL',
    purity: '99%+',
    category: 'Aesthetics',
    tagline: 'Regeneration and balance blend',
    description:
      'A peptide blend developed with a focus on regeneration, tissue support and the balance of recovery-related processes.',
    highlights: [
      'Broad regeneration research',
      'Tissue recovery studies',
      'Focus on balance and repair',
    ],
    image: '/products/klow.webp',
  },
  {
    slug: 'selank',
    name: 'Selank',
    dosage: '10mg',
    volume: '3 mL',
    purity: '99%+',
    category: 'Cognition',
    tagline: 'Clarity, focus and stability',
    description:
      'A peptide prominent in research on mental balance, tension reduction and cognitive clarity.',
    highlights: [
      'Emotional balance research',
      'Mental focus studies',
      'Focus on stability',
    ],
    image: '/products/selank.webp',
  },
  {
    slug: 'aod-9604',
    name: 'AOD-9604',
    dosage: '5mg',
    volume: '3 mL',
    purity: '99%+',
    category: 'Metabolism',
    tagline: 'Metabolism and body definition',
    description:
      'A peptide widely associated with research on metabolism, fat mobilization and body composition.',
    highlights: [
      'Fat metabolism research',
      'Body definition studies',
      'Focus on body composition',
    ],
    image: '/products/aod.webp',
  },
  {
    slug: 'semax',
    name: 'Semax',
    dosage: '10mg',
    volume: '3 mL',
    purity: '99%+',
    category: 'Cognition',
    tagline: 'Focus, memory and mental performance',
    description:
      'A peptide widely associated with research protocols on cognition, mental clarity and intellectual performance.',
    highlights: [
      'Focus and concentration research',
      'Memory and clarity studies',
      'Focus on cognitive performance',
    ],
    image: '/products/semax.webp',
  },
]

export const CATEGORIES: ProductCategory[] = [
  'Metabolism',
  'Recovery',
  'Cognition',
  'Longevity',
  'Aesthetics',
]

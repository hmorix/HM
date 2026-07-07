import { Router, Request, Response } from 'express'

const router = Router()

// Blog posts data (in production: from database)
const posts = [
  { id: 1, slug: 'building-ai-agents-at-scale', title: 'Building AI Agents at Scale: Lessons from 10,000 Deployments', excerpt: 'How we architected our AI agent platform to handle enterprise-grade workloads.', category: 'Engineering', author: 'Hamza Morix', authorRole: 'CEO & Founder', date: '2024-06-28', readTime: '12 min', featured: true, tags: ['AI', 'engineering', 'scalability', 'architecture'], views: 15420, likes: 847 },
  { id: 2, slug: 'introducing-billingflow-v3', title: 'Introducing BillingFlow v3: The Future of Automated Invoicing', excerpt: 'A complete rewrite with real-time sync, multi-currency support, and AI-powered anomaly detection.', category: 'Product Updates', author: 'Sarah Chen', authorRole: 'VP of Product', date: '2024-06-25', readTime: '8 min', featured: true, tags: ['BillingFlow', 'product', 'automation'], views: 8930, likes: 523 },
  { id: 3, slug: 'zero-trust-architecture', title: 'Implementing Zero-Trust Architecture in Enterprise SaaS', excerpt: 'Our journey to implementing zero-trust security across all HMorix services.', category: 'Security', author: 'Mike Johnson', authorRole: 'Head of Security', date: '2024-06-22', readTime: '15 min', featured: false, tags: ['security', 'zero-trust', 'enterprise'], views: 6210, likes: 312 },
  { id: 4, slug: 'pdf-extraction-ml-pipeline', title: 'How Our ML Pipeline Achieves 99.2% PDF Extraction Accuracy', excerpt: 'Deep dive into the transformer-based models powering our document intelligence engine.', category: 'AI & ML', author: 'Dr. Emily Park', authorRole: 'ML Lead', date: '2024-06-20', readTime: '18 min', featured: false, tags: ['ML', 'PDF', 'transformers', 'NLP'], views: 9840, likes: 621 },
  { id: 5, slug: 'scaling-to-million-users', title: 'Scaling HMorix Cloud to 1 Million Users', excerpt: 'Infrastructure decisions, database sharding strategies, and edge computing.', category: 'Engineering', author: 'Alex Rivera', authorRole: 'Staff Engineer', date: '2024-06-18', readTime: '14 min', featured: false, tags: ['scaling', 'infrastructure', 'cloud'], views: 12300, likes: 734 },
  { id: 6, slug: 'smart-home-iot-security', title: 'IoT Security Best Practices for Smart Home Systems', excerpt: 'How we secure millions of connected devices with end-to-end encryption.', category: 'Security', author: 'James Wu', authorRole: 'IoT Security Lead', date: '2024-06-15', readTime: '10 min', featured: false, tags: ['IoT', 'security', 'smart-home'], views: 4560, likes: 198 },
  { id: 7, slug: 'react-performance-optimization', title: 'React Performance: How We Cut Load Times by 60%', excerpt: 'Code splitting, lazy loading, and virtual scrolling techniques.', category: 'Tutorials', author: 'Lisa Martinez', authorRole: 'Frontend Lead', date: '2024-06-12', readTime: '11 min', featured: false, tags: ['React', 'performance', 'frontend', 'web-design'], views: 18900, likes: 1102 },
  { id: 8, slug: 'series-b-announcement', title: 'HMorix Raises $42M Series B to Expand AI Platform', excerpt: 'Series B funding led by Sequoia Capital to accelerate our enterprise AI vision.', category: 'Company', author: 'Hamza Morix', authorRole: 'CEO & Founder', date: '2024-06-10', readTime: '5 min', featured: false, tags: ['funding', 'company', 'growth'], views: 23400, likes: 1567 },
  { id: 9, slug: 'seo-best-practices-2024', title: 'SEO Best Practices for SaaS Companies in 2024', excerpt: 'Complete guide to technical SEO, content strategy, and link building for software companies.', category: 'Tutorials', author: 'David Kim', authorRole: 'Growth Lead', date: '2024-06-08', readTime: '16 min', featured: false, tags: ['SEO', 'marketing', 'growth', 'content'], views: 14200, likes: 890 },
  { id: 10, slug: 'ai-advertising-automation', title: 'How AI is Revolutionizing Digital Advertising', excerpt: 'Machine learning models that optimize ad spend in real-time across all channels.', category: 'AI & ML', author: 'Tom Anderson', authorRole: 'Ad Tech Lead', date: '2024-06-05', readTime: '13 min', featured: false, tags: ['AI', 'advertising', 'automation', 'marketing'], views: 7800, likes: 445 },
  { id: 11, slug: 'mobile-app-development-guide', title: 'Complete Guide to Mobile App Development in 2024', excerpt: 'Choosing between native, cross-platform, and PWA for your next mobile project.', category: 'Tutorials', author: 'Robert Chang', authorRole: 'Mobile Lead', date: '2024-06-03', readTime: '20 min', featured: false, tags: ['mobile', 'APK', 'React-Native', 'Flutter', 'iOS', 'Android'], views: 11500, likes: 678 },
  { id: 12, slug: 'ecommerce-conversion-optimization', title: 'E-commerce Conversion Optimization: A Data-Driven Approach', excerpt: 'How we increased conversion rates by 340% using AI-powered personalization.', category: 'Case Studies', author: 'Jennifer Walsh', authorRole: 'E-commerce Lead', date: '2024-06-01', readTime: '12 min', featured: false, tags: ['ecommerce', 'conversion', 'AI', 'personalization'], views: 9200, likes: 534 },
]

// Get all posts with filtering
router.get('/', (req: Request, res: Response) => {
  const { category, tag, search, page = '1', limit = '10' } = req.query
  let filtered = [...posts]

  if (category && category !== 'All') {
    filtered = filtered.filter(p => p.category === category)
  }
  if (tag) {
    filtered = filtered.filter(p => p.tags.includes(tag as string))
  }
  if (search) {
    const q = (search as string).toLowerCase()
    filtered = filtered.filter(p => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q)))
  }

  const pageNum = parseInt(page as string)
  const limitNum = parseInt(limit as string)
  const total = filtered.length
  const paginated = filtered.slice((pageNum - 1) * limitNum, pageNum * limitNum)

  res.json({
    posts: paginated,
    pagination: { page: pageNum, limit: limitNum, total, pages: Math.ceil(total / limitNum) },
    categories: ['All', 'Engineering', 'AI & ML', 'Product Updates', 'Security', 'Company', 'Tutorials', 'Case Studies']
  })
})

// Get single post by slug
router.get('/:slug', (req: Request, res: Response) => {
  const post = posts.find(p => p.slug === req.params.slug)
  if (!post) return res.status(404).json({ error: 'Post not found' })
  res.json(post)
})

// Get featured posts
router.get('/featured/list', (_req: Request, res: Response) => {
  res.json(posts.filter(p => p.featured))
})

// Get related posts
router.get('/:slug/related', (req: Request, res: Response) => {
  const post = posts.find(p => p.slug === req.params.slug)
  if (!post) return res.status(404).json({ error: 'Post not found' })
  const related = posts.filter(p => p.slug !== post.slug && (p.category === post.category || p.tags.some(t => post.tags.includes(t)))).slice(0, 3)
  res.json(related)
})

// Like a post
router.post('/:slug/like', (req: Request, res: Response) => {
  const post = posts.find(p => p.slug === req.params.slug)
  if (!post) return res.status(404).json({ error: 'Post not found' })
  post.likes++
  res.json({ likes: post.likes })
})

export default router

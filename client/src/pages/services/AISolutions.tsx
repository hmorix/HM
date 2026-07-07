import { Link } from 'react-router-dom'
import SEOHead from '../../components/seo/SEOHead'
import { Brain, Bot, Cpu, Database, Sparkles, Workflow, CheckCircle, ArrowRight } from 'lucide-react'

const solutions = [
  { icon: Bot, title: 'AI Chatbots & Virtual Assistants', desc: 'Custom AI chatbots powered by GPT-4, Claude, and proprietary models. Customer support automation, sales bots, and internal assistants.', useCases: ['Customer Support Automation', 'Sales Qualification Bots', 'Internal Knowledge Assistants', 'Appointment Scheduling'] },
  { icon: Brain, title: 'Machine Learning Solutions', desc: 'Custom ML models for prediction, classification, recommendation, and anomaly detection tailored to your business data.', useCases: ['Predictive Analytics', 'Fraud Detection', 'Recommendation Engines', 'Demand Forecasting'] },
  { icon: Sparkles, title: 'Generative AI Applications', desc: 'Content generation, image creation, code generation, and creative AI tools built on foundation models.', useCases: ['Content Generation', 'Image & Video AI', 'Code Assistants', 'Document Summarization'] },
  { icon: Workflow, title: 'AI Workflow Automation', desc: 'Intelligent process automation that combines AI with business workflows to eliminate manual tasks.', useCases: ['Document Processing', 'Email Classification', 'Data Extraction', 'Report Generation'] },
  { icon: Cpu, title: 'Computer Vision', desc: 'Image recognition, object detection, OCR, and video analysis solutions for manufacturing, retail, and security.', useCases: ['Quality Inspection', 'Facial Recognition', 'OCR & Document AI', 'Video Analytics'] },
  { icon: Database, title: 'AI Data Platform', desc: 'End-to-end data infrastructure for AI — data pipelines, feature stores, model training, and deployment.', useCases: ['Data Pipelines', 'Feature Engineering', 'Model Training', 'MLOps & Monitoring'] },
]

export default function AISolutions() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEOHead
        title="AI & Machine Learning Solutions"
        description="HMorix AI solutions: custom AI chatbots, machine learning models, generative AI applications, computer vision, NLP, and AI workflow automation. Transform your business with enterprise-grade artificial intelligence."
        keywords="AI solutions, artificial intelligence, machine learning, deep learning, AI chatbot development, GPT-4 integration, Claude AI, LLM development, natural language processing, NLP, computer vision, generative AI, AI automation, AI consulting, custom AI models, predictive analytics, recommendation engine, fraud detection, AI agents, conversational AI, AI-powered software, neural networks, TensorFlow, PyTorch, OpenAI API, AI integration, enterprise AI, AI platform, MLOps, AI deployment, model training, data science, AI strategy, AI transformation, intelligent automation, robotic process automation, RPA, cognitive computing, AI as a service, AIaaS"
        canonical="/services/ai-solutions"
      />
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#C8FF00]/10 text-[#C8FF00] text-xs font-mono rounded-full mb-4">AI & MACHINE LEARNING</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Enterprise <span className="text-[#C8FF00]">AI Solutions</span></h1>
          <p className="text-cream/50 max-w-[700px] mx-auto text-lg">From chatbots to computer vision — we build custom AI solutions that automate processes, unlock insights, and drive business growth.</p>
        </div>

        {/* Solutions */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {solutions.map((s, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[#C8FF00]/20 transition-all">
              <s.icon size={24} className="text-[#C8FF00] mb-4" />
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-cream/40 mb-4">{s.desc}</p>
              <div className="grid grid-cols-2 gap-2">
                {s.useCases.map((u, j) => <div key={j} className="flex items-center gap-1.5 text-xs text-cream/50"><CheckCircle size={10} className="text-[#C8FF00]" />{u}</div>)}
              </div>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] mb-16">
          <h2 className="font-display text-2xl font-bold text-center mb-6">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Healthcare & Biotech', 'Financial Services', 'E-commerce & Retail', 'Manufacturing', 'Legal & Compliance', 'Real Estate', 'Education', 'Logistics & Supply Chain'].map(ind => (
              <div key={ind} className="p-4 bg-white/[0.04] rounded-[8px] text-center text-sm text-cream/60">{ind}</div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: '10,000+', label: 'AI Agents Deployed' },
            { value: '99.2%', label: 'Model Accuracy' },
            { value: '400%', label: 'Avg Efficiency Gain' },
            { value: '<200ms', label: 'Inference Latency' },
          ].map((s, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[12px] text-center">
              <div className="font-display text-2xl font-bold text-[#C8FF00]">{s.value}</div>
              <div className="text-xs text-cream/30 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center p-12 bg-obsidian-2 border border-glass-border rounded-[16px]">
          <h2 className="font-display text-2xl font-bold mb-3">Ready to Integrate AI Into Your Business?</h2>
          <p className="text-cream/40 mb-6">Book a free AI strategy consultation with our team.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8FF00] text-obsidian font-semibold rounded-[4px] hover:bg-[#b8ef00] transition-all">Book AI Consultation <ArrowRight size={16} /></Link>
        </div>
      </div>
    </div>
  )
}

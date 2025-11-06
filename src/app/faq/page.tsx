'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, ChevronDown, Search, Calendar, ArrowRight, MessageCircle
} from 'lucide-react';

const faqCategories = [
  {
    category: 'General Questions',
    icon: HelpCircle,
    faqs: [
      {
        question: 'What makes Living With Logic different from other consulting firms?',
        answer: 'We combine logical frameworks with practical implementation. Unlike firms that just provide reports, we work alongside your team to ensure results. Our approach is data-driven but human-centered, ensuring sustainable change. We measure success by client outcomes, not just deliverables.'
      },
      {
        question: 'Do you work with small businesses or only large enterprises?',
        answer: 'We work with organizations of all sizes – from startups with 20 employees to enterprises with 5,000+. Our services are tailored to your specific size, industry, and budget. We have packages designed for different company stages and scales.'
      },
      {
        question: 'What industries do you specialize in?',
        answer: 'We have deep expertise in Technology, Healthcare, Manufacturing, Financial Services, Retail, and Professional Services. However, our logical frameworks adapt to any industry. We\'ve successfully served clients across 15+ different sectors.'
      },
      {
        question: 'Do you offer services outside India?',
        answer: 'While we\'re headquartered in India and primarily serve Indian companies, we do work with global organizations and can conduct virtual engagements worldwide. Our team has international consulting experience.'
      },
      {
        question: 'How do I know if I need consulting services?',
        answer: 'Common signs include: unclear strategy, leadership gaps, team dysfunction, stalled growth, low employee engagement, or major changes (merger, expansion, digital transformation). Book a free consultation to discuss your specific situation and we\'ll provide honest guidance.'
      }
    ]
  },
  {
    category: 'Services & Process',
    icon: MessageCircle,
    faqs: [
      {
        question: 'How long does a typical engagement last?',
        answer: 'It varies by service: Team Workshops (1-3 days), Strategic Consulting (3-6 months), Leadership Development (6-12 months), Organizational Transformation (6-18 months). We can customize timelines to fit your needs and can start with shorter pilot programs.'
      },
      {
        question: 'Can we start with a smaller engagement before committing to a larger one?',
        answer: 'Absolutely! Many clients start with a team workshop, leadership assessment, or strategic planning sprint before moving to longer engagements. We offer pilot programs and phased approaches to minimize risk and build trust.'
      },
      {
        question: 'What\'s your typical process?',
        answer: 'Our 4D process: Discover (assess current state through interviews, data analysis, and observation), Design (create customized solutions and roadmaps), Develop (implement with your team through hands-on support), Deliver (measure results, optimize, and ensure sustainability).'
      },
      {
        question: 'Will you work on-site or remotely?',
        answer: 'We offer both. Initial discovery and key workshops are often on-site for maximum impact and relationship building. Ongoing support can be hybrid or virtual, depending on your preference and engagement type. Virtual engagements are typically 20-30% less expensive.'
      },
      {
        question: 'Do you provide ongoing support after the engagement ends?',
        answer: 'Yes! Most engagements include 30-90 days of email/call support post-completion. We also offer retainer arrangements for ongoing advisory support, quarterly check-ins, or on-call consulting for alumni clients at preferred rates.'
      },
      {
        question: 'What deliverables will we receive?',
        answer: 'Deliverables vary by service but typically include: assessment reports, strategic roadmaps, implementation plans, templates and tools, training materials, and progress tracking dashboards. You own all deliverables and IP created during the engagement.'
      }
    ]
  },
  {
    category: 'Pricing & Investment',
    icon: Calendar,
    faqs: [
      {
        question: 'How much do your services cost?',
        answer: 'Investment varies by service: Team Workshops (₹1,80,000 - ₹2,80,000), Strategic Consulting (₹12,00,000 - ₹25,00,000), Leadership Development (₹6,00,000 - ₹22,00,000), Organizational Transformation (₹20,00,000+). We offer customized packages to fit different budgets and needs.'
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, for engagements over 6 months, we typically structure payments in milestones (e.g., 40% upfront, 30% at midpoint, 30% at completion). This aligns our success with yours and manages cash flow better for both parties.'
      },
      {
        question: 'What\'s the ROI of consulting services?',
        answer: 'Our clients typically see 5-10x ROI within 12-18 months through increased revenue, improved efficiency, reduced turnover, and better decision-making. We help establish clear metrics at the start to track ROI. Average improvements: 30-50% productivity, 20-40% revenue growth, 40-60% engagement.'
      },
      {
        question: 'Do you offer discounts for multiple services or long-term contracts?',
        answer: 'Yes! We offer 10-20% discounts for multi-service packages (e.g., Strategy + Leadership Development) and annual retainer arrangements. Non-profits and social enterprises receive 20-25% discounts. Early-stage startups have special pricing available.'
      },
      {
        question: 'Is there a free consultation?',
        answer: 'Yes! We offer a complimentary 30-minute discovery call to understand your needs, discuss potential approaches, and determine if we\'re a good fit. No obligation, no sales pressure – just honest conversation about your challenges and opportunities.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept bank transfers (NEFT/RTGS/IMPS), cheques, and digital payments (UPI for amounts under ₹1 lakh). International clients can pay via wire transfer or PayPal. We provide GST-compliant invoices for all services.'
      }
    ]
  },
  {
    category: 'Results & Outcomes',
    icon: ArrowRight,
    faqs: [
      {
        question: 'What kind of results can we expect?',
        answer: 'While every engagement is unique, typical outcomes include: 30-50% improvement in team productivity, 20-40% revenue growth, 40-60% improvement in employee engagement, 25-35% reduction in operational costs, 50-80% improvement in leadership effectiveness. Results depend on commitment and implementation quality.'
      },
      {
        question: 'How do you measure success?',
        answer: 'We establish clear KPIs at the start of every engagement aligned with your goals. Common metrics: revenue growth, cost savings, employee engagement scores, customer satisfaction, leadership effectiveness ratings, process efficiency gains, time-to-market improvements. We track progress monthly/quarterly.'
      },
      {
        question: 'What if we don\'t see results?',
        answer: 'We\'re committed to your success. If agreed-upon milestones aren\'t met due to our work, we\'ll work additional hours at no cost to get back on track. We also offer a 30-day money-back guarantee on most services if you\'re not satisfied with the initial work quality.'
      },
      {
        question: 'How long before we see results?',
        answer: 'Quick wins often appear within 30-60 days (improved processes, better meetings, initial behavior changes). Sustainable transformation typically takes 6-12 months. We establish both short-term wins and long-term success metrics to maintain momentum and demonstrate value throughout.'
      },
      {
        question: 'Can you share client references?',
        answer: 'Yes! We have 50+ clients happy to speak with prospective clients. We\'ll connect you with 2-3 references from similar industries, company sizes, or services. Check our testimonials and case studies pages for detailed success stories.'
      }
    ]
  },
  {
    category: 'Team & Expertise',
    icon: MessageCircle,
    faqs: [
      {
        question: 'Who will be working with us?',
        answer: 'Every engagement is led by a Partner or Senior Consultant with 15+ years of experience. Larger projects have a team including junior consultants and specialists. You\'ll meet your team before the engagement starts and they remain consistent throughout the project.'
      },
      {
        question: 'What are your team\'s qualifications?',
        answer: 'Our team holds advanced degrees (MBAs, PhDs) from top institutions (IIMs, ISB, Harvard, Oxford), professional certifications (PMP, Six Sigma, ICF, SHRM), and 10-25 years of experience each. All consultants have worked at leading firms (McKinsey, Bain, Deloitte) or built successful businesses.'
      },
      {
        question: 'Have you worked with companies like ours before?',
        answer: 'Likely yes! We\'ve served 200+ companies across sizes (20-5,000 employees) and industries. During your consultation, we\'ll share relevant case studies and, with permission, can connect you with similar clients who can speak to their experience.'
      },
      {
        question: 'Do you use external contractors or only internal team?',
        answer: 'We primarily use our internal team of 15+ consultants. For specialized needs (e.g., specific technology expertise, regional languages, niche industry knowledge), we occasionally bring in vetted external experts who meet our quality standards.'
      }
    ]
  },
  {
    category: 'Getting Started',
    icon: Calendar,
    faqs: [
      {
        question: 'How do we get started?',
        answer: 'Simple 4-step process: 1) Book a free 30-minute consultation call, 2) Receive a customized proposal within 3-5 business days, 3) Sign engagement agreement and make initial payment, 4) Project kickoff within 1-2 weeks. From first call to start is typically 2-3 weeks.'
      },
      {
        question: 'What information do you need from us to start?',
        answer: 'For the consultation, just your key challenges and goals. For the formal proposal, we\'ll need: company overview (size, industry, structure), specific objectives, current pain points, budget range, timeline expectations, and key stakeholders who\'ll be involved.'
      },
      {
        question: 'How quickly can you start?',
        answer: 'Workshops can typically start within 2-3 weeks of agreement. Longer engagements usually begin within 3-4 weeks to allow proper planning, team assembly, and stakeholder alignment. Rush starts are possible for urgent situations with 1-week notice.'
      },
      {
        question: 'What\'s the time commitment from our team?',
        answer: 'Varies by service. Typical commitment: Strategic Consulting (4-8 hours/week for key stakeholders), Leadership Coaching (2-3 hours/week for participants), Workshops (full-day attendance), Transformation (10-15 hours/week for project team). We work around your schedule.'
      },
      {
        question: 'Do we need to assign internal resources?',
        answer: 'Yes, typically an internal project sponsor (executive level) and 1-2 team members to coordinate activities, gather information, and drive implementation alongside our team. This ensures knowledge transfer and sustains change after we leave.'
      }
    ]
  },
  {
    category: 'Logistics & Practicalities',
    icon: HelpCircle,
    faqs: [
      {
        question: 'What if key people leave during the engagement?',
        answer: 'We build knowledge transfer and documentation into every engagement. If key stakeholders leave, we provide transition support at no additional cost, including bringing new people up to speed and adjusting plans as needed.'
      },
      {
        question: 'Can we pause an engagement if needed?',
        answer: 'Yes, engagements can be paused for up to 30 days for urgent business needs (e.g., acquisition, leadership change, emergency). Longer pauses may require renegotiation of terms. We try to be flexible and understanding of business realities.'
      },
      {
        question: 'What materials/tools do you provide?',
        answer: 'All necessary frameworks, templates, workbooks, digital resources, and documentation are included. You\'ll own all deliverables and materials created during the engagement. We use common tools (MS Office, Google Workspace, Zoom, Miro) so no special software purchases needed.'
      },
      {
        question: 'Do you sign NDAs?',
        answer: 'Yes, we sign mutual NDAs before any detailed discussions. Confidentiality is paramount in consulting. We never share client information, case studies, or learnings without explicit written permission. All team members sign confidentiality agreements.'
      },
      {
        question: 'What happens if we\'re not satisfied?',
        answer: 'We address concerns immediately. If you\'re not satisfied with initial work quality (first 30 days), we offer a money-back guarantee. Throughout the engagement, we conduct regular check-ins to ensure satisfaction and make adjustments. Your success is our success.'
      }
    ]
  }
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState(faqCategories[0].category);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const selectedCategoryData = faqCategories.find(cat => cat.category === selectedCategory);
  
  const filteredFAQs = selectedCategoryData?.faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[50vh] flex items-center justify-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/services/detectives-work.jpg"
            alt="Frequently asked questions"
            fill
            className="object-cover"
            priority
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-surface-900/85 via-primary-900/75 to-surface-900/85"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-accent-300 font-bold rounded-2xl shadow-glow border border-accent-400/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <HelpCircle size={20} className="mr-2" />
              FAQ
            </motion.div>
            <motion.h1 
              className="heading-hero text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Questions
              </span>
            </motion.h1>
            <motion.p 
              className="body-large text-surface-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Everything you need to know about working with Living With Logic. Can&apos;t find your answer? Contact us directly.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-surface-400" size={20} />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-surface-300 focus:outline-none focus:ring-2 focus:ring-accent-400"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Content */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-surface-100 to-surface-50"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Category Sidebar */}
              <div className="lg:col-span-1">
                <div className="card-elevated p-6 sticky top-24">
                  <h3 className="font-bold text-surface-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {faqCategories.map((cat, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedCategory(cat.category);
                          setExpandedIndex(0);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center ${
                          selectedCategory === cat.category
                            ? 'bg-primary-600 text-white shadow-soft'
                            : 'bg-surface-100 text-surface-700 hover:bg-surface-200'
                        }`}
                      >
                        {React.createElement(cat.icon, { size: 18, className: "mr-3" })}
                        <span className="font-semibold text-sm">{cat.category}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ List */}
              <div className="lg:col-span-3">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-surface-900 mb-2">{selectedCategory}</h2>
                  <p className="text-surface-600">
                    {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} 
                    {searchQuery && ' matching your search'}
                  </p>
                </div>

                <div className="space-y-4">
                  {filteredFAQs.map((faq, index) => (
                    <motion.div 
                      key={index}
                      className="card-elevated overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <button
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-surface-50 transition-colors"
                      >
                        <h3 className="font-bold text-surface-900 pr-4 flex-1">{faq.question}</h3>
                        <motion.div
                          animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={24} className="text-primary-600 flex-shrink-0" />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-8 pb-6 text-surface-700 leading-relaxed border-t border-surface-200 pt-6">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                {filteredFAQs.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-surface-600 text-lg mb-4">No questions found matching &quot;{searchQuery}&quot;</p>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="text-primary-600 font-bold hover:text-primary-700 transition-colors"
                    >
                      Clear Search
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Still Have Questions */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent-600 to-secondary-600"></div>
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="heading-section text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Still Have Questions?
            </motion.h2>
            <motion.p 
              className="body-large text-white/90 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help. Book a free consultation or send us a message.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/booking"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-2xl hover:bg-surface-50 transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring"
                >
                  <Calendar size={20} />
                  <span>Book Free Consultation</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50 focus-ring-inset"
                >
                  <MessageCircle size={20} />
                  <span>Contact Us</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}


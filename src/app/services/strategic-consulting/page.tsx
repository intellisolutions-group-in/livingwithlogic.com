'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  BarChart3, ArrowRight, CheckCircle2, Calendar, 
  Target, TrendingUp, Zap, Clock, DollarSign,
  FileText, Users, Award, Star, Download
} from 'lucide-react';

const deliverables = [
  'Comprehensive Market Analysis Report',
  '3-Year Strategic Roadmap',
  'KPI Dashboard Template',
  'Implementation Timeline',
  'Quarterly Review Framework',
  'Competitive Positioning Matrix'
];

const process = [
  {
    month: 'Month 1',
    title: 'Discovery & Analysis',
    activities: [
      'Stakeholder interviews',
      'Market research & competitive analysis',
      'Current state assessment',
      'SWOT analysis'
    ]
  },
  {
    month: 'Month 2-3',
    title: 'Strategy Development',
    activities: [
      'Strategic framework design',
      'Goal setting & KPI definition',
      'Roadmap creation',
      'Resource planning'
    ]
  },
  {
    month: 'Month 4-5',
    title: 'Implementation Support',
    activities: [
      'Execution guidance',
      'Team alignment workshops',
      'Progress monitoring',
      'Course corrections'
    ]
  },
  {
    month: 'Month 6',
    title: 'Review & Optimization',
    activities: [
      'Results measurement',
      'Success evaluation',
      'Framework refinement',
      'Future planning'
    ]
  }
];

const pricingPackages = [
  {
    name: 'Starter Package',
    duration: '3 months',
    price: '₹12,00,000',
    features: [
      'Strategic assessment & analysis',
      'Basic strategic roadmap',
      'KPI framework',
      'Monthly check-ins',
      'Email support'
    ],
    ideal: 'Small businesses & startups',
    cta: 'Get Started'
  },
  {
    name: 'Growth Package',
    duration: '6 months',
    price: '₹22,00,000',
    features: [
      'Everything in Starter',
      'Comprehensive 3-year roadmap',
      'Detailed market analysis',
      'Bi-weekly strategy sessions',
      'Implementation support',
      'Quarterly business reviews'
    ],
    ideal: 'Growing mid-size companies',
    popular: true,
    cta: 'Most Popular'
  },
  {
    name: 'Enterprise Package',
    duration: '12 months',
    price: 'Custom',
    features: [
      'Everything in Growth',
      'Multi-year strategic planning',
      'Organization-wide alignment',
      'Executive coaching included',
      'Priority support',
      'Dedicated consultant'
    ],
    ideal: 'Large enterprises',
    cta: 'Contact Us'
  }
];

const faqs = [
  {
    question: 'How long does strategic consulting take?',
    answer: 'Typical engagements range from 3-6 months, depending on your company size and complexity. We can customize the timeline to fit your needs.'
  },
  {
    question: 'What\'s included in the strategic roadmap?',
    answer: 'The roadmap includes clear goals, initiatives, timelines, resource requirements, KPIs, milestones, and accountability frameworks. It\'s a comprehensive document that guides execution.'
  },
  {
    question: 'Do you work with startups or only established companies?',
    answer: 'We work with businesses of all sizes from startups with 20 employees to enterprises with 5,000+. Our approach scales to your specific situation.'
  },
  {
    question: 'How do you measure success?',
    answer: 'We establish clear, measurable KPIs at the start typically around revenue growth, market share, efficiency metrics, and strategic milestone achievement. Success is tracked quarterly.'
  },
  {
    question: 'Will you work on-site or remotely?',
    answer: 'We offer both. Initial discovery and key strategy sessions are often conducted on-site for maximum impact. Ongoing support can be hybrid or virtual based on your preference.'
  }
];

export default function StrategicConsultingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden pt-24 pb-12 sm:pt-0 sm:pb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/services/detectives-work.jpg"
            alt="Strategic consulting and business analysis"
            fill
            className="object-cover"
            priority
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-surface-900/80 via-primary-900/70 to-surface-900/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-accent-300 font-bold rounded-2xl shadow-glow border border-accent-400/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <BarChart3 size={20} className="mr-2" />
              STRATEGIC CONSULTING
            </motion.div>
            <motion.h1 
              className="heading-hero text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Transform Your Vision Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Actionable Strategy
              </span>
            </motion.h1>
            <motion.p 
              className="body-large text-surface-200 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Develop clear, data-driven strategies that align your team, clarify your direction, and create sustainable competitive advantages in your market.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/booking"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-surface-900 font-bold text-lg rounded-2xl hover:bg-surface-50 transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring"
                >
                  <Calendar size={20} />
                  <span>Book Free Consultation</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-2xl font-bold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 focus-ring-inset"
                >
                  <span>Request Proposal</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-surface-100 to-primary-50"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-section text-surface-900 mb-8">
                What Is{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  Strategic Consulting?
                </span>
              </h2>
              <p className="body-large text-surface-600 max-w-4xl mx-auto">
                Strategic consulting helps organizations develop clear, actionable strategies that drive sustainable growth. 
                We work with leadership teams to assess current market position, identify opportunities, and create detailed 
                roadmaps for success transforming vague ambitions into concrete plans with measurable outcomes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Target,
                  title: 'Who Needs It?',
                  description: 'Companies facing growth challenges, market changes, unclear direction, or seeking competitive advantages. Perfect for businesses at inflection points.'
                },
                {
                  icon: TrendingUp,
                  title: 'Expected Outcomes',
                  description: 'Clear strategic direction, aligned leadership team, actionable roadmap, defined KPIs, improved decision-making, and measurable business growth.'
                },
                {
                  icon: Zap,
                  title: 'Our Difference',
                  description: 'We don\'t just deliver reports we partner with you for implementation. Our logical frameworks ensure strategies are both ambitious and achievable.'
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="card-elevated p-8 hover:shadow-elevated transition-all duration-500 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:shadow-elevated transition-all duration-300 group-hover:scale-110">
                    {React.createElement(item.icon, { size: 28, className: "text-white" })}
                  </div>
                  <h3 className="heading-card text-surface-900 mb-4">{item.title}</h3>
                  <p className="body-regular text-surface-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Approach Section */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-accent-300 font-bold rounded-2xl shadow-glow border border-accent-400/30 mb-8">
                <Target size={20} className="mr-2" />
                OUR APPROACH
              </div>
              <h2 className="heading-section text-white mb-8">
                Comprehensive{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Strategic Framework
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Market Analysis & Positioning',
                  description: 'Deep dive into your market, competitors, and unique value proposition to identify opportunities and threats.'
                },
                {
                  title: 'Strategic Planning & Roadmaps',
                  description: '3-year strategic roadmaps with clear milestones, initiatives, and resource allocation frameworks.'
                },
                {
                  title: 'Performance Metrics & KPIs',
                  description: 'Define measurable success indicators and implement tracking systems for continuous improvement.'
                },
                {
                  title: 'Change Management Support',
                  description: 'Ensure smooth strategy adoption with change management frameworks and stakeholder alignment.'
                },
                {
                  title: 'Implementation Guidance',
                  description: 'Hands-on support to execute your strategy, overcome obstacles, and maintain momentum.'
                },
                {
                  title: 'Quarterly Strategy Reviews',
                  description: 'Regular reviews to assess progress, celebrate wins, and adjust strategy based on results.'
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="card-glass p-8 hover:bg-white/15 transition-all duration-500 group border-surface-700/50 hover:border-accent-400/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-accent-400 rounded-full mr-4"></div>
                    <h3 className="heading-card text-white group-hover:text-accent-300 transition-colors">{item.title}</h3>
                  </div>
                  <p className="body-regular text-surface-300 group-hover:text-white transition-colors">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Process Timeline Section */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-surface-50 to-accent-50"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-section text-surface-900 mb-8">
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  6-Month Process
                </span>
              </h2>
              <p className="body-large text-surface-600 max-w-4xl mx-auto">
                A systematic approach that takes you from current state assessment to strategic execution and optimization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((phase, index) => (
                <motion.div 
                  key={index}
                  className="card-elevated p-8 hover:shadow-elevated transition-all duration-500 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-center mb-6">
                    <div className="text-5xl font-black text-primary-600 mb-2">{String(index + 1).padStart(2, '0')}</div>
                    <div className="text-sm font-bold text-accent-600 mb-3">{phase.month}</div>
                    <h3 className="heading-card text-surface-900">{phase.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start text-surface-700">
                        <CheckCircle2 size={16} className="text-secondary-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="font-medium text-sm">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Deliverables Section */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-surface-100 to-surface-50"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white backdrop-blur-sm text-primary-600 font-bold rounded-2xl shadow-soft border border-primary-200/50 mb-8">
                <FileText size={20} className="mr-2" />
                WHAT YOU GET
              </div>
              <h2 className="heading-section text-surface-900 mb-8">
                Comprehensive{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  Deliverables
                </span>
              </h2>
            </motion.div>

            <motion.div 
              className="card-elevated p-10 bg-gradient-to-br from-white to-surface-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deliverables.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={24} className="text-white" />
                    </div>
                    <span className="font-bold text-surface-900">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-surface-900 via-primary-900 to-surface-900"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-accent-300 font-bold rounded-2xl shadow-glow border border-accent-400/30 mb-8">
                <DollarSign size={20} className="mr-2" />
                INVESTMENT OPTIONS
              </div>
              <h2 className="heading-section text-white mb-8">
                Flexible{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Pricing Packages
                </span>
              </h2>
              <p className="body-large text-surface-300 max-w-4xl mx-auto">
                Choose the package that best fits your business size, needs, and budget. All packages include implementation support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingPackages.map((pkg, index) => (
                <motion.div 
                  key={index}
                  className={`card-glass p-8 hover:bg-white/15 transition-all duration-500 border-surface-700/50 hover:border-accent-400/50 relative ${
                    pkg.popular ? 'lg:scale-105 border-accent-400/50' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="px-6 py-2 bg-gradient-to-r from-accent-500 to-secondary-500 text-white font-bold rounded-full text-sm shadow-glow">
                        {pkg.cta}
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="heading-card text-white mb-2">{pkg.name}</h3>
                    <div className="flex items-center justify-center space-x-2 text-surface-300 mb-4">
                      <Clock size={16} />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>
                    <div className="text-5xl font-black text-accent-300 mb-2">{pkg.price}</div>
                    <div className="text-sm text-surface-400">One-time investment</div>
                  </div>

                  <div className="mb-8">
                    <div className="text-sm font-bold text-accent-300 mb-4">INCLUDES:</div>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-surface-200">
                          <CheckCircle2 size={16} className="text-secondary-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-surface-700/50 pt-6 mb-6">
                    <div className="text-sm text-surface-400 mb-2">IDEAL FOR:</div>
                    <div className="text-white font-semibold">{pkg.ideal}</div>
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Link 
                      href="/booking"
                      className={`block text-center px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-accent-600 to-secondary-600 text-white hover:from-accent-700 hover:to-secondary-700 shadow-soft hover:shadow-elevated'
                          : 'bg-white/10 text-white hover:bg-white/20 border border-white/30 hover:border-white/50'
                      }`}
                    >
                      {pkg.popular ? 'Get Started' : pkg.cta}
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-surface-300 mb-4">All packages include 30-day money-back guarantee</p>
              <p className="text-surface-400 text-sm">Payment plans available for 6+ month engagements</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Case Study Highlight */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white backdrop-blur-sm text-primary-600 font-bold rounded-2xl shadow-soft border border-primary-200/50 mb-8">
                <Award size={20} className="mr-2" />
                SUCCESS STORY
              </div>
              <h2 className="heading-section text-surface-900 mb-8">
                Real Results from{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Strategic Consulting
                </span>
              </h2>
            </motion.div>

            <motion.div 
              className="card-elevated p-12 bg-gradient-to-br from-white to-surface-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-surface-900 mb-4">TechVista Solutions Pvt Ltd</h3>
                <div className="flex flex-wrap items-center gap-3 text-surface-600 mb-6">
                  <div className="flex items-center">
                    <Users size={16} className="mr-2" />
                    <span className="text-sm">150 Employees</span>
                  </div>
                  <div className="flex items-center">
                    <Target size={16} className="mr-2" />
                    <span className="text-sm">Technology/SaaS</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm">9-Month Engagement</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-surface-900 mb-4 text-lg">The Challenge</h4>
                  <p className="text-surface-600 mb-4">
                    TechVista was struggling with unclear market positioning and team silos. Despite having a good product, 
                    they couldn&apos;t articulate their value proposition clearly, leading to inconsistent messaging and slow growth.
                  </p>
                  <h4 className="font-bold text-surface-900 mb-4 text-lg">Our Solution</h4>
                  <p className="text-surface-600">
                    We conducted comprehensive market analysis, competitor research, and internal stakeholder interviews. 
                    Created a 3-year strategic roadmap with clear positioning, go-to-market strategy, and organizational alignment framework.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-surface-900 mb-6 text-lg">The Results</h4>
                  <div className="space-y-4">
                    {[
                      { metric: '45%', label: 'Revenue Growth in 18 Months' },
                      { metric: '92%', label: 'Leadership Team Alignment' },
                      { metric: '32%', label: 'Improvement in Employee Satisfaction' },
                      { metric: '3x', label: 'Increase in Market Share' }
                    ].map((result, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-soft">
                        <span className="text-surface-700 font-medium">{result.label}</span>
                        <span className="text-2xl font-black text-primary-600">{result.metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-surface-200 pt-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">RS</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg text-surface-800 italic mb-3">
                      &quot;Living With Logic transformed how we think about strategy. Their data-driven approach helped us find 
                      clarity in chaos, and the roadmap they created became our north star. Nine months later, we&apos;re exceeding 
                      our goals and the entire team is aligned. Best investment we&apos;ve made in the business.&quot;
                    </p>
                    <div>
                      <div className="font-bold text-surface-900">Rajesh Sharma</div>
                      <div className="text-surface-600 text-sm">CEO & Founder, TechVista Solutions, Mumbai</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/case-studies"
                className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors"
              >
                View More Success Stories
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-surface-100 to-surface-50"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-section text-surface-900 mb-8">
                Frequently Asked{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  Questions
                </span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="card-elevated p-8 hover:shadow-elevated transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="heading-card text-surface-900 mb-4">{faq.question}</h3>
                  <p className="body-regular text-surface-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/faq"
                className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors"
              >
                View All FAQs
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Related Services */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-section text-white mb-8">
                Related{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Services
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Leadership Development',
                  description: 'Build strong leaders who can execute your strategy and inspire your teams.',
                  link: '/services/leadership-development'
                },
                {
                  title: 'Organizational Transformation',
                  description: 'Transform your entire organization to support your new strategic direction.',
                  link: '/services/organizational-transformation'
                }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  className="card-glass p-8 hover:bg-white/15 transition-all duration-500 group border-surface-700/50 hover:border-accent-400/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <h3 className="heading-card text-white mb-4 group-hover:text-accent-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="body-regular text-surface-300 group-hover:text-white transition-colors mb-6">
                    {service.description}
                  </p>
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-accent-400 font-bold hover:text-accent-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
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
              Ready to Build Your Strategic Roadmap?
            </motion.h2>
            <motion.p 
              className="body-large text-white/90 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Start with a free 30-minute consultation. We&apos;ll discuss your challenges and explore how strategic consulting 
              can help you achieve your business goals.
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
                  <Download size={20} />
                  <span>Download Strategy Guide</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}


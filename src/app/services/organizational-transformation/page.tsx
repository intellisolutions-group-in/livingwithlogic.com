'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  RefreshCw, ArrowRight, CheckCircle2, Calendar, 
  Target, TrendingUp, Award, Clock,
  Star, MessageCircle, Brain, Users
} from 'lucide-react';

const transformationAreas = [
  {
    icon: RefreshCw,
    title: 'Organizational Design & Restructuring',
    description: 'Redesign org structures for efficiency, clarity, and scalability',
    benefits: ['Reduced layers', 'Clear accountability', 'Faster decisions']
  },
  {
    icon: Brain,
    title: 'Culture Change Initiatives',
    description: 'Transform workplace culture to support business objectives',
    benefits: ['Values alignment', 'Behavioral change', 'Employee engagement']
  },
  {
    icon: TrendingUp,
    title: 'Digital Transformation',
    description: 'Modernize systems, processes, and capabilities for digital age',
    benefits: ['Technology adoption', 'Process automation', 'Digital literacy']
  },
  {
    icon: TrendingUp,
    title: 'Process Optimization',
    description: 'Streamline operations to eliminate waste and boost efficiency',
    benefits: ['30-50% efficiency gains', 'Cost reduction', 'Quality improvement']
  },
  {
    icon: Target,
    title: 'Performance Management Systems',
    description: 'Build frameworks that drive accountability and results',
    benefits: ['Clear KPIs', 'Regular feedback', 'Merit-based rewards']
  },
  {
    icon: Users,
    title: 'Change Management',
    description: 'Ensure smooth adoption of changes with minimal resistance',
    benefits: ['Stakeholder buy-in', 'Smooth transitions', 'Sustained change']
  }
];

const whenYouNeed = [
  {
    title: 'Rapid Growth / Scaling',
    description: 'Your company is growing fast and current structures/processes cannot keep up',
    indicators: ['Confusion about roles', 'Decision bottlenecks', 'Quality concerns']
  },
  {
    title: 'Merger or Acquisition',
    description: 'You need to integrate two organizations smoothly',
    indicators: ['Culture clash', 'Duplicate systems', 'Team uncertainty']
  },
  {
    title: 'Market Disruption',
    description: 'Industry changes require fundamental business model shifts',
    indicators: ['Declining competitiveness', 'New competitors', 'Customer expectations']
  },
  {
    title: 'Performance Issues',
    description: 'Organization is underperforming despite good people',
    indicators: ['Low productivity', 'High turnover', 'Employee disengagement']
  },
  {
    title: 'Legacy System Modernization',
    description: 'Outdated systems, processes, or technologies holding you back',
    indicators: ['Manual processes', 'Data silos', 'Slow operations']
  },
  {
    title: 'Culture Problems',
    description: 'Toxic or misaligned culture preventing success',
    indicators: ['High conflict', 'Low morale', 'Talent leaving']
  }
];

const transformationPhases = [
  {
    phase: 'Phase 1',
    title: 'Assessment',
    duration: 'Weeks 1-4',
    activities: [
      'Current state comprehensive analysis',
      'Stakeholder interviews (50+ people)',
      'Culture assessment & surveys',
      'Process mapping & documentation',
      'Gap analysis & pain points',
      'Benchmarking & best practices'
    ],
    deliverable: 'Detailed assessment report with recommendations'
  },
  {
    phase: 'Phase 2',
    title: 'Design',
    duration: 'Weeks 5-8',
    activities: [
      'Future state vision & design',
      'New organizational structure',
      'Process redesign & optimization',
      'Change roadmap creation',
      'Risk mitigation planning',
      'Communication strategy'
    ],
    deliverable: 'Transformation roadmap & design blueprints'
  },
  {
    phase: 'Phase 3',
    title: 'Implementation',
    duration: 'Months 3-15',
    activities: [
      'Pilot programs & testing',
      'Phased rollout execution',
      'Training & capability building',
      'Change management activities',
      'Performance monitoring',
      'Course corrections & adjustments'
    ],
    deliverable: 'Fully implemented transformation with trained teams'
  },
  {
    phase: 'Phase 4',
    title: 'Sustainment',
    duration: 'Months 16-18',
    activities: [
      'Performance tracking & optimization',
      'Continuous improvement cycles',
      'Knowledge transfer to internal teams',
      'Leadership capability building',
      'Success measurement & reporting',
      'Lessons learned documentation'
    ],
    deliverable: 'Self-sustaining transformation with internal ownership'
  }
];

const packages = [
  {
    name: 'Standard Transformation',
    duration: '6 months',
    scope: 'Focused transformation of specific area or department',
    features: [
      'Single department or function',
      'Process optimization focus',
      'Basic change management',
      'Monthly progress reviews',
      'Implementation support',
      'Documentation & training'
    ],
    ideal: 'Small to mid-size companies',
    results: 'Efficiency improvement'
  },
  {
    name: 'Comprehensive Transformation',
    duration: '12 months',
    scope: 'Organization-wide transformation across multiple areas',
    features: [
      'Multiple departments involved',
      'Culture & process transformation',
      'Extensive change management',
      'Bi-weekly leadership coaching',
      'Technology integration support',
      'Performance management design',
      'Quarterly business reviews'
    ],
    ideal: 'Growing mid-market companies',
    popular: true,
    results: 'Productivity gains, cost reduction'
  },
  {
    name: 'Enterprise Transformation',
    duration: '18+ months',
    scope: 'Complete enterprise-wide transformation with sustained support',
    features: [
      'Entire organization transformation',
      'Strategic realignment included',
      'Digital transformation integration',
      'Executive team development',
      'Dedicated consultant team',
      'Priority support & escalation',
      'Post-transformation sustainment'
    ],
    ideal: 'Large enterprises',
    results: 'Complete organizational renewal'
  }
];

const faqs = [
  {
    question: 'How long does organizational transformation typically take?',
    answer: 'It depends on scope. Focused transformations take 6-9 months, while comprehensive organization-wide transformations typically require 12-18 months. We break it into phases so you see progress along the way.'
  },
  {
    question: 'How do you handle employee resistance to change?',
    answer: 'Change management is core to our approach. We use proven frameworks including stakeholder mapping, communication plans, early adopter strategies, training programs, and leadership coaching to minimize resistance and build enthusiasm for change.'
  },
  {
    question: 'Will our business operations be disrupted during transformation?',
    answer: 'We design transformation plans to minimize disruption. We typically use phased rollouts, pilot programs, and parallel running to ensure business continuity. Most clients report minimal operational impact while achieving significant improvements.'
  },
  {
    question: 'What\'s your success rate with transformations?',
    answer: 'We have a 95% success rate (defined as achieving target KPIs within timeline). Our success comes from thorough planning, active change management, and strong partnership with client leadership teams throughout the journey.'
  },
  {
    question: 'Do you provide post-transformation support?',
    answer: 'Yes! All transformation engagements include a sustainment phase (typically 2-3 months) to ensure changes stick. We also offer ongoing advisory retainers for continued optimization and support.'
  }
];

export default function OrganizationalTransformationPage() {
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
            alt="Organizational transformation and change management"
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
              <RefreshCw size={20} className="mr-2" />
              ORGANIZATIONAL TRANSFORMATION
            </motion.div>
            <motion.h1 
              className="heading-hero text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Transform Your Organization for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Sustainable Success
              </span>
            </motion.h1>
            <motion.p 
              className="body-large text-surface-200 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Guide your organization through major transformations with our comprehensive approach that addresses structure, 
              process, technology, and culture to ensure sustainable change.
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
                  <span>Book Assessment</span>
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

      {/* Transformation Areas */}
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
                Comprehensive{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  Transformation Services
                </span>
              </h2>
              <p className="body-large text-surface-600 max-w-4xl mx-auto">
                We address every aspect of organizational transformation, from structure and processes to culture and technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {transformationAreas.map((area, index) => (
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
                    {React.createElement(area.icon, { size: 28, className: "text-white" })}
                  </div>
                  <h3 className="heading-card text-surface-900 mb-3">{area.title}</h3>
                  <p className="text-surface-600 mb-4 text-sm">{area.description}</p>
                  <div className="border-t border-surface-200 pt-4">
                    <div className="text-xs font-bold text-surface-500 mb-3">KEY BENEFITS:</div>
                    <ul className="space-y-2">
                      {area.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-surface-700">
                          <CheckCircle2 size={14} className="text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* When You Need Transformation */}
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
                WHEN YOU NEED US
              </div>
              <h2 className="heading-section text-white mb-8">
                Signs You Need{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Transformation
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whenYouNeed.map((scenario, index) => (
                <motion.div 
                  key={index}
                  className="card-glass p-8 hover:bg-white/15 transition-all duration-500 group border-surface-700/50 hover:border-accent-400/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <h3 className="heading-card text-white mb-3 group-hover:text-accent-300 transition-colors">
                    {scenario.title}
                  </h3>
                  <p className="text-surface-300 mb-4 text-sm group-hover:text-white transition-colors">
                    {scenario.description}
                  </p>
                  <div className="border-t border-surface-700/50 pt-4">
                    <div className="text-xs font-bold text-accent-300 mb-3">WARNING SIGNS:</div>
                    <ul className="space-y-2">
                      {scenario.indicators.map((indicator, idx) => (
                        <li key={idx} className="flex items-start text-surface-200 group-hover:text-white transition-colors">
                          <div className="w-2 h-2 bg-accent-400 rounded-full mr-3 flex-shrink-0 mt-1.5"></div>
                          <span className="text-sm">{indicator}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Transformation Framework - 4 Phases */}
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
                  4-Phase Framework
                </span>
              </h2>
              <p className="body-large text-surface-600 max-w-4xl mx-auto">
                A systematic approach proven across 50+ successful organizational transformations in India.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {transformationPhases.map((phase, index) => (
                <motion.div 
                  key={index}
                  className="card-elevated p-10 hover:shadow-elevated transition-all duration-500 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:shadow-elevated transition-all duration-300">
                      <div className="text-3xl font-black text-white">{index + 1}</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent-600 mb-2">{phase.phase}</div>
                      <h3 className="heading-card text-surface-900 mb-2">{phase.title}</h3>
                      <div className="flex items-center text-surface-500 text-sm">
                        <Clock size={14} className="mr-2" />
                        <span>{phase.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-bold text-surface-900 mb-4">KEY ACTIVITIES:</div>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-surface-700">
                          <CheckCircle2 size={14} className="text-secondary-600 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-surface-200 pt-6">
                    <div className="text-sm font-bold text-surface-900 mb-2">DELIVERABLE:</div>
                    <p className="text-surface-700 text-sm font-medium">{phase.deliverable}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Packages */}
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
                <Target size={20} className="mr-2" />
                ENGAGEMENT OPTIONS
              </div>
              <h2 className="heading-section text-white mb-8">
                Transformation{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Packages
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
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
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="heading-card text-white mb-2">{pkg.name}</h3>
                    <div className="flex items-center justify-center space-x-2 text-surface-300 mb-4">
                      <Clock size={16} />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>
                    <p className="text-sm text-surface-300 italic">{pkg.scope}</p>
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
                    <div className="text-white font-semibold mb-4">{pkg.ideal}</div>
                    <div className="text-sm text-surface-400 mb-2">EXPECTED RESULTS:</div>
                    <div className="text-accent-300 font-semibold">{pkg.results}</div>
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Link 
                      href="/contact"
                      className={`block text-center px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-accent-600 to-secondary-600 text-white hover:from-accent-700 hover:to-secondary-700 shadow-soft hover:shadow-elevated'
                          : 'bg-white/10 text-white hover:bg-white/20 border border-white/30 hover:border-white/50'
                      }`}
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Success Story */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-surface-100 to-surface-50"></div>
        
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
                TRANSFORMATION SUCCESS
              </div>
              <h2 className="heading-section text-surface-900 mb-8">
                Complete{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Turnaround Story
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
                <h3 className="text-3xl font-bold text-surface-900 mb-4">Manufacturing Company</h3>
                <p className="text-surface-600 text-lg">500 employees | Manufacturing | Pune, Maharashtra</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-surface-900 mb-4 text-lg">The Challenge</h4>
                  <p className="text-surface-600 mb-4">
                    The company was struggling with outdated processes, high waste, low employee morale, and declining competitiveness. 
                    28% annual turnover was killing productivity.
                  </p>
                  <h4 className="font-bold text-surface-900 mb-4 text-lg">The Solution</h4>
                  <p className="text-surface-600">
                    18-month comprehensive transformation: process reengineering, culture change, leadership development, 
                    and performance management redesign.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-surface-900 mb-6 text-lg">The Results</h4>
                  <div className="space-y-4">
                    {[
                      { metric: '50%', label: 'Cycle Time Reduction' },
                      { metric: '38%', label: 'Waste Reduction' },
                      { metric: '65%', label: 'Engagement Increase' },
                      { metric: '9%', label: 'Turnover (from 28%)' },
                      { metric: '28%', label: 'Profit Margin Growth' },
                      { metric: '40%', label: 'Revenue per Employee' }
                    ].map((result, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-xl shadow-soft">
                        <span className="text-surface-700 font-medium text-sm">{result.label}</span>
                        <span className="text-xl font-black text-primary-600">{result.metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-surface-200 pt-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">VM</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg text-surface-800 italic mb-3">
                      &quot;This was a complete turnaround in every sense. Living With Logic didn&apos;t just fix our processes they 
                      transformed our culture and mindset. People who were disengaged are now champions of continuous improvement. 
                      Our profitability has never been better, and we&apos;re now competitive globally. This transformation saved our company.&quot;
                    </p>
                    <div>
                      <div className="font-bold text-surface-900">Vikram Malhotra</div>
                      <div className="text-surface-600 text-sm">Chief Operating Officer</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-surface-50 to-accent-50"></div>
        
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
                Transformation{' '}
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
              Ready to Transform Your Organization?
            </motion.h2>
            <motion.p 
              className="body-large text-white/90 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Start with a complimentary transformation readiness assessment. We&apos;ll evaluate your current state, 
              identify opportunities, and outline a potential roadmap.
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
                  <span>Book Readiness Assessment</span>
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


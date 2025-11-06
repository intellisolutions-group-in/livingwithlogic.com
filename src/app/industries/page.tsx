'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Lightbulb, Heart, Cog, DollarSign, ShoppingBag, Briefcase,
  ArrowRight, CheckCircle2, TrendingUp, Target, Calendar
} from 'lucide-react';

const industries = [
  {
    id: 1,
    name: 'Technology & SaaS',
    icon: Lightbulb,
    color: 'from-blue-500 to-blue-600',
    companies: '70+',
    description: 'Help technology companies scale efficiently, build strong cultures, and achieve product-market fit.',
    challenges: [
      'Rapid scaling pressures',
      'Product-market fit refinement',
      'Technical leadership development',
      'Building scalable processes',
      'Managing distributed teams'
    ],
    solutions: [
      'Strategic planning for growth',
      'Leadership pipeline development',
      'Agile transformation',
      'Culture building for high-growth',
      'Process standardization'
    ],
    results: [
      '40-60% faster time-to-market',
      '30-50% improvement in team productivity',
      'Successful scaling from 50 to 500+ employees',
      'Stronger engineering culture'
    ],
    caseStudy: {
      company: 'TechVista Solutions',
      result: '45% revenue growth, team alignment achieved'
    },
    services: [
      'Product Strategy Consulting',
      'Tech Leadership Bootcamp',
      'Agile Transformation Program'
    ]
  },
  {
    id: 2,
    name: 'Healthcare & Life Sciences',
    icon: Heart,
    color: 'from-rose-500 to-rose-600',
    companies: '40+',
    description: 'Enable healthcare organizations to expand while maintaining quality standards and compliance.',
    challenges: [
      'Maintaining quality during expansion',
      'Regulatory compliance complexity',
      'Clinical staff engagement',
      'Patient experience optimization',
      'Digital health integration'
    ],
    solutions: [
      'Growth infrastructure design',
      'Clinical leadership development',
      'Process standardization',
      'Culture of quality & safety',
      'Patient-centric transformation'
    ],
    results: [
      '25-40% operational efficiency gains',
      '50-70% improvement in staff retention',
      'Patient satisfaction scores above 4.5/5',
      'Zero compliance violations'
    ],
    caseStudy: {
      company: 'Healthcare Plus India',
      result: '40 locations opened, 4.8/5 patient satisfaction'
    },
    services: [
      'Healthcare Expansion Strategy',
      'Clinical Leadership Program',
      'Patient Experience Transformation'
    ]
  },
  {
    id: 3,
    name: 'Manufacturing',
    icon: Cog,
    color: 'from-amber-500 to-amber-600',
    companies: '35+',
    description: 'Transform manufacturing operations through lean principles, automation, and culture change.',
    challenges: [
      'Legacy process optimization',
      'Workforce upskilling needs',
      'Industry 4.0 adoption',
      'Supply chain resilience',
      'Sustainability integration'
    ],
    solutions: [
      'Operational excellence programs',
      'Lean transformation',
      'Leadership development for shop floor',
      'Digital manufacturing roadmaps',
      'Quality management systems'
    ],
    results: [
      '30-50% cycle time reduction',
      '20-40% waste reduction',
      '40-60% improvement in OEE',
      'Enhanced global competitiveness'
    ],
    caseStudy: {
      company: 'Manufacturing Excellence',
      result: '50% cycle time reduction, culture transformed'
    },
    services: [
      'Lean Six Sigma Implementation',
      'Manufacturing Leadership Academy',
      'Industry 4.0 Strategy'
    ]
  },
  {
    id: 4,
    name: 'Financial Services',
    icon: DollarSign,
    color: 'from-green-500 to-green-600',
    companies: '25+',
    description: 'Navigate regulatory complexity while driving digital innovation and customer experience.',
    challenges: [
      'Regulatory complexity',
      'Digital disruption response',
      'Risk culture development',
      'Customer experience evolution',
      'Leadership bench strength'
    ],
    solutions: [
      'Strategic repositioning',
      'Executive leadership development',
      'Digital transformation programs',
      'Risk-aware culture building',
      'Customer experience design'
    ],
    results: [
      '30-50% increase in digital adoption',
      '40-60% improvement in compliance scores',
      '25-35% growth in customer retention',
      'Enhanced risk management'
    ],
    caseStudy: {
      company: 'FinServe Solutions',
      result: 'Zero compliance violations, 94% client retention'
    },
    services: [
      'Financial Services Strategy',
      'Executive Leadership Program',
      'Digital Banking Transformation'
    ]
  },
  {
    id: 5,
    name: 'Retail & E-Commerce',
    icon: ShoppingBag,
    color: 'from-purple-500 to-purple-600',
    companies: '20+',
    description: 'Drive omnichannel excellence and adapt to rapidly changing consumer expectations.',
    challenges: [
      'Omnichannel integration',
      'Rapid market changes',
      'Inventory optimization',
      'Customer experience consistency',
      'Team agility'
    ],
    solutions: [
      'Omnichannel strategy',
      'Customer experience design',
      'Retail operations optimization',
      'Change management for digital adoption',
      'Supply chain improvement'
    ],
    results: [
      '50-100% growth in online sales',
      '30-40% improvement in inventory turns',
      '40-60% increase in customer lifetime value',
      'Seamless omnichannel experience'
    ],
    caseStudy: {
      company: 'RetailHub India',
      result: '65% online sales, 3x customer base'
    },
    services: [
      'Retail Strategy & Transformation',
      'Customer Experience Workshops',
      'Omnichannel Implementation'
    ]
  },
  {
    id: 6,
    name: 'Professional Services',
    icon: Briefcase,
    color: 'from-indigo-500 to-indigo-600',
    companies: '15+',
    description: 'Scale professional services firms beyond founders while maintaining quality and culture.',
    challenges: [
      'Scaling beyond founders',
      'Service delivery standardization',
      'Talent retention',
      'Business development systems',
      'Thought leadership positioning'
    ],
    solutions: [
      'Growth strategy & positioning',
      'Scalable delivery models',
      'Partnership development',
      'Talent management systems',
      'Marketing & business development'
    ],
    results: [
      '40-70% revenue growth',
      '50-80% improvement in utilization rates',
      '30-50% increase in average deal size',
      'Successful partner transitions'
    ],
    caseStudy: {
      company: 'LegalEdge Associates',
      result: '45% billing efficiency, modern workflows'
    },
    services: [
      'Professional Services Growth Strategy',
      'Partner Development Program',
      'Practice Management Consulting'
    ]
  }
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/services/detectives-work.jpg"
            alt="Industries we serve"
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
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-accent-300 font-bold rounded-2xl shadow-glow border border-accent-400/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Target size={20} className="mr-2" />
              INDUSTRIES WE SERVE
            </motion.div>
            <motion.h1 
              className="heading-hero text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Cross-Industry{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Excellence
              </span>
            </motion.h1>
            <motion.p 
              className="body-large text-surface-200 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Specialized expertise across multiple sectors. Our logical frameworks adapt to any industry while 
              bringing proven methodologies and best practices from across sectors.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Industry Breakdown Stats */}
      <motion.section 
        className="relative py-16 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-surface-100 to-surface-50"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
              {[
                { industry: 'Technology', percentage: '35%' },
                { industry: 'Healthcare', percentage: '20%' },
                { industry: 'Manufacturing', percentage: '18%' },
                { industry: 'Financial Services', percentage: '12%' },
                { industry: 'Retail & E-commerce', percentage: '10%' },
                { industry: 'Others', percentage: '5%' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="card-elevated p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-black text-primary-600 mb-2">{item.percentage}</div>
                  <div className="text-surface-700 font-semibold text-sm">{item.industry}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Industries Detail */}
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
            <div className="space-y-16">
              {industries.map((industry, index) => (
                <motion.div 
                  key={industry.id}
                  className="card-elevated p-10 lg:p-12 hover:shadow-elevated transition-all duration-500 bg-gradient-to-br from-white to-surface-50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mr-6 shadow-soft`}>
                        {React.createElement(industry.icon, { size: 36, className: "text-white" })}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-surface-900 mb-2">{industry.name}</h2>
                        <p className="text-surface-600 font-semibold">{industry.companies} Companies Served</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-surface-500">
                      <TrendingUp size={20} />
                      <span className="text-sm font-medium">High Growth Sector</span>
                    </div>
                  </div>

                  <p className="text-surface-700 text-lg mb-8 leading-relaxed">{industry.description}</p>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Challenges */}
                    <div>
                      <h3 className="text-xl font-bold text-surface-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center mr-3">
                          <Target size={18} className="text-rose-600" />
                        </div>
                        Common Challenges
                      </h3>
                      <ul className="space-y-3">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start text-surface-700">
                            <div className="w-2 h-2 bg-rose-500 rounded-full mr-3 flex-shrink-0 mt-2"></div>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h3 className="text-xl font-bold text-surface-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                          <CheckCircle2 size={18} className="text-green-600" />
                        </div>
                        Our Solutions
                      </h3>
                      <ul className="space-y-3">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start text-surface-700">
                            <CheckCircle2 size={16} className="text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-white rounded-xl p-6 mb-8 border border-surface-200">
                    <h3 className="text-xl font-bold text-surface-900 mb-4">Typical Results</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {industry.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <TrendingUp size={16} className="text-primary-600" />
                          </div>
                          <span className="text-surface-700 font-semibold text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case Study & Services */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Case Study */}
                    <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-200">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center mr-3">
                          <CheckCircle2 size={20} className="text-white" />
                        </div>
                        <h4 className="font-bold text-surface-900">Featured Case Study</h4>
                      </div>
                      <p className="text-surface-700 font-semibold mb-2">{industry.caseStudy.company}</p>
                      <p className="text-surface-600 text-sm">{industry.caseStudy.result}</p>
                      <Link 
                        href="/case-studies"
                        className="inline-flex items-center text-primary-600 font-bold text-sm mt-4 hover:text-primary-700 transition-colors"
                      >
                        Read Full Story
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>

                    {/* Industry-Specific Services */}
                    <div className="bg-gradient-to-br from-secondary-50 to-accent-50 rounded-xl p-6 border border-secondary-200">
                      <h4 className="font-bold text-surface-900 mb-4">Industry-Specific Services</h4>
                      <ul className="space-y-2">
                        {industry.services.map((service, idx) => (
                          <li key={idx} className="flex items-center text-surface-700">
                            <div className="w-1.5 h-1.5 bg-secondary-600 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-sm font-semibold">{service}</span>
                          </li>
                        ))}
                      </ul>
                      <Link 
                        href="/services"
                        className="inline-flex items-center text-secondary-600 font-bold text-sm mt-4 hover:text-secondary-700 transition-colors"
                      >
                        View All Services
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Industry Expertise Matters */}
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
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2 
              className="heading-section text-white mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Industry{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Expertise Matters
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Understanding Unique Challenges',
                  description: 'Each industry has specific challenges, regulations, and dynamics. Our experience means we understand your context from day one.'
                },
                {
                  icon: TrendingUp,
                  title: 'Relevant Frameworks & Benchmarks',
                  description: 'We bring industry-specific frameworks, benchmarks, and best practices that are immediately applicable to your situation.'
                },
                {
                  icon: CheckCircle2,
                  title: 'Faster Time-to-Value',
                  description: 'Less time explaining your business means more time solving problems. We hit the ground running with industry knowledge.'
                },
                {
                  icon: Briefcase,
                  title: 'Industry Network & Connections',
                  description: 'Access to our network of industry leaders, potential partners, and subject matter experts across sectors.'
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="card-glass p-8 hover:bg-white/15 transition-all duration-500 border-surface-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                    {React.createElement(benefit.icon, { size: 28, className: "text-white" })}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-surface-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Don't See Your Industry */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-surface-100 to-surface-50"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="heading-section text-surface-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Don&apos;t See Your Industry?
            </motion.h2>
            <motion.p 
              className="body-large text-surface-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              We work across all sectors. Our logical frameworks and proven methodologies adapt to any industry. 
              We&apos;ve served clients in construction, agriculture, media, logistics, hospitality, and more.
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
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold text-lg rounded-2xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring"
                >
                  <Calendar size={20} />
                  <span>Discuss Your Industry</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/case-studies"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-2xl hover:bg-surface-50 transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring border border-primary-200"
                >
                  <span>View All Case Studies</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}


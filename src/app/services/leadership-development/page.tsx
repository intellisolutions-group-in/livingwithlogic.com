'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Users, ArrowRight, CheckCircle2, Calendar, 
  Target, Award, Clock, DollarSign,
  Brain, Star, Download
} from 'lucide-react';

const programFormats = [
  {
    title: 'Executive Coaching',
    duration: '6-12 months',
    format: 'One-on-one sessions',
    frequency: 'Bi-weekly meetings',
    ideal: 'C-Suite & Senior Leaders',
    price: '₹6,00,000'
  },
  {
    title: 'Leadership Bootcamp',
    duration: '3 days',
    format: 'Intensive workshop',
    frequency: 'Full-day sessions',
    ideal: 'Emerging leaders',
    price: '₹2,50,000'
  },
  {
    title: 'Leadership Series',
    duration: '3 months',
    format: 'Group program',
    frequency: '8 weekly sessions',
    ideal: 'Mid-level managers',
    price: '₹4,50,000'
  },
  {
    title: 'Corporate Program',
    duration: 'Customized',
    format: 'Hybrid approach',
    frequency: 'Flexible schedule',
    ideal: 'Leadership teams',
    price: 'Custom'
  }
];

const curriculumModules = [
  {
    module: 'Module 1',
    title: 'Self-Awareness & Emotional Intelligence',
    topics: ['Leadership style assessment', 'Emotional intelligence development', 'Self-regulation techniques', 'Building authentic leadership']
  },
  {
    module: 'Module 2',
    title: 'Strategic Thinking & Decision Making',
    topics: ['Systems thinking', 'Data-driven decision frameworks', 'Risk assessment', 'Long-term strategic planning']
  },
  {
    module: 'Module 3',
    title: 'Communication & Influence',
    topics: ['Executive presence', 'Persuasive communication', 'Stakeholder management', 'Presentation mastery']
  },
  {
    module: 'Module 4',
    title: 'Team Leadership & Motivation',
    topics: ['Building high-performance teams', 'Motivation psychology', 'Delegation mastery', 'Accountability frameworks']
  },
  {
    module: 'Module 5',
    title: 'Change Management & Innovation',
    topics: ['Leading through change', 'Innovation culture', 'Agile leadership', 'Transformation strategies']
  },
  {
    module: 'Module 6',
    title: 'Performance Management & Coaching',
    topics: ['Coaching skills', 'Feedback techniques', 'Performance conversations', 'Talent development']
  }
];

const assessmentTools = [
  'Leadership Style Assessment',
  '360-Degree Feedback',
  'Emotional Intelligence Evaluation (EQ-i 2.0)',
  'Leadership Competency Matrix',
  'Strengths Finder Profile',
  'Communication Style Analysis'
];

const pricingPackages = [
  {
    name: 'Individual Coaching',
    duration: '6 months',
    price: '₹6,00,000',
    features: [
      '12 one-on-one coaching sessions',
      'Leadership assessment & 360 feedback',
      'Personalized development plan',
      'Goal setting & tracking',
      'Email support between sessions',
      'Progress reports'
    ],
    ideal: 'Executives & Senior Leaders',
    cta: 'Start Coaching'
  },
  {
    name: 'Group Leadership Program',
    duration: '3 months',
    price: '₹15,00,000',
    features: [
      'Up to 15 participants',
      '8 weekly group sessions (3 hours each)',
      'Individual assessments for all',
      'Peer learning & networking',
      'Digital learning resources',
      'Post-program support (30 days)',
      'Completion certificates'
    ],
    ideal: 'Leadership teams',
    popular: true,
    cta: 'Most Popular'
  },
  {
    name: 'Corporate Package',
    duration: '12 months',
    price: 'Custom',
    features: [
      'Customized curriculum',
      'Mix of coaching & workshops',
      'Succession planning support',
      'Leadership pipeline development',
      'Executive team alignment',
      'Quarterly leadership summits',
      'ROI measurement'
    ],
    ideal: 'Enterprise organizations',
    cta: 'Contact Us'
  }
];

const faqs = [
  {
    question: 'What\'s the difference between executive coaching and leadership training?',
    answer: 'Executive coaching is one-on-one, personalized development focused on individual goals, challenges, and growth. Leadership training is group-based education covering core leadership competencies. Both are valuable; coaching is more personalized while training builds foundational skills.'
  },
  {
    question: 'How do you measure leadership development success?',
    answer: 'We use multiple metrics: 360-degree feedback improvements, achievement of personal development goals, team performance indicators, employee engagement scores under the leader, and self-assessment progress. Most leaders show measurable improvement within 3-6 months.'
  },
  {
    question: 'Do participants get certified?',
    answer: 'Yes! Participants who complete our programs receive a Living With Logic Leadership Certificate. Our programs also qualify for continuing education credits for various professional certifications.'
  },
  {
    question: 'Can programs be customized for our industry?',
    answer: 'Absolutely! We customize all programs to your industry context, company culture, and specific leadership challenges. We incorporate your real business cases and situations into the curriculum.'
  },
  {
    question: 'What if someone can\'t attend a session?',
    answer: 'For coaching, we reschedule individual sessions. For group programs, we provide session recordings and materials. We work with your schedule to ensure maximum benefit.'
  }
];

export default function LeadershipDevelopmentPage() {
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
            alt="Leadership development and executive coaching"
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
              <Users size={20} className="mr-2" />
              LEADERSHIP DEVELOPMENT
            </motion.div>
            <motion.h1 
              className="heading-hero text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Build Leaders Who{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Inspire & Deliver
              </span>
            </motion.h1>
            <motion.p 
              className="body-large text-surface-200 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Develop exceptional leaders through evidence-based coaching, comprehensive training programs, and practical skill development that drives organizational success.
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
                  <span>Book Free Assessment</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-2xl font-bold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 focus-ring-inset"
                >
                  <span>Request Program Info</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Program Overview */}
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
                  Leadership Programs
                </span>
              </h2>
              <p className="body-large text-surface-600 max-w-4xl mx-auto">
                From individual executive coaching to group training programs, we offer flexible formats to develop leaders at every level of your organization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programFormats.map((program, index) => (
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
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-elevated transition-all duration-300 group-hover:scale-110">
                      <Users size={28} className="text-white" />
                    </div>
                    <h3 className="heading-card text-surface-900 mb-2">{program.title}</h3>
                    <div className="text-2xl font-black text-primary-600 mb-4">{program.price}</div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-surface-500">Duration:</span>
                      <span className="font-semibold text-surface-900">{program.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-surface-500">Format:</span>
                      <span className="font-semibold text-surface-900">{program.format}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-surface-500">Frequency:</span>
                      <span className="font-semibold text-surface-900">{program.frequency}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-surface-200">
                    <div className="text-xs text-surface-500 mb-2">IDEAL FOR:</div>
                    <div className="text-sm font-bold text-surface-900">{program.ideal}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Curriculum Modules */}
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
                <Brain size={20} className="mr-2" />
                CURRICULUM
              </div>
              <h2 className="heading-section text-white mb-8">
                Comprehensive{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Leadership Curriculum
                </span>
              </h2>
              <p className="body-large text-surface-300 max-w-4xl mx-auto">
                Six core modules covering every essential aspect of modern leadership, from self-awareness to performance management.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {curriculumModules.map((module, index) => (
                <motion.div 
                  key={index}
                  className="card-glass p-8 hover:bg-white/15 transition-all duration-500 group border-surface-700/50 hover:border-accent-400/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="mb-6">
                    <div className="text-accent-300 font-bold text-sm mb-2">{module.module}</div>
                    <h3 className="heading-card text-white group-hover:text-accent-300 transition-colors">
                      {module.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {module.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start text-surface-200 group-hover:text-white transition-colors">
                        <div className="w-2 h-2 bg-accent-400 rounded-full mr-3 flex-shrink-0 mt-2 group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Assessment Tools */}
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
                <Target size={20} className="mr-2" />
                ASSESSMENT TOOLS
              </div>
              <h2 className="heading-section text-surface-900 mb-8">
                Data-Driven{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Leadership Assessment
                </span>
              </h2>
              <p className="body-large text-surface-600 max-w-4xl mx-auto">
                We use scientifically validated assessment tools to identify strengths, development areas, and create personalized growth plans.
              </p>
            </motion.div>

            <motion.div 
              className="card-elevated p-10 bg-gradient-to-br from-white to-surface-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {assessmentTools.map((tool, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={24} className="text-white" />
                    </div>
                    <span className="font-bold text-surface-900">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pricing */}
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
                  Program Packages
                </span>
              </h2>
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
                    <div className="text-sm text-surface-400">Total investment</div>
                  </div>

                  <div className="mb-8">
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
                SUCCESS STORY
              </div>
              <h2 className="heading-section text-surface-900 mb-8">
                Leadership{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Transformation
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
                <h3 className="text-3xl font-bold text-surface-900 mb-4">From Technical Expert to Inspiring Leader</h3>
                <p className="text-surface-600 text-lg">Priya Patel, Director at Healthcare Solutions, Bangalore</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-surface-900 mb-4 text-lg">The Challenge</h4>
                  <p className="text-surface-600 mb-4">
                    Priya was a brilliant healthcare operations expert but struggled with leadership presence and team motivation. 
                    Her team was underperforming despite her technical excellence.
                  </p>
                  <h4 className="font-bold text-surface-900 mb-4 text-lg">The Program</h4>
                  <p className="text-surface-600">
                    12-month executive coaching program focusing on emotional intelligence, communication skills, and strategic leadership. 
                    Included 360-degree feedback and peer coaching.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-surface-900 mb-6 text-lg">The Results</h4>
                  <div className="space-y-4">
                    {[
                      { metric: 'VP', label: 'Promoted within 8 Months' },
                      { metric: '78%', label: 'Team Engagement Increase' },
                      { metric: '4.8/5', label: 'Leadership Effectiveness Score' },
                      { metric: '3x', label: 'Team Productivity Growth' }
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
                      <span className="text-2xl font-bold text-white">PP</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg text-surface-800 italic mb-3">
                      &quot;This coaching program transformed not just my leadership style, but my entire approach to work and life. 
                      I learned to lead with empathy while maintaining accountability. My team is more engaged, productive, and 
                      happy. The promotion to VP was just the cherry on top!&quot;
                    </p>
                    <div>
                      <div className="font-bold text-surface-900">Priya Patel</div>
                      <div className="text-surface-600 text-sm">Vice President of Operations, Healthcare Solutions, Bangalore</div>
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
                Common{' '}
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
              Start Your Leadership Journey Today
            </motion.h2>
            <motion.p 
              className="body-large text-white/90 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Take the first step with a complimentary leadership assessment. Discover your strengths, identify growth areas, and explore how our programs can accelerate your leadership development.
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
                  <span>Book Free Assessment</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50 focus-ring-inset"
                >
                  <Download size={20} />
                  <span>Download Program Guide</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}


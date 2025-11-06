'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Lightbulb, ArrowRight, CheckCircle2, Calendar, 
  Target, Users, Award, Clock, DollarSign,
  Star, Download, MessageCircle
} from 'lucide-react';

const popularWorkshops = [
  {
    title: 'High-Performance Teams',
    duration: '2 days',
    participants: '10-25',
    price: '₹2,80,000',
    description: 'Transform team dynamics and build high-performing, collaborative units.',
    topics: [
      'Team dynamics & psychology',
      'Collaboration frameworks',
      'Accountability systems',
      'Conflict to synergy'
    ],
    outcomes: [
      '40% productivity increase',
      '60% improvement in collaboration',
      'Clear team charter & norms'
    ]
  },
  {
    title: 'Innovation & Design Thinking',
    duration: '1 day',
    participants: '8-20',
    price: '₹1,80,000',
    description: 'Unlock creative problem-solving and innovation capabilities in your team.',
    topics: [
      'Creative ideation techniques',
      'Design thinking process',
      'Rapid prototyping',
      'Innovation frameworks'
    ],
    outcomes: [
      '3x more innovative ideas',
      'Faster problem-solving',
      'Innovation mindset shift'
    ]
  },
  {
    title: 'Effective Communication Mastery',
    duration: '1 day',
    participants: '12-30',
    price: '₹2,20,000',
    description: 'Master communication skills that drive clarity, influence, and results.',
    topics: [
      'Active listening techniques',
      'Feedback frameworks',
      'Presentation skills',
      'Difficult conversations'
    ],
    outcomes: [
      '50% fewer misunderstandings',
      'Improved presentation skills',
      'Enhanced team clarity'
    ]
  },
  {
    title: 'Conflict to Collaboration',
    duration: '1 day',
    participants: '10-20',
    price: '₹1,95,000',
    description: 'Transform workplace conflicts into opportunities for growth and collaboration.',
    topics: [
      'Conflict resolution models',
      'Negotiation skills',
      'Trust building',
      'Mediation techniques'
    ],
    outcomes: [
      '70% reduction in conflicts',
      'Stronger team relationships',
      'Collaborative culture'
    ]
  },
  {
    title: 'Agile Team Collaboration',
    duration: '1.5 days',
    participants: '10-25',
    price: '₹2,40,000',
    description: 'Build agile, adaptive teams that thrive in fast-paced environments.',
    topics: [
      'Agile principles & mindset',
      'Sprint planning & execution',
      'Retrospectives & learning',
      'Continuous improvement'
    ],
    outcomes: [
      '30% faster delivery',
      'Agile team mindset',
      'Better adaptability'
    ]
  },
  {
    title: 'Remote Team Excellence',
    duration: '1 day',
    participants: '12-30',
    price: '₹2,10,000',
    description: 'Master remote collaboration and virtual team management.',
    topics: [
      'Virtual communication tools',
      'Async collaboration',
      'Remote culture building',
      'Digital productivity'
    ],
    outcomes: [
      'Seamless remote work',
      'Higher engagement',
      'Effective virtual meetings'
    ]
  }
];

const workshopFormats = [
  {
    format: 'On-Site',
    icon: Users,
    description: 'We come to your office for maximum convenience and team comfort',
    benefits: ['Familiar environment', 'No travel for team', 'Custom setup']
  },
  {
    format: 'Off-Site',
    icon: Target,
    description: 'Dedicated training facility for focused learning without distractions',
    benefits: ['Change of scenery', 'Professional venue', 'Full immersion']
  },
  {
    format: 'Hybrid',
    icon: Target,
    description: 'Combination of in-person and virtual sessions for flexibility',
    benefits: ['Maximum flexibility', 'Cost effective', 'Extended learning']
  },
  {
    format: 'Fully Virtual',
    icon: MessageCircle,
    description: 'Interactive online workshops with breakout rooms and digital tools',
    benefits: ['Remote teams', 'Lower cost', 'Easy scheduling']
  }
];

const included = [
  'Pre-workshop assessments & customization',
  'All participant workbooks & materials',
  'Digital resource library access',
  'Interactive exercises & simulations',
  'Video recordings (for virtual)',
  'Implementation tools & templates',
  'Post-workshop action plans',
  '30-day email support'
];

const faqs = [
  {
    question: 'How do you customize workshops for our company?',
    answer: 'We conduct pre-workshop interviews to understand your industry, culture, challenges, and goals. We then customize all exercises, case studies, and examples to be relevant to your specific context. Every workshop is tailored, never off-the-shelf.'
  },
  {
    question: 'What\'s the ideal team size for workshops?',
    answer: 'Most workshops work best with 10-25 participants. Smaller groups (8-12) allow for deeper interaction, while larger groups (20-30) are cost-effective for communication or awareness training. We can accommodate larger groups with multiple facilitators.'
  },
  {
    question: 'Do you offer follow-up sessions?',
    answer: 'Yes! We recommend 30-day and 90-day follow-up sessions to reinforce learning and address implementation challenges. These can be shorter (2-3 hour) refresher sessions. All workshops include 30 days of email support.'
  },
  {
    question: 'Can we combine multiple workshop topics?',
    answer: 'Absolutely! We often create multi-day programs combining topics. For example, a 3-day program might include High-Performance Teams (Day 1-2) + Communication (Day 3). We offer 10-15% discounts for multi-workshop packages.'
  },
  {
    question: 'How interactive are the workshops?',
    answer: 'Very interactive! Our philosophy is 40% exercises, 30% discussion, 20% frameworks, and 10% planning. Participants are actively engaged throughout with hands-on activities, group work, role-plays, and real-world application.'
  }
];

export default function TeamWorkshopsPage() {
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
            alt="Team workshops and collaboration training"
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
              <Lightbulb size={20} className="mr-2" />
              TEAM WORKSHOPS
            </motion.div>
            <motion.h1 
              className="heading-hero text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Transform Team Dynamics,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Drive Results
              </span>
            </motion.h1>
            <motion.p 
              className="body-large text-surface-200 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Interactive, high-energy workshops that build collaboration, enhance communication, and create lasting behavioral change for immediate impact.
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
                  <span>Schedule Workshop</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-2xl font-bold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 focus-ring-inset"
                >
                  <span>Request Catalog</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Popular Workshops */}
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
                Our Most Popular{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  Team Workshops
                </span>
              </h2>
              <p className="body-large text-surface-600 max-w-4xl mx-auto">
                Proven workshops that have transformed thousands of teams across India. Each can be customized to your specific needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularWorkshops.map((workshop, index) => (
                <motion.div 
                  key={index}
                  className="card-elevated p-8 hover:shadow-elevated transition-all duration-500 group h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center mb-4 shadow-soft group-hover:shadow-elevated transition-all duration-300 group-hover:scale-110">
                      <Lightbulb size={28} className="text-white" />
                    </div>
                    <h3 className="heading-card text-surface-900 mb-3">{workshop.title}</h3>
                    <p className="text-surface-600 text-sm mb-4">{workshop.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-surface-500 mb-4">
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{workshop.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users size={14} className="mr-1" />
                        <span>{workshop.participants}</span>
                      </div>
                    </div>
                    
                    <div className="text-3xl font-black text-primary-600 mb-6">{workshop.price}</div>
                  </div>

                  <div className="mb-6 flex-grow">
                    <div className="text-sm font-bold text-surface-900 mb-3">TOPICS COVERED:</div>
                    <ul className="space-y-2">
                      {workshop.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start text-surface-700">
                          <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 flex-shrink-0 mt-1.5"></div>
                          <span className="text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-surface-200 pt-6 mb-6">
                    <div className="text-sm font-bold text-surface-900 mb-3">EXPECTED OUTCOMES:</div>
                    <ul className="space-y-2">
                      {workshop.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start text-surface-700">
                          <CheckCircle2 size={14} className="text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Link 
                      href="/booking"
                      className="block text-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 font-bold shadow-soft hover:shadow-elevated"
                    >
                      Schedule This Workshop
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Workshop Formats */}
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
                FLEXIBLE DELIVERY
              </div>
              <h2 className="heading-section text-white mb-8">
                Multiple{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Workshop Formats
                </span>
              </h2>
              <p className="body-large text-surface-300 max-w-4xl mx-auto">
                Choose the delivery format that works best for your team, budget, and schedule.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workshopFormats.map((format, index) => (
                <motion.div 
                  key={index}
                  className="card-glass p-8 hover:bg-white/15 transition-all duration-500 group border-surface-700/50 hover:border-accent-400/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-soft group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    {React.createElement(format.icon, { size: 28, className: "text-white" })}
                  </div>
                  <h3 className="heading-card text-white text-center mb-4 group-hover:text-accent-300 transition-colors">
                    {format.format}
                  </h3>
                  <p className="body-regular text-surface-300 text-center mb-6 group-hover:text-white transition-colors">
                    {format.description}
                  </p>
                  <ul className="space-y-2">
                    {format.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-surface-200 group-hover:text-white transition-colors justify-center">
                        <CheckCircle2 size={14} className="text-secondary-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* What's Included */}
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
                WHAT&apos;S INCLUDED
              </div>
              <h2 className="heading-section text-surface-900 mb-8">
                Everything You Need for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Workshop Success
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
                {included.map((item, index) => (
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

      {/* Group Packages */}
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
                <DollarSign size={20} className="mr-2" />
                SPECIAL OFFERS
              </div>
              <h2 className="heading-section text-surface-900 mb-8">
                Multi-Workshop{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  Package Discounts
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
              {[
                { workshops: '3 Workshops', discount: '10%', savings: '₹30,000+' },
                { workshops: '5 Workshops', discount: '15%', savings: '₹75,000+', popular: true },
                { workshops: 'Annual Program', discount: '20%', savings: '₹1,50,000+' }
              ].map((pkg, index) => (
                <motion.div 
                  key={index}
                  className={`card-elevated p-8 text-center relative ${
                    pkg.popular ? 'border-2 border-accent-500' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10 whitespace-nowrap">
                      <span className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-accent-500 to-secondary-500 text-white font-bold rounded-full text-xs shadow-glow uppercase tracking-wide">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-4xl font-black text-primary-600 mb-2">{pkg.discount}</div>
                  <div className="text-lg font-bold text-surface-900 mb-4">{pkg.workshops}</div>
                  <div className="text-surface-600">Save {pkg.savings}</div>
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
              <p className="text-surface-600 mb-6">Build a custom training program with multiple workshops throughout the year</p>
              <Link 
                href="/booking"
                className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors"
              >
                Discuss Custom Package
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
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
        <div className="absolute inset-0 bg-gradient-to-br from-surface-900 via-primary-900 to-surface-900"></div>
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
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-accent-300 font-bold rounded-2xl shadow-glow border border-accent-400/30 mb-8">
                <Star size={20} className="mr-2" />
                CLIENT SUCCESS
              </div>
              <h2 className="heading-section text-white mb-8">
                Workshop{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Impact Story
                </span>
              </h2>
            </motion.div>

            <motion.div 
              className="card-glass p-12 bg-gradient-to-br from-white/10 to-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">RetailHub India</h3>
                  <p className="text-surface-300 mb-4">
                    80 employees | Retail/E-commerce | Delhi NCR
                  </p>
                  <h4 className="font-bold text-accent-300 mb-3 text-lg">The Challenge</h4>
                  <p className="text-surface-200 mb-4">
                    Team was resistant to digital transformation. Silos between departments created friction and slowed progress.
                  </p>
                  <h4 className="font-bold text-accent-300 mb-3 text-lg">The Solution</h4>
                  <p className="text-surface-200">
                    3-workshop series: High-Performance Teams, Communication Mastery, and Conflict to Collaboration. 
                    Conducted over 3 months with follow-up sessions.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-6 text-lg">The Results</h4>
                  <div className="space-y-4">
                    {[
                      { metric: '40%', label: 'Team Productivity Increase' },
                      { metric: '3x', label: 'Customer Base Expansion' },
                      { metric: '65%', label: 'Online Sales Growth' },
                      { metric: '92%', label: 'Employee Satisfaction' }
                    ].map((result, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/20">
                        <span className="text-surface-200 font-medium">{result.label}</span>
                        <span className="text-3xl font-black text-accent-300">{result.metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-white/20 pt-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-secondary-400 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">AK</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg text-white italic mb-3">
                      &quot;The workshops were a game-changer. Our team went from resisting change to embracing it. The facilitators 
                      understood our retail context and made every exercise relevant. Within weeks, we saw behavioral changes. 
                      Within months, we successfully transitioned to omnichannel retail. The ROI was easily 10x the investment.&quot;
                    </p>
                    <div>
                      <div className="font-bold text-white">Amit Kumar</div>
                      <div className="text-surface-300 text-sm">Founder & Managing Director, RetailHub India, Delhi</div>
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
                Workshop{' '}
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
              Ready to Transform Your Team?
            </motion.h2>
            <motion.p 
              className="body-large text-white/90 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Let&apos;s discuss which workshop would deliver the most impact for your team. Free consultation to understand 
              your challenges and recommend the right program.
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
                  <span>Schedule Consultation</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50 focus-ring-inset"
                >
                  <Download size={20} />
                  <span>Download Workshop Catalog</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}


'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Users, ArrowRight, Award, 
  BookOpen, Target, Brain, Calendar, CheckCircle2
} from 'lucide-react';

const leadership = [
  {
    name: 'Dr. Arjun Mehta',
    title: 'Founder & Chief Strategy Officer',
    avatar: 'AM',
    credentials: [
      'PhD in Organizational Psychology, IIM Bangalore',
      'MBA, Harvard Business School',
      '20+ years consulting experience',
      'Former McKinsey Partner'
    ],
    expertise: ['Strategic Planning', 'Organizational Design', 'Change Management'],
    industries: ['Technology', 'Healthcare', 'Manufacturing'],
    bio: 'Arjun founded Living With Logic with a vision to bring logical frameworks and emotional intelligence together in business consulting. His approach combines data-driven insights with deep human understanding. He has advised 100+ companies across India and globally, helping them navigate complex transformations. When not consulting, Arjun teaches strategic management at IIM Bangalore and mentors startup founders.',
    companies: '100+',
    publications: 'Author of "Logic Meets Leadership" (2020)'
  },
  {
    name: 'Kavita Singh',
    title: 'Director, Leadership Development',
    avatar: 'KS',
    credentials: [
      'MSc in Leadership Psychology, University of Oxford',
      'Executive Coach Certification, ICF',
      '15+ years leadership development experience',
      'Certified in MBTI, DiSC, EQ-i 2.0'
    ],
    expertise: ['Executive Coaching', 'Leadership Training', 'Succession Planning'],
    industries: ['Financial Services', 'Professional Services', 'Retail'],
    bio: 'Kavita is passionate about unlocking leadership potential in individuals and teams. She has coached over 200 executives and designed leadership programs for Fortune 500 companies. Her coaching style blends accountability with compassion, helping leaders achieve breakthrough results while maintaining work-life balance.',
    companies: '200+',
    publications: 'Regular contributor to Harvard Business Review India'
  },
  {
    name: 'Vikram Desai',
    title: 'Senior Partner, Organizational Transformation',
    avatar: 'VD',
    credentials: [
      'MBA, IIM Ahmedabad',
      'Lean Six Sigma Master Black Belt',
      'PMP Certified',
      '18+ years operational excellence experience'
    ],
    expertise: ['Process Optimization', 'Digital Transformation', 'Culture Change'],
    industries: ['Manufacturing', 'Healthcare', 'E-commerce'],
    bio: 'Vikram specializes in large-scale organizational transformations. His systematic approach has helped dozens of companies modernize operations and build agile cultures. He believes transformation is 20% strategy and 80% people, focusing heavily on change management and capability building.',
    companies: '50+',
    publications: 'Speaker at CII and NASSCOM events'
  }
];

const partners = [
  {
    name: 'Dr. Sneha Reddy',
    title: 'Partner, Strategy & Innovation',
    avatar: 'SR',
    credentials: [
      'PhD in Business Strategy, ISB Hyderabad',
      'MBA, XLRI Jamshedpur',
      'Former Bain & Company Consultant',
      'Design Thinking Certified, Stanford d.school'
    ],
    expertise: ['Business Strategy', 'Innovation', 'Market Entry'],
    industries: ['Technology', 'Education', 'Consumer Goods'],
    bio: 'Sneha brings analytical rigor and creative thinking to strategy consulting. She helps companies identify growth opportunities and build competitive advantages. Her work has contributed to ₹500+ crores in new revenue for clients. She\'s particularly passionate about helping Indian companies compete globally.',
    focus: 'Growth Strategy'
  },
  {
    name: 'Rohit Kapoor',
    title: 'Senior Consultant, Team Development',
    avatar: 'RK',
    credentials: [
      'MBA in Organizational Behavior, FMS Delhi',
      'Certified Facilitator, AchieveGlobal',
      '12+ years team development experience',
      'Expert in Gamification & Experiential Learning'
    ],
    expertise: ['Team Workshops', 'Communication Training', 'Conflict Resolution'],
    industries: ['All Industries'],
    bio: 'Rohit designs and delivers high-energy workshops that create lasting behavioral change. His sessions are known for being engaging, practical, and fun. Over 5,000 professionals have attended his workshops, consistently rating them 4.8/5 or higher.',
    focus: 'Team Excellence'
  },
  {
    name: 'Meera Nair',
    title: 'Partner, People & Culture',
    avatar: 'MN',
    credentials: [
      'MA in Industrial & Organizational Psychology, TISS Mumbai',
      'SHRM-SCP Certified',
      '16+ years HR transformation experience',
      'Diversity & Inclusion Specialist'
    ],
    expertise: ['Culture Change', 'Talent Management', 'HR Systems'],
    industries: ['Technology', 'Financial Services', 'Healthcare'],
    bio: 'Meera helps organizations build people-first cultures that drive business results. She\'s led HR transformations for companies scaling from 50 to 500+ employees. Her approach balances structure with flexibility, ensuring systems support both business needs and employee wellbeing.',
    focus: 'Culture Transformation'
  }
];

const values = [
  {
    icon: Target,
    title: 'Client-First Mindset',
    description: 'Every decision we make prioritizes client success and long-term value creation.'
  },
  {
    icon: Brain,
    title: 'Data-Driven Decisions',
    description: 'We rely on evidence, analysis, and logical frameworks rather than assumptions.'
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'We invest in ongoing education to stay at the forefront of consulting best practices.'
  },
  {
    icon: Users,
    title: 'Collaborative Approach',
    description: 'We partner with clients, working alongside them rather than prescribing from above.'
  },
  {
    icon: CheckCircle2,
    title: 'Results Orientation',
    description: 'We measure success by client outcomes, not just deliverables or billable hours.'
  },
  {
    icon: Award,
    title: 'Integrity Always',
    description: 'We maintain the highest ethical standards and transparency in all our work.'
  }
];

export default function OurTeamPage() {
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
            alt="Our expert consulting team"
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
              <Users size={20} className="mr-2" />
              OUR TEAM
            </motion.div>
            <motion.h1 
              className="heading-hero text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Meet Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Expert Consultants
              </span>
            </motion.h1>
            <motion.p 
              className="body-large text-surface-200 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              World-class expertise combined with deep empathy. Our team brings decades of experience helping 
              Indian businesses transform and thrive.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Team Philosophy */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-surface-100 to-surface-50"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="heading-section text-surface-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                Approach
              </span>
            </motion.h2>
            <motion.p 
              className="body-large text-surface-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              We believe great consulting combines strategic thinking with practical execution. Our team doesn&apos;t 
              just deliver reports we partner with you to implement change and achieve results. Every consultant 
              on our team brings deep expertise, proven methodologies, and a genuine commitment to your success.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { metric: '100+', label: 'Combined Years Experience' },
                { metric: '500+', label: 'Companies Advised' },
                { metric: '50+', label: 'Certifications' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl font-black text-primary-600 mb-2">{stat.metric}</div>
                  <div className="text-surface-600 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Leadership Team */}
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
                <Award size={20} className="mr-2" />
                LEADERSHIP TEAM
              </div>
              <h2 className="heading-section text-white mb-8">
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Founding Partners
                </span>
              </h2>
            </motion.div>

            <div className="space-y-12">
              {leadership.map((member, index) => (
                <motion.div 
                  key={index}
                  className="card-glass p-10 hover:bg-white/15 transition-all duration-500 border-surface-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left: Avatar & Basic Info */}
                    <div className="text-center lg:text-left">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-soft">
                        <span className="text-5xl font-bold text-white">{member.avatar}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-accent-300 font-semibold mb-6">{member.title}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="text-surface-300 text-sm">
                          <span className="font-bold text-white">{member.companies}</span> Companies Advised
                        </div>
                        <div className="text-surface-300 text-sm">{member.publications}</div>
                      </div>
                    </div>

                    {/* Middle: Credentials & Expertise */}
                    <div>
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-accent-300 mb-4">CREDENTIALS</h4>
                        <ul className="space-y-2">
                          {member.credentials.map((cred, idx) => (
                            <li key={idx} className="flex items-start text-surface-200">
                              <CheckCircle2 size={14} className="text-secondary-400 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{cred}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-accent-300 mb-4">EXPERTISE</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((exp, idx) => (
                            <span key={idx} className="px-3 py-1 bg-primary-900/50 text-primary-300 text-xs font-semibold rounded-full border border-primary-700/50">
                              {exp}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-accent-300 mb-4">INDUSTRIES</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.industries.map((ind, idx) => (
                            <span key={idx} className="px-3 py-1 bg-secondary-900/50 text-secondary-300 text-xs font-semibold rounded-full border border-secondary-700/50">
                              {ind}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Bio */}
                    <div>
                      <h4 className="text-sm font-bold text-accent-300 mb-4">ABOUT</h4>
                      <p className="text-surface-300 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Partners & Consultants */}
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
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-section text-surface-900 mb-8">
                Senior{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  Consultants
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((member, index) => (
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
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-elevated transition-all duration-300">
                      <span className="text-3xl font-bold text-white">{member.avatar}</span>
                    </div>
                    <h3 className="text-xl font-bold text-surface-900 mb-2">{member.name}</h3>
                    <p className="text-primary-600 font-semibold text-sm mb-4">{member.title}</p>
                    <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 font-bold text-xs rounded-full">
                      {member.focus}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-surface-500 mb-3">CREDENTIALS</h4>
                    <ul className="space-y-2">
                      {member.credentials.map((cred, idx) => (
                        <li key={idx} className="flex items-start text-surface-700">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></div>
                          <span className="text-xs leading-relaxed">{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-surface-500 mb-3">EXPERTISE</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((exp, idx) => (
                        <span key={idx} className="px-2 py-1 bg-surface-100 text-surface-700 text-xs font-semibold rounded">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-surface-600 text-sm leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Values */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-accent-900 to-secondary-900"></div>
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
                <Award size={20} className="mr-2" />
                OUR VALUES
              </div>
              <h2 className="heading-section text-white mb-8">
                What{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Drives Us
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  className="card-glass p-8 hover:bg-white/15 transition-all duration-500 group border-surface-700/50 hover:border-accent-400/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    {React.createElement(value.icon, { size: 28, className: "text-white" })}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-surface-300 group-hover:text-white transition-colors">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
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
              Work With Our Expert Team
            </motion.h2>
            <motion.p 
              className="body-large text-surface-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Experience the difference that expert guidance, proven methodologies, and genuine partnership can make. 
              Book a consultation to meet the team that will transform your business.
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
                  <span>Book Consultation</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/services"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-2xl hover:bg-surface-50 transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring border border-primary-200"
                >
                  <span>View Our Services</span>
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


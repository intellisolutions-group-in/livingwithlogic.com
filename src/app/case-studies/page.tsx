'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Award, ArrowRight, TrendingUp, Users, Target,
  Building, Calendar, DollarSign, Star,
  Filter, Zap
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    company: 'TechVista Solutions Pvt Ltd',
    industry: 'Technology/SaaS',
    location: 'Mumbai, Maharashtra',
    employees: 150,
    service: 'Strategic Consulting',
    duration: '9 months',
    investment: '₹18,00,000',
    challenge: 'Unclear product strategy, team silos, fragmented messaging, slow growth despite good product',
    solution: 'Conducted comprehensive market analysis, competitor research, and stakeholder interviews. Created 3-year strategic roadmap with clear positioning, go-to-market strategy, and organizational alignment framework.',
    results: [
      { metric: '45%', label: 'Revenue Growth in 18 Months' },
      { metric: '92%', label: 'Leadership Team Alignment' },
      { metric: '32%', label: 'Employee Satisfaction Increase' },
      { metric: '3x', label: 'Market Share Growth' }
    ],
    testimonial: {
      quote: 'Living With Logic transformed how we think about strategy. Their data-driven approach helped us find clarity in chaos, and the roadmap they created became our north star. Nine months later, we\'re exceeding our goals and the entire team is aligned.',
      author: 'Rajesh Sharma',
      title: 'CEO & Founder',
      avatar: 'RS'
    },
    tags: ['Strategy', 'Growth', 'Alignment']
  },
  {
    id: 2,
    company: 'Healthcare Plus India',
    industry: 'Healthcare Services',
    location: 'Bangalore, Karnataka',
    employees: 300,
    service: 'Organizational Transformation',
    duration: '12 months',
    investment: '₹35,00,000',
    challenge: 'Rapid expansion threatening quality standards, inconsistent processes across locations, staff retention issues',
    solution: 'Implemented comprehensive transformation: standardized processes, quality management system, leadership development program, and performance management redesign across all 40 new locations.',
    results: [
      { metric: '40', label: 'New Locations Opened Successfully' },
      { metric: '4.8/5', label: 'Patient Satisfaction Score' },
      { metric: '55%', label: 'Staff Retention Improvement' },
      { metric: '22%', label: 'Operational Cost Reduction' }
    ],
    testimonial: {
      quote: 'I was skeptical about consultants, but Living With Logic exceeded all expectations. We scaled from 15 to 55 locations while actually improving patient satisfaction scores. They understood healthcare nuances and created systems that work in the real world.',
      author: 'Dr. Priya Menon',
      title: 'Founder & Medical Director',
      avatar: 'PM'
    },
    tags: ['Transformation', 'Healthcare', 'Scaling']
  },
  {
    id: 3,
    company: 'RetailHub India',
    industry: 'Retail/E-commerce',
    location: 'Delhi NCR',
    employees: 80,
    service: 'Team Workshops',
    duration: '6 months',
    investment: '₹12,00,000',
    challenge: 'Team resistance to digital transformation, departmental silos, slow adaptation to e-commerce shift',
    solution: '3-workshop series: High-Performance Teams, Communication Mastery, and Conflict to Collaboration. Conducted over 3 months with follow-up sessions and hands-on implementation support.',
    results: [
      { metric: '65%', label: 'Online Sales as % of Revenue' },
      { metric: '40%', label: 'Team Productivity Increase' },
      { metric: '3x', label: 'Customer Base Expansion' },
      { metric: '92%', label: 'Employee Satisfaction' }
    ],
    testimonial: {
      quote: 'The workshops were a game-changer. Our team went from resisting change to embracing it. The facilitators understood our retail context and made every exercise relevant. The ROI was easily 10x the investment.',
      author: 'Amit Kumar',
      title: 'Founder & Managing Director',
      avatar: 'AK'
    },
    tags: ['Workshops', 'Change Management', 'Digital']
  },
  {
    id: 4,
    company: 'Manufacturing Excellence Pvt Ltd',
    industry: 'Manufacturing',
    location: 'Pune, Maharashtra',
    employees: 500,
    service: 'Organizational Transformation',
    duration: '18 months',
    investment: '₹48,00,000',
    challenge: 'Outdated processes, high waste (38%), low employee morale, 28% annual turnover, declining global competitiveness',
    solution: 'Comprehensive 18-month transformation: process reengineering using Lean Six Sigma, culture transformation program, leadership development for 25 managers, and performance management system redesign.',
    results: [
      { metric: '50%', label: 'Cycle Time Reduction' },
      { metric: '38%', label: 'Waste Reduction' },
      { metric: '65%', label: 'Employee Engagement Increase' },
      { metric: '9%', label: 'Turnover (from 28%)' },
      { metric: '28%', label: 'Profit Margin Growth' },
      { metric: '40%', label: 'Revenue per Employee' }
    ],
    testimonial: {
      quote: 'A complete turnaround in every sense. Living With Logic didn\'t just fix our processes they transformed our culture and mindset. This transformation saved our company and made us globally competitive.',
      author: 'Vikram Malhotra',
      title: 'Chief Operating Officer',
      avatar: 'VM'
    },
    tags: ['Manufacturing', 'Lean', 'Culture']
  },
  {
    id: 5,
    company: 'FinServe Solutions',
    industry: 'Financial Services',
    location: 'Hyderabad, Telangana',
    employees: 200,
    service: 'Leadership Development',
    duration: '12 months',
    investment: '₹22,00,000',
    challenge: 'Leadership gaps at multiple levels, compliance violations, inconsistent client service, manager effectiveness issues',
    solution: '12-month leadership development program: executive coaching for 5 senior leaders, group training for 15 mid-level managers, 360-degree feedback, and succession planning framework.',
    results: [
      { metric: '15', label: 'Leaders Trained & Certified' },
      { metric: '0', label: 'Compliance Violations' },
      { metric: '94%', label: 'Client Retention Rate' },
      { metric: '58%', label: 'Manager Effectiveness Increase' }
    ],
    testimonial: {
      quote: 'Our leaders are now driving the business forward instead of just managing day-to-day. The program transformed our leadership culture and we\'ve seen measurable impact on client satisfaction and compliance.',
      author: 'Deepika Reddy',
      title: 'Vice President of Operations',
      avatar: 'DR'
    },
    tags: ['Leadership', 'Finance', 'Compliance']
  },
  {
    id: 6,
    company: 'EduTech Innovators',
    industry: 'Education Technology',
    location: 'Chennai, Tamil Nadu',
    employees: 120,
    service: 'Strategic Consulting',
    duration: '8 months',
    investment: '₹16,00,000',
    challenge: 'Product-market misalignment, need for major pivot, unclear target market, team uncertainty about direction',
    solution: 'Comprehensive market research and strategy work: customer discovery interviews, competitive analysis, business model redesign, and product-market fit validation. Created new go-to-market strategy and product roadmap.',
    results: [
      { metric: '2.5x', label: 'Revenue Growth in 12 Months' },
      { metric: '90%', label: 'Team Alignment Score' },
      { metric: '180%', label: 'New Customer Acquisition Growth' },
      { metric: '4.7/5', label: 'Product-Market Fit Score' }
    ],
    testimonial: {
      quote: 'They helped us find clarity in chaos. We were building the wrong product for the wrong market. Their strategic work helped us pivot successfully and we\'re now on a strong growth trajectory.',
      author: 'Kavita Singh',
      title: 'Co-founder & CEO',
      avatar: 'KS'
    },
    tags: ['Strategy', 'Pivot', 'EdTech']
  }
];

const industries = ['All Industries', 'Technology/SaaS', 'Healthcare Services', 'Manufacturing', 'Financial Services', 'Retail/E-commerce', 'Education Technology'];
const services = ['All Services', 'Strategic Consulting', 'Leadership Development', 'Team Workshops', 'Organizational Transformation'];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedService, setSelectedService] = useState('All Services');

  const filteredCaseStudies = caseStudies.filter(cs => {
    const industryMatch = selectedIndustry === 'All Industries' || cs.industry === selectedIndustry;
    const serviceMatch = selectedService === 'All Services' || cs.service === selectedService;
    return industryMatch && serviceMatch;
  });

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
            alt="Client success stories and case studies"
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
              <Award size={20} className="mr-2" />
              CLIENT SUCCESS STORIES
            </motion.div>
            <motion.h1 
              className="heading-hero text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Real Transformations,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Measurable Results
              </span>
            </motion.h1>
            <motion.p 
              className="body-large text-surface-200 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Discover how we&apos;ve helped companies across India achieve breakthrough results through strategic thinking, 
              leadership development, and organizational transformation.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Results Dashboard */}
      <motion.section 
        className="relative py-16 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent-600 to-secondary-600"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { metric: '200+', label: 'Companies Served' },
                { metric: '₹500+ Cr', label: 'Combined Revenue Impact' },
                { metric: '8:1', label: 'Average ROI' },
                { metric: '99%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl lg:text-5xl font-black text-white mb-2">{stat.metric}</div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Filters */}
      <motion.section 
        className="relative py-12 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-surface-100 to-surface-50"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center text-surface-600">
                <Filter size={20} className="mr-2" />
                <span className="font-semibold">Filter by:</span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div>
                  <select 
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="px-4 py-2 bg-white border border-surface-300 rounded-xl font-medium text-surface-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <select 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="px-4 py-2 bg-white border border-surface-300 rounded-xl font-medium text-surface-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center text-surface-600">
              Showing <span className="font-bold text-primary-600">{filteredCaseStudies.length}</span> case {filteredCaseStudies.length === 1 ? 'study' : 'studies'}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Case Studies Grid */}
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
              {filteredCaseStudies.map((caseStudy, index) => (
                <motion.div 
                  key={caseStudy.id}
                  className="card-elevated p-10 lg:p-12 hover:shadow-elevated transition-all duration-500 bg-gradient-to-br from-white to-surface-50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      {caseStudy.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 bg-primary-100 text-primary-700 font-bold text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-surface-900 mb-4">{caseStudy.company}</h2>
                    <div className="flex flex-wrap items-center gap-6 text-surface-600">
                      <div className="flex items-center">
                        <Building size={16} className="mr-2" />
                        <span className="text-sm">{caseStudy.industry}</span>
                      </div>
                      <div className="flex items-center">
                        <Target size={16} className="mr-2" />
                        <span className="text-sm">{caseStudy.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-2" />
                        <span className="text-sm">{caseStudy.employees} Employees</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{caseStudy.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign size={16} className="mr-2" />
                        <span className="text-sm">{caseStudy.investment}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center mr-3">
                            <Zap size={16} className="text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-surface-900">The Challenge</h3>
                        </div>
                        <p className="text-surface-700 leading-relaxed">{caseStudy.challenge}</p>
                      </div>

                      <div>
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                            <Target size={16} className="text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-surface-900">Our Solution</h3>
                        </div>
                        <p className="text-surface-700 leading-relaxed">{caseStudy.solution}</p>
                      </div>

                      <div className="pt-4 border-t border-surface-200">
                        <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 font-bold text-sm rounded-full">
                          <Award size={14} className="mr-2" />
                          {caseStudy.service}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                          <TrendingUp size={16} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-surface-900">The Results</h3>
                      </div>
                      <div className="space-y-4">
                        {caseStudy.results.map((result, idx) => (
                          <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-soft border border-surface-200 hover:shadow-elevated transition-all duration-300">
                            <span className="text-surface-700 font-semibold">{result.label}</span>
                            <span className="text-3xl font-black text-primary-600">{result.metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="border-t border-surface-200 pt-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold text-white">{caseStudy.testimonial.avatar}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} className="text-amber-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-lg text-surface-800 italic mb-4 leading-relaxed">
                          &quot;{caseStudy.testimonial.quote}&quot;
                        </p>
                        <div>
                          <div className="font-bold text-surface-900 text-lg">{caseStudy.testimonial.author}</div>
                          <div className="text-surface-600">{caseStudy.testimonial.title}</div>
                          <div className="text-surface-500 text-sm">{caseStudy.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-16">
                <p className="text-surface-600 text-lg mb-4">No case studies found matching your filters.</p>
                <button 
                  onClick={() => {
                    setSelectedIndustry('All Industries');
                    setSelectedService('All Services');
                  }}
                  className="text-primary-600 font-bold hover:text-primary-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Industry Breakdown */}
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
              Cross-Industry{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Experience
              </span>
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
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
                  className="card-glass p-6 hover:bg-white/15 transition-all duration-500 border-surface-700/50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-black text-accent-300 mb-2">{item.percentage}</div>
                  <div className="text-surface-200 font-semibold">{item.industry}</div>
                </motion.div>
              ))}
            </div>

            <p className="text-surface-300 text-lg">
              Our diverse industry experience means we bring best practices from across sectors while understanding 
              the unique challenges of your specific industry.
            </p>
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="heading-section text-surface-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Write Your Success Story?
            </motion.h2>
            <motion.p 
              className="body-large text-surface-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Join 200+ companies that have achieved remarkable transformation through our services. 
              Let&apos;s discuss how we can help you achieve similar results.
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
                  <span>Book Free Consultation</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/testimonials"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-2xl hover:bg-surface-50 transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring border border-primary-200"
                >
                  <span>Read More Testimonials</span>
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


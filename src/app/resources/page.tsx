'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Download, FileText, Award, 
  Filter, Calendar, ArrowRight, Target
} from 'lucide-react';
import { Lock } from 'lucide-react';
import { validation } from '@/utils/validation';
import { showToast } from '@/utils/toast';

const resources = [
  // Templates
  {
    id: 1,
    title: 'Strategic Planning Template',
    description: 'Comprehensive template for creating your 3-year strategic roadmap with goals, initiatives, and KPIs.',
    type: 'Template',
    category: 'Strategy',
    format: 'Excel',
    downloads: '2,500+',
    popular: true
  },
  {
    id: 2,
    title: 'Leadership Development Plan Template',
    description: 'Create personalized development plans for leaders with assessment, goals, and action items.',
    type: 'Template',
    category: 'Leadership',
    format: 'Word',
    downloads: '1,800+'
  },
  {
    id: 3,
    title: '360-Degree Feedback Form',
    description: 'Collect comprehensive feedback from peers, managers, and direct reports for leadership assessment.',
    type: 'Template',
    category: 'Leadership',
    format: 'PDF',
    downloads: '2,100+'
  },
  {
    id: 4,
    title: 'Team Performance Assessment',
    description: 'Evaluate team effectiveness across collaboration, communication, and results delivery.',
    type: 'Template',
    category: 'Teams',
    format: 'Excel',
    downloads: '1,600+'
  },
  {
    id: 5,
    title: 'Change Management Roadmap',
    description: 'Step-by-step guide for planning and executing organizational change initiatives.',
    type: 'Template',
    category: 'Transformation',
    format: 'PowerPoint',
    downloads: '1,900+'
  },
  {
    id: 6,
    title: 'KPI Dashboard Template',
    description: 'Track key performance indicators with visual dashboard for strategic metrics monitoring.',
    type: 'Template',
    category: 'Strategy',
    format: 'Excel',
    downloads: '3,200+',
    popular: true
  },
  // E-Books
  {
    id: 7,
    title: 'The Logic of Leadership',
    description: '10 frameworks for effective leaders combining strategic thinking with emotional intelligence. 85-page comprehensive guide.',
    type: 'E-Book',
    category: 'Leadership',
    format: 'PDF',
    downloads: '5,800+',
    popular: true
  },
  {
    id: 8,
    title: 'Strategic Planning for Growing Companies',
    description: 'Complete guide to creating and executing strategic plans for mid-size businesses.',
    type: 'E-Book',
    category: 'Strategy',
    format: 'PDF',
    downloads: '4,200+'
  },
  {
    id: 9,
    title: 'Building High-Performance Teams',
    description: 'Practical handbook for creating collaborative, productive, and engaged teams.',
    type: 'E-Book',
    category: 'Teams',
    format: 'PDF',
    downloads: '3,700+'
  },
  {
    id: 10,
    title: 'Change Management Essentials',
    description: 'Essential frameworks and tools for leading organizational change successfully.',
    type: 'E-Book',
    category: 'Transformation',
    format: 'PDF',
    downloads: '2,900+'
  },
  // Tools
  {
    id: 11,
    title: 'Leadership Style Quiz',
    description: 'Interactive assessment to identify your leadership style and development areas.',
    type: 'Tool',
    category: 'Leadership',
    format: 'Online',
    downloads: '12,000+'
  },
  {
    id: 12,
    title: 'Organizational Health Check',
    description: 'Comprehensive assessment of organizational effectiveness across 10 dimensions.',
    type: 'Tool',
    category: 'Transformation',
    format: 'Online',
    downloads: '8,500+'
  },
  {
    id: 13,
    title: 'Team Effectiveness Assessment',
    description: 'Measure team performance and identify areas for improvement.',
    type: 'Tool',
    category: 'Teams',
    format: 'Online',
    downloads: '6,200+'
  },
  {
    id: 14,
    title: 'Strategic Readiness Score',
    description: 'Assess your organization\'s readiness for strategic planning and execution.',
    type: 'Tool',
    category: 'Strategy',
    format: 'Online',
    downloads: '4,800+'
  },
  // Reports
  {
    id: 15,
    title: 'State of Leadership Development in India 2024',
    description: 'Annual report on leadership development trends, challenges, and best practices in Indian companies.',
    type: 'Report',
    category: 'Leadership',
    format: 'PDF',
    downloads: '3,400+'
  },
  {
    id: 16,
    title: 'Indian SMB Transformation Trends',
    description: 'Research report on digital and organizational transformation in Indian SMBs.',
    type: 'Report',
    category: 'Transformation',
    format: 'PDF',
    downloads: '2,100+'
  }
];

const categories = ['All Categories', 'Strategy', 'Leadership', 'Teams', 'Transformation'];
const types = ['All Types', 'Template', 'E-Book', 'Tool', 'Report'];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedType, setSelectedType] = useState('All Types');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  // Check if user is logged in (you can integrate with your actual auth system)
  const isLoggedIn = false; // Replace with actual auth check

  const filteredResources = resources.filter(r => {
    const categoryMatch = selectedCategory === 'All Categories' || r.category === selectedCategory;
    const typeMatch = selectedType === 'All Types' || r.type === selectedType;
    return categoryMatch && typeMatch;
  });

  const getIcon = (type: string) => {
    switch(type) {
      case 'Template': return FileText;
      case 'E-Book': return BookOpen;
      case 'Tool': return Target;
      case 'Report': return Award;
      default: return FileText;
    }
  };

  const handleDownload = (resourceTitle: string) => {
    if (isLoggedIn) {
      // Handle actual download
      console.log(`Downloading: ${resourceTitle}`);
      // Add your download logic here
    } else {
      setShowLoginModal(true);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsletterEmail.trim()) {
      return;
    }

    const emailError = validation.email(newsletterEmail);
    if (emailError) {
      showToast.error('Please enter a valid email address.');
      return;
    }

    setIsSubscribing(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Newsletter subscription:', newsletterEmail);
      
      // Show success message
      showToast.newsletterSuccess();
      setNewsletterEmail('');
    } catch {
      showToast.error('There was an error subscribing. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

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
            alt="Free resources and tools"
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
              <BookOpen size={20} className="mr-2" />
              FREE RESOURCES
            </motion.div>
            <motion.h1 
              className="heading-hero text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Knowledge Hub &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Free Tools
              </span>
            </motion.h1>
            <motion.p 
              className="body-large text-surface-200 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Expert insights, practical templates, and powerful tools to accelerate your business success. 
              All free, no registration required.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section 
        className="relative py-16 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent-600 to-secondary-600"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { metric: '16+', label: 'Free Resources' },
                { metric: '50,000+', label: 'Downloads' },
                { metric: '4.8/5', label: 'Average Rating' },
                { metric: 'Weekly', label: 'New Content' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-black text-white mb-2">{stat.metric}</div>
                  <div className="text-white/80 font-semibold">{stat.label}</div>
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
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-white border border-surface-300 rounded-xl font-medium text-surface-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                
                <select 
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-2 bg-white border border-surface-300 rounded-xl font-medium text-surface-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mt-4 text-center text-surface-600">
              Showing <span className="font-bold text-primary-600">{filteredResources.length}</span> resource{filteredResources.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Resources Grid */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => {
                const Icon = getIcon(resource.type);
                return (
                  <motion.div 
                    key={resource.id}
                    className="card-elevated p-6 hover:shadow-elevated transition-all duration-500 group relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index % 9) * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                  >
                    {resource.popular && (
                      <div className="absolute -top-3 -right-3">
                        <div className="px-3 py-1 bg-gradient-to-r from-accent-500 to-secondary-500 text-white font-bold text-xs rounded-full shadow-glow">
                          POPULAR
                        </div>
                      </div>
                    )}

                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-elevated transition-all duration-300 group-hover:scale-110">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 font-bold text-xs rounded-full mb-1">
                          {resource.type}
                        </span>
                        <span className="text-surface-500 text-xs">{resource.format}</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-surface-900 text-lg mb-3 group-hover:text-primary-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-surface-600 text-sm mb-4 line-clamp-3">{resource.description}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-surface-200">
                      <div className="flex items-center text-surface-500 text-xs">
                        <Download size={14} className="mr-1" />
                        <span>{resource.downloads} downloads</span>
                      </div>
                      <span className="px-3 py-1 bg-secondary-100 text-secondary-700 font-semibold text-xs rounded-full">
                        {resource.category}
                      </span>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleDownload(resource.title)}
                      className="mt-4 w-full px-4 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-soft hover:shadow-elevated flex items-center justify-center space-x-2"
                    >
                      <Download size={18} />
                      <span>Download Free</span>
                    </motion.button>
                  </motion.div>
                );
              })}
            </div>

            {filteredResources.length === 0 && (
              <div className="text-center py-16">
                <p className="text-surface-600 text-lg mb-4">No resources found matching your filters.</p>
                <button 
                  onClick={() => {
                    setSelectedCategory('All Categories');
                    setSelectedType('All Types');
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

      {/* Newsletter Signup */}
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="heading-section text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Get New Resources{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Monthly
              </span>
            </motion.h2>
            <motion.p 
              className="text-surface-300 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Subscribe to receive new templates, guides, and insights delivered to your inbox. 
              Plus exclusive content for subscribers only.
            </motion.p>
            <motion.form 
              onSubmit={handleNewsletterSubmit}
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-4">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-accent-400"
                />
                <button 
                  type="submit"
                  disabled={isSubscribing || !newsletterEmail.trim()}
                  className="px-6 py-3 bg-white text-primary-600 font-bold rounded-xl hover:bg-surface-100 transition-all duration-300 shadow-soft disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubscribing ? (
                    <div className="w-5 h-5 border-2 border-primary-600/30 border-t-primary-600 rounded-full animate-spin"></div>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>
              <p className="text-surface-400 text-xs mt-4">No spam. Unsubscribe anytime.</p>
            </motion.form>
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
              Need Custom Solutions?
            </motion.h2>
            <motion.p 
              className="body-large text-surface-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              While our free resources are valuable, nothing beats customized consulting tailored to your specific challenges. 
              Let&apos;s discuss how we can help.
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
                  <span>View Services</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Login Modal - Simple Design */}
      <AnimatePresence>
        {showLoginModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setShowLoginModal(false)}
            >
              {/* Modal */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-gradient-to-br from-surface-800 to-surface-900 rounded-2xl shadow-2xl max-w-sm w-full p-8 relative border border-surface-700"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center">
                    <Lock size={24} className="text-white" />
                  </div>
                </div>

                {/* Message */}
                <h3 className="text-xl font-bold text-white text-center mb-6">
                  Login first to download template
                </h3>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link
                    href="/login"
                    className="block w-full px-6 py-3 bg-white text-surface-900 font-bold rounded-xl hover:bg-surface-100 transition-all duration-300 shadow-soft hover:shadow-elevated text-center"
                  >
                    Login
                  </Link>
                  <button
                    onClick={() => setShowLoginModal(false)}
                    className="block w-full px-6 py-3 bg-transparent text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 text-center border border-surface-600"
                  >
                    Cancel
                  </button>
                </div>

                {/* Sign up link */}
                <div className="mt-6 text-center text-sm text-surface-300">
                  Don&apos;t have an account?{' '}
                  <Link href="/signup" className="text-accent-400 font-semibold hover:text-accent-300">
                    Sign up
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}


'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Star, ArrowRight, Calendar, Building, Target, Filter, Award
} from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    title: 'CEO & Founder',
    company: 'TechVista Solutions',
    location: 'Mumbai',
    avatar: 'RS',
    rating: 5,
    service: 'Strategic Consulting',
    date: 'October 2024',
    testimonial: 'Working with Living With Logic was a game-changer for our organization. When we engaged them, we were struggling with unclear market positioning and internal alignment issues. Their logical, data-driven approach helped us create a crystal-clear strategy that everyone could rally behind. Within 9 months, we saw 45% revenue growth and our team engagement scores went through the roof. The best part? They didn\'t just give us a report and leave – they worked alongside us to ensure implementation. Highly recommend to any growing tech company!',
    results: ['45% revenue growth', '92% team alignment', 'Clear strategic direction']
  },
  {
    id: 2,
    name: 'Dr. Priya Menon',
    title: 'Founder & Medical Director',
    company: 'Healthcare Plus India',
    location: 'Bangalore',
    avatar: 'PM',
    rating: 5,
    service: 'Organizational Transformation',
    date: 'September 2024',
    testimonial: 'I was skeptical about consultants, but Living With Logic exceeded all expectations. We were expanding rapidly and feared losing the quality that made us special. Their transformation framework helped us scale from 15 to 55 locations while actually improving patient satisfaction scores. The team understood healthcare nuances and created systems that work in the real world, not just on paper. Our staff retention improved dramatically because people now have clear processes and feel supported. Best investment we\'ve made in the business!',
    results: ['40 new locations', '4.8/5 patient satisfaction', '55% staff retention improvement']
  },
  {
    id: 3,
    name: 'Amit Kumar',
    title: 'Founder & Managing Director',
    company: 'RetailHub India',
    location: 'Delhi',
    avatar: 'AK',
    rating: 5,
    service: 'Team Workshops',
    date: 'August 2024',
    testimonial: 'The team workshops conducted by Living With Logic were transformative. Our team was resistant to digital transformation, and we needed to change mindsets quickly. The workshops were engaging, practical, and immediately applicable. The facilitators understood our retail context and made concepts relevant. Within weeks, we saw behavioral changes. Within months, we successfully transitioned to omnichannel retail with full team buy-in. The ROI on these workshops was incredible – easily 10x the investment.',
    results: ['40% productivity increase', '65% online sales', 'Full team buy-in']
  },
  {
    id: 4,
    name: 'Vikram Malhotra',
    title: 'Chief Operating Officer',
    company: 'Manufacturing Excellence Pvt Ltd',
    location: 'Pune',
    avatar: 'VM',
    rating: 5,
    service: 'Organizational Transformation',
    date: 'July 2024',
    testimonial: 'This was a complete turnaround in every sense. Living With Logic didn\'t just fix our processes they transformed our culture and mindset. People who were disengaged are now champions of continuous improvement. Our profitability has never been better, and we\'re now competitive globally. The 18-month transformation journey was challenging but incredibly rewarding. Their systematic approach, change management expertise, and genuine partnership made all the difference. This transformation literally saved our company.',
    results: ['50% cycle time reduction', '28% profit margin increase', '65% engagement boost']
  },
  {
    id: 5,
    name: 'Deepika Reddy',
    title: 'Vice President of Operations',
    company: 'FinServe Solutions',
    location: 'Hyderabad',
    avatar: 'DR',
    rating: 5,
    service: 'Leadership Development',
    date: 'June 2024',
    testimonial: 'Our leaders are now driving the business forward instead of just managing day-to-day. The leadership development program transformed our leadership culture from reactive to proactive. The 360-degree feedback was eye-opening, and the coaching was incredibly valuable. We\'ve seen measurable impact on client satisfaction, compliance, and team performance. The investment in leadership development was the best decision we made this year. Our managers are now true leaders.',
    results: ['15 leaders certified', '0 compliance violations', '94% client retention']
  },
  {
    id: 6,
    name: 'Kavita Singh',
    title: 'Co-founder & CEO',
    company: 'EduTech Innovators',
    location: 'Chennai',
    avatar: 'KS',
    rating: 5,
    service: 'Strategic Consulting',
    date: 'May 2024',
    testimonial: 'They helped us find clarity in chaos. We were building the wrong product for the wrong market. Their strategic consulting work including comprehensive customer discovery and competitive analysis helped us pivot successfully. The new product-market fit we achieved has put us on a strong growth trajectory. We went from struggling to find customers to having a waitlist. Their strategic thinking and practical execution support made the difference between failure and success.',
    results: ['2.5x revenue growth', 'Successful market pivot', '180% customer acquisition']
  },
  {
    id: 7,
    name: 'Arjun Patel',
    title: 'Director of Engineering',
    company: 'CloudTech Systems',
    location: 'Bangalore',
    avatar: 'AP',
    rating: 5,
    service: 'Team Workshops',
    date: 'April 2024',
    testimonial: 'The Agile Team Collaboration workshop transformed how our engineering teams work together. We had brilliant individuals but poor collaboration. The workshop gave us frameworks and tools that immediately improved our sprint planning, daily standups, and retrospectives. Our delivery speed increased by 35% and our sprint predictability improved dramatically. The facilitator\'s deep understanding of engineering teams made the difference. Best professional development investment for our tech team.',
    results: ['35% faster delivery', 'Better sprint predictability', 'Improved team morale']
  },
  {
    id: 8,
    name: 'Meera Desai',
    title: 'HR Director',
    company: 'ConsultPro India',
    location: 'Mumbai',
    avatar: 'MD',
    rating: 5,
    service: 'Leadership Development',
    date: 'March 2024',
    testimonial: 'The executive coaching program for our senior leaders was phenomenal. Each leader received personalized coaching based on their 360-degree feedback and development goals. The transformation in their leadership presence, communication skills, and strategic thinking has been remarkable. Our employee engagement scores improved by 42% in just 6 months. The coaches were professional, insightful, and genuinely invested in our leaders\' growth. Outstanding program that delivered clear ROI.',
    results: ['42% engagement increase', 'Visible leadership growth', 'Better retention']
  },
  {
    id: 9,
    name: 'Rohit Kapoor',
    title: 'CTO',
    company: 'DataStream Analytics',
    location: 'Hyderabad',
    avatar: 'RK',
    rating: 5,
    service: 'Strategic Consulting',
    date: 'February 2024',
    testimonial: 'Their strategic consulting helped us navigate a critical inflection point. We had multiple product opportunities but limited resources. Their framework for prioritizing initiatives based on market potential, technical feasibility, and strategic fit was brilliant. The roadmap they helped us create has become our north star. Six months in, we\'re seeing 60% faster product development cycles and much better alignment across engineering, product, and sales. Exceptional strategic thinking.',
    results: ['60% faster development', 'Clear prioritization', 'Cross-functional alignment']
  },
  {
    id: 10,
    name: 'Ananya Iyer',
    title: 'Operations Manager',
    company: 'FreshMart Retail',
    location: 'Chennai',
    avatar: 'AI',
    rating: 5,
    service: 'Team Workshops',
    date: 'January 2024',
    testimonial: 'The Communication Mastery workshop was exactly what our store managers needed. We had constant miscommunication causing operational issues. The workshop taught practical techniques for active listening, giving feedback, and having difficult conversations. The role-plays were incredibly valuable safe space to practice real scenarios. Two months later, our operational errors decreased by 50% and customer complaints dropped by 40%. Simple but powerful communication tools that work.',
    results: ['50% fewer operational errors', '40% fewer complaints', 'Better team harmony']
  },
  {
    id: 11,
    name: 'Karthik Subramanian',
    title: 'Managing Partner',
    company: 'LegalEdge Associates',
    location: 'Bangalore',
    avatar: 'KS2',
    rating: 5,
    service: 'Organizational Transformation',
    date: 'December 2023',
    testimonial: 'As a law firm, we were stuck in traditional ways of working. Living With Logic helped us transform into a modern, efficient practice. They redesigned our client intake process, implemented project management systems, and changed how we collaborate internally. Billing efficiency improved 45%, client satisfaction scores are at all-time highs, and our team is much happier. They respected our professional context while bringing fresh thinking. Transformation done right.',
    results: ['45% billing efficiency', 'Higher client satisfaction', 'Modern workflows']
  },
  {
    id: 12,
    name: 'Sneha Verma',
    title: 'Founder',
    company: 'BeautyBox E-commerce',
    location: 'Delhi',
    avatar: 'SV',
    rating: 5,
    service: 'Strategic Consulting',
    date: 'November 2023',
    testimonial: 'When our growth stalled, we knew we needed strategic help. Living With Logic conducted thorough market research, identified our positioning gaps, and helped us redesign our value proposition. The new strategy focused on our unique strengths and underserved customer segments. Results came quickly revenue grew 85% in the next quarter and customer acquisition costs dropped 30%. Their strategic insights and execution support were invaluable for a startup like ours.',
    results: ['85% revenue growth', '30% lower CAC', 'Clear differentiation']
  },
  {
    id: 13,
    name: 'Prakash Reddy',
    title: 'VP Sales',
    company: 'IndustrialTech Solutions',
    location: 'Pune',
    avatar: 'PR',
    rating: 5,
    service: 'Leadership Development',
    date: 'October 2023',
    testimonial: 'The leadership program helped me transition from individual contributor to effective people manager. The coaching sessions were transformative I learned how to delegate, give feedback, and develop my team. My team\'s sales performance improved 55% after I implemented what I learned. The 360-degree feedback was tough to hear but incredibly valuable. Best professional development I\'ve ever received. Every manager should go through this program.',
    results: ['55% team performance increase', 'Better delegation', 'Stronger team culture']
  },
  {
    id: 14,
    name: 'Divya Mehta',
    title: 'Head of Product',
    company: 'FinTech Innovations',
    location: 'Mumbai',
    avatar: 'DM',
    rating: 5,
    service: 'Team Workshops',
    date: 'September 2023',
    testimonial: 'The Innovation & Design Thinking workshop unlocked our team\'s creative potential. We had become too focused on incremental improvements and lost our innovative edge. The workshop taught us structured approaches to ideation, prototyping, and testing. We\'ve since launched 3 new features that customers love, and our team feels energized and creative again. The workshop investment paid for itself in the first month through faster innovation cycles.',
    results: ['3 successful launches', 'Faster innovation', 'Re-energized team']
  },
  {
    id: 15,
    name: 'Aditya Kapoor',
    title: 'CEO',
    company: 'GreenEnergy Systems',
    location: 'Bangalore',
    avatar: 'AK2',
    rating: 5,
    service: 'Strategic Consulting',
    date: 'August 2023',
    testimonial: 'Their strategic work helped us navigate the complex renewable energy market. They analyzed regulatory trends, competitive dynamics, and technology shifts to help us position optimally. The strategic roadmap they created has guided our expansion into 8 new states. Their understanding of both business strategy and our technical domain was impressive. ROI has been phenomenal we\'re now the #2 player in our segment and growing fast.',
    results: ['8-state expansion', '#2 market position', 'Strategic clarity']
  },
  {
    id: 16,
    name: 'Pooja Sharma',
    title: 'Director HR',
    company: 'GlobalTech Services',
    location: 'Gurgaon',
    avatar: 'PS',
    rating: 5,
    service: 'Organizational Transformation',
    date: 'July 2023',
    testimonial: 'We engaged Living With Logic for our culture transformation initiative. Our culture had become toxic during rapid growth high politics, low collaboration, increasing attrition. They designed and led a comprehensive culture change program including values workshops, leadership alignment, and behavior change initiatives. One year later, our culture is unrecognizable collaborative, transparent, and performance-driven. Attrition dropped from 35% to 12%. Culture transformation is hard, but they made it happen.',
    results: ['12% attrition (from 35%)', 'Culture transformation', 'Better collaboration']
  },
  {
    id: 17,
    name: 'Sanjay Patel',
    title: 'CFO',
    company: 'Heritage Textiles',
    location: 'Ahmedabad',
    avatar: 'SP',
    rating: 5,
    service: 'Organizational Transformation',
    date: 'June 2023',
    testimonial: 'As a 50-year-old family business, we were stuck in our ways. Living With Logic helped us modernize without losing our core values. They upgraded our financial systems, streamlined operations, and professionalized our management practices. The transformation was sensitive to our family business context while bringing much-needed change. Profitability improved 40%, and we\'re now ready for the next generation of leadership. Grateful for their expertise and empathy.',
    results: ['40% profitability increase', 'Modernized operations', 'Succession ready']
  },
  {
    id: 18,
    name: 'Nisha Gupta',
    title: 'Marketing Director',
    company: 'FashionForward Brands',
    location: 'Mumbai',
    avatar: 'NG',
    rating: 5,
    service: 'Team Workshops',
    date: 'May 2023',
    testimonial: 'The High-Performance Teams workshop transformed our marketing department. We had talented individuals but poor teamwork and lots of conflict. The workshop addressed our real issues not generic training. We learned frameworks for collaboration, conflict resolution, and accountability. Three months later, our campaign delivery speed doubled and quality improved significantly. Team morale is at an all-time high. The facilitator was brilliant at creating a safe space for difficult conversations.',
    results: ['2x campaign delivery speed', 'Better quality', 'High morale']
  },
  {
    id: 19,
    name: 'Ravi Kumar',
    title: 'Founder & CEO',
    company: 'LogiTech Warehousing',
    location: 'Chennai',
    avatar: 'RK2',
    rating: 5,
    service: 'Strategic Consulting',
    date: 'April 2023',
    testimonial: 'We were facing increasing competition and margin pressure. Living With Logic helped us rethink our entire business model and identify new service offerings. Their strategic analysis revealed untapped opportunities in cold chain logistics. The pivot strategy they helped us develop has opened a high-margin business line. Revenue from new services now represents 40% of total revenue with 2x margins. Their strategic guidance was a business-saver.',
    results: ['40% revenue from new services', '2x margins', 'Competitive edge']
  },
  {
    id: 20,
    name: 'Lakshmi Narayan',
    title: 'COO',
    company: 'HealthCare Diagnostics',
    location: 'Hyderabad',
    avatar: 'LN',
    rating: 5,
    service: 'Organizational Transformation',
    date: 'March 2023',
    testimonial: 'Our operational inefficiencies were hurting patient experience and profitability. Living With Logic conducted a thorough operational assessment and redesigned our workflows. They implemented lean processes, upgraded our lab management system, and trained our team. Patient wait times decreased 60%, operational costs dropped 25%, and quality scores improved. The transformation was executed smoothly with minimal disruption. Professional, thorough, and results-oriented consulting.',
    results: ['60% lower wait times', '25% cost reduction', 'Better quality scores']
  }
];

const services = ['All Services', 'Strategic Consulting', 'Leadership Development', 'Team Workshops', 'Organizational Transformation'];
const locations = ['All Locations', 'Mumbai', 'Bangalore', 'Delhi', 'Pune', 'Hyderabad', 'Chennai', 'Gurgaon', 'Ahmedabad'];

export default function TestimonialsPage() {
  const [selectedService, setSelectedService] = useState('All Services');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');

  const filteredTestimonials = testimonials.filter(t => {
    const serviceMatch = selectedService === 'All Services' || t.service === selectedService;
    const locationMatch = selectedLocation === 'All Locations' || t.location === selectedLocation;
    return serviceMatch && locationMatch;
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
            alt="Client testimonials and reviews"
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
              <Star size={20} className="mr-2" />
              CLIENT TESTIMONIALS
            </motion.div>
            <motion.h1 
              className="heading-hero text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              What Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Clients Say
              </span>
            </motion.h1>
            <motion.p 
              className="body-large text-surface-200 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Real feedback from real leaders across India. Discover why 200+ companies trust Living With Logic 
              for their consulting needs.
            </motion.p>
            <motion.div 
              className="flex items-center justify-center space-x-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="text-5xl font-black text-accent-300 mb-2">4.9/5</div>
                <div className="flex items-center justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-amber-400 fill-current" />
                  ))}
                </div>
                <div className="text-surface-300 text-sm">Average Rating</div>
              </div>
              <div className="h-16 w-px bg-white/30"></div>
              <div className="text-center">
                <div className="text-5xl font-black text-accent-300 mb-2">200+</div>
                <div className="text-surface-300">Reviews</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Rating Breakdown */}
      <motion.section 
        className="relative py-16 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-surface-100 to-surface-50"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { label: 'Overall Satisfaction', rating: '4.9/5' },
                { label: 'Expertise', rating: '5.0/5' },
                { label: 'Communication', rating: '4.9/5' },
                { label: 'Results Delivered', rating: '4.8/5' },
                { label: 'Value for Money', rating: '4.7/5' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-black text-primary-600 mb-2">{item.rating}</div>
                  <div className="text-surface-600 text-sm font-semibold">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Filters */}
      <motion.section 
        className="relative py-8 overflow-hidden"
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
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="px-4 py-2 bg-white border border-surface-300 rounded-xl font-medium text-surface-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                
                <select 
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-2 bg-white border border-surface-300 rounded-xl font-medium text-surface-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mt-4 text-center text-surface-600">
              Showing <span className="font-bold text-primary-600">{filteredTestimonials.length}</span> testimonial{filteredTestimonials.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Grid */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id}
                  className="card-elevated p-8 hover:shadow-elevated transition-all duration-500 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index % 6) * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-white">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-surface-900 text-lg">{testimonial.name}</h3>
                        <p className="text-surface-600 text-sm">{testimonial.title}</p>
                        <p className="text-surface-500 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center mb-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} className="text-amber-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-surface-400 text-xs">{testimonial.date}</span>
                    </div>
                  </div>

                  {/* Service Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 font-semibold text-xs rounded-full">
                      <Award size={12} className="mr-1" />
                      {testimonial.service}
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-surface-700 leading-relaxed mb-6 italic">
                    &quot;{testimonial.testimonial}&quot;
                  </p>

                  {/* Results */}
                  <div className="border-t border-surface-200 pt-4">
                    <div className="text-xs font-bold text-surface-500 mb-3">KEY RESULTS:</div>
                    <div className="flex flex-wrap gap-2">
                      {testimonial.results.map((result, idx) => (
                        <span key={idx} className="px-3 py-1 bg-secondary-100 text-secondary-700 font-semibold text-xs rounded-full">
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mt-4 flex items-center text-surface-500 text-sm">
                    <Target size={14} className="mr-1" />
                    <span>{testimonial.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredTestimonials.length === 0 && (
              <div className="text-center py-16">
                <p className="text-surface-600 text-lg mb-4">No testimonials found matching your filters.</p>
                <button 
                  onClick={() => {
                    setSelectedService('All Services');
                    setSelectedLocation('All Locations');
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

      {/* Trust Indicators */}
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
              Why Clients{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Choose Us
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { metric: '200+', label: 'Companies Served', icon: Building },
                { metric: '15+', label: 'Years Experience', icon: Calendar },
                { metric: '99%', label: 'Client Satisfaction', icon: Star },
                { metric: '85%', label: 'Client Retention', icon: Award }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {React.createElement(item.icon, { size: 28, className: "text-white" })}
                  </div>
                  <div className="text-4xl font-black text-accent-300 mb-2">{item.metric}</div>
                  <div className="text-surface-300 font-semibold">{item.label}</div>
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
              Join Our Growing List of Success Stories
            </motion.h2>
            <motion.p 
              className="body-large text-surface-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Experience the same transformation that our clients rave about. Book a free consultation 
              to discuss your challenges and explore how we can help.
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
                  href="/case-studies"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-2xl hover:bg-surface-50 transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring border border-primary-200"
                >
                  <span>View Case Studies</span>
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


'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowLeft, ArrowRight, Tag, ChevronRight } from 'lucide-react';

// Blog posts data
const allPosts = [
  {
    title: 'The Future of Strategic Planning in a Post-Digital World',
    excerpt: 'How modern organizations are adapting their strategic planning processes to navigate unprecedented change and uncertainty.',
    content: `
      <p class="lead">In today's rapidly evolving business landscape, traditional strategic planning approaches are being fundamentally challenged. Organizations that once relied on five-year plans and predictable market conditions now find themselves navigating unprecedented levels of uncertainty and change.</p>
      
      <h2>The Shift from Linear to Adaptive Planning</h2>
      <p>The post-digital era demands a new approach to strategic planning—one that embraces agility, continuous learning, and rapid adaptation. Rather than creating rigid, long-term plans, successful organizations are developing strategic frameworks that allow for flexibility while maintaining clear direction.</p>
      
      <h2>Key Principles for Modern Strategic Planning</h2>
      <p><strong>1. Scenario-Based Thinking:</strong> Instead of betting on a single future, organizations should develop multiple scenarios and prepare strategies for each. This approach builds organizational resilience and enables faster response to changing conditions.</p>
      
      <p><strong>2. Continuous Strategy Development:</strong> Annual planning cycles are giving way to continuous strategy development processes. Organizations now regularly reassess their strategic assumptions and adjust their approaches based on emerging data and market signals.</p>
      
      <p><strong>3. Data-Informed Decision Making:</strong> While intuition and experience remain valuable, successful organizations are increasingly leveraging data analytics to inform strategic decisions. This includes both internal performance data and external market intelligence.</p>
      
      <blockquote>Strategic agility isn't just about being able to change direction quickly—it's about building the organizational capabilities that enable effective adaptation.</blockquote>
      
      <h2>Building Strategic Agility</h2>
      <p>This includes developing cross-functional teams, investing in digital capabilities, and creating cultures that embrace experimentation and learning. Organizations must be willing to challenge their own assumptions and pivot when necessary.</p>
      
      <h2>Conclusion</h2>
      <p>The future of strategic planning lies not in predicting the unpredictable, but in building organizations that can thrive regardless of what the future holds. By embracing adaptive planning approaches and building strategic agility, organizations can navigate uncertainty with confidence.</p>
    `,
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Strategic Planning',
    slug: 'future-strategic-planning-post-digital-world',
    author: { name: 'Strategic Insights Team', role: 'Business Consulting' }
  },
  {
    title: 'Building Resilient Leadership Teams in Times of Change',
    excerpt: 'Discover the key characteristics and practices that enable leadership teams to thrive during organizational transformation.',
    content: `
      <p class="lead">Organizational change is inevitable, but how leadership teams respond to that change determines whether organizations emerge stronger or struggle to adapt. Building resilient leadership teams requires intentional focus on both individual capabilities and collective dynamics.</p>
      
      <h2>The Foundations of Leadership Resilience</h2>
      <p>Resilient leadership teams share several key characteristics that enable them to navigate challenging times effectively. These include psychological safety, shared purpose, and the ability to maintain performance under pressure.</p>
      
      <h2>Creating Psychological Safety</h2>
      <p>Teams where members feel safe to take risks, voice concerns, and admit mistakes are better equipped to handle uncertainty. Leaders can foster psychological safety by modeling vulnerability, responding constructively to failure, and actively seeking diverse perspectives.</p>
      
      <blockquote>When external conditions are changing rapidly, leadership teams must work harder to maintain alignment around core priorities and values.</blockquote>
      
      <h2>Maintaining Alignment During Turbulence</h2>
      <p>Regular communication, clear decision-making processes, and shared metrics help teams stay coordinated even in chaos. The key is to establish these practices before they're needed.</p>
      
      <h2>Developing Adaptive Capacity</h2>
      <p>Resilient teams invest in developing their adaptive capacity before they need it. This includes building diverse skill sets, practicing scenario planning, and creating systems for rapid information sharing and decision-making.</p>
      
      <h2>Conclusion</h2>
      <p>Building leadership resilience is an ongoing process that requires consistent attention and investment. Organizations that prioritize leadership team development are better positioned to navigate change and emerge stronger from challenging periods.</p>
    `,
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Leadership',
    slug: 'building-resilient-leadership-teams',
    author: { name: 'Leadership Development Team', role: 'Executive Coaching' }
  },
  {
    title: 'Data-Driven Decision Making: Beyond the Buzzwords',
    excerpt: 'A practical framework for implementing truly data-driven decision processes in your organization.',
    content: `
      <p class="lead">Every organization claims to be "data-driven," but few have truly embedded data into their decision-making processes. Moving beyond the buzzwords requires a systematic approach to building data capabilities and changing organizational behaviors.</p>
      
      <h2>What Data-Driven Really Means</h2>
      <p>True data-driven decision making goes beyond having access to data or creating dashboards. It means systematically using data to inform decisions at all levels of the organization, while recognizing the limitations of data and the continued importance of human judgment.</p>
      
      <h2>Building the Foundation</h2>
      <p><strong>Data Quality:</strong> Before organizations can be data-driven, they need to ensure their data is accurate, complete, and accessible. This often requires significant investment in data infrastructure and governance.</p>
      
      <p><strong>Analytics Capabilities:</strong> Having data is only valuable if the organization has the skills to analyze it effectively. This includes both technical skills (data science, analytics) and business skills (knowing what questions to ask).</p>
      
      <blockquote>The hardest part of becoming data-driven is changing how people actually make decisions.</blockquote>
      
      <h2>Changing Decision Behaviors</h2>
      <p>This requires leadership modeling, training programs, and creating accountability for data-informed decisions. Leaders must demonstrate their commitment to data by consistently asking for evidence and being willing to change course when data suggests a better path.</p>
      
      <h2>Avoiding Common Pitfalls</h2>
      <p>Organizations often stumble by over-relying on data, ignoring qualitative insights, or creating "analysis paralysis." The goal is to enhance decision-making with data, not to replace human judgment entirely.</p>
      
      <h2>Conclusion</h2>
      <p>Becoming truly data-driven is a multi-year journey that requires investment in technology, people, and culture. Organizations that commit to this transformation gain significant competitive advantages in their ability to make faster, better decisions.</p>
    `,
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Analytics',
    slug: 'data-driven-decision-making-framework',
    author: { name: 'Analytics Practice', role: 'Data & Insights' }
  },
  {
    title: 'The ROI of Team Development: Measuring What Matters',
    excerpt: 'How to quantify the impact of team development initiatives and make the business case for continued investment.',
    content: `
      <p class="lead">Organizations invest significant resources in team development, but many struggle to demonstrate concrete returns on these investments. Understanding how to measure team development ROI is essential for securing continued investment and optimizing development programs.</p>
      
      <h2>Why Measuring Team Development Matters</h2>
      <p>In an era of tight budgets and competing priorities, learning and development leaders must demonstrate the value of their programs. Effective measurement not only justifies investment but also provides insights for improving program effectiveness.</p>
      
      <h2>Key Metrics to Track</h2>
      <p><strong>Performance Indicators:</strong> Track changes in team performance metrics before and after development interventions. This might include productivity measures, quality metrics, or customer satisfaction scores.</p>
      
      <p><strong>Engagement Measures:</strong> Team development often impacts employee engagement, which in turn affects retention and productivity. Regular engagement surveys can help quantify this impact.</p>
      
      <p><strong>Behavioral Changes:</strong> Look for observable changes in how team members work together, communicate, and solve problems. These behavioral shifts are often leading indicators of performance improvements.</p>
      
      <blockquote>To demonstrate ROI, connect team development outcomes to financial metrics like reduced turnover costs, improved project delivery, or increased revenue.</blockquote>
      
      <h2>Calculating Financial Impact</h2>
      <p>This might include reduced turnover costs, improved project delivery, or increased revenue from higher-performing teams. The key is to establish baseline measurements before development initiatives begin.</p>
      
      <h2>Conclusion</h2>
      <p>Measuring team development ROI requires a systematic approach that combines quantitative metrics with qualitative insights. Organizations that invest in measurement capabilities can optimize their development programs and demonstrate clear business value.</p>
    `,
    date: '2023-12-28',
    readTime: '5 min read',
    category: 'Team Development',
    slug: 'roi-team-development-measuring-impact',
    author: { name: 'Team Performance Practice', role: 'Organizational Development' }
  },
  {
    title: 'Cultural Transformation: Leading Change from the Inside Out',
    excerpt: 'A step-by-step approach to driving cultural change that sticks and creates lasting organizational improvement.',
    content: `
      <p class="lead">Organizational culture is often described as "the way we do things around here." Transforming culture requires more than new policies or training programs—it demands fundamental shifts in mindsets, behaviors, and systems.</p>
      
      <h2>Understanding Your Current Culture</h2>
      <p>Before embarking on cultural transformation, organizations must deeply understand their current culture. This includes formal elements like stated values and policies, as well as informal norms and unwritten rules that actually guide behavior.</p>
      
      <h2>Defining the Target Culture</h2>
      <p>Effective cultural transformation starts with a clear vision of the desired future state. This vision should be specific enough to guide behavior change while being aspirational enough to inspire commitment.</p>
      
      <blockquote>Cultural change must be modeled by senior leaders. When leaders consistently demonstrate desired behaviors—especially in challenging situations—they signal that the cultural shift is real.</blockquote>
      
      <h2>Leading from the Top</h2>
      <p>When leaders consistently demonstrate desired behaviors—especially in challenging situations—they signal that the cultural shift is real and expected of everyone. Actions speak louder than words in cultural transformation.</p>
      
      <h2>Aligning Systems and Processes</h2>
      <p>Culture is reinforced by organizational systems. Hiring practices, performance management, reward structures, and decision-making processes must all be aligned to support the target culture.</p>
      
      <h2>Building Momentum Through Quick Wins</h2>
      <p>Cultural transformation is a long-term journey, but early wins build confidence and momentum. Identify opportunities for visible progress that demonstrate the benefits of cultural change.</p>
      
      <h2>Conclusion</h2>
      <p>Cultural transformation is challenging but achievable with the right approach. Organizations that successfully transform their cultures gain sustainable competitive advantages through higher engagement, better performance, and greater adaptability.</p>
    `,
    date: '2023-12-22',
    readTime: '9 min read',
    category: 'Organizational Culture',
    slug: 'cultural-transformation-inside-out',
    author: { name: 'Culture & Change Practice', role: 'Transformation Consulting' }
  },
  {
    title: 'Scaling Agile Methodologies Across Large Organizations',
    excerpt: 'Best practices for implementing agile frameworks at enterprise scale while maintaining flexibility and innovation.',
    content: `
      <p class="lead">Agile methodologies have proven their value in software development and beyond. However, scaling agile across large, complex organizations presents unique challenges that require thoughtful approaches and realistic expectations.</p>
      
      <h2>The Scaling Challenge</h2>
      <p>What works for a single team doesn't automatically work across hundreds of teams. Enterprise agile requires coordination mechanisms, governance structures, and cultural shifts that go beyond team-level practices.</p>
      
      <h2>Choosing the Right Framework</h2>
      <p>Several frameworks exist for scaling agile, including SAFe, LeSS, and Spotify's model. The right choice depends on organizational context, culture, and specific needs. Avoid treating any framework as a one-size-fits-all solution.</p>
      
      <h2>Building Foundational Capabilities</h2>
      <p><strong>Team Maturity:</strong> Before scaling, ensure individual teams have strong agile foundations. Scaling immature practices only amplifies problems.</p>
      
      <p><strong>Technical Excellence:</strong> Continuous integration, automated testing, and DevOps capabilities are essential for agile at scale. Without technical foundations, teams cannot deliver at the speed agile promises.</p>
      
      <blockquote>Large organizations have complex dependencies between teams. Effective scaling requires mechanisms for identifying, managing, and minimizing these dependencies.</blockquote>
      
      <h2>Managing Dependencies</h2>
      <p>Effective scaling requires mechanisms for identifying, managing, and minimizing these dependencies while maintaining alignment across the organization.</p>
      
      <h2>Conclusion</h2>
      <p>Scaling agile is a journey that requires patience, investment, and continuous learning. Organizations that approach scaling thoughtfully—adapting frameworks to their context rather than rigidly following prescriptions—achieve the best results.</p>
    `,
    date: '2023-12-15',
    readTime: '6 min read',
    category: 'Process Improvement',
    slug: 'scaling-agile-methodologies-enterprise',
    author: { name: 'Agile Transformation Team', role: 'Process Excellence' }
  },
  {
    title: 'The Psychology of High-Performance Teams',
    excerpt: 'Understanding the psychological factors that drive exceptional team performance and how to cultivate them.',
    content: `
      <p class="lead">High-performance teams don't happen by accident. Understanding the psychological dynamics that enable exceptional team performance provides a roadmap for building and developing teams that consistently exceed expectations.</p>
      
      <h2>The Science of Team Performance</h2>
      <p>Decades of research have identified key psychological factors that distinguish high-performing teams. These include collective intelligence, psychological safety, and shared mental models that enable seamless coordination.</p>
      
      <h2>Psychological Safety: The Foundation</h2>
      <p>Google's extensive research on team effectiveness found that psychological safety was the single most important factor predicting team performance. Teams where members feel safe to take risks and be vulnerable outperform those dominated by fear.</p>
      
      <blockquote>High-performing teams develop a form of collective intelligence that exceeds the sum of individual capabilities.</blockquote>
      
      <h2>Building Collective Intelligence</h2>
      <p>This emerges from effective communication patterns, turn-taking in conversations, and social sensitivity among team members. Teams that listen well and share airtime perform better than those dominated by a few voices.</p>
      
      <h2>Creating Shared Purpose</h2>
      <p>Teams that share a compelling purpose demonstrate higher engagement, persistence, and creativity. Leaders can cultivate shared purpose through clear communication of the "why" behind team objectives and connecting daily work to meaningful outcomes.</p>
      
      <h2>Managing Team Energy</h2>
      <p>High-performance teams actively manage their collective energy. This includes attention to work patterns, recovery time, and the emotional climate of the team environment.</p>
      
      <h2>Conclusion</h2>
      <p>Building high-performance teams requires understanding and intentionally cultivating the psychological conditions that enable exceptional performance. Organizations that invest in these foundations create sustainable competitive advantages through their people.</p>
    `,
    date: '2023-12-10',
    readTime: '7 min read',
    category: 'Team Performance',
    slug: 'psychology-high-performance-teams',
    author: { name: 'Team Psychology Practice', role: 'Behavioral Science' }
  }
];

// Related posts helper
const getRelatedPosts = (currentSlug: string, category: string) => {
  return allPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, 3);
};

interface BlogDetailClientProps {
  slug: string;
}

export default function BlogDetailClient({ slug }: BlogDetailClientProps) {
  const post = allPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-surface-900 mb-4">Article Not Found</h1>
          <p className="text-surface-600 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/blog"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-bold"
          >
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(slug, post.category);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-surface-50 border-b border-surface-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-surface-500 hover:text-primary-600 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-surface-400" />
            <Link href="/blog" className="text-surface-500 hover:text-primary-600 transition-colors">Blog</Link>
            <ChevronRight size={14} className="text-surface-400" />
            <span className="text-surface-900 font-medium truncate max-w-[200px]">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <motion.header 
        className="bg-gradient-to-b from-surface-50 to-white py-16 lg:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                <Tag size={14} className="mr-2" />
                {post.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-surface-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {post.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p 
              className="text-xl text-surface-600 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {post.excerpt}
            </motion.p>

            {/* Meta Info */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-6 text-surface-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">{post.author.name.charAt(0)}</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-surface-900 text-sm">{post.author.name}</p>
                  <p className="text-xs text-surface-500">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Article Content */}
      <motion.article 
        className="py-12 lg:py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Body */}
            <div 
              className="prose prose-lg prose-surface max-w-none
                [&>p]:text-surface-700 [&>p]:leading-relaxed [&>p]:mb-6
                [&>p.lead]:text-xl [&>p.lead]:text-surface-600 [&>p.lead]:font-medium [&>p.lead]:border-l-4 [&>p.lead]:border-primary-500 [&>p.lead]:pl-6 [&>p.lead]:mb-8
                [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-surface-900 [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:pb-2 [&>h2]:border-b [&>h2]:border-surface-200
                [&>p>strong]:text-surface-900 [&>p>strong]:font-semibold
                [&>blockquote]:border-l-4 [&>blockquote]:border-accent-500 [&>blockquote]:bg-accent-50 [&>blockquote]:py-4 [&>blockquote]:px-6 [&>blockquote]:rounded-r-xl [&>blockquote]:my-8 [&>blockquote]:text-lg [&>blockquote]:text-surface-700 [&>blockquote]:italic [&>blockquote]:font-medium
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Back Link */}
            <div className="mt-8">
              <Link 
                href="/blog"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
              >
                <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to all articles
              </Link>
            </div>
          </div>
        </div>
      </motion.article>

      {/* Related Articles */}
      <motion.section 
        className="py-20 bg-surface-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-3">
                Continue Reading
              </h2>
              <p className="text-surface-400">More insights you might find valuable</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.slug}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="bg-surface-800 rounded-2xl p-6 h-full border border-surface-700 hover:border-accent-500/50 transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-surface-700 text-surface-300 rounded-full text-xs font-medium">
                          {relatedPost.category}
                        </span>
                        <span className="text-surface-500 text-xs">{relatedPost.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent-400 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-surface-400 text-sm line-clamp-2 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center text-accent-400 text-sm font-medium group-hover:text-accent-300">
                        Read article
                        <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let&apos;s discuss how we can help you apply these insights to drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/booking"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-surface-100 transition-all shadow-lg hover:shadow-xl"
              >
                <Calendar size={20} />
                <span>Book a Consultation</span>
              </Link>
              <Link 
                href="/blog"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                <BookOpen size={20} />
                <span>Read More Articles</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

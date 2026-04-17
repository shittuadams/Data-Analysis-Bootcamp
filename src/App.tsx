/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  MessageCircle, 
  PlayCircle, 
  BarChart3, 
  Database, 
  PieChart, 
  Code2, 
  Cpu, 
  Download, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  Linkedin,
  Clock,
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants & Links ---
const SELAR_CHECKOUT_URL = "https://selar.co/m/skalearn-data-bootcamp"; // Placeholder Selar link
const WHATSAPP_URL = "https://wa.me/2348123456789"; // Placeholder WhatsApp link
const COURSE_PRICE_ORIGINAL = "₦60,000";
const COURSE_PRICE_CURRENT = "₦24,900";

// --- Components ---

const Button = ({ children, className = "", onClick, primary = true, icon: Icon }: any) => (
  <button 
    onClick={onClick}
    className={`
      flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all transform active:scale-95 shadow-lg
      ${primary ? 'bg-primary text-white hover:bg-primary-dark shadow-primary/20' : 'bg-white text-primary border-2 border-primary hover:bg-bg-main'}
      ${className}
    `}
  >
    {children}
    {Icon && <Icon className="w-5 h-5" />}
  </button>
);

const SectionHeading = ({ children, subtitle, light = false }: any) => (
  <div className="mb-12 text-center">
    {subtitle && (
      <span className={`text-sm font-bold tracking-widest uppercase mb-2 block ${light ? 'text-primary/60' : 'text-primary'}`}>
        {subtitle}
      </span>
    )}
    <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-secondary'}`}>
      {children}
    </h2>
  </div>
);

const Card = ({ children, className = "" }: any) => (
  <div className={`bg-white p-8 rounded-2xl shadow-sm border border-border-main transition-transform hover:-translate-y-1 ${className}`}>
    {children}
  </div>
);

const FadeIn = ({ children, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button after scrolling past hero
      setIsStickyVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const enrollNow = () => {
    window.open(SELAR_CHECKOUT_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-bg-main font-sans text-text-main selection:bg-primary/10 selection:text-primary">
      
      {/* --- Sticky CTA (Mobile Only) --- */}
      <AnimatePresence>
        {isStickyVisible && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-lg border-t border-border-main z-50 md:hidden flex justify-center"
          >
            <Button onClick={enrollNow} className="w-full max-w-sm">
              Enroll Now — {COURSE_PRICE_CURRENT}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Floating WhatsApp Button --- */}
      <a 
        href={WHATSAPP_URL} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-16 h-16 bg-[#25d366] rounded-full flex items-center justify-center text-white shadow-2xl z-[60] hover:scale-110 active:scale-95 transition-transform"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-white/10" />
      </a>

      {/* --- 1. HERO SECTION --- */}
      <header className="relative bg-secondary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 relative z-10">
          <div className="flex justify-between items-center mb-16">
            <div className="text-2xl font-black text-white uppercase tracking-tighter">SKALEARN<span className="text-primary">.</span></div>
            <div className="hidden md:flex gap-4">
              <span className="text-xs font-bold bg-white/10 px-4 py-1.5 rounded-full border border-white/5">LIFETIME ACCESS</span>
              <span className="text-xs font-bold bg-white/10 px-4 py-1.5 rounded-full border border-white/5 uppercase tracking-wider">High-Impact Bootcamp</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.05] tracking-tight">
                Master Data Analysis & <span className="text-primary">Get Hired.</span>
              </h1>
              <p className="text-xl md:text-2xl text-text-muted mb-10 max-w-xl leading-relaxed">
                Learn SQL, Power BI, Excel, and Python with real-world projects. Designed for beginners to career-switchers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button onClick={scrollToPricing} icon={ArrowRight}>
                  Enroll Now — {COURSE_PRICE_CURRENT}
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center text-white text-3xl pl-1 shadow-2xl cursor-pointer hover:bg-primary transition-colors">
                    ▶
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-xs md:text-sm text-white/60 italic">
                      Watch this 2-minute video to understand how it works
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </header>

      {/* --- 2. PROBLEM SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="The Struggle">Why Most Beginners Fail</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: XCircle, title: "Total Confusion", desc: "Drowning in YouTube tutorials with no clear starting point or finish line." },
              { icon: XCircle, title: "No Roadmap", desc: "Learning random tools without understanding how they connect in a real job." },
              { icon: XCircle, title: "Zero Real Skills", desc: "You 'know' the tools but can't build a report from scratch when it matters." },
              { icon: XCircle, title: "Learning != Earning", desc: "Studying for months but still failing interview tests and technical tasks." }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-xl bg-bg-main border border-border-main group hover:border-primary/20 transition-colors">
                  <item.icon className="w-10 h-10 text-primary opacity-20 mb-6 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-xl font-extrabold mb-4 text-secondary">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. SOLUTION SECTION --- */}
      <section className="py-24 bg-secondary text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-3 shadow-xl">
              <GraduationCap className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Introducing: The Comprehensive Data Analysis Bootcamp
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              We've structured everything you need into a step-by-step transformation journey. No more guessing. Just results.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "100% Practical & Beginner Friendly",
                "Self-Paced Learning (Lifetime Access)",
                "Real Industry-Standard Projects",
                "Community Support & Mentorship"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span className="font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- 4. WHAT YOU WILL LEARN --- */}
      <section className="py-24 bg-bg-main">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Curriculum">Master the Most In-Demand Skills</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, color: "blue", title: "Microsoft Excel", list: ["Data Cleaning", "Pivot Tables", "Advanced Formulas", "Dynamic Dashboards"] },
              { icon: Database, color: "indigo", title: "SQL Mastery", list: ["Relational Databases", "Complex Queries", "Joins & Subqueries", "Data Manipulation"] },
              { icon: PieChart, color: "emerald", title: "Power BI", list: ["Data Modeling", "DAX Formulas", "Interactive Viz", "Business Reporting"] },
              { icon: Code2, color: "amber", title: "Python for Data", list: ["Pandas & NumPy", "Matplotlib/Seaborn", "Automation", "Basic Scripting"] },
              { icon: Cpu, color: "purple", title: "AI Tools", list: ["ChatGPT for Analysis", "Code Interpreter", "Prompt Engineering", "Predictive Basics"] },
              { icon: Briefcase, color: "rose", title: "Soft Skills", list: ["Problem Solving", "Storytelling", "CV Optimization", "Portfolio Building"] },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <Card className="h-full">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-bg-main text-primary border border-border-main">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-4 text-secondary">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.list.map((li, i) => (
                      <li key={i} className="flex items-center gap-3 text-text-muted">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. HOW IT WORKS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="The Process">Your Path to Excellence</SectionHeading>
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-[4rem] left-[15%] right-[15%] h-0.5 bg-border-main" />
            
            <div className="grid lg:grid-cols-4 gap-12 relative">
              {[
                { step: "01", title: "Secure Access", desc: "Complete your one-time payment via our secure Selar checkout link." },
                { step: "02", title: "Join Telegram", desc: "Get instant automated access to our private Telegram channel with all lessons." },
                { step: "03", title: "Watch & Practice", desc: "Follow the structured video lessons and practice with provided datasets." },
                { step: "04", title: "Build Projects", desc: "Complete the capstone projects to build a professional portfolio." }
              ].map((item, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-bg-main border border-border-main rounded-full flex items-center justify-center mx-auto mb-8 font-black text-xl text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-secondary">{item.title}</h3>
                    <p className="text-text-muted leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. TOOLS SECTION --- */}
      <section className="py-20 bg-bg-main border-y border-border-main">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-10">Tools you will master</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {['Excel', 'SQL Server', 'Power BI', 'Python', 'Jupyter', 'ChatGPT'].map(tool => (
               <span key={tool} className="text-xl md:text-2xl font-black text-secondary tracking-tighter">{tool}</span>
             ))}
          </div>
        </div>
      </section>

      {/* --- 7. PROJECTS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Portfolio">Build Real-World Outcomes</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-secondary rounded-2xl overflow-hidden group border border-border-main">
                <div className="aspect-video relative overflow-hidden">
                  <img src="https://picsum.photos/seed/dashboard1/800/450" alt="Sales Dashboard" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-80" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Omnichannel Sales Analysis</h3>
                    <p className="text-white/60 text-sm">Interactive Power BI dashboard tracking KPIs and trend analysis.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-secondary rounded-2xl overflow-hidden group border border-border-main">
                <div className="aspect-video relative overflow-hidden">
                  <img src="https://picsum.photos/seed/dashboard2/800/450" alt="Business Case Study" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-80" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Customer Churn Prediction</h3>
                    <p className="text-white/60 text-sm">Python-based analysis identifying high-risk customer segments.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- 8. WHO THIS IS FOR --- */}
      <section className="py-24 bg-bg-main">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionHeading subtitle="Audience" className="text-left">Who Is This For?</SectionHeading>
              <div className="space-y-4">
                {[
                  { title: "Career Switchers", desc: "Moving from non-tech backgrounds into high-paying data roles." },
                  { title: "Final Year Students", desc: "Getting job-ready skills before leaving campus." },
                  { title: "Graduates/Job Seekers", desc: "Bridge the skill gap and stand out from thousands of applicants." },
                  { title: "Business Professionals", desc: "Managers and analysts who want to work faster with data." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-6 bg-white rounded-xl border border-border-main shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-secondary">{item.title}</h4>
                      <p className="text-text-muted text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* --- 9. WHO THIS IS NOT FOR --- */}
            <div>
              <SectionHeading subtitle="Exclusions" className="text-left">Who Is This NOT For?</SectionHeading>
              <div className="space-y-4">
                {[
                  { title: "Get-Rich-Quick Seekers", desc: "Data analysis requires focus and practice, not magic pushes of buttons." },
                  { title: "The 'Not-Ready-to-Implement' Group", desc: "If you aren't going to practice with the datasets, this isn't for you." },
                  { title: "Expert Data Scientists", desc: "This is a bootcamp for beginners and intermediate learners." },
                  { title: "People looking for Live Classes", desc: "This is a self-paced, flexible Telegram-based bootcamp." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-6 bg-white/50 rounded-xl border border-dashed border-border-main">
                    <XCircle className="w-6 h-6 text-text-muted opacity-40 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-secondary opacity-70">{item.title}</h4>
                      <p className="text-text-muted text-sm italic">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 10. TESTIMONIALS / AUTHORITY --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Expertise">Learn from Experience</SectionHeading>
          <div className="bg-secondary rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shrink-0 border-4 border-white/5 shadow-2xl">
              <img src="https://picsum.photos/seed/instructor/400/400" alt="Instructor" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
            </div>
            <div className="max-w-xl">
              <div className="inline-block bg-primary px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest mb-6">Course Instructor</div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">Led by Industry Professionals</h3>
              <p className="text-lg text-white/50 mb-8 leading-relaxed italic">
                "We don't just teach you formulas. We teach you how to think like an analyst, solve business problems, and communicate insights that drive decisions. Our goal is your transformation, not just your certificate."
              </p>
              <div className="flex items-center gap-4">
                <Linkedin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-bold">Skalearn Mentors</p>
                  <p className="text-white/40 text-sm">Sr. Data Analysts with 7+ years of exp.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 11. BONUSES SECTION --- */}
      <section className="py-24 bg-secondary text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-widest bg-primary/20 text-primary px-4 py-1.5 rounded-full mb-4 inline-block">Exclusive Bonuses</span>
            <h2 className="text-4xl md:text-5xl font-extrabold">Bonus Gifts Worth ₦45,000</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Database, title: "10+ Unique Datasets", text: "Practice with real-world messsy data from finance, sales, and HR." },
              { icon: FileText, title: "Data Analyst CV Template", text: "ATS-compliant template specifically designed for data roles." },
              { icon: LayoutDashboard, title: "Interview Prep Guide", text: "Compendium of 50+ common technical and behavioral questions." },
              { icon: Download, title: "SQL Cheat Sheet", text: "Quick reference for complex syntax you'll use daily." }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center h-full hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                  <p className="text-white/40 text-sm">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- 12. PRICING SECTION --- */}
      <section id="pricing" className="py-24 bg-bg-main relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Investment">One Small Step for Your Career</SectionHeading>
          <div className="max-w-md mx-auto relative">
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-1.5 rounded-full font-black text-xs z-10 shadow-lg">
                60% DISCOUNT TODAY ONLY
             </div>

             <div className="bg-secondary text-white rounded-[2rem] p-10 shadow-2xl border border-white/5 relative overflow-hidden flex flex-col items-center">
                <div className="text-center mb-10">
                  <p className="text-white/40 font-bold mb-4 uppercase tracking-[0.2em] text-[10px]">Full Course Access</p>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-xl text-white/30 line-through font-bold">{COURSE_PRICE_ORIGINAL}</span>
                    <span className="text-6xl font-black text-white tracking-tighter">{COURSE_PRICE_CURRENT}</span>
                  </div>
                  <p className="text-primary mt-4 font-bold text-sm tracking-tight">Early Bird Price — Ends Soon!</p>
                </div>

                <ul className="space-y-4 mb-10 w-full">
                  {[
                    "Self-paced Private Telegram",
                    "Lifetime Study Material",
                    "15+ Capstone Projects",
                    "Certificate of Completion",
                    "Bonus: CV & Interview Prep"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button onClick={enrollNow} className="w-full text-lg py-5 shadow-primary/20">
                  Enroll Now
                </Button>

                <p className="text-center text-white/30 text-[10px] mt-6 tracking-wide">
                  ONE-TIME PAYMENT • SECURE CHECKOUT BY SELAR
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* --- 13. GUARANTEE SECTION --- */}
      <section className="py-24 bg-bg-main pt-0">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-border-main rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <ShieldCheck className="w-16 h-16 text-accent shrink-0" />
            <div>
              <h3 className="text-xl font-extrabold mb-4 text-secondary">Our Iron-Clad Quality Guarantee</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                We are 100% confident in the value of this bootcamp. If you join and feel the quality isn't exactly as described, simply reach out within 48 hours for a prompt resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 14. FAQ SECTION --- */}
      <section className="py-24 bg-white border-t border-border-main">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-2xl font-black mb-12 text-center text-secondary uppercase tracking-tight">Quick FAQ</h3>
          <div className="space-y-4">
            {[
              { q: "Is it beginner friendly?", a: "Yes, we start from absolute zero basics of data and Excel." },
              { q: "How do I get access?", a: "Instantly via Telegram after payment confirmation." },
              { q: "Are there hardware requirements?", a: "Just a laptop and a desire to learn. A phone isn't sufficient for the technical tasks." },
              { q: "Will I get a certificate?", a: "Yes! After completing all modular projects and the final capstone." },
              { q: "How long is the access for?", a: "You get lifetime access. Learn at your own pace." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-bg-main rounded-xl border border-border-main overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm text-secondary hover:bg-slate-200/50 transition-colors"
                >
                  {faq.q}
                  {openFaq === idx ? <ChevronUp className="w-4 h-4 text-text-muted" /> : <ChevronDown className="w-4 h-4 text-text-muted" />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-text-muted text-sm leading-relaxed border-t border-border-main/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 15. FINAL CTA SECTION --- */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight">
            Master Data Analysis & <span className="opacity-60">Get Hired.</span>
          </h2>
          <Button onClick={scrollToPricing} white primary={false} className="mx-auto bg-white text-primary hover:bg-bg-main border-none px-12 py-5 text-xl">
             Enroll Now
          </Button>
          <div className="mt-10 flex items-center justify-center gap-6 text-[10px] font-extrabold uppercase tracking-widest text-white/60">
             <div className="flex items-center gap-2 font-black">LIFETIME ACCESS</div>
             <div className="w-1 h-1 bg-white/20 rounded-full" />
             <div className="flex items-center gap-2 font-black">SECURE CHECKOUT</div>
          </div>
        </div>
      </section>

      {/* --- 16. FOOTER --- */}
      <footer className="py-12 bg-bg-main text-text-muted border-t border-border-main">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-secondary font-black text-xl mb-1 tracking-tighter">SKALEARN<span className="text-primary">.</span></h3>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Empowering tech careers</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
              Chat on WhatsApp
            </a>
            <a href="mailto:support@skalearn.com" className="hover:text-primary transition-colors text-xs font-bold uppercase tracking-wider">
              support@skalearn.com
            </a>
          </div>
          <p className="text-[10px] font-medium opacity-60">
            &copy; {new Date().getFullYear()} SKALEARN. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}

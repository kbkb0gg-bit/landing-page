/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  Cpu, 
  Zap, 
  Terminal, 
  Share2, 
  ShieldCheck, 
  Smartphone, 
  ChevronRight,
  Menu,
  X,
  Code2,
  Box,
  Layers
} from 'lucide-react';

// Logo Component for a polished brand feel
const Logo = ({ className = "" }: { className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className={`flex items-center gap-3 group cursor-pointer ${className}`}
  >
    <div className="relative w-12 h-12 flex items-center justify-center">
      <img 
        src="/logo.png" 
        alt="Logo" 
        className="w-full h-full object-contain relative z-10" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          if (e.currentTarget.nextElementSibling) {
            (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
          }
        }}
      />
      <div style={{display: 'none'}} className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl items-center justify-center shadow-lg">
        <Terminal size={22} className="text-white" strokeWidth={3} />
      </div>
    </div>
    <div className="flex flex-col -gap-1">
      <span className="text-xl font-black tracking-tighter leading-none">
        Colab<span className="text-amber-500"> on Android</span>
      </span>
      <span className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-500">Cloud IDE</span>
    </div>
  </motion.div>
);

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const float = {
  animate: {
    y: [0, -20, 0],
    rotate: [-2, 0, -2],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    // Open the download link
    window.open("https://appcreator24.com/app4031207-q658v2", "_blank");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'bg-zinc-950/90 backdrop-blur-2xl border-b border-zinc-800/50 py-3' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {['Features', 'Editor', 'GPU'].map((item) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                whileHover={{ y: -3, color: "#f59e0b" }}
                className="text-sm font-black uppercase tracking-widest text-zinc-400 transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <motion.button 
              onClick={handleDownload}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(245, 158, 11, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 text-zinc-950 px-8 py-3 rounded-full text-sm font-black flex items-center gap-2 shadow-xl shadow-amber-500/20"
            >
              <Download size={18} strokeWidth={3} />
              Download Now
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-zinc-400 p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed inset-0 top-0 left-0 w-full h-screen bg-zinc-950 z-[49] flex flex-col items-center justify-center gap-12 px-6"
            >
              {['Features', 'Editor', 'GPU Access'].map((item, i) => (
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  key={item} 
                  href={`#${item.toLowerCase().split(' ')[0]}`} 
                  className="text-4xl font-black italic tracking-tighter" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { handleDownload(); setIsMenuOpen(false); }}
                className="w-full bg-amber-500 text-zinc-950 py-6 rounded-3xl font-black text-2xl flex items-center justify-center gap-4 shadow-2xl"
              >
                <Download size={28} strokeWidth={3} />
                Download Now
              </motion.button>
              <button 
                className="absolute top-8 right-6 text-zinc-500"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={32} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 md:pt-64 md:pb-48 overflow-hidden">
          {/* Ambient light effects */}
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-0 right-0 -mr-20 -mt-20 w-[900px] h-[900px] bg-amber-500/10 blur-[180px] rounded-full pointer-events-none" 
          />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-24">
            <div className="flex-1 text-center md:text-left z-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-black uppercase tracking-[0.2em] mb-10"
              >
                <motion.div
                  animate={{ scale: [1, 1.4, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap size={16} fill="currentColor" />
                </motion.div>
                Build 2.4.1 Stable Now Live
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="text-7xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter"
              >
                Code.<br />
                <span className="bg-gradient-to-r from-amber-400 via-white to-amber-500 bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">Anywhere.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-2xl md:text-3xl text-zinc-400 mb-14 max-w-xl leading-snug font-medium italic"
              >
                High-performance Python development on your Android device. Zero setup, infinite power.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start"
              >
                <motion.button 
                  onClick={handleDownload}
                  whileHover={{ scale: 1.05, y: -8, boxShadow: "0 30px 60px -15px rgba(245, 158, 11, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-amber-500 text-zinc-950 px-12 py-6 rounded-[2.5rem] font-black text-2xl flex items-center justify-center gap-4 shadow-2xl"
                >
                  <Download size={32} strokeWidth={4} />
                  Download Now
                </motion.button>
                <motion.a 
                  href="#features"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", scale: 1.05 }}
                  className="w-full sm:w-auto px-12 py-6 rounded-[2.5rem] font-black text-2xl bg-white/5 border border-white/10 transition-all flex items-center justify-center gap-3 group"
                >
                  Explore
                  <ChevronRight size={28} strokeWidth={3} className="group-hover:translate-x-3 transition-transform" />
                </motion.a>
              </motion.div>
            </div>

            <motion.div 
              variants={float}
              animate="animate"
              initial={{ opacity: 0, scale: 0.5, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, type: 'spring', bounce: 0.4 }}
              className="flex-1 w-full relative perspective-2000 mt-20 md:mt-0"
            >
              {/* Mock Mobile UI */}
              <motion.div 
                whileHover={{ rotateY: 15, rotateX: 10, scale: 1.02 }}
                className="relative w-[320px] h-[640px] md:w-[380px] md:h-[760px] bg-zinc-900 rounded-[4rem] border-[12px] border-zinc-800 shadow-[0_80px_150px_-30px_rgba(0,0,0,0.8)] overflow-hidden p-2 ease-out cursor-ns-resize mx-auto"
              >
                <div className="h-full w-full bg-zinc-950 rounded-[3.5rem] overflow-hidden flex flex-col relative">
                  {/* Phone Header */}
                  <div className="pt-12 px-8 flex items-center justify-between">
                    <span className="font-black text-base text-zinc-300">9:41</span>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-3 rounded-[4px] bg-zinc-800" />
                      <div className="w-6 h-3 rounded-[4px] bg-amber-500 animate-pulse" />
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="flex-1 px-6 pt-10 overflow-hidden">
                    <div className="flex items-center gap-4 mb-8">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                        className="p-3 bg-amber-500 rounded-2xl shadow-xl shadow-amber-500/30"
                      >
                        <Terminal size={24} className="text-zinc-950" strokeWidth={3} />
                      </motion.div>
                      <div>
                        <p className="text-sm font-black text-zinc-100 italic">Core_Engine.py</p>
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                          <p className="text-[11px] text-zinc-500 font-black uppercase tracking-widest">A100 GPU: CONNECTED</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-900/60 rounded-[2rem] p-6 font-mono text-[11px] border border-white/5 mb-8 backdrop-blur-md shadow-2xl">
                      <p className="text-zinc-600 mb-2">{"In [1]:"}</p>
                      <p className="text-amber-500 font-black">import <span className="text-white">torch</span></p>
                      <p className="text-amber-500 font-black">model = <span className="text-white italic">torch.hub.load(...)</span></p>
                      <p className="mt-4 text-zinc-600 mb-2">{"In [2]:"}</p>
                      <p className="text-zinc-200">device = <span className="text-blue-400 font-black">"cuda"</span> if <span className="text-amber-400">torch.cuda.is_available()</span> else <span className="text-blue-400">"cpu"</span></p>
                      <p className="text-zinc-400 mt-2"># Ready to train on cluster</p>
                    </div>

                    <div className="bg-zinc-900 border border-white/5 rounded-[2rem] p-6 shadow-inner">
                      <div className="flex justify-between items-center mb-4">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Backprop Stage</p>
                        <p className="text-xs text-amber-500 font-black">99.1% Opt</p>
                      </div>
                      <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ width: ['0%', '99.1%'] }}
                          transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
                          className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 bg-[length:200%_auto] animate-gradient" 
                        />
                      </div>
                      <div className="mt-6 flex gap-3">
                         <div className="flex-1 h-16 bg-zinc-800/20 rounded-2xl border border-white/5 animate-pulse" />
                         <div className="flex-1 h-16 bg-zinc-800/20 rounded-2xl border border-white/5 animate-pulse delay-150" />
                      </div>
                    </div>
                  </div>

                  {/* Floating Action Button */}
                  <div className="absolute bottom-10 right-10">
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 bg-amber-500 rounded-3xl shadow-[0_20px_40px_rgba(245,158,11,0.4)] flex items-center justify-center cursor-pointer"
                    >
                      <Share2 size={32} className="text-zinc-950" strokeWidth={4} />
                    </motion.div>
                  </div>
                </div>

                {/* Reflection effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-black/30 pointer-events-none rounded-[4rem] group-hover:opacity-50 transition-opacity" />
              </motion.div>

              {/* Backglow for the window */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-amber-500/10 blur-[150px] -z-10 rounded-[100%]" />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 border-y border-zinc-900 bg-zinc-950/30">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-16">
            {[
              { val: "5M+", label: "Collaborators" },
              { val: "128", label: "GB RAM Avail" },
              { val: "∞", label: "Containers" },
              { val: "0.1s", label: "Latency" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring' }}
                className="text-center group"
              >
                <p className="text-6xl md:text-7xl font-black text-white group-hover:text-amber-500 transition-all duration-500 mb-2 italic tracking-tighter leading-none">{stat.val}</p>
                <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.4em] mt-2 leading-relaxed">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-40 max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter italic">Pro Performance.</h2>
            <p className="text-amber-500 font-black uppercase tracking-[0.4em] text-sm mb-8">Architected for Android</p>
            <div className="h-2 w-32 bg-gradient-to-r from-amber-500 via-orange-600 to-amber-500 mx-auto rounded-full shadow-[0_0_20px_rgba(245,158,11,0.5)]" />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              { 
                icon: <Cpu className="text-blue-400" />, 
                title: "A100 Node Cluster", 
                desc: "High-density compute nodes accessible instantly. Scale from 1 to 100 GPUs with a single touch." 
              },
              { 
                icon: <Smartphone className="text-amber-400" />, 
                title: "Fluid Code UI", 
                desc: "A re-imagined editor for mobile. Predictive typing and gesture-based refactoring as standard." 
              },
              { 
                icon: <Share2 className="text-purple-400" />, 
                title: "Live Peer Sync", 
                desc: "Co-author notebooks in real-time. Full history tracking and instant conflict resolution." 
              },
              { 
                icon: <Terminal className="text-emerald-400" />, 
                title: "Native Root Shell", 
                desc: "SSH into your containers. Direct access to the kernel with full sudo privileges in sandbox." 
              },
              { 
                icon: <ShieldCheck className="text-rose-400" />, 
                title: "Air-Gapped Privacy", 
                desc: "Optional local execution mode. Your data never leaves the device for maximum security." 
              },
              { 
                icon: <Layers className="text-orange-400" />, 
                title: "Universal Mount", 
                desc: "Mount S3, GCS, Azure, and local storage simultaneously. Unified file system access." 
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="p-12 rounded-[3.5rem] bg-zinc-900/30 border border-zinc-800/50 hover:border-amber-500/50 transition-all group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3.5rem]" />
                <div className="w-20 h-20 rounded-3xl bg-zinc-800 flex items-center justify-center mb-10 border border-white/5 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all duration-700 shadow-xl group-hover:rotate-12">
                  {feature.icon}
                </div>
                <h3 className="text-3xl font-black mb-6 tracking-tight group-hover:text-amber-500 transition-colors uppercase italic">{feature.title}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed font-bold tracking-tight">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Action Showcase */}
        <section id="editor" className="py-40 bg-zinc-900/10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-32">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-7xl md:text-[10rem] font-black mb-12 leading-[0.8] tracking-tighter italic">Swift. <br />Lean.</h2>
              <div className="grid gap-12 mt-16">
                {[
                  { icon: <Zap size={32} />, title: "Hyper-Sync", desc: "Our proprietary binary diff protocol reduces sync bandwidth by 90%." },
                  { icon: <Code2 size={32} />, title: "Smart-Layers", desc: "Dynamic screen layouts that adapt to your currently used libraries." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 20 }}
                    className="flex gap-8 items-start p-8 rounded-[3rem] hover:bg-white/5 transition-all cursor-crosshair border border-transparent hover:border-white/5"
                  >
                    <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-amber-500 to-orange-600 flex-shrink-0 flex items-center justify-center text-zinc-950 shadow-2xl shadow-amber-500/30 mt-2">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-3xl font-black mb-4 tracking-tighter italic uppercase">{item.title}</h4>
                      <p className="text-zinc-400 text-xl font-bold leading-normal tracking-tight">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: 'spring' }}
              className="flex-1 w-full relative group"
            >
              <div className="aspect-[16/10] bg-zinc-950 rounded-[2rem] border-2 border-zinc-800 p-2 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] relative">
                <img 
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop" 
                  alt="Ultra Showcase" 
                  className="w-full h-full object-cover rounded-[1.5rem] opacity-40 transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 p-8 bg-zinc-900/90 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-2xl">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 bg-amber-500 rounded-[1rem] flex items-center justify-center">
                        <Cpu size={24} className="text-zinc-950" strokeWidth={3} />
                      </div>
                      <span className="font-black italic uppercase tracking-[0.3em] text-xs">System Status</span>
                   </div>
                   <div className="space-y-4">
                      {[
                        { label: "GPU VRAM", val: "94%", color: "bg-amber-500" },
                        { label: "CPU Usage", val: "22%", color: "bg-blue-500" },
                        { label: "Network", val: "10Gbps", color: "bg-emerald-500" }
                      ].map((item, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-500">
                            <span>{item.label}</span>
                            <span className="text-zinc-200">{item.val}</span>
                          </div>
                          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: item.val }} transition={{ delay: 0.5 + i * 0.1 }} className={`h-full ${item.color}`} />
                          </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-52 px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[5rem] bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-20 md:p-40 text-center relative overflow-hidden group"
          >
             <div className="relative z-10">
                <motion.h2 
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-7xl md:text-[12rem] font-black mb-12 tracking-tighter text-white italic leading-none"
                >
                  GET IT NOW.
                </motion.h2>
                <motion.p 
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-2xl md:text-4xl text-zinc-500 font-bold mb-20 leading-tight max-w-4xl mx-auto"
                >
                  Don't let your compute sit idle. Take your research anywhere with the official Colab on Android build.
                </motion.p>
                
                <div className="flex flex-col md:flex-row gap-8 justify-center w-full max-w-3xl mx-auto">
                  <motion.button 
                    onClick={handleDownload}
                    whileHover={{ scale: 1.05, y: -10, boxShadow: "0 40px 80px -20px rgba(245, 158, 11, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-amber-500 text-zinc-950 px-16 py-8 rounded-[3rem] font-black text-3xl flex items-center justify-center gap-5 transition-all shadow-2xl"
                  >
                    <Download size={40} strokeWidth={4} />
                    Download
                  </motion.button>
                  <motion.button 
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", scale: 1.05 }}
                    className="flex-1 border-4 border-white/20 text-white px-16 py-8 rounded-[3rem] font-black text-3xl transition-all uppercase italic tracking-tighter"
                  >
                    Changelog
                  </motion.button>
                </div>
                
                <p className="mt-16 text-zinc-700 font-black text-sm uppercase tracking-[0.6em]">Signed & Verified Binary 2026</p>
             </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-40 border-t border-zinc-900 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-24">
          <div className="col-span-1 md:col-span-2">
             <Logo className="mb-12 scale-125 origin-left" />
            <p className="text-zinc-500 max-w-md text-xl font-bold leading-relaxed tracking-tight italic">
              Empowering the next billion researchers with the power of cloud acceleration, directly on their mobile hardware.
            </p>
          </div>
          <div>
            <h4 className="font-black text-amber-500 mb-12 uppercase tracking-[0.5em] text-xs">Ecosystem</h4>
            <ul className="space-y-8 text-lg font-black text-zinc-500 uppercase tracking-tighter italic">
              <li><motion.a whileHover={{ x: 10, color: "#fff" }} href="#" className="transition-all">Research</motion.a></li>
              <li><motion.a whileHover={{ x: 10, color: "#fff" }} href="#" className="transition-all">Pro Tier</motion.a></li>
              <li><motion.a whileHover={{ x: 10, color: "#fff" }} href="#" className="transition-all">Security</motion.a></li>
              <li><motion.a whileHover={{ x: 10, color: "#fff" }} href="#" className="transition-all">Contact</motion.a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-amber-500 mb-12 uppercase tracking-[0.5em] text-xs">Legal</h4>
            <ul className="space-y-8 text-lg font-black text-zinc-500 uppercase tracking-tighter italic">
              <li><motion.a whileHover={{ x: 10, color: "#fff" }} href="#" className="transition-all">Privacy</motion.a></li>
              <li><motion.a whileHover={{ x: 10, color: "#fff" }} href="#" className="transition-all">Terms</motion.a></li>
              <li><motion.a whileHover={{ x: 10, color: "#fff" }} href="#" className="transition-all">OSS</motion.a></li>
              <li><motion.a whileHover={{ x: 10, color: "#fff" }} href="#" className="transition-all">Support</motion.a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
            <p className="text-zinc-700 text-[10px] font-black tracking-[0.8em] uppercase text-center md:text-left">
              © 2026 Colab on Android. Built for the future of dev.
            </p>
          <div className="flex gap-12 items-center">
            {['TW', 'GH', 'DC'].map(social => (
              <motion.a 
                key={social}
                whileHover={{ y: -5, color: "#f59e0b" }}
                href="#" 
                className="text-sm font-black tracking-widest text-zinc-700 transition-colors"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

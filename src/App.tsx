import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Heart,
  CheckCircle2
} from 'lucide-react';
import { 
  APP_NAME, 
  SLOGAN, 
  DESCRIPTION, 
  FEATURES, 
  STEPS, 
  TESTIMONIALS, 
  FAQS 
} from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src="input_file_0.png" alt="Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">{APP_NAME}</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-pink-500 transition-colors">Функции</a>
          <a href="#how-it-works" className="hover:text-pink-500 transition-colors">Как это работает</a>
          <a href="#reviews" className="hover:text-pink-500 transition-colors">Отзывы</a>
          <a href="#faq" className="hover:text-pink-500 transition-colors">FAQ</a>
        </div>

        <a 
          href="https://www.rustore.ru/catalog/app/com.heed.periodility"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all active:scale-95"
        >
          <Download className="w-4 h-4" />
          Скачать в RuStore
        </a>

        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4 text-slate-600 font-medium">
              <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Функции</a>
              <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>Как это работает</a>
              <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)}>Отзывы</a>
              <a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
              <a 
                href="https://www.rustore.ru/catalog/app/com.heed.periodility"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-700 text-white p-3 rounded-xl"
              >
                <Download className="w-4 h-4" />
                Скачать {APP_NAME}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, centered = true, light = false }: { title: string, subtitle: string, centered?: boolean, light?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {title}
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-lg max-w-2xl mx-auto ${light ? 'text-emerald-100' : 'text-slate-500'}`}
    >
      {subtitle}
    </motion.p>
  </div>
);

const FeatureCard = ({ feature, index }: { feature: any, index: number, key?: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="p-8 bg-white rounded-3xl border border-slate-100 hover:border-emerald-200 transition-all hover:shadow-xl hover:shadow-emerald-500/5 group"
  >
    <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      <feature.icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
    <p className="text-slate-500 leading-relaxed">{feature.description}</p>
  </motion.div>
);

const FAQItem = ({ faq }: { faq: any, key?: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0 overflow-hidden">
      <button 
        className="w-full py-6 flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors">{faq.question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="pb-6 text-slate-500 leading-relaxed"
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAF6] font-sans selection:bg-emerald-100 selection:text-emerald-800">
      <div className="absolute top-0 left-0 right-0 h-[800px] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-100/50 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-50/50 blur-[120px]" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>Бесплатно в RuStore</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight"
            >
              {SLOGAN}<span className="text-emerald-700">.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed mx-auto md:mx-0"
            >
              {DESCRIPTION}
            </motion.p>
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a 
                href="https://www.rustore.ru/catalog/app/com.heed.periodility"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-800 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-900 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-200 active:scale-95"
              >
                <Download className="w-5 h-5" />
                Скачать в RuStore
              </a>
              <a 
                href="#features"
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                Узнать больше
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] p-4 bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              <img 
                src="/input_file_4.png" 
                alt="My Cycle App Hero" 
                className="w-full h-full object-cover rounded-[2rem]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating UI segments */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <ShieldCheck className="text-emerald-700 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Безопасность</p>
                <p className="text-sm font-bold text-slate-900">Ваши данные — ваши!</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Забудьте о сюрпризах" 
            subtitle="Мы знаем, как важно чувствовать уверенность и контроль." 
            light={true}
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/input_file_7.png" 
                alt="Accurate forecast" 
                className="rounded-3xl shadow-lg w-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-8 order-1 md:order-2">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shadow-sm text-emerald-300">
                  <X className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Нерегулярность?</h4>
                  <p className="text-emerald-100/70">Больше никаких неожиданностей. Календарь подстраивается под ваши персональные данные.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shadow-sm text-emerald-300">
                  <X className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Забываете даты?</h4>
                  <p className="text-emerald-100/70">Вся история в одном месте. Введите данные один раз и получайте точные прогнозы.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shadow-sm text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Решение в приложении</h4>
                  <p className="text-emerald-100/70">Мы объединили медицинскую логику и понятный интерфейс для вашей гармонии.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Всё необходимое в одном месте" 
            subtitle="Интуитивно понятные инструменты для ежедневного трекинга и долгосрочного анализа." 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <FeatureCard key={i} index={i} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works (Step by Step) */}
      <section id="how-it-works" className="py-24 bg-[#F1F5EE] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Ваш путь к осознанности" 
            subtitle="Всего 4 шага к полному пониманию своего цикла." 
          />
          <div className="grid md:grid-cols-4 gap-8 relative text-slate-800">
            <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-slate-200" />
            {STEPS.map((step, i) => (
              <div key={i} className="relative pt-12">
                <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-white flex items-center justify-center text-xl font-black mb-6 absolute top-0 left-0 shadow-lg shadow-emerald-500/20">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Понятный интерфейс" 
            subtitle="Современный и чистый дизайн, созданный специально для удобства женщин." 
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            <motion.div 
              whileHover={{ y: -10 }}
              className="rounded-[2.5rem] overflow-hidden border-8 border-slate-900 shadow-2xl aspect-[9/16]"
            >
              <img 
                src="/input_file_6.png" 
                alt="App Screenshot 1" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="hidden md:block rounded-[2.5rem] overflow-hidden border-8 border-slate-900 shadow-2xl aspect-[9/16]"
            >
              <img 
                src="/input_file_1.png" 
                alt="App Screenshot 2" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="rounded-[2.5rem] overflow-hidden border-8 border-slate-900 shadow-2xl aspect-[9/16]"
            >
              <img 
                src="/input_file_2.png" 
                alt="App Screenshot 3" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Отзывы наших пользователей" 
            subtitle="Реальные истории женщин, которые выбрали стабильность и прогнозируемость." 
          />
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-emerald-100" />
                  <div>
                    <h5 className="font-bold text-slate-900">{t.name}</h5>
                    <p className="text-sm text-slate-400">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 italic">"{t.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 border-t border-emerald-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeader 
            title="Частые вопросы" 
            subtitle="Отвечаем на то, что вас волнует." 
          />
          <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-sm">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-200">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-8">Планируйте своё <br/> будущее с уверенностью</h2>
            <p className="text-xl text-emerald-100 mb-12 max-w-xl mx-auto opacity-90">
              Присоединяйтесь к тысячам пользователей "{APP_NAME}" и обретите контроль над своим здоровьем.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.rustore.ru/catalog/app/com.heed.periodility"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-800 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95"
              >
                <Download className="w-6 h-6" />
                Скачать в RuStore
              </a>
            </div>
            <p className="mt-8 text-sm text-emerald-200 font-medium opacity-70">
              Безопасно | Приватно | Android
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="input_file_0.png" alt="Footer Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <span className="text-xl font-bold text-slate-900">{APP_NAME}</span>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-400">
              <a href="mailto:heed.dev@yandex.ru" className="hover:text-emerald-700 flex items-center gap-2">
                <Heart className="w-4 h-4" />
                heed.dev@yandex.ru
              </a>
              <a href="#" className="hover:text-emerald-700">Поддержка</a>
              <a href="#" className="hover:text-emerald-700">Политика</a>
              <a href="#" className="hover:text-emerald-700">Условия</a>
            </div>

            <p className="text-sm text-slate-400">
              © 2026 {APP_NAME}. С заботой о вашем здоровье.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}


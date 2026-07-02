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
  CheckCircle2,
  Brain,
  Activity,
  Apple,
  Lock,
  Calendar as CalendarIcon,
  Smile,
  Clock,
  Sparkles,
  ChevronRight,
  RotateCcw,
  Check,
  Info,
  Sliders,
  HelpCircle
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

// @ts-ignore
import mockup1 from './assets/images/period_tracker_mockup_1_1782996017430.jpg';
// @ts-ignore
import mockup2 from './assets/images/period_tracker_mockup_2_1782996033318.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-stone-50/90 backdrop-blur-md py-4 border-b border-stone-200/50 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-rose-500 rounded-2xl text-white font-display font-bold text-xl shadow-md shadow-rose-500/20">
            М
          </div>
          <span className="text-2xl font-sans font-extrabold tracking-tight text-stone-900">
            {APP_NAME}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-600">
          <a href="#phases" className="hover:text-rose-600 transition-colors">Фазы цикла</a>
          <a href="#calculator" className="hover:text-rose-600 transition-colors">Калькулятор</a>
          <a href="#features" className="hover:text-rose-600 transition-colors">Преимущества</a>
          <a href="#logger-demo" className="hover:text-rose-600 transition-colors">Дневник симптомов</a>
          <a href="#reviews" className="hover:text-rose-600 transition-colors">Отзывы экспертов</a>
          <a href="#faq" className="hover:text-rose-600 transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center">
          <a 
            href="https://www.rustore.ru/catalog/app/com.heed.periodility"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-stone-950/10 transition-all hover:scale-[1.02] active:scale-95"
          >
            <Download className="w-4 h-4" />
            Скачать
          </a>
        </div>

        <button 
          className="md:hidden text-stone-800 p-2 hover:bg-stone-100 rounded-xl transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-stone-50 border-t border-stone-200 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4 text-stone-700 font-semibold">
              <a href="#phases" className="hover:text-rose-600 py-2 border-b border-stone-200/40" onClick={() => setIsMobileMenuOpen(false)}>Фазы цикла</a>
              <a href="#calculator" className="hover:text-rose-600 py-2 border-b border-stone-200/40" onClick={() => setIsMobileMenuOpen(false)}>Калькулятор</a>
              <a href="#features" className="hover:text-rose-600 py-2 border-b border-stone-200/40" onClick={() => setIsMobileMenuOpen(false)}>Преимущества</a>
              <a href="#logger-demo" className="hover:text-rose-600 py-2 border-b border-stone-200/40" onClick={() => setIsMobileMenuOpen(false)}>Дневник симптомов</a>
              <a href="#reviews" className="hover:text-rose-600 py-2 border-b border-stone-200/40" onClick={() => setIsMobileMenuOpen(false)}>Отзывы экспертов</a>
              <a href="#faq" className="hover:text-rose-600 py-2 border-b border-stone-200/40" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
              <a 
                href="https://www.rustore.ru/catalog/app/com.heed.periodility"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-rose-500 text-white p-3.5 rounded-xl text-base font-bold shadow-lg shadow-rose-500/10 mt-2"
              >
                <Download className="w-4 h-4" />
                Скачать бесплатно
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, badge, centered = true }: { title: string, subtitle: string, badge?: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
    {badge && (
      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase mb-3 bg-rose-500/10 text-rose-600 border border-rose-500/20">
        {badge}
      </span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-display font-extrabold text-stone-900 mb-4 tracking-tight leading-tight"
    >
      {title}
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-base md:text-lg text-stone-600 leading-relaxed"
    >
      {subtitle}
    </motion.p>
  </div>
);

export default function App() {
  // Dynamic App Version State fetched from RuStore
  const [appVersion, setAppVersion] = useState<string>("4.8.1");

  useEffect(() => {
    fetch("/api/rustore-version")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.version) {
          setAppVersion(data.version);
        }
      })
      .catch((err) => {
        console.error("Failed to load RuStore app version:", err);
      });
  }, []);

  // Phase Navigator State
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  
  // Interactive Calculator State
  const [cycleLength, setCycleLength] = useState<number>(28);
  const [periodLength, setPeriodLength] = useState<number>(5);
  const [lastPeriodStart, setLastPeriodStart] = useState<string>('2026-06-25');
  const [calcResult, setCalcResult] = useState<any>(null);

  // Health log simulator state
  const [selectedLog, setSelectedLog] = useState<string>('');

  const cyclePhases = [
    {
      name: "Менструация",
      days: "Дни 1–5",
      hormones: { estrogen: 10, progesterone: 5, lh: 15 },
      desc: "Уровень половых гормонов на самом низком уровне. Тело очищается и обновляется. В это время естественным образом падает выносливость, поэтому важно снизить физическую нагрузку.",
      fitness: "Легкая растяжка, инь-йога, неторопливая ходьба на свежем воздухе. Полностью исключите тяжелые силовые нагрузки.",
      diet: "Теплые супы, продукты, богатые железом (печень, чечевица, шпинат), и магний для уменьшения спазмов.",
      hormoneText: "Эстроген и Прогестерон на минимуме",
      accentBg: "bg-rose-50 border-rose-200 text-rose-700 dark:bg-rose-950/20 dark:border-rose-900",
      accentColor: "text-rose-500"
    },
    {
      name: "Фолликулярная фаза",
      days: "Дни 6–13",
      hormones: { estrogen: 65, progesterone: 12, lh: 35 },
      desc: "Растет уровень эстрогена. Кожа становится сияющей, настроение поднимается, возвращается уверенность в себе и жажда общения. Метаболизм ускоряется, организм полон сил.",
      fitness: "Идеально подходит для интенсивного кардио, функциональных тренировок и изучения новых видов спорта.",
      diet: "Квашеная капуста, брокколи, зелень и легкие растительные жиры (авокадо, орехи) для поддержки созревания фолликула.",
      hormoneText: "Эстроген стремительно растет",
      accentBg: "bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/20 dark:border-emerald-900",
      accentColor: "text-emerald-500"
    },
    {
      name: "Овуляция",
      days: "День 14",
      hormones: { estrogen: 95, progesterone: 35, lh: 98 },
      desc: "Пик эстрогена и лютеинизирующего гормона (ЛГ). Яйцеклетка готова к оплодотворению. Период наивысшей фертильности, максимального либидо, красноречия и магнетизма.",
      fitness: "Пик силы! Самое время для силовых рекордов, высокоинтенсивного интервального фитнеса (HIIT) и силовых тренировок.",
      diet: "Продукты с высоким содержанием клетчатки, семена кунжута, ягоды и легкие белки для поддержки метаболизма гормонов печенью.",
      hormoneText: "Абсолютный пик Эстрогена и ЛГ",
      accentBg: "bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-950/20 dark:border-amber-900",
      accentColor: "text-amber-500"
    },
    {
      name: "Лютеиновая фаза",
      days: "Дни 15–28",
      hormones: { estrogen: 40, progesterone: 85, lh: 10 },
      desc: "Доминирует прогестерон — гормон спокойствия и гнездования. К концу фазы может проявиться ПМС, задержка жидкости в организме и повышенная чувствительность нервной системы.",
      fitness: "Умеренные пилатес, растяжка и силовые тренировки с собственным весом. Снижайте интенсивность по мере приближения цикла.",
      diet: "Сложные углеводы (гречка, бурый рис, батат), чтобы стабилизировать уровень сахара и исключить вспышки агрессии и тяги к сладкому.",
      hormoneText: "Доминирует успокаивающий Прогестерон",
      accentBg: "bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-950/20 dark:border-indigo-900",
      accentColor: "text-indigo-500"
    }
  ];

  const logOptions = [
    { id: 'cramps', label: 'Спазмы в животе', tip: 'Для облегчения спазмов примите теплую ванну, добавьте в рацион магний и выпейте настой ромашки. Легкие поглаживания живота по часовой стрелке помогут снять тонус.' },
    { id: 'energy', label: 'Прилив энергии', tip: 'Прекрасный день для планирования сложных дел, силовых тренировок в спортзале или публичных выступлений. Ваше тело на пике возможностей!' },
    { id: 'sweet', label: 'Тяга к сладкому', tip: 'Это связано со снижением уровня эстрогена. Вместо простых сахаров съешьте горький шоколад (от 70% какао), финики или запеченный батат со корицей.' },
    { id: 'calm', label: 'Полное спокойствие', tip: 'Высокий уровень прогестерона дарит состояние гармонии. Идеальное время для медитации, чтения книг, подведения итогов месяца или глубокого сна.' },
    { id: 'acne', label: 'Высыпания на коже', tip: 'Повышенная активность сальных желез перед менструацией — естественный процесс. Уделите особое внимание мягкому очищению кожи и сократите молочные продукты на 3 дня.' }
  ];

  // Predict Cycle logic
  useEffect(() => {
    if (lastPeriodStart) {
      const baseDate = new Date(lastPeriodStart);
      if (!isNaN(baseDate.getTime())) {
        const nextPeriod = new Date(baseDate);
        nextPeriod.setDate(baseDate.getDate() + cycleLength);

        const ovulation = new Date(baseDate);
        ovulation.setDate(baseDate.getDate() + (cycleLength - 14));

        const fertStart = new Date(ovulation);
        fertStart.setDate(ovulation.getDate() - 4);

        const fertEnd = new Date(ovulation);
        fertEnd.setDate(ovulation.getDate() + 2);

        const format = (d: Date) => d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
        
        setCalcResult({
          nextPeriod: format(nextPeriod),
          ovulation: format(ovulation),
          fertility: `${format(fertStart)} — ${format(fertEnd)}`,
          periodDays: periodLength,
          cycleDays: cycleLength
        });
      }
    }
  }, [cycleLength, periodLength, lastPeriodStart]);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-rose-500/20 selection:text-stone-900">
      
      {/* Accent blobs */}
      <div className="absolute top-0 left-0 right-0 h-[800px] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-peach-200/40 blur-[130px]" />
        <div className="absolute top-[20%] left-[-15%] w-[50%] h-[50%] rounded-full bg-rose-100/50 blur-[110px]" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 relative z-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span>Версия {appVersion} • Полное обновление дизайна</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-stone-900 mb-6 leading-[1.1] tracking-tight"
            >
              Узнай секреты своего тела.
              <br />
              <span className="text-rose-500 font-display italic font-medium">
                {SLOGAN.split('.')[0]}
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-stone-600 mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal"
            >
              {DESCRIPTION}
            </motion.p>

            {/* Platform Badges */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.15 }}
               className="flex flex-wrap gap-4 justify-center lg:justify-start items-center mb-10"
            >
              <a 
                href="https://www.rustore.ru/catalog/app/com.heed.periodility"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl shadow-stone-950/15 transition-all duration-200 flex items-center justify-center gap-3 active:scale-95"
              >
                <Download className="w-5 h-5" />
                <span>Скачать для Android ({appVersion})</span>
              </a>
              <a 
                href="#calculator"
                className="bg-white border border-stone-200 text-stone-700 hover:text-stone-900 hover:border-stone-300 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 shadow-sm"
              >
                <CalendarIcon className="w-5 h-5 text-rose-500" />
                <span>Рассчитать мой цикл</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-6 border-t border-stone-200 pt-8 max-w-lg mx-auto lg:mx-0 text-left"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-stone-900">4.9 ★</p>
                <p className="text-xs text-stone-500 mt-1 uppercase font-bold tracking-wider">Рейтинг пользователей</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-stone-900">100%</p>
                <p className="text-xs text-stone-500 mt-1 uppercase font-bold tracking-wider">Конфиденциально</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-stone-900">Без</p>
                <p className="text-xs text-stone-500 mt-1 uppercase font-bold tracking-wider">Рекламы и спама</p>
              </div>
            </motion.div>
          </div>
          
          {/* Hero Smartphone Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Soft pink glow behind screen */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-200/50 rounded-full blur-[80px]" />
            
            {/* Phone Shell */}
            <div className="relative z-10 border-[10px] border-stone-900 rounded-[3.2rem] shadow-2xl overflow-hidden aspect-[9/19] w-full max-w-[280px] bg-stone-950">
              {/* Dynamic Island */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-stone-900 rounded-full z-30" />

              {/* Mobile App View with Mockup 1 */}
              <div className="w-full h-full relative group">
                <img 
                  src={mockup1} 
                  alt="Мой цикл приложение" 
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Simulated Floating Tip inside the phone frame */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-6 left-4 right-4 bg-white/95 backdrop-blur-md border border-stone-200/50 p-3 rounded-2xl flex items-center gap-3 shadow-xl"
                >
                  <div className="w-8 h-8 rounded-xl bg-rose-500 flex items-center justify-center text-white">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold text-stone-900 leading-tight">День 14 • Овуляция</h5>
                    <p className="text-[9px] text-rose-500 font-bold">Фертильное окно открыто</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400 ml-auto" />
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Interactive Phase Explorer */}
      <section id="phases" className="py-24 px-6 bg-stone-100 border-t border-b border-stone-200/60 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            badge="Гормональный путеводитель"
            title="Четыре фазы твоего цикла" 
            subtitle="Каждый день твой гормональный фон меняется, влияя на самочувствие, настроение и биоритмы. Нажми на фазу, чтобы узнать, как подстроить жизнь под биоритмы организма." 
          />

          <div className="grid lg:grid-cols-12 gap-8 items-stretch mt-12">
            
            {/* Phase Tabs Selector (Left) */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              {cyclePhases.map((phase, idx) => {
                const isActive = activePhaseIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActivePhaseIndex(idx)}
                    className={`p-5 rounded-2xl text-left border transition-all duration-300 group flex items-center justify-between ${
                      isActive 
                        ? 'bg-white border-stone-300 shadow-md translate-x-1.5' 
                        : 'bg-stone-50/60 border-stone-200/60 hover:bg-white hover:border-stone-300'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                        {phase.days}
                      </span>
                      <h4 className="text-lg font-bold text-stone-900 group-hover:text-rose-500 transition-colors">
                        {phase.name}
                      </h4>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                      isActive ? 'bg-rose-50 border-rose-200 text-rose-500' : 'bg-white border-stone-200 text-stone-400 group-hover:text-stone-600'
                    }`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Phase Details Screen (Right) */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhaseIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-stone-200 rounded-3xl p-8 sm:p-10 shadow-sm h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Header line */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-6 mb-6">
                      <div>
                        <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-rose-500 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                          {cyclePhases[activePhaseIndex].days}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 mt-2">
                          {cyclePhases[activePhaseIndex].name}
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-stone-400 font-bold uppercase block">Состояние гормонов</span>
                        <span className="text-sm font-bold text-stone-700">{cyclePhases[activePhaseIndex].hormoneText}</span>
                      </div>
                    </div>

                    <p className="text-stone-600 text-base leading-relaxed mb-8">
                      {cyclePhases[activePhaseIndex].desc}
                    </p>

                    {/* Hormone level visualization */}
                    <div className="space-y-4 bg-stone-50 p-6 rounded-2xl border border-stone-100 mb-8">
                      <h5 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Оценочный уровень гормонов:</h5>
                      
                      {/* Estrogen */}
                      <div>
                        <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                          <span>Эстроген (Энергия и сияние кожи)</span>
                          <span className="font-mono">{cyclePhases[activePhaseIndex].hormones.estrogen}%</span>
                        </div>
                        <div className="w-full h-2 bg-stone-200/60 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${cyclePhases[activePhaseIndex].hormones.estrogen}%` }}
                            transition={{ duration: 0.5 }}
                            className="h-full bg-rose-400 rounded-full" 
                          />
                        </div>
                      </div>

                      {/* Progesterone */}
                      <div>
                        <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                          <span>Прогестерон (Спокойствие и сон)</span>
                          <span className="font-mono">{cyclePhases[activePhaseIndex].hormones.progesterone}%</span>
                        </div>
                        <div className="w-full h-2 bg-stone-200/60 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${cyclePhases[activePhaseIndex].hormones.progesterone}%` }}
                            transition={{ duration: 0.5 }}
                            className="h-full bg-indigo-400 rounded-full" 
                          />
                        </div>
                      </div>

                      {/* LH */}
                      <div>
                        <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                          <span>ЛГ (Индикатор овуляции)</span>
                          <span className="font-mono">{cyclePhases[activePhaseIndex].hormones.lh}%</span>
                        </div>
                        <div className="w-full h-2 bg-stone-200/60 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${cyclePhases[activePhaseIndex].hormones.lh}%` }}
                            transition={{ duration: 0.5 }}
                            className="h-full bg-amber-400 rounded-full" 
                          />
                        </div>
                      </div>
                    </div>

                    {/* Fitness & Diet Advice Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 pt-2">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                          <Activity className="w-5 h-5" />
                        </div>
                        <div>
                          <h6 className="text-sm font-bold text-stone-900 mb-1">Нагрузка и Фитнес</h6>
                          <p className="text-xs text-stone-500 leading-normal">{cyclePhases[activePhaseIndex].fitness}</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                          <Apple className="w-5 h-5" />
                        </div>
                        <div>
                          <h6 className="text-sm font-bold text-stone-900 mb-1">Нутрициология и Меню</h6>
                          <p className="text-xs text-stone-500 leading-normal">{cyclePhases[activePhaseIndex].diet}</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                    <span className="flex items-center gap-1.5 font-bold text-rose-500">
                      <Info className="w-3.5 h-3.5" />
                      Данные верифицированы медицинским консилиумом
                    </span>
                    <span>Урок 2: Эндокринная регуляция</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Cycle Calculator */}
      <section id="calculator" className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            badge="Интерактивный расчет"
            title="Рассчитай свой индивидуальный цикл" 
            subtitle="Введи средние параметры твоего организма и мгновенно оцени визуальную шкалу следующих фаз, даты фертильности и овуляции." 
          />

          <div className="grid lg:grid-cols-12 gap-12 items-stretch mt-12 bg-stone-50 border border-stone-200 rounded-[2.5rem] p-6 sm:p-10 shadow-sm">
            
            {/* Input params panel (Left) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-stone-900 mb-1">Средняя продолжительность цикла</h4>
                  <p className="text-stone-500 text-xs mb-4">Считается от первого дня менструации до первого дня следующей.</p>
                  <div className="flex items-center gap-4">
                    <input 
                      type="range" 
                      min="21" 
                      max="40" 
                      value={cycleLength} 
                      onChange={(e) => setCycleLength(Number(e.target.value))}
                      className="w-full accent-rose-500 cursor-pointer h-1.5 bg-stone-200 rounded-lg"
                    />
                    <span className="font-mono text-sm text-rose-600 font-extrabold min-w-[48px] text-right">{cycleLength} дн.</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-stone-900 mb-1">Длина менструации (периода)</h4>
                  <p className="text-stone-500 text-xs mb-4">Количество дней кровянистых выделений.</p>
                  <div className="flex items-center gap-4">
                    <input 
                      type="range" 
                      min="3" 
                      max="10" 
                      value={periodLength} 
                      onChange={(e) => setPeriodLength(Number(e.target.value))}
                      className="w-full accent-rose-500 cursor-pointer h-1.5 bg-stone-200 rounded-lg"
                    />
                    <span className="font-mono text-sm text-rose-600 font-extrabold min-w-[48px] text-right">{periodLength} дн.</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-stone-900 mb-1">Начало последнего цикла</h4>
                  <p className="text-stone-500 text-xs mb-3">Первый день твоих последних месячных.</p>
                  <input 
                    type="date" 
                    value={lastPeriodStart}
                    onChange={(e) => setLastPeriodStart(e.target.value)}
                    className="w-full bg-white border border-stone-200 rounded-xl p-3 text-stone-700 font-bold focus:outline-none focus:border-rose-500 text-sm"
                  />
                </div>
              </div>

              {/* Tips banner */}
              <div className="mt-8 p-4 rounded-2xl bg-rose-50/50 border border-rose-100 text-xs text-rose-700 flex gap-3">
                <Info className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Средняя норма длины цикла у женщин составляет от 24 до 35 дней. Колебания в пределах пары дней вполне естественны и могут зависеть от стресса, авиаперелетов или простуд.
                </p>
              </div>

            </div>

            {/* Visual dynamic timeline results (Right) */}
            <div className="lg:col-span-6 flex flex-col justify-between bg-white border border-stone-200/80 rounded-3xl p-6 sm:p-8">
              
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-stone-400 mb-6">Прогноз предстоящего цикла:</h4>
                
                {calcResult && (
                  <div className="space-y-6">
                    {/* Visual Horizontal Timeline Block */}
                    <div>
                      <div className="flex justify-between items-center text-xs text-stone-500 mb-2">
                        <span>Схематичный макет твоего следующего цикла ({calcResult.cycleDays} дн.)</span>
                        <span className="font-bold text-rose-500">100%</span>
                      </div>
                      
                      {/* Flex progress track */}
                      <div className="w-full h-8 rounded-xl overflow-hidden flex text-white font-bold text-[10px] shadow-inner">
                        {/* Menstruation phase */}
                        <div 
                          style={{ width: `${(calcResult.periodDays / calcResult.cycleDays) * 100}%` }}
                          className="bg-rose-400 h-full flex items-center justify-center cursor-help relative group"
                        >
                          <span>М</span>
                          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-[9px] py-1 px-2 rounded hidden group-hover:block whitespace-nowrap z-20">
                            Менструация: {calcResult.periodDays} дн.
                          </div>
                        </div>

                        {/* Follicular phase */}
                        <div 
                          style={{ width: `${((calcResult.cycleDays - calcResult.periodDays - 14) / calcResult.cycleDays) * 100}%` }}
                          className="bg-emerald-300 h-full flex items-center justify-center cursor-help relative group"
                        >
                          <span>Ф</span>
                          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-[9px] py-1 px-2 rounded hidden group-hover:block whitespace-nowrap z-20">
                            Фолликулярная фаза: {calcResult.cycleDays - calcResult.periodDays - 14} дн.
                          </div>
                        </div>

                        {/* Ovulation window */}
                        <div 
                          style={{ width: `${(5 / calcResult.cycleDays) * 100}%` }}
                          className="bg-amber-300 h-full flex items-center justify-center cursor-help relative group"
                        >
                          <span>О</span>
                          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-[9px] py-1 px-2 rounded hidden group-hover:block whitespace-nowrap z-20">
                            Фертильное окно: 5 дн.
                          </div>
                        </div>

                        {/* Luteal phase */}
                        <div 
                          style={{ width: `${(9 / calcResult.cycleDays) * 100}%` }}
                          className="bg-indigo-300 h-full flex items-center justify-center cursor-help relative group"
                        >
                          <span>Л</span>
                          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-[9px] py-1 px-2 rounded hidden group-hover:block whitespace-nowrap z-20">
                            Лютеиновая фаза: 9 дн.
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-3 justify-center mt-3 flex-wrap">
                        <div className="flex items-center gap-1 text-[10px] text-stone-500 font-semibold">
                          <span className="w-2.5 h-2.5 rounded bg-rose-400" /> Менструация
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-stone-500 font-semibold">
                          <span className="w-2.5 h-2.5 rounded bg-emerald-300" /> Фолликулярная
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-stone-500 font-semibold">
                          <span className="w-2.5 h-2.5 rounded bg-amber-300" /> Овуляция
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-stone-500 font-semibold">
                          <span className="w-2.5 h-2.5 rounded bg-indigo-300" /> Лютеиновая
                        </div>
                      </div>
                    </div>

                    {/* Results details cards */}
                    <div className="grid gap-3.5 pt-4">
                      
                      <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/10 flex justify-between items-center">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-rose-500 block">Следующие месячные</span>
                          <span className="text-base font-bold text-stone-950 mt-1 block">{calcResult.nextPeriod}</span>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center">
                          <CalendarIcon className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex justify-between items-center">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-amber-600 block">Пиковая овуляция</span>
                          <span className="text-base font-bold text-stone-950 mt-1 block">{calcResult.ovulation}</span>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center">
                          <Sparkles className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex justify-between items-center">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-emerald-600 block">Наилучшие дни для зачатия (фертильность)</span>
                          <span className="text-base font-bold text-stone-950 mt-1 block">{calcResult.fertility}</span>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                          <Heart className="w-5 h-5" />
                        </div>
                      </div>

                    </div>
                  </div>
                )}
                
              </div>

              {/* Direct call button for real app */}
              <a 
                href="https://www.rustore.ru/catalog/app/com.heed.periodility"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 bg-stone-900 hover:bg-stone-800 text-white font-bold p-4 rounded-2xl text-center text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Установить «Мой цикл» {appVersion} на телефон</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* App Core Capabilities / Features */}
      <section id="features" className="py-24 px-6 overflow-hidden bg-stone-100 border-t border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            badge="Возможности приложения"
            title="Каждая деталь продумана до мелочей" 
            subtitle="Полезные инструменты, разработанные с заботой о твоем комфорте и приватности. Никакого навязчивого визуального шума." 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-white rounded-3xl border border-stone-200/50 hover:border-rose-300 hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl group-hover:bg-rose-500/10 transition-colors" />
                
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-stone-900 mb-3">{feature.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Logs Simulator */}
      <section id="logger-demo" className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            badge="Практический симулятор"
            title="Дневник самочувствия в действии" 
            subtitle="Как это работает? Нажми на любой симптом или эмоцию ниже, чтобы увидеть, как интеллектуальный ассистент 'Мой цикл' мгновенно формирует персональную рекомендацию." 
          />

          <div className="max-w-4xl mx-auto bg-stone-50 border border-stone-200 rounded-[2.5rem] overflow-hidden p-6 sm:p-10 shadow-sm relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl" />
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-stone-200">
              <div>
                <h4 className="text-xl font-display font-bold text-stone-950">
                  Интерактивный логгер здоровья
                </h4>
                <p className="text-xs text-stone-500 mt-1">
                  Выберите маркер вашего текущего состояния, чтобы получить совет диетолога или гинеколога:
                </p>
              </div>

              {/* Counter details */}
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-stone-200 text-xs text-stone-600">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                <span>День 12 • Интеллектуальный совет</span>
              </div>
            </div>

            {/* Sim grid */}
            <div className="grid md:grid-cols-12 gap-8 pt-8 items-start">
              
              {/* Option Selector (6 cols) */}
              <div className="md:col-span-6 space-y-2.5">
                {logOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedLog(opt.id)}
                    className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-200 ${
                      selectedLog === opt.id 
                        ? 'bg-rose-500/10 border-rose-300 shadow-sm' 
                        : 'bg-white border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3.5 h-3.5 rounded-full border border-stone-300 flex items-center justify-center ${selectedLog === opt.id ? 'border-rose-500' : ''}`}>
                        {selectedLog === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />}
                      </div>
                      <span className="text-sm font-bold text-stone-800">{opt.label}</span>
                    </div>
                    
                    <span className="text-[10px] font-bold text-stone-400">Log +</span>
                  </button>
                ))}
              </div>

              {/* Advisor Response panel (6 cols) */}
              <div className="md:col-span-6 h-full min-h-[220px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {selectedLog ? (
                    <motion.div
                      key={selectedLog}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm"
                    >
                      <div className="flex items-center gap-2 text-rose-500 mb-3">
                        <Sparkles className="w-4 h-4 fill-current" />
                        <span className="text-xs font-extrabold uppercase tracking-widest">Совет ассистента:</span>
                      </div>
                      <p className="text-sm text-stone-700 leading-relaxed font-medium">
                        {logOptions.find(o => o.id === selectedLog)?.tip}
                      </p>
                      
                      <div className="mt-5 pt-4 border-t border-stone-100 flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-rose-50 border border-rose-200 text-[10px] font-bold text-rose-600 flex items-center justify-center">
                          A
                        </div>
                        <span className="text-[10px] text-stone-400 uppercase tracking-widest font-extrabold">Рекомендация диетолога О. Смирновой</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty-state"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-8 border border-dashed border-stone-200 rounded-3xl text-center text-stone-400 flex flex-col items-center justify-center"
                    >
                      <Heart className="w-8 h-8 text-stone-300 mb-3 animate-pulse" />
                      <p className="text-xs font-bold uppercase tracking-widest mb-1">Ожидание выбора</p>
                      <p className="text-xs text-stone-500 max-w-[200px]">Нажмите на симптом слева, чтобы сформировать живой совет.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Scientific/Medical Bento Grid */}
      <section className="py-24 px-6 bg-stone-50 border-t border-b border-stone-200/50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-8">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                Качество и стандарты
              </span>
              
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-stone-900 tracking-tight leading-tight">
                Доказательная медицина, а не догадки
              </h2>

              <p className="text-stone-600 text-base leading-relaxed">
                Мы создали этот трекер, отказавшись от ненаучной эзотерики и устаревших мифов. Все материалы, советы по питанию и тренировкам пишутся практикующими акушерами-гинекологами, эндокринологами и сертифицированными тренерами.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 font-black" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-stone-900">Интеграция с врачебной практикой</h5>
                    <p className="text-xs text-stone-500 mt-1">Экспортируй PDF-отчеты перед приемом, чтобы помочь своему врачу установить точную картину гормонального фона.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 font-black" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-stone-900">Локальное зашифрованное хранилище</h5>
                    <p className="text-xs text-stone-500 mt-1">Твои медицинские данные не улетают на внешние серверы. Все хранится в защищенной песочнице операционной системы твоего смартфона.</p>
                  </div>
                </div>
              </div>

              {/* Quote block */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm relative italic text-stone-600 text-sm leading-relaxed">
                <span className="text-3xl text-rose-200 font-display absolute top-1 left-3 select-none">“</span>
                <p className="relative z-10 pl-4">
                  Цикличность — это суперсила женщины, а не бремя. Понимание физиологических приливов и отливов эстрогена позволяет планировать карьеру, спорт и отношения с минимальным стрессом.
                </p>
              </div>

            </div>

            {/* Right Mockup Showcase Image 2 */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-100/40 rounded-full blur-[80px]" />
              
              <div className="relative border-[10px] border-stone-900 rounded-[3.2rem] shadow-2xl overflow-hidden aspect-[9/19] w-full max-w-[270px] bg-stone-950">
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-stone-900 rounded-full z-20" />
                <img 
                  src={mockup2} 
                  alt="Мой цикл календарь" 
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 px-6 bg-white border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            badge="Репутация и Отзывы"
            title="Доверие специалистов и пользователей" 
            subtitle="Нас ценят за профессиональный подход, конфиденциальность и отсутствие ядовито-розовых шаблонов." 
          />

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-stone-50 border border-stone-200 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  {/* Star rating */}
                  <div className="flex gap-1 mb-4 text-amber-400 text-lg">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  
                  <p className="text-stone-700 text-sm leading-relaxed italic mb-8">
                    «{review.text}»
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-stone-200/50">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">{review.name}</h4>
                    <p className="text-xs text-stone-500 mt-0.5">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-stone-100 relative">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            badge="Часто задаваемые вопросы"
            title="Остались вопросы? Ответы здесь" 
            subtitle="Мы собрали подробную информацию о принципах работы наших алгоритмов, безопасности хранения и бесплатной версии." 
          />

          <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            {FAQS.map((faq, i) => {
              const [isOpen, setIsOpen] = useState(false);
              return (
                <div key={i} className="border-b border-stone-100 py-2 last:border-0">
                  <button 
                    className="w-full py-5 flex items-center justify-between text-left group transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span className="text-base font-bold text-stone-900 group-hover:text-rose-500 transition-colors pr-4">{faq.question}</span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:border-rose-500 group-hover:text-rose-500 transition-all ${isOpen ? 'bg-rose-50 text-rose-500 border-rose-200' : ''}`}>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 text-stone-600 text-sm leading-relaxed max-w-[95%]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Download Callout Section */}
      <section className="py-24 px-6 bg-stone-900 text-white relative overflow-hidden">
        
        {/* Glow particles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-rose-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-rose-500/20 text-rose-400 border border-rose-500/30">
            Начни заботу о себе сегодня
          </span>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Твое тело заслуживает осознанности.
            <br />
            Скачай «Мой цикл» бесплатно.
          </h2>

          <p className="text-stone-300 text-base max-w-2xl mx-auto leading-relaxed">
            Присоединяйся к тысячам женщин, которые выбрали тактильный дизайн, доказательную медицину и абсолютную конфиденциальность данных без навязчивой рекламы.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a 
              href="https://www.rustore.ru/catalog/app/com.heed.periodility"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-500 hover:bg-rose-400 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl shadow-rose-500/20 transition-all active:scale-95 flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              <span>Скачать в RuStore (v{appVersion})</span>
            </a>
            <a 
              href="#calculator"
              className="bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white border border-stone-700 px-8 py-4 rounded-2xl font-bold text-base transition-all active:scale-95"
            >
              Рассчитать календарь онлайн
            </a>
          </div>

          <div className="flex justify-center gap-6 pt-6 flex-wrap text-stone-400 text-xs">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>FaceID & PIN-код защита</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Локальное шифрование</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>Соответствие GDPR</span>
            </div>
          </div>

        </div>
      </section>

      {/* Elegant Footer */}
      <footer className="bg-stone-950 text-stone-400 py-16 px-6 border-t border-stone-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-rose-500 rounded-xl text-white font-display font-bold text-lg">
                М
              </div>
              <span className="text-xl font-sans font-bold text-white tracking-tight">
                {APP_NAME}
              </span>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed">
              Элегантный трекер женского здоровья, построенный на принципах доказательной медицины и абсолютной конфиденциальности.
            </p>
          </div>

          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Навигация</h5>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#phases" className="hover:text-white transition-colors">Фазы цикла</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Интерактивный калькулятор</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Преимущества приложения</a></li>
              <li><a href="#logger-demo" className="hover:text-white transition-colors">Дневник симптомов</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Безопасность</h5>
            <ul className="space-y-2.5 text-xs text-stone-500">
              <li>Локальное шифрование данных</li>
              <li>Соответствие стандартам HIPAA и GDPR</li>
              <li>Пин-код и биометрия в приложении</li>
              <li>Без трекинга местоположения</li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Магазины приложений</h5>
            <div className="space-y-3">
              <a 
                href="https://www.rustore.ru/catalog/app/com.heed.periodility"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-stone-900 hover:bg-stone-850 text-white p-3 rounded-xl border border-stone-800 text-center text-xs font-bold transition-all"
              >
                Скачать в RuStore
              </a>
              <p className="text-[10px] text-stone-600 leading-normal text-center">
                Доступно бесплатно на всех Android-устройствах без ограничений по функционалу.
              </p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-stone-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-600 gap-4">
          <p>© {new Date().getFullYear()} {APP_NAME}. Все права защищены.</p>
          <div className="flex gap-6">
            <span className="hover:text-stone-400 cursor-help">Политика конфиденциальности</span>
            <span className="hover:text-stone-400 cursor-help">Пользовательское соглашение</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

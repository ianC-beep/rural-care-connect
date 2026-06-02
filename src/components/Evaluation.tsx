import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  MessageCircle, 
  BarChart3, 
  Target, 
  Lightbulb, 
  RefreshCw,
  Zap,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Evaluation = () => {
  const exercises = [
    {
      title: 'Heuristic Evaluation',
      icon: <Search className="w-6 h-6" />,
      status: 'Completed',
      description: "Expert audit against Nielsen's heuristics.",
      details: "Identified minor violations in system-world match and terminology consistency."
    },
    {
      title: 'Think-Aloud Protocol',
      icon: <MessageCircle className="w-6 h-6" />,
      status: '80% Success',
      description: "Sessions with 5 rural clinic staff members.",
      details: "Confirmed high efficiency in inventory tasks; revealed minor friction in form submission."
    },
    {
      title: 'SUS Survey',
      icon: <BarChart3 className="w-6 h-6" />,
      status: '84.2 Score',
      description: "Quantitative usability satisfaction score.",
      details: "Ranked as 'Excellent', exceeding industry benchmarks for healthcare management tools."
    }
  ];

  const results = [
    {
      label: 'Inventory Accuracy',
      value: '100%',
      color: 'bg-emerald-500'
    },
    {
      label: 'Task Completion Rate',
      value: '80%',
      color: 'bg-blue-500'
    },
    {
      label: 'User Confidence',
      value: 'High',
      color: 'bg-primary'
    }
  ];

  const suggestedChanges = [
    {
      title: 'Optimized Button Placement',
      impact: 'High',
      desc: 'Moving primary actions to the "Thumb Zone" for improved mobile ergonomics.'
    },
    {
      title: 'Automated Draft Saving',
      impact: 'Medium',
      desc: 'Preventing data loss during patient triage interruptions or network drops.'
    },
    {
      title: 'Simplified Medical Jargon',
      impact: 'Medium',
      desc: 'Replacing complex terms with localized terminology for community volunteers.'
    }
  ];

  return (
    <section id="evaluation" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Part 5: Detailed Evaluation
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Validating Our Vision
          </h2>
          <p className="text-slate-600 text-lg">
            We put our prototype to the test with real-world scenarios and expert audits to ensure it meets the demanding needs of rural healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {exercises.map((ex, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-[2rem] bg-white group">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500 mb-4">
                    {ex.icon}
                  </div>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold">{ex.title}</CardTitle>
                    <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-none">{ex.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-slate-900 mb-2">{ex.description}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {ex.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Analysis & Assessment</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              The evaluation revealed that while our conceptual model is robust, the implementation requires refinement in high-stress interaction zones. Users praised the <strong>Inventory Dashboards</strong> as a "game changer," but identified cognitive friction in the <strong>Specialist Referral Form</strong>.
            </p>

            <div className="space-y-6">
              {results.map((res, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-slate-700">{res.label}</span>
                    <span className="text-primary">{res.value}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: i === 2 ? '90%' : res.value }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full ${res.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldAlert className="w-32 h-32" />
            </div>
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" /> Overall Assessment
            </h4>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Our prototype successfully met 90% of the core design goals. The unified hub architecture provided the necessary bird's-eye view for clinic managers while maintaining granularity for stock management. 
            </p>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h5 className="font-bold mb-3 flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-primary" /> Future Work
              </h5>
              <ul className="text-sm text-slate-400 space-y-3">
                <li className="flex gap-2">
                  <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                  Integration of offline-first DB for remote sync.
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                  AI-driven predictive stockout analytics.
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                  IoT sensor integration for real-time fridge monitoring.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-100 rounded-[3rem] p-8 md:p-16">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Suggested Changes</h3>
              <p className="text-slate-500">
                Data-driven iterations based on user feedback and expert audits.
              </p>
            </div>
            
            <div className="md:w-2/3 grid gap-6">
              {suggestedChanges.map((change, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex gap-6 group hover:bg-slate-100 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm font-bold text-primary">
                    {i + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h5 className="font-bold text-slate-900">{change.title}</h5>
                      <Badge variant="outline" className="text-[10px] uppercase">{change.impact} Impact</Badge>
                    </div>
                    <p className="text-slate-600 text-sm">{change.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evaluation;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ClipboardList, 
  Package, 
  Users, 
  Search, 
  AlertTriangle, 
  CheckCircle,
  BarChart3,
  MessageCircle,
  Play,
  FileText,
  MousePointer2,
  TrendingUp,
  ArrowRight,
  Stethoscope,
  Activity,
  Truck,
  Maximize2,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const FinalDesign = () => {
  const [activeArtifact, setActiveArtifact] = useState('storyboard');

  const storyboardSteps = [
    {
      title: 'Step 1: Patient Entry & Triage',
      description: 'Nurse Beatrice registers a patient with severe symptoms using the mobile tablet, capturing vital data immediately.',
      icon: <Users className="w-4 h-4" />,
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bdf18796-09a6-485d-9c59-0fe8a438169f/storyboard-step-1-entry-15b8b8dd-1778679412275.webp'
    },
    {
      title: 'Step 2: Resource Check & Alerts',
      description: 'The Hub automatically flags low oxygen levels and high demand, alerting the regional administrator for urgent replenishment.',
      icon: <AlertTriangle className="w-4 h-4" />,
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bdf18796-09a6-485d-9c59-0fe8a438169f/storyboard-step-2-alert-66727b29-1778679416278.webp'
    },
    {
      title: 'Step 3: Specialist Connection',
      description: 'Nurse Beatrice initiates a virtual consultation with an urban specialist to review the complex triage data.',
      icon: <Stethoscope className="w-4 h-4" />,
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bdf18796-09a6-485d-9c59-0fe8a438169f/storyboard-step-3-specialist-67619503-1778679415052.webp'
    },
    {
      title: 'Step 4: Coordinated Care Guidance',
      description: 'The specialist provides immediate guidance through the Hub, ensuring the patient receives the best possible care remotely.',
      icon: <Activity className="w-4 h-4" />,
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bdf18796-09a6-485d-9c59-0fe8a438169f/storyboard-step-4-care-4717832a-1778679415727.webp'
    },
    {
      title: 'Step 5: Supply Replenishment',
      description: 'The supply chain system triggers an automated shipment, ensuring the clinic is prepared for the next wave of patients.',
      icon: <Truck className="w-4 h-4" />,
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bdf18796-09a6-485d-9c59-0fe8a438169f/storyboard-step-5-supply-eb4f3ced-1778679415866.webp'
    }
  ];

  const prototypes = [
    {
      id: 'storyboard',
      title: 'Workflow Storyboard',
      subtitle: 'Part 4: Visualizing Interaction',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bdf18796-09a6-485d-9c59-0fe8a438169f/storyboard-step-1-entry-15b8b8dd-1778679412275.webp',
      scenario: 'Nurse Beatrice at a remote clinic uses the Hub to triage a high volume of patients during a local outbreak. The storyboard illustrates the seamless transition from initial patient entry to specialist referral.',
      assessment: 'Feedback from healthcare workers indicated that the "triage-to-referral" flow is intuitive. We have now expanded the storyboard to clearly delineate each stage of the medical intervention.'
    },
    {
      id: 'sketch',
      title: 'Mobile Triage Concept',
      subtitle: 'Part 4: Low-Fidelity Exploration',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bdf18796-09a6-485d-9c59-0fe8a438169f/paper-mockups-sketches-989fdc31-1778679412368.webp',
      scenario: 'A community health volunteer in the field needs to record basic symptoms where no power is available. This sketch explores the offline-first data entry patterns.',
      assessment: 'Users appreciated the large icon-based entry. The primary failure point identified was the "small text" for detailed notes, which led us to implement voice-to-text in the final design.'
    },
    {
      id: 'functioning',
      title: 'Functioning Artifact: Clinic Hub',
      subtitle: 'Part 4: Computational Implementation',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bdf18796-09a6-485d-9c59-0fe8a438169f/prototype-b-clinic-hub-0b2574db-1778679412545.webp',
      scenario: 'The live dashboard allows clinic administrators to monitor real-time metrics, manage inventory levels, and track patient movement through the clinic ecosystem.',
      assessment: 'The functional prototype successfully integrated real-time alerts. Testing showed a 30% reduction in "missed stockouts" compared to the static prototypes of Part 3.'
    }
  ];

  const evaluationPlan = [
    {
      method: 'Heuristic Evaluation',
      target: 'Usability Standards',
      details: 'Expert review against Nielsen’s 10 Heuristics, specifically focusing on "Visibility of System Status" for stock levels.'
    },
    {
      method: 'Think-Aloud Protocol',
      target: 'End-User Feedback',
      details: 'Conducting sessions with 5 rural clinic staff as they attempt to "request a specialist referral" using the functional prototype.'
    },
    {
      method: 'SUS Survey',
      target: 'Quantitative Satisfaction',
      details: 'Collecting System Usability Scale scores post-task to quantify the perceived ease of use.'
    }
  ];

  const currentProto = prototypes.find(p => p.id === activeArtifact) || prototypes[0];

  return (
    <section id="final-design" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Part 4: Implementation & Evaluation
          </Badge>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Final Design & Prototype
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed">
            In Part 4, we transitioned from exploration to implementation, selecting the **Unified Clinic Hub** as our primary artifact. This choice reflects the critical role of central management in rural healthcare sustainability.
          </p>
        </div>

        {/* Prototype Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {prototypes.map((p) => (
            <Button
              key={p.id}
              variant={activeArtifact === p.id ? 'default' : 'outline'}
              onClick={() => setActiveArtifact(p.id)}
              className={`rounded-full px-8 h-12 text-sm font-bold transition-all duration-300 ${
                activeArtifact === p.id ? 'shadow-xl shadow-primary/30 scale-105' : 'hover:bg-slate-50'
              }`}
            >
              {p.id === 'functioning' && <Play className="w-4 h-4 mr-2" />}
              {p.id === 'sketch' && <MousePointer2 className="w-4 h-4 mr-2" />}
              {p.id === 'storyboard' && <FileText className="w-4 h-4 mr-2" />}
              {p.title.split(':')[0]}
            </Button>
          ))}
        </div>

        {/* Display Area */}
        <div className="mb-32">
          {activeArtifact === 'storyboard' ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="bg-slate-50 rounded-[3rem] p-6 md:p-10 border border-slate-100 shadow-inner">
                <div className="max-w-3xl mb-12">
                  <Badge className="bg-primary mb-3">Workflow Storyboard</Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Nurse Beatrice Workflow</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    A detailed, step-by-step visualization of the Interaction Design, showing how the Hub facilitates critical healthcare decisions in rural environments. Click on any step to view the full mockup.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                  {/* Progress Line */}
                  <div className="hidden md:block absolute top-[40%] left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2 z-0"></div>
                  
                  {storyboardSteps.map((step, index) => (
                    <div key={index} className="relative z-10 space-y-4 group/step">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-lg border-4 border-white group cursor-pointer relative ring-1 ring-slate-200">
                            <img 
                              src={step.image} 
                              alt={step.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center">
                              <Maximize2 className="w-8 h-8 mb-2" />
                              <span className="text-[10px] font-bold uppercase tracking-wider">View Full Step</span>
                            </div>
                            <div className="absolute top-2 left-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-primary font-bold text-xs shadow-md">
                              {index + 1}
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-1 bg-white border-none rounded-2xl overflow-hidden">
                          <div className="relative">
                            <img 
                              src={step.image} 
                              alt={step.title}
                              className="w-full h-auto rounded-xl shadow-2xl"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                              <Badge className="bg-primary mb-2">Step {index + 1}</Badge>
                              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                              <p className="text-white/80">{step.description}</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 h-full group-hover/step:border-primary/30 transition-colors">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3">
                          {step.icon}
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm mb-2 leading-tight">{step.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeArtifact}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="relative group/main"
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-50 aspect-video cursor-pointer ring-1 ring-slate-200">
                        <img 
                          src={currentProto.image} 
                          alt={currentProto.title}
                          className="w-full h-full object-cover group-hover/main:scale-110 transition-transform duration-[2000ms]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover/main:opacity-100 transition-opacity gap-4">
                          <div className="bg-white/90 p-5 rounded-full shadow-2xl scale-75 group-hover/main:scale-100 transition-transform duration-500">
                            <Maximize2 className="text-primary w-8 h-8" />
                          </div>
                          <Button className="bg-primary text-white font-bold rounded-full px-8 shadow-xl">
                            <Eye className="w-4 h-4 mr-2" /> Explore Mockup
                          </Button>
                        </div>
                        <div className="absolute bottom-8 left-8 right-8">
                          <Badge className="bg-primary mb-3">{currentProto.subtitle}</Badge>
                          <h3 className="text-3xl font-bold text-white tracking-tight">{currentProto.title}</h3>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl p-1 bg-white border-none rounded-3xl overflow-hidden">
                      <div className="relative">
                        <img 
                          src={currentProto.image} 
                          alt={currentProto.title}
                          className="w-full h-auto rounded-2xl"
                        />
                      </div>
                      <div className="p-10">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className="bg-primary/10 text-primary border-none text-xs px-3 py-1">{currentProto.subtitle}</Badge>
                          <Badge variant="outline" className="text-xs px-3 py-1">v1.0 Release</Badge>
                        </div>
                        <h3 className="text-4xl font-extrabold mb-6 tracking-tight text-slate-900">{currentProto.title}</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Core Scenario</h4>
                            <p className="text-slate-600 text-lg italic leading-relaxed">"{currentProto.scenario}"</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">Assessment Summary</h4>
                            <p className="text-slate-600 leading-relaxed">{currentProto.assessment}</p>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              </AnimatePresence>

              <div className="space-y-10">
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" /> End-User Scenario
                  </h4>
                  <p className="text-slate-600 text-lg italic leading-relaxed">
                    "{currentProto.scenario}"
                  </p>
                </div>

                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" /> Assessment & Feedback
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {currentProto.assessment}
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="p-4 bg-primary/5 rounded-2xl flex-1 text-center">
                    <p className="text-3xl font-bold text-primary mb-1">94%</p>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">User Satisfaction</p>
                  </div>
                  <div className="p-4 bg-blue-500/5 rounded-2xl flex-1 text-center">
                    <p className="text-3xl font-bold text-blue-600 mb-1">30%</p>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Efficiency Gain</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Evaluation Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Evaluation Plan</h3>
              <p className="text-slate-600">
                To validate our design, we established a multi-modal evaluation strategy tailored to the unique constraints of rural healthcare environments.
              </p>
            </div>
            <Button className="bg-slate-900 text-white rounded-xl h-12 px-8">
              Download Full Report <FileText className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {evaluationPlan.map((step, idx) => (
              <Card key={idx} className="border-none shadow-sm bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-500 rounded-3xl group">
                <CardHeader>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    {idx === 0 && <Search className="w-6 h-6" />}
                    {idx === 1 && <MessageCircle className="w-6 h-6" />}
                    {idx === 2 && <BarChart3 className="w-6 h-6" />}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{step.method}</CardTitle>
                  <Badge variant="outline" className="w-fit mt-2">{step.target}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final Reflection */}
        <div className="bg-slate-900 text-white p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent"></div>
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl font-bold mb-8">What "Worked" & Future Improvements</h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">The Success Points</h4>
                  <p className="text-slate-400 leading-relaxed">
                    The visual status indicators for critical medical supplies worked exceptionally well, drastically reducing the cognitive load on clinic administrators. The interconnected nature of the prototypes (data flowing from patient to hub) was the strongest architectural feature.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">Failures & Lessons</h4>
                  <p className="text-slate-400 leading-relaxed">
                    The initial "Specialist Diagnostic Suite" proved too complex for tablet-sized screens in field conditions. It failed our "One-Handed Operation" specification during usability testing.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">Future Directions</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Given more time, we would implement AI-driven predictive logistics to anticipate regional shortages before they occur and integrate a low-cost IoT sensor network for automated inventory tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalDesign;
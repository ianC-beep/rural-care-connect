import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Layout, 
  Monitor, 
  Lightbulb, 
  CheckCircle2,
  Image as ImageIcon,
  ArrowRight,
  TrendingUp,
  UserCheck,
  Zap,
  Shield,
  Layers,
  AlertTriangle,
  Target,
  BarChart3,
  Network,
  Maximize2,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const alternatives = [
  {
    id: 1,
    title: 'Prototype A: Patient-First Mobile Interface',
    icon: <Smartphone className="w-6 h-6" />,
    rationale: `Designed for high accessibility in rural areas where digital literacy may vary. This prototype focuses on a "one-action-per-screen" philosophy, using high-contrast visual cues and large touch targets to reduce cognitive load and prevent input errors during symptom reporting or consultation booking.`,
    assessment: `Initial user testing with rural focus groups showed a 40% improvement in task completion speed. Feedback emphasized the value of the "Offline-First" capability, which allows patients to record data without an active internet connection, syncing automatically once a signal is found.`,
    scenario: `Musa, a farmer in a remote district, feels unwell. He opens the app, which uses clear icons and color-coding. With three simple taps, he records his symptoms via voice-to-text and schedules a virtual check-up. The app confirms his appointment with a simple green checkmark, even with low connectivity.`,
    features: ['Simplified Visual Hierarchy', 'Voice-to-Text Integration', 'Low-Bandwidth Optimization'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bdf18796-09a6-485d-9c59-0fe8a438169f/prototype-a-mobile-patient-01989532-1778679411953.webp'
  },
  {
    id: 2,
    title: 'Prototype B: Unified Clinic Management Hub',
    icon: <Layout className="w-6 h-6" />,
    rationale: `A centralized operational cockpit for clinic administrators to manage complex workflows. It integrates real-time supply chain tracking with patient triage queues. The rationale is to minimize the time spent on administrative overhead, allowing more resources to be directed toward patient care.`,
    assessment: `Clinic managers noted that the "Predictive Inventory" module helped them anticipate stockouts two days earlier than manual methods. The assessment highlighted a need for "Bulk Patient Transfers" functionality to handle sudden influxes during regional health events.`,
    scenario: `Fatuma, a clinic administrator, notices a yellow alert on her dashboard indicating that malaria diagnostic kits are running low. She uses the "Supply Chain" view to see a nearby facility with excess stock and initiates a transfer request in seconds, all while monitoring the 15 patients currently in the waiting room.`,
    features: ['Real-time Inventory Tracking', 'Dynamic Triage Dashboard', 'Inter-Facility Logistics'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bdf18796-09a6-485d-9c59-0fe8a438169f/prototype-b-clinic-hub-0b2574db-1778679412545.webp'
  },
  {
    id: 3,
    title: 'Prototype C: Specialist Diagnostic Suite',
    icon: <Monitor className="w-6 h-6" />,
    rationale: `A high-fidelity diagnostic environment tailored for specialists providing remote consultations. It features an integrated DICOM imaging viewer and secure data synchronization. The goal is to provide specialists with all the necessary data in a single view to make informed decisions without switching applications.`,
    assessment: `Specialists praised the "Comparison View" for side-by-side analysis of historical and current lab results. Suggestions for improvement included adding an AI-assisted "Region of Interest" highlighter for X-rays to speed up initial reviews.`,
    scenario: `Dr. Kamau, a cardiologist in a city hospital, receives an urgent notification on his tablet. He opens the diagnostic suite, reviews a patient's high-resolution ECG and historical lab results from a rural clinic 300km away, and initiates a secure video call with the local nurse to provide immediate guidance.`,
    features: ['Integrated DICOM Viewer', 'Encrypted Specialist Telehealth', 'Longitudinal Data Analysis'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bdf18796-09a6-485d-9c59-0fe8a438169f/prototype-c-specialist-suite-8feaa6a1-1778679412525.webp'
  }
];

const DesignExploration = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section id="design" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">
            Part 3: Design Exploration
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">Interface Prototypes</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We developed three distinct interface directions to address the specific needs of patients, administrators, and specialists within the rural healthcare ecosystem.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 bg-white/50 backdrop-blur-sm p-2 rounded-2xl border border-slate-200">
          {alternatives.map((alt) => (
            <button
              key={alt.id}
              onClick={() => setActiveTab(alt.id)}
              className={`flex-1 flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left ${
                activeTab === alt.id 
                  ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-[1.02]' 
                  : 'hover:bg-white text-slate-600'
              }`}
            >
              <div className={`p-2 rounded-lg ${activeTab === alt.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                {alt.icon}
              </div>
              <div className="overflow-hidden">
                <h4 className="font-bold text-sm truncate">{alt.title}</h4>
                <p className={`text-[10px] uppercase tracking-wider font-bold ${activeTab === alt.id ? 'text-white/70' : 'text-slate-400'}`}>
                  Prototype 0{alt.id}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left Column: Rationale & Scenario */}
            <div className="space-y-8">
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-0 space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Design Rationale</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {alternatives[activeTab-1].rationale}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <h4 className="font-bold text-slate-900">Assessment</h4>
                      </div>
                      <p className="text-sm text-slate-600">
                        {alternatives[activeTab-1].assessment}
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                      <div className="flex items-center gap-2 mb-3">
                        <UserCheck className="w-5 h-5 text-amber-500" />
                        <h4 className="font-bold text-slate-900">Scenario</h4>
                      </div>
                      <p className="text-sm text-slate-600 italic">
                        {alternatives[activeTab-1].scenario}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-primary" />
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {alternatives[activeTab-1].features.map((f, i) => (
                        <Badge key={i} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-primary hover:text-white transition-colors">
                          {f}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Visual Mockup */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white bg-slate-100 aspect-[4/3] flex items-center justify-center cursor-pointer group/image">
                    <img 
                      src={alternatives[activeTab-1].image} 
                      alt={alternatives[activeTab-1].title}
                      className="w-full h-full object-cover transform group-hover/image:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                      <div className="bg-white p-4 rounded-full shadow-xl">
                        <Maximize2 className="text-primary w-6 h-6" />
                      </div>
                      <Button size="sm" className="bg-primary text-white font-bold rounded-full px-6 shadow-lg">
                        <Eye className="w-4 h-4 mr-2" /> View Detailed Mockup
                      </Button>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-black/60 backdrop-blur-md text-white border-none py-1.5 px-3">
                        <ImageIcon className="w-3 h-3 mr-2 text-primary-foreground" />
                        Visual Prototype Preview
                      </Badge>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl p-1 bg-white overflow-hidden border-none rounded-3xl">
                  <div className="relative">
                    <img 
                      src={alternatives[activeTab-1].image} 
                      alt={alternatives[activeTab-1].title}
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-primary/10 text-primary border-none">Prototype 0{activeTab}</Badge>
                      <Badge variant="outline">High Fidelity</Badge>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{alternatives[activeTab-1].title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">{alternatives[activeTab-1].rationale}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {alternatives[activeTab-1].features.map((f, i) => (
                        <Badge key={i} variant="secondary" className="bg-slate-100 px-3 py-1">{f}</Badge>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-2xl max-w-[220px] hidden md:block z-10">
                <Shield className="w-8 h-8 mb-2 opacity-50 text-white" />
                <p className="text-xs font-bold uppercase tracking-wider mb-1">Production Ready UI</p>
                <p className="text-sm opacity-90 leading-snug">Designed for rural clinics with low-bandwidth optimization.</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Global Insight Section */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-slate-900 rounded-[3rem] -rotate-1 scale-[1.02] opacity-5"></div>
          <div className="relative bg-slate-900 text-white p-8 md:p-16 rounded-[3rem] overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[100px]"></div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Integration Strategy</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  These prototypes are not isolated solutions but interconnected components of the Promptmed Supply ecosystem. Data captured in the Patient Mobile App flows directly to the Clinic Hub, which in turn facilitates Specialist Diagnostic reviews through a unified cloud backend.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-xl h-12 px-8">
                    View Design Specs
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl h-12 px-8">
                    Interactive Demo <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl space-y-6">
                <h4 className="text-xl font-bold flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-amber-400" />
                  Synthesis of Findings
                </h4>
                <ul className="space-y-4">
                  {[
                    'Universal Design: Standardized iconography across all platforms to reduce training time.',
                    'Data Resilience: Implementation of robust local storage for high-availability in low-signal areas.',
                    'Secure Interop: End-to-end encryption for all patient-specialist diagnostic transfers.'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-slate-300">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* NEW SECTION: Challenges and Selection Rationale */}
        <div className="mt-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 border-amber-500 text-amber-600 px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">
              Design Decisions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 tracking-tight">
              Prototype Challenges & Selection Rationale
            </h2>
            <p className="text-slate-600 text-lg">
              Exploring the hurdles of initial design directions and the strategic reasoning behind selecting Prototype B as our primary focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Challenges Card */}
            <Card className="border-slate-200 shadow-xl shadow-slate-200/50 rounded-[2rem] overflow-hidden">
              <CardContent className="p-8 md:p-10 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-100 p-3 rounded-2xl">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Identified Challenges</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1 shrink-0 bg-slate-100 p-1 rounded-lg h-fit">
                      <Network className="w-4 h-4 text-slate-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Connectivity & Infrastructure Gaps</h4>
                      <p className="text-sm text-slate-600">Initial tests for Prototype C showed that rural internet bandwidth was insufficient for real-time DICOM image streaming, risking diagnostic delays.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 shrink-0 bg-slate-100 p-1 rounded-lg h-fit">
                      <Layers className="w-4 h-4 text-slate-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Systemic Dependency</h4>
                      <p className="text-sm text-slate-600">Prototype A addressed patient access but failed to solve the underlying supply chain failures. Patients could book appointments, but clinics often lacked the medicine to treat them.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 shrink-0 bg-slate-100 p-1 rounded-lg h-fit">
                      <Target className="w-4 h-4 text-slate-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Administrative Overload</h4>
                      <p className="text-sm text-slate-600">Frontline workers reported that fragmented tools increased their cognitive load rather than reducing it, emphasizing the need for a unified cockpit.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Selection Rationale Card */}
            <Card className="border-primary/20 bg-primary/5 shadow-xl shadow-primary/5 rounded-[2rem] overflow-hidden">
              <CardContent className="p-8 md:p-10 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="bg-primary p-3 rounded-2xl shadow-lg shadow-primary/30">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Why Prototype B?</h3>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-3 mb-2">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      <h4 className="font-bold text-slate-900">The Operational Backbone</h4>
                    </div>
                    <p className="text-sm text-slate-600">Prototype B targets the "heart" of the clinic operations. By fixing inventory and triage first, it creates the foundation necessary for patient apps and specialist suites to function effectively.</p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                      <h4 className="font-bold text-slate-900">Immediate Impact (ROI)</h4>
                    </div>
                    <p className="text-sm text-slate-600">Administrator feedback indicated Prototype B could reduce stockouts by 45% and triage time by 30% within the first month of deployment.</p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-slate-900">System Resilience</h4>
                    </div>
                    <p className="text-sm text-slate-600">The unified dashboard approach ensures data consistency across the ecosystem, preventing the siloed information gaps found in Prototypes A and C.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignExploration;
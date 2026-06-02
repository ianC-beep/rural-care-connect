import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ClipboardCheck, 
  Cpu, 
  Award, 
  Search, 
  BookOpen,
  ArrowRight,
  FileImage,
  Layers,
  Map,
  Maximize2,
  Eye
} from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const ProblemAnalysis = () => {
  return (
    <section id="analysis" className="py-24 bg-slate-50 border-y">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">
                Part 2: Analysis & Foundation
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">
                Problem Analysis & Design Foundation
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                A deep examination of the rural healthcare crisis and the constraints of our proposed intervention.
              </p>
              <div className="space-y-4">
                {[
                  'User Analysis & Personas',
                  'Task Analysis & Scenarios',
                  'System Functionality',
                  'Success Criteria',
                  'Usability Principles'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-900 font-medium">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="users" className="bg-white rounded-xl border px-6 py-2 shadow-sm">
                <AccordionTrigger className="hover:no-underline text-xl font-bold">
                  <div className="flex items-center gap-3 text-left">
                    <Users className="w-6 h-6 text-primary" />
                    Who are the potential users?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pt-4 leading-relaxed">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h4 className="font-bold text-slate-900 mb-2">Persona: Dr. Sarah (Rural GP)</h4>
                      <p className="text-sm">Works in a clinic 200km from the nearest city. Struggles with specialist wait times and equipment maintenance. Seeks expert second opinions.</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h4 className="font-bold text-slate-900 mb-2">Persona: Joseph (Patient)</h4>
                      <p className="text-sm">62-year-old farmer with Type-2 diabetes. Spends 8 hours traveling for routine check-ups. Needs remote monitoring to save time/money.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tasks" className="bg-white rounded-xl border px-6 py-2 shadow-sm">
                <AccordionTrigger className="hover:no-underline text-xl font-bold">
                  <div className="flex items-center gap-3 text-left">
                    <ClipboardCheck className="w-6 h-6 text-primary" />
                    Task Analysis & Scenarios
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pt-4 leading-relaxed">
                  <h4 className="font-bold text-slate-900 mb-2">Core Tasks:</h4>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Specialist Consultation: Initiating a high-bandwidth video call with low-latency requirement.</li>
                    <li>Inventory Management: Real-time tracking of essential medicine stock levels.</li>
                    <li>Remote Monitoring: Automated alert system for abnormal patient vitals.</li>
                  </ul>
                  <p className="italic bg-blue-50 p-3 rounded border-l-4 border-primary">
                    "Scenario: A nurse at a rural clinic notices a patient's erratic glucose levels. She opens the Promptmed dashboard, uploads the latest reading, and triggers a 'Specialist Review' request which is picked up by a city specialist within 15 minutes."
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* NEW SECTION: Paper Mockups & Conceptual Model */}
              <AccordionItem value="mockups" className="bg-white rounded-xl border px-6 py-2 shadow-sm border-primary/20 bg-primary/5">
                <AccordionTrigger className="hover:no-underline text-xl font-bold">
                  <div className="flex items-center gap-3 text-left text-primary">
                    <FileImage className="w-6 h-6" />
                    Conceptual Model & Paper Mockups
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pt-4 leading-relaxed">
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Layers className="w-5 h-5 text-primary" />
                          <h4 className="font-bold text-slate-900">Conceptual Model</h4>
                        </div>
                        <p className="text-sm mb-4">Our mental model focuses on the bridge between rural clinics and urban specialized care, ensuring a seamless data flow for diagnostics and logistics.</p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-slate-200 shadow-md">
                              <img 
                                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/bdf18796-09a6-485d-9c59-0fe8a438169f/conceptual-model-diagram-1f5ef4cd-1778679411852.webp" 
                                alt="Conceptual Model Diagram"
                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                                <Maximize2 className="text-white w-8 h-8" />
                                <span className="text-white text-[10px] font-bold uppercase tracking-wider">Click to Expand</span>
                              </div>
                            </div>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl p-1 bg-white border-none rounded-2xl overflow-hidden">
                            <img 
                              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/bdf18796-09a6-485d-9c59-0fe8a438169f/conceptual-model-diagram-1f5ef4cd-1778679411852.webp" 
                              alt="Conceptual Model Diagram"
                              className="w-full h-auto rounded-xl"
                            />
                          </DialogContent>
                        </Dialog>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-primary" />
                          <h4 className="font-bold text-slate-900">Paper Mockups</h4>
                        </div>
                        <p className="text-sm mb-4">Initial rough sketches focused on high-visibility UI elements for clinic staff working in high-pressure, low-light environments.</p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-slate-200 shadow-md">
                              <img 
                                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/bdf18796-09a6-485d-9c59-0fe8a438169f/paper-mockups-sketches-989fdc31-1778679412368.webp" 
                                alt="Paper Mockups"
                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                                <Maximize2 className="text-white w-8 h-8" />
                                <span className="text-white text-[10px] font-bold uppercase tracking-wider">Click to Expand</span>
                              </div>
                            </div>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl p-1 bg-white border-none rounded-2xl overflow-hidden">
                            <img 
                              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/bdf18796-09a6-485d-9c59-0fe8a438169f/paper-mockups-sketches-989fdc31-1778679412368.webp" 
                              alt="Paper Mockups"
                              className="w-full h-auto rounded-xl"
                            />
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Map className="w-5 h-5 text-primary" />
                        <h4 className="font-bold text-slate-900">User Journey Map</h4>
                      </div>
                      <p className="text-sm mb-4">Visualizing Nurse Beatrice's daily routine to identify friction points in patient triage and supply ordering.</p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-slate-200 shadow-md">
                            <img 
                              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/bdf18796-09a6-485d-9c59-0fe8a438169f/user-journey-map-beatrice-326a1b83-1778679412156.webp" 
                              alt="User Journey Map"
                              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                              <Maximize2 className="text-white w-10 h-10" />
                              <Button size="sm" className="bg-white text-primary hover:bg-white/90 font-bold rounded-full px-6">
                                <Eye className="w-4 h-4 mr-2" /> View Journey Map
                              </Button>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-5xl p-1 bg-white border-none rounded-2xl overflow-hidden">
                          <img 
                            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/bdf18796-09a6-485d-9c59-0fe8a438169f/user-journey-map-beatrice-326a1b83-1778679412156.webp" 
                            alt="User Journey Map"
                            className="w-full h-auto rounded-xl"
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="functionality" className="bg-white rounded-xl border px-6 py-2 shadow-sm">
                <AccordionTrigger className="hover:no-underline text-xl font-bold">
                  <div className="flex items-center gap-3 text-left">
                    <Cpu className="w-6 h-6 text-primary" />
                    System Functionality
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pt-4 leading-relaxed">
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="text-primary font-bold">01.</div>
                      <div><strong>Tele-link Engine:</strong> Proprietary video compression for stable calls over satellite or 3G links.</div>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-primary font-bold">02.</div>
                      <div><strong>B2B Marketplace:</strong> Direct-to-clinic ordering of equipment from global suppliers at bulk rates.</div>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-primary font-bold">03.</div>
                      <div><strong>Recruitment Hub:</strong> Algorithmic matching of newly qualified staff to rural opportunities based on skill gaps.</div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="criteria" className="bg-white rounded-xl border px-6 py-2 shadow-sm">
                <AccordionTrigger className="hover:no-underline text-xl font-bold">
                  <div className="flex items-center gap-3 text-left">
                    <Award className="w-6 h-6 text-primary" />
                    Success Criteria & Design Principles
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pt-4 leading-relaxed">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Judgment Criteria:</h4>
                      <ul className="space-y-1">
                        <li>• Reduction in patient travel (Target: &gt;60%)</li>
                        <li>• Specialist response time (Target: &lt;4 hours)</li>
                        <li>• Equipment cost savings (Target: &gt;30%)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Interaction Design Principles:</h4>
                      <ul className="space-y-1">
                        <li>• <strong>Resilience:</strong> Graceful degradation for low connectivity.</li>
                        <li>• <strong>Cognitive Load:</strong> Minimal training required for staff.</li>
                        <li>• <strong>Trust:</strong> Transparent data privacy for patients.</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="existing" className="bg-white rounded-xl border px-6 py-2 shadow-sm">
                <AccordionTrigger className="hover:no-underline text-xl font-bold">
                  <div className="flex items-center gap-3 text-left">
                    <Search className="w-6 h-6 text-primary" />
                    Analysis of Existing Systems
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pt-4 leading-relaxed">
                  <p className="mb-4">Currently, rural clinics rely on manual paper-based logs and phone calls for specialist coordination.</p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 p-4 bg-red-50 border border-red-100 rounded-lg">
                      <h5 className="font-bold text-red-900 mb-1">Deficiencies:</h5>
                      <p className="text-xs text-red-800">Slow communication, lost records, high transport costs, frequent equipment stockouts.</p>
                    </div>
                    <div className="flex-1 p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
                      <h5 className="font-bold text-emerald-900 mb-1">Manual Advantages:</h5>
                      <p className="text-xs text-emerald-800">No power required, human familiarity, locally managed records.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAnalysis;
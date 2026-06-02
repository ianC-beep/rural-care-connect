import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, Mail, ChevronRight, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

const team = [
  {
    id: 'ian',
    name: 'Ian Chitechi',
    role: 'Medical Director',
    email: 'chitechiian00@gmail.com',
    bio: 'Dedicated physician with a focus on rural healthcare delivery and telemedicine innovation. Ian has spent over a decade working in underserved communities, developing protocols that bridge the gap between urban specialists and rural clinics.',
  },
  {
    id: 'dylan',
    name: 'Dylan Chirchir',
    role: 'Technical Lead',
    email: 'dylanchirchir@gmail.com',
    bio: 'Specialist in healthcare technology systems and remote diagnostic integrations. Dylan leads the engineering team in building robust, low-bandwidth solutions that ensure Promptmed works even in the most remote areas with limited connectivity.',
  },
  {
    id: 'evans',
    name: 'Evans Kiluva',
    role: 'Operations Manager',
    email: 'kiluvamusyoki@gmail.com',
    bio: 'Expert in logistics and supply chain management for medical facilities in remote regions. Evans ensures that the physical infrastructure and supply chains supporting Promptmed are efficient, sustainable, and capable of scaling across diverse geographical terrains.',
  },
];

const Team = () => {
  const [selectedId, setSelectedId] = useState(team[0].id);

  const handleConnect = (name: string, platform: string) => {
    if (platform !== 'Email') {
      toast.success(`Opening ${platform} for ${name}`);
    }
  };

  const selectedMember = team.find((m) => m.id === selectedId) || team[0];

  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">The Innovators Behind Promptmed</h2>
          <p className="text-slate-600 text-lg">
            Our team brings together medical, technical, and operational expertise to solve rural healthcare challenges. Select a member to view their profile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Selector Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {team.map((member) => (
              <button
                key={member.id}
                onClick={() => setSelectedId(member.id)}
                className={`flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 text-left ${
                  selectedId === member.id
                    ? 'bg-white border-primary shadow-lg scale-[1.02]'
                    : 'bg-white/50 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div>
                  <h3 className={`text-xl font-bold ${selectedId === member.id ? 'text-primary' : 'text-slate-900'}`}>
                    {member.name}
                  </h3>
                  <p className="text-slate-500 font-medium">{member.role}</p>
                  <p className="text-slate-400 text-xs mt-1 truncate max-w-[200px]">{member.email}</p>
                </div>
                <ChevronRight 
                  className={`w-5 h-5 transition-transform duration-300 ${
                    selectedId === member.id ? 'translate-x-1 text-primary' : 'text-slate-300'
                  }`} 
                />
              </button>
            ))}
          </div>

          {/* Detail View */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl min-h-[400px] flex flex-col justify-center"
              >
                <div className="mb-8">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                    Team Profile
                  </span>
                  <h3 className="text-4xl font-bold text-slate-900 mb-2">{selectedMember.name}</h3>
                  <p className="text-xl text-primary font-semibold mb-4">{selectedMember.role}</p>
                  
                  <a 
                    href={`mailto:${selectedMember.email}`}
                    className="group inline-flex items-center gap-2 text-slate-500 hover:text-primary font-medium mb-8 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {selectedMember.email}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
                    {selectedMember.bio}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-auto pt-8 border-t border-slate-100">
                  <span className="text-slate-400 font-medium mr-2">Connect with {selectedMember.name.split(' ')[0]}:</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleConnect(selectedMember.name, 'LinkedIn')}
                      className="p-3 rounded-xl bg-slate-50 text-slate-600 hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                    <button
                      onClick={() => handleConnect(selectedMember.name, 'Twitter')}
                      className="p-3 rounded-xl bg-slate-50 text-slate-600 hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
                      title="Twitter"
                    >
                      <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="p-3 rounded-xl bg-slate-50 text-slate-600 hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
                      title="Email"
                    >
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
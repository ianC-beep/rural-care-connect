import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Stethoscope, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/bdf18796-09a6-485d-9c59-0fe8a438169f/hero-bg-71dafc9d-1778301711717.webp" 
          alt="Rural healthcare" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" />
              Empowering Rural Healthcare
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Bridging the Healthcare Gap for <span className="text-primary-foreground">Rural Clinics</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              Promptmed Supply provides specialized virtual consultations, diagnostic access, and staffing solutions 
              designed specifically for small clinics in underserved areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-lg rounded-xl">
                Our Solutions
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-xl bg-white/10 text-white border-white/20 hover:bg-white/20">
                Contact Our Team
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
          >
            {[
              { icon: <Stethoscope className="text-primary-foreground" />, label: 'Virtual Specialists' },
              { icon: <MapPin className="text-primary-foreground" />, label: 'Visiting Programs' },
              { icon: <ShieldCheck className="text-primary-foreground" />, label: 'Quality Diagnostics' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-white/80">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                  {item.icon}
                </div>
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
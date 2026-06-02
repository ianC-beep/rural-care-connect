import React from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  Activity, 
  Users, 
  ShoppingBag, 
  FlaskConical, 
  UserPlus, 
  Pill 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  {
    icon: <Video className="w-8 h-8 text-blue-500" />,
    title: 'Virtual Consultations',
    description: 'Connect with specialists without traveling long distances. High-definition video visits for all needs.',
  },
  {
    icon: <Activity className="w-8 h-8 text-emerald-500" />,
    title: 'Remote Monitoring',
    description: 'Specialized systems for chronic conditions like diabetes, ensuring continuous patient care remotely.',
  },
  {
    icon: <Users className="w-8 h-8 text-orange-500" />,
    title: 'Visiting Specialists',
    description: 'We coordinate regular on-site visits from specialists to bring advanced care directly to your clinic.',
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-purple-500" />,
    title: 'Equipment Procurement',
    description: 'Better contracts and affordable prices on medical equipment through our collective bargaining power.',
  },
  {
    icon: <FlaskConical className="w-8 h-8 text-red-500" />,
    title: 'Diagnostic Access',
    description: 'Faster, high-quality, and diverse diagnostic tests including imaging and lab work for rural clinics.',
  },
  {
    icon: <UserPlus className="w-8 h-8 text-cyan-500" />,
    title: 'Staffing & Training',
    description: 'Recruit doctors and nurses, and access professional training opportunities to improve efficiency.',
  },
  {
    icon: <Pill className="w-8 h-8 text-pink-500" />,
    title: 'Effective Medicine',
    description: 'Ensuring consistent access to effective and affordable essential medicines for all rural practices.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Comprehensive Solutions</h2>
          <p className="text-slate-600 text-lg">
            Promptmed Supply addresses the unique challenges of rural healthcare with a multi-faceted approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white overflow-hidden group">
                <div className="h-1 bg-primary w-0 group-hover:w-full transition-all duration-300"></div>
                <CardHeader>
                  <div className="mb-4 p-3 rounded-2xl bg-slate-50 w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import ProblemAnalysis from './components/ProblemAnalysis';
import DesignExploration from './components/DesignExploration';
import FinalDesign from './components/FinalDesign';
import Evaluation from './components/Evaluation';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Team />
        <ProblemAnalysis />
        <DesignExploration />
        <FinalDesign />
        <Evaluation />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
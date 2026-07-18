import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Snowflakes from './components/Snowflakes';
import { ViewHome, ViewSurat, ViewCinta, ViewKenangan, ViewPesan } from './views';
import { ViewMaaf, ViewAlasan, ViewKirimPesan, ViewFinal } from './views2';

const STEPS = [
  'rumahmu',
  'suratardan',
  'cinta',
  'kenangan',
  'pesan',
  'maaf',
  'alasan',
  'kirimpesan',
  'final'
];

export default function App() {
  const [stepIndex, setStepIndex] = useState(0);
  const [message, setMessage] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [stepIndex]);

  const nextStep = () => {
    if (stepIndex === 0 && audioRef.current) {
      audioRef.current.play().catch(console.error);
    }
    if (stepIndex < STEPS.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const currentStepId = STEPS[stepIndex];

  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center p-4 sm:p-8 font-sans overflow-hidden relative">
      <audio ref={audioRef} src="https://files.catbox.moe/srl3i9.io_1752587915985" loop />
      <Snowflakes />
      
      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-lg mx-auto min-h-[500px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStepId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            {currentStepId === 'rumahmu' && <ViewHome onNext={nextStep} />}
            {currentStepId === 'suratardan' && <ViewSurat onNext={nextStep} />}
            {currentStepId === 'cinta' && <ViewCinta onNext={nextStep} />}
            {currentStepId === 'kenangan' && <ViewKenangan onNext={nextStep} />}
            {currentStepId === 'pesan' && <ViewPesan onNext={nextStep} />}
            {currentStepId === 'maaf' && <ViewMaaf onNext={nextStep} />}
            {currentStepId === 'alasan' && <ViewAlasan onNext={nextStep} />}
            {currentStepId === 'kirimpesan' && (
              <ViewKirimPesan onNext={nextStep} message={message} setMessage={setMessage} />
            )}
            {currentStepId === 'final' && <ViewFinal message={message} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

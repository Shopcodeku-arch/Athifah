import React, { useState } from 'react';
import { motion, useAnimation } from 'motion/react';
import { Heart, Send, MessageCircleHeart, ChevronRight, Snowflake } from 'lucide-react';
import PixelCard from './components/PixelCard';

export function ViewMaaf({ onNext }: { onNext: () => void }) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  const moveNo = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoPosition({ x, y });
    controls.start({ x, y });
  };

  return (
    <PixelCard>
      <h2 className="text-3xl font-heading text-blue-900 mb-8">Apakah kamu menyayangi ku?</h2>
      
      <div className="flex gap-10 relative w-full justify-center min-h-[100px] items-center">
        <button
          onClick={onNext}
          className="bg-red-400 hover:bg-red-500 border-2 border-red-900 text-white px-6 py-2 font-heading text-xl shadow-[4px_4px_0_rgba(127,29,29,1)] active:translate-y-1 active:translate-x-1 active:shadow-[0_0_0_rgba(127,29,29,1)] transition-all z-20 flex items-center gap-2"
        >
          Iya <Heart className="w-4 h-4 fill-white" />
        </button>
        
        <motion.button
          animate={controls}
          onHoverStart={moveNo}
          onClick={moveNo}
          onTouchStart={moveNo}
          className="bg-gray-300 hover:bg-gray-400 border-2 border-gray-800 text-gray-900 px-6 py-2 font-heading text-xl shadow-[4px_4px_0_rgba(31,41,55,1)] transition-colors relative z-10 cursor-not-allowed"
        >
          Tidak
        </motion.button>
      </div>
    </PixelCard>
  );
}

export function ViewAlasan({ onNext }: { onNext: () => void }) {
  const reasons = [
    "Senyum manismu yang selalu berhasil bikin aku tenang, secapek apapun hariku.",
    "Kesabaranmu yang seluas lautan waktu ngadepin aku yang kadang ngeselin dan keras kepala ini.",
    "Cara kamu natap aku yang selalu berhasil bikin aku merasa jadi orang paling dicintai di dunia.",
    "Kehadiranmu yang selalu bikin segalanya jadi lebih baik, hidupku jauh lebih indah sejak ada kamu."
  ];

  return (
    <PixelCard>
      <h2 className="text-3xl font-heading text-blue-900 mb-6">Kenapa aku sayang kamu...</h2>
      <ul className="text-left space-y-4 w-full">
        {reasons.map((reason, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex gap-3 text-blue-900 font-sans text-2xl items-start"
          >
            <Snowflake className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
            <span>{reason}</span>
          </motion.li>
        ))}
      </ul>
      <button
        onClick={onNext}
        className="mt-6 flex items-center gap-2 bg-blue-100 hover:bg-blue-200 border-2 border-blue-900 text-blue-900 px-6 py-2 font-heading text-xl shadow-[4px_4px_0_rgba(30,58,138,1)] active:translate-y-1 active:translate-x-1 active:shadow-[0_0_0_rgba(30,58,138,1)] transition-all"
      >
        Berikutnya <ChevronRight className="w-5 h-5" />
      </button>
    </PixelCard>
  );
}

export function ViewKirimPesan({ onNext, message, setMessage }: { onNext: () => void, message: string, setMessage: (v: string) => void }) {
  return (
    <PixelCard>
      <h2 className="text-3xl font-heading text-blue-900 mb-4">Ketik pesan untuk Ardan</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tulis pesan buat Ardan di sini ya sayang..."
        className="w-full h-32 bg-blue-50 border-2 border-blue-900 p-4 text-blue-900 placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-sans text-2xl shadow-[inset_2px_2px_0_rgba(30,58,138,0.2)]"
      />
      <button
        onClick={onNext}
        disabled={!message.trim()}
        className="mt-6 flex items-center gap-2 bg-blue-100 hover:bg-blue-200 disabled:opacity-50 border-2 border-blue-900 text-blue-900 px-6 py-2 font-heading text-xl shadow-[4px_4px_0_rgba(30,58,138,1)] disabled:active:translate-y-0 disabled:active:translate-x-0 disabled:active:shadow-[4px_4px_0_rgba(30,58,138,1)] active:translate-y-1 active:translate-x-1 active:shadow-[0_0_0_rgba(30,58,138,1)] transition-all"
      >
        Berikutnya <ChevronRight className="w-5 h-5" />
      </button>
    </PixelCard>
  );
}

export function ViewFinal({ message }: { message: string }) {
  const whatsappUrl = `https://wa.me/6285832939049?text=${encodeURIComponent(message)}`;

  return (
    <PixelCard>
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <MessageCircleHeart className="w-16 h-16 text-blue-500 mx-auto" />
      </motion.div>
      <h2 className="text-3xl font-heading text-blue-900 mt-4 mb-2">Yey kamu maapin aku!</h2>
      <p className="text-blue-800 font-sans text-2xl mb-8 leading-relaxed">
        Makasih banyak ya honey udah mau maafin aku. Aku janji akan terus berusaha buat bahagiain kamu. Aku sayang banget sama kamu, selamanya.
      </p>
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-green-400 hover:bg-green-500 border-2 border-green-900 text-white px-6 py-3 font-heading text-xl shadow-[4px_4px_0_rgba(20,83,45,1)] active:translate-y-1 active:translate-x-1 active:shadow-[0_0_0_rgba(20,83,45,1)] transition-all"
      >
        <Send className="w-5 h-5" />
        Chat Kesayanganmu
      </a>
    </PixelCard>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Heart, Image as ImageIcon, Send, Star, ChevronRight, Snowflake } from 'lucide-react';
import PixelCard from './components/PixelCard';

export function ViewHome({ onNext }: { onNext: () => void }) {
  return (
    <PixelCard>
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      >
        <Mail className="w-16 h-16 text-blue-800" strokeWidth={1.5} />
      </motion.div>
      <h1 className="text-3xl md:text-4xl font-heading text-blue-900 mt-2">
        Ada surat untukmu...
      </h1>
      <p className="text-blue-800 text-2xl font-sans">
        Buka surat ini ya, sayang.
      </p>
      <button
        onClick={onNext}
        className="mt-6 flex items-center gap-2 bg-blue-100 hover:bg-blue-200 border-2 border-blue-900 text-blue-900 px-6 py-2 font-heading text-xl shadow-[4px_4px_0_rgba(30,58,138,1)] active:translate-y-1 active:translate-x-1 active:shadow-[0_0_0_rgba(30,58,138,1)] transition-all"
      >
        Buka Surat <ChevronRight className="w-5 h-5" />
      </button>
    </PixelCard>
  );
}

export function ViewSurat({ onNext }: { onNext: () => void }) {
  return (
    <PixelCard>
      <Heart className="w-12 h-12 text-red-500 mx-auto fill-red-500" />
      <h2 className="text-3xl font-heading text-blue-900">Untuk Sayangku</h2>
      <div className="text-blue-800 leading-relaxed text-2xl font-sans space-y-4 text-left">
        <p>Athifah Nur Rasyah Safitri, duniaku, segalanya bagiku...</p>
        <p>Aku nulis ini dari lubuk hatiku yang terdalam. Aku benar-benar ingin minta maaf ya, honey. Aku sadar banget akhir-akhir ini aku sering bikin hari-hari kamu terasa berat, sedih, dan lelah.</p>
        <p>Maafin aku kalau kadang aku masih egois, kurang peka, dan belum bisa ngertiin perasaan kamu sepenuhnya. Aku tahu, aku masih jauh dari kata sempurna, dan mungkin belum sepenuhnya bisa jadi seperti apa yang kamu harapkan selama ini.</p>
        <p>Tapi ketahuilah, perasaanku ke kamu itu nyata. Aku selalu mau berusaha jadi versi terbaik dari diriku untuk kamu, karena kamu terlalu berharga untuk disakiti.</p>
      </div>
      <button
        onClick={onNext}
        className="mt-4 flex items-center gap-2 bg-blue-100 hover:bg-blue-200 border-2 border-blue-900 text-blue-900 px-6 py-2 font-heading text-xl shadow-[4px_4px_0_rgba(30,58,138,1)] active:translate-y-1 active:translate-x-1 active:shadow-[0_0_0_rgba(30,58,138,1)] transition-all"
      >
        Berikutnya <ChevronRight className="w-5 h-5" />
      </button>
    </PixelCard>
  );
}

export function ViewCinta({ onNext }: { onNext: () => void }) {
  return (
    <PixelCard>
      <Snowflake className="w-12 h-12 text-blue-400 mx-auto" />
      <h2 className="text-3xl font-heading text-blue-900">Puisi Untukmu</h2>
      <div className="text-blue-800 font-sans text-2xl leading-relaxed space-y-2 my-4">
        <p>Di antara dinginnya salju,</p>
        <p>Cintaku padamu tetap hangat berpadu.</p>
        <p>Senyummu adalah mentari pagiku,</p>
        <p>Tawamu adalah melodi terindahku.</p>
        <br/>
        <p>Meski kadang aku membuatmu terluka,</p>
        <p>Namun sungguh hanya kamu yang ku damba.</p>
        <p>Maafkan kekuranganku yang tak sempurna,</p>
        <p>Athifah, kamu keajaiban di hidupku.</p>
      </div>
      <button
        onClick={onNext}
        className="mt-2 flex items-center gap-2 bg-blue-100 hover:bg-blue-200 border-2 border-blue-900 text-blue-900 px-6 py-2 font-heading text-xl shadow-[4px_4px_0_rgba(30,58,138,1)] active:translate-y-1 active:translate-x-1 active:shadow-[0_0_0_rgba(30,58,138,1)] transition-all"
      >
        Berikutnya <ChevronRight className="w-5 h-5" />
      </button>
    </PixelCard>
  );
}

export function ViewKenangan({ onNext }: { onNext: () => void }) {
  const photos = [
    { src: "https://files.catbox.moe/s4x8ci.jpg", caption: "9 mei, 2026 Sabtu jam 10.22 pagi" },
    { src: "https://files.catbox.moe/7h0ehd.jpg", caption: "13 mei, 2026 Rabu jam 1.18 siang" },
    { src: "https://files.catbox.moe/m36gqh.jpg", caption: "26 mei, 2026 selasa jam 9.56 pagi" },
    { src: "https://files.catbox.moe/arwtwq.jpg", caption: "12 mei, 2026, Selasa jam 7.08 malam" },
    { src: "https://files.catbox.moe/i0cqjv.jpg", caption: "12 mei, 2026, Selasa jam 12.46 siang" }
  ];
  
  const rotations = [-3, 4, -2, 5, -4];

  return (
    <PixelCard className="max-w-3xl">
      <h2 className="text-3xl font-heading text-blue-900 mb-6">Kenangan Manis Kita</h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full mb-4">
        {photos.map((photo, idx) => (
          <motion.div
            key={idx}
            initial={{ rotate: rotations[idx] }}
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
            className="bg-white p-2 md:p-3 flex flex-col items-center border-2 border-blue-900 shadow-[4px_4px_0_rgba(30,58,138,1)] w-32 md:w-40 cursor-pointer"
          >
            <div className="w-full aspect-square bg-blue-100 border-2 border-blue-900 overflow-hidden flex items-center justify-center">
              <img src={photo.src} alt={`Kenangan ${idx + 1}`} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            <div className="w-full mt-3 mb-1 min-h-[40px] flex items-center justify-center">
              <p className="text-blue-900 text-xs md:text-sm font-sans text-center leading-tight">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="text-blue-700 text-xl font-sans mt-2 mb-2">
        maaf sayang, ada beberapa foto yang hilang ☹️
      </p>
      <button
        onClick={onNext}
        className="mt-6 flex items-center gap-2 bg-blue-100 hover:bg-blue-200 border-2 border-blue-900 text-blue-900 px-6 py-2 font-heading text-xl shadow-[4px_4px_0_rgba(30,58,138,1)] active:translate-y-1 active:translate-x-1 active:shadow-[0_0_0_rgba(30,58,138,1)] transition-all"
      >
        Berikutnya <ChevronRight className="w-5 h-5" />
      </button>
    </PixelCard>
  );
}

export function ViewPesan({ onNext }: { onNext: () => void }) {
  return (
    <PixelCard>
      <h2 className="text-3xl font-heading text-blue-900 mb-4">Kamu Sangat Berharga</h2>
      <div className="text-blue-800 leading-relaxed font-sans text-2xl text-left space-y-4">
        <p>Tidak apa-apa sayang, jika dunia ini terasa tidak adil bagimu. Dan tak apa-apa jika di dunia yang luas ini kamu merasa hanya punya sedikit teman.</p>
        <p>Karena selama aku ada, aku akan selalu berusaha menjadi pelindungmu dari dunia yang jahat, dan menjadi teman sejati yang takkan pernah melepaskan genggaman tanganmu.</p>
        <p>Kamu mungkin nggak selalu sadar, tapi kamu sangat berharga. Kamu adalah satu-satunya tempat di mana hatiku merasa benar-benar pulang. Aku sayang kamu, selamanya.</p>
      </div>
      <button
        onClick={onNext}
        className="mt-8 flex items-center gap-2 bg-blue-100 hover:bg-blue-200 border-2 border-blue-900 text-blue-900 px-6 py-2 font-heading text-xl shadow-[4px_4px_0_rgba(30,58,138,1)] active:translate-y-1 active:translate-x-1 active:shadow-[0_0_0_rgba(30,58,138,1)] transition-all"
      >
        Berikutnya <ChevronRight className="w-5 h-5" />
      </button>
    </PixelCard>
  );
}

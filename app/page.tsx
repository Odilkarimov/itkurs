'use client';

import { FaTelegramPlane, FaInstagram, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white px-4 py-8">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-center text-transparent animate-shine"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ItKurs.uz
      </motion.h1>
      <motion.p
        className="mt-6 text-lg md:text-xl text-center text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Siz yaratadigan kelajak uchun mukammal boshlanish. <br />
        <span className="text-white font-semibold">ItKurs.uz — professional onlayn ta&apos;lim loyihasi yoki IT platforma uchun ideal domen.</span>
      </motion.p>
      <motion.div
        className="mt-10 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md shadow-lg px-8 py-6 max-w-xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-gray-100 mb-4 text-center">Nega aynan ushbu domen?</h2>
        <ul className="space-y-3 text-base text-gray-300">
          <li>✔️ Domen qisqa, tushunarli va professional ko‘rinadi</li>
          <li>✔️ SEO uchun mos (asosiy so‘zlar: <i>IT</i>, <i>Kurs</i>)</li>
          <li>✔️ O‘z brendingizni yaratish uchun mustahkam asos</li>
          <li>✔️ .uz zonasi — mahalliy ishonch va obro‘</li>
        </ul>
      </motion.div>
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <p className="text-lg md:text-xl text-white font-medium mb-4">
          Domen sotuvda. Taklifingiz bormi?
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+998770099136"
            className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-full flex items-center gap-2 text-white text-base"
          >
            <FaPhone /> +998 77 009 91 36
          </a>
          <a
            href="https://t.me/odilkrmv"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full flex items-center gap-2 text-white text-base"
          >
            <FaTelegramPlane /> @odilkrmv
          </a>
          <a
            href="https://instagram.com/odilkarimov"
            target="_blank"
            className="bg-pink-600 hover:bg-pink-700 transition px-6 py-3 rounded-full flex items-center gap-2 text-white text-base"
          >
            <FaInstagram /> @odilkarimov
          </a>
        </div>
      </motion.div>
      <motion.p
        className="mt-10 text-sm text-gray-500 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Unutmang, bu domen — noyob imkoniyat. Faqat eng tez va aqlli qaror qabul qilganlar uchun.
      </motion.p>
    </main>
  );
};

export default Home;

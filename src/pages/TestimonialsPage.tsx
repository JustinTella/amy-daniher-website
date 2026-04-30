import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSectionHeader from '@/components/PageSectionHeader';

const GOOGLE_URL = "https://www.google.com/maps/place/Amy+S.+Daniher,+M.D./@37.5680082,-122.3311919,17z/data=!4m16!1m7!3m6!1s0x808f9e71249680f7:0x707aae76c5c22f3c!2sAmy+S.+Daniher,+M.D.!8m2!3d37.568004!4d-122.326321!16s%2Fg%2F1wt3nncv!3m7!1s0x808f9e71249680f7:0x707aae76c5c22f3c!8m2!3d37.568004!4d-122.326321!9m1!1b1!16s%2Fg%2F1wt3nncv?entry=ttu&g_ep=EgoyMDI2MDQxOS4wIKXMDSoASAFQAw%3D%3D";

const reviews = [
  { name: 'Justin T.', initial: 'J', color: '#4285F4', time: 'just now', text: 'Amazing practice! Dr. Daniher and her staff are extremely attentive, responsive, and considerate.' },
  { name: 'Hunter K.', initial: 'H', color: '#5f4b32', time: '12 years ago', text: 'Excellent bedside manner, very smart, good staff.' },
  { name: 'Barbara E.', initial: 'B', color: '#e8344a', time: '2 years ago', text: '' },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#f5a623">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="bg-light-gray min-h-screen pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <PageSectionHeader title="Patient Reviews" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="border border-gray-200 bg-white p-8 shadow-sm"
          >
            <div className="text-center mb-6">
              <div className="text-[1.6rem] font-semibold tracking-tight leading-none mb-2" aria-label="Google">
                <span style={{ color: '#4285F4' }}>G</span>
                <span style={{ color: '#EA4335' }}>o</span>
                <span style={{ color: '#FBBC05' }}>o</span>
                <span style={{ color: '#4285F4' }}>g</span>
                <span style={{ color: '#34A853' }}>l</span>
                <span style={{ color: '#EA4335' }}>e</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm text-gray-600 font-medium">5.0</span>
                <Stars />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {reviews.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                  className="border border-gray-200 rounded p-6 flex flex-col min-h-[220px]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{ backgroundColor: r.color }}>
                      {r.initial}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 leading-tight">{r.name}</p>
                      <Stars />
                    </div>
                  </div>
                  <p className="text-[15px] text-gray-700 leading-7 flex-1">{r.text}</p>
                </motion.div>
              ))}
            </div>

            <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-navy py-3.5 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-steely-blue"
            >
              Review Us on Google
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default TestimonialsPage;

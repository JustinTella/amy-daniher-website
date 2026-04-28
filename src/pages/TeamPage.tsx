import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSectionHeader from '@/components/PageSectionHeader';
import drHero from '@/assets/daniher67.webp';
import shawnaPortrait from '@/assets/1864.png';
import kimPortrait from '@/assets/Kim (1).webp';

function TeamPage() {
  return (
    <>
      <Header />
      <main className="bg-light-gray">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageSectionHeader title="Meet the Office" />
          </div>
        </section>

        <section id="amy" className="pb-16 scroll-mt-28">
          <div className="mb-12 border-y border-navy/10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 items-center lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="py-8 lg:py-10"
                >
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold md:text-base">Meet</p>
                  <div className="mb-3 h-0.5 w-20 bg-navy/70" />
                  <h2 className="text-balance text-[2.1rem] font-semibold leading-[1.02] tracking-tight text-navy md:text-[3.1rem] lg:text-[3.7rem]">
                    Amy Daniher, M.D.
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex justify-end py-6"
                >
                  <div className="h-44 w-44 overflow-hidden rounded-full border-2 border-navy/15 shadow-md">
                    <img src={drHero} alt="Dr. Amy Daniher" className="h-full w-full scale-[1.08] object-cover object-[center_24%]" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                <div className="mb-8">
                  <h4 className="text-[1.55rem] font-bold text-navy mb-3 uppercase tracking-wide">Background</h4>
                  <ul className="space-y-3 text-[26px] text-foreground/90 leading-[3.2rem]">
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Born and raised in Kansas City</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Began private practice in San Mateo in 2001</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Initially practiced with Mills-Peninsula Medical Group before becoming an independent physician</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Served as medical director for several senior living communities on the Peninsula</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Selected one of SF's Top Doctors in 2019 and 2024</li>
                  </ul>
                </div>
                <div className="mb-8">
                  <h4 className="text-[1.55rem] font-bold text-navy mb-3 uppercase tracking-wide">Education</h4>
                  <ul className="space-y-3 text-[26px] text-foreground/90 leading-[3.2rem]">
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Graduated from the University of North Carolina at Chapel Hill</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Graduated from the University of Kansas School of Medicine</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Completed internship and residency in Internal Medicine</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Honored as one of the best senior residents</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[1.55rem] font-bold text-navy mb-3 uppercase tracking-wide">Professional Associations</h4>
                  <ul className="space-y-3 text-[26px] text-foreground/90 leading-[3.2rem]">
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> American Medical Association</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> San Mateo County Medical Association</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> California Medical Association</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Private Practice Doctors of the Peninsula</li>
                    <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Board Certified by the American Board of Internal Medicine in 1998, recertified in 2008 and 2018</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} className="space-y-8">
                <div className="bg-white p-6 shadow-sm border border-gray-300 border-t-4 border-t-gold">
                  <h4 className="text-[1.55rem] font-bold text-navy mb-3 uppercase tracking-wide border-b border-gray-200 pb-2">Certifications</h4>
                  <p className="mt-3 text-[26px] text-foreground/90 leading-[3.2rem]">
                    Board certified in Internal Medicine.
                  </p>
                  <p className="mt-3 text-[26px] text-foreground/90 leading-[3.2rem]">
                    Board Certified by the American Board of Internal Medicine in 1998, recertified in 2008 and 2018.
                  </p>
                </div>
                <div className="bg-white p-6 shadow-sm border border-gray-300 border-t-4 border-t-steely-blue">
                  <h4 className="text-[1.55rem] font-bold text-navy mb-3 uppercase tracking-wide border-b border-gray-200 pb-2">Why I Practice Medicine</h4>
                  <p className="mt-3 text-[26px] text-foreground/90 leading-[3.2rem]">
                    I practice medicine because it allows me to connect with people in meaningful ways during some of their most important moments. From the start, I was drawn to the blend of science, problem-solving, and human interaction that defines clinical care. What continues to sustain me is the daily privilege of spending time with my patients—listening to their stories, understanding their concerns, and working together to improve their health and well-being. Those relationships and the tangible ways I can make a difference in someone&apos;s life bring me real fulfillment.
                  </p>
                  <p className="mt-3 text-[26px] text-foreground/90 leading-[3.2rem]">
                    Medicine challenges me intellectually every day, keeping me engaged and constantly learning. I enjoy the variety of cases, the opportunity to apply knowledge in real time, and the satisfaction of seeing patients feel better or gain clarity about their health. For me, practicing medicine is about building trust and partnership with the individuals I care for, and that human element is what makes the work rewarding and worth doing.
                  </p>
                </div>
                <div className="bg-white p-6 shadow-sm border border-gray-300 border-t-4 border-t-gold">
                  <h4 className="text-[1.55rem] font-bold text-navy mb-3 uppercase tracking-wide border-b border-gray-200 pb-2">Personal Life</h4>
                  <p className="mt-3 text-[26px] text-foreground/90 leading-[3.2rem]">
                    Dr. Daniher is married and resides on the Peninsula. She has three children. When not caring for patients, she enjoys being outdoors, photography, gardening, North Carolina basketball, and Notre Dame football.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="shawna" className="border-t border-navy/15 py-14 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[200px_1fr] lg:gap-14 items-start">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-4 lg:items-start"
              >
                <div className="h-40 w-40 overflow-hidden rounded-full border-2 border-navy/15 shadow-md">
                  <img src={shawnaPortrait} alt="Shawna G." className="h-full w-full object-cover object-top" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-[2.1rem] font-semibold text-navy">Shawna G.</p>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wider text-steely-blue">Office Manager</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}>
                <div className="bg-white p-6 shadow-sm border border-gray-300 border-t-4 border-t-steely-blue">
                  <h4 className="text-[1.55rem] font-bold text-navy mb-3 uppercase tracking-wide border-b border-gray-200 pb-2">About Shawna</h4>
                  <p className="mt-3 text-[26px] text-foreground/90 leading-[3.2rem]">
                    Shawna was born and raised in the Bay Area. A self-described soccer mom and baseball mom, she spends much of her free time with her three children. She cheers on the Giants and 49ers. Shawna is the Office Manager and has been with the practice since 2004.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="kim" className="border-t border-navy/15 py-14 pb-20 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[200px_1fr] lg:gap-14 items-start">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-4 lg:items-start"
              >
                <div className="h-40 w-40 overflow-hidden rounded-full border-2 border-navy/15 shadow-md">
                  <img src={kimPortrait} alt="Kim J." className="h-full w-full object-cover object-top" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-[2.1rem] font-semibold text-navy">Kim J.</p>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wider text-gold">Medical Assistant</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}>
                <div className="bg-white p-6 shadow-sm border border-gray-300 border-t-4 border-t-gold">
                  <h4 className="text-[1.55rem] font-bold text-navy mb-3 uppercase tracking-wide border-b border-gray-200 pb-2">About Kim</h4>
                  <p className="mt-3 text-[26px] text-foreground/90 leading-[3.2rem]">
                    Kim is a Bay Area native who spends her free time hiking and enjoying time at the beach. She loves to travel and hopes to do more of this in the future. Kim is the Medical Assistant and has been with the practice since 2021.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default TeamPage;

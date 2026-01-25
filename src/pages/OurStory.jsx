import React from "react";
import { motion } from "framer-motion";

import hero from "../assets/image/story-hero.webp";
import section1 from "../assets/image/story-section-1.webp";
import section2 from "../assets/image/story-section-2.webp";
import wide from "../assets/image/story-wide.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const OurStory = () => {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <motion.img
          src={hero}
          alt="Our Story Hero"
          loading="lazy"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center max-w-4xl text-white"
          >
            <h1 className="font-Lavishly text-5xl md:text-6xl mb-6">
              Our Story
            </h1>
            <p className="font-Quicksand text-lg text-gray-50">
              Crafted with intention. Designed to move with you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 1 ================= */}
      <section className="w-full lg:w-[95%] xl:w-[80%] mx-auto px-2 lg:px-6 py-12 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.img
          src={section1}
          alt="Craft & Vision"
          loading="lazy"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-full rounded-2xl object-cover"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-Outfit text-2xl text-center lg:text-3xl mb-4">
            A Vision Beyond Footwear
          </h2>
          <p className="font-Outfit text-center text-gray-600 leading-relaxed">
            We don't chase trends. We build identity.
            Every pair is designed with restraint, balance,
            and a deep respect for timeless form. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore accusantium tempora placeat fugit rem quod fugiat nesciunt, modi praesentium sint id quas unde minus, consequuntur veritatis fuga obcaecati ducimus sunt dicta. Quam ex impedit rem fuga aliquam, ipsa quas officia et, doloribus culpa illum <span className="font-Lavishly text-xl font-semibold">delectus tenetur tempora</span> delectus tenetur tempora natus distinctio minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quam eaque et aspernatur facilis, unde at laboriosam dolores ut hic fugiat, autem amet facere accusamus quisquam. Aliquam quidem incidunt minus doloremque, recusandae reprehenderit magni distinctio earum officiis deserunt itaque amet possimus molestiae obcaecati perferendis, quia suscipit asperiores laborum? Ea culpa error minus, beatae laboriosam sit doloremque, incidunt ex, explicabo quia ipsa illum officiis veritatis facere sapiente neque illo corrupti architecto.
          </p>
        </motion.div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="w-full lg:w-[95%] xl:w-[80%] mx-auto px-2 lg:px-6 py-12 lg:py-22 grid lg:grid-cols-2 gap-12 lg:gap-18 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <h2 className="font-Outfit text-center  text-2xl md:text-3xl mb-4">
            Designed With Purpose
          </h2>
          <p className="font-Outfit text-center  text-gray-600 leading-relaxed">
            From materials to silhouette, every detail is intentional.
            Nothing exists without a reason. Minimalism is our language. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore accusantium tempora placeat fugit rem quod fugiat nesciunt, modi praesentium sint id quas unde minus, consequuntur veritatis fuga obcaecati ducimus sunt dicta. Quam ex impedit rem fuga aliquam, ipsa quas officia et, doloribus culpa illum <span className="font-Lavishly text-xl font-semibold">delectus tenetur tempora</span> delectus tenetur tempora natus distinctio minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quam eaque et aspernatur facilis, unde at laboriosam dolores ut hic fugiat, autem amet facere accusamus quisquam. Aliquam quidem incidunt minus doloremque, recusandae reprehenderit magni distinctio earum officiis deserunt itaque amet possimus molestiae obcaecati perferendis, quia suscipit asperiores laborum? Ea culpa error minus, beatae laboriosam sit doloremque, incidunt ex, explicabo quia ipsa illum officiis veritatis facere sapiente neque illo corrupti architecto.
          </p>
        </motion.div>

        <motion.img
          src={section2}
          alt="Design Process"
          loading="lazy"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-full object-cover rounded-2xl order-1 lg:order-2"
        />
      </section>

      {/* ================= TEXT BREAK ================= */}
      <section className="max-w-3xl mx-auto px-2 py-5 text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-Outfit text-2xl lg:text-3xl text-gray-800 leading-relaxed"
        >
          True luxury is quiet.  
          It's felt in motion, not announced.
        </motion.p>
      </section>

      {/* ================= WIDE IMAGE ================= */}
      <section className="w-full max-h-[80vh]">
        <motion.img
          src={wide}
          alt="Lifestyle Wide"
          loading="lazy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full h-full object-cover"
        />
      </section>

      {/* ================= FINAL STORY BOX ================= */}
      <section className="px-2 py-7 sm:py-10 lg:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto bg-[#f5f5f5] p-5 lg:p-16 text-center border border-gray-200"
        >
          <h3 className="font-Outfit text-xl md:text-2xl mb-6">
            The Story Behind Every Step
          </h3>

          <p className="font-Outfit text-gray-600 leading-relaxed mb-4">
            Our journey began with a simple belief — footwear should
            complement who you are, not overpower it. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum libero, possimus excepturi exercitationem enim nisi. Ab omnis labore, adipisci nemo, quis ea fuga quod impedit quasi saepe rerum. Non, nostrum!
          </p>

          <p className="font-Outfit text-gray-600 leading-relaxed mb-4">
            We obsess over materials, form, and comfort to create
            pieces that feel natural, confident, and enduring. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium architecto suscipit debitis modi dignissimos ratione, error fugit repudiandae aspernatur dolor, neque inventore distinctio in cupiditate nostrum laborum ducimus, doloribus eligendi.
          </p>

          <p className="font-Outfit text-gray-600 leading-relaxed">
            This is not fast fashion.  
            This is design meant to walk with you for years. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut modi quibusdam, libero recusandae sequi esse aperiam aut blanditiis est aliquid itaque dolorum cum eaque. Ullam tenetur dolorem aut velit dolore.
          </p>
        </motion.div>
      </section>

    </main>
  );
};

export default OurStory;

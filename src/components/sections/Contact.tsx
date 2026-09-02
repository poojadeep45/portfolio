import { motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const Contact = () => {
  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <div className="mt-12 flex flex-col gap-6">
          <p className="text-secondary font-medium">
            Feel free to reach out to me directly through any of these:
          </p>

          <a
            href={`mailto:${config.html.email}`}
            className="bg-tertiary shadow-primary flex items-center gap-4 rounded-xl px-6 py-4 font-medium text-white shadow-md transition hover:opacity-80"
          >
            📧 {config.html.email}
          </a>

          <a
            href="https://www.linkedin.com/in/pooja-deep-1bb950276/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tertiary shadow-primary flex items-center gap-4 rounded-xl px-6 py-4 font-medium text-white shadow-md transition hover:opacity-80"
          >
            💼 LinkedIn
          </a>

          <a
            href="https://github.com/poojadeep45"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tertiary shadow-primary flex items-center gap-4 rounded-xl px-6 py-4 font-medium text-white shadow-md transition hover:opacity-80"
          >
            💻 GitHub
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
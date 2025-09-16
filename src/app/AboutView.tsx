import { motion } from 'framer-motion';
import Shell from '../components/layout/Shell';
import SpaceWorkingIllustration from '../components/illustrations/SpaceWorkingIllustration';

export default function AboutView() {
  return (
    <section id="about" className="py-20">
      <Shell>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Data scientist and bioinformatics engineer specializing in machine learning for biological research.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Space-themed Working Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-square bg-gradient-to-br from-primary-600/10 to-accent-600/10 rounded-2xl flex items-center justify-center max-w-md mx-auto p-8 text-primary-400">
              <SpaceWorkingIllustration />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Hello, I'm Walter McCain III
            </h3>
            
            <div className="space-y-4 text-gray-400">
              <p>
                I'm a data scientist and bioinformatics engineer with deep expertise in machine learning,
                cloud computing, and scientific research. As the founder of FlowFix Labs, I develop
                AI-driven automation solutions and cloud pipelines that transform how businesses and
                researchers approach complex data challenges.
              </p>

              <p>
                My research experience at Loyola University's Dr. Miller Lab focuses on developing
                ML pipelines for protein mutation prediction using advanced models like VAEs, RNNs,
                and LSTMs. I've optimized high-performance computing workflows and mentored students
                in bioinformatics and machine learning methodologies.
              </p>

              <p>
                I specialize in building scalable data pipelines on AWS and GCP, developing
                bioinformatics tools for amino acid analysis, and creating automation solutions
                that bridge the gap between scientific research and practical business applications.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Core Competencies</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Machine Learning',
                  'Bioinformatics',
                  'Cloud Architecture',
                  'Data Pipeline Design',
                  'Scientific Computing',
                  'AI Automation',
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <span className="text-primary-400 mr-2">✓</span>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="btn-primary text-lg px-8 py-3 inline-block"
              >
                Let's Connect
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Shell>
    </section>
  );
}

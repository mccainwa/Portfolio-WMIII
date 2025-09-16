import { motion } from 'framer-motion';
import Shell from '../components/layout/Shell';
import TechIcon from '../components/icons/TechIcon';

export default function HomeView() {
  return (
    <main className="min-h-screen pt-20">
      <Shell>
        {/* Hero Section */}
        <section id="home" className="py-20 lg:py-32">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-gradient">Walter McCain III</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Data Scientist | Bioinformatics | Cloud & AI Automation
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Leveraging machine learning and bioinformatics to unlock insights from complex biological data.
              Building scalable cloud pipelines and AI-driven automation for scientific research and business solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#projects"
                className="btn-primary text-lg px-8 py-3 inline-block"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="btn-secondary text-lg px-8 py-3 inline-block"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </section>

        {/* Skills Preview */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Technologies I Love</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Building with modern tools and frameworks to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Python', 'R', 'SQL', 'AWS', 'GCP', 'Docker',
              'Machine Learning', 'Bioinformatics', 'HPC', 'SageMaker', 'BigQuery', 'LLM'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card text-center p-4 hover:border-primary-500/50 transition-all duration-300 group"
              >
                <div className="mb-3 text-primary-400 group-hover:text-accent-400 transition-colors duration-300">
                  <TechIcon name={tech} className="w-8 h-8 mx-auto" />
                </div>
                <div className="text-sm font-medium text-gray-300">{tech}</div>
              </motion.div>
            ))}
          </div>
        </section>
      </Shell>
    </main>
  );
}

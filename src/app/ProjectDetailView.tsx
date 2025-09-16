import { motion } from 'framer-motion';
import Shell from '../components/layout/Shell';

interface ProjectDetailViewProps {
  projectId?: string;
}

export default function ProjectDetailView({ projectId }: ProjectDetailViewProps) {
  return (
    <section className="py-20 min-h-screen">
      <Shell>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => window.history.back()}
            className="flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <span className="mr-2">←</span>
            Back to Projects
          </motion.button>

          {/* Project Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Project Details</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Project ID: {projectId || 'Coming Soon'}
            </p>
          </div>

          {/* Project Content Placeholder */}
          <div className="card">
            <div className="aspect-video bg-gradient-to-br from-primary-600/20 to-accent-600/20 rounded-lg mb-8 flex items-center justify-center">
              <span className="text-6xl">🚀</span>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-400 mb-6">
              This is a placeholder for detailed project information. 
              The actual project content will be populated based on the project data.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Project Links</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-primary-400 hover:text-primary-300 transition-colors">
                    🔗 Live Demo
                  </a>
                  <a href="#" className="block text-primary-400 hover:text-primary-300 transition-colors">
                    📁 Source Code
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#contact"
                className="btn-primary text-lg px-8 py-3 inline-block"
              >
                Discuss This Project
              </a>
            </div>
          </div>
        </motion.div>
      </Shell>
    </section>
  );
}

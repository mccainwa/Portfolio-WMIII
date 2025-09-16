import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Shell from '../components/layout/Shell';
import ProjectVisual from '../components/projects/ProjectVisual';
import { loadProjects, type Project } from '../lib/content';

export default function ProjectsView() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await loadProjects();
        setProjects(projectData);
      } catch (error) {
        console.error('Failed to load projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-20">
        <Shell>
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
            <p className="text-gray-400 mt-4">Loading projects...</p>
          </div>
        </Shell>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20">
      <Shell>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my bioinformatics research, machine learning pipelines, and data science solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                transition: { duration: 0.3 }
              }}
              className="card group cursor-pointer h-full flex flex-col relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
              }}
            >
              {/* Floating particles effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {Array.from({ length: 8 }).map((_, particleIndex) => (
                  <motion.div
                    key={particleIndex}
                    className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>

              {/* Project Visual */}
              <div className="aspect-video bg-gradient-to-br from-primary-600/20 to-accent-600/20 rounded-lg mb-4 overflow-hidden relative group-hover:shadow-lg group-hover:shadow-primary-500/20 transition-shadow duration-300">
                <div className="absolute inset-0 opacity-40">
                  <ProjectVisual projectSlug={project.slug} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-semibold text-lg mb-1">{project.title}</div>
                  <div className="text-gray-300 text-sm">{project.tags.slice(0, 3).join(' • ')}</div>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="text-xs bg-accent-600/20 text-accent-400 px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-400 text-sm mb-4 flex-1">
                  {project.short}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Project Links */}
                {project.links && project.links.length > 0 && (
                  <div className="flex gap-2 mt-auto">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-primary-600/20 text-primary-400 hover:bg-primary-600/30 px-3 py-1 rounded transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="btn-primary text-lg px-8 py-3 inline-block"
          >
            Let's Build Something Together
          </a>
        </motion.div>
      </Shell>
    </section>
  );
}

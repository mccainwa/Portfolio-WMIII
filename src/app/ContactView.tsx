import { useState } from 'react';
import { motion } from 'framer-motion';
import Shell from '../components/layout/Shell';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20">
      <Shell>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to unlock insights from your data or build scalable ML pipelines? Let's discuss your research or business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400">Param2002@outlook.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <p className="text-gray-400">linkedin.com/in/waltermccainiii</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">🔗</span>
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <p className="text-gray-400">github.com/mccainwa</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400">Chicago, IL</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">What I Can Help With</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <span className="text-primary-400 mr-2">•</span>
                  Machine learning pipeline development
                </li>
                <li className="flex items-center">
                  <span className="text-primary-400 mr-2">•</span>
                  Bioinformatics analysis and tools
                </li>
                <li className="flex items-center">
                  <span className="text-primary-400 mr-2">•</span>
                  Cloud data architecture (AWS/GCP)
                </li>
                <li className="flex items-center">
                  <span className="text-primary-400 mr-2">•</span>
                  Scientific computing and HPC optimization
                </li>
                <li className="flex items-center">
                  <span className="text-primary-400 mr-2">•</span>
                  AI-driven business automation
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="card">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Project inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-3"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </Shell>
    </section>
  );
}

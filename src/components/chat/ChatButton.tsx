import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatPanel from './ChatPanel';

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000); // Hide tooltip after 8 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-40 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open AI chat assistant"
        initial={{ opacity: 0, scale: 0, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6, type: "spring", stiffness: 200 }}
      >
        {/* Pulsing ring effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary-500/30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.span
          className="text-2xl relative z-10"
          animate={{
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: 'easeInOut',
          }}
        >
          🤖
        </motion.span>

        {/* Notification dot */}
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-xs">💬</span>
        </motion.div>
      </motion.button>

      {/* Floating tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="fixed bottom-24 right-6 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm shadow-lg pointer-events-none z-30"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 4, duration: 0.5 }}
          >
            Ask me about Walter's projects!
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && <ChatPanel onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

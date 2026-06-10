"use client";

import { AnimatePresence, motion } from "framer-motion";

type ToastProps = {
  message: string;
  visible: boolean;
  onClose: () => void;
};

export function Toast({ message, visible, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="toast-popup"
          role="status"
        >
          <p className="text-base font-semibold">{message}</p>
          <button type="button" className="toast-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

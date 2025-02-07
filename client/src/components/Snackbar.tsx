import { motion, AnimatePresence } from "framer-motion";

interface SnackbarProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export default function Snackbar({ message, type, onClose }: SnackbarProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white text-center ${
            type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const CORRECT_PASSWORD = import.meta.env.VITE_OART_PASSWORD || "oart2025"; // 🔑 reads from env variable

export default function OartGate() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setUnlocked(true);
      setTimeout(() => navigate("/work/oart"), 800); // redirect
    } else {
      setError(true);
      setTimeout(() => setError(false), 600); // reset shake
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden px-6">
      {/* Subtle animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 blur-3xl"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Glassmorphic card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-10 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl"
      >
        {/* Lock icon */}
        <motion.div
          animate={unlocked ? { rotate: 20, scale: 1.2 } : { rotate: 0 }}
          className="flex justify-center mb-6"
        >
          {unlocked ? (
            <Unlock className="w-12 h-12 text-green-500" />
          ) : (
            <Lock className="w-12 h-12 text-primary" />
          )}
        </motion.div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-2">
          Protected Case Study
        </h1>
        <p className="text-muted-foreground text-center mb-6">
          Enter the password to unlock -Scalable UX for Enterprise Workflows case study.
        </p>

        {/* Password form */}
        <motion.form
          onSubmit={handleSubmit}
          animate={error ? { x: [-8, 8, -8, 0] } : {}}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-center text-lg py-6"
          />
          <Button
            type="submit"
            className="w-full py-6 text-base font-medium"
            variant="default"
          >
            Unlock
          </Button>
        </motion.form>

        {error && (
          <p className="text-red-500 text-center mt-3 text-sm">
            Incorrect password. Try again.
          </p>
        )}
      </motion.div>
    </section>
  );
}

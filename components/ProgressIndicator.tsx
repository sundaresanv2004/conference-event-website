import { motion } from 'framer-motion';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  return (
    <div className="w-full bg-gray-700 h-2 rounded-full mt-4 mb-8">
      <motion.div
        className="bg-indigo-500 h-full rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}

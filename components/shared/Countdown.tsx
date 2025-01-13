'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  return hasMounted
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +targetDate - +new Date()
  let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }

  return timeLeft
}

const AnimatedNumber: React.FC<{ value: number }> = ({ value }) => {
  return (
      <AnimatePresence mode="popLayout">
        <motion.span
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
        >
          {value.toString().padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
  )
}

const Countdown: React.FC = () => {
  const targetDate = new Date('2025-02-01T00:00:00')
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate))
  const hasMounted = useHasMounted()

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!hasMounted) {
    return null
  }

  const countdownItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ]

  return (
      <section className="pt-12 px-4 md:px-8 flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <motion.div
              className="text-center space-y-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Countdown to ICDICI 2025: 6th International Conference on Data Intelligence & Cognitive Informatics
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {countdownItems.map(({ label, value }) => (
                  <Card key={label} className="bg-white bg-opacity-5 backdrop-blur-md border-none overflow-hidden">
                    <CardContent className="p-4">
                      <motion.div
                          className="text-4xl md:text-5xl font-bold text-white mb-2"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.5 }}
                      >
                        <AnimatedNumber value={value} />
                      </motion.div>
                      <motion.span
                          className="text-sm md:text-base text-gray-300 uppercase tracking-wider"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {label}
                      </motion.span>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default Countdown


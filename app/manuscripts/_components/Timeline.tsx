import React from 'react'
import { type LucideIcon } from 'lucide-react'

interface TimelineProps {
    children: React.ReactNode
}

export function Timeline({ children }: TimelineProps) {
    return <div className="space-y-6">{children}</div>
}

interface TimelineItemProps {
    children: React.ReactNode
}

export function TimelineItem({ children }: TimelineItemProps) {
    return <div className="flex">{children}</div>
}

interface TimelineIconProps {
    icon: LucideIcon
}

export function TimelineIcon({ icon: Icon }: TimelineIconProps) {
    return (
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-50 dark:bg-blue-900 dark:border-gray-900">
            <Icon className="w-5 h-5 text-blue-500" />
        </div>
    )
}

interface TimelineContentProps {
    children: React.ReactNode
}

export function TimelineContent({ children }: TimelineContentProps) {
    return <div className="ml-4 mb-10">{children}</div>
}


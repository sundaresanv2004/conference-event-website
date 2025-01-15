import React from 'react'
import { type LucideIcon } from 'lucide-react'

interface TimelineProps {
    children: React.ReactNode
}

export function Timeline({ children }: TimelineProps) {
    return <div className="space-y-6 md:space-y-8">{children}</div>
}

interface TimelineItemProps {
    children: React.ReactNode
}

export function TimelineItem({ children }: TimelineItemProps) {
    return <div className="flex flex-col md:flex-row md:items-start">{children}</div>
}

interface TimelineIconProps {
    icon: LucideIcon
}

export function TimelineIcon({ icon: Icon }: TimelineIconProps) {
    return (
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-800 bg-gray-700 mb-4 md:mb-0 md:mr-4">
            <Icon className="w-5 h-5 text-blue-400" />
        </div>
    )
}

interface TimelineContentProps {
    children: React.ReactNode
}

export function TimelineContent({ children }: TimelineContentProps) {
    return <div className="flex-1">{children}</div>
}


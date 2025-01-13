import {Calendar, MapPin, Users} from "lucide-react";


export const navLinks = [
    {
        id: "/#home",
        title: "Home",
    },
    {
        id: "about",
        title: "Program",
        subItems: [
            { id: "/program/committee", title: "Committee" },
            { id: "/program/cfp", title: "Call For Paper" },
            { id: "/program/keynote", title: "Keynote Session" },
        ],
    },
    {
        id: "ConferenceInfo",
        title: "Conference Info",
        subItems: [
            { id: "/#home", title: "Home" },
            { id: "/registration", title: "Event Registration" },
            { id: "/publication", title: "Publication" },
        ],
    },
    {
        id: "/manuscripts",
        title: "Final Manuscripts",
    },
    {
        id: "/venue",
        title: "Venue",
    },
    {
        id: "/contact",
        title: "Contact Us",
    },
    {
        id: "/#importantDates",
        title: "Important-Dates",
    },
];

interface CommitteeMember {
    name: string
    title: string
    institution: string
}

interface CommitteeSection {
    title: string
    members: CommitteeMember[]
}

export const committeeData: CommitteeSection[] = [
    {
        title: "Chief Patrons",
        members: [
            {
                name: "Dr. Mariazeena Johnson",
                title: "CHANCELLOR",
                institution: "SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY",
            },
            {
                name: "Dr. Marie Johnson",
                title: "PRESIDENT",
                institution: "SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY",
            },
            {
                name: "Ms. Maria Catherine Johnson",
                title: "VICE PRESIDENT",
                institution: "SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY",
            },
        ],
    },
    {
        title: "Patrons",
        members: [
            {
                name: "Dr. T. Sasipraba",
                title: "VICE CHANCELLOR",
                institution: "SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY",
            },
        ],
    },
    {
        title: "Convenors",
        members: [
            {
                name: "Dr. T. Sasikala",
                title: "DEAN, SCHOOL OF COMPUTING",
                institution: "SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY",
            },
            {
                name: "Dr. S. Vigneshwari",
                title: "HEAD OF THE DEPARTMENT (Specialisation)",
                institution: "SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY",
            },
        ],
    },
]

export const ProgramOptions: { title: string; href: string; }[] = [
    {
        title: "Committee",
        href: "/docs/primitives/alert-dialog",
    },
    {
        title: "Call For Paper",
        href: "/docs/primitives/hover-card",
    },
    {
        title: "Publication",
        href: "/docs/primitives/hover-card",
    },
]

export const ConferenceInfoOptions: { title: string; href: string; }[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Event Registration",
        href: "/docs/primitives/hover-card",
    },
    {
        title: "Publication",
        href: "/docs/primitives/hover-card",
    },
]

type InfoItemKey = 'date' | 'location' | 'attendees';

export const infoItems: {key: InfoItemKey; icon: React.ElementType;title: string;content: string;}[] = [
    {
        key: 'date',
        icon: Calendar,
        title: 'Event Date',
        content: 'February 01-02, 2025',
    },
    {
        key: 'location',
        icon: MapPin,
        title: 'Location',
        content: 'Sathyabama Centre for Advanced Studies (SCAS)',
    },
    {
        key: 'attendees',
        icon: Users,
        title: 'Attendees',
        content: 'UG, PG, Industrial Experts, Researchers',
    },
]

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
            { id: "history", title: "Committee" },
            { id: "mission", title: "Call For Paper" },
            { id: "vision", title: "Keynote Session" },
        ],
    },
    {
        id: "ConferenceInfo",
        title: "Conference Info",
        subItems: [
            { id: "/#home", title: "Home" },
            { id: "mission", title: "Event Registration" },
            { id: "vision", title: "Publication" },
        ],
    },
    {
        id: "/#about",
        title: "Final Manuscripts",
    },
    {
        id: "/#events",
        title: "Venue",
    },
    {
        id: "/team",
        title: "Contact Us",
    },
    {
        id: "/team",
        title: "Important-Dates",
    },
];

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

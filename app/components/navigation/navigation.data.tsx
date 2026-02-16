import { Baby, BotMessageSquare, Car, Fuel, X } from "lucide-react";

interface Navigation {
    sectionTitle: string,
    links: NavigationConfiguration[]
}

interface NavigationConfiguration {
    name: string,
    url: string,
    icon?: React.ReactElement
    active?: boolean
}

export const navigation: Navigation[] = [
    {
        sectionTitle: "Experience",
        links: [
            { name: 'Ask AI Assistant', url: '/', icon: <BotMessageSquare /> },
            { name: 'StockX', url: '/', icon: <X /> },
            { name: 'RigUp', url: '/', icon: <Fuel /> },
            { name: 'General Motors', url: '/', icon: <Car /> },
        ]
    },
    {
        sectionTitle: "Yusra Mags",
        links: [
            { name: 'Year 2', url: '/', icon: <Baby /> },
            { name: 'Year 1', url: '/', icon: <Baby /> }
        ]
    }
]
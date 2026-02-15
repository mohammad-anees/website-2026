import {
    Menubar,
    MenubarContent,
    MenubarGroup,
    MenubarItem,
    MenubarLabel,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Baby, BotMessageSquare, Pyramid } from "lucide-react"
import { projects } from './projects.data'

export const NavBar = () => {
    return (
        <Menubar className="w-full rounded-none">
            <MenubarLabel className="flex gap-2">
                <Pyramid size={18} />
                <h1 className="font-bold uppercase">
                    Mohammad Anees
                </h1>
            </MenubarLabel>
            <div className="flex-1"></div>
            <MenubarMenu>
                <MenubarTrigger>Professional Experience</MenubarTrigger>
                <MenubarContent>
                    <MenubarGroup>
                        <MenubarItem>Ask ChatGPT <MenubarShortcut><BotMessageSquare /></MenubarShortcut></MenubarItem>
                        {projects.map((project) => (
                            <MenubarItem key={project.name}>{project.name} <MenubarShortcut>{project.icon()}</MenubarShortcut></MenubarItem>
                        ))}
                    </MenubarGroup>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Yusra Mag</MenubarTrigger>
                <MenubarContent>
                    <MenubarGroup>
                        <MenubarItem>Year 2 <MenubarShortcut><Baby /></MenubarShortcut></MenubarItem>
                        <MenubarItem>Year 1 <MenubarShortcut><Baby /></MenubarShortcut></MenubarItem>
                    </MenubarGroup>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}
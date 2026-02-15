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
import { projects, mags } from './projects.data'

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
                        <MenubarItem><BotMessageSquare />Ask ChatGPT</MenubarItem>
                        {projects.map((project) => (
                            <MenubarItem key={project.name}>{project.icon()}{project.name}</MenubarItem>
                        ))}
                    </MenubarGroup>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Yusra Mag</MenubarTrigger>
                <MenubarContent>
                    <MenubarGroup>
                        {mags.map((mag) => (
                            <MenubarItem key={mag.name}><Baby />{mag.name}</MenubarItem>
                        ))}
                    </MenubarGroup>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}
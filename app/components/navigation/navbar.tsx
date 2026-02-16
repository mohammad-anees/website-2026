import {
    Menubar,
    MenubarContent,
    MenubarGroup,
    MenubarItem,
    MenubarLabel,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Pyramid } from "lucide-react"
import { navigation } from './navigation.data'
import Link from "next/link"

export const NavBar = () => {
    const onNavigateHandler = (url: string) => {

    }
    return (
        <Menubar className="w-full rounded-none">
            <MenubarLabel className="flex gap-2">
                <Pyramid size={18} />
                <h1 className="font-bold uppercase">
                    Mohammad Anees
                </h1>
            </MenubarLabel>
            <div className="flex-1"></div>
            {navigation.map(navSection => (
                <MenubarMenu key={navSection.sectionTitle}>
                    <MenubarTrigger>{navSection.sectionTitle}</MenubarTrigger>
                    <MenubarContent>
                        <MenubarGroup>
                            {navSection.links.map((link) => (
                                <MenubarItem key={link.name}>
                                    <Link href={link.url} className="flex gap-3 items-center">
                                        {link.icon}{link.name}
                                    </Link>
                                </MenubarItem>
                            ))}
                        </MenubarGroup>
                    </MenubarContent>
                </MenubarMenu>
            ))}
        </Menubar>
    )
}
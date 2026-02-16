import { Separator } from "@/components/ui/separator"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Pyramid } from "lucide-react"
import { navigation } from "./navigation.data"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="mt-2">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className="flex gap-2 px-2">
                            <Pyramid />
                            <h1 className="text-md font-bold uppercase">Mohammad Anees</h1>
                        </div>
                    </SidebarMenuItem>
                    <SidebarMenuItem className="mt-3"><Separator /></SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            {navigation.map((navSection) => (
                <SidebarGroup key={navSection.sectionTitle}>
                    <SidebarGroupLabel>{navSection.sectionTitle}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        {navSection.links.map((link) => (
                            <SidebarMenuItem key={link.name}>
                                <SidebarMenuButton asChild>
                                    <a href={link.url}>
                                        {link.icon}
                                        <span>{link.name}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarGroupContent>
                </SidebarGroup>
            ))}
        </Sidebar>
    )
}
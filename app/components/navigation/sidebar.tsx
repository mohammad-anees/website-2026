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
import { Baby, BotMessageSquare, Car, Fuel, KeySquare, Pyramid, X } from "lucide-react"
import { projects } from "./projects.data"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="mt-2">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className="flex gap-2">
                            <Pyramid />
                            <h1 className="text-md font-bold uppercase">Mohammad Anees</h1>
                        </div>
                    </SidebarMenuItem>
                    <SidebarMenuItem className="mt-3"><Separator /></SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarGroup>
                <SidebarGroupLabel>Professional Experience</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem key="llm-search">
                            <SidebarMenuButton asChild>
                                <a href="/">
                                    <BotMessageSquare />
                                    <span>Ask ChatGPT</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        {projects.map((project) => (
                            <SidebarMenuItem key={project.name}>
                                <SidebarMenuButton asChild>
                                    <a href={project.url}>
                                        {project.icon()}
                                        <span>{project.name}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
                <SidebarGroupLabel>Yusra Mag</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem key="yusra-mag-2">
                            <SidebarMenuButton asChild>
                                <a href="/">
                                    <Baby />
                                    <span>Year 2</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem key="yusra-mag-1">
                            <SidebarMenuButton asChild>
                                <a href="/">
                                    <Baby />
                                    <span>Year 1</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </Sidebar>
    )
}
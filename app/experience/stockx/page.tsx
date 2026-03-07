import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"


const StockXExperience = () => {
    return (
        <div className="mt-4 self-center w-md md:w-full max-w-2xl">
            <Card>
                <CardHeader>
                    <CardTitle>
                        <h1 className="text-2xl">StockX</h1>
                    </CardTitle>
                    <CardDescription>
                        <div className="space-x-2">
                            <Badge variant="secondary">Nov 2020 - Present</Badge>
                            <Badge variant="secondary">Senior Software Engineer</Badge>
                        </div>
                    </CardDescription>
                    <CardAction>
                        <Button variant="secondary"><ExternalLink /></Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <p className="">
                        Engineer on the Core Services Team, responsible for the state of the StockX global market, ensuring
                        successful matches, and trading of goods between sellers and buyers. Leading projects to deliver
                        company OKRs from discovery to delivery, mentoring on best development practices, and handling or
                        supporting incident management.
                    </p>
                </CardContent>
                <CardFooter className="justify-end">
                    <Button variant="ghost" size="xs">View Full Resume</Button>
                </CardFooter>
            </Card>
        </div >
    )
}

export default StockXExperience

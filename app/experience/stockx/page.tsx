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
import Link from "next/link"
import ExperienceData, { ExperienceDataProps } from "@/app/components/shared/experienceData"
import { Separator } from "@/components/ui/separator"

const stockxAchievementsData: ExperienceDataProps[] = [
    {
        title: "Rebuilding the Marketplace Core",
        summary: "The system at the heart of StockX — responsible for every order created on the platform — needed a full rebuild. I led it end-to-end: design, implementation, and a zero-downtime migration while the marketplace ran at full traffic.",
        bulletedDetails: [
            "The new architecture is event-driven (Kafka), built on real-time data streaming (Flink), containerized microservices (Node/TypeScript on K8s), and AWS infrastructure.",
            <>Migrated <b>10,000 req/s</b> of live traffic without a single incident, preserving a <b>15ms p99 latency SLA</b> throughout.</>,
            <>Bids and asks now hit the market <b>80% faster</b> — the result of rethinking caching and rearchitecting how Kafka consumers processed events.</>,
            <>A market recalculation that used to take <b>8+ hours</b> (and destabilize trading while it ran) now completes in 2 hours with no disruption to buyers or sellers.</>,
            <>
                The rebuild unlocked two major product launches: <Link className="text-blue-400" href="https://stockx.com/lp/xpress-ship/" target="_blank">StockX Express Shipping</Link> and
                the <Link className="text-blue-400" href="https://stockx.com/news/introducing-the-stockx-verified-seller-program/" target="_blank">Verified Seller Program</Link> — which together now account for <b>50% of all orders</b> on the platform.
            </>
        ]
    },
    {
        title: "Rescuing Failed Orders",
        summary: "When a seller cancels, fails to ship, or fails verification, StockX has a window to recover the sale automatically. The system doing that work had grown brittle — recovery rates swung wildly depending on market conditions, and there was no good visibility into why.",
        bulletedDetails: [
            <>I rebuilt the reconciliation system from the ground up, introducing more sophisticated recovery logic and support for new inventory sources. Recovery stabilized at a consistent <b>60% rate</b> — recovering roughly <b>$100K per week</b> in revenue that would otherwise be lost.</>
        ]
    },
    {
        title: "Dynamic Bid/Ask Matching",
        summary: "StockX matching used to be rigid. I built a configurable matching system that let business teams define custom bid-to-ask ranges across different product attributes — no engineering changes required. The architecture built for this became the foundation for several larger platform initiatives that followed."
    },
    {
        title: "Fee Configuration Overhaul",
        summary: <>Replaced a inflexible fee system with one that gave the business real configurability. The new system drove <b>$6.5M in Q4 2021</b> alone, with an estimated <b>$37.5M impact projected for 2022</b>.</>
    },
    {
        title: "Safe Migration Tooling",
        summary: "Cutting over from a legacy system to a rebuilt one is risky — you need confidence the new system behaves identically before you flip the switch. I built an internal service that ran both systems in parallel, comparing outputs through custom Datadog dashboards so we could validate parity before every launch."
    }
]

const stockxTechnologies: string[] = [
    'Typescript', 'Javascript', 'NodeJs', 'Kafka', 'AWS', 'SQL', 'Redis',
    'Apache Flink', 'Kubernetes', 'Spring Boot', 'Kotlin', 'Php', 'Go'
]


const StockXExperience = () => {
    return (
        <div className="py-6 self-center w-md md:w-full max-w-2xl">
            <Card>
                <CardHeader>
                    <CardTitle>
                        <h1 className="text-3xl pb-1">StockX</h1>
                        <p>Snr. Software Engineer</p>
                    </CardTitle>
                    <CardDescription>
                        <h1 className="text-md font-bold">Nov 2020 - Present</h1>
                    </CardDescription>
                    <CardAction>
                        <Button variant="secondary">
                            <Link href="https://stockx.com/" target="_blank"><ExternalLink /></Link>
                        </Button>
                    </CardAction>
                </CardHeader>
                <Separator />

                <CardContent className="space-y-2">
                    <div className="pb-2">
                        <p className="text-lg">
                            Engineer on the Core Services Team, responsible for the state of the StockX global market, ensuring
                            successful matches, and order creation and management.
                        </p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Achievements</h1>
                        {stockxAchievementsData.map((achievement, index) => <ExperienceData key={index} {...achievement} />)}
                    </div>
                    <div>
                        <h1 className="text-xl font-bold mb-1.5">Technologies</h1>
                        <div className="space-x-2 space-y-1">
                            {stockxTechnologies.map((tech, index) => <Badge variant="darkgreen" key={index}>{tech}</Badge>)}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="justify-end">
                    <Link href="/experience/query">
                        <Button variant="ghost" size="sm">
                            Get More Details
                        </Button>
                    </Link>
                    <Link href="/" target="_blank">
                        <Button variant="outline" size="sm">
                            View Full Resume
                            <ExternalLink />
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div >
    )
}

export default StockXExperience

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardImage,
    CardTitle,
} from "@/components/ui/card";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { JsIcon } from "./icons/JsIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { ExpressIcon } from "./icons/ExpressIcon";
import { TsIcon } from "./icons/TsIcon";
import { NodeIcon } from "./icons/NodeIcon";
import { SassIcon } from "./icons/SassIcon";
import { MongoIcon } from "./icons/MongoIcon";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { TailwindIcon } from "./icons/TailwindIcon";
import { NextIcon } from "./icons/NextIcon";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const Project = () => {
    return (
        <Section className="">
            <h3 className="text-2xl mb-4 text-primary font-caption">
                Projets:
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <Card className={cn("w-80 min-h-96")}>
                    <CardHeader>
                        <CardImage
                            className="rounded-md"
                            src="https://res.cloudinary.com/dj25e78gvx/image/upload/v1713197344/logoSpot_a7ya83.png"
                            alt=""
                        />
                    </CardHeader>
                    <CardContent>
                        <CardTitle>SPOT</CardTitle>
                        <CardDescription>
                            Est une application mobile né lors du 7ème Ocean
                            Hackathon de Boulogne-sur-Mer.
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-col ">
                        <div className="flex items-center gap-4 ">
                            <div className="flex flex-col items-center gap-1">
                                <JsIcon radius="rounded-md" size={32} />
                                <p className="text-sm">JavaScript</p>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <ReactIcon radius="rounded-md" size={32} />
                                <p className="text-sm">React Native</p>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <SassIcon radius="rounded-md" size={32} />
                                <p className="text-sm">Sass</p>
                            </div>
                        </div>
                        <Link aria-disabled target="blank" href="https://www.linkedin.com/company/92723158/admin/feed/posts/" className={cn(buttonVariants({variant: "outline"}),  "p-2 flex-col mb-2 ml-2 mt-2")} >
                                Démo
                            </Link>
                    </CardFooter>
                </Card>

                <Card className={cn("w-80 min-h-96")}>
                    <CardHeader>
                        <CardImage
                            className="rounded-md"
                            src="https://res.cloudinary.com/dj25e78gvx/image/upload/v1713386498/image_obidp8.png"
                        />
                    </CardHeader>
                    <CardContent>
                        <CardTitle>SPOT API</CardTitle>
                        <CardDescription>
                        Pour répondre aux besoins de l'application mobile SPOT, une API a été développée.
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-col ">
                        <div className="flex items-center gap-4 ">
                            <div className="flex flex-col items-center gap-1">
                                <TsIcon radius="rounded-md" size={32} />
                                <p className="text-sm">TypeScript</p>
                            </div>
                            <div className="flex flex-col items-center gap-1 ">
                                <NodeIcon radius="rounded-md" size={32} />
                                <p className="text-sm">NodeJs</p>
                            </div>
                            <div className="flex flex-col items-center gap-1 ">
                                <ExpressIcon radius="rounded-md" size={32} />
                                <p className="text-sm">Express</p>
                            </div>
                            <div className="flex flex-col items-center gap-1 ">
                                <MongoIcon radius="rounded-md" size={32} />
                                <p className="text-sm">MongoDb</p>
                            </div>
                        </div>
                        <Link aria-disabled target="blank" href="https://www.linkedin.com/company/92723158/admin/feed/posts/" className={cn(buttonVariants({variant: "outline"}),  "p-2 flex-col mb-2 ml-2 mt-2")} >
                                Démo
                            </Link>
                    </CardFooter>
                </Card>

                <Card className={cn("w-80 min-h-96")}>
                    <CardHeader>
                        <CardImage
                            className="rounded-md"
                            src="https://res.cloudinary.com/dj25e78gvx/image/upload/v1713386498/image_obidp8.png"
                        />
                    </CardHeader>
                    <CardContent>
                        <CardTitle>CodeBook API</CardTitle>
                        <CardDescription>
                        API servant à emprunter et rendre des livres dans différentes librairies en libre-service (projet de formation).
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-col ">
                        <div className="flex items-center gap-4 ">
                            <div className="flex flex-col items-center gap-1">
                                <TsIcon radius="rounded-md" size={32} />
                                <p className="text-sm">TypeScript</p>
                            </div>
                            <div className="flex flex-col items-center gap-1 ">
                                <NodeIcon radius="rounded-md" size={32} />
                                <p className="text-sm">NodeJs</p>
                            </div>
                            <div className="flex flex-col items-center gap-1 ">
                                <ExpressIcon radius="rounded-md" size={32} />
                                <p className="text-sm">Express</p>
                            </div>
                            <div className="flex flex-col items-center gap-1 ">
                                <MongoIcon radius="rounded-md" size={32} />
                                <p className="text-sm">Express</p>
                            </div>
                        </div>
                        <Link aria-disabled target="blank" href="https://github.com/AlexisCuvillier/code_book_API" className={cn(buttonVariants({variant: "outline"}),  "p-2 flex-col mb-2 ml-2 mt-2")} >
                                Code
                            </Link>
                    </CardFooter>
                </Card>

                <Card className={cn("w-80 min-h-96")}>
                    <CardHeader>
                        <CardImage
                            className="rounded-md"
                            src="https://res.cloudinary.com/dj25e78gvx/image/upload/v1713534098/portfoliov2img_f7uhqf.png"
                        />
                    </CardHeader>
                    <CardContent>
                        <CardTitle>PortfolioV2</CardTitle>
                        <CardDescription className="pt-2.5">
                           Refonte du portfolio en TypeScript avec NextJs et TailwindCss
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-col ">
                        <div className="flex items-center gap-4 ">
                            <div className="flex flex-col items-center gap-1">
                                <TsIcon radius="rounded-md" size={32} />
                                <p className="text-sm">TypeScript</p>
                            </div>
                            <div className="flex flex-col items-center gap-1 ">
                                <NextIcon radius="rounded-md" size={32} />
                                <p className="text-sm">NextJs</p>
                            </div>
                            <div className="flex flex-col items-center gap-1 ">
                                <TailwindIcon radius="rounded-md" size={32} />
                                <p className="text-sm">Tailwind Css</p>
                            </div>
                        </div>
                        <Link aria-disabled target="blank" href="https://github.com/AlexisCuvillier/portfolio_next" className={cn(buttonVariants({variant: "outline"}),  "p-2 flex-col mb-2 ml-2 mt-2")} >
                                Code
                            </Link>
                    </CardFooter>
                </Card>
            </div>
        </Section>
    );
};

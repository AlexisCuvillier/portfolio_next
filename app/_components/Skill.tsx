import Link from "next/link";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { JsIcon } from "./icons/JsIcon";
import { TsIcon } from "./icons/TsIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { NodeIcon } from "./icons/NodeIcon";
import { MongoIcon } from "./icons/MongoIcon";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface Icon {
    id: number;
    img: JSX.Element;
    alt: string;
    name: string;
    link: string;
}

interface Formation {
    id: number;
    school: string;
    date: string;
    titre: string;
    name: string;
}

const tech: Icon[] = [
    {
        id: 1,
        img: <GithubIcon size={40} />,
        alt: "Github pictures",
        name: "Github",
        link: "https://github.com/AlexisCuvillier",
    },
    {
        id: 2,
        img: <JsIcon size={40} />,
        alt: "JavaScript pictures",
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        id: 3,
        img: <TsIcon size={40} />,
        alt: "TypeScript pictures",
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
    },
    {
        id: 4,
        img: <ReactIcon size={40} />,
        alt: "React pictures",
        name: "React",
        link: "https://react.dev/",
    },
    {
        id: 5,
        img: <NodeIcon size={40} />,
        alt: "NodeJS pictures",
        name: "NodeJs",
        link: "https://react.dev/",
    },
    {
        id: 6,
        img: <MongoIcon size={40} />,
        alt: "MongoDB pictures",
        name: "MongoDb",
        link: "https://www.mongodb.com/fr-fr",
    },
];

const form: Formation[] = [
    {
        id: 1,
        school: "3w Academy",
        date: "En cours 📅",
        titre: "recherche alternance en cours ⏳",
        name: "Expert en Systèmes d'Information",
    },
    {
        id: 2,
        school: "Simplon",
        date: "2022 - 2023 📅",
        titre: "titre pro: ✅",
        name: "Concepteur Développeur d'Application",
    },
    {
        id: 3,
        school: "Simplon",
        date: "2021 - 2022 📅",
        titre: "titre pro: ✅",
        name: "Développeur Web et Web Mobile",
    },
];

export const Skill = () => {
    return (
        <Section className="flex max-md:flex-col items-start">
            <div className="flex-grow w-1/3 ">
                <h3 className="text-2xl font-caption text-primary">Compétences:</h3>
                <ul>
                    {tech.map((icon: Icon) => (
                        <Link
                            key={icon.id}
                            href={icon.link}
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                                "size-24 p-0 flex-col mb-2 ml-2 mt-2"
                            )}
                        >
                            {icon.img}
                            <p> {icon.name}</p>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="flex-grow w-2/3 ">
                <h3 className="text-2xl font-caption text-primary">Formations:</h3>
                <div className=" border-l-2 pl-4">

                {form.map((formation) => (
                    <Card className="my-2" key={formation.id}>
                        <CardHeader>
                            <CardTitle>{formation.date}</CardTitle>
                            <CardDescription>
                                {formation.school} • {formation.name} (
                                {formation.titre}){" "}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))}
                </div>
            </div>
        </Section>
    );
};

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
    CardImage,
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
    img:string;
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
        school: "RNCP niveau 7",
        date: "En cours 📅",
        titre: "recherche d'alternance en cours ⏳",
        name: "Expert en Systèmes d'Information",
        img:"https://3wacademy.fr/assets/img/logo-3wa-ecole-code-numerique.svg"
    },
    {
        id: 2,
        school: "RNCP niveau 6",
        date: "2022 - 2023 📅",
        titre: "titre pro: ✅",
        name: "Concepteur Développeur d'Application",
        img:"https://simplon.co/images/logo.svg"
    },
    {
        id: 3,
        school: "RNCP niveau 5",
        date: "2021 - 2022 📅",
        titre: "titre pro: ✅",
        name: "Développeur Web et Web Mobile",
        img:"https://simplon.co/images/logo.svg"
    },
];

export const Skill = () => {
    return (
        <Section className="flex max-md:flex-col items-start">
            <div className="flex-[2] w-full ">
                <h3 className="text-2xl font-caption text-primary">
                    Compétences:
                </h3>
                <ul>
                    {tech.map((icon: Icon) => (
                        <Link
                            target="_blank"
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
            <div className="flex-[3] w-full max-md:mt-8 ">
                <h3 className="text-2xl font-caption text-primary">
                    Formations:
                </h3>
                <div className="flex-col">
                    {form.map((formation) => (
                        <Card className="my-2" key={formation.id}>
                            <div className="flex">
                                <CardImage
                                    src={`${formation.img}`}
                                    className="bg-muted-foreground rounded-l-xl p-2"
                                    style={{ width: 90, height: "auto" }}
                                    alt=""
                                />
                                <CardHeader>
                                    <CardTitle>{formation.date}</CardTitle>
                                    <CardDescription>
                                        {formation.school} • {formation.name} (
                                        {formation.titre}){" "}
                                    </CardDescription>
                                </CardHeader>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
};

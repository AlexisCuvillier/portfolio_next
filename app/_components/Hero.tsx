import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return (
        <span
            className={cn("bg-accent/30 border-accent p-1 m-1", className)}
            {...props}
        />
    );
};
export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col max-md:justify-center max-md:items-center items-start">
            <div className="flex-[2]">
                <h2 className="font-caption text-5xl text-primary mb-2">
                    Alexis Cuvillier
                </h2>
                <h3 className="font-caption text-3xl mb-2 ">
                    Expert en systèmes d'informations
                </h3>
                <p className="mb-2">
                Passionné de programmation depuis mon enfance, j'ai débuté en développant des scripts pour un jeu lors de mes sessions de botting. Lors de ma reconversion, je me suis orienté vers le développement et ai obtenu un diplôme de développeur full stack & concepteur d'applications. Prochainement, je suivrai une formation d'Expert en systèmes d'information (équivalent bac +5).
                </p>
                <p >
                Parallèlement, ayant terminé deuxième lors de l'Océan Hackathon de Boulogne-sur-Mer 2022, nous travaillons, avec d'anciens camarades de ma précédente formation, sur une application mobile touristique.
                </p>
            </div>
            <div className="flex-1">
                <img
                    src="https://res.cloudinary.com/dj25e78gvx/image/upload/v1712827514/me-removebg-preview_gha2ql.png"
                    alt="alexis photo"
                    className="w-48 h-auto max-w-sm rounded-full"
                />
            </div>
        </Section>
    );
};

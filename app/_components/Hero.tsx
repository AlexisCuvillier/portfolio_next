import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";


const Code = ({className,...props }: ComponentPropsWithoutRef<"span">) => {
    return <span className={cn("bg-accent/30 border-accent p-1 m-1",className)} {...props}/>
}
export const Hero = () => {
   
    
    return (
        <Section className="flex max-md:flex-col items-start">
            <div className="flex-[2]">
                <h2 className="font-caption text-5xl text-primary">Alexis Cuvillier</h2>
                <h3 className="font-caption text-3xl ">Expert en systèmes d'informations</h3>
                <p>
                Passioner depuis petit par la programmation j'ai commencer ma premiere experience en developpant des scripts pour un jeu pendant mes sessions de botting, lors de ma reconversion je me suis donc orienté vers la proggramattion j'ai donc acquis un diplolme de developpeur full stack & concepteur d'application, prochainement j'effectuerais une formation Expert en systemes d'information(équivalent bac +5).
                </p>
                <p>
                    Parralelement ayant terminé 2eme lors du océan hackathon de Boulogne-sur-Mer nous développons avec des alumni de ma précédente formation une application mobile a destination touristique
                </p>
            </div>
            <div className="flex-1 ">
                <img
                    src="https://res.cloudinary.com/dj25e78gvx/image/upload/v1712827514/me-removebg-preview_gha2ql.png"
                    alt="alexis photo"
                    className="w-48 h-auto max-w-sm rounded-full"
                />
            </div>
        </Section>
    );
};

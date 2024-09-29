// import Link from "next/link";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { CiMail } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { z } from "zod";
import { FormContact } from "./FormContact";

export const Contact = () => {
  return (
    <Section className="flex flex-col ">
      <h3 className="text-2xl font-caption text-primary mb-12">Contact</h3>
      <div className="flex align-middle justify-center flex-col ">
        <FormContact />
        {/* <Link
                    className={cn(
                        buttonVariants({ variant: "outline" }),
                        "p-2 flex-col mb-2 ml-2 mt-2"
                    )}
                    href={"mailto:alexis.cuvillier@protonmail.com"}
                >
                    <div className="flex items-center">
                        <CiMail size={25} />
                        <p className="ml-2 mt-1 text-center">Envoyer un mail</p>
                    </div>
                // // </Link> */}
        {/* <Link
                    className={cn(
                        buttonVariants({ variant: "outline" }),
                        "p-2 flex-col mb-2 ml-2 mt-2"
                    )}
                    target="blank"
                    href={
                        "https://calendly.com/equipe-3wa/prise-de-contact-entreprise-eleve?utm_content=Alexis%20Cuvillier&utm_campaign=recK4RIgq6oNAR7qO&utm_source=+33780591534"
                    }
                >
                    <div className="flex items-center">
                    <CiCalendarDate size={25}   />
                    <p className="ml-2 mt-1 text-center">Réserver un crénau</p>
                    </div>
                </Link>  */}
      </div>
    </Section>
  );
};

import Link from "next/link";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { JsIcon } from "./icons/JsIcon";

export type SkillProps = {};

export const Skill = (props: SkillProps) => {
    return (
        <Section>
            <div className="flex max-md:flex-col items-start ">
                <div className="flex-1">
                    <h3>Compétences</h3>
                    <Link
                        href={
                            "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                        }
                        className={cn(
                            buttonVariants({ variant: "outline" }),
                            "size-24 p-0 flex-col"
                        )}
                    >
                        <JsIcon size={40} />
                        <p>JavaScript</p>
                    </Link>
                </div>
                <div>
                    <h3>Formation</h3>
                </div>
            </div>
        </Section>
    );
};

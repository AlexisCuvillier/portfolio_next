import { Button, buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { GithubIcon } from "./icons/GithubIcon"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LinkedinIcon } from "./icons/LinkedinIcon"

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 z-20 bg-background">
        <Section className="flex items-baseline">
            <h1 className="text-lg font-bold text-primary">alexis-cuvillier.com</h1>
            <div className="flex-1" />
              <ul className="flex items-center gap-2">
                <Link target="blank" href={'https://github.com/alexiscuvillier'} className={cn(buttonVariants({variant:"outline"}), 'size-6 p-0')}>
                  <GithubIcon size={16} className="text-foreground" />
                </Link>
                <Link target="blank" href={'https://www.linkedin.com/in/alexiscuvillier/'} className={cn(buttonVariants({variant:"outline"}), 'size-6 p-0')}>
                  <LinkedinIcon size={16} className="text-foreground" />
                </Link>
                <Link  target="blank" href={'https://drive.google.com/file/d/1VwcM5zNS-ZXhLGpUEbHFiTloQzuZ2YVe/view'} className={cn(buttonVariants({variant:"outline"}), 'size-6 p-0')}>
                  <p>CV</p>
                </Link>
              </ul>
        </Section>
    </header>
  )
}
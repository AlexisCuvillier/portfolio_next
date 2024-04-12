import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "./Section"



export const Project = () => {
  return (
    <Section>
        <div>
            <h3 className="text-2xl text-primary font-caption">Projets:</h3>
            <div className="flex">

            <Card>
                <CardHeader>
                    <CardTitle>SPOT</CardTitle>
                    <CardDescription>Application Mobile</CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>SPOT</CardTitle>
                    <CardDescription>Application Mobile</CardDescription>
                </CardHeader>
            </Card>
            </div>
        </div>
    </Section>
  )
}
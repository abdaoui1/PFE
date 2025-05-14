import { CalendarCheck2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";


export function ConsulterEmploisCard() {
    return (

        <Card className="flex flex-col w-[90%] sm:w-[60%] mx-auto mt-3 items-center text-center shadow-md transition-all hover:shadow-lg">

            <CardHeader>

            {/* Icon */}
                <div className="flex h-20 w-20 items-center justify-center mx-auto rounded-full bg-blue-100">
                    <CalendarCheck2 className="h-10 w-10 text-blue-600" />     
                </div>
            {/* Icon */}
            
                <CardTitle className="mt-4">Consultez votre emploi du temps en un clic !</CardTitle>
            </CardHeader>


            <CardContent>
                <CardDescription className="text-base">

                    Ne manquez plus aucun cours ou événement important. Accédez rapidement à votre planning personnalisé,
                    à jour et toujours disponible depuis votre tableau de bord. Organisation
                    , simplicité et efficacité sont au rendez-vous !
                </CardDescription>
            </CardContent>
        </Card>

    )
}

import { getBaseUrl } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";


export const NavItems = () => {
    const pathname = usePathname();

    function isNavItemActice ( pathname :string , nav : string ) {
        return pathname.includes(nav);
    }

    return [
        {
            name: "Page d'Acceuil" ,
            href: `/admin`,
            icon: <Home size={20}/>,
            active: pathname === `${getBaseUrl()}/admin`,
            position: 'top'
        },
        {
            name: "Professeurs" ,
            href: `${getBaseUrl()}/admin/prof/liste-prof`,
            icon: <Home size={20}/>,
            active: isNavItemActice(pathname , `/admin/prof/liste-prof`),
            position: 'top'
        },
        {
            name: "Classes" ,
            href: `${getBaseUrl()}/admin/classe/liste-classe`,
            icon: <Home size={20}/>,
            active: isNavItemActice(pathname , `/admin/classe/liste-classe`),
            position: 'top'
        },
        {
            name: "Emplois" ,
            href: `${getBaseUrl()}/admin/emplois`,
            icon: <Home size={20}/>,
            active: isNavItemActice(pathname , `/admin/emplois`),
            position: 'top'
        },
        {
            name: "Etudiants" ,
            href: `${getBaseUrl()}/admin/etudiant/liste-etudiant`,
            icon: <Home size={20}/>,
            active: isNavItemActice(pathname , `/admin/etudiant/liste-etudiant`),
            position: 'top'
        },
        {
            name: "Filieres" ,
            href: `${getBaseUrl()}/admin/filieres/liste-filiere`,
            icon: <Home size={20}/>,
            active: isNavItemActice(pathname , `/admin/filieres/liste-filiere`),
            position: 'top'
        },
        {
            name: "Locaux" ,
            href: `${getBaseUrl()}/admin/lieu/liste-lieu`,
            icon: <Home size={20}/>,
            active: isNavItemActice(pathname , `/admin/lieu/liste-lieu`),
            position: 'top'
        },
        {
            name: "Modules" ,
            href: `${getBaseUrl()}/admin/modules-fac/liste-module`,
            icon: <Home size={20}/>,
            active: isNavItemActice(pathname , `/admin/modules-fac/liste-module`),
            position: 'top'
        },
    ]
}
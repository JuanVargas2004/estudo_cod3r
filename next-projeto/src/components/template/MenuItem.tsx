import Link from "next/link";

interface MenuProps{
    icone?: any,
    texto?: string,
    href?: string
}


export default function MenuItem(props: MenuProps){
    return(
        <Link href={props.href ?? "/"} className="flex gap-2 items-center">
            {props.icone}
            {props.texto}
        </Link>
    );
}
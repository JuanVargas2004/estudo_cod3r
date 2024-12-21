import Link from "next/link";

interface MenuProps{
    texto?: string;
    href?: string;
}

export default function Menu(props: MenuProps){
    return(

        <Link className="hover:scale-110 duration-300" href={props.href ?? "/"}>
            
            <div className="text-[1.5vw] hover:text-[#dbdbdb] active:text-[#adadad]">
                {props.texto}
            </div>

        </Link>

    )
}
import MenuItem from "./MenuItem";
import { IconHome, IconNumber1, IconNumber2, IconForms, IconLayout} from "@tabler/icons-react";

export default function Menu(){
    return (
        <aside className="bg-[#102E55] w-80 p-6 flex justify-center items-center">
            <nav className="flex flex-col gap-5">
                <MenuItem texto="Início" href="/" icone={<IconHome/>}></MenuItem>
                <MenuItem texto="Primeiro Componente" href="/primeiro" icone={<IconNumber1/>}></MenuItem>
                <MenuItem texto="Componente UseState" href="/contador" icone={<IconNumber2/>}></MenuItem>
                <MenuItem texto="Formulário" href="/formulario" icone={<IconForms/>}></MenuItem>
                <MenuItem texto="Layout" href="/layout" icone={<IconLayout></IconLayout>}/>
            </nav>
        </aside>
    );
}
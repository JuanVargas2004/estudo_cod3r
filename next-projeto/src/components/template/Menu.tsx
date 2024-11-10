import MenuItem from "./MenuItem";
import { IconHome, IconGhost, IconBarcode, IconForms, IconLayout} from "@tabler/icons-react";

export default function Menu(){
    return (
        <aside className="bg-[#102E55] w-80 p-6 flex justify-center items-center">
            <nav className="flex flex-col gap-5">
                <MenuItem texto="Início" href="/" icone={<IconHome/>}></MenuItem>
                <MenuItem texto="Página Não Existe" href="/primeiro" icone={<IconGhost/>}></MenuItem>
                <MenuItem texto="Layout" href="/layout" icone={<IconLayout></IconLayout>}/>
                <MenuItem texto="Produtos" href="/produtos" icone={<IconBarcode/>}></MenuItem>
                <MenuItem texto="Formulário" href="/formulario" icone={<IconForms/>}></MenuItem>
            </nav>
        </aside>
    );
}
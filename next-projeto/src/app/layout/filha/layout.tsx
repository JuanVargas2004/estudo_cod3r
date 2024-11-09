import Pagina from '@/components/template/Pagina'

export default function Layout(props: any) {
    return (
            <div className="border-8 border-purple-500 p-8 w-full">
                <main>{props.children}</main>
            </div>
    )
}
export default function Rodape(){
    return (
        <footer className=" flex justify-center p-1 bg-[#011733] text-[0.75rem]">
            <span>Todos os direitos reservados &copy; {new Date().getFullYear()}</span>
        </footer>
    );
}
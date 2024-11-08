export default function Rodape(){
    return (
        <footer className=" flex justify-center p-3 bg-purple-700">
            <span>Todos os direitos reservados &copy; {new Date().getFullYear()}</span>
        </footer>
    );
}
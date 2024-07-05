import Aluno from "./components/Aluno.jsx";
import OlaUsuario from "./components/OlaUsuario.jsx"

function App() {
    return (
        <>
            <Aluno nome="Antony Haro" idade={16} isBomAluno={true} />
            <br />
            <Aluno nome="Enrico Hidalgo" idade={16} isBomAluno={false} />
            <br />
            <Aluno nome="Danilo Silva" idade={16} isBomAluno={true} />
            <br />
            <Aluno />
            <br />
            <OlaUsuario isLogado={false}/>
            <br />
            <OlaUsuario isLogado={true} nome="Antony"/>
        </>
    );
}

export default App;

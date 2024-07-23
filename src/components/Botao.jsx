function Botao({ valor, isOperador, isEspecial, onClick }) {
    return (
        <button
            className={`${isOperador ? "operador" : ""} ${
                isEspecial ? "especial" : ""
            }`}
            onClick={() => onClick(valor, isOperador)}
        >
            {valor}
        </button>
    );
}

export default Botao;

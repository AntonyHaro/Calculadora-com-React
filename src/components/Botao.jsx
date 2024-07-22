function Botao({ valor, isOperador, onClick }) {
    return (
        <button
            className={`${isOperador ? "operador" : ""} ${
                valor === "C" ? "clear" : ""
            } ${valor === "=" ? "calcular" : ""}`}
            onClick={() => onClick(valor, isOperador)}
        >
            {valor}
        </button>
    );
}

export default Botao;

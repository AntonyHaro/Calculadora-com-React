function Botao({ valor, isOperador, isEspecial, onClick }) {
    const classes = [
        isOperador ? "operador" : null,
        isEspecial ? "especial" : null,
        valor === "del" ? "del" : null
    ]
    .filter(Boolean)
    .join(" ");

    return (
        <button
            className={classes || undefined}
            onClick={() => onClick(valor, isOperador)}
        >
            {valor}
        </button>
    );
}

export default Botao;

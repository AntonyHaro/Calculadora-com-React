function Botao(props) {
    if (props.valor == "=") {
        return (
            <button className="calcular" onClick={props.onClick}>
                {props.valor}
            </button>
        );
    }

    if (props.valor == "C") {
        return (
            <button className="clear" onClick={props.onClick}>
                {props.valor}
            </button>
        );
    }

    if (props.operador) {
        if (props.valor == "*") {
            return (
                <button
                    className="operador"
                    onClick={() => props.onClick(props.valor, true)}
                >
                    x
                </button>
            );
        }

        return (
            <button
                className="operador"
                onClick={() => props.onClick(props.valor, true)}
            >
                {props.valor}
            </button>
        );
    }

    return (
        <button onClick={() => props.onClick(props.valor)}>
            {props.valor}
        </button>
    );
}

export default Botao;

function Botao(props) {
    if (props.valor == "=") {
        return (
            <button className="calcular operador" onClick={props.onClick}>
                =
            </button>
        );
    }

    if (props.valor == "c") {
        return <button className="clear" onClick={props.onClick}>C</button>;
    }

    if (props.valor == "*") {
        return (
            <button
                className="operador"
                onClick={() => props.onClick(props.valor)}
            >
                x
            </button>
        );
    }

    if (props.operador) {
        return (
            <button
                className="operador"
                onClick={() => props.onClick(props.valor)}
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

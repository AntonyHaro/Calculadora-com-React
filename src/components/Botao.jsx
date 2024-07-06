function Botao(props) {
    if (props.calcular) {
        return <button onClick={props.onClick}>=</button>;
    }

    if (props.limpar) {
        return <button onClick={props.onClick}>C</button>;
    }

    return (
        <button onClick={() => props.onClick(props.valor)}>
            {props.valor}
        </button>
    );
}

export default Botao;

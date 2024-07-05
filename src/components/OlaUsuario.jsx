function OlaUsuario(props){
    if(props.isLogado) {
        return (
            <h1>Bem vindo de volta, {props.nome}!</h1>
        )
    }

    return (
        <h1>Olá, usuário!</h1>
    )
}

export default OlaUsuario
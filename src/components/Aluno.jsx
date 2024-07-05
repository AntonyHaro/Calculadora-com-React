import PropTypes from "prop-types";

function Aluno(props) {
    return (
        <div className="card-aluno">
            <p>Nome do aluno: {props.nome}</p>
            <p>Idade do aluno: {props.idade}</p>
            <p>É um bom aluno? {props.isBomAluno ? "Sim!" : "Não!"}</p>
        </div>
    );
}

Aluno.propTypes = {
    nome: PropTypes.string,
    idade: PropTypes.number,
    isBomAluno: PropTypes.bool,
};

Aluno.defaultProps = {
    nome: "Aluno Padrão",
    idade: 0,
    isBomAluno: false,
};

export default Aluno;

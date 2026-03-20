import React from 'react';

// Recebendo as props
// const PropsExample = (props) => {
// Usando destructuring do js (Basicamente pegando apenas as keys que interessam de um objeto)
const PropsExample = ({nome, idade}) => {
    return (
        <div>
            {/* Chamando a props de nome: */}
            {/* <h3>Olá {props.nome}</h3> */}
            {/* <p>Eu tenho: {props.idade} anos</p> */}

            {/* Chamando a props como variáveis (Usando destructuring): */}
            {<h3>Olá {nome}</h3>}
            {<p>Eu tenho: {idade} anos</p>}
        </div>
    )
}

export default PropsExample;

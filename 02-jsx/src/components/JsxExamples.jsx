import React from "react";

const JsxExamples = () => {
    // Podemos criar variáveis aqui dentro, e tudo o que quisermos, pois é um código JS.

    const userName = 'Jefferson';

    const user = {
        name: "Jefferson",
        lastName: "Frade"
    };

    function getGreeting(name) {
        return `Olá ${name}`;
    }

    const userIsLoggedIn = true;
    const userRole = 'admin';
    const users = [
        {id: 1, name: 'Fulano'},
        {id: 2, name: 'Ciclano'},
        {id: 3, name: 'Beltrano'},
    ]

    return (
        <div>
            <p>O nome do usuário é: {userName}</p>
            <p>Usuário: {user.name} {user.lastName}</p>

            {/** Tudo dentro da interpolação {} é código JS */}
            <p>{2 + 2}</p>
            <p>{getGreeting(userName)}</p>

            {/* Diferenças do HTML */}
            {/* Como JSX roda JS por baixo dos panos, há instruções que não podem ser passadas. Ex: class */}

            {/* Exemplo estilizando uma div */}
            <div className="alguma-coisa">Div</div>

            {/* Todo e qualquer atributo, sempre em camel case (nomeDoAtributo) */}
            <button onClick={() => alert('Teste')}>Clique</button>

            {/* Toda e qualquer tag deve ser encerrada. Ex: <input/> */}
            <input type="text" placeholder="Digite Algo"/>

            {/* Renderização condicional */}
            {/* É uma boa prática renderizar JSX dentro de () */}
            {userIsLoggedIn ? (
                <p>Logado</p>
            ): (
                <p>Deslogado</p>
            )}

            {/* Fazendo condicional com if sem else */}
            <p>{userRole == 'admin' && 'Você é um admin'}</p>

            {/* Renderização de listas */}
            <div>
                <ul>
                    {/* Usando destructuring */}
                    {users.map((user) => (
                        // Sem o key, é gerado um warning, é necessário um identificador único em cada elemento. (É uma boa prática)
                        <li key={user.id}>
                            {user.id} - {user.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default JsxExamples;

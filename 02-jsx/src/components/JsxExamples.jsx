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

    return (
        <div>
            <p>O nome do usuário é: {userName}</p>
            <p>Usuário: {user.name} {user.lastName}</p>

            {/** Tudo dentro da interpolação {} é JS */}
            <p>{2 + 2}</p>
            <p>{getGreeting(userName)}</p>
        </div>
    )
}

export default JsxExamples;

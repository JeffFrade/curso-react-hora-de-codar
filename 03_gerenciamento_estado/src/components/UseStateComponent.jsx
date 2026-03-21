// Importando o useState (Usado para manipular estado das variáveis)
import {useState} from 'react';

// O useState é um hook do React.
// Hook = Funcionalidade especial para fim específico.

const UseStateComponent = () => {
    // Criando um estado (No caso para o count):

    // const [variavelDeConsulta, variavelDeAlteracao]
    // variavelDeAlteracao = callback.
    // useState(valorInicial);

    // Leitura: variavelDeConsulta.
    // Escrita: variavelDeAlteracao (setVariavelDeAlteracao).

    const [count, setCount] = useState(0);

    const increment = () => {
        // setCount(count + 1);

        // Fazendo a manipulação de estado baseado no previous state de forma mais segura:
        // Por padrão, usa-se prevVariavel
        setCount((prevCount) => prevCount + 1);

        console.log(count);
    }

    const [user, setUser] = useState({
        name: 'Fulano',
        age: 65,
        hobbies: ['Leitura', 'Programação']
    });

    const updateUserAge = () => {
        setUser((prevUser) => ({
            ...prevUser, 
            age: prevUser.age + 1
        }));
    }

    return (
        <div>
            <h2>Contador</h2>
            <p>Você clicou {count} vezes</p>
            <button onClick={increment}>Incrementar</button>

            <p>Nome: {user.name} e idade {user.age}</p>
            <button onClick={updateUserAge}>Incrementar Idade</button>
        </div>
    )
}

export default UseStateComponent;
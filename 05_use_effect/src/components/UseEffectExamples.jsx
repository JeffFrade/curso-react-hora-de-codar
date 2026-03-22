import { useState, useEffect } from "react";

const UseEffectExamples = () => {
    // Criando um useEffect:

    // O useState ativa a re-renderização
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    // useEffect é sem dependências.
    // A qualquer alteração ele é disparado.
    useEffect(() => {
        console.log('Rodou UseEffect 1');
    });

    // useEffect com dependências vazias ou array de dependências vazio.
    // O segundo parâmetro do useEffect é o array de dependências.
    // Quando o array de dependências é passado vazio, ele rodado somente 1x ao carregar a página.
    // Um bom exemplo é para carregar dados de uma API.
    useEffect(() => {
        console.log('Rodou UseEffect 2');
    }, []);

    // useEffect com dependências.
    // A dependência é atrelada a um estado, caso o estado mude, ele é acionado.
    useEffect(() => {
        console.log('Rodou UseEffect 3');
    }, [count]);

    return (
        <div>
            <p>{count}</p>
            {/* Fazendo o incremento direto no state */}
            <button onClick={() => setCount(count + 1)}>Incrementar</button>

            <br/>

            <p>{count1}</p>
            <button onClick={() => setCount1(count1 + 1)}>Incrementar (1)</button>
        </div>
    );
};

export default UseEffectExamples;

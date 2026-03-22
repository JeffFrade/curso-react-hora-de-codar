import { useState } from 'react';

const EventHandlingExamples = () => {
    // Nome bem comum para funções que são chamadas em eventos é ter o prefixo handle.
    // Ex: handleNomeDaFuncao

    const handleClick = () => {
        alert('Testando.');
    };

    const handleGreets = (name) => {
        alert(`Olá ${name}`)
    };

    // Aqui criamos um state para pegar os dados que vem do form.
    // Por boa prática, ciramos os statements logo após inicarmos a função do component, mas nesse caso somente para simplificação do estudo, ficou nessa parte.
    const [name, setName] = useState();

    // Aqui vamos lidar com o submit do form.
    // O argumento e é utilizado para gerir os eventos, no caso, fazer o preventDefault, ou seja, impedir a tela de recarregar.
    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Enviado! ${name}`);
    };

    return (
        <div>
            <button onClick={() => { alert('Olá.') }}>Clique Aqui 1</button>
            <button onClick={ handleClick }>Clique Aqui 2</button>
            <br/>

            {/* Lidando em eventos com parâmetros */}
            {/* Se faz necessário usar função anônima para o evento não ser disparado ao carregar a página e sim no clique do usuário */}
            <button onClick={ () => { handleGreets('Fulano') } }>Dizer Olá Fulano</button>
            <button onClick={ () => { handleGreets('Ciclano') } }>Dizer Olá Ciclano</button>
            <br/>

            {/* Eventos em formulários */}
            {/* O onSubmit é o evento para tratar o envio do formulário */}
            <form onSubmit={ handleSubmit }>
                {/* Para pegarmos o valor no state, precisamos de 2 coisas.*/}
                {/* O value precisa equivaler ao state de letitura (nomeDaVariavel). */}
                {/* O evento onChange apontar para ao statement de escrita (setNomeDaVariavel) */}
                <input 
                    type="text" 
                    value={name} 
                    onChange={ (e) => setName(e.target.value) } 
                    placeholder="Nome"
                />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default EventHandlingExamples;

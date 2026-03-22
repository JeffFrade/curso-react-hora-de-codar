// Importando o CSS:
// O ruim dessa abordagem é que pode refletir em componentes filhos.
import './StylesExamples.css';

// A abordagem mais correta é essa, vindo de um arquivo de módulo CSS:
// Os estilos vem como propriedades do objeto.
// Essa abordagem não reflete em filhos ou demais componentes.
import styles from './StylesExamples.module.css'

const StylesExamples = () => {
    // CSS inline
    // Snake case vira camel case.
    const inlineStyle = {
        color: "#0000ff",
        fontSize: "20px"
    };

    return (
        <div>
            {/* Aplicando o estilo inline */}
            <h2 style={inlineStyle}>Estilos Inline</h2>

            {/* Aplicando estilo vindo do arquivo CSS: */}
            {/* Para classes css, utilizar className. */}
            <h2 className="text">Estilos CSS Externo</h2>

            {/* Aplicando estilo vindo de um arquivo de módulo CSS */}
            {/* Nesse caso usamos como um objeto cada classe CSS que criamos no arquivo. */}
            <p className={styles.textPurple}>Estilo CSS Módulos</p>
        </div>
    );
};

export default StylesExamples;

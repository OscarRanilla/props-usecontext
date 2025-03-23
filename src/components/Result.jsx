// Aquí este componente mostrará el resultado y permitirá reiniciar la calculadora.

import { useCalculator } from "../context/CalculatorContext";
import { Link } from "react-router-dom";
import "../styles/Result.css";

const Result = () => {
    const { numbers, resetCalculator } = useCalculator(); // resetCalculator() limpia la lista
    const total = numbers.reduce((acc, num) => acc + num, 0);
    // con numbers.reduce((acc, num) => acc + num, 0) suma todos los números

    return (
        <div className="result-page">
            <h1>Resultado</h1>
            <p>Números seleccionados: {numbers.join(" + ") || "Ninguno"}</p>
            <h2>Total: {total}</h2>
            <button className="btn-reset" onClick={resetCalculator}>Reset</button>
            <Link to="/" className="go-calculator">Volver a la calculadora</Link> 
        </div>
    );
};

export default Result;

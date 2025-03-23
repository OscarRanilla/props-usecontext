// Aquí este componente mostrará los números del 0 al 9 y permitirá seleccionarlos.

import { useCalculator } from "../context/CalculatorContext";
import { Link } from "react-router-dom";
import "../styles/Calculator.css";

const Calculator = () => {
    const { addNumber, numbers } = useCalculator();

    return (
        <div className="calculator">
            <h1>Calculadora</h1>
            <div className="display">
                {numbers.length > 0 ? numbers.join(" + ") : "0"}
            </div>
            <div className="buttons">
                {Array.from({ length: 10 }, (_, i) => (
                    // Aquí creamos los botones del 0 al 9 con Array.from()
                    <button key={i} onClick={() => addNumber(i)}>
                        {i}
                    </button>
                ))}
            </div>
            <Link to="/result" className="result-calculator">Ver Resultado</Link>
        </div>
    );
};

export default Calculator;



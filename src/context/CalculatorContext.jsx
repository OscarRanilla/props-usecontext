// Aquí va el contexto global que manejará los números seleccionados y su suma

import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext();

export const useCalculator = () => useContext(CalculatorContext);

export const CalculatorProvider = ({ children }) => {
    const [numbers, setNumbers] = useState([]); 

    const addNumber = (num) => {
        setNumbers((prev) => [...prev, num]);
    };

    const resetCalculator = () => {
        setNumbers([]);
    };

    return (
        <CalculatorContext.Provider value={{ numbers, addNumber, resetCalculator }}>
            {children}
        </CalculatorContext.Provider>
    );
};

// AQUÍ EL PROVIDER ENVUELVE LA APLICACIÓN Y NOS PERMITE ACCEDER
// A ESTOS VALORES DESDE CUALQUIER COMPONENTE

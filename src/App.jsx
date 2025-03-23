import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CalculatorProvider } from "./context/CalculatorContext";
import Calculator from "./components/Calculator";
import Result from "./components/Result";

function App() {
  return (
    <CalculatorProvider>
      <Router>
        <nav>
          <Link to="/">Calculadora</Link>
          <Link to="/result">Resultado</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </CalculatorProvider>
  );
}

export default App;


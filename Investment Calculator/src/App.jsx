import { useState } from "react"; 
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualIncome: 2000,
    exprectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput,
            [inputIdentifier]: newValue
        };
    });
  }

  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange} />
    <Results input={userInput} />
    </>
  )
}

export default App

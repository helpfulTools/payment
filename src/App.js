import logo from "./logo.png";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const dataObject = [
    { id: 1, order: "First", date: "2021 July 1st" },
    { id: 2, order: "Second", date: "2021 July 14th" },
    { id: 3, order: "Third", date: "2021 July 28th" },
    { id: 4, order: "Forth", date: "2021 August 12th" },
  ];
  const [amount, setAmount] = useState(0);
  const [installment, setInstallment] = useState([]);
  const CreatePaymentPlan = ({ amount }) => {
    const result = dataObject.map((item, index) => {
      return (
        <li className="item-container" key={index}>
          <div className="item">
            <div className="item-left">
              <div>{item.date}</div>
              <div>{item.order} Payment</div>
            </div>
            <div className="item-right">${amount[index]}</div>
          </div>
        </li>
      );
    });
    return <ul>{result}</ul>;
  };

  const handleUpdateAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const decimal = parseFloat((amount % Math.floor(amount)).toFixed(2));

    const splitAmount = parseFloat((Math.floor(amount) / 4).toFixed(2));
    console.log(splitAmount, typeof decimal);
    if (decimal >= 0.01) {
      setInstallment([
        splitAmount + decimal,
        splitAmount,
        splitAmount,
        splitAmount,
      ]);
    } else {
      setInstallment([splitAmount, splitAmount, splitAmount, splitAmount]);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <label>How much do you plan to spend?</label>
          <input onChange={handleUpdateAmount} type="float" id="amount" />
          <input type="submit" value="submit" />
        </form>
        {installment.length > 0 && <CreatePaymentPlan amount={installment} />}
      </header>
    </div>
  );
}

export default App;

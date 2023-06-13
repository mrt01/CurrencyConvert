import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "https://open.er-api.com/v6/latest/USD";

const ConverterForm = () => {
  const [currencies, setCuttencies] = useState({});
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await axios.get(API);
        setCuttencies(response.data.rates);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCurrencyData();
  }, []);

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleConvert = () => {
    if (fromCurrency && toCurrency && amount) {
      const convertedAmount =
        (amount / currencies[fromCurrency]) * currencies[toCurrency];
      setConvertedAmount(convertedAmount.toFixed(3));
    }
  };

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <div className="input-section">
        <label>From:</label>
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value="">Select currency</option>
          {Object.keys(currencies).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <br />
        <label>To:</label>
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          <option value="">Select currency</option>
          {Object.keys(currencies).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <br />
        <label>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
        <br />
        <button onClick={handleConvert}>Convert</button>
      </div>
      {convertedAmount !== 0 && (
        <p className="result">
          Converted amount: <br />
          {amount} {fromCurrency} = {convertedAmount} {toCurrency}
        </p>
      )}
    </div>
  );
};

export default ConverterForm;

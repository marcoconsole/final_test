import { useState } from 'react';
import './App.css';
import CreditCard from './components/CreditCard/CreditCard';
import Input from './components/Input/Input';



function App() {
  const [cardDetails, setCardDetails] = useState({
    cardHolder: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvc: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
        ...cardDetails,
       [name]: value
    });
};

return (
    <div className="mainContainer">
        <CreditCard cardDetails={cardDetails} />
        <Input cardDetails={cardDetails} handleChange={handleChange} />
    </div>
);
}

export default App

import "./index.css";


const Input = ({ cardDetails, handleChange }) => {
    return (
    <div className="inputMainContainer">
        <div className="inputContainer">
            <p>CARDHOLDER NAME</p>
            <input className="mainInput" name="cardHolder" type="text" placeholder="Insert Holder Name.." value={cardDetails.cardHolder} onChange={handleChange}/>
            <p>CARD NUMBER</p>
            <input className="mainInput" name="cardNumber" type="number" placeholder="0000 0000 0000 0000" value={cardDetails.cardNumber} onChange={handleChange}/>
            <section className="dateCvc">
            <p>EXP. DATE</p>
            <p>CVC</p>
            </section>
            <section className="dateContainer">
                <input className="dateInput" name="expMonth" type="number" placeholder="MM" value={cardDetails.expMonth} onChange={handleChange}/>
                <input className="dateInput" name="expYear" type="number" placeholder="YY" value={cardDetails.expYear} onChange={handleChange}/>
                <input className="cvcInput" name="cvc" type="number" placeholder="CVC" value={cardDetails.cvc} onChange={handleChange}/>
            </section>
        </div>
    </div>
    );
}

export default Input;
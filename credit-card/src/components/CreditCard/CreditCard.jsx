import "./index.css";

const CreditCard = ({ cardDetails }) => {
            return (
        <div className="creditCardContainer">
            <div className="creditCard">
                <p>{cardDetails.cardNumber}</p>
                <section className="creditCardText">
                <p>{cardDetails.cardHolder}</p>
                <p>{cardDetails.expMonth}/{cardDetails.expYear}</p>
                </section>
            </div>
        </div>
    );
}
    
    export default CreditCard;
    

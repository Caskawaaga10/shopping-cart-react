import { useEffect, useState } from "react";

const Payment = () => {
  const initialPayment = {
    zaad: false,
    evc: false,
    sahal: false,
  };

  const [paymentMethod, setPaymentMethod] = useState(initialPayment);
  const [updated, setUpdated] = useState();

  useEffect(() => {}, [updated]);
  return(
    <div>
      <h2>Pay With</h2>
      <div className="payment-cards">
      <div className={`payment-card ${paymentMethod.zaad && "selected"}`} onClick={() => setPaymentMethod({...initialPayment, zaad: true})}>
          <h3>Zaad Services</h3>
      </div>
      <div className={`payment-card ${paymentMethod.evc && "selected"}`} onClick={() => setPaymentMethod({...initialPayment, evc: true})}>
          <h3>EVC Plus</h3>
      </div>
      <div className={`payment-card ${paymentMethod.sahal && "selected"}`} onClick={() => setPaymentMethod({...initialPayment, sahal: true})}>
          <h3>Sahal</h3>
      </div>
      <form>
        <input type="text" className="form-control" placeholder="+2526....."/>
        <button className="btn-proceed">Proceed</button>
      </form>
      </div>
    </div>
  )
}

export default Payment;
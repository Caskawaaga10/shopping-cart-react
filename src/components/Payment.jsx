import { useEffect, useState } from "react";
import useShop from "../ShopContext";
import axios from "axios";

const Payment = () => {
  const initialPayment = {
    zaad: false,
    evc: false,
    sahal: false,
  };

  const [paymentMethod, setPaymentMethod] = useState(initialPayment);
  const [updated, setUpdated] = useState();
  const [phone, setPhone] = useState();

  const { total } = useShop;

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(phone)
  }

  const processPayment = async() =>{
    const body = {
      schemaVersion: "1.0",
      requestId: "10111331033",
      timestamp: 1590587436057686,
      channelName: "WEB",
      serviceName: "API_PURCHASE",
      serviceParams: {
        merchantUid: process.env.REACT_APP_MERCHANT_U_ID,
        apiUserId: process.env.REACT_APP_MERCHANT_API_USER_ID,
        apiKey: process.env.REACT_APP_MERCHANT_API_KEY,
        paymentMethod: "mwallet_account",
        payerInfo: {
          accountNo: phone,
        },
        transactionInfo: {
          referenceId: "12334",
          invoiceId: "7896504",
          amount: total,
          currency: "USD",
          description: "REACT ELECTRONIC SHOP"
        }
      }
    };

    const data = await axios.post("https://api.waafi.com/asm", body)
  }

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
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control" placeholder="+2526....." onChange={(e)=> setPhone(e.target.value)} />
        <button className="btn-proceed">Proceed</button>
      </form>
      </div>
    </div>
  )
}

export default Payment;
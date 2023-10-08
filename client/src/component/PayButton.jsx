import axios from "axios";

const PayButton = () => {
  const url = "http://localhost:4000/api/";
  const handleCheckout = () => {
    axios
      .post(`${url}stripe/create-checkout-session`)
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button onClick={() => handleCheckout()}>Check out</button>
    </>
  );
};

export default PayButton;

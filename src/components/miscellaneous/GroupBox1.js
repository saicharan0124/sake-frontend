import { React } from "react";

const GroupBox1 = (props) => {
  return (
    <div
      style={{
        borderRadius: "20px",
        padding: "5px 15px",
        maxWidth: "75%",
        minWidth: "260px",
        color: "white",
        background: "rgb(40,43,48)",
        marginTop: "10px",
        fontSize: "10px",
      }}
    >
      <p class="payment_user">to:{props.to}</p>
      <p class="payment_user">token:{props.token}</p>
      <p class="payment_user">note:{props.note}</p>
      {props.typeoftxn == 1 && (
        <p class="payment_user">amount:{(""+parseInt(props.amount, 16)).substring(0,8)}</p>
      )}
      {props.typeoftxn != 1 && (
        <p class="payment_user">tokenId:{(""+parseInt(props.amount, 16)).substring(0,8)}</p>
      )}

      <p class="payment_user">confirmations:{props.numConfirmations}</p>
      <p class="payment_user">executed:{"" + props.executed}</p>
    </div>
  );
};

export default GroupBox1;

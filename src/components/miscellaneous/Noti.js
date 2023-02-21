import { React } from "react";

const Noti = (props) => {
  return <div
  style={{
    borderRadius: "20px",
    padding: "5px 15px",
    color: "white",
    background: "rgb(40,43,48)",
    margin:"auto",
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "10px",
    width:"90%"
  }}
>
  <p class="payment_user">sender:{props.sender}</p>
  <p class="payment_user">{props.title}</p>
  <p class="payment_user">{props.body}</p>
  
  
</div>
};

export default Noti;

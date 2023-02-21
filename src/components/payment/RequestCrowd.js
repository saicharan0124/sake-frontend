import { React, Input, useState } from "react";
import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../../config/ChatLogics";
import { ChatState } from "../../Context/ChatProvider";
import "../Pay.css";
import axios from "axios";
import { IconButton, Spinner, useToast } from "@chakra-ui/react";
import senderc20 from "../../contracts/frontend-interaction/senderc20";
import Crowdfund_claim from "../../contracts/frontend-interaction/Crowdfund_claim";
import Crowdfund_pledge from "../../contracts/frontend-interaction/Crowdfund_pledge";

const RequestCrowd = (props) => {
  const { selectedChat, setSelectedChat, user, notification, setNotification } =
    ChatState();

  const toast = useToast();

  const [amount, setAmount] = useState("");

  const pay_request = async () => {
    await Crowdfund_pledge(props.id2, props.content, props.token_address);
  };

  const claim_request = async () => {
    await Crowdfund_claim(props.id2);
  };

  const updateMessages = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      console.log("updating" + props.id);
      const { data } = await axios.post(
        `https://sake-backend.onrender.com/api/message/update`,
        {
          messageId: props.id,
        },
        config
      );
      console.log("updating");
      console.log(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Messages",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
    props.refAgain();
  };

  var receiver = "karupaiya";

  var status = "Requested";
  var date = new Date(props.date);
  var last = new Date(props.last);
  var note = props.note;
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div style={{ display: "flex" }} key={props.id}>
      {(isSameSender(props.messages, props.m, props.i, props.user_id) ||
        isLastMessage(props.messages, props.i, props.user_id)) && (
        <Tooltip label={props.sender_name} placement="bottom-start" hasArrow>
          <Avatar
            mt="7px"
            mr={1}
            size="sm"
            cursor="pointer"
            name={props.sender_name}
            src={props.sender_pic}
          />
        </Tooltip>
      )}
      <div
        style={{
          backgroundColor: `${
            props.sender_id === props.user_id
              ? "rgb(54,57,62)"
              : "rgb(40,43,48)"
          }`,
          marginLeft: isSameSenderMargin(
            props.messages,
            props.m,
            props.i,
            props.user_id
          ),
          marginTop: isSameUser(props.messages, props.m, props.i, props.user_id)
            ? 7
            : 10,
          borderRadius: "20px",
          padding: "5px 15px",
          maxWidth: "75%",
          minWidth: "260px",
          color: "white",
          height: "220px",
        }}
      >
        <p class="payment_user">CrowdFunding</p>
        <p class="payment_note">{note}</p>

        {!(props.sender_id === props.user_id) && (
          <div
            style={{
              width: "100%",
              display:"flex"
            }}
          >
            <input
              type="text"
              style={{
                width:"30%",
                height: "40px",
                backgroundColor: "transparent",
                border: "1px solid grey",
                borderRadius: "10px",
                margin:"0px",
                color:"white"
              }}
              onChange={(event) => {
                setAmount(event.target.value);
              }}
              value={amount}
            />
            <span className="payment_currency">{props.currency}</span>
          </div>
        )}
        {props.sender_id === props.user_id && (
          <p className="payment_amount">
            {props.content}
            <span className="payment_currency">{props.currency}</span>
          </p>
        )}
        <div style={{ display: "flex" }}>
          <p class="payment_status" style={{ color: "rgb(255, 223, 64)" }}>
            {month[last.getMonth()]}&ensp;{last.getDate()}&ensp;&ensp;
          </p>
          <p class="payment_date">
            {month[date.getMonth()]}&ensp;{date.getDate()}
          </p>
        </div>
        <div>
          {!(props.sender_id === props.user_id) && (
            <button
              class={"pay_btn"}
              onClick={() => {
                pay_request();
              }}
            >
              pay
            </button>
          )}
          {props.sender_id === props.user_id && (
            <button
              class={"pay_btn"}
              onClick={() => {
                claim_request();
              }}
            >
              claim
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestCrowd;

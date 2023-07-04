import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef, useSelector, useDispatch } from "react";
import "./Message.css";

// const counter = useSelector((state) => state.counter);
// const dispatch = useDispatch();
const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  // const addCounter = () => {
  //   return dispatch({ type: "add" });
  // };
  return (
    <div ref={ref} className={`message  ${isUser && "message__user"}`}>
      {/* {counter} */}
      {/* <button onClick={addCounter}>ADD</button> */}
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography variant="h5" color="white" component="h2">
            {!isUser && `${message.username || "Unknown User"}:`}{" "}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;

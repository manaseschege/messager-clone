import { useEffect, useState } from "react";
import "./App.css";
import { FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase/compat/app";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{}]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        )
      );
  }, []);
  useEffect(() => {
    setUsername(prompt("please enter your name"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessages([...messages, { username: username, message: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <img
        src="https://www.freepnglogos.com/uploads/facebook-messenger-png/file-facebook-messenger-logo-svg-wikipedia-9.png"
        alt=""
        style={{ width: 100, height: 100 }}
      />
      <h2>welcome{username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message ..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className="app__iconButton"
            app__iconButton
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ message, id }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;

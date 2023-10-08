import { useEffect, useState } from "react";
import "./App.css";
// import { socket } from "./context/socket";
import PayButton from "./component/PayButton";
import NotFound from "./component/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [message, setMessae] = useState("");
  const [allMessage, setAllMessage] = useState([]);

  // const sendMessage = () => {
  //   socket.emit("send-message", message);
  // };

  // useEffect(() => {
  //   socket.on("receive-message", (data) => {
  //     setAllMessage(...allMessage, data);
  //   });
  // }, [socket]);

  return (
    // <div className="frame">
    //   <h1>{allMessage.length}</h1>
    //   <h1>
    //     Chat App <img src={logo} alt="" className="logo" />
    //   </h1>
    //   <input
    //     type="text"
    //     value={message}
    //     onChange={(e) => {
    //       setMessae(e.target.value);
    //     }}
    //   />
    //   <button
    //     onClick={() => {
    //       sendMessage();
    //     }}
    //   >
    //     Send
    //   </button>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PayButton />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

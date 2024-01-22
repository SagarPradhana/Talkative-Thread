import React, { useState } from "react";
import ChatPage from "../component/ChatPage";
import { Link2, Send, SmilePlus, ArrowLeft } from "lucide-react";
import Chat from "../component/chat/Chat";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const Home = ({ name, src }) => {
  const dispatch = useDispatch();
  const themes = useSelector((state) => {
    return state.custom
  })
  const borderColor=themes.curTheme.borderColor
  const [message, setMessage] = useState([]);
  const [file, setFile] = useState(null);
  let sendChat = "";
  const send = () => {
    if (sendChat.length > 0) {
      setMessage([...message, sendChat]);
    }
  };
  const onKeyPressHandler = e => {
    if (e.key === 'Enter') {
      send();
    }
};
  const theme = useSelector((state) => {
    return state.custom;
  });
  const iconcolor=theme.curTheme.iconcolor
  return (
    <div className="w-full h-full sticky top-0 flex flex-col" style={{background:themes.curTheme.background, color:themes.curTheme.color}}>
      <div className="w-full p-2 flex">
        <Link to="/">
          <ArrowLeft className="mt-4" color={iconcolor}/>
        </Link>
        <ChatPage name={name} src={src} />
      </div>
      <div
        className="w-full h-[84vh] overflow-y-scroll overflow-x-hidden scroll-none"
        id="chat"
        style={{ background: theme.color}}
        
      >
        <div className="w-full flex flex-col pb-3 gap-6 scroll-none">
        {message.map((i, index) => {
          return (
            <div className='w-full flex justify-end'>
            <Chat message={i} key={index}/>
            </div>
          )
        })}
        </div>
      </div>
      <div className="w-full h-12 border-t sticky bottom-0 flex items-center justify-around" style={{ borderColor:borderColor}}>
        <div className="">
          <label htmlFor="addFile">
            <Link2 color={iconcolor} />
          </label>
          <input
            type="file"
            name="file"
            id="addFile"
            style={{ display: "none", visibility: "hidden" }}
            onChange={(e) => {
              setFile(e.target.files[0])
            }}
          />
        </div>
        <div className="">
          <SmilePlus color={iconcolor} />
        </div>
        <div className="w-[80%] flex gap-2">
          <input
            type="text"
            name="message"
            className="border w-full p-1 rounded-md"
            onChange={(e) => (sendChat = e.target.value)}
            onKeyPress={(e)=>onKeyPressHandler(e)}
            style={{background:themes.curTheme.background, color:themes.curTheme.color, borderColor:borderColor, outline:'none'}}
          />
          <button onClick={() => send()}>
            <Send color={iconcolor} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

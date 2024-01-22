import React from "react";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Settings = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState("#fff");
  const [theme,setTheme]=useState('light')
  const changebg = (color) => {
    dispatch({ type: "CHANGE_BG", payload: color });
  };
  const themes=useSelector((state)=>{
    return state.custom
  })
  const iconcolor=themes.curTheme.iconcolor
  const light=themes.lightTheme
  const dark=themes.darkTheme
  const current=themes.curTheme
  const toggleTheme=(theme)=>{
    console.log(theme)
    if(theme==='dark'){
      dispatch({type:"CHANGE_THEME",payload:dark})
    }else{
      dispatch({type:"CHANGE_THEME",payload:light})
    }
    
  }
  return (
    <div style={{background:themes.curTheme.background, color:themes.curTheme.color}} className="h-full">
      <div className="flex w-full gap-6 pb-2 pl-4">
        <Link to="/">
          <ArrowLeft className="mt-4" color={iconcolor} />
        </Link>
        <h3 className="mt-3 text-2xl font-bold">Settings</h3>
      </div>
      <div className="w-full px-10">
        <div className="w-full mb-8 mt-6">
          <h3 className="text-xl font-semibold">Change Theme</h3>
          <div className="flex items-center pl-5 gap-8">
            <select onChange={(e)=>setTheme(e.target.value)} style={{background:themes.curTheme.background, color:themes.curTheme.color}}>
              <option value='light'>Light</option>
              <option value='dark'>Dark</option>
            </select>
            <button onClick={() => toggleTheme(theme)}>set</button>
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-xl font-semibold">Chat background</h3>
          <div className="flex items-center pl-5 gap-8">
            <input
              type="color"
              name="chatbg"
              onChange={(e) => setColor(e.target.value)}
            />
            <button onClick={() => changebg(color)}>set</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

import React, { useState } from "react";
import ChatPage from "../ChatPage";
import { Search, Settings } from "lucide-react";
import { data } from "../Data";
import ocean from '../ocean.png'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Sidebar = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch();
  const themes = useSelector((state) => {
    return state.custom
  })
  const iconcolor=themes.curTheme.iconcolor
  const borderColor=themes.curTheme.borderColor
  return (
    <div className="w-[30rem] h-[100vh] flex flex-col px-5 border-r-2" style={{background:themes.curTheme.background, color:themes.curTheme.color, borderColor:borderColor}}>
      <div className="w-full flex items-center justify-between pt-5 pb-5">
        <p className="text-3xl font-bold">Chats</p>
        <div className="flex gap-4">
          <div className="w-6 h-6">
            <Link to='/profile' className="w-full h-ful">
            <img className="w-full h-full rounded-full" src={ocean} alt="" />
            </Link>
          </div>
          <Link to='/settings'>
            <Settings color={iconcolor}/>
          </Link>
        </div>
      </div>
      <div className="w-full pb-3 flex">
        <input
          className="w-[95%] border p-1 relative"
          type="text"
          name="text"
          placeholder="Search Chats here"
          onChange={(e) => setSearch(e.target.value)}
          style={{background:themes.curTheme.background, color:themes.curTheme.color, borderColor:borderColor}}
        />
        <Search className="absolute top-20 right-12 w-5 h-5 pt-1" color={iconcolor}/>
      </div>
      <div className="flex flex-col gap-4 pt-5 overflow-y-scroll scroll-none">
        {
          data.map((i, num) => {
            return (
              <Link to={i.link} key={num}>
                <ChatPage name={i.user} src={i.src} key={num} />
              </Link>
            )
          })
        }
      </div>
    </div>
  );
};
export default Sidebar;

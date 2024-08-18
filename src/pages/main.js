import MinimizableWebChat from "../MinimizableWebChat";
import { useLocation } from 'react-router-dom';
import React, { Component }  from 'react';


function Main() {
  const location = useLocation();
  const { data } = location.state;
  console.log(data);
  return (<div className="background-wallpaper">{<MinimizableWebChat value={data}/>}</div>);
}

export default Main;

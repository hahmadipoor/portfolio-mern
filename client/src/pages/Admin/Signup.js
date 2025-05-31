import axios from "axios";
import React from "react";
import { message } from "antd";


function Signup() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const handleSubmit= async ()=>{
    
    try{
      const response = await axios.post("/api/portfolio/signup",{
        username:user.username,
        password:user.password
      });
      if(response.data.success){
        message.success(response.data.message);
        localStorage.setItem('token',JSON.stringify(response.data));
        window.location.href="/admin";
      }else{
        message.error(response.data.message);
      }
    }catch(e){
      console.log(e);     
    }
  }

  return (

    <div className="flex justify-center items-center h-screen ">
      <div className="w-96 flex gap-5 p-5 shadow border  flex-col bg-white rounded justify-center items-center">
        <h1 className="text-2xl font-bold text-center text-primary">Signup</h1>
        
        <input type="text"
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
        />
        
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
        />
        <button className="bg-secondary text-white p-2 rounded w-1/2" onClick={handleSubmit}>Signup</button>
      </div>
    </div>
  );
}

export default Signup;

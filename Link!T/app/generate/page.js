"use client";

import Navbar1 from "@/components/Navbar1";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

const Generate = () => {

  const searchParams = useSearchParams() // returns 'Ankit' as username when we search this on  http://localhost:3000/generate?username=Ankit

  const [links, setLinks] = useState([{link: "", linktext: ""}]);
  const [username, setUsername] = useState(searchParams.get('username'));
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks)=>{
      return initialLinks.map((item, i)=>{
        if(i==index){
          return{link, linktext}
        }
        else{
          return item
        }
      })
    })
  }

  const addLink = ()=>{
    setLinks(links.concat([{link: "", linktext: ""}]))   // here concat is used because it returns new array
  }
  

  const submitlinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "username": username,
      "links": links,
      "picture": picture, 
      "description": description
    });

    console.log(raw)

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const r = await fetch("/api/generate", requestOptions)
    const result = await r.json()
    if(result.success){
      toast.success(result.message)
    }
    else{
      toast.error(result.message)
    }
    setUsername("")
    setLinks([{link: "", linktext: ""}])
    setPicture("")
    setDescription("")
    
  };

  return (
    <div className="flex justify-center lg:justify-between lg:pl-[9rem] xl:pl-[14rem] gap-5 sm:gap-[3rem bg-blue-400">
      <Navbar1/>
      <div className="flex items-center  min-h-screen bg-blue-400">
        <div className="pt-40 w-full max-w-md bg-white rounded-2xl shadow-md p-8 text-center">
          {/* Logo / Heading */}
          <h1 className="text-3xl font-bold mb-2 text-gray-900">
            Generate your LINK!T
          </h1>

          <input
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          

          {links && links.map((item, index)=>{
            return <div key={index} className="flex gap-[4%]">
              <input
                type="url"
                value={item.link || ""}
                onChange={e => {handleChange(index, e.target.value, item.linktext)}}
                placeholder="Link"
                className="w-[48%] p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                value={item.linktext || ""}
                onChange={e => {handleChange(index, item.link, e.target.value)}}
                placeholder="Linktext"
                className="w-[48%] p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          })}
          
          <input
            type="url"
            value={picture || ""}
            onChange={(e) => setPicture(e.target.value)}
            placeholder="Picture"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="text"
            value={description || ""}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            // disabled={!link && !linktext}

            onClick={()=> addLink()}
            className={`w-full py-3 mb-4 rounded-lg font-medium transition bg-green-500 text-white hover:bg-green-600 `}
            
            //   ${
            //   link && linktext
            //     ? "bg-green-500 text-white hover:bg-green-600"
            //     : "bg-gray-200 text-gray-400 cursor-not-allowed"
            //   }
            // `}
          >
            + Add link
          </button>



          {/* Continue Button */}
          <button
            disabled={!username || !picture || !description || links.some(l => !l.link || !l.linktext)}
            onClick={()=> {submitlinks()}}
            className={`w-full py-3 mb-4 rounded-lg font-medium transition ${
              username && links && picture && description
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
      <div className="hidden lg:block h-screen w-[50%] overflow-hidden">
        <ToastContainer />
        <img
          className="h-full w-full object-cover"
          src="https://assets.production.linktr.ee/auth/3576/media/banner-login-desktop.f355be949b508c58ec2d.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Generate;

import Link from "next/link";
import Image from "next/image";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";


export default async function Page({ params }) {
  const { username } = await params
  const client = await clientPromise;
    const db = client.db("LINK!T")
    const collection = db.collection("user")

    // if the username is already used then you can't create the link!t
    const item = await collection.findOne({username: username})
    if(!item){
      return notFound()
    }

  const item2 = {
  "_id": {
    "$oid": "695394633306197aaeb1947b"
  },
  "username": "Akkun07",
  "links": [
    {
      "link": "https://www.youtube.com/watch?v=izwkombjECA&t=3694s",
      "linktext": "Youtube"
    },
    {
      "link": "https://chatgpt.com/c/695386bf-ab24-8322-9333-ea0833dab760",
      "linktext": "Chatgpt"
    }
  ],
  "picture": "https://i.pinimg.com/736x/90/6d/7f/906d7fea67506128da092e27928d6756.jpg"
}

  return <div className="flex min-h-screen bg-gray-400 justify-center items-start py-15">
    {item &&<div className="photo flex justify-center flex-col items-center gap-2">
        <Image width={100} height={100} className="rounded-full" src={item.picture} alt="Picture" />
        <span className="font-bold">@{item.username}</span>
        <span className="w-68 sm:w-80 md:w-[22rem] lg:w-[28rem] xl:w-[38rem] text-center">{item.description}</span>
        <div className="links">
            {item.links.map((item, index)=>{
                return <Link key={index} href= {item.link}><div className="bg-gray-300 py-4 shadow-lg flex justify-center rounded-md my-3 w-78 sm:w-96 md:w-[28rem] lg:w-[36rem] xl:w-[44rem]">
                    {item.linktext}
                </div></Link>
            })}
        </div>
    </div>}
  </div>
}
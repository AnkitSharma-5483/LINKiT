'use client'

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Getstartedbtn from "@/components/Getstartedbtn";
import WordSwitcher from "@/components/WordSwitcher";
import Cards from "@/components/Cards";
import Featured from "@/components/Featured";
import Faq from "@/components/Faq";
import Logo from "@/components/Logo";
import PlayLogo from "@/components/PlayLogo";
import Movingcards from "@/components/Movingcards";
import Movingvideo from "@/components/Movingvideo";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useState } from "react";


export default function Home() {

  const router = useRouter() 
  const [text, setText] = useState("")
  const createTree = () =>{
    router.push(`/generate?username=${text}`)
  }

  return (
    <main>
      <div className="homepage">
        <section className="hero-section bg-lime-300 flex flex-col sm:flex-row h-auto sm:h-200 lg:h-260 gap-3 sm:gap-6 lg:gap-8 xl:gap-12 justify-around items-center">
          <Navbar/>
          <div className="sm:ml-15 text-[#254f1a] sm:h-200 pt-38 pb-7 sm:py-50 text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold w-full sm:w-[50%] text-center sm:text-left">A link in bio built for you.
            <div className=" text-xl font-bold my-6">
              Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
            </div>
            <div className="lg:flex sm:gap-5 text-lg justify-center sm:justify-start flex flex-col items-center gap-4 lg:flex-row sm:items-start">
              <input className="bg-white h-16 px-4 w-75 lg:w-60 border-none rounded-lg " placeholder="link" name="link" id="link"></input>
              <div onClick={()=> router.push("/SignUp")} className="bg-[#254f1a] mt-3 lg:mt-0 w-75 lg:w-60 text-center flex rounded-full text-white"><Getstartedbtn/></div>
            </div>
          </div>
          <div className="sm:mr-15 sm:w-[50%]">
            <Movingvideo/>
          </div>
        </section>
        <section className="hero-section bg-blue-600 flex flex-col sm:flex-row h-auto lg:h-200 gap-3 sm:gap-12 lg:gap-20 justify-around items-center">
          <div className="pb-8 sm:pt-20 w-full sm:w-[50%] flex justify-center items-center">
            <video autoPlay playsInline loop muted src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.webm"></video>
          </div>
          <div className="py-15 sm:py-45 text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold w-full sm:w-[50%] text-center sm:text-left">Create and customize your Linktree in minutes
            <div className=" text-sm sm:text-lg lg:text-xl font-bold my-10">
              Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Linktree automatically enhance it to match your brand and drive more clicks.
            </div>
            <div className="flex gap-5 text-lg justify-center sm:justify-start">
              <div onClick={()=> router.push("/SignUp")} className="bg-lime-300 text-black rounded-full"><Getstartedbtn/></div>
            </div>
          </div>
        </section>
        <section className="hero-section bg-[#780016] flex flex-col sm:flex-row h-auto lg:h-200 gap-3 sm:gap-12 lg:gap-20 justify-around items-center">
          <div className="sm:ml-15 text-pink-300 py-15 sm:py-45 text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold w-full sm:w-[50%] text-center sm:text-left ">Share your Linktree anywhere you like!
            <div className=" text-sm sm:text-lg lg:text-xl font-bold my-10">
              Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic back to your link in bio.
            </div>
            <div className="flex gap-5 text-lg justify-center sm:justify-start">
              <div onClick={()=> router.push("/SignUp")} className="bg-pink-300 text-black rounded-full"><Getstartedbtn/></div>
            </div>
          </div>
          <div className="pb-8 sm:pt-20 w-full sm:w-[50%] flex justify-center items-center"><img className="w-full max-w-md sm:max-w-lg lg:max-w-xl 2xl:max-w-xl h-auto" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/68b80693934ab0ccd4bf7482_home-section-4.avif" alt="graphs" /></div>
        </section>      
        <section className="hero-section bg-[#cdf76169] flex flex-col sm:flex-row h-auto lg:h-200 gap-3 sm:gap-12 lg:gap-20 justify-around items-center">
          <div className="pt-8 sm:pt-20 w-full sm:w-[50%] flex justify-center items-center"><img className="w-full max-w-md sm:max-w-lg lg:max-w-xl 2xl:max-w-xl h-auto" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/68b80693934ab0ccd4bf7482_home-section-4.avif" alt="graphs" /></div>
          <div className="py-15 sm:py-45 text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold w-full sm:w-[50%] text-center sm:text-left">Analyze your audience and keep them engaged
            <div className=" text-sm sm:text-lg lg:text-xl font-bold my-10">
              Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.
            </div>
            <div className="flex gap-5 text-lg justify-center sm:justify-start">
              <div onClick={()=> router.push("/SignUp")} className="bg-pink-200 text-black rounded-full"><Getstartedbtn/></div>
            </div>
          </div>
        </section>      
        <section className="word-Changer-section text-6xl bg-gray-200 h-60 gap-20 justify-around flex">
          <div>
            <WordSwitcher/>            
          </div>
        </section>      
        <section className="moving-cards bg-gray-200">
          <Movingcards/>
        </section>
        <section className="card-section bg-gray-200">
          <Cards/>
        </section>      
        <section className="featured & QNA bg-gray-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-4xl sm:text-4xl lg:text-6xl font-extrabold mb-14 text-center">The fast, friendly and powerful link in bio tool.</div>
            <div className="flex justify-center m-4">
              <button className="bg-pink-200 w-2xs hover:bg-pink-300 rounded-3xl h-14">Explore all plans</button>
            </div>
          </div>
          <div className="">
            <Featured/>
          </div>
          <div className="">
            <Faq/>
          </div>
        </section>
        <section className="footer-section bg-purple-900 h-720 sm:h-430">
          <div className="relative">
            <div className="max-w-4xl mx-auto pt-30 sm:pt-60">
              <div className="text-4xl sm:text-4xl lg:text-6xl text-pink-200 font-extrabold mb-14 text-center">Jumpstart your corner of the internet today</div>
              <div className="sm:flex justify-center m-4 gap-2">
                <input value={text} onChange={(e)=> setText(e.target.value)} className="bg-white rounded-xl border-none m-2 p-2 w-2xs" type="text" placeholder="Username" />
                <button onClick={()=> createTree()} className="cursor-pointer bg-lime-300 w-50 hover:bg-lime-200 rounded-full m-2 h-14">Claim your LINK!T</button>
              </div>
            </div>
            <div className="flex sm:justify-center m-4 sm:m-9 md:m-13 xl:m-19 sm:mt-60 mt-30 h-490 sm:h-180 w-[90%] rounded-3xl bg-white">
              <div className="details">
                <div className="p-10 sm:flex sm:flex-1 sm:p-9 lg:p-16 md:gap-20 xl:gap-30 2xl:gap-45 pb-0 gap-15">
                  <ul className="Company">
                    <li className="font-semibold text-xl xl:text-2xl 2xl:text-3xl pb-8">Company</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">The Linktree Blog</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Engineering Blog</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Marketplace</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">What's New</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">About</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Press</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Careers</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Link in Bio</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Social Good</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Contact</li>
                  </ul>
                  <ul className="Community">
                    <li className="font-semibold text-xl xl:text-2xl 2xl:text-3xl pb-8">Community</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Linktree for Enterprise</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">2023 Creator Report</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">2022 Creator Report</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Charities</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Creator Profile Directory</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Explore Templates</li>
                  </ul>
                  <ul className="Support">
                    <li className="font-semibold text-xl xl:text-2xl 2xl:text-3xl pb-8">Support</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Help Topics</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Getting Started</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Linktree Pro</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Features &amp; How-Tos</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">FAQs</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Report a Violation</li>
                  </ul>
                  <ul className="Trust_&_Legal">
                    <li className="font-semibold text-xl xl:text-2xl 2xl:text-3xl pb-8">Trust & Legal</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Terms &amp; Conditions</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Privacy Notice</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Cookie Notice</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Trust Center</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Cookie Preferences</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Transparency Report</li>
                    <li className="pb-5 font-medium sm:text-xs lg:text-md text-gray-500">Law Enforcement Access Policy</li>
                  </ul>
                </div>
                <div className=" md:flex md:justify-between">
                  <div className="flex gap-1 ml-10 sm:ml-7 md:ml-4 lg:gap-3 p-1 lg:p-3 pt-5">
                    <Link href="/LogIn">
                      <button className='cursor-pointer border-0 rounded-xl items-center content-center bg-gray-200 hover:bg-gray-300 text-black w-fit xl:h-16 xl:text-base font-semibold xl:px-8 h-10 text-xs px-5 sm:h-10 sm:text-xs sm:px-5'>Log in</button>
                    </Link>
                    <div onClick={()=> router.push("/SignUp")} className='cursor-pointer bg-lime-300 border-none rounded-full items-center content-center text-center text-white xl:h-16 xl:w-58 xl:text-lg xl:px-8 h-10 w-40 text-xs px-5 sm:h-10 sm:w-40 sm:text-xs sm:px-5'>
                      Get started for free
                    </div>
                  </div>
                  <div className="sm:flex ml-10 sm:ml-7 md:ml-0 lg:gap-3 lg:p-3 pt-5">
                    <div className='cursor-pointer bg-gray-900 w-fit text-white font-semibold border rounded-full items-center content-center text-base  mb-1 p-1 sm:h-10 xl:h-16 xl:px-6 sm:px-3 hover:bg-gray-800'><Logo/></div>
                    <div className='cursor-pointer bg-gray-900 w-fit text-white font-semibold border rounded-full items-center content-center text-base  mb-1 p-1 sm:h-10 xl:h-16 xl:px-6 sm:px-3 hover:bg-gray-800'><PlayLogo/></div>
                    <div className='cursor-pointer bg-gray-900 w-fit text-white font-semibold border rounded-full items-center content-center text-base  mb-1 p-1 sm:h-10 xl:h-16 xl:px-3 sm:px-1.5 hover:bg-gray-800'>
                      <div className="sm:h-6 xl:h-10 sm:w-6 xl:w-10">
                        <Image width={40} height={40} src="/InstaLogo.svg" alt="Instagram" />
                      </div>
                    </div>
                    <div className='cursor-pointer bg-gray-900 w-fit text-white font-semibold border rounded-full items-center content-center text-base  mb-1 p-1 sm:h-10 xl:h-16 xl:px-3 sm:px-1.5 hover:bg-gray-800'>
                      <div className="sm:h-6 xl:h-10 sm:w-6 xl:w-10">
                        <Image width={40} height={40} src="/LinktreeLogo.svg" alt="Linktree" />
                      </div>
                    </div>
                    <div className='cursor-pointer bg-gray-900 w-fit text-white font-semibold border rounded-full items-center content-center text-base  mb-1 p-1 sm:h-10 xl:h-16 xl:px-3 sm:px-1.5 hover:bg-gray-800'>
                      <div className="sm:h-6 xl:h-10 sm:w-6 xl:w-10">
                        <Image width={40} height={40} src="/XLogo.svg" alt="Twitter" />
                      </div>
                    </div>
                    <div className='cursor-pointer bg-gray-900 w-fit text-white font-semibold border rounded-full items-center content-center text-base  mb-1 p-1 sm:h-10 xl:h-16 xl:px-3 sm:px-1.5 hover:bg-gray-800'>
                      <div className="sm:h-6 xl:h-10 sm:w-6 xl:w-10">
                        <Image width={40} height={40} src="/ThreadsLogo.svg" alt="Threads" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-4 sm:m-9 md:m-13 xl:m-19 mt-15 sm:mt-25 w-fit sm:w-[90%]">
              <div className="justify-self-center-safe"><img className="w-22 h-15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/2560px-Flag_of_India.png" alt="" /></div>
              <div className="text-base mt-8 text-pink-200 font-extrabold mb-14 text-center">We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging. Linktree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville St, Collingwood VIC 3066</div>
            </div>
          </div>
        </section> 
      </div>
    </main>
  );
}

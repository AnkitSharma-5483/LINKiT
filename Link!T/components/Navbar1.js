'use client'

import React, { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const Navbar1 = () => {
  const navRef = useRef(null)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)
  const menuRef = useRef(null)
  const menuItemsRef = useRef([])
  const tlRef = useRef(null)

  const router = useRouter() 

  // useLayoutEffect is used in place of useEffect because it prevents animation flicker on first render.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tlRef.current = gsap.timeline({ paused: true })

      tlRef.current.eventCallback("onStart", () => {
        document.body.style.overflow = "hidden"
      })

      tlRef.current.eventCallback("onReverseComplete", () => {
        document.body.style.overflow = "auto"
      })

      tlRef.current.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power2.out"
      })

      tlRef.current.from(menuItemsRef.current, {
        x: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 0.4
      })
    }, navRef) // scope GSAP to navbar

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > lastScrollY.current) {
            // Scroll down - hide navbar
            gsap.to(navRef.current, { y: '-180%', duration: 0.75, ease: 'power2.out' })
          } else {
            // Scroll up - show navbar
            gsap.to(navRef.current, { y: '0%', duration: 0.75, ease: 'power2.out' })
          }

          lastScrollY.current = currentScrollY
          ticking.current = false
        })

        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      ctx.revert()
    }
  }, [])

  return (
    <nav
      ref={navRef}
      className='flex z-50 bg-white h-16 sm:h-20 gap-2 w-[90%] shadow-xl text-black text-xl border-white rounded-full px-4 sm:px-6 md:px-4 top-14 mx-auto left-0 right-0 items-center justify-between fixed'
    >
      <div className='flex gap-18'>
        <div className="flex items-center gap-1 sm:gap-4">
          <Link href={"/"}><Image width={25} height={25} src="/logo.png" alt="LINK!T" /></Link>
          <div className='hidden sm:block sm:text-3xl'>LINK!T</div>
        </div>
        <ul className='hidden lg:flex gap-6 text-base font-semibold'>
          <Link href="/"><li>Products</li></Link>
          <Link href="/"><li>Templates</li></Link>
          <Link href="/"><li>Marketplace</li></Link>
          <Link href="/"><li>Learn</li></Link>
          <Link href="/"><li>Pricing</li></Link>
        </ul>
      </div>

      <div className='flex gap-1 sm:gap-5 items-center justify-end xl:w-[50%]'>
        <button onClick={()=> router.push("/")} className='bg-gray-200 h-10 sm:h-16 w-18 sm:w-fit text-black text-xs sm:text-base font-semibold border-0 rounded-xl items-center px-3 sm:px-8 hover:bg-gray-300'>Log out</button>
        <div className="lg:hidden">
          {/*aria-label means:- Visually, a user sees a hamburger icon and understands it means “open menu” But a screen reader only sees:“button” so, With aria-label the screen reader now says: “Open menu, button” */}
          <button aria-label="Open menu" onClick={() => tlRef.current.play()}>
            <Image width={25} height={25} src="/hamburger.svg" alt="hamburger"/>
          </button>
        </div>
        <div ref={menuRef} className="fixed top-0 right-0 h-screen w-[70vw] sm:w-[55vw] md:w-[46vw] max-w-[70vw] bg-white z-10 p-10 pt-18 translate-x-full lg:hidden">
          <button aria-label="Close menu" onClick={() => tlRef.current.reverse()} className="absolute top-6 right-16 text-2xl">✕</button>
          <ul className='flex flex-col gap-6 mt-20 text-xl font-semibold'>
            <Link href="/" onClick={() => tlRef.current.reverse()}><li ref={el => menuItemsRef.current[0] = el}>Products</li></Link>
            <Link href="/" onClick={() => tlRef.current.reverse()}><li ref={el => menuItemsRef.current[1] = el}>Templates</li></Link>
            <Link href="/" onClick={() => tlRef.current.reverse()}><li ref={el => menuItemsRef.current[2] = el}>Marketplace</li></Link>
            <Link href="/" onClick={() => tlRef.current.reverse()}><li ref={el => menuItemsRef.current[3] = el}>Learn</li></Link>
            <Link href="/" onClick={() => tlRef.current.reverse()}><li ref={el => menuItemsRef.current[4] = el}>Pricing</li></Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar1
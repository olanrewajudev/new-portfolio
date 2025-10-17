import { AnimatePresence } from "framer-motion"
import React, { useState } from "react"

import { motion } from 'framer-motion'
import { FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"
import { NavbarLink } from "./utils"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { AiOutlineMail } from "react-icons/ai"
import { BiPhoneCall } from "react-icons/bi"

export default function Sidebar({ closeView }: { closeView: () => void }) {
    const [isVisible, setIsVisible] = useState(true)

    const handleClose = () => {
        setIsVisible(false)
        setTimeout(() => {
            closeView()
        }, 200)
    }

    React.useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isVisible]);

    const onNavClick = (href: string, e?: React.MouseEvent) => {
        if (e) e.preventDefault()

        const scrollWithOffset = (el: HTMLElement, offsetPx = 80) => {
            const top = el.getBoundingClientRect().top + window.pageYOffset - offsetPx
            window.scrollTo({ top, behavior: 'smooth' })
        }

        const hashIndex = href.indexOf('#')
        if (hashIndex !== -1) {
            const id = href.slice(hashIndex + 1)
            if (id === '' || id === '/') {
                // Home / top of page
                window.scrollTo({ top: 0, behavior: 'smooth' })
                handleClose()
                return
            }
            const el = document.getElementById(id)
            if (el) {
                // adjust offsetPx to add padding/top space (e.g., header height)
                scrollWithOffset(el, 80)
            }
            handleClose()
            return
        }
        // non-hash links: allow router navigation and close sidebar
        handleClose()
    }

    return (
        <div>
            <AnimatePresence>
                {isVisible && (
                    <>
                        <motion.div initial={{ x: '-70%' }} animate={{ x: 0 }} exit={{ x: '-200%' }} transition={{ duration: 0.5 }} className="bg-white/25 backdrop-blur-xl  fixed top-0 z-[99] left-0 w-[80%] sm:w-[60%] scrollsdown h-full overflow-y-auto">
                            <div className="mx-5 my-3 overflow-auto text-yellow flex items-end justify-end"><div className="flex items-center z-50 py-2 justify-between"><div className="text-3xl text-primary"><FaTimes className="cursor-pointer  text-yellow" onClick={handleClose} /></div></div></div>
                            <div className="mx-5 my-5 uppercase">{NavbarLink.map((item) => (<div className="pb-3" key={item.id}><div className="w-full bg-white/1 backdrop-blur-xl py-5 ">
                                {item.href.includes('#') ? (<a href={item.href} onClick={(e) => onNavClick(item.href, e)} className="font-bold px-5 flex items-center justify-between text-yellow">{item.name}</a>) : (<Link to={item.href} onClick={() => onNavClick(item.href)} className="font-bold px-5 flex items-center justify-between text-yellow">{item.name}</Link>)}</div></div>))}</div>
                        </motion.div>
                        <div className="fixed inset-0 bg bg-opacity-50 z-[98]" onClick={handleClose}></div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

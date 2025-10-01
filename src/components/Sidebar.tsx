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

    return (
        <div>
            <AnimatePresence>
                {isVisible && (
                    <>
                        <motion.div initial={{ x: '-70%' }} animate={{ x: 0 }} exit={{ x: '-200%' }} transition={{ duration: 0.5 }} className="bg-white/25 backdrop-blur-xl  fixed top-0 z-[99] left-0 w-[80%] sm:w-[60%] scrollsdown h-full overflow-y-auto">
                            <div className="mx-5 my-3 overflow-auto text-yellow flex items-end justify-end"><div className="flex items-center z-50 py-2 justify-between"><div className="text-3xl text-primary"><FaTimes className="cursor-pointer" onClick={handleClose} /></div></div></div>
                            <div className="mx-5 my-5">{NavbarLink.map((item) => (<div className="pb-3" key={item.id}><div className="w-full bg-white/15 backdrop-blur-xl py-5 "><Link to={item.href} className="font-bold px-5 flex items-center justify-between text-primary">{item.name}</Link></div></div>))}</div>
                             <div>
                                
                                    <div className="text-primary mx-4">
                                      <div className="lg:col-span-1 bg-white/25 backdrop-blur-3xl p-10 rounded-2xl mb-3">
                                        <div className="mb-3">
                                          <div className=""><HiOutlineLocationMarker size={36} /></div>
                                          <div className="py-2 font-bold">Our Office:</div>
                                          <div className="">Chevron, Lagos Nigeria</div>
                                        </div>
                                        <div className="mb-3">
                                          <div className=""><BiPhoneCall size={36} /></div>
                                          <div className="py-2 font-bold">Contact Number:</div>
                                          <div className="">+234 707 331 1736</div>
                                        </div>
                                        <div className="">
                                          <div className=""><AiOutlineMail size={36} /></div>
                                          <div className="py-2 font-bold">Email Us:</div>
                                          <div className="">atolagbealameen4@gmail.com</div>
                                        </div>
                                      </div>
                                     
                                    </div>
                                  </div>
                        </motion.div>
                        <div className="fixed inset-0 bg bg-opacity-50 z-[98]" onClick={handleClose}></div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

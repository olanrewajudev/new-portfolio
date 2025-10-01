import { useState } from "react"
import { SlMenu } from "react-icons/sl"
import Sidebar from "./Sidebar"

const navItem = [
    { name: "Home", href: '#home', id: '' },
    { name: "About Us", href: '#about-us', id: '' },
    { name: "Services", href: '#services', id: '' },
    { name: "Skills", href: '#skills', id: '' },
    { name: "Projects", href: '#projects', id: '' },
    { name: "Contact Us", href: '#contact-us', id: '' },
]
export default function Navbar() {
      const [view, setView] = useState(false)

    const toggleView = () => {
        setView(prevView => !prevView)
    }
    return (
        <div className="">
            {view && <Sidebar closeView={toggleView} />}

            <nav className="bg-white/25 backdrop-blur-2xl  shadow-2xl rounded-full px-8 sm:py-6 fixed w-[90%] mx-auto top-1 left-1/2 -translate-x-1/2 flex items-center justify-between z-50">
                <div className="bg-clip-text text-transparent bg-gradient-to-r from-yellow to-primary lg:text-3xl text-2xl font-bold py-4 md:py-0">Atolagbe Olanrewaju.</div>
                <div className="hidden lg:block">
                    {navItem.map((_item, i: number) => (
                        <a href={_item.href} className="px-4 font-semibold text-yellow" key={i}>{_item.name}</a>
                    ))}
                </div>
                <div className="lg:hidden flex text-yellow text-xl items-center cursor-pointer" onClick={toggleView}><SlMenu /></div>

            </nav>
        </div>
    )
}

import { AiOutlineDownload } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import TypewriterComponent from 'typewriter-effect'
import me from '../assets/profile.png'
import { FaXTwitter } from "react-icons/fa6";
export default function Aboutus() {
    return (
        <section id="about-us">
            <div className="border lg:flex items-center p-5 gap-10 rounded-xl">
                <div className="w-full">
                    <img src={me} alt="" className="w-[30rem] md:w-full lg:h-[32rem] rounded-2xl object-top object-cover" />

                </div>
                <div className="text-yellow">
                    <div className="bg-clip-text text-transparent bg-gradient-to-r from-yellow to-primary lg:text-[3rem] leading-snug text-2xl font-bold mt-5">Hello, I’m a FullStack Developer and UX / UI Designer Based in Nigeria.</div>

                    <div className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow lg:text-[3rem] leading-snug text-2xl font-bold my-3"> <TypewriterComponent options={{ strings: ['Strong Technical Skills.', 'Problem-Solving Mindset', 'Adaptability.', 'Communication & Teamwork.', 'UX and UI Awareness.', 'Self-Driven & Curious.'], autoStart: true, loop: true, delay: 30 }} /></div>
                    <div className="text-yellow lg:flex items-center justify-center gap-5 mt-7">
                        <a href="/myresume.pdf"target="_blank"rel="noopener noreferrer"className="flex items-center justify-center text-xl gap-2 rounded-full p-4 bg-white/25 backdrop-blur-3xl cursor-pointer hover:text-primary text-center">View My CV<AiOutlineDownload size={24} /></a>
                        <div className=" rounded-full  bg-white/25 backdrop-blur-3xl hover:text-primary text-xl p-2 text-center flex items-center justify-center gap-2 my-5">Available for work <div className=" text-4xl text-green-700 mx-1 mb-1">•</div></div>
                        <div className="flex gap-3 text-2xl items-center justify-center">
                            <div className=" rounded-lg p-3 bg-white/25 backdrop-blur-3xl hover:text-primary"> <CgFacebook /></div>
                            <div className=" rounded-lg p-3 bg-white/25 backdrop-blur-3xl hover:text-primary"><FaXTwitter /></div>
                            <div className=" rounded-lg p-3 bg-white/25 backdrop-blur-3xl hover:text-primary"><AiOutlineLinkedin /></div>
                            <div className=" rounded-lg p-3 bg-white/25 backdrop-blur-3xl hover:text-primary"><BsGithub /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

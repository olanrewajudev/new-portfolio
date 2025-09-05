import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  return (
    <div>
      <section id="contact-us">
        <div className="text-center mb-8">
          <div className="text-yellow font-bold text-xl uppercase">Contact</div>
          <div className="lg:text-[4rem] text-[2rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow to-primary">Get In Touch With Me!</div>
        </div>
        <div className="lg:grid lg:grid-cols-3 gap-5 text-yellow text-lg md:grid-cols-2 ">
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
          <div className="lg:col-span-2 border rounded-2xl p-4">
            <div className="lg:flex mb-3 gap-3 ">
              <div className="w-full mb-2">
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder="John Doe" className="bg-white/20 backdrop-blur-3xl w-full p-3 outline-none rounded-full " />
              </div>
              <div className="w-full">
                <label htmlFor="">Email Address</label>
                <input type="text" placeholder="Johndoe@gmail.com" className="bg-white/20 backdrop-blur-3xl w-full p-3 outline-none rounded-full  " />

              </div>
            </div>
            <div className="">
              <label htmlFor="">Message</label>
              <textarea name="" placeholder="Message" id="10" className="bg-white/20 backdrop-blur-3xl w-full outline-none p-3 rounded-2xl " rows={6} cols={30}></textarea>
            </div>
            <div className="bg-white/20 backdrop-blur-3xl w-fit flex items-center gap-3 p-4 rounded-full hover:border hover:border-gray-400">Send Message <AiOutlineMail size={16} /></div>
          </div>
        </div>
      </section>

    </div>
  )
}

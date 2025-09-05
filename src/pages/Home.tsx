import Aboutus from "../components/Aboutus";
import Contactus from "../components/Contactus";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Services from "../components/Services";
import Skills from "../components/Skills";


export default function Home() {
  const date = new Date()
const year = date.getFullYear()
  return (
    <div className="mt-[5rem] w-[85%] mx-auto">
      {/*  */}
      <Navbar />
      {/*  */}
      <main>
        <div><Hero /></div>
        {/*  */}
        <div className="mt-[6rem]"><Aboutus /></div>
        {/*  */}
        <div className="mt-[6rem]"><Services /></div>
        {/*  */}
        <div className="mt-[6rem]"><Skills /></div>
        {/*  */}
        <div className="mt-[6rem]"><Project /></div>
        {/*  */}
        <div className="mt-[6rem] mb-[8rem]"><Contactus /></div>
        {/*  */}
        <div className="text-yellow text-center my-5">Copyright @{year}, <span className="font-extrabold uppercase">Atolagbe Olanrewaju</span> All Rights Reserved.</div>
      </main>
    </div>
  )
}

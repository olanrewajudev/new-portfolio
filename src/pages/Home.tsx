import Aboutus from "../components/Aboutus";
import Contactus from "../components/Contactus";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Services from "../components/Services";
import Skills from "../components/Skills";


export default function Home() {
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
        <div><Skills /></div>
        {/*  */}  
        <div><Project /></div>
        {/*  */}
        <div><Contactus /></div>
      </main>
    </div>
  )
}

import { FiGithub } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { portfolio } from "./utils";

export default function Project() {
  return (
    <div>
      <section id="projects">
        <div className="text-center mb-8">
          <div className="text-yellow font-bold text-xl">Works</div>
          <div className="text-[4rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow to-primary">Creative Portfolio</div>
        </div>
        <div className="grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-yellow">
            {portfolio.map((item, i) => (
              <div className=" rounded-3xl bg-white/25 backdrop-blur-3xl p-4" key={i}>
                <div className=""><img src={item.image} alt="" className="w-" /></div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[1.4rem] font-semibold">{item.title}</div>
                  <div className="flex bg-white/25 backdrop-blur-3xl text-primary text-3xl gap-3 px-2 py-1 rounded-full">
                    <a href={item.github} target="_blank" rel="noopener noreferrer" className=""><FiGithub /></a>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className=""><BsGlobe2 /></a>
                  </div>
                </div>
                <div className="">{item.content}</div>

              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

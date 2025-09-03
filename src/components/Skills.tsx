import { skills } from "./utils";
import { motion } from 'framer-motion'
export default function Skills() {
  return (
    <div>
      <section id="skills">
        <div className="text-center mb-8">
          <div className="text-yellow font-bold text-xl">Skills</div>
          <div className="text-[4rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow to-primary">Tech Stack</div>
        </div>
        <div className="">
          <div className="sm:grid grid-cols-3 lg:grid-cols-7 md:grid-cols-5">
            {skills.map((item, i: number) => (
              <motion.div animate={{y: [1, -9, 1], x: [0, -4, 0] }} transition={{ duration: 1, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay: i * 0.4, }} className="bg-white/30 backdrop-blur-3xl mb-3 text-yellow mx-2 flex flex-col items-center justify-center py-2 rounded-3xl" key={i}>
                <div className=""><img src={item.img} alt="" className="object-cover w-12 h-12 mb-2" /></div>
                <div className="font-semibold">{item.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

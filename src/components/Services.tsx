import { services } from "./utils";

export default function Services() {
    return (
        <div>
            <section id="services">
                <div className="text-center mb-8">
                    <div className="text-yellow font-bold text-xl uppercase">Services</div>
                    <div className="lg:text-[4rem] text-[2rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow to-primary">Quality Services</div>
                </div>
                <div className="grid lg:grid-cols-3 items-center justify-center gap-5">
                    {services.map((item, i: number) => (
                        <div className="bg-white/20 rounded-lg backdrop-blur-3xl text-yellow font-semibold  p-6 flex items-center justify-center flex-col text-center" key={i}>
                            <div className="text-[4rem]">{item.icon}</div>
                            <div className="text-2xl my-3 font-bold">{item.title}</div>
                            <div className="">{item.content}</div>
                        </div>
                    ))}
                </div>

            </section>
        </div>
    )
}

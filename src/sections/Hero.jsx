import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import { statistics } from "../constants"

const Hero = () => {
  return (
    <section id="home" className="w-full min-h-screen max-container flex xl:flex-row flex-col justify-center gap-10">
      <div className="relative w-full xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x mt-28">
        <p className="text-xl text-coral-red font-montserrat">Our Summer Collections</p>
        <h1 className="font-bold font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] mt-10">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span> <br /> 
          <span className="text-coral-red inline-block xl:mt-4">Nike</span> Shoes
        </h1>
        <p className="text-slate-gray text-xl mt-6 mb-14 sm:max-w-sm leading-8">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

        <Button label="Shop Now" iconURL={arrowRight} />

        <div className="flex flex-wrap justify-start items-start w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div className="" key={stat.label}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="text-slate-gray font-montserrat leading-7">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoe1} alt="shoe cases" width={610} height={500} className="object-cover relative z-10"/>
      </div>
    </section>
  )
}

export default Hero

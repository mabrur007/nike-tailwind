import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-wrap justify-between items-start max-lg:flex-col gap-20">
        <div className="flex flex-col items-start">
          <a href="/">
            <img 
              src={footerLogo} 
              alt="footer-logo" 
              width={150} 
              height={46} 
            />
          </a>
          <p className="mt-6 text-base text-white-400 leading-7 sm:max-w-sm font-montserrat">
            Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
          </p>
          <div className="mt-10 flex gap-4">
            {socialMedia.map((icon) => (
              <div key={icon.alt} className="w-12 h-12 bg-white flex justify-center items-center rounded-full">
                <img 
                  src={icon.src} 
                  alt={icon.alt}
                  width={24}
                  height={24} />
              </div>
            ))}
          </div>
        </div> 

        <div className="flex flex-1 justify-between lg:gap-10 gap-20   flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-2xl font-montserrat leading-normal font-medium mb-4">{section.title}</h4>
              {section.links.map((link) => (
                <li key={link} className="list-none mt-3 font-montserrat text-white-400 leading-normal hover:text-slate-gray">
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2  cursor-pointer font-montserrat">
          <img 
            src={copyrightSign} 
            alt="copy right sign"
            width={20} 
            height={20}
            className="rounded m-0" 
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <div>
          <p className="font-montserrat">Developed by Mabrur</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

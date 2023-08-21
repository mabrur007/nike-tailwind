import { headerLogo } from "../assets/images"

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="max-container flex justify-between items-center">
            <a href="/">
                <img src={headerLogo} alt="header_logo" width={130} height={30}/>
            </a>
            <ul className="">

            </ul>
        </nav>
    </header>
  )
}

export default Nav

import { FaBars } from "react-icons/fa"
import Logo from "../assets/logo-text.png"

export function Nav() {
    
    return (
        <>
            <nav className="shadow sticky z-50 top-0 bg-white">
              <div className="container mx-auto py-5">

                <div className="flex justify-between items-center">

                    {/* Navigation Bar */}

                    <div className="md:hidden">
                        <FaBars />
                    </div>


                    {/* Logo Area */}

                    <div className="hidden md:block">
                        <img className="w-34 h-8" src={Logo} alt="dev-stack-logo" />
                    </div>

                    {/* Nav Links Area */}

                    <div className="hidden md:block">
                        <ul className="flex justify-center gap-4 lg:gap-8 items-center text-[#475569]">
                            <li className="text-[#DB2777] font-semibold"><a href="#">Home</a></li>
                            <li><a href="#">Technologies</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* SignUp And Logo Area */}

                    <div className="flex gap-5 justify-center items-center">
                        <span className="text-[#334155]">Sign In</span>
                        <button className="py-2 px-5 lg:py-3 lg:px-7 bg-[#D91B7E] text-white font-bold rounded-full">Sign UP</button>
                    </div>

                </div>
              </div>
            </nav>
        </>
    )
}
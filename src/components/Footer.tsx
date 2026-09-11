import FooterLogo from "../assets/logo-text.png"

export function Footer() {
    
    return (
        <>
            <footer className="container mx-auto py-20">

                <div className="flex flex-col gap-10">


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

                       <div className="space-y-4 sm:col-span-2 lg:col-span-2">
                        <img src={FooterLogo} alt="footer-logo" />
                        <p className="text-[#64748B] :">Curated tools, technologies, and resources for developers building <br /> modern software.</p>
                        <div>
                            <ul className="flex justify-b 
                            items-center gap-4">
                                <li><a href="https://github.com/jubail-dev">GitHub</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">LinkedIn</a></li>
                            </ul>
                        </div>
                       </div>

                       <div>
                        <h2 className="text-slate-900 font-bold text-md mb-3">PRODUCT</h2>
                        <div>
                            <ul className="flex flex-col justify-between items-start gap-3 text-gray-400">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Technologies</a></li>
                                <li><a href="#">Projects</a></li>
                            </ul>
                        </div>
                       </div>

                       <div>
                        <h2 className="text-slate-900 font-bold text-md mb-3">COMPANY</h2>
                        <div>
                            <ul className="flex flex-col justify-between items-start gap-3 text-gray-400">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                       </div>

                       <div>
                        <h2 className="text-slate-900 font-bold text-md mb-3">LEGAL</h2>
                        <div>
                            <ul className="text-gray-400 flex flex-col justify-between items-start gap-3">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </div>
                       </div>
                    </div>


                     <div className="divider"></div>

                        
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">

                        <div>
                            <p className="text-[#94A3B8] text-sm md:text-md"> &copy; JR Jubail 2026 Dev Stack. All rights reserved.</p>
                        </div>

                        <div>
                            <ul className="flex gap-4 text-[#94A3B8] text-sm md:text-md ">
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms</a></li>
                            </ul>
                        </div>
                    </div>


                </div>

            </footer>
        </>
    )
}
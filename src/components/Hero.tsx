import HeroImage from "../assets/banner-stack.png"

export function Hero() {
    
    return (
        <>
         <div className="container mx-auto">

            <div className="flex flex-col lg:flex-row gap-10 py-10 lg:py-20 justify-between items-center">
                {/* Left Side Content */}

                <div className="space-y-4 w-full lg:w-auto">
                    <h1 className="max-w-[655px] font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight lg:leading-20 bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent"><span className="text-[#0F172A] font-bold">Build Your Ideal </span>Development Stack</h1>
                    <p className="text-[#475569] max-w-[470px]">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>

                    <div className="flex flex-wrap gap-5">
                        <button className="py-3 px-6 bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-2xl text-white font-bold text-center">Explore Technologies</button>
                        <button className="py-3 px-8 bg-linear-to-r border-2 border-gray-300 rounded-2xl text-[#374151] font-bold text-center">Learn More</button>
                    </div>
                </div>

                {/* Right Side Hero Image */}

                <div className="w-full lg:w-auto">
                    <img className="w-full max-w-[690px] mx-auto" src={HeroImage} alt="" />
                </div>
            </div>
         </div>
        </>
    )
}
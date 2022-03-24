import Navbar from "./NavbarMenu";
import Link from "next/link";

function Hero(){
    return(
        <div id="hero-section" className={"bg-gradient-to-b from-violet-500 to-fuchsia-500 flex flex-col justiy center min-h-fit"}>
            <Navbar/>
            <div className="flex flex-col justify-center items-center text-center min-h-screen p-3">
                <h1 className="text-3xl font-bold">Hi I am Ashish Waikar</h1> 
                <h2 className="text-3xl text-purple-200 font-extrabold">I am a Full-Stack Developer</h2>
                <Link className='transition-all duration-100' href = '#projects-section'>
                    <a className="border-2 mt-5 p-2 border-purple-300 bg-purple-300 rounded-md cursor-pointer hover:bg-purple-800 hover:text-purple-100 hover:border-purple-800 shadow-xl">Know more</a>
                </Link>
            </div>
        </div>
    );
}

export default Hero;
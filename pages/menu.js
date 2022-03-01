import Link from "next/link";

function menu(){
    const menuLinkStyle = "text-xl font-bold m-2 text-center hover:underline-offset-8 hover:underline hover:decoration-purple-400 hover:decoration-4"
    return(
        <div className="min-h-screen flex flex-col justify-center items-center">
            <Link href={"/"}>
                <a className={menuLinkStyle}>Home</a>
            </Link>
            <Link href={'/#projects-section'}>
                <a className={menuLinkStyle}>projects</a>
            </Link>
            <Link href={'/#contact-section'}>
                <a className={menuLinkStyle}>contact</a>
            </Link>
        </div>
    );
}

export default menu;
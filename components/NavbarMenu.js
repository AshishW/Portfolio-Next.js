import Link from 'next/link';
import {GiHamburgerMenu} from 'react-icons/gi'
function NavbarMenu(){
        return(
            <Link href={'/menu'}>
                <a className="text-4xl flex justify-end flex-row p-4 fixed z-20">
                    <GiHamburgerMenu className="hover:text-blue-200 cursor-pointer"/>
                </a>
            </Link>
        );
}

export default NavbarMenu;
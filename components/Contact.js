import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import contactInfo from "../Data/contactInfo";

function Contact(){
    return(
        <div id="contact-section" className = 'flex justify-between items-center mt-2 mb-2'>
          <a href={`mailto:${contactInfo[0].email}`} className="text-xl m-2 cursor-pointer border-2 border-gray-300 p-1 rounded text-gray-200 drop-shadow-xl hover:text-blue-400 hover:border-blue-100"><AiOutlineMail/></a>
          <a href ={contactInfo[0].linkedIn}className="text-xl m-2 cursor-pointer border-2 border-gray-300 p-1 rounded text-gray-200 drop-shadow-xl hover:text-blue-400 hover:border-blue-100"><FaLinkedinIn/></a>
          <a href={contactInfo[0].github} className="text-xl m-2 cursor-pointer border-2 border-gray-300 p-1 rounded text-gray-200 drop-shadow-xl hover:text-blue-400 hover:border-blue-100"><FaGithub/></a>
        </div>
    );
}

export default Contact;

import { MdContactPhone } from 'react-icons/md'
import { SiJavascript } from 'react-icons/si'
import { FaUserCheck, FaHome, FaCode, FaCertificate } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'



const links = [
  { id: 1, text: 'Home', path: '/landing', icon: <FaHome /> },
  { id: 2, text: 'Profile', path: 'profile', icon: <FaUserCheck /> }, 
  { id: 3, text: 'Experience', path: 'work-experience', icon: <FaCode /> },
  { id: 4, text: 'Certificates', path: 'certificates', icon: <TbCertificate /> },
  { id: 5, text: 'Projects', path: 'projects', icon: <SiJavascript /> },
  { id: 6, text: 'Contact', path: 'contact', icon: <MdContactPhone /> }
  
]

export default links

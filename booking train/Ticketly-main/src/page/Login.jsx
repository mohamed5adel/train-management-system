import { TbBrandGmail } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

import { FaFacebookF } from 'react-icons/fa';
import { useLoginContext } from '../components/ContextLogin';
const Login = () => {
  const navigate = useNavigate();

  const { isLoginVisible } = useLoginContext();
  const { toggleLoginModal } = useLoginContext();

  if (!isLoginVisible) return null;
  const go=()=>{
    navigate('/Admin');  // Navigate to /home route
    toggleLoginModal()
  }
  return (
<div className="p-5 flex flex-col gap-5 absolute z-10 h-[450px] rounded-2xl w-[300px] bg-white overflow-hidden  top-[5%] md:top-[10%] left-1/2 transform -translate-x-1/2">
 <button  onClick={toggleLoginModal} className="absolute top-1 right-1 bg-three rounded-full px-3 py-1">X</button>
    <h3 className="text-3xl text-four font-bold ">Ticketly</h3>
 <span className=" text-center font-bold text-2xl">Login</span>
 <div className=" relative flex flex-col">
    <label className="font-extralight m-2">Email </label>
    <input className="bg-four rounded-full text-white pl-2  focus:outline-none"/>
    <label className="font-extralight m-2">Password </label>
    <input className="bg-four rounded-full text-white pl-2 focus:outline-none"/>
        <a className="text-[12px]  text-right">forget password? </a>
    
 </div>
 <button  onClick={go}className="uppercase w-[90%] rounded-full mx-auto bg-gradient-to-r from-four to-four/20  transform hover:scale-110 ">Login</button>
<a  href='/SignIUp' className="text-center bg-three/30 w-[30%]  mx-auto rounded-full">  sign up :</a>
<div className="flex  gap-3 justify-center items-baseline">
    <a href="https://accounts.google.com/v3/signin/identifier?ifkv=AVdkyDke-jop2Iw-NcqUij9tpWlqTdqxmQIZTU05bbz0aKNqgPFhp0RuPhQEPJWmyA_tStpBOvCywQ&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1442355426%3A1738686767303401&ddm=1" className="bg-red-600  rounded-full"><TbBrandGmail  className="text-white text-3xl p-2"/>  </a>
    <a href="https://ar-ar.facebook.com/login/device-based/regular/login/" className="bg-blue-500  rounded-full"><FaFacebookF  className="text-white text-3xl p-2"/>  </a>

</div>

    </div>
  )
}

export default Login
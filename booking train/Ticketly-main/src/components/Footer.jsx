import { FaFacebookF } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import propTypes from "prop-types";

const Footer = ({tit,des,right}) => {
  return (
    <div className="bg-four/20 h-[400px] w-full flex flex-col justify-start items-center">
    <div className="text-three  text-3xl mt-10 font-bold">{tit}</div>
        <div className="mt-6 font-medium  text-[15px] md:text-2xl px-5 md:px-60 text-center">
        {des} </div>
             <div className="flex gap-10 mt-10 mb-6">
<a href="#" className="border rounded-full  p-1 text-white hover:text-three "><i className="text-4xl text-one hover:text-three"><FaFacebookF/></i></a>
<a href="#" className="border rounded-full text-white   hover:text-three p-1 "><i className="text-4xl text-one hover:text-three"><FaInstagramSquare  /></i></a>
<a href="#"className="border rounded-full text-white p-1 hover:text-three"><i className="text-4xl text-one hover:text-three"><FaSquareWhatsapp /></i></a>
<a href="#" className="border rounded-full text-white  p-1   hover:text-three "><i className="text-4xl text-one hover:text-three"><IoCall /></i></a>

             </div>
             <p className=' text-black font-bold'>{right} </p>
    </div>
  )
}
Footer.propTypes={
tit:propTypes.string,
des:propTypes.string,
right:propTypes.string,
}

export default Footer

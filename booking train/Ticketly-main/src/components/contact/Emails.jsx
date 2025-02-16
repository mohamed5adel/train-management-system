import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Emails = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
     
      emailjs 
        .sendForm('service_9fdki0d', 'template_z0zx0jf', form.current, {
          publicKey:'8mShCUbjwrB7wfbgb',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <div className=" w-[90%] mx-auto my-6  ">
      <div className=" flex flex-col gap-6 bg-three m-4 p-4 ">
    <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col gap-2">
     <label  className="text-2xl text-white font-bold   " >  Name</label>
            <input  placeholder=" Enter Name"    name="from_name" className="w-[100%] bg-four p-3"/>
        </div>
        <div className="flex flex-col gap-2">
     <label  className="text-2xl text-white font-bold  ">  Place</label>
            <input type="text" 
    
               placeholder="where is happened problem"  name="to_age"  className="w-[100%] bg-four p-3"/>
        </div>
        <div className="flex flex-col gap-2">
     <label  className="text-2xl text-white font-bold  ">  Gmail</label>
            <input  type="email" placeholder="Enter Your email   "  name="reply_to" className="w-[100%] bg-four p-3"/>
        </div>
        <div className="flex flex-col gap-2">
     <label  className="text-2xl text-white font-bold  " >  Problem </label>
            <input  placeholder="Problem description"    name="message" className="w-[100%] bg-four p-3"/>
        </div>
        <div className="flex justify-center items-center mt-5"> 
      <button type="submit" value="Send"

       className=
       "bg-two text-2xl  font-bold text-four mt-2 rounded-full  transition cursor-pointer ease-in delay-100 px-6 py-2 uppercase hover:text-white hover:bg-four" 
       >Send </button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Emails

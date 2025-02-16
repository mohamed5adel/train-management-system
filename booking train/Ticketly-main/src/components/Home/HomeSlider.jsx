
import { useEffect, useState } from 'react';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import one from "../../assets/1.svg";
import two from "../../assets/2.svg";
import three from "../../assets/3.svg";

const HomeSlider = () => {
  const sliders = [{ src: two  ,title:" جميع الخدمات بالمجان "},{ src: three ,title:" سرية كل معلوماتك الشخصية"},{ src: one ,title:" جلسات جماعية " }]; 
    const [crr,setcrr]=useState(0);
    const next =()=>{setcrr((crr)=>(crr===0?sliders.length-1:crr-1))}
    const back =()=>{setcrr((crr)=>(crr===sliders.length-1?0:crr+1))}
    useEffect(()=>{
       const slideratoe =setInterval(back,3000)
       return ()=> clearInterval(slideratoe)
    },[])
  return (
    <div className="overflow-hidden relative w-[90%] mx-auto my-6">
    <div
      className="flex relative transition-transform ease-in duration-500"
      style={{ transform: `translateX(${-crr * 100}%)` }}
    >
      {sliders.map((slider, index) => (
        <div key={index} className="w-full flex-shrink-0">
          <img
            className="object-cover w-full h-[600px]" // تعديل حجم الصورة هنا
            src={slider.src}
            alt={`Slider Image ${index}`}
          />
        </div>
      ))}
    </div>

    <div className="absolute inset-0 flex items-center justify-between p-4">
      <button
        onClick={next}
        className="p-1 rounded-full shadow border bg-white/80 text-gray-800 hover:bg-white"
      >
        <GoArrowLeft className="text-2xl" />
      </button>
      <button
        onClick={back}
        className="p-1 rounded-full shadow border bg-white/80 text-gray-800 hover:bg-white"
      >
        <GoArrowRight className="text-2xl" />
      </button>
    </div>

    <div className="absolute bottom-4 left-0 right-0">
      <div className="flex items-center justify-center gap-2">
        {sliders.map((_, i) => (
          <div
            key={i}
            className={`transition-all w-3 h-3 bg-black rounded-full ${
              i === crr ? "p-2" : "bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  </div>
);
};
export default HomeSlider

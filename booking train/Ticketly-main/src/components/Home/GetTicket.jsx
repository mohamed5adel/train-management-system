import { useState } from "react";
import SwitchButtom from "../../UI/SwitchButtom.jsx";
import Schedule from "./Schedule.jsx"; 
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const GetTicket = () => {
    const [on, setOn] = useState(false); // التحكم في إظهار حقل "Return Date"
    const [tripType, setTripType] = useState('one-way'); // نوع الرحلة
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const navigate = useNavigate(); // هوك التنقل
    
    const handleTripChange = (value) => {
        setTripType(value);
        setOn(value === 'round-trip');
    };
    
    const handleSearch = (e) => {
        e.preventDefault(); // منع تقديم النموذج بشكل افتراضي
    
        // التحقق من ملء جميع الحقول المطلوبة
        if (!departure || !arrival || !departureDate || (on && !returnDate)) {
            setErrorMessage("Please fill in all required fields!");
            console.log(`
                Departure: ${departure}
                Arrival: ${arrival}
                Departure Date: ${departureDate}
                Return Date: ${returnDate}
                Is it a round-trip: ${on}
            `);  // سجل مفصل للمساعدة في تتبع المشكلة
            return; // توقف عن تنفيذ التنقل
        }
    
        // إعداد بيانات التذكرة
        const ticketData = {
            departure,
            arrival,
            departureDate,
            returnDate: on ? returnDate : null,
        };
    
        // تخزين البيانات في LocalStorage
        localStorage.setItem('ticketData', JSON.stringify(ticketData));
    
        // التنقل إلى صفحة Gotake
        navigate("/Gotake");
    };

    // قائمة المحافظات المصرية
    const egyptianProvinces = [
        "Cairo", "Alexandria", "Giza", "Dakahlia", "Qalyubia", "Monufia", "Sharqia", "Gharbia", "Kafr El Sheikh", 
        "Beheira", "Damietta", "Ismailia", "Suez", "Port Said", "Fayoum", "Beni Suef", "Minya", "Asyut", "Sohag", 
        "Qena", "Luxor", "Aswan", "Red Sea", "New Valley", "Matrouh", "North Sinai", "South Sinai"
    ];

    return (
        <div className="w-full flex relative bg-white justify-start items-start mb-5">
            <div className="w-[90%] mx-auto flex flex-col">
                <div className="flex flex-col my-3 p-2 justify-center items-center">
                    <h3 className="text-3xl mb-2 text-three font-bold">Book Tickets</h3>
                    <SwitchButtom onChange={handleTripChange} />
                    
                    <span className="text-three font-semibold">Departure Location</span>
                    <select 
                        className="bg-white w-[80%] md:w-[20%] border focus:border-amber-400 rounded-full p-2 
                                  text-lg font-medium shadow-md hover:shadow-lg transition ease-in-out"
                        value={departure}
                        onChange={(e) => setDeparture(e.target.value)}
                    >
                        <option value="">Select Departure Location</option>
                        {egyptianProvinces.map((province) => (
                            <option key={province} value={province}>{province}</option>
                        ))}
                    </select>

                    <span className="text-three font-semibold mt-4">Arrival Location</span>
                    <select 
                        className="bg-white w-[80%] md:w-[20%] border focus:border-amber-400 rounded-full p-2 
                                  text-lg font-medium shadow-md hover:shadow-lg transition ease-in-out"
                        value={arrival}
                        onChange={(e) => setArrival(e.target.value)}
                    >
                        <option value="">Select Arrival Location</option>
                        {egyptianProvinces.map((province) => (
                            <option key={province} value={province}>{province}</option>
                        ))}
                    </select>
                    
                    <Schedule 
                        title="Departure Date" 
                        value={departureDate} 
                        onChange={setDepartureDate} 
                    />
                    
                    {on && (
                        <Schedule
                            title="Return Date" 
                            value={returnDate} 
                            onChange={setReturnDate} 
                        />
                    )}
                    
                    {errorMessage && <span className="text-red-500">{errorMessage}</span>}

                    <button 
                        onClick={handleSearch} 
                        className="bg-two text-2xl font-bold
                         text-four mt-6 rounded-full transition cursor-pointer ease-in delay-100 p-3 uppercase
                          hover:text-white hover:bg-four"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

// PropTypes لضمان أن المكونات تتلقى القيم بشكل صحيح
GetTicket.propTypes = {
    on: PropTypes.bool,
    setOn: PropTypes.func,
    tripType: PropTypes.string,
    handleTripChange: PropTypes.func
};

export default GetTicket; 

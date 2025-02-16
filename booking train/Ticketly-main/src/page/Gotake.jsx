import React, { useEffect, useState } from 'react';

export const Gotake = () => {
    const [ticketData, setTicketData] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem('ticketData');
        if (storedData) {
            setTicketData(JSON.parse(storedData));
        }
    }, []);

    return (
        <div className='border-1 w-[30%] m-auto border-amber-400 flex flex-col justify-center'>
            <span className='ml-6 text-three'>Rupali Express</span>
            <div className='h-0.5 my-3 bg-black'/>
            {ticketData ? (
                <div className='flex justify-between'>
                    <span>{ticketData.departure}</span>
                    <span>{ticketData.arrival}</span>
                    <span>{ticketData.departureDate}</span>
                    <span>{ticketData.returnDate}</span>
                </div>
            ) : (
                <p>Loading ticket data...</p>
            )}

            <div className='flex justify-around'>
                <div className='flex gap-1'>
                    <div className='h-20 w-20 bg-amber-200 flex flex-col items-center'>
                        <span>AC-B</span>
                        <span>900$</span>
                        <span>Ticket 42</span>
                    </div>
                    <div className='h-20 w-20 bg-amber-200 flex flex-col items-center'>
                        <span>CABIN</span>
                        <span>1000$</span>
                        <span>Ticket 45</span>
                    </div>
                    <div className='h-20 w-20 bg-amber-200 flex flex-col items-center'>
                        <span>B-CHAIR</span>
                        <span>400$</span>
                        <span>Ticket 69</span>
                    </div>
                </div>
                <button>Book</button>
            </div>
        </div>
    );
};

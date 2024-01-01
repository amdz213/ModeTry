import React, { useEffect, useState } from 'react';

const BirthdayCountdown = () => {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const currentDate = new Date(); // Use a different variable here
        const dd = String(currentDate.getDate()).padStart(2, '0');
        const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
        const yyyy = currentDate.getFullYear();
        const nextYear = yyyy + 1;
        const dayMonth = '12/23/';
        let birthday = dayMonth + yyyy;

        const today = mm + '/' + dd + '/' + yyyy;
        if (today > birthday) {
            birthday = dayMonth + nextYear;
        }

        const countDownTime = new Date(birthday).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownTime - now;

            setCountdown({
                days: Math.floor(distance / day),
                hours: Math.floor((distance % day) / hour),
                minutes: Math.floor((distance % hour) / minute),
                seconds: Math.floor((distance % minute) / second),
            });

            if (distance < 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <div id="countdown">
                <div className="row justify-content-center text-center">
                    <div className='col-lg-3 col-4 mt-md-3 mt-3'>
                        <div className='d-flex align-items-center'>

                            <div>
                                <h6 className='font-18 font-500 poppins colorblack mb-0'>Days</h6>
                                <h4 id="days">{countdown.days}</h4>
                            </div>
                            <div className='ms-3'><h3 className='font-20 font-500 poppins colorpurpple ms-2'>:</h3></div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-4 mt-md-3 mt-3'>
                        <div className='d-flex align-items-center'>
                            <div >
                                <h6 className='font-18 font-500 poppins colorblack mb-0'>Hours</h6>
                                <h4 id="hours">{countdown.hours}</h4>
                            </div>
                            <div className='ms-3'><h3 className='font-20 font-500 poppins colorpurpple ms-2'>:</h3></div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-4 mt-md-3 mt-3'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <h6 className='font-18 font-500 poppins colorblack mb-0'>Minutes</h6>
                                <h4 id="minutes">{countdown.minutes}</h4>
                            </div>
                            <div className='ms-3'><h3 className='font-20 font-500 poppins colorpurpple ms-2'>:</h3></div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-4 mt-md-3 mt-3'>
                    <div className='ms-lg-3'>
                    
                    <h6 className='font-18 font-500 poppins colorblack mb-0'>Seconds</h6>
                    <h4 id="seconds">{countdown.seconds}</h4>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BirthdayCountdown;

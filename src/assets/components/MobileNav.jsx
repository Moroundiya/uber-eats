import React, { useEffect, useState } from 'react';

function MobileNav() {

    const [display, setDisplay] = useState(true);
    // const [displayNew, setDisplayNew]=useState(true)
    const changeDisplay = () => {
        setDisplay(!display)
        console.log(display)
    }


    useEffect(() => {
        setDisplay(display)
        console.log(display)
    }, [display]);


    return (
        <div className={`w-full h-full bg-[#262626cc] z-50 overflow-hidden fixed transition-all ease-in-out duration-500 ${display ? 'left-0' : 'left-[-100%]'}`} onClick={changeDisplay}>

        </div>
    )
}

export default MobileNav
import React from 'react'

function Restaurant(props) {
    return (
        <div className='w-full mb-10 '>
            <img src={props.imgURL} alt="" />
            <p className='mt-3 mb-2 text-2xl font-normal md:font-semibold md:text-[1.7rem]'>{props.title}</p>
            <a href="#" className='underline text-base md:text-lg'>{props.info}</a>
        </div>
    )
}

function createRestaurant(details) {
    <Restaurant key={details.id} title={details.title} info={details.info} />
}
export default Restaurant;
export { createRestaurant }; 
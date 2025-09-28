import React from 'react';

// import EqubTypeSelector from '../components/EqubTypeSelector';
import PeriodsFilter from "../components/HomeComp/PeriodsFilter";
import CategoryFilter from "../components/HomeComp/CategoryFilter";
import ImageSlider from "../components/Slider/ImageSlider";




const Home = () => {
    return (
        <div className="pt-6 ">

            <h1 className="text-2xl text-center font-bold">Welcome to Home Our Equb</h1>
            <p className="mt-2 text-lg text-gray-600 text-center border-b-4 w-[250px] pb-1 border-gray-200 mx-auto">please select the equb type</p>

            <div className=" space-y-6 mt-8 ">

                <div className="w-full">
                    <PeriodsFilter />

                </div>

                <div className='w-full '>
                    <ImageSlider />
                </div>

                <div className="w-full">
                    <p className="mt-2 text-lg text-gray-600 text-center border-b-4 w-[200px] pb-1 border-gray-200 mx-auto"
                    >other type of equb</p>
                </div>

                <div className="w-full">

                    <CategoryFilter />
                </div>
            </div>
        </div>
    )
}

export default Home

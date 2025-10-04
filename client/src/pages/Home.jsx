import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// import EqubTypeSelector from '../components/EqubTypeSelector';
import PeriodsFilter from "../components/HomeComp/PeriodsFilter";
import CategoryFilter from "../components/HomeComp/CategoryFilter";
import ImageSlider from "../components/Slider/ImageSlider";




const Home = () => {

    const { user } = useAuth();
    const navigate = useNavigate();

    //  Redirect if user not logged in
    useEffect(() => {
        if (!user) navigate("/login");
    }, [user, navigate]);



    return (

        user && (

            <div className=" px-2 py-6">

                <h1 className="text-xl text-center font-medium w-full">Welcome to Home Our Equb </h1>
                <p className="mt-3 text-md text-center text-gray-600 
                          border-b w-[220px] pb-1 border-slate-400
                           mx-auto    ">please select the equb type</p>


                <div className=" space-y-6 mt-8 ">

                    <div className="w-full">
                        <PeriodsFilter />

                    </div>

                    <div className='w-full '>
                        <ImageSlider />
                    </div>

                    <div className="w-full">
                        <p className="mt-2 text-lg text-gray-600 text-center
                             border-b w-[220px] pb-1 border-slate-400 mx-auto"
                        >other type of equb</p>
                    </div>

                    <div className="w-full">

                        <CategoryFilter />
                    </div>
                </div>
            </div>
        )

    );
};

export default Home







// import React from 'react';

// // import EqubTypeSelector from '../components/EqubTypeSelector';
// import PeriodsFilter from "../components/HomeComp/PeriodsFilter";
// import CategoryFilter from "../components/HomeComp/CategoryFilter";
// import ImageSlider from "../components/Slider/ImageSlider";




// const Home = () => {
//     return (
//         <div className=" px-2 py-6">

//             <h1 className="text-xl text-center font-medium w-full">Welcome to Home Our Equb </h1>
//             <p className="mt-3 text-md text-center text-gray-600
//                           border-b w-[220px] pb-1 border-slate-400
//                            mx-auto    ">please select the equb type</p>


//             <div className=" space-y-6 mt-8 ">

//                 <div className="w-full">
//                     <PeriodsFilter />

//                 </div>

//                 <div className='w-full '>
//                     <ImageSlider />
//                 </div>

//                 <div className="w-full">
//                     <p className="mt-2 text-lg text-gray-600 text-center
//                              border-b w-[220px] pb-1 border-slate-400 mx-auto"
//                     >other type of equb</p>
//                 </div>

//                 <div className="w-full">

//                     <CategoryFilter />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLottery } from "../../../context/LotteryContext";

import SpinWheel from "./SpinWheel";
import Countdown from "./Countdown";
import EqubInfoWinner from "./EqubInfoWinner";
import NotFound from "./NotFound";
import WinnerResult from "./WinnerResult";


const Lottery = () => {

  const { equbId } = useParams();
  const { equb, loading, loadEqub } = useLottery();

  useEffect(() => {
    if (equbId) loadEqub(equbId);
  }, [equbId]);


  return (
    <div className="py-6 md:py-10">

      <div className="  px-1">

        <div className="text-center mb-">
          <h1 className="text-2xl md:text-4xl font-bold text-green-700 border-b w-fit mx-auto pb-1 border-slate-400">
            Equb Lottery
          </h1>

        </div>

        {!equb && !loading && <NotFound />}

        {equb && (
          <div className="py-6 md:py-10 px-4 md:px-0 grid grid-cols-1 md:grid-cols-2">

            <div className="space-y-6 md:space-y-10 text-center ">
              <EqubInfoWinner equb={equb} />

              <Countdown /> {/* Countdown auto enables SpinWheel */}

              <div className=" hidden md:block">

                   <WinnerResult />

              </div>

            </div>


            <div className="flex justify-center my-6 md:my-10">
              <SpinWheel />
            </div>

            <div className=" block md:hidden mt-10">
               <WinnerResult /> {/* Automatically shows winner from context */}
             </div>

          </div>

        )}
      </div>
    </div>
  );
};

export default Lottery;



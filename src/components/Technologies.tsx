import { use } from "react";
import type { TechnologiesType } from "../types/types";
import AvailableTechnologies from "./AvailableTechnologies";

export interface TechnologiesProps {
  promiseTechnologies: Promise<TechnologiesType[]>;
}

const Technologies = ({ promiseTechnologies }: TechnologiesProps) => {
  const Technologies = use(promiseTechnologies);


  return (
    <>
      <div className="container mx-auto mb-10">
        <h1 className="text-4xl text-[#0F172A] font-bold mb-3">
          Explore The{" "}
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4 items-start">
          <div className="col-span-9">
            <div className="grid grid-cols-3 gap-4">
              {Technologies.map(
                (technology: TechnologiesType, index: number) => (
                  <AvailableTechnologies technology={technology} key={index} />
                ),
              )}
            </div>
          </div>

          <div className="col-span-3">
            <div className="w-full border-2 border-gray-300 shadow rounded-3xl">
              <div className="flex flex-col gap-3 justify-center items-center py-5">
                <h1 className="text-[#0F172A] font-bold text-3xl">
                  Your Stack
                </h1>

                <p className="font-bold text-[#94A3B8]">
                  No Technologies selected yet.
                </p>
              </div>

              <div className="flex justify-center items-center px-5 pb-5">
                <div className="w-full py-10 rounded-3xl border-2 border-dashed border-gray-300 flex justify-center">
                  <h1 className="font-bold text-[#94A3B8]">
                    Your stack is empty.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;

import { IoIosStar } from "react-icons/io";
import type { TechnologiesType } from "../types/types";
import type { Dispatch, SetStateAction } from "react";

export interface TechnologyCardProps {
  technology: TechnologiesType;
  isSelected: boolean
  setIsSelected: Dispatch<SetStateAction<boolean>>
}

const TechnologyCard = ({ technology,isSelected,setIsSelected }: TechnologyCardProps) => {

  const handleUpdateButton = () => {
    setIsSelected(true)
  }

  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      
      <div className="flex items-start justify-between">
        
        
        <div className="flex h-14 w-14 items-center justify-center">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-12 w-12 object-contain"
          />
        </div>

        
        <span className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-500">
          {technology.badge}
        </span>
      </div>

      
      <h2 className="mt-7 text-3xl font-bold tracking-tight text-slate-900">
        {technology.name}
      </h2>

      
      <p className="mt-4 min-h-[84px] text-lg leading-8 text-slate-500">
        {technology.description}
      </p>

      
      <div className="divider"></div>

      
      <div className="flex items-center justify-between gap-3">
        
        
        <span className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600">
          {technology.category}
        </span>

        
        <span className="text-sm font-medium text-slate-500">
          {technology.difficulty}
        </span>

       
        <div className="flex items-center gap-1.5">
          <IoIosStar className="text-lg text-orange-300" />
          <span className="text-sm font-semibold text-slate-700">
            {technology.rating}
          </span>
        </div>
      </div>

      
      <button
        type="button"
        className="mt-6 w-full rounded-xl bg-slate-950 px-5 py-3.5 text-lg font-medium text-white transition-all duration-200 hover:bg-slate-800 active:scale-[0.98]"
        onClick={() => handleUpdateButton()}
      >
        {isSelected ? "added" : "Add to Task"}
      </button>
    </div>
  );
};

export default TechnologyCard;
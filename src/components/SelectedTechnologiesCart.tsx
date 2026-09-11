import type { Dispatch, SetStateAction } from "react";
import type { TechnologiesType } from "../types/types";
import { IoMdClose } from "react-icons/io";
import { Bounce, toast } from "react-toastify";

export interface SelectedTechnologiesCartProps {
  selected: TechnologiesType[];
  setSelected: Dispatch<SetStateAction<TechnologiesType[]>>;
}

const SelectedTechnologiesCart = ({
  selected,
  setSelected,
}: SelectedTechnologiesCartProps) => {
  const handleRemoveButton = (technology: TechnologiesType) => {
    const restSelected = selected.filter(
      (selectedTecnology) => selectedTecnology.id !== technology.id,
    );
    setSelected(restSelected);
    toast.info(`${technology.name} remove to from Stack`, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const handleRemoveAllButton = () => {
    setSelected([]);
    toast.info(`Your stack cleared`, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    
  };

  return (
    <div className="w-full  rounded-3xl border border-slate-100 bg-white p-7 shadow">
      <div className="mb-7">
        <h2 className="text-3xl font-bold text-slate-900">Your Stack</h2>

        <p className="mt-2 text-2xl text-slate-400">
          {selected.length} Technology Selected
        </p>
      </div>

      {/* Selected Technologies */}
      <div className="space-y-2">
        {selected.map((technology, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl border-2 border-slate-200 bg-white px-5 py-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-12 w-12 object-contain"
              />

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {technology.name}
                </h3>

                <p className="text-sm text-slate-400">{technology.category}</p>
              </div>
            </div>

            <button
              type="button"
              className="text-4xl font-light leading-none text-slate-400 hover:text-red-500"
              onClick={() => handleRemoveButton(technology)}
            >
              <IoMdClose />
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mt-22 w-full rounded-2xl border border-red-400 py-3 text-2xl font-semibold text-red-500 hover:bg-red-50"
        onClick={() => handleRemoveAllButton()}
      >
        Remove All
      </button>
    </div>
  );
};

export default SelectedTechnologiesCart;

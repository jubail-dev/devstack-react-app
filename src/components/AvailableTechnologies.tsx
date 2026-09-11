import type { Dispatch, SetStateAction } from "react";
import type { TechnologiesType } from "../types/types";
import TechnologyCard from "./TechnologyCard";

export interface AvailableTechnologiesProps {
    technology: TechnologiesType
    selected: TechnologiesType[]
    setSelected: Dispatch<SetStateAction<TechnologiesType[]>>
}

const AvailableTechnologies = ({ technology ,selected,setSelected}: AvailableTechnologiesProps) => {
    
    return (
        <>
            <TechnologyCard technology ={technology} selected = {selected} setSelected ={setSelected}></TechnologyCard>
        </>
    )
}

export default AvailableTechnologies;
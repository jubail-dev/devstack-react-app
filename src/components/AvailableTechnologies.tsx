import type { TechnologiesType } from "../types/types";
import TechnologyCard from "./TechnologyCard";

export interface AvailableTechnologiesProps {
    technology: TechnologiesType
}

const AvailableTechnologies = ({ technology }: AvailableTechnologiesProps) => {
    
    return (
        <>
            <TechnologyCard technology ={technology}></TechnologyCard>
        </>
    )
}

export default AvailableTechnologies;
import type { TechnologiesType } from "../types/types";

export interface TechnologiesProps {
    promiseTechnologies: Promise<TechnologiesType[]>
}

const Technologies = ({ promiseTechnologies }: TechnologiesProps) => {
    console.log(promiseTechnologies);
    return (
        <>
            
        </>
    )
}

export default Technologies;
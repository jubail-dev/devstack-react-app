export interface TechnologiesType {
    id: string,
    name: string,
    category: string,
    description: string,
    icon: string,
    rating: number,
    difficulty: string,
    badge?: {
        text: string,
        textColor: string,
        bgColor: string
    }
}
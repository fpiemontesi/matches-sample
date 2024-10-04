export interface Match {
    id: string;
    local: string;
    visitor: string;
    localScore: number;
    visitorScore: number;
    date?: Date;
}

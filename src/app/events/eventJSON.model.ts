export default interface EventJSON {
    _id: string,
    type: string,
    date: string,
    description?: string,
    title?: string,
    party?: string;
    sum?: number;
    currency?: string;
    direction?: string;
    isRead?: boolean;
}

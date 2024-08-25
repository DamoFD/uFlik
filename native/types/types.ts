export interface UserContext {
    name: string;
    image: string;
}

export interface PostContext {
    id: number;
    image: string;
    title: string;
    price: string;
    category: string;
    user: UserContext;
}

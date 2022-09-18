export interface NewUser {
    password: string;
    username: string;
    email: string;
}

export interface UserLoginData {
    username: string;
    email: string;
}

export interface User {
    username: string;
    id: string;
}
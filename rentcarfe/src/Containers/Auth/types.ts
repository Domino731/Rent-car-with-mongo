export enum AUTH_KEY {
    REGISTER = 'REGISTER'
}

export type AuthKeyUnion = keyof typeof AUTH_KEY;
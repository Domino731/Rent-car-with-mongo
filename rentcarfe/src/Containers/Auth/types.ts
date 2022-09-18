export enum AUTH_KEY {
    REGISTER = 'REGISTER',
    LOGIN = 'LOGIN',
    PASSWORD_RECOVERY = 'PASSWORD_RECOVERY'
}

export type AuthKeyUnion = keyof typeof AUTH_KEY;
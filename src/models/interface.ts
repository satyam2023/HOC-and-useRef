interface Ivalue{
    name: React.MutableRefObject<string>;
    email: React.MutableRefObject<string>;
    contact: React.MutableRefObject<string>;
    country: React.MutableRefObject<string>;
    createPassword: React.MutableRefObject<string>;
    confirmPassword: React.MutableRefObject<string>;
}

export type {Ivalue};
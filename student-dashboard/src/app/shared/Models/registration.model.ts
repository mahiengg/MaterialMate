export interface Registration{

    firstName: string | null;
    lastName:string | null;
    email: string | null;
    password:string | null;
}


export interface LoginModel{
    email: string | null;
    passWord:string | null;
}
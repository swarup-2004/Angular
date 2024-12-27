export interface User {
    name: string;
    age?: number; // Optional property
    id: number;
    email: string;
}

interface Student extends User {
    school: string;
    percentage: number;

    isPassed(): boolean;
} 

export interface Login {
    Login(): User;
}



let user: User = {
    name: "Swarup",
    id: 1,
    email: "swarup@gmail.com"
};





export interface User {
    id: string;
    role: 'user' | 'admin';
}

export interface AuthState {
    user: User | null;
}

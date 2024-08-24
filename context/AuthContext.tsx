import { User } from "@/types/user";

interface AuthContextProps {
    isLoggedIn: boolean,
    isLoadingAuth: boolean,
    authenticate: (authMode: "login" | "register", email: string, password: string) => Promise<void>,
    logout: VoidFunction,
    // logout: () => void,
    user: User | null
}
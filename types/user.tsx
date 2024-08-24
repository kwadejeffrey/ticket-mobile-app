import { ApiResponse } from "./api"

export enum UserRole{
    Manager = "manager",
    Attendee = "attendee"
}

export type AuthResponse = ApiResponse<{user: User, token: string}>


export type User{
    id: number,
    role: UserRole,
    email: string,
    createdAt: string,
    updatedAt: string
}
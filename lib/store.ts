import { create } from 'zustand'

// Define TypeScript type for user
interface UserType {
    name?: string;
    Email?: string;
    password?: string;
}

// Define TypeScript type for the Zustand store
interface UserStore {
    users: UserType[];
    addUser: (newUser: UserType) => void;
    removeUser: (email: string) => void;
}

// Define the Zustand store with proper types
const useUserStore = create<UserStore>((set) => ({
    // Initial state: an array of users
    users: [],


    // Function to add a new user
    addUser: (newUser) =>
        set((state) => ({
            users: [...state.users, newUser],
        })),

    // Function to remove a user by email (or any unique identifier)
    removeUser: (email) =>
        set((state) => ({
            users: state.users.filter((user) => user.Email !== email),
        })),

    getEmail:
}));

export default useUserStore;

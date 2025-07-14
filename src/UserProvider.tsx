import React, { createContext, useContext, useState } from "react";

export type User = {
  id: number;
  name: string;
  email: string;
  age?: number;
};

type UserContextType = {
  users: User[];
  addUser: (user: Omit<User, "id">) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: Omit<User, "id">) => {
    setUsers((prev) => [...prev, { id: Date.now(), ...user }]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

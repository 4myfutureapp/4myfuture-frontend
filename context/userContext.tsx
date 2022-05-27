import { createContext, useState } from "react";

export const UserContext = createContext<
  [
    string | null,
    React.Dispatch<React.SetStateAction<string | null>> | null
  ]
>(["", null]);

interface FunctionalComponent {
  children: React.ReactNode;
}

const UserContextProvider = ({ children }: FunctionalComponent) => {
  const [user, setUser] = useState<string | null>("");

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
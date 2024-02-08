import {
  useContext,
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

const ActiveTagContext = createContext<{
  activeTag: string[];
  setActiveTag: Dispatch<SetStateAction<string[]>>;
}>({ activeTag: [], setActiveTag: () => {} });

export const useActiveTag = () => useContext(ActiveTagContext);

export const ActiveTagProvider = ({ children }: { children: ReactNode }) => {
  const [activeTag, setActiveTag] = useState<string[]>([]);

  return (
    <ActiveTagContext.Provider value={{ activeTag, setActiveTag }}>
      {children}
    </ActiveTagContext.Provider>
  );
};

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export type ThemeContextType = {
  mode: 'light' | 'dark' | 'inherit';
  changeMode: (pickedMode: ThemeContextType['mode']) => void;
};

type Props = {
  children: ReactNode;
};

const themeContext = createContext({
  mode: 'dark',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeMode: (mode: ThemeContextType['mode']) => {},
});

export function ThemeProvider({ children }: Props) {
  const [mode, setMode] = useState<ThemeContextType['mode']>('light');

  const changeMode = useCallback((pickedMode: ThemeContextType['mode']) => {
    setMode(pickedMode);
  }, []);

  const contextValue = useMemo(
    () => ({ mode, changeMode }),
    [mode, changeMode]
  );

  return (
    <themeContext.Provider value={contextValue}>
      {children}
    </themeContext.Provider>
  );
}

export const useThemeProvider = () => useContext(themeContext);

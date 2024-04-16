import { Button } from '@radix-ui/themes';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

import { useThemeProvider } from '../../providers';

export function ThemeSwitcher() {
  const { mode, changeMode } = useThemeProvider();
  return (
    <Button
      variant="outline"
      onClick={() => changeMode(mode === 'light' ? 'dark' : 'light')}
    >
      {mode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}

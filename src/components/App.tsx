import { Theme } from '@radix-ui/themes';
// ThemePanel

import { AppRoutes } from '../routes';
import { RootProviders, ThemeContextType, useThemeProvider } from './providers';

import '@radix-ui/themes/styles.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { mode } = useThemeProvider();

  return (
    <Theme
      accentColor="indigo"
      grayColor="sand"
      radius="large"
      scaling="95%"
      appearance={mode as ThemeContextType['mode']}
    >
      <AppRoutes />
    </Theme>
  );
}

export function WrappedApp() {
  return (
    <RootProviders>
      <App />
    </RootProviders>
  );
}

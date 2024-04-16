import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from './ThemeProvider';
import { queryClient } from '../../react-query';

type Props = {
  children: ReactNode;
};

export function RootProviders({ children }: Props) {
  return (
    <ThemeProvider>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}

import { Box, Flex } from '@radix-ui/themes';
import { ThemeSwitcher } from './ThemeSwitcher';

import styles from './NavBar.module.css';

export function NavBar() {
  return (
    <Box className={styles.root}>
      <Flex justify="end" align="center" height="65px" px="4">
        <Box>
          <ThemeSwitcher />
        </Box>
      </Flex>
    </Box>
  );
}

import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { useMediaQuery, } from '@mantine/hooks';
import { BoxMain } from './components';
import CharacterGrid from './components/CharacterLayout/CharacterGrid';
import characterData from './data/dbdata';
import { DockSaga } from './components';
import { ThemeProvider } from "@/components/theme-provider"



const App = () => {
  const isSmallScreen = useMediaQuery('(max-width: 800px)');
  const isMediumScreen = useMediaQuery('(max-width: 1300px)');
  const cols = isSmallScreen ? 1 : isMediumScreen ? 2 : 4;



  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BoxMain>
          <CharacterGrid cols={cols} characters={characterData} />
        </BoxMain>
        <DockSaga />
      </ThemeProvider>
  );
};

export { App };

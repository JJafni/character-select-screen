import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { useMediaQuery, } from '@mantine/hooks';
import { BoxMain } from './components';
import CharacterGrid from './components/CharacterLayout/CharacterGrid';
import characterData from './data/dbdata';
import { DockSaga } from './components';
import { BentoDemo } from './components/Layout';
import { ThemeProvider } from "@/components/theme-provider"



const App = () => {
  const isSmallScreen = useMediaQuery('(max-width: 800px)');
  const isMediumScreen = useMediaQuery('(max-width: 1300px)');
  const cols = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;



  return (
    <MantineProvider defaultColorScheme="dark">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

        <BentoDemo />
        <BoxMain>
          <CharacterGrid cols={cols} character={characterData} />

        </BoxMain>
        <DockSaga />
      </ThemeProvider>
    </MantineProvider>
  );
};

export { App };

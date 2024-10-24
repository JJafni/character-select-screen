import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { BoxMain } from './components';
import CharacterGrid from './components/CharacterLayout/CharacterGrid';
import characterData from './data/dbdata';


const App = () => {
  const isSmallScreen = useMediaQuery('(max-width: 800px)');
  const isMediumScreen = useMediaQuery('(max-width: 1300px)');
  const cols = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;




  return (
    <MantineProvider>
      <BoxMain>
        <CharacterGrid cols={cols} character={characterData} />

      </BoxMain>
    </MantineProvider>
  );
};

export { App };

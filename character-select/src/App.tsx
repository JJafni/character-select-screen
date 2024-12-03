import './App.css';
import { useMediaQuery } from '@mantine/hooks';
import { BoxMain, DockSaga, Hero } from './components';
import CharacterGrid from './components/CharacterLayout/CharacterGrid';
import characterData from './data/dbdata';
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterDetails from './pages/characters/[id]';

const App = () => {
  const isSmallScreen = useMediaQuery('(max-width: 800px)');
  const isMediumScreen = useMediaQuery('(max-width: 1300px)');
  const cols = isSmallScreen ? 1 : isMediumScreen ? 2 : 4;

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <BoxMain>
                  <CharacterGrid cols={cols} characters={characterData} />
                </BoxMain>
                {/* <DockSaga /> */}
              </>
            }
          />
          {/* Character details page */}
          <Route path="/characters/:id" element={<CharacterDetails />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export { App };

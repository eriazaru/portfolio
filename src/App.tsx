// color palette https://visme.co/blog/website-color-schemes/ No. 27
// svg download https://www.svgrepo.com/vectors/figma/icon/
// tailwind configuration documentation https://tailwindcss.com/docs/theme
// https://pagedone.io/docs/animation
// https://www.hover.dev/components/navigation
// https://tailwindflex.com/@samuel33/typewriter-animation-effect
// Background Gradients and Effects https://bg.ibelick.com/

import DataProvider from './components/hooks/context/DataContextProvider';

import NavigationBar from './components/header/navigation/NavigationBar';
import MainContent from './components/main/MainContent';
import FooterComponent from './components/footer/FooterComponent';

function App() {
  return (
    <>
      <DataProvider>
        <header>
          <NavigationBar/>
        </header>
          <MainContent/>
        <footer>
          <FooterComponent/>
        </footer>
      </DataProvider>
    </>
  )
}

export default App

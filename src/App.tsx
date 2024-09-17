// color palette https://visme.co/blog/website-color-schemes/ No. 27
// svg download https://www.svgrepo.com/vectors/figma/icon/
// tailwind configuration documentation https://tailwindcss.com/docs/theme
// https://pagedone.io/docs/animation
// https://www.hover.dev/components/navigation
// [color scheme: 
// #61892F - darker green
// #86C232 - lighter green
// #222629 - black
// #474B4F - darker grey
// #6B6E70 - grey
import DataProvider from './components/hooks/context/DataContextProvider';

import NavigationBar from './components/header/navigation/NavigationBar';
import MainContent from './components/main/MainContent';

function App() {
  return (
    <>
      <DataProvider>
        <header>
          <NavigationBar/>
        </header>
          <MainContent/>
      </DataProvider>
    </>
  )
}

export default App

import ActiveSectionContextProvider from 'context/active-section-context'
import LanguageContextProvider from 'context/language-context'
import ThemeContextProvider from 'context/theme-context'
import { useRouter } from 'next/router'

import Home from './Hero'

function App() {
  const router = useRouter()
  return (
    <>
      <ThemeContextProvider>
        <LanguageContextProvider>
          <ActiveSectionContextProvider>
            {router.pathname === '/' && <Home />}
            {router.pathname === '/imprint' && <Home />}
            {router.pathname === '/privacy' && <Home />}
          </ActiveSectionContextProvider>
        </LanguageContextProvider>
      </ThemeContextProvider>
    </>
  )
}

export default App

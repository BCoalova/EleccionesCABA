import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import './styles/styles.css'
import { themeDark, themeLight } from './styles/theme'
import HomePage from './views'

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

    // eslint-disable-next-line no-undef
    console.log('themeDark => ', themeDark)
    // eslint-disable-next-line no-undef
    console.log('themeLight => ', themeLight)

    return (
        <ThemeProvider theme={prefersDarkMode ? themeDark : themeLight}>
            <CssBaseline />
            <HomePage />
        </ThemeProvider>
    )
}

export default App

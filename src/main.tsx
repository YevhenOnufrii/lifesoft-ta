import { theme } from './theme/index.ts'

import ReactDOM from 'react-dom/client'

import { CssBaseline, ThemeProvider } from '@mui/material'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <App />
  </ThemeProvider>
)

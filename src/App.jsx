import './App.css';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from "./theme/theme";
import router from "./routes/router";

function App() {
  return(
    <ThemeProvider theme={lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App

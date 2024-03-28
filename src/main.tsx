
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from 'react-redux';
import {store} from './state/store';
import { ThemeProvider } from '@emotion/react';
import theme from './components/Theme.tsx';
import { GlobalStyle } from './components/createGlobalStyle.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
<ThemeProvider theme={theme}>
    <Provider store={store}>
   <GlobalStyle/>
    <App />
 
    </Provider>

</ThemeProvider>
)

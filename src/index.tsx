import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeSettingsProvider } from './contexts/ThemeSettings';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SidebarSettingsProvider } from './contexts/SidebarSettings';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ThemeSettingsProvider initialTheme={undefined}>
            <SidebarSettingsProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </SidebarSettingsProvider>
        </ThemeSettingsProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

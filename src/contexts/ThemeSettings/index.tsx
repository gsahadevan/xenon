import { createContext, useEffect, useState } from 'react';
import { IThemeSettingsContext } from './IThemeSettingsContext';

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }

    return 'light'; // Setting default theme to light
};

export const ThemeContext = createContext<IThemeSettingsContext | null>(null);

export const ThemeSettingsProvider = ({ initialTheme, children }: any) => {
    const [theme, setTheme] = useState(getInitialTheme);

    const rawSetTheme = (theme: string) => {
        const root = window.document.documentElement;
        const isDark = theme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(theme);

        localStorage.setItem('color-theme', theme);
    };

    if (initialTheme) {
        rawSetTheme(initialTheme);
    }

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};

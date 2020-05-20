import React from 'react';
import { ThemeProvider } from 'react-jss'
import {light, dark} from '../static/themes';
import { Header } from './layout/Header';
import { PageWrapper } from './layout/PageWrapper';
import { WatchContainer } from './stopwatch/WatchContainer';

export type ThemeType = 'light' | 'dark';

const themesMap = {light, dark};

export const App: React.FC = () => {
    const [theme, switchTheme] = React.useState<ThemeType>('light');

    return (
        <ThemeProvider theme={themesMap[theme]}>
            <Header switchTheme={() => switchTheme(theme === 'dark' ? 'light' : 'dark')} />
            <PageWrapper>
                <WatchContainer />
            </PageWrapper>
        </ThemeProvider>
    );
}
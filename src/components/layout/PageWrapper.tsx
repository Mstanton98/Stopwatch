import React from 'react';
import { createUseStyles } from 'react-jss';
import { ITheme } from '../../static/types';

const useStyles = createUseStyles((theme: ITheme) => ({
    pageWrapper: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        background: theme.contrast01,
        padding: [24, 24, 0, 24],
        transition: '.5s ease color',
        height: 'calc(100vh - 80px)',
        boxSizing: 'border-box',
    },
}));

export const PageWrapper: React.FC = ({ children }) => {
    const {pageWrapper} = useStyles();

    return (
        <div className={pageWrapper}>{children}</div>
    )
};

import React from "react";
import { createUseStyles } from 'react-jss';
import { ITheme } from "../../static/types";

const useStyles = createUseStyles((theme: ITheme) => ({
    section: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        background: theme.contrast01,
        padding: 24,
        height: 'calc(100vh - 80px)',
        boxSizing: 'border-box',
    },
}));

export const Section: React.FC = ({ children }) => {
    const {section} = useStyles();

    return (
        <section className={section}>{children}</section>
    )
};

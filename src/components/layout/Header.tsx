import React from "react";
import {createUseStyles} from 'react-jss';
import { ITheme } from "../../static/types";

const useStyles = createUseStyles((theme: ITheme) => ({
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        background: theme.themeBase,
        height: 80,
        fontSize: 48,
        fontFamily: 'Helvetica',
        color: theme.contrast03,
        padding: [0, 16],
        '& > a': {
            marginLeft: '0',
            marginRight: 'auto',
        },
        '& > span': {
            margin: 'auto',
        },
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        height: 40,
        width: 70,
        border: 0,
        color: theme.contrast03,
        background: theme.contrast01,
        marginLeft: 'auto',
        cursor: 'pointer',
    },
}));

export interface IHeaderProps {
    switchTheme: () => void;
}

export const Header: React.FC<IHeaderProps> = ({switchTheme}) => {
    const {header, button} = useStyles();
    return (
        <nav className={header}>
            <a className={button} href="" target="_blank">Github</a>
            <span>React Timer</span>
            <button className={button} onClick={switchTheme}>Switch Theme</button>
        </nav>
    );
}
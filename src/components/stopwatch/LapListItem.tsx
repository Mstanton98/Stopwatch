import React from 'react';
import { createUseStyles } from 'react-jss';
import { TimeDisplay } from './TimeDisplay';
import { ITheme } from '../../static/types';

const useStyles = createUseStyles((theme: ITheme) => ({
    lapListItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 64,
        fontSize: 32,
        fontFamily: 'Helvetica',
        width: '100vw',
        boxSizing: 'border-box',
        padding: [8, 12],
        color: theme.contrast03,
        border: [1, 'solid', theme.contrast01],
        '& > span': {
            marginRight: 'auto',
        }
    },
    lapTimeDisplay: {
        marginLeft: 'auto',
    }
}));

export interface ILapListItemProps {
    lapNumber: number;
    time: number;
}

export const LapListItem: React.FC<ILapListItemProps> = ({ lapNumber, time }) => {
    const { lapListItem, lapTimeDisplay } = useStyles();

    return (
        <li className={lapListItem}>
            <span>{ lapNumber }</span>
            <TimeDisplay className={lapTimeDisplay} time={time}/>
        </li>
    );
}
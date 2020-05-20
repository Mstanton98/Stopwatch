import React from 'react';
import { LapListItem } from './LapListItem';
import { createUseStyles } from 'react-jss';
import { ITheme } from '../../static/types';

const useStyles = createUseStyles((theme: ITheme) => ({
    lapList: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignSelf: 'flex-end',
        margin: ['auto', 0, 0, 0],
        width: '100vw',
        height: 'auto',
        minHeight: 64,
        maxHeight: '30%',
        overflow: 'scroll',
        background: theme.themeBase,
        listStyle: 'none',
        paddingLeft: 0,
        transition: '.5s ease color'
    },
}));

export interface ILapListProps {
    lapData: number[];
}

export const LapList: React.FC<ILapListProps> = ({ lapData }) => {
    const {lapList} = useStyles();
    
    return (
        <ol className={lapList}>
            {lapData.map((time: number, index: number) => 
                <LapListItem key={index} time={time} lapNumber={index + 1} />
            )}
        </ol>
    );
}
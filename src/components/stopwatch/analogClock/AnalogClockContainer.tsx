import React from 'react';
import { ClockFace } from './ClockFace';
import { createUseStyles } from 'react-jss';
import { ITheme } from '../../../static/types';

const useStyles = createUseStyles((theme: ITheme) => ({
    wrapper: {
        display: 'flex',
        width: '80%',
        maxWidth: 512,
        margin: [0, 'auto'],
        position: 'relative',
        '& figure:first-of-type': {
            position: 'absolute',
            top: 0,
            left: 'auto',
            right: 'auto',
            height: 'auto',
            width: 60,
        },
    },
}));

export interface IAnalogClockContainerProps {
    time: number;
}

export const AnalogClockContainer: React.FC<IAnalogClockContainerProps> = ({ time }) => {
    const {wrapper} = useStyles();

    return (
        <div className={wrapper}>
            <ClockFace size={256} />
            <ClockFace size={128} />
        </div>
    );
}
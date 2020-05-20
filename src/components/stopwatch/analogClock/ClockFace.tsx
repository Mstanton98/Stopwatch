import React from 'react';
import { createUseStyles } from 'react-jss';
import { ITheme } from '../../../static/types';

const useStyles = createUseStyles((theme: ITheme) => ({
    clockFace: {
        display: 'flex',
        fill: theme.contrast03

    },
    centiseconds: {
        fill: theme.themeBase,
        transform: 'translate(5%, 5%)',
        strokeLinecap: 'butt',
        stroke: theme.contrast03
    },
    fifths: {
        fill: 'transparent',
        position: 'relative',
        zIndex: 1,
        transform: 'translate(5%, 5%)',
        strokeLinecap: 'butt',
        stroke: theme.contrast03,
        strokeDashoffset: 3,
        margin: 'auto',
    },
}));

export interface IClockFaceProps {
    size: number;
}

export const ClockFace: React.FC<IClockFaceProps> = ({ size }) => {
    const { clockFace, centiseconds, fifths } = useStyles();
    const radius = size - 4 * 2;
    const circumference = (size * 2) * Math.PI;

    return (
        <figure>
            <svg className={clockFace} viewBox={`0 0 ${size * 2} ${size * 2}`}>
                <circle
                    cx={radius}
                    cy={radius}
                    r={radius}
                    strokeWidth={4}
                />
                <circle
                    className={centiseconds}
                    cx={radius * .90}
                    cy={radius * .90}
                    r={radius * .90}
                    strokeWidth={24 * .90}
                    // strokeDasharray={`1 ${(circumference / 300) - 1}`}
                />
                <circle
                    className={fifths}
                    cx={radius * .90}
                    cy={radius * .90}
                    r={radius * .90}
                    strokeWidth={48}
                    strokeDasharray={`2 ${circumference / (14)}`}
                />
            </svg>
        </figure>
    );
}
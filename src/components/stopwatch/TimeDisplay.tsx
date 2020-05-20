import React from 'react';

export interface ITimeDisplayProps {
    className?: string;
    time: number;
}

export const TimeDisplay: React.FC<ITimeDisplayProps> = ({ className, time }) => {
    const hours = ('0' + Math.floor(time / 3600000)).slice(-2);
    const minutes = ('0' + Math.floor(time / 60000) % 60).slice(-2);
    const seconds = ('0' + Math.floor(time / 1000) % 60).slice(-2);
    const centiseconds = ('0' + Math.floor(time / 10) % 100).slice(-2);

    return (
        <time className={className}>
            {hours} : &nbsp;
            {minutes} : &nbsp;
            {seconds} : &nbsp;
            {centiseconds}
        </time>
    );
}
import React from 'react';
import { WatchControls } from './WatchControls';
import { TimeDisplay } from './TimeDisplay';
import { LapList } from './LapList';
import { createUseStyles } from 'react-jss';
import { ITheme } from '../../static/types';

const useStyles = createUseStyles((theme: ITheme) => ({
    watchDisplay: {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Helvetica',
        width: '100%',
        color: theme.contrast03,
        fontSize: 88,
        margin: 'auto',
        boxSizing: 'border-box',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
    },

}));

export interface ITimerState {
    timerOn?: boolean;
    time?: number;
    timerStart?: number;
}

export const WatchContainer: React.FC = () => {
    const { watchDisplay, wrapper } = useStyles();
    const [{ time, timerOn }, setTimer] = React.useState<ITimerState>({ timerOn: false, time: 0, timerStart: 0 });
    const [laps, setLaps] = React.useState<number[]>([]);
    const timer = React.useRef(null);

    const toggleTimer = () => {
        if (timerOn) {
            setTimer(prevState => ({ ...prevState, timerOn: false }));
            clearInterval(timer.current);
        } else {
            setTimer(prevState => ({
                timerOn: true,
                time: prevState.time,
                timerStart: Date.now() - prevState.time
            }));

            timer.current = setInterval(() => {
                setTimer(prevState => ({ ...prevState, time: Date.now() - prevState.timerStart }));
            }, 10)
        }
    };

    const controlProps = {
        timerOn,
        toggleTimer,
        lap: () => setLaps(prevState => [...prevState, time]),
        reset: () => (setTimer({ timerOn: false, time: 0, timerStart: 0 }), setLaps([]))
    };

    return (
        <div className={wrapper}>
            <TimeDisplay className={watchDisplay} time={time} />
            <WatchControls {...controlProps} />
            <LapList lapData={laps}/>
        </div>
    );
}
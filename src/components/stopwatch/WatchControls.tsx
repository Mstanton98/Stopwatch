import React from 'react';
import { createUseStyles } from 'react-jss';
import { ITheme } from '../../static/types';

const useStyles = createUseStyles((theme: ITheme) => ({
    controlsWrapper: {
        display: 'flex',
        justifyContent: 'center',
        padding: [0, 24],
        height: 200,
    },
    button: {
        height: 80,
        width: 104,
        margin: [0, 64],
        fontFamily: 'Helvetica',
        fontSize: 24,
        color: theme.contrast03,
        //TODO add shadow color to theme
        boxShadow: [1, 1, 1, 1, '#757575'],
        borderRadius: 4,
        background: theme.contrast01,
    }
}));

export interface IWatchControlsProps {
    lap: () => void;
    reset: () => void;
    timerOn: boolean;
    toggleTimer: () => void;
}

export const WatchControls: React.FC<IWatchControlsProps> = ({ toggleTimer, timerOn, lap, reset }) => {
    const { controlsWrapper, button } = useStyles();
    const sharedButtonProps = {className: button, tabIndex: 0};

    return (
        <span className={controlsWrapper}>
            <button {...sharedButtonProps} onClick={toggleTimer}>{timerOn ? 'Stop' : 'Start'}</button>
            <button {...sharedButtonProps} onClick={timerOn ? lap : reset}>{timerOn ? 'Lap' : 'Reset'}</button>
        </span>
    );
}
import React from 'react';
import { LapListItem } from './LapListItem';
import { createUseStyles } from 'react-jss';
import { ITheme } from '../../static/types';

const useStyles = createUseStyles((theme: ITheme) => ({
    lapList: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column-reverse',
        alignSelf: 'flex-end',
        width: '100vw',
        listStyle: 'none',
        paddingLeft: 0,
        transition: '.5s ease color',
        height: 256,
        marginTop: 0,
        marginBottom: 0,
    },
    wrapper: {
        overflow: 'scroll',
        background: theme.themeBase,
        margin: [16, 0, 0, 0],
    },
}));

export interface ILapListProps {
    lapData: number[];
}

export const LapList: React.FC<ILapListProps> = ({ lapData }) => {
    const { lapList, wrapper } = useStyles();
    const scrollRef = React.useRef();

    React.useEffect(() => {
        const currentRef: HTMLDivElement = scrollRef.current;

        if (currentRef !== undefined) {
            currentRef.scrollIntoView();
        }

    }, [lapData])
    
    return (
        <div className={wrapper}>
            <ol className={lapList}>
                {lapData.map((time: number, index: number) => 
                    <LapListItem 
                    key={index} 
                    time={lapData[index - 1] ? time - lapData[index - 1] : time}
                    lapNumber={index + 1} />
                    )}
                    <li ref={scrollRef}></li>
            </ol>
        </div>
    );
}
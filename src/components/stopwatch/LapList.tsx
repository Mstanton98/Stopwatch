import React from 'react';
import { LapListItem } from './LapListItem';
import { createUseStyles } from 'react-jss';
import { ITheme } from '../../static/types';

const useStyles = createUseStyles((theme: ITheme) => ({
    lapList: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column-reverse',
        alignSelf: 'flex-end',
        margin: [16, 0, 0, 0],
        overflow: 'scroll',
        width: '100vw',
        background: theme.themeBase,
        listStyle: 'none',
        paddingLeft: 0,
        transition: '.5s ease color',
        height: 128,
    },
}));

export interface ILapListProps {
    lapData: number[];
}

export const LapList: React.FC<ILapListProps> = ({ lapData }) => {
    const { lapList } = useStyles();
    const scrollRef = React.useRef();

    React.useEffect(() => {
        const currentRef: HTMLDivElement = scrollRef.current;

        if (currentRef !== undefined) {
            currentRef.scrollIntoView({ behavior: "smooth" });
        }

    }, [lapData])
    
    return (
            <ol className={lapList}>
                {lapData.map((time: number, index: number) => 
                    <LapListItem 
                    key={index} 
                    time={lapData[index - 1] ? time - lapData[index - 1] : time}
                    lapNumber={index + 1} />
                    )}
                    <li ref={scrollRef}></li>
            </ol>
    );
}
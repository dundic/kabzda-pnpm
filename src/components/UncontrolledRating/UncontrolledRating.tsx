import {useState} from 'react';

export const UncontrolledRating = () => {

    const [mark, setMark] = useState(0);

    return (
            <div>
                <Star painted={mark > 0} onClick={() => setMark(1)}/>
                <Star painted={mark > 1} onClick={() => setMark(2)}/>
                <Star painted={mark > 2} onClick={() => setMark(3)}/>
                <Star painted={mark > 3} onClick={() => setMark(4)}/>
                <Star painted={mark > 4} onClick={() => setMark(5)}/>
            </div>
    );
};

type StarProps = {
    painted: boolean
    onClick: () => void
}

const Star = ({painted, onClick}: StarProps) => {
    return <span style={{ cursor: 'pointer' }} onClick={onClick}>{painted ? <b>star </b> : 'star '}</span>
}
import {useState} from 'react';

type PropsType = {
    onChange: (value: boolean) => void;
}

export const UncontrolledOnOff = (props: PropsType) => {

    const [on, setOn] = useState<boolean>(true)

    const style1 = {
        backgroundColor: on ? 'green' : 'lightgrey'
    }

    const style2 = {
        backgroundColor: on ? 'lightgrey' : 'red'
    }

    const divStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
            <div>
                <button style={style1} onClick={onClicked}>On</button>
                <button style={style2} onClick={offClicked}>Off</button>
                <div style={divStyle}></div>
            </div>
    );
};

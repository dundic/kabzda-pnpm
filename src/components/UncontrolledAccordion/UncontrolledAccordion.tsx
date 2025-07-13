import {useState} from 'react';

type Props = {
    title: string
}

type AccordionTitleProps = {
    title: string
    callback: () => void
}

export const UncontrolledAccordion = (props: Props) => {

    const[expanded, setExpanded] = useState(false)

    const newFunction = () => {
        setExpanded(!expanded)
    }

    return (
            <div>
                <AccordionTitle title={props.title} callback={newFunction}/>
                {/*<button onClick={()=>{setExpanded(!expanded)}}>toggle</button>*/}
                {expanded && <AccordionBody/>}
            </div>
    );
};

const AccordionTitle = ({title, callback}: AccordionTitleProps) => {
    return <h3 style={{ cursor: 'pointer' }} onClick={callback}>---{title}---</h3>
}

const AccordionBody = () => {
    return <ul>
        <li>Donny</li>
        <li>Mark</li>
        <li>Anna</li>
    </ul>
}
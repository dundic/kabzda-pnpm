type AccordionProps = {
    title: string
    expanded: boolean
    onChange: () => void
}

export const Accordion = (props:AccordionProps) => {
    return (
            <div>
                <AccordionTitle title={props.title} onClick={props.onChange}/>
                {props.expanded && <AccordionBody/>}
            </div>
    );
};

type AccordionTitleProps = {
    title: string
    onClick: () => void

}

const AccordionTitle = ({title,onClick}: AccordionTitleProps) => {

    return <h3 onClick={onClick}>---{title}---</h3>
}

const AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
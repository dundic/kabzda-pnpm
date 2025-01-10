type AccordionProps = {
    title: string
    expanded: boolean
}

export const Accordion = (props:AccordionProps) => {
    return (
            <div>
                <AccordionTitle title={props.title} />
                {props.expanded && <AccordionBody/>}
            </div>
    );
};

type AccordionTitleProps = {
    title: string
}

const AccordionTitle = ({title}: AccordionTitleProps) => {
    return <h3>---{title}---</h3>
}

const AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingProps = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}
export const Rating = (props:RatingProps) => {

    return (
            <div>
            <Star mark={ props.value > 0 } onClick={props.onClick} value={1}/>
            <Star mark={ props.value > 1 } onClick={props.onClick} value={2}/>
            <Star mark={ props.value > 2 } onClick={props.onClick} value={3}/>
            <Star mark={ props.value > 3 } onClick={props.onClick} value={4}/>
            <Star mark={ props.value > 4 } onClick={props.onClick} value={5}/>
            </div>
    );
};

type StarProps = {
    mark: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

const Star = ({mark, value, onClick}: StarProps) => {
    // if(mark) {
    //     return <span><b>star </b></span>
    // } else {
    //     return <span>star </span>
    // }
    return <span onClick={()=> onClick(value) }>{mark ? <b>star </b> : 'star '}</span>
}


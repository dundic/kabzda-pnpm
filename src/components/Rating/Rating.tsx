type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
export const Rating = (props:RatingProps) => {

    return (
            <div>
            <Star mark={ props.value > 0 } />
            <Star mark={ props.value > 1 }/>
            <Star mark={ props.value > 2 }/>
            <Star mark={ props.value > 3 }/>
            <Star mark={ props.value > 4 }/>
            </div>
    );
};

type StarProps = {
    mark: boolean
}

const Star = ({mark}: StarProps) => {
    // if(mark) {
    //     return <span><b>star </b></span>
    // } else {
    //     return <span>star </span>
    // }
    return mark
           ? <span><b>star </b></span>
           : <span>star </span>;

}


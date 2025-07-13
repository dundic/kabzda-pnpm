
import './App.css'
import {Rating, RatingValueType} from './components/Rating/Rating.tsx';
import {Accordion} from './components/Accordion/Accordion.tsx';
import {OnOff} from './components/OnOff/OnOff.tsx';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion.tsx';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating.tsx';
import {UncontrolledOnOff} from './components/OnOff/UncontrolledOnOff.tsx';
import {useState} from 'react';


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionExpanded, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)

  return (
    <>
        <PageTitle title={'This is APP component'}/>
        Article 1
        <Accordion title={'Users'} expanded={accordionExpanded} onChange={()=>{setAccordionCollapsed(!accordionExpanded)}}/>
        Article 2
        <Rating value={ratingValue} onClick={setRatingValue}/>
        {/*<Rating value={1}/>*/}
        {/*<Rating value={2}/>*/}
        {/*<Rating value={3}/>*/}
        {/*<Rating value={4}/>*/}
        {/*<Rating value={5} />*/}
        <h3>UncontrolledAccordion</h3>
        <UncontrolledRating/>
        <h5>Переключатель1</h5>
        {/*<OnOff on={on} onClick={setOn}/>*/}
        <UncontrolledAccordion title={'Players'} />
        {/*<OnOff/>*/}
        <h4>Мой собственный переключатель</h4>
        <UncontrolledOnOff onChange={setOn}/> {on.toString()}
    </>
  )
}

type PageTitleProps = {
    title: string
}

function PageTitle(props: PageTitleProps) {
    return <h1>{props.title}</h1>
}

export default App

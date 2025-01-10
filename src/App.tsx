
import './App.css'
import {Rating} from './components/Rating/Rating.tsx';
import {Accordion} from './components/Accordion/Accordion.tsx';

function App() {


  return (
    <>
        <PageTitle title={'This is APP component'}/>
        Article 1
        <Accordion title={'Users'} expanded={true}/>
        <Accordion title={'Lamers'} expanded={false}/>
        Article 2
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5} />
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

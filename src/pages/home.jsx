import NavBar from '../components/MenuBar'
import MoodLabels from '../components/MoodLabels';
import ListenAgain from '../components/ListenAgain';

export default function Home() {
    return (
        <div className='main-container'>
            <NavBar/>
            <MoodLabels/>
            <ListenAgain/>
        </div>
    )
}
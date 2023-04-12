import NavBar from '../components/MenuBar'
import MoodLabels from '../components/MoodLabels';

export default function Home() {
    return (
        <div className='main-container'>
            <NavBar/>
            <MoodLabels/>
        </div>
    )
}
import { Link } from 'react-router-dom';
import '../styles/home.css'
const Home = () => (
  <div className='main'>
    <h2>Welcome to my page</h2>
    <h2>Click on links below to view my widgets</h2>

    <Link to='/pokemon'>Pokemon Widget</Link>
  </div>
);

export default Home;
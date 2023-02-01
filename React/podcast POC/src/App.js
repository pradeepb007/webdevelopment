import './App.css';
import Home from './pages/Home';
import PodcastList from './pages/PodcastList';
import PodcastDetails from './pages/PodcastDetails';
import FetchData from './pages/FetchData';
import { Routes, Route } from 'react-router-dom';
import AzureMediaPlayer from './pages/AzureMediaPlayer';
import AzureMediaPlayerNew from './pages/AzureMediaPlayerNew';
import AzureFlushSkin from './pages/AzureFlushSkin';
import Search from './pages/Search';
import VideoPlayer from './pages/VideoPlayer';
import CurrentPlayerLarge from './pages/CurrentPlayerLarge';


function App() {
  return (
    <Routes>
    <Route exact path ="/" element ={<Home/>}/>
    <Route exact path ="/PodcastList" element ={<PodcastList/>}/>
    <Route exact path ="/PodcastDetails" element ={<PodcastDetails/>}/>
    <Route exact path ="/FetchData" element ={<FetchData/>}/>
    <Route exact path ="/AzureMediaPlayer" element ={<AzureMediaPlayer/>}/>
    <Route exact path ="/AzureMediaPlayerNew" element ={<AzureMediaPlayerNew/>}/>
    <Route exact path ="/AzureFlushSkin" element ={<AzureFlushSkin/>}/>
    <Route exact path ="/Search" element ={<Search/>}/>
    <Route exact path ="/VideoPlayer" element ={<VideoPlayer/>}/>
    <Route exact path ="/CurrentPlayerLarge" element ={<CurrentPlayerLarge/>}/>
    </Routes>
  );
}

export default App;

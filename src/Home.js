import { BrowserRouter, link, Route } from 'react-router'
import Disc from "./Components/Disc";
import Play from "./Components/Play";
import VolumeRange from "./Components/Volumerange";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Cards from "./Components/Cards";
import OtherPage from "./Components/OtherPage"


import './App.css';

function Home() {


  return (
    
    <div className="App">

      <Header />
      <Main>
        {/* <BrowserRouter>
        <link to='./Components/Disc.js'><Cards
        imagen='https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/6/b/a/4/1047251616149217.jpg'
        /></link> */}
        
        <Cards
        imagen='https://www.radioacktiva.com/wp-content/uploads/2015/07/2155923.jpg'/>
        <Cards
        imagen='https://cdns-images.dzcdn.net/images/cover/64ec37a4cf512c7810c40ba0d318ff1e/264x264.jpg'
        />
        <Cards
        imagen='https://images.genius.com/8468771360e61224a58e79d25a35c966.1000x1000x1.png'
        />
        <Cards
        imagen='https://media.resources.festicket.com/image/300x300/center/top/filters:quality(70)/www/artists/TheWeeknd_L.jpg'
        />
        <Cards
        imagen='https://2.bp.blogspot.com/--l2-M2g-T5I/VvB9302ze6I/AAAAAAAABC8/64RpEAfCSOc1We8tGoxIbv8qCFV-gASWg/s400/ninetrackmind.png'
        />
        <Cards
        imagen='https://m.media-amazon.com/images/I/71iMVBsItRL._SL1400_.jpg'/>
        <Cards
        imagen='https://musica.news/wp-content/uploads/2020/01/Justin-Bieber-la-portada-de-Changes.jpg'
        />
        
        
        
        
        <Cards
        imagen='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UpH8PP_vWan8lnFS7Ls9VGYc-2CpRKVsHA&usqp=CAU'
        />
        {/* <Route path='/'>
          <Disc/>
        </Route>
        </BrowserRouter> */}

      </Main>

      <OtherPage />
      
      
        
        {/* <div className="container-music">
          
          <Play />
          <VolumeRange />

        </div> */}

      
      
    </div>
  );
}

export default Home;

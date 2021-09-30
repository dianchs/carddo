import './App.css';
import { useState } from 'react'
function App() {
  const [back, setBack] = useState('https://media.springernature.com/full/springer-cms/rest/v1/img/18893370/v1/height/320');
  const [text, setText] = useState('Just do it');
  return (
    <>
      <div className="bunner">
        <div className="carddo">
          <div className="cardback">
            <button onClick={
              () => {
              setBack('https://c4.wallpaperflare.com/wallpaper/470/670/449/anime-boy-cat-raining-scenic-wallpaper-preview.jpg')
              }
            } ><img src="https://c4.wallpaperflare.com/wallpaper/470/670/449/anime-boy-cat-raining-scenic-wallpaper-preview.jpg" />1</button>
            <button onClick={
              () => {
              setBack('https://i1.wp.com/doraminfo.com/wp-content/uploads/2021/07/1626755259-han-so-hee-song-kang-3-1.jpg?resize=840%2C504&ssl=1')
              }
            }><img src="https://i1.wp.com/doraminfo.com/wp-content/uploads/2021/07/1626755259-han-so-hee-song-kang-3-1.jpg?resize=840%2C504&ssl=1" />2</button>
            <button onClick={
              () => {
              setBack('https://mlfl0eebtpgt.i.optimole.com/2mK1l6Q.dHme~5baeb/w:183/h:248/q:90/dpr:2.6/https://www.seoulinspired.com/wp-content/uploads/Korean-Mens-Street-Formal-Fashion.png')
              }
            }><img src="https://mlfl0eebtpgt.i.optimole.com/2mK1l6Q.dHme~5baeb/w:183/h:248/q:90/dpr:2.6/https://www.seoulinspired.com/wp-content/uploads/Korean-Mens-Street-Formal-Fashion.png" />3</button>
          </div>
          <div className="cardtext">
            <button onClick={
              () => {
              setText("Hey, you aren't me!")
              }
            }>Hey, you aren't me!</button>
            <button onClick={
              () => {
              setText("It's my Dream")
              }
            }>It's my Dream</button>
            <button onClick={
              () => {
              setText('You are Perfect!')
              }
            }>You are Perfect!</button>
          </div>
        </div>
        <div className="cardres" style={{ 
          backgroundImage: `url(${back})`
        }}>
          <h1>{text}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
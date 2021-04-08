import logo from './logo.svg';
import './App.css';
import { Map, Marker } from 'react-amap';


function App() {
  return (
    <div className="App">
          <Map  amapkey='55c394d141400f8ba76c225604324470' zoom='15' center={{longitude:113.4, latitude: 33.8 }}>
          <Marker 
            position={{longitude:113.4, latitude: 33.8 }}
            label = {
              {content:   '账单',
              position: 'BM',
              minZoom: 15}
            }
            // marker={{offset: [-170, -70],minZoom: 15}}
          ></Marker>
           <Marker 
            position={{longitude:113.093, latitude: 33.01212 }}
            label = {{content: '地点'}}
            // marker={{offset: [-170, -70],minZoom: 15}}
          ></Marker>
          </Map>
    </div>
  );
}

export default App;

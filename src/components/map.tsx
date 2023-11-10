 import React, { useEffect } from 'react';
  import mapboxgl from 'mapbox-gl';
  import { Geolocation } from '@capacitor/geolocation';
  
  const MapboxComponent = () => {
    useEffect(() => {
      mapboxgl.accessToken = 'pk.eyJ1IjoidXR0YW05IiwiYSI6ImNsaDRrc3ltNDAwaHMzbG15am9ydGVkNnoifQ.WEJsQKHd0fnuR_RqHHb5Uw';
      const map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
  
      return () => {
        map.remove();
      };
    }, []);
  
    const getCurrentLocation = async () => {
      const position = await Geolocation.getCurrentPosition();
      console.log('Current Position:', position);
    };
  
    return (
        <>
              <div>
        <div id="map" style={{ width: '100%', height: '100vh' }}>
          {/* Map will be rendered here */}
        </div>
      </div>
                <button onClick={getCurrentLocation}>Get Current Locationasdsdsds</button>
</>

      
    );
  };
  
  export default MapboxComponent;
  
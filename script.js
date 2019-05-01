mapboxgl.accessToken = 'pk.eyJ1IjoiYWdhdGhlYmx1ZXMiLCJhIjoiY2p2NW5mdGhjMHIyZTN5cG1wdTU5a2ppZiJ9.mGUzsVIk2x1XDXy3Zgp9eA';

var videoStyle = {

  "version": 8,
  "sources": {
    "satellite": {
      "type": "raster",
      "url": "mapbox://mapbox.satellite",
      "tileSize": 256
    }

    ,
    "video": {
      "type": "video",
      "urls": ["https://static-assets.mapbox.com/mapbox-gl-js/drone.mp4", "https://static-assets.mapbox.com/mapbox-gl-js/drone.webm"],
      "coordinates": [[-122.51596391201019, 37.56238816766053],
      [-122.51467645168304, 37.56410183312965],
      [-122.51309394836426, 37.563391708549425],
      [-122.51423120498657, 37.56161849366671]]
    }
  }

  ,
  "layers": [{

    "id": "background",
    "type": "background",
    "paint": {
      "background-color": "rgb(4,7,14)"
    }
  }

    ,
  {
    "id": "satellite",
    "type": "raster",
    "source": "satellite"
  }

    ,
  {
    "id": "video",
    "type": "raster",
    "source": "video"
  }

  ]
}

  ;

var map = new mapboxgl.Map({
  container: 'map',
  minZoom: 14,
  zoom: 17,
  center: [-122.514426, 37.562984],
  bearing: -96,
  style: videoStyle
}

);
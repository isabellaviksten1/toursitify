function getCoordinates(mapObject){
        mapObject.on('style.load', function() {
        mapObject.on('click', function(e) {
        var coordinates = e.lngLat;
        
        console.log(coordinates)
        return coordinates
      });
    });
}
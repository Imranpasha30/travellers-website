const map = L.map('map').setView([51.505, -0.09], 13);
const titleUrl = 'https://{s}.title.opemstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy; <a herf= "https://www.openstreetmap.org/copyright">OpenStreetMap</a> 

 //map.on('click',function(e){
    //console.log(e)
    //L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
    //L.marker([12.866334, 74.924229]).addTo(map) 
    map.on('click',function(e){
        console.log(e)
        var secondmarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
        
    L.Routing.control({
  waypoints: [
    L.latLng(12.866334, 74.924229),
   

    L.latLng(e.latlng.lat, e.latlng.lng)
  ]
}).addTo(map);
    })
</script>
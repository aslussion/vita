function initialize() {
        var settings = {
          zoom: 17,
          center: new google.maps.LatLng(55.692927, 37.427097),//центр карты

        };
        var map = new google.maps.Map(document.getElementById("mapCanvas"), settings);
        //Associate the styled map with the MapTypeId and set it to display.
        //map.mapTypes.set('styled_map', styledMapType);
        //map.setMapTypeId('styled_map');
        
        //кастомный
        var companyImage = new google.maps.MarkerImage('images/mapMarker.png',
          new google.maps.Size(45,60)

        );
        var companyPosCust = new google.maps.LatLng(55.692928, 37.427097);
        var companyMarkerCust = new google.maps.Marker({
          position: companyPosCust,
          map: map,
          icon: companyImage,
          title:"г. Москва, ул. Ленина, 53",
          zIndex: 3});

      }
      google.maps.event.addDomListener(window, 'load', initialize);
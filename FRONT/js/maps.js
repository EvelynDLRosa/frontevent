function initMap() {
    var input = document.getElementById('eventLocation');
    var autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', function () {
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }
        var map = new google.maps.Map(document.getElementById('map'), {
            center: place.geometry.location,
            zoom: 15
        });
        new google.maps.Marker({
            position: place.geometry.location,
            map: map
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById('map')) {
        initMap();
    }
});

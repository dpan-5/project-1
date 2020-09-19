$(document).ready(function(){ 

    var restaurantId = localStorage.getItem("recipeDataId");
    
    $.ajax({
        url: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${restaurantId}`,
        headers: {
            'Authorization':'Bearer xQhqk6iKwI8rprXKZO006ZmPHJq4VXj3uHMkRTQl3Otj3mbw86-ZTGwW6CH5BEjuAY8pmnrwFGV3ReAAXIyh9c4o8SxD2yev4EXkaS9Ny9_MXdQq01_urRTbo45jX3Yx',
        },
        method: "GET",
        dataType: 'json'
    }).then(function(response) {
        console.log(response);

        // $("#restaurant-image").attr("src", response.image_url);



        $(".restaurant-name").text(response.name);
        $(".restaurant-display").text(response.display);
        // $("#restaurant-cuisines").text(response.cuisines);
        // $("#restaurant-location").text(response.location);
        // $("#table").text(response.display_phone);
        // $("#restaurant-number").text(response.display_phone);

    });





});
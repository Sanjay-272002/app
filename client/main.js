// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
/* 
  * Fires an API call to the server and adds the reported city as an alien city
  */
function postAlienEncounter() {
    var city = $("#city-post-input").val();

    // Fires an Ajax call to the URL defined in the index.js function file
// All URLs to the Advanced I/O function will be of the pattern: /server/{function_name}/{url_path}
    $.ajax({
        url: "/server/alien_city_function/alien", //If your Advanced I/O function is coded in the Java environment, replace the "alien_city_function" with "AlienCityAIO"
        type: "post",
        contentType: "application/json",
        data: JSON.stringify({
            "city_name": city
        }),
        success: function (data) {
            console.log("success");
            alert(data.message);
        },
        error: function (error) {
            console.log("error");
            alert(error.message);
        }
    });
}

/**
 * Fires an API call to the server to check whether the given city is alien city or not
 */
function getAlienEncounter() {
    showLoader();
    var positive = "https://media.giphy.com/media/Y1GYiLui9NHcxVKhdo/giphy.gif";
    var negative = "https://media.giphy.com/media/fsPcMdeXPxSP6zKxCA/giphy.gif";
    var city = $("#city-get-input").val();

  // Fires an Ajax call to the URL defined in the index.js function file
 // All URLs to the function will be of the pattern: /server/{function_name}/{url_path}
    $.ajax({
        url: "/server/alien_city_function/alien?city_name=" + city, //If your Advanced I/O function is coded in the Java environment, replace the "alien_city_function" with "AlienCityAIO"
        type: "get",
        success: function (data) {
            console.log(data);
            $("#result-text").text("");
            $("#result-text").text(data.message);
            var imagesrc = negative;
            if (data.signal == 'positive') {
                imagesrc = positive;
            }
            $("#result-image").html("");
            $("#result-image").html("<img src='" + imagesrc + "' />");
            hideLoader();
        },
        errror: function (error) {
            alert(error.message);
        }
    });
}

function showLoader()
{
    $("#result-container").hide();
    $("#loader").show();
}

function hideLoader()
{
    $("#loader").hide();
    $("#result-container").show();
}

 //Define the file stream for file attachments

//Create a config object with the email configuration
function sendemail() {
    // Fires an Ajax call to the URL defined in the index.js function file
// All URLs to the Advanced I/O function will be of the pattern: /server/{function_name}/{url_path}   
var city = $("#city-email-input").val();
    alert(city);
    console.log(city);
    $.ajax({
        url: "/server/alien_city_function/email", //If your Advanced I/O function is coded in the Java environment, replace the "alien_city_function" with "AlienCityAIO"
        type: "post",
        contentType: "application/json",
        data: JSON.stringify({
            "city_name": city
        }),
        success: function (data) {
            alert(data.message);
        },
        error: function (error) {
            alert(error.message);
        }
    });
    
}

function locate(){
if(navigator.geolocation){//if browser supports the geolocation
    navigator.geolocation.getCurrentPosition(onsuccesss,onerrorr);
  }
  else{
    alert("Your browser not supports the geolocation");
  }
}

function onsuccesss(position){
    const{latitude, longitude} =position.coords;//getting latitude and longitude from coords
     api=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=331402349d907a2dd1e4c0e720d73044`;
    fetchDataa();

}
function onerrorr(error){
    alert(error.message)
}
let apikey='331402349d907a2dd1e4c0e720d73044';
function fetchDataa(){
    fetch(api).then(response => response.json()).then(result => weatherDetailss(result));
};
//getting details displayed 
function weatherDetailss(info){
    if(info.cod == "404"){
        infoTxt.innerHTML=`${inputField.value} is not a valid city name`;
    }
    // else{
    //     //getting required properties from console
    //     const city = info.name;
    //     const country=info.sys.country;
    //     const {description, id}=info.weather[0];
    //     const{feels_like,humidity,temp}=info.main;
    //     const lati=info.coord.lat;
    //     const longi=info.coord.lon;
    //    if(id==800){
    //       wIcon.src= "icons/clear.svg";
    //    }else if(id>=200 && id<=232){
    //     wIcon.src= "icons/storm.svg";
    //  }else if(id>=600 && id<=622){
    //     wIcon.src= "icons/snow.svg";
    //  }else if(id>=701 && id<=781){
    //     wIcon.src= "icons/haze.svg";
    //  }else if(id>=801 && id<=804){
    //     wIcon.src= "icons/cloud.svg";
    //  }else if((id>=300 && id<=321)||(id>=500 && id<=531)){
    //     wIcon.src= "icons/rain.svg";
    //  }
    //     //passing values into a html element
      
    //     wrapper.querySelector(".temp .numb").innerHTML=Math.floor(temp);
    //     wrapper.querySelector(".weather").innerHTML=description;
    //     wrapper.querySelector(".location span").innerHTML=`${city} , ${country}`;
    //     wrapper.querySelector(".temp .numb-2").innerHTML=Math.floor(feels_like);
    //     wrapper.querySelector(".humidity span").innerHTML=`${humidity}%`;
    //     infoTxt.classList.remove("pending","error");
    //     wrapper.classList.add("active");
    //     countryL.innerHTML=lati+'N'+longi+'E'
    // }
    alert(`Hello you are in ${info.name}`);
    console.log(info.city);
    console.log(info);
}

  
  
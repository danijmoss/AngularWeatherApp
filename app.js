var weatherApp = angular.module("weatherApp", []);

weatherApp.controller("weatherController", ['$scope', '$http', '$log', function($scope, $http, $log) {
  
  // Create variable for the $scope
  var weather = $scope; 
    
  // Date and Time
  weather.date = new Date();
    
    
  // App Info    
  weather.info = {
      heading: "OpenWeatherMap API with AngularJS",
      subheading01: "FreeCodeCamp Front-End Project",
      subheading02: {
          name: "Danielle Moss",
          link: "http://danijmoss.com"
      },
      copyright: "© 2017"
  };

    // GET request for location and weatherUrl
    $http({
      method: 'GET',
      url: 'http://ip-api.com/json'
    }).success(function (data) {
        weather.lat = data.lat;
        weather.lon = data.lon;
        
        var apiKey = "2ca568839db1b37c90c1d38842418e08";
        
        var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + weather.lat + "&lon=" + weather.lon + "&appid=" + apiKey;
        
        $log.log(weatherUrl);
        
        // GET request for weather data
        $http({
            method: 'GET',
            url: weatherUrl
        }).success(function (data) {
            
            // Weather Date / Time
            //weather.dateTime = data.dt;
            
            // Weather description
            weather.description = data.weather[0].description;
            
            // Location name
            weather.name = data.name;
            
            // Location country
            weather.country = data.sys.country;
            
            // Temp in Kelvin
            weather.temp = data.main.temp;
            
            // Min Temp in Kelvin
            weather.minTemp = data.main.temp_min;
            
            // Max Temp in Kelvin
            weather.maxTemp = data.main.temp_max;
            
            // Weather temp in F
            weather.fTemp = (weather.temp * (1.8) - 459.67).toFixed(1)+ " °F";
            
            // Min Temp in F
            weather.fTempMin = (weather.minTemp * (1.8) - 459.67).toFixed(1)+ " °F";
            
            // Max Temp in F
            weather.fTempMax = (weather.maxTemp * (1.8) - 459.67).toFixed(1)+ " °F";

            // Weather temp in C
            weather.cTemp = (weather.temp - 273.15).toFixed(1) + " °C";
            
            // Min Temp in C
            weather.cTempMin = (weather.minTemp - 273.15).toFixed(1) + " °C";
            
            // Max Temp in C
            weather.cTempMax = (weather.maxTemp - 273.15).toFixed(1) + " °C";
            
            // Weather Icon
            //weather.icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            weather.icon = data.weather[0].id;
            
            
            // Background Images - Change depending on Description
            switch (weather.description) {
                case 'clear sky': 
                    weather.weatherBackground = {
                        "background": "url('../img/clear-sky-day.jpg')",
                        "background-size": "cover"
                    };
                    break;
                case 'broken clouds':
                   weather.weatherBackground = {
                        "background": "url('../img/broken-clouds-day.jpg')",
                        "background-size": "cover"
                    };
                    break; 
                case 'few clouds':
                   weather.weatherBackground = {
                        "background": "url('../img/few-clouds-day.jpg')",
                        "background-size": "cover"
                    };
                    break;
                case 'mist':
                   weather.weatherBackground = {
                        "background": "url('../img/mist-day.jpg')",
                        "background-size": "cover"
                    };
                    break;
                case 'rain':
                   weather.weatherBackground = {
                        "background": "url('../img/rain-day.jpg')",
                        "background-size": "cover"
                    };
                    break;
                case 'scattered clouds':
                   weather.weatherBackground = {
                        "background": "url('../img/scattered-clouds-day.jpg')",
                        "background-size": "cover"
                    };
                    break;
                case 'shower rain':
                   weather.weatherBackground = {
                        "background": "url('../img/shower-rain-day.jpg')",
                        "background-size": "cover"
                    };
                    break;
                case 'snow':
                   weather.weatherBackground = {
                        "background": "url('../img/snow-day.jpg')",
                        "background-size": "cover"
                    };
                    break;
                case 'thunderstorm':
                   weather.weatherBackground = {
                        "background": "url('../img/thunderstorm-day.jpg')",
                        "background-size": "cover"
                    };
                    break;
                default:
                    weather.weatherBackground = {
                        "background": "url('../img/default.jpg')",
                        "background-size": "cover"
                    };
                    break;
                
            }
            // END Switch Statement
            
            /*
            Things to add on:
            --Getting Weather Icons to show up instead of the OpenWeather Icon
                Already have code in css and font folders - just need it connected
            */
            
        });
    });
    

}]);

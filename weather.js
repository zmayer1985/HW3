$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.
    // var markup = "The weather report... " + "will be here when I finish my homework.";
    var markup = "The weather report is " + data.daily.summary;

    var daily_summary = markup + ' <br />Currently the temperature is ' + data.currently.temperature + ' degrees with a windspeed of ' + data.currently.windSpeed + ' mph.';


    $('.weather-report').html(daily_summary); // Returns the variable as html to the class weather-report

    confirm("Is this what you wanted? Click ok if so.")

  }


  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});

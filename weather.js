$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.
    // var markup = "The weather report... " + "will be here when I finish my homework.";
    var markup = " The weather report is " + data.daily.summary;
    var markup = markup + '<p> More specifically, the forecast for tomorrow is ' + data.daily.data[1].summary + ' with a high temperatue of ' + data.daily.data[1].temperatureMax + ' degrees';
    var markup = markup + '<p> The following day should be ' + data.daily.data[2].summary + ' with a high temperatue of ' + data.daily.data[2].temperatureMax + ' degrees';

    var daily_summary = '<p> Currently the temperature is ' + data.currently.temperature + ' degrees with a windspeed of ' + data.currently.windSpeed + ' mph and a dewpoint of ' + data.currently.dewPoint + markup;


    $('.weather-report').html(daily_summary);

    confirm("I figured it out! Click ok if you agree.")

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

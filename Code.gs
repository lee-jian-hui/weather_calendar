const API_KEY = 'ad4750d7b78021310b7e581727472dfe'



function getWeatherForecast() {
  const location = 'London'; // Replace with your location
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`;

  const response = UrlFetchApp.fetch(apiUrl);
  const weatherData = JSON.parse(response.getContentText());
  // Logger.log(`response: ${response}`)
  Logger.log(`weatherData: ${JSON.stringify(weatherData, null, 2)}`)
  const today = new Date();
  // const startOfToday = new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  // const endOfToday = new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() + 1);

  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const endOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  Logger.log(`startOfToday: ${startOfToday}`)
  Logger.log(`endOfToday: ${endOfToday}`)
  let isRaining = false;


  // go through all records of current day weather data to check if any record indicates rain
  /* example of a rain json weather data:
    "weather": [
    {
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }
  */
  Logger.log(`weatherData.list.length: ${weatherData.list.length}`)

  weatherData.list.forEach((entry) => {
    const entryDate = new Date(entry.dt * 1000);
    if (startOfToday <= entryDate && entryDate < endOfToday) {
      Logger.log(`entry.weather[0].main.toLowerCase(): ${entry.weather[0].main.toLowerCase()}`)
      if (entry.weather[0].main.toLowerCase().includes('rain')) {
        isRaining = true;
      }
    }
  });

  updateCalendarEvent(isRaining, startOfToday);
}

function updateCalendarEvent(isRaining, date) {
  const title = 'Rain Alert'
  const calendar = CalendarApp.getDefaultCalendar();
  const events = calendar.getEventsForDay(date);

  // Check if there is already an event for rain
  const rainEvents = events.filter((event) => event.getTitle() === title);

  // create rain event or not
  if (rainEvents.length > 0 & isRaining) {
    Logger.log(`Existing Rain Events Found: ${rainEvents.length}`);
  } 
  else if (rainEvents.length == 0 & isRaining){
    const rain_event = calendar.createAllDayEvent(title, date);
    Logger.log(`Created New Rain Event: ${rain_event}`);
  }
  else {
    Logger.log('No rain events found');
  }

}

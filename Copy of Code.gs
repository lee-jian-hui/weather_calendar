// const API_KEY = 'ad4750d7b78021310b7e581727472dfe'

// function getWeatherForecast() {
//   const city = 'London'; // Replace with your location
//   let response;
//   let lat;
//   let lon;
//   const limit = 1;
//   const geocodingUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${API_KEY}`
//   response = UrlFetchApp.fetch(geocodingUrl);
//   const geocodingData = JSON.parse(response.getContentText());
//   Logger.log(`geocodingData: ${geocodingData}`)
//   lat = geocodingData[0].lat;
//   lon = geocodingData[0].lon;
//   Logger.log(`lat, lon: ${lat}, ${lon}`)

//   const days = 7;
//   const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`

//   // const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${days}&appid=${API_KEY}`
//   // const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${days}&appid=${API_KEY}`;
//   Logger.log(`weatherUrl : ${weatherUrl}`)
//   response = UrlFetchApp.fetch(weatherUrl);
//   const weatherData = JSON.parse(response.getContentText());
//   Logger.log(`response: ${response}`)
//   Logger.log(`weatherData: ${weatherData}`)
//   const today = new Date();
//   const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
//   const endOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

//   let isRaining = false;

//   weatherData.list.forEach((entry) => {
//     const entryDate = new Date(entry.dt * 1000);
//     if (entryDate >= startOfToday && entryDate < endOfToday) {
//       if (entry.weather[0].main.toLowerCase().includes('rain')) {
//         isRaining = true;
//       }
//     }
//   });

//   // updateCalendarEvent(isRaining, startOfToday);
// }

// // function updateCalendarEvent(isRaining, date) {
// //   const calendar = CalendarApp.getDefaultCalendar();
// //   const events = calendar.getEventsForDay(date);

// //   // Check if there is already an event for rain
// //   let rainEvent = null;
// //   events.forEach((event) => {
// //     if (event.getTitle() === 'Rain Alert') {
// //       rainEvent = event;
// //     }
// //   });

// //   if (isRaining) {
// //     if (!rainEvent) {
// //       calendar.createAllDayEvent('Rain Alert', date);
// //     }
// //   } else {
// //     if (rainEvent) {
// //       rainEvent.deleteEvent();
// //     }
// //   }
// // }

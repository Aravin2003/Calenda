//import {googleCalendarPlugin} from '../../index.js';
var calendarEl = document.getElementById('calendar');
document.addEventListener('DOMContentLoaded', function() {
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      themeSystem: 'bootstrap5',
      //plugins: [ googleCalendarPlugin ],
      googleCalendarApiKey: 'AIzaSyDB1prti6iNhXsM564iUnSSstrMIAyds9E',
      events: {
      googleCalendarId: '7f3dd66b5c6d6524d940fc04740c3766d9dcff773483f8d20e01a0c107ce15f5@group.calendar.google.com'
  }
    });
    window.addEventListener('load', function () {
        calendar.render();
        calendar.setOption('contentHeight', 600);
      });
    
  });
 
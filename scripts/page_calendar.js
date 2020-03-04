document.addEventListener('DOMContentLoaded', function() {
    var Calendar = FullCalendar.Calendar;
    /*var calendarEl = document.getElementById('calendar');*/
    var Draggable = FullCalendarInteraction.Draggable
 
    console.log('Dom acquire active')
    
    var containerEl = document.getElementById('external-events-list');
    new Draggable(containerEl, {
      itemSelector: '.fc-event',
      eventData: function(eventEl) {
        return {
          title: eventEl.innerText.trim()
        }
      }
    });

    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'timeGrid' , 'interaction' ],
      defaultView: 'timeGridDay',
      aspectRatio: 2,
      header: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridDay,timeGridFourDay,timeGridWeek'
      },
      footer: {
        center: ' ', 
        right: 'today prev, next' 
      },
      
      views: {
        timeGridFourDay: {
          type: 'timeGrid',
          duration: { days: 3 },
          buttonText: '3  day'
        },
      },
      defaultDate: '2020-03-03',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      droppable: true, 
 
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Departure',
          start: '2020-03-03',
        },
        {
        title: 'Museum',
        start: '2020-03-03T10:30:00',
        end: '2020-03-03T12:30:00'
        },
        {
          title: 'Trang Lee',
          start: '2020-03-03T13:30:00',
          end: '2020-03-03T16:30:00'
          },
        {
          title: "Uncle Jack's Bar & Grill ",
          start: '2020-03-03T17:30:00',
          end: '2020-03-03T19:30:00'
          },
      ]
      
    });

  calendar.render();
});
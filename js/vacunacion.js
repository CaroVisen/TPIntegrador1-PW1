$(document).ready(function() {

    $('#calendar').fullCalendar({
      lang:'es',

      header: {
        left: 'prev,next today',
        center: 'title',
        right: ''
      },
      defaultDate: new Date(),
      navLinks: true,
      editable: true,
      events: [
        {
          title: 'Neumococo 1º dosis',
          start: '2020-06-28',
          color: '#257e4a'
        },
        {
          title: 'Polio 1º dosis',
          start: '2020-06-28'
        },
        {
          title: 'Rotavirus 1º dosis',
          start: '2020-07-28',
        },
        {
          title: 'Meningococo 1º dosis',
          start: '2020-08-23'
        },
        {
            title: 'Neumococo 2º dosis',
            start: '2020-09-10',
            color: '#257e4a'
          },
          {
            title: 'Polio 2º dosis',
            start: '2020-09-28'
          },
          {
            title: 'Rotavirus 2º dosis',
            start: '2020-10-10',
          },
          {
            title: 'Meningococo 2º dosis',
            start: '2020-11-5'
          },
          {
            title: 'Hepatitis A - unica dosis',
            start: '2020-12-2'
          },
          {
            title: 'Varicela - unica dosis',
            start: '2020-12-2'
          },
      ]
    });

  });
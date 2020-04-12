var app = {
  init: function() {
    console.log('init');

    const toogleButton= document.querySelector('.toogle-button > a');
    console.log(toogleButton);

    toogleButton.addEventListener('click', app.handleSwitchTheme);
  },

  handleSwitchTheme: function(e) {
    console.log(e.target);
    const fontAwesomeIcon = e.target;
    fontAwesomeIcon.classList.toggle("fa-toggle-on");
    fontAwesomeIcon.classList.toggle("fa-toggle-off");
    if(fontAwesomeIcon.classList.contains('fa-toggle-on')) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
};

$(app.init);

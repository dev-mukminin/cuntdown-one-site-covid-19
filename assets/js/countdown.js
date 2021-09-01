(function() {
  var countDownDate = new Date(rs_countdown_date).getTime();

  function wrapSpan(val, cl) {
    return '<span class="' + cl + '">' + (val < 10 ? ('0' + val) : val) + '</span>';
  }

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").innerHTML = wrapSpan(days, 'number') + wrapSpan(" days", 'word');
    document.getElementById("hours").innerHTML = wrapSpan(hours, 'number') + wrapSpan(" hours", 'word');
    document.getElementById("minutes").innerHTML = wrapSpan(minutes, 'number') + wrapSpan(" minutes", 'word');
    document.getElementById("seconds").innerHTML = wrapSpan(seconds, 'number') + wrapSpan(" seconds", 'word');

    if(document.getElementById("countdownTime").classList.contains("hide")){
      document.getElementById("countdownPreload").classList.add("hide");
      document.getElementById("countdownTime").classList.remove("hide");
    };
  }, 1000);
})();

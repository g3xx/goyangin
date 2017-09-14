document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
   var sr  = document.getElementById('search');
  (window.screen.width < 800) ? sr.style.width= "" :  sr.style.width= "300px";

});


var value = document.getElementById("cur").value;
if (value !== ""){
    var u  = document.getElementById('share');
    u.onmouseover = function() {
        document.getElementById("shared").style.display = 'block';
    }
    u.onmouseout = function() {
        document.getElementById("shared").style.display = 'none';
    }
    var al = document.getElementById('shared').getElementsByTagName('a');
    for (var i=0; i<al.length; i++){
        al[i].setAttribute('target', '_blank');
    }
    document.getElementById('fb').setAttribute("href", "https://www.facebook.com/sharer.php?u="+value);
    document.getElementById('tw').setAttribute("href", "https://twitter.com/intent/tweet?url="+value);
    document.getElementById('gp').setAttribute("href", "https://plus.google.com/share?url="+value);
    document.getElementById('pt').setAttribute("href", "http://pinterest.com/pin/create/button/?url="+value);
}


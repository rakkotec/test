function nodisp(){
    const p = document.getElementById("howto-top-bottun");

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var current_pos =scrollTop;

    if (current_pos > start_pos) {
      //down
      p.classList.add("hidden");
    }else{
      //up
      p.classList.remove("hidden");
    }
    start_pos = current_pos;
    
}

var start_pos = 0;
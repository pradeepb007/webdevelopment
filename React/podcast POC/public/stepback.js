(function () {
  var extend = function (obj /*, arg1, arg2, ... */) {
    var arg, i, k;
    for (i = 1; i < arguments.length; i++) {
      arg = arguments[i];
      for (k in arg) {
        if (arg.hasOwnProperty(k)) {
          obj[k] = arg[k];
        }
      }
    }
    return obj;
  };
  amp.plugin("stepback", function (options) {
    // var buttonContainer = this.controlBar.el();
    var buttonContainer = document.querySelectorAll(".vjs-big-play-button");
    //console.log(buttonContainer);

    buttonContainer = buttonContainer[0]; // selecting the first element in node list

    // var childEl = document.querySelectorAll(".vjs-big-play-button")
    // console.log(childEl);

    var buttonBackward = amp.createEl("button");
    buttonBackward.setAttribute("id", "backward");
    buttonBackward.setAttribute("class", "backward");
    buttonBackward.innerHTML = "◄◄";
    //buttonContainer.appendChild(buttonBackward);
    // NodeList.insertBefore(buttonBackward,childEl[0]);
    buttonContainer.parentNode.appendChild(buttonBackward);

    var buttonPlay = amp.createEl("button");
    buttonPlay.setAttribute("id", "play");
    buttonPlay.setAttribute("class", "play");
    // buttonContainer.appendChild(buttonForward);
    buttonContainer.parentNode.appendChild(buttonPlay);

    var buttonForward = amp.createEl("button");
    buttonForward.setAttribute("id", "forward");
    buttonForward.setAttribute("class", "forward");
    buttonForward.innerHTML = "►►";
    // buttonContainer.appendChild(buttonForward);
    buttonContainer.parentNode.appendChild(buttonForward);

    //var hotkeys = function (options) {
    var player = this;
    var def_options = {
      seekStep: 5,
    };

    options = extend({}, def_options, options || {});
    var seekStep = options.seekStep;

    // Set default player tabindex to handle keydown and doubleclick events
    if (!player.el().hasAttribute("tabIndex")) {
      player.el().setAttribute("tabIndex", "-1");
    }

    var seekStep1 = function forwardBackward(event) {
      var curTime = 0;
      if (player.controls()) {
        var activeEl = document.activeElement;
        var buttonState = activeEl.id;
        if (buttonState == "backward") {
          curTime = player.currentTime() - seekStep;
          if (player.currentTime() <= seekStep) {
            curTime = 0;
          }
          player.currentTime(curTime);
        } else if (buttonState == "forward") {
          curTime = player.currentTime() + seekStep;

          player.currentTime(curTime);
        }
      }
    };

    var playPause = function playPauseKey(event) {
      //console.log("playpause");
      if (player.controls()) {
        var activeEl = document.activeElement;
        var isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;


        //  console.log(activeEl);
        var buttonState = activeEl.id;
        if (isMobile ) {
         // console.log((window).width());
          if (buttonState == "play") {
            buttonPlay.setAttribute("id", "pause");
            buttonPlay.innerHTML = "▶";
            player.pause();
          }

          if (buttonState == "pause") {
            buttonPlay.setAttribute("id", "play");

            buttonPlay.innerHTML = "⏸︎";
            player.play();
          }
        }
      }
    };

    player.on("click", seekStep1);
    player.on("click", playPause);
  });
})(window.amp);

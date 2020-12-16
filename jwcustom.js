
    var caption = 0;

    playerInstance.on('ready', function() {
        const playerContainer = jwplayer().getContainer();
        const ccButton = playerContainer.querySelector('.jw-button-container .jw-icon-cc');
        jwplayer().setCurrentCaptions(caption);
        duration = jwplayer().getDuration();

        ccButton.addEventListener("click", function() {
          caption = jwplayer().getCurrentCaptions();
          caption = (caption == 0 ) ? 1 : 0;
          jwplayer().setCurrentCaptions(caption);
        });

    });

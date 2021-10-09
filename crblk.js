new MutationObserver(mutation => {
    var allvideos = document.querySelectorAll('video');
    for(var i = 2; i < allvideos.length; i++) {
        var video = allvideos[i];
        if(video instanceof HTMLMediaElement && video.id == '') {
            video.dispatchEvent(new Event('ended'));
        }
    }
}).observe(document.body, {childList: true, attributes: true, subtree: true, characterData: true});

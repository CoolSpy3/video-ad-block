new MutationObserver(mutation => {
    var allvideos = document.querySelectorAll('video');
    for(var i = 1; i < allvideos.length; i++) {
        var video = allvideos[i];
        if(video instanceof HTMLMediaElement && video.getAttribute('title') == 'Advertisement') {
            video.dispatchEvent(new Event('ended'));
        }
    }
}).observe(document.body, {childList: true, attributes: true, subtree: true, characterData: true});
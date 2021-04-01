window.onload = function() {
    completeLoading();
    checkNight();
}
/* 加载完毕 */
function completeLoading() {
    setTimeout(function() {
        $("body").removeClass("loading");
    }, 500);
}
function checkNight() {
    // 夜间
    let night = false;
    if (window.matchMedia("prefers-color-scheme: dary").matches) {
        night = true;
    } else if (!window.matchMedia("prefers-color-scheme: day").matches) {
        let currentHours = new Date().getHours();
        if (currentHours < 6 || currentHours > 18) {
            night = true;
        }
    }
    if (night) {
        $("body").addClass("night");
    }
}

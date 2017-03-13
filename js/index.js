$(function() {
    // 音乐播放
    var music = document.getElementById("media");
    music.play();
    $("#audio_btn").click(function() {
        $(this).toggleClass("rotate"); //控制音乐图标 自转或暂停(删除旋转属性)
        if ($(this).hasClass("rotate")) { //判断div是否包含指定类名，并指定音乐是否播放
            music.play();
        } else {
            music.pause();
        }
    })

});
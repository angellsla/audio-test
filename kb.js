document.addEventListener('DOMContentLoaded', (event) => {
    var audio = document.getElementById('audioPlayer');
    var prevButton = document.getElementById('prevButton');
    var nextButton = document.getElementById('nextButton');
    var volumeUpButton = document.getElementById('volumeUpButton');
    var volumeDownButton = document.getElementById('volumeDownButton');

    // 键盘事件监听器
    document.addEventListener('keydown', function (event) {
        // 阻止浏览器的默认行为，如滚动等
        event.preventDefault();

        switch (event.key) {
            case 'ArrowLeft': // 左方向键上一首
                prevButton.click();
                break;
            case 'ArrowRight': // 右方向键下一首
                nextButton.click();
                break;
            case 'ArrowUp': // 上方向键增加音量
                // 假设volumeUpButton.click()会处理音量增加的逻辑
                volumeUpButton.click();
                break;
            case 'ArrowDown': // 下方向键减少音量
                // 假设volumeDownButton.click()会处理音量减少的逻辑
                volumeDownButton.click();
                break;
            case ' ': // 空格键通常用于播放/暂停
                // 如果当前状态是播放，则暂停，如果是暂停，则播放
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.pause();
                }
                break;
            case 'r': // 'r' 键可以定义为随机播放
                // shuffleButton.click(); // 点击随机播放按钮
                if (typeof shuffleButton.click === "function") {
                    shuffleButton.click();
                }
                break;
        }
    });
});

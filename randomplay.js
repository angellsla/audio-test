document.addEventListener('DOMContentLoaded', (event) => {
    var audio = document.getElementById('audioPlayer');
    var button = document.getElementById('shuffleButton');
    var titleDisplay = document.getElementById('audioTitle');

    // 初始化audio元素的source
    audio.querySelector('source').src = '';

    // 处理按钮点击事件
    button.addEventListener('click', function() {
        // 加载song.json
        fetch('song.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // 随机选择一个歌曲
                var randomIndex = Math.floor(Math.random() * data.length);
                var randomSong = data[randomIndex];
                // 设置audio的source
                audio.querySelector('source').src = randomSong.url;
                // 更新h3标签显示歌曲名称
                titleDisplay.textContent = '当前播放：' + randomSong.title;
                // 如果audio元素没有播放，则开始播放
                if (audio.paused) {
                    audio.load();
                    audio.play();
                }
            })
            .catch(error => {
                console.error('Error loading song data:', error);
            });
    });

    // 监听audio的ended事件，播放完毕后重新随机播放
    audio.addEventListener('ended', function() {
        // 再次点击按钮以随机播放下一首
        button.click();
    });
});
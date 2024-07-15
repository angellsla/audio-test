document.addEventListener('DOMContentLoaded', (event) => {
    var audio = document.getElementById('audioPlayer');
    var shuffleButton = document.getElementById('shuffleButton');
    var prevButton = document.getElementById('prevButton');
    var nextButton = document.getElementById('nextButton');
    var titleDisplay = document.getElementById('audioTitle');
    var songs = [];
    var currentSongIndex = -1; // 当前播放歌曲的索引

    // 从song.json加载歌曲列表
    function loadSongs() {
        fetch('song.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                songs = data;
                if (songs.length > 0) {
                    // 播放第一首歌曲
                    playSong(0);
                }
            })
            .catch(error => console.error('Error loading song data:', error));
    }

    // 获取一个随机的歌曲索引
    function getRandomIndex() {
        return Math.floor(Math.random() * songs.length);
    }

    // 播放指定索引的歌曲
    function playSong(index) {
        if (index < 0 || index >= songs.length) return;

        var song = songs[index];
        audio.querySelector('source').src = song.url;
        titleDisplay.textContent = '当前播放：' + (song.title || '无标题');
        audio.load(); // 必须在播放前加载音频

        // 确保音频播放
        if (audio.readyState > 1) {
            audio.play();
        } else {
            // 如果音频尚未加载完成，监听 'canplaythrough' 事件
            audio.addEventListener('canplaythrough', function() {
                audio.play();
            }, { once: true });
        }

        currentSongIndex = index; // 更新当前歌曲索引
    }

    // 随机播放
    shuffleButton.addEventListener('click', function() {
        playSong(getRandomIndex());
    });

    // 上一首
    prevButton.addEventListener('click', function() {
        var prevIndex = currentSongIndex > 0 ? currentSongIndex - 1 : songs.length - 1;
        playSong(prevIndex);
    });

    // 下一首
    nextButton.addEventListener('click', function() {
        var nextIndex = (currentSongIndex + 1) % songs.length;
        playSong(nextIndex);
    });

    // 当前歌曲播放结束时自动播放下一首
    audio.addEventListener('ended', function() {
        var nextIndex = (currentSongIndex + 1) % songs.length;
        playSong(nextIndex);
    });

    // 页面加载完成后加载歌曲列表
    loadSongs();
});
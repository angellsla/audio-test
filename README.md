## 本项目纯个人写着玩的，js部分有参考Ai给出的部分结果

### 关于歌曲URL   
按照``song.json`` 中给的示例编写歌曲的URL信息   
```JSON
[
    {
        "title": "audio name",
        "url": "audio url"
    },
]
```
>也可以用``song/jsonmake.py``一键生成，目前逻辑为根据里面的``base_url``进行拼接，拼接的文件来源于历遍当前目录文件，然后把文件名拼接上去输出结果。**必须添加``-n``参数指定输出文件的文件名！**
>  
>>目前仓库里的json文件中的url指向对应的存储桶我已经删了  
>>json文件命名默认为``song.json``，想改别的文件名可以去``randomplay.js``中将 song.json 替换成要更改的文件名



### 关于页面样式  
没别的，纯**懒** ~~没想法~~

**全部重写了个项目**
>```sh
>https://github.com/angellsla/music-player

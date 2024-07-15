import os
import json

# 设置当前目录
current_directory = os.getcwd()

# 定义基础URL
base_url = "https://cos1sistine-1313238216.cos.ap-shanghai.myqcloud.com/audio/loveshare/"

# 遍历当前目录下的所有文件
file_list = [file for file in os.listdir(current_directory) if os.path.isfile(os.path.join(current_directory, file))]

# 为每个文件生成JSON格式的字符串
json_list = [{"title": "", "url": base_url + file} for file in file_list]

# 将JSON格式的字符串转换为JSON对象，并确保非ASCII字符被包含
json_data = json.dumps(json_list, indent=4, ensure_ascii=False)

# 打印生成的JSON数据
print(json_data)
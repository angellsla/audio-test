import os
import json
import argparse

parser = argparse.ArgumentParser(description='Generate a JSON file with URLs of files in the current directory.')
parser.add_argument('-n', '--filename', type=str, help='The name of the output JSON file', required=True)
args = parser.parse_args()

current_directory = os.getcwd()

base_url = ""

file_list = [file for file in os.listdir(current_directory) if os.path.isfile(os.path.join(current_directory, file))]

json_list = [{"title": "default", "url": base_url + file} for file in file_list]

json_data = json.dumps(json_list, indent=4, ensure_ascii=False)

output_file_path = os.path.join(current_directory, args.filename)
with open(output_file_path, 'w', encoding='utf-8') as f:
    f.write(json_data)

print(f"JSON data has been written to {output_file_path}")
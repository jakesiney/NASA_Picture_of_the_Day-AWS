from flask import Flask, render_template
import requests
import json
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)


@app.route('/')
def index():
    api_key = os.getenv('API_KEY')
    url = f'https://api.nasa.gov/planetary/apod?api_key={api_key}'
    response = requests.get(url)
    data = json.loads(response.text)
    # print(data)
    # title = data['title']
    return render_template('index.html', data=data)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=False)

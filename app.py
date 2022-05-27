from flask import Flask, redirect, render_template
import os

app = Flask(__name__, template_folder='static')

@app.route('/')
def hello():
    return render_template('html/index.html')

if __name__ == '__main__':
    app.run(debug=True)
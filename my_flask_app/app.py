from flask import Flask, jsonify, request
from flask import jsonify
import pandas as pd

app = Flask(__name__)

# Load CSV data
data = pd.read_csv('/Users/pruthvihosmani/Desktop/NODE&FLASK/my-pump-app/data/pumps.csv')

@app.route('/api/suggestions')
def get_suggestions():
    keyword = request.args.get('keyword')
    
    if keyword:
        matching_pumps = data[data['Pump'].str.contains(keyword, case=False)]
    else:
        matching_pumps = []

    # Convert matching pumps to a list of dictionaries
    suggestions = matching_pumps.to_dict(orient='records')

    return jsonify(suggestions)

if __name__ == '__main__':
    app.run(debug=True)
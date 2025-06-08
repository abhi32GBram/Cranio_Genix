# backend/flask_server.py

from flask import Flask, request, jsonify
from flask_cors import CORS  
import numpy as np
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
from PIL import Image
import io
import os

app = Flask(__name__)
CORS(app)  # Allow all origins by default (for dev)

# Load the pre-trained model
try:
    model = load_model('cnn_model.h5')
except Exception as e:
    raise ValueError("Model loading failed. Make sure cnn_model.h5 exists in the backend folder.") from e


# Define the function to predict tumor type
def predict_tumor_type(img, model):
    img = img.resize((224, 224))  # Resize the image
    img = img.convert('RGB')  # Ensure 3 color channels
    img_array = np.array(img) / 255.0  # Normalize pixel values
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension

    # Perform prediction
    predictions = model.predict(img_array)
    labels = ['glioma_tumor', 'meningioma_tumor', 'no_tumor', 'pituitary_tumor']
    predicted_class = labels[np.argmax(predictions)]
    confidence = round(predictions[0][np.argmax(predictions)] * 100, 2)

    # Return probabilities as a dictionary
    probabilities = {label: round(prob * 100, 2) for label, prob in zip(labels, predictions[0])}
    return predicted_class, confidence, probabilities, predictions[0]


@app.route('/')
def home():
    return jsonify({
        "message": "Welcome to CranioGenix AI Backend",
        "endpoints": {
            "/predict": "POST - Upload MRI image for brain tumor detection"
        }
    })


@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if not file.filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        return jsonify({'error': 'Invalid file type. Please upload an image.'}), 400

    if file:
        try:
            img = Image.open(io.BytesIO(file.read()))  # Open the image
            predicted_class, confidence, probabilities, raw_predictions = predict_tumor_type(img, model)

            # Enhanced JSON response
            return jsonify({
                'status': 'success',
                'prediction': {
                    'predicted_class': predicted_class,
                    'confidence': confidence,
                    'probabilities': probabilities,
                    'raw_predictions': raw_predictions.tolist()  # For advanced stats
                },
                'class_labels': ['glioma_tumor', 'meningioma_tumor', 'no_tumor', 'pituitary_tumor']
            })

        except Exception as e:
            app.logger.error(f"Error during prediction: {str(e)}")
            return jsonify({
                'status': 'error',
                'message': 'An unexpected error occurred during prediction.',
                'error_details': str(e)
            }), 500


if __name__ == '__main__':
    app.run(debug=True)
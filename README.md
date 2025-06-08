# 🧠 CranioGenix — AI-Powered Brain Tumor Detection

> A modern, modularized brain tumor detection web application using **React + TypeScript + Vite** for the frontend and **Flask + TensorFlow/Keras** for the backend.


---

## Overview

**CranioGenix** is an AI-enabled web application that detects and classifies brain tumors from MRI scans using a pre-trained model (`cnn_model.h5`). 

The system allows users to:
- Upload an MRI image
- See preview
- Get real-time prediction results
- View detailed probabilities in a styled UI

---

## Features

- ✅ **AI-Powered Prediction**
  - Uses pre-trained CNN model (`cnn_model.h5`)
  - Predicts one of four classes:
    - Glioma Tumor
    - Meningioma Tumor
    - No Tumor
    - Pituitary Tumor

- ✅ **Modern UI**
  - Built with **React**, **TypeScript**, and **Vite**
  - Modular component architecture
  - Responsive design with smooth transitions

- ✅ **Dynamic Probability Bars**
  - Visual representation of prediction confidence per class
  - Color-coded bars based on probability level

- ✅ **Flask Backend Integration**
  - `/predict` endpoint accepts file uploads
  - Returns structured JSON response
  - CORS enabled for development

- ✅ **Styling**
  - Clean, professional styling using CSS variables
  - Preserved from original design
  - Fully responsive

---

##  Tech Stack

| Layer | Technology |
|------|------------|
| **Frontend** | React, TypeScript, Vite, CSS Modules |
| **Backend** | Flask, Python, TensorFlow/Keras |
| **Model** | Pre-trained CNN (`cnn_model.h5`) |
| **API Communication** | Fetch API, FormData |
| **Styling** | CSS Variables, Flexbox/Grid |
| **Dev Tools** | ESLint, Prettier, TypeScript |

---

##  Folder Structure

```
CRANIOGENIX/
├── backend/
│   ├── flask_server.py
│   └── cnn_model.h5
└── CranioGenix/
    ├── node_modules/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── App.tsx
    │   ├── main.tsx
    │   ├── assets/
    │   │   └── css/
    │   │       └── cranio_styles.css
    │   ├── components/
    │   │   ├── Header.tsx
    │   │   ├── UploadForm.tsx
    │   │   ├── ImagePreview.tsx
    │   │   ├── ResultArea.tsx
    │   │   ├── PredictionCard.tsx
    │   │   ├── ConfidenceValue.tsx
    │   │   ├── DetailedStatsToggle.tsx
    │   │   ├── ProbabilityBars.tsx
    │   │   ├── ProbabilityBar.tsx
    │   │   └── Footer.tsx
    │   ├── hooks/
    │   │   └── usePredictScan.ts
    │   ├── services/
    │   │   └── apiService.ts
    │   ├── types/
    │   │   └── Prediction.ts
    │   └── index.css
    ├── tsconfig.json
    ├── vite.config.ts
    ├── package.json
    └── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/craniogenix.git
cd craniogenix
```

### 2. Run Flask Backend

Make sure you're inside the `backend/` folder:

```bash
cd backend
pip install flask flask-cors tensorflow pillow
python flask_server.py
```

This starts the Flask server at `http://localhost:5000`.

### 3. Run React Frontend

Open a new terminal tab and navigate to the frontend folder:

```bash
cd CranioGenix
npm install
npm run dev
```

Now open the React app at `http://localhost:5173`.

---

## Proxy Setup (Optional)

To avoid CORS issues during development, set up a proxy in `vite.config.ts`:

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/predict': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
```

---

## Testing the App

1. Open `http://localhost:5173` in your browser.
2. Upload an MRI scan image (`.png`, `.jpg`, or `.jpeg`).
3. Click **"Analyze Scan"**.
4. The result will be displayed with:
   - Predicted class
   - Confidence percentage
   - Detailed probability breakdown

---

## Deployment Options

### Option 1: Deploy Separately

- **Frontend**: Deploy to platforms like **Vercel**, **Netlify**, or **GitHub Pages**
- **Backend**: Deploy to **Render**, **Heroku**, or **AWS**

### Option 2: Combine into One Server

Serve the built React app through Flask using:

```bash
npm run build
```

Then serve the `dist/` folder using Flask's `send_from_directory`.

---

## Contributing

Contributions are welcome! Feel free to open issues or PRs for:
- Bug fixes
- UI enhancements
- New features (e.g., history of predictions, user authentication, export options)

---

##  License

MIT License – see `LICENSE.md` for details.

---

## Contact

Have questions or want to collaborate?

- Email: [your.email@example.com]
- Twitter: [@yourhandle]
- LinkedIn: [linkedin.com/in/yourprofile]


---

Thank you for building **CranioGenix**!  
🧠 *Empowering medical diagnosis with AI*

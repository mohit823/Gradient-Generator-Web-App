# 🎨 Gradient Color Generator

A simple and interactive **Gradient Color Generator** built using HTML, CSS, and JavaScript.
This project allows users to generate random gradient colors and update each side of the gradient independently.

---

## 🌐 Live Demo

👉 [Try it here](https://gradient-generator-web-app.vercel.app/)

---

## 🚀 Features

* 🎲 Generate random HEX colors
* 🎨 Two-color gradient background
* 👉 Click left button → changes left color only
* 👉 Click right button → changes right color only
* 📋 Click on gradient text → copy CSS code
* ⚡ Instant UI updates

---

## 🖥️ Preview

The background dynamically updates like:

```css id="8dxpxa"
linear-gradient(to right, #74561f, #32a67f);
```

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (DOM Manipulation)

---

## 📂 Project Structure

```id="9uvnb7"
gradient-generator/
│── index.html
│── style.css
│── script.js
```

---

## ⚙️ How It Works

* A random color is generated using a custom JavaScript function

### Behavior:

* **Left button** → updates `color1`
* **Right button** → updates `color2`
* Background updates using:

```css id="5k27z0"
linear-gradient(to right, color1, color2);
```

---

## 📋 Copy Feature

* Click on the gradient text
* CSS code is copied to clipboard
* Useful for quick use in projects

---

## 📦 Installation & Usage

1. Clone the repository:

```bash id="czfs10"
git clone https://github.com/your-username/gradient-generator.git
```

2. Open the project folder

3. Run:
   👉 Open `index.html` in your browser

---

## 💡 Future Improvements

* 🎯 Add gradient direction selector
* 🎨 Add color picker instead of random
* 💾 Save favorite gradients
* 🌈 Add multi-color gradients

---

## 🙌 Author

**Mohit Kumar**

* GitHub: https://github.com/mohit823

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

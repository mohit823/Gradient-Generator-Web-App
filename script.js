const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const showText = document.getElementById('text');

let color1 = '#ffffff';
let color2 = '#000000';

// random color generator
const handleRgb = () => {
    const chars = "0123456789abcdef";
    let hex = '#';

    for (let i = 0; i < 6; i++) {
        hex += chars[Math.floor(Math.random() * 16)];
    }
    return hex;
};

// change first color
const getColor1 = () => {
    color1 = handleRgb();
    updateUI();
};

// change second color
const getColor2 = () => {
    color2 = handleRgb();
    updateUI();
};

// update UI
function updateUI() {
    const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
    document.body.style.backgroundImage = gradient;
    showText.innerText = `Background-image: ${gradient}`;
    btn1.textContent = color1;
    btn2.textContent = color2;
}

// copy text
function copyText() {
    navigator.clipboard.writeText(showText.innerText);
    alert("Copied: " + showText.innerText);
}

// events
btn1.addEventListener("click", getColor1);
btn2.addEventListener("click", getColor2);
showText.addEventListener("click", copyText);
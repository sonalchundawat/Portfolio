document.getElementById('generate').addEventListener('click', generateParagraph);

function generateParagraph() {
    const rows = document.getElementById('rows').value;
    const paragraph = document.getElementById('paragraph');
    const randomParagraph = generateRandomText(rows);
    paragraph.innerHTML = randomParagraph; // Use innerHTML for <p> element
}

function generateRandomText(rowCount) {
    const sampleText = [
        "Nature's beauty is seen in the vibrant colors of blooming flowers.",
        "The serene sound of rustling leaves provides a soothing melody.",
        "Majestic mountains stand tall, inspiring awe and wonder.",
        "Crystal-clear rivers flow gracefully, reflecting the sky above.",
        "The diverse wildlife adds charm and vibrancy to natural landscapes.",
        "Sunsets paint the sky with breathtaking hues of orange and pink.",
        "The peacefulness of a forest offers a perfect escape from the hustle and bustle of daily life."
    ];
    
    let result = "";
    for (let i = 0; i < rowCount; i++) {
        result += `${i + 1}. ${sampleText[Math.floor(Math.random() * sampleText.length)]}<br>`; // Include line numbers and <br>
    }
    
    return result;
}

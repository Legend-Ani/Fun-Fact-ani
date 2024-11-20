const facts = [
    "I am 20 years old and have a passion for exploring mountains.",
    "I have hiked several mountain trails and plan to conquer more.",
    "I enjoy capturing the beauty of mountain landscapes through photography.",
    "I am learning about the geology and ecosystems of mountainous regions.",
    "I find peace and inspiration in the solitude of the mountains."
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
});

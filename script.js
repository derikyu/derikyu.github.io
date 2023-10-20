// Arrays of random technology ideas and industry/sector ideas
const techIdeas = [
    "Develop an immersive mobile app",
    "Create a machine learning model",
    "Build a website for e-commerce",
    "Design a blockchain-based solution",
    "Develop a virtual reality experience",
    "Build a chatbot for customer support",
    "Design a new IoT device",
    "Develop a gaming app",
    "Build a social networking platform"
];

const sectorIdeas = [
    "in healthcare",
    "in finance",
    "for Africa",
    "for education",
    "in entertainment",
    "for agriculture",
    "for MEST",
    "in transportation",
    "in retail",
    "for real estate",
    "in manufacturing",
    "for tourism",
    "for MEST"
];

// Function to generate a random idea
function generateIdea() {
    const randomTechIndex = Math.floor(Math.random() * techIdeas.length);
    const randomSectorIndex = Math.floor(Math.random() * sectorIdeas.length);
    const techIdea = techIdeas[randomTechIndex];
    const sectorIdea = sectorIdeas[randomSectorIndex];
    //const combinedIdea = `Develop a ${techIdea} ${sectorIdea} project.`;
    const combinedIdea = `${techIdea} ${sectorIdea}`;
    document.getElementById("techIdea").textContent = combinedIdea;
}

// Event listener for the "Generate Idea" button
document.getElementById("generateBtn").addEventListener("click", generateIdea);

// Generate an initial idea on page load
generateIdea();

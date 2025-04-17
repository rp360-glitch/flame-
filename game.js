
// GAME TITLE: The Flame Begins (JavaScript Version)
// SERIES: The Reign of the Flame

// Sound Effects
const sfx = {
    levelup: new Audio("levelup.mp3"),
    zone: new Audio("zone_enter.mp3"),
    cutscene: new Audio("cutscene.mp3"),
    voidvoice: new Audio("void_speak.mp3")
};

// In-Game Tutorials
const inGameTutorials = [
    "Use WASD or controller to move.",
    "Press [Space] to gain XP (demo).",
    "Press [S] to unlock a skill (demo).",
    "Switch characters through story triggers.",
    "Use flame and void skills with purpose.",
    "Interact with the Pillar of the Fourth Flame when available."
];

let tutorialIndex = 0;
function displayNextTutorial() {
    if (tutorialIndex < inGameTutorials.length) {
        const message = `[TUTORIAL] ${inGameTutorials[tutorialIndex]}`;
        console.log(message);
        document.getElementById("output")?.append(message + "\n");
        tutorialIndex++;
    }
}

function playPillarArrivalCutscene() {
    sfx.cutscene.play();
    const lines = [
        "[CUTSCENE] Kaelen arrives at the Pillar of the Fourth Flame.",
        "The Flameguard kneel in waves as she approaches.",
        "The camera slowly pans upward, revealing the spiral glow of the Pillar.",
        "Soft light bends around Kaelen, and the world holds its breath."
    ];
    lines.forEach(line => {
        console.log(line);
        document.getElementById("output")?.append(line + "\n");
    });
    animateFlameguardsKneeling?.();
    displayNextTutorial();
}

function enterSpiralVault() {
    spiralVaultUnlocked = true;
    sfx.zone.play();
    const messages = [
        "[ZONE] Entering the Spiral Vault...",
        "Dark geometry surrounds you. Echoes twist your reflection.",
        "Use Kaelen's Balance Brand to dispel illusions."
    ];
    messages.forEach(m => {
        console.log(m);
        document.getElementById("output")?.append(m + "\n");
    });
    displayNextTutorial();
}

function enterSilentForge() {
    silentForgeUnlocked = true;
    sfx.zone.play();
    const messages = [
        "[ZONE] Descending into the Silent Forge...",
        "Residual heat pulses through obsidian veins. The Fourth Flame responds.",
        "Solve puzzles of alignment to restore balance to the core."
    ];
    messages.forEach(m => {
        console.log(m);
        document.getElementById("output")?.append(m + "\n");
    });
    displayNextTutorial();
}

function gainXP(amount) {
    xp += amount;
    let message = `[XP] Gained ${amount} XP.`;
    if (xp >= level * 100) {
        level++;
        skillPoints++;
        xp = 0;
        message += `\n[LEVEL UP] You reached level ${level}! Skill points available: ${skillPoints}`;
        sfx.levelup.play();
    }
    console.log(message);
    document.getElementById("output")?.append(message + "\n");
}

function voidEntitySpeaks() {
    sfx.voidvoice.play();
    const lines = [
        "[VOID] We are not flame. We are not frost. We are the silence after.",
        "[VOID] You carry both — and yet you choose.",
        "[VOID] Will your fire forget? Or will it endure?"
    ];
    lines.forEach(line => {
        console.log(line);
        document.getElementById("output")?.append(line + "\n");
    });
    displayNextTutorial();
}

// Word list with pronunciations
const words = [
    {"word": "apple", "pronunciation": "AP-ul"},
    {"word": "book", "pronunciation": "BOOK"},
    {"word": "chair", "pronunciation": "CHAIR"},
    {"word": "door", "pronunciation": "DOR"},
    {"word": "elephant", "pronunciation": "EL-uh-funt"},
    {"word": "flower", "pronunciation": "FLOW-ur"},
    {"word": "grape", "pronunciation": "GRAYP"},
    {"word": "house", "pronunciation": "HOWZ"},
    {"word": "igloo", "pronunciation": "IG-loo"},
    {"word": "jump", "pronunciation": "JUMP"},
    {"word": "kite", "pronunciation": "KYTE"},
    {"word": "lamp", "pronunciation": "LAMP"},
    {"word": "moon", "pronunciation": "MOON"},
    {"word": "nest", "pronunciation": "NEST"},
    {"word": "orange", "pronunciation": "OR-inj"},
    {"word": "pencil", "pronunciation": "PEN-sul"},
    {"word": "queen", "pronunciation": "KWEEN"},
    {"word": "rainbow", "pronunciation": "RAYN-boh"},
    {"word": "sunshine", "pronunciation": "SUN-shyne"},
    {"word": "tree", "pronunciation": "TREE"},
    {"word": "umbrella", "pronunciation": "um-BREL-uh"},
    {"word": "violin", "pronunciation": "vye-uh-LIN"},
    {"word": "window", "pronunciation": "WIN-doh"},
    {"word": "xylophone", "pronunciation": "ZYE-luh-fohn"},
    {"word": "yellow", "pronunciation": "YEL-oh"},
    {"word": "zebra", "pronunciation": "ZEE-bruh"},
    {"word": "ball", "pronunciation": "BAWL"},
    {"word": "cloud", "pronunciation": "KLOWD"},
    {"word": "dragon", "pronunciation": "DRAG-un"},
    {"word": "earth", "pronunciation": "URTH"},
    {"word": "friend", "pronunciation": "FREND"},
    {"word": "garden", "pronunciation": "GAR-dun"},
    {"word": "happy", "pronunciation": "HAP-ee"},
    {"word": "island", "pronunciation": "EYE-lund"},
    {"word": "jungle", "pronunciation": "JUN-gul"},
    {"word": "kitten", "pronunciation": "KIT-un"},
    {"word": "letter", "pronunciation": "LET-ur"},
    {"word": "monkey", "pronunciation": "MUN-kee"},
    {"word": "night", "pronunciation": "NYTE"},
    {"word": "ocean", "pronunciation": "OH-shun"},
    {"word": "pizza", "pronunciation": "PEET-suh"},
    {"word": "quiet", "pronunciation": "KWY-et"},
    {"word": "rabbit", "pronunciation": "RAB-it"},
    {"word": "school", "pronunciation": "SKOOL"},
    {"word": "turtle", "pronunciation": "TUR-tul"},
    {"word": "unicorn", "pronunciation": "YOO-nih-korn"},
    {"word": "village", "pronunciation": "VIL-ij"},
    {"word": "water", "pronunciation": "WAW-tur"},
    {"word": "yogurt", "pronunciation": "YOH-gurt"},
    {"word": "basket", "pronunciation": "BAS-kit"},
    {"word": "cookie", "pronunciation": "KOOK-ee"},
    {"word": "desert", "pronunciation": "DEZ-urt"},
    {"word": "engine", "pronunciation": "EN-jin"},
    {"word": "forest", "pronunciation": "FOR-ist"},
    {"word": "giraffe", "pronunciation": "juh-RAF"},
    {"word": "hammer", "pronunciation": "HAM-ur"},
    {"word": "jacket", "pronunciation": "JAK-it"},
    {"word": "kitchen", "pronunciation": "KICH-un"},
    {"word": "lizard", "pronunciation": "LIZ-urd"},
    {"word": "market", "pronunciation": "MAR-kit"},
    {"word": "napkin", "pronunciation": "NAP-kin"},
    {"word": "ostrich", "pronunciation": "OS-trich"},
    {"word": "parrot", "pronunciation": "PAIR-ut"},
    {"word": "rocket", "pronunciation": "ROK-it"},
    {"word": "sandwich", "pronunciation": "SAND-wich"},
    {"word": "teacher", "pronunciation": "TEECH-ur"},
    {"word": "vacuum", "pronunciation": "VAK-yoom"},
    {"word": "wizard", "pronunciation": "WIZ-urd"},
    {"word": "zipper", "pronunciation": "ZIP-ur"},
    {"word": "blanket", "pronunciation": "BLANK-it"},
    {"word": "castle", "pronunciation": "KAS-ul"},
    {"word": "dinosaur", "pronunciation": "DYE-nuh-sor"},
    {"word": "eagle", "pronunciation": "EE-gul"},
    {"word": "festival", "pronunciation": "FES-tih-vul"},
    {"word": "guitar", "pronunciation": "gih-TAR"},
    {"word": "helicopter", "pronunciation": "HEL-ih-kop-tur"},
    {"word": "imagine", "pronunciation": "ih-MAJ-in"},
    {"word": "jelly", "pronunciation": "JEL-ee"},
    {"word": "kangaroo", "pronunciation": "kang-guh-ROO"},
    {"word": "lemon", "pronunciation": "LEM-un"},
    {"word": "mountain", "pronunciation": "MOWN-tin"},
    {"word": "nature", "pronunciation": "NAY-chur"},
    {"word": "octopus", "pronunciation": "OK-tuh-pus"},
    {"word": "penguin", "pronunciation": "PENG-gwin"},
    {"word": "question", "pronunciation": "KWES-chun"},
    {"word": "river", "pronunciation": "RIV-ur"},
    {"word": "spider", "pronunciation": "SPY-dur"},
    {"word": "thunder", "pronunciation": "THUN-dur"},
    {"word": "unicycle", "pronunciation": "YOO-nih-sy-kul"},
    {"word": "volcano", "pronunciation": "vol-KAY-noh"},
    {"word": "walrus", "pronunciation": "WAL-rus"},
    {"word": "button", "pronunciation": "BUT-un"},
    {"word": "candle", "pronunciation": "KAN-dul"},
    {"word": "dolphin", "pronunciation": "DOL-fin"},
    {"word": "explore", "pronunciation": "ek-SPLOR"},
    {"word": "finger", "pronunciation": "FING-gur"},
    {"word": "giggle", "pronunciation": "GIG-ul"}
];

let currentIndex = 0;
let score = 0;
let isHintActive = false;

// Load score from localStorage
function loadScore() {
    const savedScore = localStorage.getItem('readingScore');
    if (savedScore) {
        score = parseInt(savedScore);
        updateScoreDisplay();
    }
}

// Save score to localStorage
function saveScore() {
    localStorage.setItem('readingScore', score);
}

// Update score display
function updateScoreDisplay() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = score;
}

// Increment score with animation
function incrementScore() {
    score++;
    saveScore();
    updateScoreDisplay();

    // Add bounce animation
    const scoreDisplay = document.querySelector('.score-display');
    scoreDisplay.classList.add('score-up');
    setTimeout(() => {
        scoreDisplay.classList.remove('score-up');
    }, 500);
}

// Reset score
function resetScore() {
    if (confirm('Are you sure you want to reset the score to 0?')) {
        score = 0;
        saveScore();
        updateScoreDisplay();
    }
}

// Initialize display on load
function initializeApp() {
    updateDisplay();
}

function updateDisplay() {
    if (words.length === 0) return;

    const wordElement = document.getElementById('word');
    const pronunciationElement = document.getElementById('pronunciation');
    const counterElement = document.getElementById('counter');

    wordElement.textContent = words[currentIndex].word;
    pronunciationElement.textContent = words[currentIndex].pronunciation;
    counterElement.textContent = `Word ${currentIndex + 1} of ${words.length}`;
}

function nextWord() {
    // Select a random word that's different from the current one
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * words.length);
    } while (newIndex === currentIndex && words.length > 1);

    currentIndex = newIndex;
    isHintActive = false;
    const hintBtn = document.getElementById('hintBtn');
    hintBtn.textContent = '💡 Show Hint';
    hintBtn.classList.remove('active');
    updateDisplay();
}

function previousWord() {
    // Select a random word that's different from the current one
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * words.length);
    } while (newIndex === currentIndex && words.length > 1);

    currentIndex = newIndex;
    isHintActive = false;
    const hintBtn = document.getElementById('hintBtn');
    hintBtn.textContent = '💡 Show Hint';
    hintBtn.classList.remove('active');
    updateDisplay();
}

function speakWord() {
    if (words.length === 0) return;

    const word = words[currentIndex].word;

    if ('speechSynthesis' in window) {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        // Create new speech utterance
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.rate = 0.8; // Slower pace for learning
        utterance.pitch = 1.1; // Slightly higher pitch for child-friendly tone
        utterance.volume = 1;

        window.speechSynthesis.speak(utterance);
    } else {
        alert('Sorry, your browser does not support text-to-speech!');
    }
}

function toggleHint() {
    isHintActive = !isHintActive;
    const hintBtn = document.getElementById('hintBtn');

    if (isHintActive) {
        hintBtn.textContent = '✨ Hide Hint';
        hintBtn.classList.add('active');
        applyHintColoring();
    } else {
        hintBtn.textContent = '💡 Show Hint';
        hintBtn.classList.remove('active');
        updateDisplay();
    }
}

function applyHintColoring() {
    if (words.length === 0) return;

    const wordElement = document.getElementById('word');
    const currentWord = words[currentIndex].word;
    const pronunciation = words[currentIndex].pronunciation;

    // Parse pronunciation into syllables (split by hyphen)
    const syllables = pronunciation.split('-');

    // Colors for different syllables
    const colors = [
        'rgba(255, 107, 129, 0.3)', // pink
        'rgba(126, 213, 111, 0.3)', // green
        'rgba(119, 158, 203, 0.3)', // blue
        'rgba(255, 193, 7, 0.3)',   // yellow
        'rgba(156, 39, 176, 0.3)',  // purple
        'rgba(255, 152, 0, 0.3)'    // orange
    ];

    // Try to map syllables to word parts
    const wordLower = currentWord.toLowerCase();
    let coloredHTML = '';
    let currentPos = 0;

    syllables.forEach((syllable, index) => {
        const cleanSyllable = syllable.replace(/[^a-z]/gi, '').toLowerCase();

        // Try to find approximate match in remaining word
        let syllableLength = Math.ceil(wordLower.length / syllables.length);

        // Better matching: look for common patterns
        if (cleanSyllable.length > 0) {
            // Try to match based on first letter
            const firstLetter = cleanSyllable[0];
            const remainingWord = wordLower.substring(currentPos);
            const matchPos = remainingWord.indexOf(firstLetter);

            if (matchPos >= 0 && matchPos < 3) {
                syllableLength = Math.max(matchPos + Math.ceil(cleanSyllable.length * 0.8), 1);
            }
        }

        const endPos = Math.min(currentPos + syllableLength, currentWord.length);
        const wordPart = currentWord.substring(currentPos, endPos);

        coloredHTML += `<span class="syllable-group" style="background-color: ${colors[index % colors.length]}">${wordPart}</span>`;
        currentPos = endPos;
    });

    // Add any remaining letters
    if (currentPos < currentWord.length) {
        coloredHTML += currentWord.substring(currentPos);
    }

    wordElement.innerHTML = coloredHTML;
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextWord();
    } else if (event.key === 'ArrowLeft') {
        previousWord();
    } else if (event.key === ' ') {
        event.preventDefault();
        speakWord();
    }
});

// Speech recognition setup
let recognition;
let isRecording = false;
let recordedTranscript = '';

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = true; // Keep recording until stopped
    recognition.interimResults = true; // Show interim results
    recognition.lang = 'en-US';

    recognition.onstart = function() {
        isRecording = true;
        recordedTranscript = '';
        const recordBtn = document.getElementById('recordBtn');
        recordBtn.classList.add('recording');
        recordBtn.innerHTML = '⏹️ Stop Recording';
        document.getElementById('feedback').className = 'feedback empty';
        document.getElementById('transcript').textContent = 'Recording... speak now';
    };

    recognition.onresult = function(event) {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                finalTranscript += transcript + ' ';
            } else {
                interimTranscript += transcript;
            }
        }

        // Update recorded transcript
        if (finalTranscript) {
            recordedTranscript += finalTranscript;
        }

        // Show what's being said in real-time
        const displayText = recordedTranscript + interimTranscript;
        if (displayText.trim()) {
            document.getElementById('transcript').textContent = `You said: "${displayText.trim()}"`;
        }
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);

        // Ignore 'no-speech' error during continuous recording
        if (event.error === 'no-speech') {
            return;
        }

        const recordBtn = document.getElementById('recordBtn');
        recordBtn.classList.remove('recording');
        recordBtn.innerHTML = '🎤 Record Your Sentence';

        const feedback = document.getElementById('feedback');
        feedback.className = 'feedback error';
        feedback.textContent = 'Sorry, there was an error. Please try again!';
        isRecording = false;
    };

    recognition.onend = function() {
        if (isRecording) {
            // User clicked stop - process the recording
            isRecording = false;
            const recordBtn = document.getElementById('recordBtn');
            recordBtn.classList.remove('recording');
            recordBtn.innerHTML = '🎤 Record Your Sentence';

            if (recordedTranscript.trim()) {
                checkSentence(recordedTranscript.trim());
            } else {
                const feedback = document.getElementById('feedback');
                feedback.className = 'feedback error';
                feedback.textContent = 'No speech detected. Please try again!';
                document.getElementById('transcript').textContent = '';
            }
        }
    };
}

function startRecording() {
    if (!recognition) {
        alert('Sorry, your browser does not support speech recognition. Please use Chrome, Edge, or Safari.');
        return;
    }

    if (isRecording) {
        // Stop recording
        recognition.stop();
        return;
    }

    // Start recording
    recordedTranscript = '';
    recognition.start();
}

function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7', '#a29bfe', '#fd79a8', '#fdcb6e'];
    const confettiCount = 100;

    // Create container if it doesn't exist
    let container = document.getElementById('confetti-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'confetti-container';
        container.className = 'confetti-container';
        document.body.appendChild(container);
    }

    // Create confetti pieces
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        // Random position
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';

        // Random color
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Random size
        const size = Math.random() * 8 + 6;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';

        // Random shape (circle or square)
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }

        // Random animation duration and delay
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 0.5;
        confetti.style.animationDuration = duration + 's';
        confetti.style.animationDelay = delay + 's';

        container.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, (duration + delay) * 1000);
    }

    // Remove container when all confetti is gone
    setTimeout(() => {
        if (container.children.length === 0) {
            container.remove();
        }
    }, 5000);
}

function checkSentence(transcript) {
    const currentWord = words[currentIndex].word.toLowerCase();
    const spokenWords = transcript.toLowerCase().split(/\s+/).filter(w => w.length > 0);

    const feedback = document.getElementById('feedback');

    // Check if the word is used in the sentence
    if (!spokenWords.includes(currentWord)) {
        feedback.className = 'feedback error';
        feedback.innerHTML = `Oops! Try to use the word "<strong>${currentWord}</strong>" in your sentence. 💪`;
        // Speak faillure feedback
        if ('speechSynthesis' in window) {
            // Cancel any ongoing speech
            window.speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(`Oops! Try to use the word "${currentWord}" in your sentence.`);
            utterance.rate = 1.0; // Slightly slower for clarity
            utterance.pitch = 1.2; // Kid-friendly tone
            utterance.volume = 1.0; // Full volume

            window.speechSynthesis.speak(utterance);
    }
        return;
    }

   

    // Success! Valid sentence with the word
    feedback.className = 'feedback success';
    feedback.innerHTML = '🎉 Amazing! Great sentence! +1 Point! 🌟';

    // Increment score
    incrementScore();

    // Launch confetti!
    createConfetti();

    // Speak congratulations
    if ('speechSynthesis' in window) {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance('Excellent job! That was a great sentence! You earned a point!');
        utterance.rate = 1.0; // Slightly slower for clarity
        utterance.pitch = 1.2; // Kid-friendly tone
        utterance.volume = 1.0; // Full volume

        window.speechSynthesis.speak(utterance);
    }

    // Auto advance to next word after 3 seconds
    setTimeout(() => {
        nextWord();
        feedback.className = 'feedback empty';
        document.getElementById('transcript').textContent = '';
    }, 3000);
121}

// Clear feedback when changing words
function updateDisplay() {
    if (words.length === 0) return;

    const wordElement = document.getElementById('word');
    const pronunciationElement = document.getElementById('pronunciation');
    const counterElement = document.getElementById('counter');

    wordElement.textContent = words[currentIndex].word;
    pronunciationElement.textContent = words[currentIndex].pronunciation;
    counterElement.textContent = `Word ${currentIndex + 1} of ${words.length}`;

    // Clear feedback when word changes
    const feedback = document.getElementById('feedback');
    feedback.className = 'feedback empty';
    document.getElementById('transcript').textContent = '';
}

// Load score and initialize app when page loads
window.addEventListener('load', function() {
    loadScore();
    initializeApp();
});

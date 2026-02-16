let words = [];
let currentIndex = 0;
let score = 0;

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

// Fetch words from the server
async function loadWords() {
    try {
        const response = await fetch('/api/words');
        words = await response.json();
        updateDisplay();
    } catch (error) {
        console.error('Error loading words:', error);
        document.getElementById('word').textContent = 'Error loading words';
    }
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
    currentIndex = (currentIndex + 1) % words.length;
    updateDisplay();
}

function previousWord() {
    currentIndex = (currentIndex - 1 + words.length) % words.length;
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
    const spokenWords = transcript.toLowerCase().split(/\s+/);

    const feedback = document.getElementById('feedback');

    // Check if the word is used in the sentence
    if (spokenWords.includes(currentWord)) {
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
            utterance.rate = 0.85; // Slightly slower for clarity
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
    } else {
        feedback.className = 'feedback error';
        feedback.innerHTML = `Oops! Try to use the word "<strong>${currentWord}</strong>" in your sentence. 💪`;
    }
}

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

// Load words and score when page loads
window.addEventListener('load', function() {
    loadScore();
    loadWords();
});

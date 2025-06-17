// Main JavaScript for Ayushman's- Cyber Education Lab

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navigation highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function highlightNavigation() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all demo cards and education cards
    document.querySelectorAll('.demo-card, .education-card, .prevention-card').forEach(card => {
        observer.observe(card);
    });
});

// Security awareness functions
function showSecurityTip() {
    const tips = [
        "Always verify the sender's identity before clicking links in emails.",
        "Use unique, strong passwords for each of your accounts.",
        "Enable two-factor authentication whenever possible.",
        "Keep your software and operating system updated.",
        "Be cautious when downloading files from the internet.",
        "Never share sensitive information over unsecured channels.",
        "Regularly backup your important data.",
        "Use reputable antivirus software and keep it updated."
    ];

    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    alert(`💡 Security Tip: ${randomTip}`);
}

// Clipboard security demonstration
function demonstrateClipboardSecurity() {
    if (navigator.clipboard && navigator.clipboard.readText) {
        navigator.clipboard.readText().then(text => {
            if (text) {
                alert(`⚠️ Your clipboard contains: "${text.substring(0, 50)}..."\n\nThis demonstrates how websites can potentially access your clipboard content. Be careful what you copy!`);
            } else {
                alert("Your clipboard is empty or access was denied (which is good for security!)");
            }
        }).catch(err => {
            alert("Clipboard access denied - this is good for your security!");
        });
    } else {
        alert("Clipboard API not supported in this browser.");
    }
}

// Educational modal system
function showEducationalModal(topic) {
    const modalContent = {
        'pastejacking': {
            title: 'Paste Jacking Explained',
            content: `
                <h3>What is Paste Jacking?</h3>
                <p>Paste jacking is an attack where malicious websites modify the content of your clipboard when you copy text.</p>
                <h4>How it works:</h4>
                <ul>
                    <li>You select and copy text from a website</li>
                    <li>JavaScript intercepts the copy event</li>
                    <li>Malicious code replaces your intended copy</li>
                    <li>When you paste, you execute the attacker's command</li>
                </ul>
                <h4>Prevention:</h4>
                <ul>
                    <li>Always paste into a text editor first to inspect</li>
                    <li>Type critical commands manually</li>
                    <li>Use terminals with paste protection</li>
                </ul>
            `
        },
        'phishing': {
            title: 'Phishing Attacks Explained',
            content: `
                <h3>What is Phishing?</h3>
                <p>Phishing is a social engineering attack that tricks users into revealing sensitive information.</p>
                <h4>Common Types:</h4>
                <ul>
                    <li><strong>Email Phishing:</strong> Fraudulent emails</li>
                    <li><strong>Spear Phishing:</strong> Targeted attacks</li>
                    <li><strong>Whaling:</strong> Targeting executives</li>
                    <li><strong>Smishing:</strong> SMS phishing</li>
                    <li><strong>Vishing:</strong> Voice phishing</li>
                </ul>
                <h4>Red Flags:</h4>
                <ul>
                    <li>Urgent language and time pressure</li>
                    <li>Generic greetings</li>
                    <li>Suspicious URLs or email addresses</li>
                    <li>Requests for sensitive information</li>
                </ul>
            `
        }
    };

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${modalContent[topic].title}</h2>
                <button class="modal-close" onclick="closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                ${modalContent[topic].content}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
    }
}

// Progress tracking for educational content
let completedDemos = JSON.parse(localStorage.getItem('completedDemos') || '[]');

function markDemoComplete(demoName) {
    if (!completedDemos.includes(demoName)) {
        completedDemos.push(demoName);
        localStorage.setItem('completedDemos', JSON.stringify(completedDemos));
        updateProgressIndicators();
    }
}

function updateProgressIndicators() {
    const demoCards = document.querySelectorAll('.demo-card');
    demoCards.forEach(card => {
        const demoLink = card.querySelector('a[href]');
        if (demoLink) {
            const demoName = demoLink.getAttribute('href').replace('.html', '').replace('-demo', '');
            if (completedDemos.includes(demoName)) {
                card.classList.add('completed');
                if (!card.querySelector('.completion-badge')) {
                    const badge = document.createElement('div');
                    badge.className = 'completion-badge';
                    badge.innerHTML = '<i class="fas fa-check-circle"></i> Completed';
                    card.appendChild(badge);
                }
            }
        }
    });
}

// Initialize progress indicators on page load
document.addEventListener('DOMContentLoaded', updateProgressIndicators);

// Security quiz functionality
const securityQuiz = {
    questions: [
        {
            question: "What should you do if you receive an urgent email asking for your password?",
            options: [
                "Reply with your password immediately",
                "Verify the request through an independent channel",
                "Forward the email to friends",
                "Ignore it completely"
            ],
            correct: 1,
            explanation: "Always verify suspicious requests through independent channels like calling the organization directly."
        },
        {
            question: "Which of these URLs is most likely to be a phishing attempt?",
            options: [
                "https://amazon.com/login",
                "https://arnazon.com/login",
                "https://www.amazon.com/signin",
                "https://signin.amazon.com"
            ],
            correct: 1,
            explanation: "The misspelled 'arnazon' is a common phishing tactic called typosquatting."
        },
        {
            question: "What is the best way to handle a suspicious attachment?",
            options: [
                "Open it to see what it contains",
                "Don't open it and verify with the sender",
                "Forward it to colleagues for their opinion",
                "Download it but don't run it"
            ],
            correct: 1,
            explanation: "Never open suspicious attachments. Always verify with the sender through a separate communication channel."
        }
    ],

    currentQuestion: 0,
    score: 0,

    start: function() {
        this.currentQuestion = 0;
        this.score = 0;
        this.showQuestion();
    },

    showQuestion: function() {
        const question = this.questions[this.currentQuestion];
        const quizContainer = document.getElementById('quiz-container');

        if (!quizContainer) return;

        quizContainer.innerHTML = `
            <div class="quiz-question">
                <h3>Question ${this.currentQuestion + 1} of ${this.questions.length}</h3>
                <p>${question.question}</p>
                <div class="quiz-options">
                    ${question.options.map((option, index) => `
                        <button class="quiz-option" onclick="securityQuiz.selectAnswer(${index})">${option}</button>
                    `).join('')}
                </div>
            </div>
        `;
    },

    selectAnswer: function(selectedIndex) {
        const question = this.questions[this.currentQuestion];
        const isCorrect = selectedIndex === question.correct;

        if (isCorrect) {
            this.score++;
        }

        // Show explanation
        const quizContainer = document.getElementById('quiz-container');
        quizContainer.innerHTML += `
            <div class="quiz-result ${isCorrect ? 'correct' : 'incorrect'}">
                <p><strong>${isCorrect ? 'Correct!' : 'Incorrect.'}</strong></p>
                <p>${question.explanation}</p>
                <button onclick="securityQuiz.nextQuestion()" class="quiz-next">
                    ${this.currentQuestion < this.questions.length - 1 ? 'Next Question' : 'See Results'}
                </button>
            </div>
        `;
    },

    nextQuestion: function() {
        this.currentQuestion++;
        if (this.currentQuestion < this.questions.length) {
            this.showQuestion();
        } else {
            this.showResults();
        }
    },

    showResults: function() {
        const percentage = Math.round((this.score / this.questions.length) * 100);
        const quizContainer = document.getElementById('quiz-container');

        let message = '';
        if (percentage >= 80) {
            message = 'Excellent! You have a strong understanding of cybersecurity principles.';
        } else if (percentage >= 60) {
            message = 'Good job! Consider reviewing the educational materials for areas of improvement.';
        } else {
            message = 'You might benefit from additional cybersecurity training. Review the educational content and try again.';
        }

        quizContainer.innerHTML = `
            <div class="quiz-results">
                <h3>Quiz Complete!</h3>
                <p>Your Score: ${this.score} out of ${this.questions.length} (${percentage}%)</p>
                <p>${message}</p>
                <button onclick="securityQuiz.start()" class="quiz-restart">Take Quiz Again</button>
            </div>
        `;
    }
};

// Utility functions for demonstrations
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Text copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

// Add CSS for modal and quiz styles
const additionalStyles = `
<style>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 10000;
}

.modal-content {
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 15px;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0 20px 40px rgba(0,0,0,0.7);
    color: #e9ecef;
}

.modal-header {
    padding: 1.5rem;
    border-bottom: 1px solid #30363d;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-close {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #999;
}

.modal-body {
    padding: 1.5rem;
}

.completion-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #28a745;
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
}

.demo-card {
    position: relative;
}

.demo-card.completed {
    border-color: #28a745;
}

.quiz-question, .quiz-results {
    background: #161b22;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.5);
    border: 1px solid #30363d;
    color: #e9ecef;
}

.quiz-options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
}

.quiz-option {
    padding: 1rem;
    border: 2px solid #30363d;
    border-radius: 8px;
    background: #0d1117;
    color: #e9ecef;
    cursor: pointer;
    transition: all 0.3s ease;
}

.quiz-option:hover {
    border-color: #2ea043;
    background: rgba(46, 160, 67, 0.1);
}

.quiz-result {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 8px;
}

.quiz-result.correct {
    background: rgba(46, 160, 67, 0.1);
    border-left: 4px solid #2ea043;
    color: #e9ecef;
}

.quiz-result.incorrect {
    background: rgba(220, 53, 69, 0.1);
    border-left: 4px solid #dc3545;
    color: #e9ecef;
}

.quiz-next, .quiz-restart {
    background: #2ea043;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 1rem;
}
</style>
`;

// Inject additional styles
document.head.insertAdjacentHTML('beforeend', additionalStyles);

const books = [
    {
        id: 1,
        title: "Harry Potter",
        author: "J.K. Rowling",
        category: "Fantasy",
        isbn: "9780590353427",
        description: "A young wizard discovers his magical identity and enters Hogwarts, where friendship, danger, and a mysterious past await him."
    },
    {
        id: 2,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        isbn: "9780547928227",
        description: "Bilbo Baggins leaves his comfortable home and joins a dangerous adventure to help a group of dwarves reclaim their lost treasure."
    },
    {
        id: 3,
        title: "The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        isbn: "9780618640157",
        description: "A young hobbit inherits a powerful ring and begins a journey to prevent a dark force from taking control of Middle-earth."
    },
    {
        id: 4,
        title: "Percy Jackson",
        author: "Rick Riordan",
        category: "Fantasy",
        isbn: "9780786838653",
        description: "Percy discovers that Greek mythology is real and that he is connected to the ancient gods. His new world is full of monsters and adventures."
    },
    {
        id: 5,
        title: "The Chronicles of Narnia",
        author: "C.S. Lewis",
        category: "Fantasy",
        isbn: "9780066238500",
        description: "Four siblings discover a magical land beyond a wardrobe, where talking animals and an ancient struggle between good and evil await."
    },
    {
        id: 6,
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        category: "Fantasy",
        isbn: "9780756404741",
        description: "A mysterious musician tells the story of his extraordinary life, from a difficult childhood to his education in the arts of magic."
    },
    {
        id: 7,
        title: "Eragon",
        author: "Christopher Paolini",
        category: "Fantasy",
        isbn: "9780375826696",
        description: "A farm boy discovers a dragon egg and becomes part of a dangerous conflict that could change the future of his entire world."
    },
    {
        id: 8,
        title: "Alice in Wonderland",
        author: "Lewis Carroll",
        category: "Fantasy",
        isbn: "9780141439761",
        description: "Alice follows a mysterious rabbit into a strange world filled with unusual creatures, curious characters, and impossible adventures."
    },
    {
        id: 9,
        title: "1984",
        author: "George Orwell",
        category: "Fiction",
        isbn: "9780451524935",
        description: "In a society controlled by constant surveillance and propaganda, Winston Smith begins questioning the government and its version of reality."
    },
    {
        id: 10,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Fiction",
        isbn: "9780743273565",
        description: "A mysterious millionaire throws extravagant parties while secretly hoping to reconnect with someone from his past."
    },
    {
        id: 11,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        isbn: "9780061122415",
        description: "A young shepherd travels across the desert searching for treasure and discovers important lessons about dreams and life along the way."
    },
    {
        id: 12,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "Fiction",
        isbn: "9780061120084",
        description: "Through the eyes of a young girl, a small town faces questions of justice, prejudice, courage, and human kindness."
    },
    {
        id: 13,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        category: "Fiction",
        isbn: "9780316769488",
        description: "Holden Caulfield recounts several days of confusion and reflection as he struggles to understand adulthood and the world around him."
    },
    {
        id: 14,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        category: "Fiction",
        isbn: "9780141439518",
        description: "Elizabeth Bennet navigates family expectations, social class, misunderstandings, and an unexpected relationship."
    },
    {
        id: 15,
        title: "The Little Prince",
        author: "Antoine de Saint-Exupery",
        category: "Fiction",
        isbn: "9780156012195",
        description: "A pilot meets a mysterious young traveler from another planet, whose stories reveal thoughtful lessons about friendship and human nature."
    },
    {
        id: 16,
        title: "Of Mice and Men",
        author: "John Steinbeck",
        category: "Fiction",
        isbn: "9780140177398",
        description: "Two traveling workers struggle through difficult times while holding onto a shared dream of building a better life."
    },
    {
        id: 17,
        title: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        category: "Mystery",
        isbn: "9780140439072",
        description: "The brilliant detective Sherlock Holmes and his companion Dr. Watson solve mysterious cases through observation and logical reasoning."
    },
    {
        id: 18,
        title: "Dracula",
        author: "Bram Stoker",
        category: "Mystery",
        isbn: "9780141439846",
        description: "A mysterious count from Transylvania arrives in England, bringing an unsettling secret that threatens the people around him."
    },
    {
        id: 19,
        title: "Murder on the Orient Express",
        author: "Agatha Christie",
        category: "Mystery",
        isbn: "9780062693662",
        description: "Detective Hercule Poirot investigates a murder aboard a train trapped by snow, where every passenger has something to hide."
    },
    {
        id: 20,
        title: "And Then There Were None",
        author: "Agatha Christie",
        category: "Mystery",
        isbn: "9780062073488",
        description: "Ten strangers arrive on an isolated island, where a mysterious host reveals that each visitor has a hidden secret."
    },
    {
        id: 21,
        title: "The Hound of the Baskervilles",
        author: "Arthur Conan Doyle",
        category: "Mystery",
        isbn: "9780140437867",
        description: "Holmes investigates a mysterious family legend involving a terrifying creature said to haunt the Baskerville family."
    },
    {
        id: 22,
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        category: "Mystery",
        isbn: "9780307454546",
        description: "A journalist and a talented hacker investigate the disappearance of a young woman from a wealthy family."
    },
    {
        id: 23,
        title: "The Big Sleep",
        author: "Raymond Chandler",
        category: "Mystery",
        isbn: "9780394758282",
        description: "Private detective Philip Marlowe takes a case involving a wealthy family and discovers a complicated web of secrets."
    },
    {
        id: 24,
        title: "The Maltese Falcon",
        author: "Dashiell Hammett",
        category: "Mystery",
        isbn: "9780679722649",
        description: "Private detective Sam Spade becomes involved in a dangerous search for a mysterious and valuable historical object."
    },
    {
        id: 25,
        title: "Dune",
        author: "Frank Herbert",
        category: "Science",
        isbn: "9780441013593",
        description: "On a desert planet where a valuable resource controls the universe, young Paul Atreides becomes part of an enormous political struggle."
    },
    {
        id: 26,
        title: "The Martian",
        author: "Andy Weir",
        category: "Science",
        isbn: "9780553418026",
        description: "An astronaut is accidentally left behind on Mars and must use science, creativity, and determination to survive."
    },
    {
        id: 27,
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        category: "Science",
        isbn: "9780345391803",
        description: "Arthur Dent unexpectedly escapes Earth's destruction and begins a bizarre journey through space with an unusual group of travelers."
    },
    {
        id: 28,
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        category: "Science",
        isbn: "9781451673319",
        description: "In a future where books are forbidden, a fireman responsible for destroying them begins questioning the society he serves."
    },
    {
        id: 29,
        title: "Brave New World",
        author: "Aldous Huxley",
        category: "Science",
        isbn: "9780060850524",
        description: "A futuristic society maintains stability through technology and conditioning, but not everyone accepts its definition of happiness."
    },
    {
        id: 30,
        title: "Foundation",
        author: "Isaac Asimov",
        category: "Science",
        isbn: "9780553293357",
        description: "A mathematician predicts the collapse of a galactic empire and creates a plan to preserve knowledge during the coming dark age."
    },
    {
        id: 31,
        title: "Cosmos",
        author: "Carl Sagan",
        category: "Science",
        isbn: "9780345539434",
        description: "Carl Sagan explores the universe, the history of scientific discovery, and humanity's place in the cosmos."
    },
    {
        id: 32,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        category: "Science",
        isbn: "9780553380163",
        description: "Stephen Hawking introduces major ideas about the universe, including black holes, space, time, and the origins of existence."
    }
];

/* =========================================================
   STORAGE (saved in this browser only)
   ========================================================= */

const KEYS = {
    loans: "bookhouseLoans",
    xp: "bookhouseXP",
    profile: "bookhouseProfile"
};

const XP_BORROW = 50;
const XP_RETURN = 10;
const MAX_LOAN_DAYS = 30;
const TOTAL_STEPS = 4;

const LEVELS = [
    { name: "Newcomer", emoji: "🌱", min: 0 },
    { name: "Bookworm", emoji: "🐛", min: 100 },
    { name: "Page Turner", emoji: "📖", min: 250 },
    { name: "Bibliophile", emoji: "🦉", min: 500 },
    { name: "Librarian", emoji: "👑", min: 1000 }
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function readStorage(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw === null ? fallback : JSON.parse(raw);
    } catch (error) {
        return fallback;
    }
}

function writeStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        /* storage not available, the app still works for this visit */
    }
}

/* ---------- date helpers ---------- */

function toISO(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
}

function addDays(date, days) {
    const copy = new Date(date);
    copy.setDate(copy.getDate() + days);
    return copy;
}

function formatDate(iso) {
    return new Date(iso + "T00:00:00").toLocaleDateString(undefined, {
        month: "short",
        day: "numeric"
    });
}

const ISO_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

/* ---------- load saved data safely ---------- */

function cleanLoans(raw) {
    const clean = {};

    if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
        return clean;
    }

    Object.entries(raw).forEach(([id, loan]) => {
        const bookId = Number(id);

        if (!books.some(book => book.id === bookId)) return;
        if (!loan || typeof loan !== "object") return;

        const today = toISO(new Date());

        clean[bookId] = {
            name: String(loan.name || "").slice(0, 40),
            studentId: String(loan.studentId || "").slice(0, 15),
            contact: String(loan.contact || "").slice(0, 60),
            borrowedAt: ISO_PATTERN.test(loan.borrowedAt) ? loan.borrowedAt : today,
            dueDate: ISO_PATTERN.test(loan.dueDate) ? loan.dueDate : today
        };
    });

    return clean;
}

let loans = cleanLoans(readStorage(KEYS.loans, {}));
let xp = Math.max(0, Number(readStorage(KEYS.xp, 0)) || 0);

let profile = readStorage(KEYS.profile, {});
if (!profile || typeof profile !== "object") profile = {};

let selectedCategory = "All";
let selectedBook = null;

function isBorrowed(id) {
    return Object.prototype.hasOwnProperty.call(loans, id);
}

function borrowedCount() {
    return Object.keys(loans).length;
}

/* =========================================================
   DOM
   ========================================================= */

const el = id => document.getElementById(id);

const bookModal = el("bookModal");
const borrowModal = el("borrowModal");
const borrowForm = el("borrowForm");
const steps = [...document.querySelectorAll(".step")];
const chips = [...document.querySelectorAll(".chip")];

const fieldName = el("fieldName");
const fieldId = el("fieldId");
const fieldContact = el("fieldContact");
const fieldDate = el("fieldDate");

let wizardBook = null;
let wizardStep = 1;

/* =========================================================
   XP + LEVELS
   ========================================================= */

function getLevelIndex(points) {
    let index = 0;

    LEVELS.forEach((level, i) => {
        if (points >= level.min) index = i;
    });

    return index;
}

function updateXpPill() {
    const index = getLevelIndex(xp);
    const level = LEVELS[index];
    const next = LEVELS[index + 1];

    el("levelEmoji").textContent = level.emoji;
    el("levelName").textContent = level.name;

    if (next) {
        const progress = (xp - level.min) / (next.min - level.min);
        el("xpFill").style.width = Math.round(progress * 100) + "%";
        el("xpText").textContent = `${xp} / ${next.min} XP`;
    } else {
        el("xpFill").style.width = "100%";
        el("xpText").textContent = `${xp} XP · MAX`;
    }
}

function addXp(amount) {
    const before = getLevelIndex(xp);

    xp += amount;
    writeStorage(KEYS.xp, xp);
    updateXpPill();

    const after = getLevelIndex(xp);

    return after > before ? LEVELS[after] : null;
}

/* =========================================================
   SMALL UI HELPERS
   ========================================================= */

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    el("toastRoot").appendChild(toast);

    setTimeout(() => {
        toast.classList.add("leaving");
        setTimeout(() => toast.remove(), 300);
    }, 2800);
}

function animateNumber(element, target) {
    const start = Number(element.textContent) || 0;

    if (start === target || reduceMotion.matches) {
        element.textContent = target;
        return;
    }

    const duration = 600;
    const startTime = performance.now();

    function frame(now) {
        const t = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);

        element.textContent = Math.round(start + (target - start) * eased);

        if (t < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
}

function syncScrollLock() {
    const anyOpen = document.querySelector(".modal-overlay.show");
    document.body.classList.toggle("modal-open", Boolean(anyOpen));
}

/* ---------- confetti ---------- */

const confettiCanvas = el("confetti");
const confettiCtx = confettiCanvas.getContext("2d");
let confettiPieces = [];
let confettiRunning = false;

function launchConfetti() {
    if (reduceMotion.matches) return;

    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const colors = ["#a855f7", "#22d3ee", "#a3e635", "#f472b6", "#fb923c", "#ffffff"];

    for (let i = 0; i < 150; i++) {
        confettiPieces.push({
            x: window.innerWidth / 2 + (Math.random() - 0.5) * 240,
            y: window.innerHeight * 0.45,
            vx: (Math.random() - 0.5) * 18,
            vy: Math.random() * -17 - 4,
            size: 6 + Math.random() * 7,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            spin: (Math.random() - 0.5) * 14,
            life: 0
        });
    }

    if (!confettiRunning) {
        confettiRunning = true;
        requestAnimationFrame(confettiFrame);
    }
}

function confettiFrame() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    confettiPieces = confettiPieces.filter(
        piece => piece.y < confettiCanvas.height + 40 && piece.life < 260
    );

    confettiPieces.forEach(piece => {
        piece.vy += 0.4;
        piece.vx *= 0.99;
        piece.x += piece.vx;
        piece.y += piece.vy;
        piece.rotation += piece.spin;
        piece.life++;

        confettiCtx.save();
        confettiCtx.translate(piece.x, piece.y);
        confettiCtx.rotate((piece.rotation * Math.PI) / 180);
        confettiCtx.fillStyle = piece.color;
        confettiCtx.fillRect(-piece.size / 2, -piece.size / 4, piece.size, piece.size / 2);
        confettiCtx.restore();
    });

    if (confettiPieces.length > 0) {
        requestAnimationFrame(confettiFrame);
    } else {
        confettiRunning = false;
        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
}

/* =========================================================
   BOOK GRID
   ========================================================= */

function getCover(book) {
    return `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`;
}

function displayBooks(animate = true) {
    const grid = el("bookGrid");

    const search = el("searchInput")
        .value
        .toLowerCase()
        .trim();

    grid.innerHTML = "";

    const filteredBooks = books.filter(book => {
        const matchesSearch =
            book.title.toLowerCase().includes(search) ||
            book.author.toLowerCase().includes(search);

        const matchesCategory =
            selectedCategory === "All" ||
            book.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    filteredBooks.forEach((book, index) => {
        const borrowedNow = isBorrowed(book.id);
        const loan = loans[book.id];

        const card = document.createElement("div");
        card.className = "book-card" + (animate ? " pop" : "");
        card.style.setProperty("--i", Math.min(index, 12));
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `${book.title} by ${book.author}`);

        card.innerHTML = `
            <div class="book-cover">
                <span class="status ${borrowedNow ? "out" : "in"}">
                    ${borrowedNow ? "Borrowed" : "Available"}
                </span>
                <img
                    src="${getCover(book)}"
                    alt="${book.title} book cover"
                    loading="lazy"
                >
            </div>

            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="author">By ${book.author}</p>
                <p class="book-category">${book.category}</p>
                ${borrowedNow ? `<p class="due">⏰ Due ${formatDate(loan.dueDate)}</p>` : ""}

                <button class="borrow-btn ${borrowedNow ? "return" : ""}">
                    ${borrowedNow ? "Return Book" : "Borrow Book"}
                </button>
            </div>
        `;

        card.addEventListener("click", () => {
            openBookDetails(book.id);
        });

        card.addEventListener("keydown", event => {
            if (event.key === "Enter" && event.target === card) {
                openBookDetails(book.id);
            }
        });

        card.querySelector(".borrow-btn").addEventListener("click", event => {
            event.stopPropagation();

            if (isBorrowed(book.id)) {
                returnBook(book.id);
            } else {
                openBorrow(book.id);
            }
        });

        const coverImage = card.querySelector("img");

        coverImage.addEventListener("error", () => {
            coverImage.style.display = "none";
            coverImage.parentElement.classList.add("cover-unavailable");
            coverImage.insertAdjacentText("afterend", "Cover unavailable");
        }, { once: true });

        grid.appendChild(card);
    });

    el("emptyMessage").style.display =
        filteredBooks.length === 0 ? "block" : "none";

    updateStats();
}

function updateStats() {
    animateNumber(el("totalBooks"), books.length);
    animateNumber(el("borrowedBooks"), borrowedCount());
    animateNumber(el("availableBooks"), books.length - borrowedCount());
}

/* =========================================================
   BOOK DETAILS POPUP
   ========================================================= */

function openBookDetails(id) {
    selectedBook = books.find(book => book.id === id);

    if (!selectedBook) return;

    const modalImage = el("modalImage");

    el("modalTitle").textContent = selectedBook.title;
    el("modalAuthor").textContent = "By " + selectedBook.author;
    el("modalCategory").textContent = selectedBook.category;
    el("modalDescription").textContent = selectedBook.description;

    modalImage.style.display = "block";
    modalImage.src = getCover(selectedBook);
    modalImage.alt = selectedBook.title + " book cover";

    modalImage.onerror = () => {
        modalImage.style.display = "none";
    };

    updateModalButton();

    bookModal.classList.add("show");
    syncScrollLock();
}

function closeBookDetails() {
    bookModal.classList.remove("show");
    selectedBook = null;
    syncScrollLock();
}

function updateModalButton() {
    if (!selectedBook) return;

    const button = el("modalBorrow");
    const borrowedNow = isBorrowed(selectedBook.id);

    button.textContent = borrowedNow ? "Return Book" : "Borrow Book";
    button.classList.toggle("return", borrowedNow);
}

/* =========================================================
   RETURN A BOOK
   ========================================================= */

function returnBook(id) {
    const loan = loans[id];
    const book = books.find(b => b.id === id);

    if (!loan || !book) return;

    const onTime = loan.dueDate >= toISO(new Date());

    delete loans[id];
    writeStorage(KEYS.loans, loans);

    let message = `📚 "${book.title}" returned. Thanks!`;

    if (onTime) {
        const levelUp = addXp(XP_RETURN);
        message = `✅ Returned on time! +${XP_RETURN} XP`;

        if (levelUp) {
            message += ` · Level up: ${levelUp.name} ${levelUp.emoji}`;
            launchConfetti();
        }
    }

    showToast(message);
    displayBooks(false);
    updateModalButton();
}

/* =========================================================
   BORROW WIZARD (4 small steps)
   ========================================================= */

function setReturnDays(days) {
    fieldDate.value = toISO(addDays(new Date(), days));
    syncChips();
}

function syncChips() {
    const today = new Date();

    chips.forEach(chip => {
        const target = toISO(addDays(today, Number(chip.dataset.days)));
        chip.classList.toggle("active", fieldDate.value === target);
    });
}

function clearErrors() {
    steps.forEach(step => {
        step.querySelector(".field-error").textContent = "";
        const input = step.querySelector(".field");
        input.removeAttribute("aria-invalid");
        input.classList.remove("shake");
    });
}

function showStep(n) {
    wizardStep = n;

    steps.forEach(step => {
        step.classList.toggle("active", Number(step.dataset.step) === n);
    });

    el("progressBar").style.width = (n / TOTAL_STEPS) * 100 + "%";
    el("stepLabel").textContent = `Step ${n} of ${TOTAL_STEPS}`;
    el("backBtn").style.visibility = n === 1 ? "hidden" : "visible";
    el("nextBtn").textContent = n === TOTAL_STEPS ? "Borrow it! 🚀" : "Next →";

    const textInput = steps[n - 1].querySelector("input[type='text']");

    if (textInput) {
        setTimeout(() => textInput.focus({ preventScroll: true }), 60);
    }
}

function openBorrow(id) {
    const book = books.find(b => b.id === id);

    if (!book || isBorrowed(id)) return;

    if (bookModal.classList.contains("show")) {
        closeBookDetails();
    }

    wizardBook = book;

    fieldName.value = String(profile.name || "").slice(0, 40);
    fieldId.value = String(profile.studentId || "").slice(0, 15);
    fieldContact.value = String(profile.contact || "").slice(0, 60);
    setReturnDays(7);

    el("step2Title").textContent = "Your student ID?";
    el("wizardBookTitle").textContent = book.title;

    clearErrors();

    el("successScreen").hidden = true;
    el("wizardTop").hidden = false;
    borrowForm.hidden = false;

    borrowModal.classList.add("show");
    syncScrollLock();
    showStep(1);
}

function closeBorrow() {
    borrowModal.classList.remove("show");
    wizardBook = null;
    syncScrollLock();
}

function validateStep(n) {
    if (n === 1) {
        const value = fieldName.value.trim();

        if (!/^\p{L}[\p{L}\s.'-]{1,39}$/u.test(value)) {
            return { input: fieldName, message: "Tell us your name (at least 2 letters) 🙂" };
        }
    }

    if (n === 2) {
        const value = fieldId.value.trim();

        if (!/^[A-Za-z0-9-]{3,15}$/.test(value)) {
            return { input: fieldId, message: "3 to 15 letters or numbers, no spaces 🪪" };
        }
    }

    if (n === 3) {
        const value = fieldContact.value.trim();
        const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
        const looksLikePhone =
            /^\+?[\d\s()-]{7,20}$/.test(value) &&
            value.replace(/\D/g, "").length >= 7;

        if (!looksLikeEmail && !looksLikePhone) {
            return { input: fieldContact, message: "Enter a valid email or phone number 📬" };
        }
    }

    if (n === 4) {
        const value = fieldDate.value;
        const tomorrow = toISO(addDays(new Date(), 1));
        const latest = toISO(addDays(new Date(), MAX_LOAN_DAYS));

        if (!ISO_PATTERN.test(value) || value < tomorrow || value > latest) {
            return { input: fieldDate, message: `Pick a date within the next ${MAX_LOAN_DAYS} days 📅` };
        }
    }

    return null;
}

function showFieldError(problem) {
    const errorLine = problem.input.closest(".step").querySelector(".field-error");

    errorLine.textContent = problem.message;
    problem.input.setAttribute("aria-invalid", "true");

    problem.input.classList.remove("shake");
    void problem.input.offsetWidth;
    problem.input.classList.add("shake");

    if (problem.input.type === "text") {
        problem.input.focus({ preventScroll: true });
    }
}

function finishBorrow() {
    const book = wizardBook;

    if (!book || isBorrowed(book.id)) return;

    const loan = {
        name: fieldName.value.trim(),
        studentId: fieldId.value.trim(),
        contact: fieldContact.value.trim(),
        borrowedAt: toISO(new Date()),
        dueDate: fieldDate.value
    };

    loans[book.id] = loan;
    writeStorage(KEYS.loans, loans);

    profile = {
        name: loan.name,
        studentId: loan.studentId,
        contact: loan.contact
    };
    writeStorage(KEYS.profile, profile);

    const levelUp = addXp(XP_BORROW);

    displayBooks(false);
    showSuccess(book, loan, levelUp);
    launchConfetti();
}

function showSuccess(book, loan, levelUp) {
    el("wizardTop").hidden = true;
    borrowForm.hidden = true;

    el("successBook").textContent = `"${book.title}" is yours, ${loan.name.split(/\s+/)[0]}!`;
    el("successDue").textContent = `Bring it back by ${formatDate(loan.dueDate)} 📅`;
    el("successXp").textContent = `+${XP_BORROW} XP ⚡`;

    const levelLine = el("successLevel");

    if (levelUp) {
        levelLine.textContent = `🎊 Level up! You're now a ${levelUp.name} ${levelUp.emoji}`;
        levelLine.hidden = false;
    } else {
        levelLine.hidden = true;
    }

    el("successScreen").hidden = false;
}

borrowForm.addEventListener("submit", event => {
    event.preventDefault();

    const problem = validateStep(wizardStep);

    if (problem) {
        showFieldError(problem);
        return;
    }

    if (wizardStep < TOTAL_STEPS) {
        if (wizardStep === 1) {
            const firstName = fieldName.value.trim().split(/\s+/)[0];
            el("step2Title").textContent = `Nice, ${firstName}! Student ID?`;
        }

        showStep(wizardStep + 1);
    } else {
        finishBorrow();
    }
});

borrowForm.addEventListener("input", event => {
    const input = event.target;

    if (!input.classList.contains("field")) return;

    input.removeAttribute("aria-invalid");
    input.closest(".step").querySelector(".field-error").textContent = "";

    if (input === fieldDate) syncChips();
});

chips.forEach(chip => {
    chip.addEventListener("click", () => {
        setReturnDays(Number(chip.dataset.days));
        clearErrors();
    });
});

el("backBtn").addEventListener("click", () => {
    if (wizardStep > 1) showStep(wizardStep - 1);
});

el("closeBorrow").addEventListener("click", closeBorrow);
el("doneBtn").addEventListener("click", closeBorrow);

/* =========================================================
   OTHER EVENTS
   ========================================================= */

el("searchInput").addEventListener("input", () => displayBooks(true));

document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".category.active")
            .classList.remove("active");

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        displayBooks(true);
    });
});

document.querySelectorAll(".surprise-btn").forEach(button => {
    button.addEventListener("click", () => {
        const available = books.filter(book => !isBorrowed(book.id));

        if (available.length === 0) {
            showToast("😮 Every book is borrowed right now!");
            return;
        }

        const pick = available[Math.floor(Math.random() * available.length)];

        showToast("🎲 How about this one?");
        openBookDetails(pick.id);
    });
});

el("closeModal").addEventListener("click", closeBookDetails);

bookModal.addEventListener("click", event => {
    if (event.target === bookModal) {
        closeBookDetails();
    }
});

el("modalBorrow").addEventListener("click", () => {
    if (!selectedBook) return;

    const id = selectedBook.id;

    if (isBorrowed(id)) {
        returnBook(id);
    } else {
        openBorrow(id);
    }
});

document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    if (borrowModal.classList.contains("show")) {
        closeBorrow();
    } else if (bookModal.classList.contains("show")) {
        closeBookDetails();
    }
});

/* =========================================================
   START
   ========================================================= */

fieldDate.min = toISO(addDays(new Date(), 1));
fieldDate.max = toISO(addDays(new Date(), MAX_LOAN_DAYS));

updateXpPill();
displayBooks(true);
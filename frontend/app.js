// Configuration
const CONFIG = {
    TIME_SCALE: 60,
    SATURATION_THRESHOLD_VELOCITY: 1000,
    EU_RIGHTS_VIOLATIONS: ["discrim", "incit", "filth", "subhuman", "hate"],
    BRIDGE_TOKENS: ["however", "perhaps", "solution", "agree", "source", "propose", "consider"],
    TOXIC_TOKENS: ["stupid", "idiot", "shill", "fake", "liar", "dumb"]
};

// State
let state = {
    sessionTimeSeconds: 0,
    posts: [
        {
            id: 1,
            author: "Dr. Alice Walker",
            avatar: "assets/alice.png",
            category: "environment",
            title: "Carbon Taxation: A Pragmantic Approach to Climate Policy",
            content: "I agree with the problem, however, perhaps we can solve it by taxing carbon? The economic implications are vast, but the long-term stability...",
            fullContent: `The climate crisis requires bold action, and carbon taxation offers a pragmatic path forward. By putting a price on carbon emissions, we incentivize corporations to innovate and reduce their footprint. 

Critics argue that this will hurt the economy, but evidence from early adopters suggests otherwise. Revenue generated can be returned to citizens as a dividend, offsetting rising costs. 

Furthermore, this policy encourages a shift towards renewable energy sources, creating millions of green jobs in the process. We must look beyond short-term gains and prioritize the long-term stability of our planet.`,
            score: 0,
            comments: []
        },
        {
            id: 2,
            author: "Bob The Troll",
            avatar: "assets/bob.png",
            category: "politics",
            title: "Why Everything is Fake",
            content: "This is fake news liar! You are an idiot. Nothing is real and everyone is a shill.",
            fullContent: "There is no full content for this post because it is low quality and lacks substance.",
            score: 0,
            comments: []
        },
        {
            id: 3,
            author: "Charlie Tech",
            avatar: "assets/charlie.png",
            category: "technology",
            title: "The Future of AI Governance",
            content: "We need to consider the ethical implications of AGI before it's too late. Regulation is key.",
            fullContent: `Artificial General Intelligence (AGI) is approaching faster than anticipated. While the potential benefits are immense—curing diseases, solving complex physics problems—the risks are equally significant.

We need a robust framework for AI governance that prioritizes human safety and alignment. This isn't just about preventing "Terminator" scenarios; it's about ensuring that AI systems don't inadvertently amplify bias or destabilize financial markets.

International cooperation is essential. A fragmented regulatory landscape will only lead to a race to the bottom.`,
            score: 0,
            comments: []
        },
        {
            id: 4,
            author: "Dana Economics",
            avatar: "assets/dana.png",
            category: "society",
            title: "Universal Basic Income: A Necessity?",
            content: "We should consider the economic impact before proceeding. Automation is displacing jobs at a record rate.",
            fullContent: `As automation and AI continue to displace traditional jobs, the conversation around Universal Basic Income (UBI) becomes increasingly urgent. It's not just a social safety net; it's an economic necessity for a future where human labor is less scarce.

Pilot programs have shown that UBI does not discourage work; rather, it empowers individuals to pursue education, entrepreneurship, and creative endeavors. 

However, funding such a program requires a complete rethink of our tax systems. We need to tax capital and automation, not just labor.`,
            score: 0,
            comments: []
        },
        {
            id: 5,
            author: "Elena Green",
            avatar: "assets/alice.png",
            category: "environment",
            title: "The Ocean Cleanup: Progress Report",
            content: "The latest data from the Pacific Garbage Patch cleanup is promising. We are seeing a 20% reduction in surface debris.",
            fullContent: `The Great Pacific Garbage Patch has long been a symbol of our neglect. However, recent efforts by The Ocean Cleanup project are finally showing tangible results. 

New autonomous collection systems are capturing plastic at an unprecedented rate. But cleaning up is only half the battle. We must also stop the inflow of plastic from rivers.

This dual approach—interception and extraction—is our best hope for restoring our oceans.`,
            score: 0,
            comments: []
        },
        {
            id: 6,
            author: "Frank Policy",
            avatar: "assets/charlie.png",
            category: "politics",
            title: "Digital Democracy: Voting on Blockchain?",
            content: "Could blockchain technology solve our election integrity issues? A proposed solution for transparent voting.",
            fullContent: `Trust in democratic institutions is at an all-time low. Blockchain technology offers a potential solution by providing an immutable, transparent ledger for votes.

Imagine a system where every citizen can verify that their vote was counted correctly, without compromising their privacy. This isn't science fiction; several countries are already piloting these systems.

Of course, security challenges remain. But the potential to restore faith in democracy makes this a path worth exploring.`,
            score: 0,
            comments: []
        },
        {
            id: 7,
            author: "Grace Quantum",
            avatar: "assets/dana.png",
            category: "technology",
            title: "Quantum Computing: The End of Encryption?",
            content: "We need to prepare for the post-quantum era. Current encryption standards will be obsolete within a decade.",
            fullContent: `Quantum computers are poised to break the encryption standards that secure the internet. Everything from banking data to national secrets could be exposed.

This isn't a distant threat. "Harvest now, decrypt later" attacks are already happening. We need to migrate to post-quantum cryptography (PQC) immediately.

The transition will be painful and expensive, but the alternative is a total collapse of digital security.`,
            score: 0,
            comments: []
        },
        {
            id: 8,
            author: "Henry Urban",
            avatar: "assets/bob.png",
            category: "society",
            title: "The Rise of Remote Work Communities",
            content: "Small towns are being revitalized by remote workers. This is a massive shift in demographics and local economies.",
            fullContent: `The "Zoom Town" phenomenon is real. Remote workers are fleeing expensive cities for smaller communities, bringing capital and vitality with them.

This shift is revitalizing main streets that have been dormant for decades. However, it also brings challenges, such as rising housing costs for locals.

We need policies that encourage this integration while protecting existing residents from displacement.`,
            score: 0,
            comments: []
        },
        {
            id: 9,
            author: "Ivy Garden",
            avatar: "assets/alice.png",
            category: "environment",
            title: "Urban Vertical Farming",
            content: "A solution to food deserts? Vertical farms are producing 10x the yield with 90% less water.",
            fullContent: `By 2050, 70% of the world's population will live in cities. Feeding them will require a revolution in agriculture. Vertical farming is that revolution.

By growing crops indoors in stacked layers, we can produce fresh produce year-round, right where it's consumed. This eliminates transportation emissions and drastically reduces water usage.

While energy costs remain high, advancements in LED efficiency are making this model increasingly viable.`,
            score: 0,
            comments: []
        }
    ],
    messages: [
        {
            id: 1,
            name: "Dr. Alice Walker",
            avatar: "assets/alice.png",
            lastMessage: "I appreciate your perspective on the carbon tax proposal.",
            time: "2m ago",
            health: 90
        },
        {
            id: 2,
            name: "Charlie Tech",
            avatar: "assets/charlie.png",
            lastMessage: "Let's discuss the AI ethics guidelines further.",
            time: "1h ago",
            health: 75
        },
        {
            id: 3,
            name: "Dana Economics",
            avatar: "assets/dana.png",
            lastMessage: "Do you have the source for that UBI study?",
            time: "3h ago",
            health: 85
        }
    ],
    userProfile: {
        name: "Christopher Weidner",
        avatar: "assets/alice.png", // Using existing asset for demo
        bio: "Digital rights advocate and constructive dialogue enthusiast.",
        civicScore: 88,
        avgSessionTime: "18m",
        contributions: 142,
        badge: "Bridge Builder",
        activity: [
            { type: "post", content: "Shared a perspective on Digital Privacy.", time: "2h ago" },
            { type: "comment", content: "Commented on 'The Future of AI Governance'", time: "5h ago" },
            { type: "badge", content: "Earned 'Insightful' badge", time: "1d ago" }
        ]
    },
    scrollVelocity: 0,
    isSaturated: false,
    activeTab: 'home',
    activeCategory: 'all',
    communities: [
        { id: 1, name: "Digital Rights Watch", members: 1250, desc: "Monitoring digital freedom across the EU.", icon: "visibility", joined: false },
        { id: 2, name: "Green Tech Alliance", members: 890, desc: "Innovating for a sustainable future.", icon: "eco", joined: true },
        { id: 3, name: "Civic Coders", members: 450, desc: "Building tools for democracy.", icon: "code", joined: false },
        { id: 4, name: "Policy Wonks", members: 320, desc: "Deep dives into legislation.", icon: "policy", joined: false }
    ],
    activeChat: null,
    chatMessages: {
        1: [
            { sender: "them", text: "I appreciate your perspective on the carbon tax proposal." },
            { sender: "me", text: "Thanks! I think it's the only viable path forward." }
        ],
        2: [
            { sender: "them", text: "Let's discuss the AI ethics guidelines further." }
        ],
        3: [
            { sender: "them", text: "Do you have the source for that UBI study?" }
        ]
    }
};

// DOM Elements
const els = {
    stopwatch: document.getElementById('stopwatch'),
    statusIndicator: document.getElementById('status-indicator'),
    body: document.body,
    feedContainer: document.getElementById('feed-container'),
    postInput: document.getElementById('post-input'),
    postBtn: document.getElementById('post-btn'),
    rightsStatus: document.getElementById('rights-status'),
    saturationOverlay: document.getElementById('saturation-overlay'),
    finalTime: document.getElementById('final-time')
};

// --- Navigation Logic ---
window.switchTab = function (tabName, element) {
    state.activeTab = tabName;

    // Update Tab Content (if exists)
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    const targetTab = document.getElementById(`tab-${tabName}`);
    if (targetTab) {
        targetTab.classList.add('active');
    } else {
        console.log(`Tab content for ${tabName} not implemented yet.`);
        if (tabName !== 'home') {
            const homeTab = document.getElementById('tab-home');
            if (homeTab) homeTab.classList.add('active');
        }
    }

    // Update Nav Active State
    document.querySelectorAll('.nav-links li').forEach(el => el.classList.remove('active'));
    if (element) {
        element.classList.add('active');
    }

    // Render specific tab content
    if (tabName === 'profile') renderProfile();
    if (tabName === 'messages') renderMessages();
    if (tabName === 'communities') renderCommunities();
    if (tabName === 'search') renderExplore();
};

function renderProfile() {
    const p = state.userProfile;
    document.getElementById('profile-name').textContent = p.name;
    document.getElementById('profile-bio').textContent = p.bio;
    document.querySelector('.profile-badge').textContent = p.badge;
    document.getElementById('stat-civic-score').textContent = p.civicScore;
    document.getElementById('stat-avg-session').textContent = p.avgSessionTime;
    document.getElementById('stat-contributions').textContent = p.contributions;

    const activityFeed = document.getElementById('profile-activity-feed');
    activityFeed.innerHTML = '';
    p.activity.forEach(act => {
        const item = document.createElement('div');
        item.className = 'message-item'; // Reusing message item style for simplicity
        item.style.cursor = 'default';
        item.innerHTML = `
            <div class="message-content">
                <div class="message-top">
                    <span class="message-name" style="font-size: 0.9rem;">${act.type.toUpperCase()}</span>
                    <span class="message-time">${act.time}</span>
                </div>
                <div class="message-preview" style="color: var(--text-primary);">${act.content}</div>
            </div>
        `;
        activityFeed.appendChild(item);
    });
}

function renderMessages() {
    const list = document.getElementById('messages-list');
    list.innerHTML = '';
    state.messages.forEach(msg => {
        const item = document.createElement('div');
        item.className = 'message-item';
        item.onclick = () => openChat(msg.id);
        item.innerHTML = `
            <img src="${msg.avatar}" class="message-avatar" alt="${msg.name}">
            <div class="message-content">
                <div class="message-top">
                    <span class="message-name">${msg.name}</span>
                    <span class="message-time">${msg.time}</span>
                </div>
                <div class="message-preview">${msg.lastMessage}</div>
            </div>
            <div class="message-health">
                <span class="health-label">Health</span>
                <div class="health-bar-container">
                    <div class="health-bar-fill" style="width: ${msg.health}%;"></div>
                </div>
            </div>
        `;
        list.appendChild(item);
    });
}

// --- Chat Logic ---
window.openChat = function (userId) {
    const user = state.messages.find(m => m.id === userId);
    if (!user) return;

    state.activeChat = userId;
    document.getElementById('chat-name').textContent = user.name;
    document.getElementById('chat-avatar').src = user.avatar;

    renderChatMessages();
    document.getElementById('chat-modal').classList.add('active');
};

window.closeChat = function () {
    document.getElementById('chat-modal').classList.remove('active');
    state.activeChat = null;
};

function renderChatMessages() {
    const container = document.getElementById('chat-messages');
    container.innerHTML = '';

    const messages = state.chatMessages[state.activeChat] || [];
    messages.forEach(msg => {
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble ${msg.sender === 'me' ? 'sent' : 'received'}`;
        bubble.textContent = msg.text;
        container.appendChild(bubble);
    });

    container.scrollTop = container.scrollHeight;
}

window.sendMessage = function () {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text || !state.activeChat) return;

    if (!state.chatMessages[state.activeChat]) state.chatMessages[state.activeChat] = [];

    // Add user message
    state.chatMessages[state.activeChat].push({ sender: 'me', text: text });
    input.value = '';
    renderChatMessages();

    // Simulate reply
    setTimeout(() => {
        if (state.activeChat) {
            state.chatMessages[state.activeChat].push({ sender: 'them', text: "That's an interesting point! I'd love to hear more." });
            renderChatMessages();
        }
    }, 1500);
};

// --- Communities Logic ---
function renderCommunities() {
    const list = document.getElementById('communities-list');
    list.className = 'communities-grid'; // Switch to grid layout
    list.innerHTML = '';

    state.communities.forEach(comm => {
        const card = document.createElement('div');
        card.className = 'community-card';
        card.innerHTML = `
            <div class="community-header">
                <div class="community-icon">
                    <span class="material-icons-outlined">${comm.icon}</span>
                </div>
                <div class="community-info">
                    <h4>${comm.name}</h4>
                    <span>${comm.members} Members</span>
                </div>
            </div>
            <div class="community-desc">${comm.desc}</div>
            <button class="join-btn ${comm.joined ? 'joined' : ''}" onclick="toggleJoin(${comm.id})">
                ${comm.joined ? 'Joined' : 'Join Community'}
            </button>
        `;
        list.appendChild(card);
    });
}

window.toggleJoin = function (id) {
    const comm = state.communities.find(c => c.id === id);
    if (comm) {
        comm.joined = !comm.joined;
        if (comm.joined) comm.members++; else comm.members--;
        renderCommunities();
    }
};

// --- Explore/Search Logic ---
function renderExplore() {
    const grid = document.querySelector('.explore-grid');
    grid.innerHTML = '';

    // Mock explore content
    const topics = ['Technology', 'Environment', 'Politics', 'Society', 'Science', 'Health', 'Education', 'Justice', 'Economy'];

    topics.forEach((topic, index) => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.style.backgroundColor = `hsl(${index * 40}, 50%, 20%)`; // Generate distinct colors
        item.style.display = 'flex';
        item.style.justifyContent = 'center';
        item.style.alignItems = 'center';
        item.style.color = '#fff';
        item.style.fontWeight = '600';
        item.textContent = topic;
        item.onclick = () => {
            alert(`Exploring topic: ${topic}`);
        };
        grid.appendChild(item);
    });

    // Search Filter
    const searchInput = document.querySelector('.search-bar input');
    searchInput.oninput = (e) => {
        const term = e.target.value.toLowerCase();
        const items = grid.querySelectorAll('.grid-item');
        items.forEach(item => {
            if (item.textContent.toLowerCase().includes(term)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    };
}

window.filterCategory = function (category, element) {
    state.activeCategory = category;

    // Update UI
    document.querySelectorAll('.cat-btn').forEach(el => el.classList.remove('active'));
    element.classList.add('active');

    renderFeed();
};

window.addComment = function (postId) {
    const input = document.getElementById(`comment-input-${postId}`);
    const content = input.value;
    if (!content) return;

    const post = state.posts.find(p => p.id === postId);
    if (post) {
        post.comments.push({
            author: "You",
            content: content
        });
        renderFeed();
    }
};

window.openArticle = function (postId) {
    const post = state.posts.find(p => p.id === postId);
    if (!post) return;

    document.getElementById('modal-title').textContent = post.title;
    document.getElementById('modal-author').textContent = post.author;
    document.getElementById('modal-category').textContent = post.category.charAt(0).toUpperCase() + post.category.slice(1);

    // Use fullContent if available, otherwise fallback to content
    const content = post.fullContent || post.content;
    document.getElementById('modal-body').textContent = content;

    document.getElementById('article-modal').classList.add('active');
};

window.closeArticle = function () {
    document.getElementById('article-modal').classList.remove('active');
};

// Close modal when clicking outside
document.getElementById('article-modal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeArticle();
    }
});

window.createPost = function () {
    const input = document.getElementById('post-input');
    const content = input.value;
    if (!content) return;

    const score = calculateScore(content);
    const rating = getStarRating(score);

    // Blocking Logic for Low Quality Posts
    if (rating.stars <= 1) {
        alert(`⚠️ Post Blocked: Low Constructiveness Score (${score}/10)\n\nYour post was flagged as Toxic or Unhelpful (1 Star). Please revise it to be more constructive, respectful, or solution-oriented.`);
        return;
    }

    const newPost = {
        id: state.posts.length + 1,
        author: "You", // Current user
        avatar: "assets/alice.png", // Placeholder for user avatar
        category: "society", // Default category
        title: "New Perspective", // Placeholder title
        content: content,
        score: score,
        comments: []
    };

    state.posts.unshift(newPost); // Add to top
    input.value = ''; // Clear input

    renderFeed();

    // Success Alert
    alert(`✅ Post Published!\n\nScore: ${score}/10\nRating: ${rating.stars} Stars (${rating.label})`);
};

// Bind Post Button & Input Logic
if (els.postBtn && els.postInput) {
    els.postBtn.onclick = createPost;

    els.postInput.addEventListener('input', function () {
        els.postBtn.disabled = this.value.trim().length === 0;
    });
}

// --- Pillar 2: Transparency Interface (Timer) ---
function startTimer() {
    setInterval(() => {
        if (state.isSaturated) return;

        state.sessionTimeSeconds += 1;

        const minutes = Math.floor(state.sessionTimeSeconds / 60);
        const seconds = state.sessionTimeSeconds % 60;

        const displayMin = String(minutes).padStart(2, '0');
        const displaySec = String(seconds).padStart(2, '0');
        els.stopwatch.textContent = `${displayMin}:${displaySec}`;

        updateInterfaceState(minutes);
    }, 1000);
}

function updateInterfaceState(minutes) {
    els.body.classList.remove('state-amber', 'state-red');

    if (minutes >= 60) {
        els.body.classList.add('state-red');
        els.body.style.cursor = "progress";
    } else if (minutes >= 20) {
        els.body.classList.add('state-amber');
        els.body.style.cursor = "default";
    } else {
        els.body.style.cursor = "default";
    }
}

// --- Pillar 3: Solution-Oriented Ranking (AI Evaluation) ---
function calculateScore(content) {
    const contentLower = content.toLowerCase();

    // Keywords
    const usefulnessTokens = ["solution", "example", "source", "because", "therefore", "recommend", "consider"];
    const sincerityTokens = ["i feel", "i believe", "thank you", "understand", "appreciate", "experience"];
    const toxicTokens = ["stupid", "idiot", "shill", "fake", "liar", "shut up"];

    // 1. Calculate Usefulness (0-10)
    let usefulness = 0;
    if (content.length > 50) usefulness += 2;
    if (content.length > 100) usefulness += 1;

    const usefulnessHits = usefulnessTokens.filter(t => contentLower.includes(t)).length;
    usefulness += usefulnessHits * 2;
    usefulness = Math.min(10, usefulness);

    // 2. Calculate Sincerity (0-10)
    let sincerity = 5; // Start neutral

    const sincerityHits = sincerityTokens.filter(t => contentLower.includes(t)).length;
    sincerity += sincerityHits * 2;

    const toxicHits = toxicTokens.filter(t => contentLower.includes(t)).length;
    sincerity -= toxicHits * 4;

    if (content === content.toUpperCase() && content.length > 10) sincerity -= 3; // All caps penalty

    sincerity = Math.max(0, Math.min(10, sincerity));

    // 3. Final Score
    // Formula: (Usefulness * 0.6) + (Sincerity * 0.4)
    const finalScore = (usefulness * 0.6) + (sincerity * 0.4);

    return parseFloat(finalScore.toFixed(1));
}

function getStarRating(score) {
    let stars = 0;
    let label = "Neutral";
    let color = "var(--text-secondary)";

    if (score >= 8) { stars = 5; label = "Bridge Builder"; color = "var(--civic-blue)"; }
    else if (score >= 6) { stars = 4; label = "Insightful"; color = "#27AE60"; }
    else if (score >= 4) { stars = 3; label = "Constructive"; color = "#27AE60"; }
    else if (score >= 2) { stars = 2; label = "Neutral"; color = "var(--text-secondary)"; }
    else { stars = 1; label = "Toxic / Unhelpful"; color = "var(--alert-red)"; }

    return { stars, label, color };
}

function renderFeed() {
    state.posts.forEach(p => p.score = calculateScore(p.content));

    // Filter
    let displayPosts = state.posts;
    if (state.activeCategory !== 'all') {
        displayPosts = state.posts.filter(p => p.category === state.activeCategory);
    }

    // Sort
    const sortedPosts = [...displayPosts].sort((a, b) => b.score - a.score);

    els.feedContainer.innerHTML = '';
    sortedPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = `post-card ${post.score > 3 ? 'high-score' : ''}`;

        const rating = getStarRating(post.score);
        let starHtml = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating.stars) {
                starHtml += `<span class="material-icons-outlined" style="font-size: 16px; color: ${rating.color};">star</span>`;
            } else {
                starHtml += `<span class="material-icons-outlined" style="font-size: 16px; color: #444;">star_border</span>`;
            }
        }

        // Render Comments
        let commentsHtml = '';
        post.comments.forEach(c => {
            commentsHtml += `<div class="comment"><b>${c.author}:</b> ${c.content}</div>`;
        });

        card.innerHTML = `
            <div class="post-header">
                <div class="post-user-info">
                    <img src="${post.avatar}" class="avatar-small" alt="${post.author}">
                    <span class="username">${post.author}</span>
                    <span style="font-size: 0.8rem; color: #666;">• ${post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
                </div>
                <div class="rating-badge" style="display: flex; flex-direction: column; align-items: flex-end;">
                    <div style="display: flex;">${starHtml}</div>
                    <span style="font-size: 0.7rem; color: ${rating.color}; font-weight: 500;">${rating.label}</span>
                </div>
            </div>
            
            <div class="article-title">${post.title}</div>
            <div class="article-summary">${post.content}</div>
            
            <a class="read-more-btn" onclick="openArticle(${post.id})">
                Read Full Article <span class="material-icons-outlined" style="font-size: 16px;">arrow_forward</span>
            </a>

            <div class="post-actions">
                <!-- Like button removed -->
                <span class="material-icons-outlined" onclick="alert('Open comments (Mock)')">chat_bubble_outline</span>
                <span class="material-icons-outlined" onclick="alert('Share this post (Mock)')">share</span>
                <span class="material-icons-outlined" style="margin-left: auto;" onclick="alert('Bookmark this post (Mock)')">bookmark_border</span>
            </div>

            <div class="comments-section">
                <div class="comments-list">${commentsHtml}</div>
                <div class="comment-input-row">
                    <input type="text" id="comment-input-${post.id}" placeholder="Add a constructive comment..." class="comment-input">
                    <button onclick="addComment(${post.id})" class="comment-btn">Post</button>
                </div>
            </div>
        `;
        els.feedContainer.appendChild(card);
    });
}

// --- Pillar 4: EU Rights Filter ---
function checkRights(content) {
    const lowerContent = content.toLowerCase();
    const violation = CONFIG.EU_RIGHTS_VIOLATIONS.find(v => lowerContent.includes(v));
    const isHeated = content.includes("!") || content.toUpperCase() === content;

    if (violation) {
        if (isHeated) {
            return { status: "BLOCKED", msg: "Article 1 Violation (Human Dignity)", color: "#ED4956" };
        } else {
            return { status: "FLAGGED", msg: "Potential Rights Violation", color: "#F2C94C" };
        }
    }
    return { status: "ALLOWED", msg: "EU Rights Check: Passed", color: "#0095F6" };
}

els.postInput.addEventListener('input', (e) => {
    const content = e.target.value;
    const check = checkRights(content);

    const dot = els.rightsStatus.querySelector('.status-dot');
    const text = els.rightsStatus.querySelector('.status-text');

    dot.style.backgroundColor = check.color;
    text.textContent = check.msg;
    text.style.color = check.color;

    if (check.status === "BLOCKED") {
        els.postBtn.disabled = true;
        els.postBtn.style.color = "var(--text-secondary)";
    } else {
        els.postBtn.disabled = content.length === 0;
        els.postBtn.style.color = "var(--button-blue)";
    }
});

els.postBtn.addEventListener('click', () => {
    const content = els.postInput.value;
    if (!content) return;

    state.posts.unshift({
        id: Date.now(),
        author: "you",
        content: content,
        score: 0,
        image: "image"
    });

    renderFeed();
    els.postInput.value = '';
    els.postBtn.disabled = true;

    const dot = els.rightsStatus.querySelector('.status-dot');
    const text = els.rightsStatus.querySelector('.status-text');
    dot.style.backgroundColor = "var(--text-secondary)";
    text.textContent = "EU Rights Check: Passive";
    text.style.color = "var(--text-secondary)";
});

// --- Pillar 1: Saturation Point ---
let lastScrollY = window.scrollY;
let lastTime = Date.now();
let velocities = [];

window.addEventListener('scroll', () => {
    const now = Date.now();
    const dt = now - lastTime;
    if (dt < 100) return;

    const dy = Math.abs(window.scrollY - lastScrollY);
    const velocity = (dy / dt) * 1000;

    velocities.push(velocity);
    if (velocities.length > 10) velocities.shift();

    const avgVelocity = velocities.reduce((a, b) => a + b, 0) / velocities.length;

    if (avgVelocity > 2500 && !state.isSaturated) {
        triggerSaturation();
    }

    lastScrollY = window.scrollY;
    lastTime = now;
});

function triggerSaturation() {
    state.isSaturated = true;
    els.finalTime.textContent = `${state.sessionTimeSeconds}m`;
    els.saturationOverlay.classList.add('active');
}

// Init
renderFeed();
startTimer();

// --- Settings Logic ---
const settingsEls = {
    discourseWeight: document.getElementById('discourse-weight'),
    saturationSensitivity: document.getElementById('saturation-sensitivity'),
    strictFilter: document.getElementById('strict-filter'),
    shareData: document.getElementById('share-data')
};

// Initialize Settings
if (settingsEls.discourseWeight) {
    settingsEls.discourseWeight.addEventListener('input', (e) => {
        // In a real app, this would adjust the weighting algorithm
        console.log(`Discourse Weight set to: ${e.target.value}`);
    });
}

if (settingsEls.saturationSensitivity) {
    settingsEls.saturationSensitivity.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val === 'low') CONFIG.SATURATION_THRESHOLD_VELOCITY = 4000;
        if (val === 'medium') CONFIG.SATURATION_THRESHOLD_VELOCITY = 2500;
        if (val === 'high') CONFIG.SATURATION_THRESHOLD_VELOCITY = 1000;
        console.log(`Saturation Threshold updated to: ${CONFIG.SATURATION_THRESHOLD_VELOCITY}`);
    });
}

if (settingsEls.strictFilter) {
    settingsEls.strictFilter.addEventListener('change', (e) => {
        console.log(`Strict Filter: ${e.target.checked ? 'ON' : 'OFF'}`);
        // Logic to toggle strict filtering would go here
    });
}

window.resetSimulation = function () {
    state.sessionTimeSeconds = 0;
    state.isSaturated = false;
    state.scrollVelocity = 0;
    velocities = [];

    // Reset UI
    els.body.classList.remove('state-amber', 'state-red');
    els.body.style.cursor = "default";
    els.saturationOverlay.classList.remove('active');
    els.stopwatch.textContent = "00:00";

    alert("Simulation has been reset.");
};

// --- Education Hub ---
// --- Education Hub ---
window.playVideo = function (videoId) {
    const titles = {
        'rights': 'Human Rights 101',
        'discuss': 'How to Discuss Constructively',
        'bridge': 'Bridging Divides'
    };

    document.getElementById('video-title').textContent = titles[videoId];
    document.getElementById('video-modal').classList.add('active');
};

window.closeVideo = function () {
    document.getElementById('video-modal').classList.remove('active');
};

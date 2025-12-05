# Directive: The Civic Grid Logic Simulation

## Objective
Simulate the backend logic for 'The Civic Grid', a social media platform prioritizing Constructive Discourse and Digital Well-being over engagement.

## Core Pillars & Logic Flow

### 1. The Saturation Point (The Anti-Feed)
**Goal:** Detect "doomscrolling" and gracefully terminate the session.
**Inputs:** `ScrollVelocity` (pixels/sec), `ContentInteractionTime` (ms per post), `SessionDuration`.
**Logic:**
1.  Calculate `AbsorptionRate`: Average time spent on the last 10 posts.
2.  Monitor `ScrollVelocity`: If velocity exceeds `Threshold_V` (indicating skimming) for > 3 minutes.
3.  **Decision:**
    *   IF `AbsorptionRate` < 2s AND `ScrollVelocity` > `High`: Trigger **Saturation Event**.
**Action:**
*   **Phase 1 (Warning):** Desaturate UI colors by 50%.
*   **Phase 2 (Limit):** Apply "Scroll Friction" (physically slow down scrolling).
*   **Phase 3 (Shutdown):** Display "Daily Saturation Reached" summary card. Lock feed refresh for 4 hours.

### 2. The Transparency Interface (The Stopwatch)
**Goal:** Make time usage an active, tangible constraint.
**Inputs:** `CurrentSessionTime`.
**Logic:**
*   **0-15 Minutes (Green Zone):**
    *   UI: Standard "Civic Blue".
    *   Latency: 0ms (Snappy).
*   **15-30 Minutes (Amber Zone):**
    *   UI: Shifts to "Caution Amber".
    *   Latency: Inject 200ms delay on load events (simulating "heavy" information).
*   **30+ Minutes (Red Zone):**
    *   UI: Shifts to "Alert Red". Background pulse animation.
    *   Latency: Inject 500ms delay.
    *   Overlay: "Time Dilation" ripple effect on touch interactions.

### 3. Solution-Oriented Ranking System (AI Evaluation)
**Goal:** Prioritize content that is both **Useful** and **Sincere**, moving beyond simple engagement metrics.

**Logic:**
The system evaluates every post using a simulated AI scoring model based on two core metrics:

1.  **Usefulness (0-10)**:
    *   Does the post offer a solution?
    *   Does it provide actionable advice?
    *   Does it cite sources or provide evidence?
    *   *Keywords/Patterns:* "Solution:", "For example", "Source:", bullet points, reasonable length (>50 chars).

2.  **Sincerity (0-10)**:
    *   Is the tone respectful?
    *   Does it use personal ("I feel", "In my experience") rather than absolute language?
    *   Is it free of toxic or aggressive phrasing?
    *   *Keywords/Patterns:* "I believe", "Thank you", "I understand", lack of ALL CAPS, lack of insults.

**Scoring Formula:**
`Constructiveness Score = (Usefulness * 0.6) + (Sincerity * 0.4)`

**Rating Scale (0-10 Score -> 1-5 Stars):**
*   **9-10**: ★★★★★ (Bridge Builder) - Highly constructive, solution-oriented.
*   **7-8**: ★★★★☆ (Insightful) - Good contribution, sincere.
*   **5-6**: ★★★☆☆ (Constructive) - Decent, but maybe lacks depth.
*   **3-4**: ★★☆☆☆ (Neutral) - Low effort or generic.
*   **0-2**: ★☆☆☆☆ (Toxic/Unhelpful) - Harmful, aggressive, or spam.

### 4. EU Rights Filter
**Goal:** Moderate based on the EU Charter of Fundamental Rights.
**Inputs:** Content text/media.
**Reference:** EU Charter Articles (1: Dignity, 8: Data Protection, 21: Non-discrimination).
**Logic:**
1.  **Vector Comparison:** Compare content embedding against "Rights Violation" embeddings.
2.  **Nuance Check:**
    *   IF `Sentiment` == "High Anger" AND `RightsViolation` == "None" -> **ALLOW** (Political Expression).
    *   IF `Sentiment` == "Neutral" AND `RightsViolation` == "High" (e.g., calm hate speech) -> **BLOCK**.
3.  **Action:**
    *   **Flag:** "This post may violate Article 21 (Non-discrimination)."
    *   **Deprioritize:** Reduce visibility by 90%.

## Execution Instructions
Run `execution/simulate_civic_grid.py` to process a stream of mock user events and demonstrate these logic gates in action.

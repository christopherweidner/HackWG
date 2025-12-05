import time
import random

class CivicGridSimulation:
    def __init__(self):
        self.session_start = time.time()
        self.scroll_velocity_history = []
        self.posts_viewed = 0
        self.saturation_triggered = False
        
        # Mock AI Evaluation Keywords
        self.usefulness_tokens = ["solution", "example", "source", "because", "therefore", "recommend"]
        self.sincerity_tokens = ["i feel", "i believe", "thank you", "understand", "appreciate", "experience"]
        self.toxic_tokens = ["stupid", "idiot", "shill", "fake", "liar", "shut up"]
        self.eu_rights_violations = ["discrim", "incit", "filth", "subhuman"]

    def get_session_duration_minutes(self):
        # Simulating time passing faster for demonstration
        # In real app: return (time.time() - self.session_start) / 60
        return self.posts_viewed * 2  # Assume 2 mins per "tick" of viewing posts

    # --- Pillar 1: Saturation Point ---
    def check_saturation(self, scroll_velocity):
        self.scroll_velocity_history.append(scroll_velocity)
        if len(self.scroll_velocity_history) > 5:
            self.scroll_velocity_history.pop(0)
        
        avg_velocity = sum(self.scroll_velocity_history) / len(self.scroll_velocity_history)
        
        print(f"[Saturation Monitor] Velocity: {scroll_velocity}px/s | Avg: {avg_velocity:.1f}px/s")
        
        if avg_velocity > 1000: # High velocity threshold
            print("   -> ALERT: Doomscrolling detected (High Velocity).")
            return True
        return False

    # --- Pillar 2: Transparency Interface ---
    def get_interface_state(self):
        duration = self.get_session_duration_minutes()
        print(f"[Stopwatch] Session Duration: {duration} minutes")
        
        if duration < 15:
            return {"Color": "Civic Blue", "Latency": "0ms", "Status": "Healthy"}
        elif duration < 30:
            return {"Color": "Caution Amber", "Latency": "200ms", "Status": "Warning"}
        else:
            return {"Color": "Alert Red", "Latency": "500ms", "Status": "CRITICAL - Time Dilation Active"}

    # --- Pillar 3: Solution-Oriented Ranking (AI Evaluation) ---
    def evaluate_post_ai(self, content):
        content_lower = content.lower()
        words = content_lower.split()
        
        # 1. Calculate Usefulness (0-10)
        usefulness = 0
        if len(content) > 50: usefulness += 2
        if len(content) > 100: usefulness += 1
        
        usefulness_hits = sum(1 for t in self.usefulness_tokens if t in content_lower)
        usefulness += usefulness_hits * 2
        usefulness = min(10, usefulness) # Cap at 10

        # 2. Calculate Sincerity (0-10)
        sincerity = 5 # Start neutral
        
        sincerity_hits = sum(1 for t in self.sincerity_tokens if t in content_lower)
        sincerity += sincerity_hits * 2
        
        toxic_hits = sum(1 for t in self.toxic_tokens if t in content_lower)
        sincerity -= toxic_hits * 4
        
        if content.isupper(): sincerity -= 3 # All caps penalty
        
        sincerity = max(0, min(10, sincerity)) # Clamp 0-10

        # 3. Final Score & Star Rating
        # Formula: (Usefulness * 0.6) + (Sincerity * 0.4)
        final_score = (usefulness * 0.6) + (sincerity * 0.4)
        
        # Map to Stars
        stars = 1
        if final_score >= 8: stars = 5
        elif final_score >= 6: stars = 4
        elif final_score >= 4: stars = 3
        elif final_score >= 2: stars = 2
        
        print(f"[AI Eval] '{content[:20]}...' | Use: {usefulness}, Sin: {sincerity} -> Score: {final_score:.1f} ({stars} Stars)")
        return final_score, stars

    # --- Pillar 4: EU Rights Filter ---
    def eu_rights_check(self, content, sentiment_score):
        # Mock Logic: Check for violation keywords
        violation_detected = any(v in content.lower() for v in self.eu_rights_violations)
        
        print(f"[EU Filter] Checking: '{content[:30]}...' | Sentiment: {sentiment_score}")
        
        if violation_detected:
            if sentiment_score > 0.8: # High anger/intensity
                print("   -> BLOCK: Article 1 Violation (Human Dignity) + High Intensity")
                return "BLOCKED"
            else:
                print("   -> FLAG: Potential Rights Violation (Review Needed)")
                return "FLAGGED"
        
        if sentiment_score > 0.9:
            print("   -> ALLOW: High Intensity Political Expression (No Rights Violation)")
            return "ALLOWED (Heated)"
            
        return "ALLOWED"

def run_simulation():
    sim = CivicGridSimulation()
    
    print("--- SIMULATION START: The Civic Grid ---")
    print("Objective: Maximize Constructive Discourse, Minimize Doomscrolling\n")

    # Scenario 1: User Browsing (Transparency & Saturation)
    print("\n--- SCENARIO 1: User Session Progression ---")
    velocities = [200, 300, 500, 800, 1200, 1500] # Increasing scroll speed
    
    for v in velocities:
        sim.posts_viewed += 2 # Advance time
        
        # Check Interface State
        ui_state = sim.get_interface_state()
        print(f"   UI State: {ui_state}")
        
        # Check Saturation
        if sim.check_saturation(v):
            print("   !!! SATURATION POINT REACHED: Fading UI, Locking Feed. !!!")
            break
        print("-" * 20)

    # Scenario 2: Content Ranking (AI Evaluation)
    print("\n--- SCENARIO 2: AI Content Evaluation ---")
    posts = [
        "YOU ARE AN IDIOT AND THIS IS STUPID!!!", # Toxic
        "lol", # Low effort
        "I understand your point, but I feel we should consider the cost. For example, in 2020...", # Constructive
        "This is a fake solution.", # Low sincerity
        "Thank you for sharing. I believe this is a great start, and I recommend we also look at the data source." # High usefulness & sincerity
    ]
    
    ranked_posts = []
    for p in posts:
        score, stars = sim.evaluate_post_ai(p)
        ranked_posts.append((score, stars, p))
    
    ranked_posts.sort(key=lambda x: x[0], reverse=True)
    print("\nFinal Feed Order:")
    for score, stars, p in ranked_posts:
        print(f"[{stars} Stars | Score: {score:.1f}] {p}")

    # Scenario 3: EU Rights Filter
    print("\n--- SCENARIO 3: EU Rights Filter ---")
    contents = [
        ("I hate this government policy! It's ruining us!", 0.95), # Heated, no violation
        ("We should discriminate against them because of their origin.", 0.2), # Calm, violation
        ("You are subhuman filth.", 0.9) # Heated, violation
    ]
    
    for text, sentiment in contents:
        sim.eu_rights_check(text, sentiment)

if __name__ == "__main__":
    run_simulation()

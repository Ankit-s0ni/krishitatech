# Image Generation Master Plan - Krishita Tech

This document contains highly detailed, production-ready prompts for generating premium assets for the Krishita Tech website. These prompts are designed for state-of-the-art AI image generators (Midjourney v6, DALL-E 3, Stable Diffusion XL) to achieve a unified "Digital Legends" aesthetic.

## 🎨 Global Aesthetic & Art Direction
*   **Core Theme:** "Limitless Digital Futures" & "Tangible Technology".
*   **Color Palette:**
    *   **Primary Backgrounds:** Deep Obsidian (`#050505`), Matte Charcoal, Dark Slate.
    *   **Accents:** Electric Cyan (`#00f0ff`), Cobalt Blue (`#3b82f6`), Neon Violet, Polished Silver/Chrome.
*   **Lighting Style:** Cinematic Rim Lighting, Volumetric Fog, Bioluminescent Glows, Soft Global Illumination, High Contrast Shadows (Chiaroscuro).
*   **Visual Style:** Hyper-realistic 3D Render (Octane/Redshift), Clean Minimalist Composition, Industrial Design Influences, Glassmorphism, Liquid Metal textures.

---

## 🏗️ 1. Hero Section
**File Path:** `src/components/home/Hero.tsx`
**Usage:** Main landing background. Needs to be abstract enough for text overlay but striking enough to wow.

| Image ID | Dimensions | Context | Detailed Prompt |
| :--- | :--- | :--- | :--- |
| `hero-bg` | **1920x1080px** (16:9) | **The Void of Creation.** A digital universe where ideas are born. | **Prompt:** A wide, cinematic establishment shot of an abstract digital nebula in a deep void. Millions of fine, glowing blue fiber-optic strands weaving together to form a subtle, undulating landscape in the distance. In the foreground, floating obsidian geometric monoliths with matte textures reflect the soft ambient blue light. Deep depth of field with foreground elements slightly blurred. Atmosphere is thick with digital dust particles caught in shafts of volumetric light. 8k resolution, photorealistic, octane render, unreal engine 5, dark mode aesthetic, minimal, mysterious, awe-inspiring. |

---

## 🛠️ 2. Services Slide
**File Path:** `src/components/home/ServicesSlide.tsx`
**Dimensions:** **900x1200px** (3:4) - *Portrait Mode*

### 1. Service: Brand Identity
*   **Concept:** The unique fingerprint of a business. Essence. Core.
*   **Prompt:**
    > Extreme close-up macro photography of a stylized, translucent glass fingerprint hovering in a vacuum. The ridges of the fingerprint are illuminated from within by a coursing neon blue energy. The glass has imperfections, tiny scratches, and refractions that prove its realism. Background is a gradient of deep charcoal to black. Sharp focus on the center ridges, falling off into creamy bokeh. 8k, raytracing, refraction, caustic lighting, high-tech identity concept.

### 2. Service: Web Experience
*   **Concept:** The portal to another world. Immersion.
*   **Prompt:**
    > A surreal, floating doorway frame made of polished liquid chrome standing upright in a dark, misty barren landscape. Through the doorway, we see a glimpse of a vibrant, hyper-futuristic wireframe city made of glowing cyan and magenta laser lines. The contrast between the dark, textured rock of the landscape and the perfect digital clarity of the city inside the portal is stark. Cinematic low-angle shot, looking up at the portal. 3D render, surrealism, sci-fi, portal to the digital world.

### 3. Service: Content Creation
*   **Concept:** The lens that captures the story. Clarity. Vision.
*   **Prompt:**
    > A photorealistic top-down flat lay of high-end creative equipment arranged meticulously on a textured dark slate surface. Centerpiece is a RED Komodo cinema camera with a large matte box lens. Surrounding it: a vintage light meter, a pristine glass prism refracting a beam of white light into a rainbow, and a black fountain pen. Dramatic, moody lighting casting long, soft shadows. The camera lens reflects a studio softbox light. 4k, product photography, studio lighting, sharp details.

### 4. Service: Growth Marketing
*   **Concept:** Upward trajectory. Exponential potential. Energy.
*   **Prompt:**
    > A dynamic 3D abstract realization of data flow. Swirling streams of gold and electric blue particles spiraling upwards in a tornado-like formation against a pitch-black background. The particles are connected by thin, glowing lines, resembling a neural network or constellation. The motion is frozen in time, capturing the high speed and energy of the data. High contrast, motion blur on the edges, crisp center focus, visualization of wealth and growth, majestic, financial tech aesthetic.

---

## 💼 3. Portfolio Grid
**File Path:** `src/components/work/PortfolioGrid.tsx`
**Dimensions:** **1920x1080px** (16:9) - *Landscape Mode*

### 1. Project: Neon Dreams (Brand Identity)
*   **Concept:** Cyberpunk Noir. Nightlife. Vibration.
*   **Prompt:**
    > A cinematic street-level shot of a futuristic cyberpunk alleyway at night. Rain has just stopped, leaving slick, wet asphalt reflecting the vibrant pink and turquoise neon signs from the shops above. A solitary figure in a trench coat is silhouetted against the light in the distance. Steam rises from a vent. The scene is gritty but aesthetically polished, with a focus on color contrast and mood. Blade Runner 2049 inspiration, anamorphic lens flare, film grain, photorealistic.

### 2. Project: Tech Fwd (Web Development)
*   **Concept:** The Heart of the Machine. Processing Power.
*   **Prompt:**
    > Extreme macro shot of a futuristic quantum processor chip. The chip is a complex city of gold connecting pins and black silicone capacitors. In the center, a pulsating blue core emits a soft glow, illuminating the surrounding circuitry. The texture of the metal is brushed aluminum. Shallow depth of field, focusing strictly on the glowing core. Technological sophistication, hardware, computing power, 8k texture quality.

### 3. Project: Urban Flow (Campaign)
*   **Concept:** Movement. Agility. The Concrete Jungle.
*   **Prompt:**
    > An action-freeze shot of a parkour athlete mid-air, leaping across a gap between two brutalist concrete buildings. The sun is low, creating long, dramatic shadows and a golden hour glow that highlights the texture of the concrete. The athlete is wearing modern streetwear. The composition is dynamic, diagonal lines leading the eye across the frame. High shutter speed, razor-sharp focus on the subject, motion, energy, urban lifestyle photography.

### 4. Project: Eco State (Strategy)
*   **Concept:** Solarpunk. Biophilic Design. Harmony.
*   **Prompt:**
    > A utopian architectural concept visualization of a "forest skyscraper." The building is made of glass and sustainable timber, with lush green vertical gardens cascading down every balcony. Soft, warm sunlight filters through the leaves, creating dappled shadows. Birds fly in the distance. The sky is a clear, optimistic blue. The image conveys peace, sustainability, and high-tech living. Photorealistic architectural render, archviz, corona renderer, bright and airy.

---

## 👥 4. Team Grid (Interactive)
**File Path:** `src/components/about/TeamGrid.tsx`
**Dimensions:** **900x1200px** (3:4) - *Portrait Mode*

### 1. Alex Rivera (Creative Director)
*   **Pro State (The Visionary):**
    > **Prompt:** Studio headshot of a Hispanic male in his mid-30s, short boxed beard, wearing a high-end black turtleneck. He is looking slightly off-camera with a contemplative, serious expression. Lighting is "Rembrandt" style—dramatic, with one side of the face in shadow. Background is a dark grey textured canvas. Black and white photography, high contrast, sharp details, resemblance to a visionary architect.
*   **Fun State (The Gamer):**
    > **Prompt:** Color photography. Alex Rivera laughing joyfully while holding a vintage arcade joystick controller. He is wearing a colorful graphic t-shirt. The background is a vibrant blur of arcade cabinet lights—pinks, greens, and purples. He is wearing oversized colorful headphones around his neck. Energetic, playful, candid moment, shallow depth of field.
    
### 2. Sarah Jenkins (Lead Strategist)
*   **Pro State (The Mastermind):**
    > **Prompt:** Studio portrait of a Black woman in her late 20s, hair styled in sleek braids, wearing a structured navy blue blazer and white blouse. She looks directly into the lens with a gaze of intense focus and confidence. Soft, even lighting (Butterfly lighting) that highlights her features. Background is a blurred modern glass office interior. Professional, corporate leader, intelligent, trustworthy.
*   **Fun State (The Explorer):**
    > **Prompt:** Sarah wearing a retro-futuristic silver space suit helmet (visor open), smiling broadly. She is holding a toy ray gun in a playful "Charlie's Angels" pose. Background is a synthesized galaxy of stars and nebula clouds in shades of deep violet and blue. Cinematic lighting, whimsical, adventurous, movie poster aesthetic.

### 3. David Chen (Tech Lead)
*   **Pro State (The Architect):**
    > **Prompt:** Waist-up portrait of an Asian male in his early 30s, wearing thick-rimmed glasses and a smart-casual grey hoodie under a charcoal jacket. He is typing on a laptop (out of frame), looking intently at a screen. The reflection of lines of green code is subtly visible in his glasses. Lighting is moody, coming primarily from the blue glow of a monitor. Dark room environment. Hacker, coder, focused, intense.
*   **Fun State (The Cat Dad):**
    > **Prompt:** David sitting on a comfortable yellow beanbag chair, completely covered in fluffy cats of different breeds. He is holding one cat up like the "Lion King" scene and grinning. He wears a t-shirt that says "I write code so my cat can eat better." Warm, homey living room lighting, golden hour sun streaming in. Wholesome, funny, chaotic good energy.

---

## 🔍 5. Service Deep Dive (Headers)
**File Path:** `src/components/services/ServiceDeepDive.tsx`
**Dimensions:** **1920x600px** (Panoramic 3:1)

### 1. Paid Media (Precision)
*   **Prompt:**
    > A futuristic HUD (Heads Up Display) interface floating in a dark 3D space. The interface displays complex targeting reticles, real-time stock market graphs, and global heat maps. The aesthetics are military-grade tactical tech: thin neon green lines, transparent glass panels, and data scrolling rapidly. Focus is on a central "Target Locked" icon. 8k, UI design, FUI (Fantasy User Interface), cybernetic, precision.

### 2. Content Creation (Production)
*   **Prompt:**
    > A wide cinematic shot of a film production set in a large studio. In the center, a camera crew is silhouette against a massive green screen that is glowing brightly. Large studio lights (fresnels and softboxes) stand on C-stands around the periphery. Cables snake across the floor. Atmospheric haze/fog fills the air, catching the beams of light. The feeling of a blockbuster movie being made. Behind the scenes, expansive, professional.

### 3. Brand Identity (The Workshop)
*   **Prompt:**
    > A panoramic view of a chaotic but inspiring designer's workbench. Scraps of paper with sketched logos, Pantone color swatch books fanned out, tablets with digital drawings, spilled ink, and a cup of coffee. The lighting is warm and comes from a desk lamp, casting long shadows. It feels tactile, analog, and creative. A mix of physical media and digital tools. Top-down view or slight angle. Texture-heavy, artistic.

### 4. Web & Tech (The Server Core)
*   **Prompt:**
    > An infinite symmetry shot down the corridor of a sci-fi data center. Rows of towering black server racks line both sides, pulsating with synchronized blue and white LED status lights. The floor is highly reflective polished white epoxy, mirroring the lights perfectly. The perspective leads to a vanishing point of pure white light. Clean, sterile, powerful, advanced infrastructure, cloud computing, 8k render.

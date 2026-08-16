\# INTERACTION \& MOTION SYSTEM

\# Premium Interactive Renovation Website



\---



\# 01 — PURPOSE



This document defines the motion, scrolling, interaction and transition system for the entire website.



Motion is a core part of the product experience.



The website must NOT behave like a static website with animations added afterward.



The interface should feel responsive to the user's movement.



The user's scroll position should continuously influence the visual state of important sections.



The intended feeling is:



" I am moving through the website."



not:



" I am scrolling past animated sections."



\---



\# 02 — PRIMARY MOTION PRINCIPLE



\## REACTIVE SCROLLING IS NON-NEGOTIABLE



Reactive scrolling means that the visual state of the website is continuously connected to scroll progress.



Do not rely primarily on:



\- Scroll into viewport

\- Trigger animation

\- Animation finishes

\- Element becomes static



That is only an entrance animation.



The website must contain genuine scroll-linked interactions.



Examples:



Scroll progress

→ image position changes



Scroll progress

→ image scale changes



Scroll progress

→ typography position changes



Scroll progress

→ image clipping changes



Scroll progress

→ background color transitions



Scroll progress

→ horizontal gallery moves



Scroll progress

→ process stage changes



Scroll progress

→ project information changes



Scroll progress

→ section progress changes



\---



\# 03 — MOTION HIERARCHY



Motion should have three levels.



\## LEVEL 01 — MICRO INTERACTION



Used for small UI interactions.



Examples:



\- Button hover

\- Link hover

\- Navigation state

\- Cursor response

\- Image hover

\- Arrow movement

\- Menu interaction



These should be fast and subtle.



\---



\## LEVEL 02 — SECTION MOTION



Used for storytelling.



Examples:



\- Image reveals

\- Typography reveals

\- Parallax

\- Image scaling

\- Clip-path transitions

\- Section transitions

\- Sticky sections

\- Background changes



These should be clearly noticeable.



\---



\## LEVEL 03 — HERO / SIGNATURE MOTION



Used for major visual moments.



Examples:



\- Cinematic hero transformation

\- Full-screen image reveal

\- Before/after transformation

\- Large typography movement

\- Horizontal project journey

\- Full-screen project transitions



These should be used selectively.



The strongest motion should be reserved for moments that deserve attention.



\---



\# 04 — SMOOTH SCROLL



Research and use a modern smooth-scrolling solution if appropriate.



Preferred candidate:



Lenis



Verify the current official integration pattern before implementation.



Smooth scrolling should feel:



\- Natural

\- Fluid

\- Responsive

\- Precise



Do NOT make the page feel sluggish.



Do NOT introduce excessive scroll interpolation.



User input should remain responsive.



The goal is:



"Smooth like a high-end interactive site."



Not:



"Why does my mouse wheel take two seconds to stop?"



\---



\# 05 — SCROLL ARCHITECTURE



The motion system should distinguish between:



\### Scroll Position



The actual position of the page.



\### Scroll Progress



Normalized progress through a particular section.



\### Animation Progress



A value derived from scroll progress and used to drive visual properties.



For important sections, use continuous progress rather than binary triggers.



Conceptually:



scroll progress

→ normalized 0 → 1

→ animation values

→ visual state



\---



\# 06 — HERO MOTION



The hero is one of the primary motion experiences.



Initial state:



\- Large architectural image

\- Strong typography

\- Atmospheric overlay

\- Navigation integrated into the composition



As the user begins scrolling:



\### IMAGE



\- Slowly scales down

\- Moves subtly

\- Changes crop position

\- May shift vertically or horizontally



\### TYPOGRAPHY



\- Moves at a different rate

\- May shift upward

\- May reduce in scale

\- May fade or clip progressively



\### OVERLAY



\- May become stronger

\- May change opacity

\- May transition into the next section's color



\### NEXT SECTION



\- Begins entering before the hero completely disappears



The transition should feel continuous.



Avoid:



Hero ends

→ hard cut

→ next section appears.



\---



\# 07 — HERO IMAGE COMPOSITION



The hero image must not behave like a rectangular card.



The image should be part of the entire composition.



Possible techniques:



\- Full viewport background

\- Oversized image

\- Image extending beyond the normal grid

\- Image behind typography

\- Gradient overlay

\- Localized blur

\- Vignette

\- Masking

\- Parallax

\- Scale transformation



Typography should remain readable without destroying the photography.



\---



\# 08 — HERO TYPOGRAPHY MOTION



Large hero typography may use:



\- Masked reveal

\- Word-by-word entrance

\- Vertical translation

\- Subtle scale

\- Scroll-linked movement



Example conceptual behavior:



At hero start:



Headline is large and dominant.



As scrolling begins:



Headline moves upward faster than the background image.



This creates depth.



Avoid excessive character-by-character animation unless it genuinely improves the composition.



\---



\# 09 — PARALLAX SYSTEM



Parallax should create depth.



Example:



Background image:

slow movement



Foreground architectural layer:

medium movement



Typography:

slightly faster movement



Small metadata:

minimal movement



The movement difference should remain restrained.



Avoid extreme parallax.



The user should notice depth rather than consciously notice "parallax."



\---



\# 10 — SECTION TRANSITIONS



Sections should visually connect.



Preferred transitions:



\- Image continuing into another section

\- Image scaling into the next composition

\- Typography crossing section boundaries

\- Background color morphing

\- Dark overlay gradually appearing

\- Image masking

\- Clip-path transition

\- Layered section overlap



Avoid large empty gaps between unrelated sections.



\---



\# 11 — SERVICE EXPLORER



The services section should be interactive.



Suggested behavior:



The section becomes sticky.



Service list remains visible.



As the user scrolls:



01 Kitchen Renovations

↓

02 Bathroom Renovations

↓

03 Home Extensions

↓

04 Attic Conversions

↓

05 Full Home Renovations

↓

06 Energy Upgrades

↓

07 Interior Transformations



The active service changes based on scroll progress.



The visual area changes accordingly.



Possible changes:



\- Image

\- Description

\- Number

\- Accent

\- Background

\- CTA



The transition should be continuous.



Do not use a standard carousel.



\---



\# 12 — SERVICE IMAGE TRANSITIONS



When the active service changes:



Old image should not simply disappear.



Possible transitions:



\- Crossfade

\- Scale

\- Mask

\- Clip-path

\- Slide

\- Image crop transformation



Different services may use different visual transitions where appropriate.



Keep them coherent.



\---



\# 13 — HORIZONTAL SERVICE EXPERIENCE



If a horizontal service experience is used:



The user scrolls vertically.



The section becomes pinned.



Content moves horizontally.



When the horizontal story completes:



Normal vertical scrolling resumes.



The interaction must not trap the user unexpectedly.



Provide clear visual progress.



Mobile should use a simplified vertical alternative if horizontal scrolling becomes uncomfortable.



\---



\# 14 — TRANSFORMATION / BEFORE-AFTER



This should be one of the site's signature interactions.



Initial state:



BEFORE



As the user scrolls:



The mask gradually reveals:



AFTER



The transition should be directly connected to scroll progress.



Conceptually:



0%:

100% BEFORE



50%:

50% BEFORE

50% AFTER



100%:

100% AFTER



Possible additional effects:



\- Subtle scale

\- Label movement

\- Divider movement

\- Image crop transition



Avoid excessive effects.



The transformation itself should be the hero.



\---



\# 15 — PROCESS STORYTELLING



The Process page should use sticky storytelling.



Suggested stages:



01 — CONSULTATION

02 — DESIGN

03 — PLANNING

04 — BUILD

05 — HANDOVER



The main visual environment remains pinned.



Scroll position controls:



\- Active stage

\- Progress

\- Image

\- Description

\- Number

\- Supporting details



Inactive stages become visually quieter.



The active stage should feel alive.



\---



\# 16 — PROCESS IMAGE TRANSITIONS



Each process stage should have its own visual.



Example:



Consultation

→ people discussing plans



Design

→ drawings / materials / concepts



Planning

→ plans / measurements



Build

→ craftsmanship / construction



Handover

→ finished interior



Images should transition smoothly.



Do not create five unrelated visual scenes.



Maintain visual continuity.



\---



\# 17 — PROJECT GALLERY



The project gallery should feel editorial.



Possible interaction:



Large active project image.



Smaller project references.



Scroll changes active project.



The project number updates.



Project title updates.



Metadata updates.



Image transitions.



The gallery should feel like moving through a curated portfolio.



Avoid a generic image carousel.



\---



\# 18 — PROJECT HOVER



On desktop:



Hovering a project may trigger:



\- Image scale

\- Image crop

\- Cursor change

\- Project title movement

\- Subtle overlay

\- Preview indicator



Keep the interaction subtle.



The image itself should remain the focus.



\---



\# 19 — PROJECT PAGE



The individual project page should use cinematic scrolling.



Potential sequence:



Hero image

↓

Project introduction

↓

Challenge

↓

Design

↓

Transformation

↓

Details

↓

Final result

↓

Next project



Each stage should have a distinct composition.



Use:



\- Sticky imagery

\- Parallax

\- Large typography

\- Image reveals

\- Before/after

\- Horizontal galleries where appropriate



\---



\# 20 — PROJECT IMAGE REVEALS



Images should enter the page intentionally.



Possible methods:



\- Clip-path reveal

\- Scale reveal

\- Mask reveal

\- Vertical wipe

\- Horizontal wipe

\- Diagonal reveal



Avoid using the same reveal on every image.



\---



\# 21 — EDITORIAL TYPOGRAPHY MOTION



Large statements may respond to scroll.



Examples:



Text moves vertically.



Words appear through masks.



A statement crosses a photograph.



A large word remains pinned while the background changes.



A sentence gradually becomes visible.



Typography can move independently from imagery.



The result should feel editorial.



Avoid flashy typography gimmicks.



\---



\# 22 — LARGE TYPOGRAPHY TRANSITIONS



For major statements:



Initial:



"WE DON'T JUST RENOVATE."



As the user scrolls:



"WE DON'T JUST RENOVATE."

moves upward.



Then:



"WE REIMAGINE HOW YOU LIVE."



enters.



The transition should feel like one continuous thought.



\---



\# 23 — BACKGROUND COLOR TRANSITIONS



Background colors may respond to scroll.



Example:



Warm off-white

→ stone

→ charcoal

→ near-black



Transitions should happen gradually.



Do not create abrupt color jumps unless intentionally used as a dramatic editorial transition.



\---



\# 24 — SCROLL PROGRESS



Some sections may display progress.



Possible UI:



01 / 05



or



01

──────

05



The progress indicator should respond directly to scroll position.



Keep it minimal.



Do not turn the website into a dashboard.



\---



\# 25 — CURSOR SYSTEM



Desktop cursor may change depending on context.



Default:

small minimal cursor.



Interactive:

subtle enlargement.



Project:

"VIEW"



Image:

"EXPLORE"



Drag:

"DRAG"



Cursor transitions should be smooth.



Do not use a giant distracting cursor.



Disable custom cursor behavior on touch devices.



\---



\# 26 — MAGNETIC BUTTONS



Primary CTAs may use subtle magnetic movement.



The button may move slightly toward the pointer.



The effect should remain small.



The button should never feel detached from its location.



The cursor should not cause large movements.



\---



\# 27 — BUTTON MICRO-INTERACTIONS



Hover:



\- Arrow moves slightly

\- Background changes

\- Text shifts subtly

\- Border changes

\- Small scale adjustment



Press:



\- Small tactile scale response



Focus:



\- Clear accessible focus state



Avoid exaggerated bounce.



\---



\# 28 — NAVIGATION MOTION



At page load:



Navigation may be transparent and integrated with the hero.



When scrolling:



\- Navigation may reduce height

\- Background may change

\- Contrast may change

\- Logo may transform subtly



When entering a dark section:



Navigation automatically adapts.



When entering a light section:



Navigation returns to the appropriate contrast.



The navigation should feel like part of the environment.



\---



\# 29 — MOBILE NAVIGATION



Mobile navigation should use a deliberate transition.



Possible behavior:



Menu button

→ full-screen overlay



Navigation links reveal progressively.



Background may use a subtle project image or solid color.



Closing the menu reverses the transition.



Do not create an oversized generic mobile drawer.



\---



\# 30 — PAGE TRANSITIONS



Navigation between pages should feel intentional.



Possible transition:



Current page

→ image / color / typography expands

→ next page emerges



Alternative:



Current page fades/slides

→ next page enters with image reveal



Use Motion or the View Transitions API where appropriate.



Always provide fallbacks.



\---



\# 31 — ROUTE-SPECIFIC TRANSITIONS



Project pages may use project imagery as the transition element.



Example:



User clicks:



"Clonskeagh Kitchen"



The project thumbnail expands.



The expanded image becomes the hero of the project page.



This creates continuity between pages.



\---



\# 32 — SCROLL VELOCITY



Motion may respond subtly to scroll velocity.



Fast scroll:



→ slightly increased movement



Slow scroll:



→ calmer movement



Stop:



→ animations settle naturally



Do not create excessive velocity effects.



The user should remain in control.



\---



\# 33 — MOTION PHYSICS



Motion should feel physical.



Use:



\- Smooth easing

\- Natural deceleration

\- Controlled inertia

\- Subtle spring where appropriate



Avoid:



\- Excessive bounce

\- Elastic text

\- Cartoon easing

\- Random oscillation



The visual language is architectural.



Motion should feel engineered and intentional.



\---



\# 34 — MOTION TIMING



Suggested general ranges:



Micro interaction:

\~150–300ms



UI transition:

\~250–500ms



Section reveal:

\~500–1000ms



Cinematic transition:

\~800–1600ms



These are starting points, not strict rules.



Scroll-linked animations should be driven by scroll progress rather than fixed durations whenever appropriate.



\---



\# 35 — STAGGERING



Stagger multiple elements carefully.



Example:



Label

→ heading

→ supporting text

→ CTA



Each may appear slightly after the previous element.



Avoid large delays.



The user should not have to wait for the interface to become usable.



\---



\# 36 — INTERACTION DENSITY



Not every section should have maximum interaction.



Use rhythm.



Example:



HIGH INTERACTION

↓

LOW INTERACTION

↓

HIGH INTERACTION

↓

QUIET EDITORIAL MOMENT

↓

HIGH INTERACTION



This prevents motion fatigue.



\---



\# 37 — CINEMATIC BREATHING MOMENTS



Some sections should intentionally have almost no interaction.



Example:



Black background.



Large centered statement.



Very slow opacity change.



No cards.



No buttons everywhere.



Allow the user to breathe.



Contrast makes the interactive sections feel more powerful.



\---



\# 38 — NO RANDOM ANIMATION



Every animation must have a purpose.



Before implementing an animation, ask:



What does this communicate?



Does it establish hierarchy?



Does it reveal information?



Does it create depth?



Does it improve navigation?



Does it create emotional impact?



If the answer is no:



Remove it.



\---



\# 39 — NO ANIMATION CIRCUS



Do not simultaneously animate:



\- Background

\- Heading

\- Paragraph

\- Button

\- Three icons

\- Four cards

\- Cursor

\- Navigation

\- Image

\- Decorative shapes



just because the technology allows it.



The website should feel controlled.



\---



\# 40 — PERFORMANCE RULES



Prefer animation of:



\- transform

\- opacity

\- scale

\- translate

\- rotate

\- clip-path where appropriate



Avoid unnecessary animation of:



\- width

\- height

\- top

\- left

\- margin

\- padding



Avoid expensive filters during continuous scroll unless carefully tested.



Blur can be visually beautiful but must be used selectively.



If continuous blur causes performance problems:



Reduce its intensity or replace it with a static gradient/overlay.



\---



\# 41 — REQUESTANIMATIONFRAME



If custom scroll calculations are required:



Use requestAnimationFrame appropriately.



Do not create uncontrolled scroll event handlers that trigger expensive work on every event.



Centralize scroll state where possible.



Avoid multiple independent scroll listeners doing the same work.



\---



\# 42 — GSAP ARCHITECTURE



Use GSAP where complex timeline control is beneficial.



Potential uses:



\- ScrollTrigger

\- Pinned sections

\- Scrubbed animations

\- Horizontal scrolling

\- Complex sequences

\- Multi-element choreography



Do not create giant global timelines for the entire website.



Keep animations local to their relevant page or section.



Clean up animations when components unmount.



\---



\# 43 — MOTION / REACT ARCHITECTURE



Use Motion for React where declarative React animation is more appropriate.



Potential uses:



\- UI transitions

\- Buttons

\- Navigation

\- Page transitions

\- Small reveals

\- Layout transitions

\- Interactive components



Avoid duplicating GSAP functionality unnecessarily.



\---



\# 44 — LENIS / SMOOTH SCROLL INTEGRATION



If Lenis or another smooth-scroll library is used:



Ensure compatibility with:



\- GSAP

\- ScrollTrigger

\- React lifecycle

\- Mobile

\- Reduced motion



The smooth-scroll loop must be properly integrated.



Do not create competing animation frames.



\---



\# 45 — CLEANUP



Every animation system must clean up correctly.



When leaving a page or unmounting a section:



\- Kill GSAP timelines

\- Kill ScrollTriggers

\- Remove listeners

\- Cancel animation frames

\- Destroy temporary observers



Do not leave animation instances running after navigation.



\---



\# 46 — RESPONSIVE MOTION



Desktop:



Full interactive experience.



Tablet:



Reduced complexity where necessary.



Mobile:



Prioritize:



\- Smooth scrolling

\- Image reveals

\- Typography transitions

\- Simple parallax

\- Vertical storytelling



Avoid complex horizontal scrolling if it harms usability.



Avoid custom cursor on mobile.



\---



\# 47 — REDUCED MOTION



Respect:



`prefers-reduced-motion`



When enabled:



\- Remove large parallax

\- Reduce scroll-linked transformations

\- Simplify page transitions

\- Reduce animation distance

\- Remove unnecessary decorative movement



Content and hierarchy must remain intact.



\---



\# 48 — ACCESSIBILITY AND INTERACTION



Interactive elements must remain:



\- Keyboard accessible

\- Focusable

\- Readable

\- Clearly identifiable



Do not rely only on hover.



Every hover interaction must have an accessible alternative.



\---



\# 49 — MOBILE TOUCH INTERACTION



Touch devices should not require hover.



Any information available through hover should remain accessible through:



\- Tap

\- Navigation

\- Visible labels

\- Alternative interaction



Do not hide important content behind hover-only states.



\---



\# 50 — LOADING EXPERIENCE



Initial page loading should feel intentional.



Potential:



\- Minimal branded loading transition

\- Image loading reveal

\- Typography reveal



Do not create a long artificial loading screen.



If assets are ready quickly:



Enter the experience immediately.



\---



\# 51 — IMAGE LOADING



Large images should not cause visible layout jumps.



Use:



\- Proper dimensions

\- Aspect ratios

\- Placeholder backgrounds

\- Progressive loading where appropriate



The layout should remain stable while images load.



\---



\# 52 — INTERACTION PRIORITY



If development time is limited, prioritize:



1\. Reactive hero

2\. Smooth scrolling

3\. Service explorer

4\. Before/after transformation

5\. Sticky process storytelling

6\. Project gallery

7\. Project page transitions

8\. Typography motion

9\. Navigation motion

10\. Micro-interactions



Do not spend hours polishing tiny button animations while the hero still behaves like a static website.



\---



\# 53 — INTERACTION QUALITY TEST



For every major interactive section:



Test slowly.



Test at normal scroll speed.



Test quickly.



Test scrolling backward.



Test stopping midway.



Test refreshing in the middle of the page.



Test resizing the browser.



Test mobile.



Test reduced motion.



The interaction should remain coherent in all states.



\---



\# 54 — SCROLL REVERSIBILITY



Scroll-linked animations should work correctly in both directions.



Scrolling forward:



State A

→ B

→ C



Scrolling backward:



C

→ B

→ A



Do not build one-way animations that become visually broken when the user scrolls upward.



\---



\# 55 — INTERRUPTIBILITY



Users may:



\- Scroll quickly

\- Stop

\- Reverse direction

\- Jump through the page

\- Resize the window

\- Navigate away



Animations must respond gracefully.



Do not force the user to watch an animation before they can continue.



\---



\# 56 — NO SCROLL TRAPS



Pinned sections must have clear boundaries.



The user should always understand that they are progressing.



Do not trap the user inside an interaction.



Once a pinned narrative is complete:



Return naturally to normal scrolling.



\---



\# 57 — VISUAL CONTINUITY



When an image appears in one section and returns later:



Use similar visual treatment.



When typography transitions between sections:



Maintain consistent typographic logic.



When a project is selected:



The project image should ideally connect visually to the project page.



The site should feel like one continuous world.



\---



\# 58 — SIGNATURE INTERACTIONS



The final website should contain several memorable interactions.



At minimum:



\### SIGNATURE 01

Reactive cinematic hero.



\### SIGNATURE 02

Scroll-driven service explorer.



\### SIGNATURE 03

Before/after transformation.



\### SIGNATURE 04

Sticky process storytelling.



\### SIGNATURE 05

Editorial project exploration.



\### SIGNATURE 06

Project-to-project page transition.



These are the interactions that make the website feel different.



\---



\# 59 — MOTION DESIGN LANGUAGE



Motion should feel:



\- Smooth

\- Controlled

\- Cinematic

\- Architectural

\- Intentional

\- Responsive

\- Sophisticated



Motion should NOT feel:



\- Playful

\- Cartoonish

\- Random

\- Excessively elastic

\- Overly futuristic

\- Gaming-inspired

\- Template-like



\---



\# 60 — FINAL QUALITY BAR



Before approving the website, ask:



Does scrolling actively control the experience?



If no:

→ Not finished.



Does the hero feel alive?



If no:

→ Not finished.



Do images feel integrated into the composition?



If no:

→ Not finished.



Do major sections feel distinct?



If no:

→ Not finished.



Are animations meaningful?



If no:

→ Remove them.



Does the site remain smooth?



If no:

→ Optimize it.



Does mobile still feel intentional?



If no:

→ Redesign the responsive interaction.



Does the website feel like a premium digital experience rather than a collection of animated components?



If no:

→ Keep iterating.



\---



\# 61 — FINAL PRINCIPLE



The user should never feel that the website is waiting for them to finish scrolling before it does something.



The website should continuously respond to movement.



The user's scroll is an input.



The page is the output.



Scrolling should influence:



IMAGE

\+

TYPOGRAPHY

\+

LAYOUT

\+

COLOR

\+

DEPTH

\+

PROGRESS

\+

TRANSITION



The result should feel less like scrolling through a document and more like navigating through a carefully directed visual experience.



\# END OF INTERACTION \& MOTION SYSTEM


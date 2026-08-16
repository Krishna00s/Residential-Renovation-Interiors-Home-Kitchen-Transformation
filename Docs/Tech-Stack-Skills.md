\# TECH STACK \& AGENT SKILLS

\# Premium Interactive Renovation Website



\---



\# 01 — PURPOSE



This document defines the technical ecosystem, development skills, libraries, tooling and research requirements for this project.



The goal is not simply to install a collection of packages.



The goal is to ensure that the development agent understands the technical capabilities required to produce the intended visual and interactive experience.



Before implementing major features, the agent should research the current official documentation and recommended implementation patterns for the technologies involved.



Do not rely on outdated tutorials or deprecated APIs when current official documentation is available.



\---



\# 02 — CORE TECHNOLOGY STACK



The project should use:



\- React

\- JavaScript

\- Vite

\- Tailwind CSS

\- Modern CSS

\- Frontend routing

\- Responsive design

\- Component-based architecture



The implementation should remain frontend-only.



No backend is required for the demo.



\---



\# 03 — CORE DEVELOPMENT SKILLS



The agent should have strong working knowledge of:



\### React



Required capabilities:



\- Functional components

\- Hooks

\- Component composition

\- Props

\- State management

\- Context where appropriate

\- Reusable components

\- Dynamic routes

\- Data-driven rendering

\- Performance-conscious rendering



Avoid unnecessary global state.



Do not introduce a state management library unless there is a real requirement.



\---



\### JavaScript



Required capabilities:



\- Modern ES6+

\- Modules

\- Async patterns where required

\- Array methods

\- Object manipulation

\- Event handling

\- DOM interaction when necessary

\- Intersection Observer

\- Resize Observer where useful

\- Browser APIs

\- Performance APIs where appropriate



\---



\### Vite



Use Vite as the frontend build tool.



The agent should understand:



\- Development server

\- Production build

\- Environment variables

\- Asset handling

\- Code splitting where appropriate

\- Build optimization



\---



\### Tailwind CSS



Use Tailwind CSS for the majority of styling.



The agent should understand:



\- Responsive breakpoints

\- Custom design tokens

\- Typography

\- Spacing

\- Layout

\- Flexbox

\- Grid

\- Positioning

\- Arbitrary values when justified

\- Responsive variants

\- Dark sections

\- Custom utilities



Avoid creating huge utility strings that become unreadable.



Extract reusable components when visual patterns repeat.



\---



\# 04 — ROUTING SKILL



Use a proper React routing solution.



The agent should research the current recommended React routing approach before implementation.



Requirements:



\- Multiple pages

\- Dynamic project routes

\- Dynamic service routes

\- Journal/article routes if implemented

\- Navigation transitions

\- Proper 404 handling

\- Scroll restoration

\- Route-aware navigation state



The website must behave like a genuine multi-page frontend application.



\---



\# 05 — MOTION ENGINE



Motion is a core technology requirement.



The agent should research and evaluate current versions and official documentation for:



\- Motion for React

\- GSAP

\- GSAP ScrollTrigger



Use the most appropriate tool for each interaction rather than forcing one library to do everything.



\---



\# 06 — MOTION / REACT



Use Motion for React for interactions such as:



\- Component entrance animations

\- Exit animations

\- Layout transitions

\- Hover interactions

\- Button interactions

\- Small UI transitions

\- Route/page transitions

\- Element state transitions

\- Gesture-based interactions where appropriate



Animations should remain declarative where possible.



\---



\# 07 — GSAP



Use GSAP where timeline-level control is beneficial.



Potential use cases:



\- Complex scroll choreography

\- Multi-element timelines

\- Pinned sections

\- Complex image transformations

\- Horizontal scroll sections

\- Scroll-linked sequences

\- Advanced timeline coordination



Do not use GSAP simply because it is powerful.



Use it when the interaction genuinely benefits from timeline control.



\---



\# 08 — GSAP SCROLLTRIGGER



ScrollTrigger is a key technology for the reactive scrolling experience.



Potential capabilities:



\- Scroll-linked animation

\- Scrubbed animation

\- Pinning

\- Horizontal scrolling

\- Progress-driven animation

\- Scroll-based image scaling

\- Scroll-based typography movement

\- Section choreography



Important:



Avoid building the site primarily around "animate when visible" triggers.



The website must contain genuine continuous scroll-linked interactions.



\---



\# 09 — SMOOTH SCROLLING



Research and evaluate a modern smooth-scrolling solution.



Possible technology:



\- Lenis



The agent should verify the current recommended integration pattern before implementation.



Smooth scrolling should feel:



\- Natural

\- Fluid

\- Responsive

\- Controlled



Do not make scrolling feel artificially slow.



Do not introduce excessive scroll lag.



The user's scroll input must remain responsive.



\---



\# 10 — REACTIVE SCROLLING

\# NON-NEGOTIABLE



Reactive scrolling is a core project requirement.



Scrolling must continuously influence the visual state of the page.



The agent should implement interactions such as:



\- Scroll-linked image movement

\- Image scaling

\- Typography movement

\- Clip-path progression

\- Parallax

\- Horizontal movement

\- Sticky storytelling

\- Background transitions

\- Section progress

\- Before/after transformation

\- Project progression



Avoid relying only on:



IntersectionObserver

\+

fade-in



as the primary animation strategy.



Visibility-triggered animations may be used for supporting content, but they are NOT sufficient for this project.



\---



\# 11 — IMAGE ANIMATION



The agent should understand:



\- Image scale

\- Object positioning

\- Clip-path

\- Masking

\- Parallax

\- Transform origin

\- Image reveal

\- Image cropping

\- Scroll-linked movement



Images should remain performant.



Avoid unnecessarily animating expensive CSS properties.



Prefer transform-based movement whenever possible.



\---



\# 12 — CLIP-PATH / MASKING



Research modern CSS masking and clip-path capabilities.



Potential uses:



\- Image reveals

\- Diagonal transitions

\- Architectural compositions

\- Before/after transitions

\- Typography reveals

\- Section transitions



Use these effects selectively.



They should feel architectural rather than decorative.



\---



\# 13 — TYPOGRAPHY ANIMATION



The agent should understand:



\- Masked text reveal

\- Word-level animation

\- Character-level animation where appropriate

\- Line reveal

\- Typography movement

\- Scroll-linked typography

\- Staggering



Typography animation must remain editorial.



Avoid cartoon-like bouncing or excessive spring effects.



\---



\# 14 — CURSOR INTERACTIONS



Desktop may include a custom cursor system.



Possible states:



\- Default

\- Interactive

\- Project hover

\- Image hover

\- View project

\- Drag

\- Navigation



Cursor interactions must:



\- Be subtle

\- Improve discoverability

\- Remain performant

\- Disable or simplify on touch devices



Do not make the cursor itself the main attraction.



\---



\# 15 — MAGNETIC INTERACTIONS



Buttons may use subtle magnetic movement.



Potential behavior:



Cursor approaches button

→ button moves slightly toward cursor.



Cursor leaves

→ button returns smoothly.



Keep movement restrained.



Do not make buttons fly around the screen.



\---



\# 16 — IMAGE / MEDIA OPTIMIZATION



The agent should research and implement modern image optimization.



Requirements:



\- Responsive image sizes

\- Lazy loading where appropriate

\- Correct image dimensions

\- Modern formats where supported

\- Avoid loading huge images unnecessarily

\- Prevent layout shift

\- Use appropriate `object-fit`

\- Use responsive image strategies



Large hero imagery must be optimized carefully because the site is image-heavy.



\---



\# 17 — PERFORMANCE SKILL



Performance is part of the design.



The agent should understand:



\- Core Web Vitals

\- LCP

\- INP

\- CLS

\- GPU-friendly animation

\- Layout thrashing

\- Animation frame budgets

\- Image optimization

\- Lazy loading

\- Code splitting

\- Bundle size

\- Memory usage



Avoid:



\- Animating layout properties unnecessarily

\- Excessive DOM nodes

\- Hundreds of simultaneous animations

\- Huge unoptimized images

\- Unnecessary JavaScript

\- Continuous expensive calculations on scroll



\---



\# 18 — CHROME DEVTOOLS / PERFORMANCE TESTING



Use Chrome DevTools or an appropriate browser-testing workflow to evaluate:



\- Frame rate

\- Layout shifts

\- Animation performance

\- Memory

\- Network requests

\- Console errors

\- Accessibility

\- Responsive behavior



If the environment supports an official Antigravity Chrome DevTools skill, research and use it.



Antigravity provides a Chrome DevTools integration focused on debugging, Core Web Vitals, accessibility auditing and browser automation. 



\---



\# 19 — ACCESSIBILITY



The agent should understand:



\- Semantic HTML

\- Keyboard navigation

\- Focus states

\- Accessible buttons

\- Accessible forms

\- Image alt text

\- Color contrast

\- Reduced-motion preferences

\- Screen-reader-friendly structure



Animations must respect:



`prefers-reduced-motion`



When reduced motion is enabled:



\- Reduce parallax

\- Reduce scroll-linked transformations

\- Reduce transition duration

\- Remove unnecessary motion

\- Preserve content hierarchy



\---



\# 20 — RESPONSIVE DESIGN



The agent should deeply understand:



\- Mobile-first CSS

\- Responsive typography

\- Responsive images

\- Breakpoints

\- Touch interaction

\- Mobile navigation

\- Mobile animation strategies



Desktop interactions should NOT simply be scaled down.



Some interactions should have dedicated mobile alternatives.



Example:



Desktop:

vertical scroll → horizontal project movement



Mobile:

vertical swipe → project cards / image progression



\---



\# 21 — FRONTEND ARCHITECTURE



The application should be organized around reusable systems.



Potential structure:



src/

├── components/

├── pages/

├── layouts/

├── animations/

├── hooks/

├── data/

├── assets/

├── styles/

└── utils/



The exact structure may be adapted by the agent after inspecting the project.



Do not create unnecessary abstractions.



\---



\# 22 — ANIMATION ARCHITECTURE



Keep animation logic organized.



Do not scatter complex GSAP timelines throughout random components.



Where appropriate, separate:



\- Animation utilities

\- Scroll controllers

\- Reusable reveal logic

\- Page transitions

\- Interaction hooks

\- Timeline definitions



Complex animation should remain understandable and maintainable.



\---



\# 23 — REDUCED MOTION ARCHITECTURE



Every major interaction should have a reduced-motion fallback.



Example:



Normal:



Scroll-linked image transformation.



Reduced motion:



Static image with subtle opacity transition.



Normal:



Complex page transition.



Reduced motion:



Simple fade.



Normal:



Parallax.



Reduced motion:



No parallax.



\---



\# 24 — ROUTE / PAGE TRANSITIONS



Research current best practices for React route transitions.



Possible technologies:



\- Motion

\- View Transitions API where appropriate

\- CSS transitions



Do not force unsupported browser behavior.



Provide graceful fallbacks.



\---



\# 25 — MODERN WEB PLATFORM FEATURES



The agent should research useful modern browser capabilities when appropriate.



Potential technologies:



\- CSS `clip-path`

\- CSS masking

\- View Transitions API

\- Intersection Observer

\- Resize Observer

\- `requestAnimationFrame`

\- CSS custom properties

\- Container queries

\- Responsive image APIs



Use browser-native capabilities where they are simpler and more performant than adding another dependency.



\---



\# 26 — AGENT SKILLS



The agent should inspect the available Antigravity Skills before implementation.



Do NOT install every available skill.



Instead:



1\. Inspect available skills.

2\. Identify skills relevant to this project.

3\. Research their purpose.

4\. Install only relevant skills.

5\. Verify that they are available.

6\. Use them when appropriate.



Antigravity supports workspace-specific skills in:



`.agents/skills/`



and global skills in:



`\~/.gemini/config/skills/`



Workspace-specific skills are preferred for project-specific workflows.



\---



\# 27 — RECOMMENDED SKILL CATEGORIES



Research and enable relevant skills for:



\### Frontend Development



React

Vite

JavaScript

CSS

Tailwind



\### Modern Web Design



Responsive design

Accessibility

Modern CSS

Web performance



\### Animation



GSAP

ScrollTrigger

Motion for React

Smooth scrolling



\### Browser Testing



Chrome DevTools

Puppeteer / browser automation where appropriate



\### Performance



Core Web Vitals

Performance auditing

Image optimization



\### Accessibility



Accessibility auditing

WCAG-oriented testing



\### Code Quality



React code review

JavaScript best practices

Component architecture



\### Testing



Frontend testing

Browser testing

Responsive testing



Only install skills that are actually relevant and available.



\---



\# 28 — GOOGLE / ANTIGRAVITY SKILLS



Before starting implementation, inspect the available Google-built Antigravity integrations.



If available and relevant, consider:



\- Modern Web Guidance

\- Chrome DevTools

\- Web accessibility / performance related skills



Do not enable unrelated Google technology bundles.



For example:



Firebase skills are unnecessary unless the project later requires Firebase.



\---



\# 29 — SKILL RESEARCH REQUIREMENT



If the agent is unsure how to implement a technology:



DO NOT immediately guess.



Research the current official documentation first.



Preferred sources:



1\. Official documentation

2\. Official GitHub repositories

3\. Maintainer documentation

4\. Reputable technical documentation



Avoid blindly copying old tutorials.



Verify:



\- Current API

\- Installation method

\- React integration

\- Vite compatibility

\- Current best practices

\- Browser support



\---



\# 30 — DEPENDENCY RULE



Before installing a dependency, ask:



Does this dependency solve a real requirement?



If yes:

→ install it.



If no:

→ do not install it.



Avoid dependency bloat.



The project should remain understandable and maintainable.



\---



\# 31 — DO NOT INSTALL EVERYTHING



This is important.



Do NOT install every animation library.



Do NOT install multiple smooth-scroll libraries.



Do NOT install multiple routing libraries.



Do NOT install multiple UI libraries.



Do NOT install unnecessary component libraries.



The project should have a deliberate technical stack.



Prefer:



One primary approach

\+

small supporting tools

\+

native browser capabilities.



\---



\# 32 — EXPECTED MOTION STACK



The initial motion stack should be evaluated around:



React

\+

Motion for React

\+

GSAP

\+

ScrollTrigger

\+

Lenis or equivalent smooth-scroll technology



The agent must research the current versions and integration patterns before implementation.



Use each technology for the problems it is best suited to solve.



Do not duplicate functionality unnecessarily.



\---



\# 33 — TESTING REQUIREMENTS



Before considering the project complete, test:



\### Desktop



\- Chrome

\- Edge

\- Firefox where practical



\### Mobile



\- Responsive viewport testing

\- Touch interactions

\- Mobile navigation

\- Scroll behavior



\### Functional



\- Every route

\- Every CTA

\- Every project

\- Every service

\- Filters

\- Navigation

\- Forms

\- Page transitions



\### Visual



\- Typography

\- Image cropping

\- Responsive layouts

\- Scroll interactions

\- Animation timing



\### Performance



\- Core Web Vitals

\- Frame stability

\- Large image loading

\- Memory usage



\---



\# 34 — FINAL TECHNICAL QUALITY BAR



The implementation should satisfy all of the following:



\- Clean React architecture

\- Maintainable components

\- Responsive design

\- Accessible markup

\- Smooth scrolling

\- Reactive scroll interactions

\- High-quality animation

\- Optimized imagery

\- Reasonable bundle size

\- No unnecessary dependencies

\- No console errors

\- No broken routes

\- No horizontal overflow

\- Reduced-motion support

\- Mobile-safe interactions



The project should be technically impressive without becoming technically fragile.



\---



\# 35 — FINAL INSTRUCTION TO THE AGENT



Before writing substantial application code:



1\. Inspect the repository.

2\. Inspect the existing package configuration.

3\. Inspect available Antigravity Skills.

4\. Research current official documentation for the required technologies.

5\. Identify the minimum required dependency set.

6\. Install only required dependencies and relevant skills.

7\. Verify the development environment.

8\. Create a technical implementation plan.

9\. Implement incrementally.

10\. Test after every major interactive system.

11\. Audit performance before finalizing.

12\. Audit accessibility before finalizing.



Do not rush directly into generating the entire website.



The visual quality depends on the quality of the underlying technical implementation.



\---



\# 36 — CORE PRINCIPLE



Technology exists to enable the experience.



Do not build technology for the sake of saying:



"We used GSAP."



Do not add WebGL simply because it sounds impressive.



Do not add a library when CSS or browser APIs can solve the problem elegantly.



Use sophisticated technology where it produces a sophisticated experience.



The final result should feel simple to the visitor even if the implementation underneath is complex.



\# END OF TECH STACK \& AGENT SKILLS


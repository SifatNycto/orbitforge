# ORBITFORGE 🚀
### Space Mission Design Simulator

**Design. Engineer. Simulate. Explore.**

ORBITFORGE is an interactive, browser-based space mission design game developed for the **NASA Space Apps Challenge 2026**.

Step into the role of a spacecraft mission designer. Choose a mission destination, configure spacecraft systems, balance engineering constraints, and test whether your spacecraft is ready for launch.

The project combines space exploration, spacecraft engineering concepts, scientific references, and interactive 3D visualization to make mission design engaging and accessible.

---

## 🌌 Missions

### 🌕 Moon — Echoes of the Moon
Design a lunar exploration spacecraft and investigate the Moon through scientific objectives such as:

- Searching for potential lunar water ice.
- Mapping the lunar surface.
- Investigating hydrogen distribution.

NASA mission and instrument references include the **Lunar Reconnaissance Orbiter (LRO)** and its scientific instruments.

### 🔴 Mars — Red Planet Survey
Design a Mars exploration spacecraft and investigate the Red Planet through objectives such as:

- Mapping Martian terrain.
- Identifying surface minerals.
- Investigating subsurface structures.

NASA mission and instrument references include the **Mars Reconnaissance Orbiter (MRO)** and its scientific instruments.

---

## ✨ Features

- **Mission Selection:** Choose between Moon and Mars exploration missions.
- **Mission Objectives:** Select scientific objectives relevant to each destination.
- **Spacecraft Configuration:** Customize five spacecraft systems.
- **Engineering Calculations:** Evaluate spacecraft mass, power generation, power consumption, and estimated cost.
- **Resource Management:** Monitor engineering constraints and available resources.
- **Mission Simulation:** Validate spacecraft configurations and identify design failures.
- **Launch Countdown:** Prepare eligible spacecraft for launch.
- **Interactive 3D Visualization:** Explore the spacecraft and its configurable components.
- **NASA Reference Data:** Explore relevant mission, instrument, and scientific engineering information.
- **Mission Timeline:** View important mission phases and milestones.

## 🛰️ Spacecraft Systems

Players can configure five major spacecraft systems:

| System | Purpose |
|---|---|
| Spacecraft Bus | Provides the primary spacecraft structure and support systems |
| Scientific Instruments | Performs mission-specific scientific observations |
| Propulsion | Supports spacecraft maneuvering and orbital operations |
| Power Systems | Supplies electrical power to spacecraft components |
| Communication | Enables spacecraft communication and data transmission |

## ⚙️ Engineering Simulation

ORBITFORGE evaluates spacecraft configurations using three primary engineering constraints:

| Constraint | Evaluation |
|---|---|
| Mass | Checks spacecraft mass against the selected mission limit |
| Power | Compares power generation with system power requirements |
| Budget | Evaluates estimated configuration cost against the available budget |

### Current Gameplay Parameters

| Mission | Maximum Spacecraft Mass |
|---|---:|
| Moon | 350 kg |
| Mars | 400 kg |

**Important:** These are illustrative gameplay constraints, not official NASA spacecraft specifications. Component costs and other simplified game parameters should also be distinguished from real mission data.

## 🔬 NASA Data & References

The project incorporates relevant NASA mission and scientific reference information to support its educational mission-design experience.

Examples include:

- Lunar Reconnaissance Orbiter (LRO).
- Mars Reconnaissance Orbiter (MRO).
- LROC — Lunar Reconnaissance Orbiter Camera.
- Mini-RF — Miniature Radio Frequency instrument.
- LEND — Lunar Exploration Neutron Detector.
- HiRISE — High Resolution Imaging Science Experiment.
- CRISM — Compact Reconnaissance Imaging Spectrometer for Mars.
- SHARAD — Shallow Radar.

NASA references are used to inform mission data, instrument specifications, scientific objectives, and spacecraft engineering context.

Some gameplay parameters are simplified assumptions. They should not be interpreted as verified specifications of actual NASA spacecraft.

### Official Challenge Resources

- [NASA Space Apps Challenge 2026](https://www.spaceappschallenge.org/2026/)
- [Space Mission Design Game — Details](https://www.spaceappschallenge.org/2026/challenges/space-mission-design-game/?tab=details)
- [Space Mission Design Game — Resources](https://www.spaceappschallenge.org/2026/challenges/space-mission-design-game/?tab=resources)

## 🛠️ Technology Stack

| Technology | Usage |
|---|---|
| React | User interface and application logic |
| JavaScript | Mission and simulation logic |
| Vite | Development server and build tooling |
| CSS | Styling and responsive interface |
| Three.js | 3D graphics |
| React Three Fiber | React renderer for Three.js |
| React Three Drei | 3D scene utilities and controls |

## 💻 Getting Started

### Prerequisites

Install the following:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/SifatNycto/ORBITFORGE.git
```

### 2. Navigate to the project directory

```bash
cd ORBITFORGE
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal. By default:

```text
http://localhost:5173
```

### 5. Build for production

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

## 📁 Project Structure

```text
ORBITFORGE/
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── MissionVisualization.jsx
│   │   └── Spacecraft3D.jsx
│   │
│   ├── data/
│   │   └── nasaReferenceData.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## 🚀 Deployment

ORBITFORGE can be deployed using free-tier static hosting services compatible with React and Vite.

Recommended platform:

- [Vercel](https://vercel.com/)

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

## 🎯 Project Vision

Space exploration is not just about reaching another planet. It is about making thousands of engineering decisions before a spacecraft ever leaves Earth.

ORBITFORGE aims to help players understand those decisions through interactive mission planning, spacecraft configuration, resource management, and scientific exploration.

**Design your mission. Engineer your spacecraft. Explore beyond Earth.**

---

## 👨‍💻 Developer

**Mehedi Hasan Sifat**

- GitHub: [@SifatNycto](https://github.com/SifatNycto)

Developed as a project for the **NASA Space Apps Challenge 2026 — Space Mission Design Game**.

---

*ORBITFORGE — Turning mission design into an exploration experience.*
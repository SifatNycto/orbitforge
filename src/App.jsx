import { useEffect, useState } from 'react'
import Spacecraft3D from './components/Spacecraft3D'
import MissionVisualization from './components/MissionVisualization'
import { nasaMissionReferences } from './data/nasaReferenceData'
import './App.css'

function App() {
  const [selectedMission, setSelectedMission] = useState(null)
  const [selectedObjective, setSelectedObjective] = useState('')
  const [simulationResult, setSimulationResult] = useState(null)
  const [launchStatus, setLaunchStatus] = useState('idle')
  const [countdown, setCountdown] = useState(10)
  const [spacecraft, setSpacecraft] = useState({
    bus: 'standard',
    instrument: 'camera',
    propulsion: 'chemical',
    power: 'solar',
    communication: 'high-gain',
  })

  
  // COMPONENT ENGINEERING SPECIFICATIONS
  // All values are illustrative game-design assumptions.

  const componentSpecs = {
    bus: {
      standard: {
        name: 'Standard bus',
        mass: 120,
        power: 35,
        cost: 18,
      },
      lightweight: {
        name: 'Lightweight bus',
        mass: 75,
        power: 25,
        cost: 15,
      },
      heavy: {
        name: 'Heavy-duty bus',
        mass: 190,
        power: 50,
        cost: 25,
      },
    },

    instrument: {
      camera: {
        name: 'High-resolution camera',
        mass: 25,
        power: 45,
        cost: 12,
      },
      spectrometer: {
        name: 'Spectrometer',
        mass: 35,
        power: 60,
        cost: 18,
      },
      radar: {
        name: 'Scientific radar',
        mass: 55,
        power: 90,
        cost: 24,
      },
    },

    propulsion: {
      chemical: {
        name: 'Chemical propulsion',
        mass: 80,
        power: 10,
        cost: 15,
      },
      electric: {
        name: 'Electric propulsion',
        mass: 55,
        power: 35,
        cost: 22,
      },
      'cold-gas': {
        name: 'Cold gas propulsion',
        mass: 30,
        power: 5,
        cost: 8,
      },
    },

    power: {
      solar: {
        name: 'Solar panels',
        mass: 45,
        generation: 180,
        cost: 14,
      },
      'advanced-solar': {
        name: 'Advanced solar panels',
        mass: 60,
        generation: 280,
        cost: 22,
      },
      rtg: {
        name: 'Radioisotope power system',
        mass: 70,
        generation: 140,
        cost: 35,
      },
    },

    communication: {
      'high-gain': {
        name: 'High-gain antenna',
        mass: 25,
        power: 30,
        cost: 10,
      },
      'medium-gain': {
        name: 'Medium-gain antenna',
        mass: 15,
        power: 18,
        cost: 7,
      },
      'low-gain': {
        name: 'Low-gain antenna',
        mass: 8,
        power: 10,
        cost: 4,
      },
    },
  }

  // INITIAL MISSION BUDGET (MILLION USD)
  const missionBudget = 100
  //....



  const missionObjectives = {
    moon: [
      {
        id: 'ice',
        name: 'Search for Lunar Water Ice',
        instrument: 'radar',
        nasaInstrumentId: 'mini-rf',
        description: 'Investigate permanently shadowed regions for possible subsurface ice.'
      },
      {
        id: 'surface',
        name: 'Map the Lunar Surface',
        instrument: 'camera',
        nasaInstrumentId: 'lroc',
        description: 'Capture detailed images of lunar terrain and surface features.'
      },
      {
        id: 'composition',
        name: 'Study Lunar Composition',
        instrument: 'spectrometer',
        nasaInstrumentId: null,
        description: 'Investigate the composition of lunar materials.'
      }
    ],

    mars: [
      {
        id: 'terrain',
        name: 'Map the Martian Surface',
        instrument: 'camera',
        nasaInstrumentId: 'hirise',
        description: 'Capture high-resolution images of Martian terrain.'
      },
      {
        id: 'minerals',
        name: 'Identify Surface Minerals',
        instrument: 'spectrometer',
        nasaInstrumentId: 'crism',
        description: 'Investigate Martian minerals using spectral observations.'
      },
      {
        id: 'subsurface',
        name: 'Investigate Subsurface Structure',
        instrument: 'radar',
        nasaInstrumentId: 'sharad',
        description: 'Investigate Martian subsurface structures using radar.'
      }
    ]
  }

  const activeObjectives = selectedMission
    ? missionObjectives[selectedMission]
    : []

  const activeObjective = activeObjectives.find(
    objective => objective.id === selectedObjective
  )

  const activeNasaInstrument = selectedMission && activeObjective?.nasaInstrumentId
    ? nasaMissionReferences[selectedMission].instruments.find(
        instrument => instrument.id === activeObjective.nasaInstrumentId
      )
    : null

  
  const scienceReports = {
    ice: {
      title: 'Lunar Subsurface Survey',
      finding: 'Radar returns indicate subsurface structures worth further investigation in the selected survey region.',
      observations: [
        { label: 'Radar survey coverage', value: '82%' },
        { label: 'Signal strength', value: 'High' },
        { label: 'Potential ice indicators', value: '3 regions' },
      ],
      conclusion: 'Potential subsurface features identified. Further measurements would be needed to confirm water ice.'
    },
    surface: {
      title: 'Lunar Surface Mapping',
      finding: 'The camera survey produced terrain images suitable for identifying surface features.',
      observations: [
        { label: 'Image coverage', value: '91%' },
        { label: 'Image quality', value: 'High' },
        { label: 'Features mapped', value: '24' },
      ],
      conclusion: 'The simulated survey successfully mapped the selected lunar surface region.'
    },
    composition: {
      title: 'Lunar Material Analysis',
      finding: 'Spectral observations indicate variations in the reflected light from the surveyed materials.',
      observations: [
        { label: 'Spectral coverage', value: '78%' },
        { label: 'Signal quality', value: 'Good' },
        { label: 'Material signatures', value: '5' },
      ],
      conclusion: 'The simulated spectral survey identified material signatures for further analysis.'
    },
    terrain: {
      title: 'Martian Terrain Survey',
      finding: 'Orbital camera observations produced images of geological features across the survey region.',
      observations: [
        { label: 'Image coverage', value: '89%' },
        { label: 'Image quality', value: 'High' },
        { label: 'Features mapped', value: '31' },
      ],
      conclusion: 'The simulated camera survey mapped the selected Martian terrain.'
    },
    minerals: {
      title: 'Martian Mineral Analysis',
      finding: 'Spectral observations revealed several distinct signatures in the simulated surface data.',
      observations: [
        { label: 'Spectral coverage', value: '84%' },
        { label: 'Signal quality', value: 'Good' },
        { label: 'Material signatures', value: '7' },
      ],
      conclusion: 'The simulated analysis identified mineral-like spectral signatures requiring further investigation.'
    },
    subsurface: {
      title: 'Martian Subsurface Survey',
      finding: 'Radar observations indicate variations in the simulated subsurface structure.',
      observations: [
        { label: 'Radar coverage', value: '76%' },
        { label: 'Signal strength', value: 'High' },
        { label: 'Structural boundaries', value: '4' },
      ],
      conclusion: 'The simulated radar survey identified subsurface boundaries for further investigation.'
    }
  }

  const activeScienceReport = scienceReports[selectedObjective]
    




  // CALCULATE SPACECRAFT RESOURCES


  const instrumentMassVerified = activeNasaInstrument?.massKg != null
  const instrumentPowerVerified = activeNasaInstrument?.powerW != null

  const instrumentMass = instrumentMassVerified
    ? activeNasaInstrument.massKg
    : componentSpecs.instrument[spacecraft.instrument].mass

  const instrumentPower = instrumentPowerVerified
    ? activeNasaInstrument.powerW
    : componentSpecs.instrument[spacecraft.instrument].power

  const totalMass =
    componentSpecs.bus[spacecraft.bus].mass +
    instrumentMass +
    componentSpecs.propulsion[spacecraft.propulsion].mass +
    componentSpecs.power[spacecraft.power].mass +
    componentSpecs.communication[spacecraft.communication].mass

  const totalPowerUse =
    componentSpecs.bus[spacecraft.bus].power +
    instrumentPower +
    componentSpecs.propulsion[spacecraft.propulsion].power +
    componentSpecs.communication[spacecraft.communication].power

  const powerGeneration =
    componentSpecs.power[spacecraft.power].generation

  const powerBalance = powerGeneration - totalPowerUse

  // ALL COSTS ARE ILLUSTRATIVE GAME ESTIMATES
  const totalCost =
    componentSpecs.bus[spacecraft.bus].cost +
    componentSpecs.instrument[spacecraft.instrument].cost +
    componentSpecs.propulsion[spacecraft.propulsion].cost +
    componentSpecs.power[spacecraft.power].cost +
    componentSpecs.communication[spacecraft.communication].cost

  const remainingBudget = missionBudget - totalCost

  // NASA DATA VERIFICATION STATUS
  const nasaMassStatus = instrumentMassVerified
    ? 'NASA reference value'
    : 'Not verified — illustrative fallback used'

  const nasaPowerStatus = instrumentPowerVerified
    ? 'NASA reference value'
    : 'Not verified — illustrative fallback used'

  const nasaInstrumentName = activeNasaInstrument?.name || 'No linked NASA instrument'

  // MISSION-SPECIFIC MASS LIMITS
  const missionMassLimit = selectedMission === 'moon' ? 350 : 400

  const massAvailable = totalMass <= missionMassLimit


  
  // RUN MISSION SIMULATION
  const runSimulation = () => {
    const failureReasons = []

    if (!activeObjective) {
      failureReasons.push('Please select a scientific objective first.')
    } else if (spacecraft.instrument !== activeObjective.instrument) {
      failureReasons.push(
        `Instrument mismatch: Your selected objective requires a ${activeObjective.instrument}.`
      )
    }

    if (powerBalance < 0) {
      failureReasons.push(
        `Insufficient power: ${Math.abs(powerBalance)} W missing.`
      )
    }

    if (remainingBudget < 0) {
      failureReasons.push(
        `Budget exceeded by $${Math.abs(remainingBudget)}M.`
      )
    }

    if (!massAvailable) {
      failureReasons.push(
        `Spacecraft exceeds the mission mass limit by ${totalMass - missionMassLimit} kg.`
      )
    }

    if (failureReasons.length > 0) {
      setSimulationResult({
        success: false,
        message: failureReasons.join(' '),
      })
      return
    }

    let score = 100

    if (powerBalance < 30) score -= 10
    if (remainingBudget < 15) score -= 10
    if (totalMass > missionMassLimit * 0.9) score -= 10

    setSimulationResult({
      success: true,
      message: 'Mission ready! All engineering requirements satisfied.',
      score,
      objective: activeObjective.name,
      instrument: spacecraft.instrument,
      scienceReport: activeScienceReport,
    })
  }

  // START LAUNCH PREPARATION
  const startLaunch = () => {
    if (!simulationResult || !simulationResult.success) {
      return
    }

    setCountdown(10)
    setLaunchStatus('preparing')
  }


  // AUTOMATIC LAUNCH COUNTDOWN
  useEffect(() => {
    if (launchStatus === 'preparing') {
      const preparationTimer = setTimeout(() => {
        setLaunchStatus('countdown')
      }, 2000)

      return () => clearTimeout(preparationTimer)
    }

    if (launchStatus === 'countdown') {
      const countdownTimer = setInterval(() => {
        setCountdown((previousCount) => {
          if (previousCount <= 1) {
            setLaunchStatus('launched')
            return 0
          }

          return previousCount - 1
        })
      }, 1000)

      return () => clearInterval(countdownTimer)
    }
  }, [launchStatus])


  return (
    <main className="app">
      <header className="topbar">
        <a className="brand" href="#">
          <span className="brand-icon">✦</span>
          ORBITFORGE
        </a>

        <nav className="navigation">
          <a href="#missions">Missions</a>
          <a href="#about">About</a>
        </nav>

        <span className="status">
          <span className="status-dot"></span>
          SIMULATION ONLINE
        </span>
      </header>

      <section className="hero-section" id="about">
        <div className="hero-content">
          <p className="eyebrow">YOUR MISSION. YOUR UNIVERSE.</p>

          <h1>
            The next frontier
            <br />
            is <span>yours to design.</span>
          </h1>

          <p className="hero-description">
            Design a spacecraft, manage limited resources, and discover how
            your engineering decisions shape the success of a space mission.
          </p>

          <a className="primary-button" href="#missions">
            Explore missions <span>↗</span>
          </a>

          <div className="hero-facts">
            <div>
              <strong>01</strong>
              <span>Choose a mission</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Engineer your craft</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Test your strategy</span>
            </div>
          </div>
        </div>

        <div className="planet-scene" aria-label="Illustration of a planet">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="planet">
            <div className="planet-highlight"></div>
            <div className="planet-crater crater-one"></div>
            <div className="planet-crater crater-two"></div>
            <div className="planet-crater crater-three"></div>
          </div>
          <div className="moon"></div>
          <span className="star star-one">✦</span>
          <span className="star star-two">✧</span>
          <span className="star star-three">✦</span>
          <span className="scene-label">DEEP SPACE / 001</span>
        </div>
      </section>

      <section className="missions-section" id="missions">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MISSION CONTROL</p>
            <h2>Where will you go?</h2>
          </div>
          <span className="section-count">01 — SELECT YOUR OBJECTIVE</span>
        </div>

        <div className="mission-grid">
          <article className="mission-card">
            <div className="mission-art lunar-art">
              <span className="mission-number">MISSION 01</span>
              <div className="mini-moon"></div>
              <span className="art-label">LUNAR EXPLORATION</span>
            </div>
            <div className="mission-info">
              <div className="mission-type">ROBOTIC / SURFACE</div>
              <h3>Echoes of the Moon</h3>
              <p>
                Design an orbiter to investigate the lunar south pole and
                search for signs of water ice.
              </p>
              <div className="mission-meta">
                <span>DIFFICULTY <b>MODERATE</b></span>
                <span>RISK <b>MEDIUM</b></span>
              </div>
              <button
                className="mission-button"
                type="button"
                onClick={() => {
                  setSelectedMission('moon')
                  setSelectedObjective('')
                  setSimulationResult(null)
                  setLaunchStatus('idle')
                }}
              >
                Select Moon Mission <span>↗</span>
              </button>
            </div>
          </article>

          <article className="mission-card">
            <div className="mission-art mars-art">
              <span className="mission-number">MISSION 02</span>
              <div className="mini-mars"></div>
              <span className="art-label">PLANETARY SCIENCE</span>
            </div>

            <div className="mission-info">
              <div className="mission-type">ROBOTIC / ORBITER</div>
              <h3>Red Planet Survey</h3>
              <p>
                Plan an orbital mission to study the Martian atmosphere and
                map its surface.
              </p>
              <div className="mission-meta">
                <span>DIFFICULTY <b>CHALLENGING</b></span>
                <span>RISK <b>HIGH</b></span>
              </div>

              <button
                className="mission-button"
                type="button"
                onClick={() => {
                  setSelectedMission('mars')
                  setSelectedObjective('')
                  setSimulationResult(null)
                  setLaunchStatus('idle')
                }}
              >
                Select Mars Mission <span>↗</span>
              </button>
            </div>
          </article>

        </div>
      </section>

      
      {/* NASA REAL MISSION REFERENCE */}
      {selectedMission && (
        <section className="briefing-section">
          <p className="eyebrow">NASA REFERENCE MISSION</p>

          <h2>
            {nasaMissionReferences[selectedMission].missionName}
          </h2>

          <p>
            Real NASA mission data used as an engineering reference
            for this educational simulation.
          </p>

          <div className="resource-grid">
            <div className="resource-card">
              <span>REFERENCE SPACECRAFT MASS</span>
              <strong>
                {nasaMissionReferences[selectedMission].spacecraftMassKg.toLocaleString()} kg
              </strong>
            </div>

            <div className="resource-card">
              <span>REFERENCE POWER</span>
              <strong>
                {nasaMissionReferences[selectedMission].powerNote}
              </strong>
            </div>
          </div>

          <p>
            <strong>Reference orbit:</strong>{' '}
            {nasaMissionReferences[selectedMission].orbit}
          </p>

          <h3>NASA flight instruments</h3>

          <div className="mission-grid">
            {nasaMissionReferences[selectedMission].instruments.map(instrument => (
              <article className="mission-card" key={instrument.id}>
                <div className="mission-info">
                  <h3>{instrument.name}</h3>
                  <p>{instrument.type}</p>
                  <p>{instrument.supports}</p>

                  <p>
                    <strong>Mass:</strong>{' '}
                    {instrument.massKg === null
                      ? 'Not verified'
                      : `${instrument.massKg} kg`}
                  </p>

                  <p>
                    <strong>Power:</strong>{' '}
                    {instrument.powerW === null
                      ? 'Not verified'
                      : `${instrument.powerW} W`}
                  </p>

                  <a href={instrument.source} target="_blank" rel="noreferrer">
                    NASA instrument reference ↗
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p>
            <a
              href={nasaMissionReferences[selectedMission].source}
              target="_blank"
              rel="noreferrer"
            >
              View NASA mission reference ↗
            </a>
          </p>
        </section>
      )}



      {/* NASA MISSION COMPARISON */}
      {selectedMission && (
        <section className="briefing-section">
          <p className="eyebrow">ENGINEERING COMPARISON</p>
          <h2>Your Spacecraft vs NASA Reference</h2>

          <p>
            Compare your current spacecraft configuration
            with the selected NASA reference mission.
          </p>

          <div className="resource-grid">
            <div className="resource-card">
              <span>YOUR SPACECRAFT MASS</span>
              <strong>{totalMass.toLocaleString()} kg</strong>
            </div>

            <div className="resource-card">
              <span>NASA REFERENCE MASS</span>
              <strong>
                {nasaMissionReferences[selectedMission]
                  .spacecraftMassKg.toLocaleString()} kg
              </strong>
            </div>

            <div className="resource-card">
              <span>YOUR POWER GENERATION</span>
              <strong>{powerGeneration} W</strong>
            </div>

            <div className="resource-card">
              <span>NASA REFERENCE POWER</span>
              <strong>
                {nasaMissionReferences[selectedMission].powerNote}
              </strong>
            </div>
          </div>

          <div className="nasa-data-status">
            <h3>Engineering Insights</h3>

            <p>
              <strong>Mass difference:</strong>{" "}
              {(
                nasaMissionReferences[selectedMission].spacecraftMassKg -
                totalMass
              ).toLocaleString()} kg
            </p>

            <p>
              <strong>Selected instrument:</strong>{" "}
              {nasaInstrumentName}
            </p>

            <p>
              <strong>Power balance:</strong> {powerBalance} W
            </p>

            <p>
              Your spacecraft uses simplified educational
              engineering assumptions. It is not a replica
              of the NASA reference spacecraft.
            </p>
          </div>
        </section>
      )}



      {/* SELECTED MISSION BRIEFING */}
      {selectedMission && (
        <section className="briefing-section" id="briefing">
          <p className="eyebrow">MISSION BRIEFING</p>

          <h2>
            {selectedMission === 'moon'
              ? 'Echoes of the Moon'
              : 'Red Planet Survey'}
          </h2>

          <p>
            {selectedMission === 'moon'
              ? 'Your objective is to investigate the lunar south pole and search for signs of water ice.'
              : 'Your objective is to study the Martian atmosphere and map the planet surface.'}
          </p>

          <button
            className="primary-button"
            type="button"
            onClick={() => {
              setSelectedMission(null)
              setSelectedObjective('')
              setSimulationResult(null)
              setLaunchStatus('idle')
            }}
          >
            Back to missions <span>↗</span>
          </button>
        </section>
      )}

      {/* SCIENTIFIC OBJECTIVES */}
      {selectedMission && (
        <section className="briefing-section">
          <p className="eyebrow">SCIENCE MISSION PLANNER</p>
          <h2>What do you want to discover?</h2>
          <p>Select a scientific objective. Your instrument choice will be guided by your science goal.</p>

          <div className="mission-grid">
            {activeObjectives.map(objective => (
              <article
                className="mission-card"
                key={objective.id}
                style={{
                  border: selectedObjective === objective.id
                    ? '2px solid #62d5ff'
                    : '1px solid rgba(255,255,255,0.12)'
                }}
              >
                <div className="mission-info">
                  <h3>{objective.name}</h3>
                  <p>{objective.description}</p>
                  <p>
                    RECOMMENDED INSTRUMENT: <b>{objective.instrument}</b>
                  </p>

                  <button
                    className="mission-button"
                    onClick={() => {
                      setSelectedObjective(objective.id)
                      setSpacecraft({
                        ...spacecraft,
                        instrument: objective.instrument
                      })
                      setSimulationResult(null)
                      setLaunchStatus('idle')
                    }}
                  >
                    {selectedObjective === objective.id
                      ? 'Objective Selected ✓'
                      : 'Select Objective'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* SPACECRAFT DESIGNER */}
      {selectedMission && (
        <section className="designer-section" id="designer">
          <div className="section-heading">
            <div>
              <p className="eyebrow">ENGINEERING BAY</p>
              <h2>Design your spacecraft</h2>
            </div>
            <span className="section-count">02 — SPACECRAFT CONFIGURATION</span>
          </div>

          <p className="designer-description">
            Choose the components for your mission. Every engineering
            decision affects your spacecraft.
          </p>

          <div className="designer-layout">
            <div className="component-panel">
              <h3>Spacecraft components</h3>

              <label htmlFor="bus">Spacecraft bus</label>
              <select
                id="bus"
                value={spacecraft.bus}
                onChange={(e) => {
                  setSpacecraft({ ...spacecraft, bus: e.target.value })
                  setSimulationResult(null)
                  setLaunchStatus('idle')
                }}
              >
                <option value="standard">Standard bus</option>
                <option value="lightweight">Lightweight bus</option>
                <option value="heavy">Heavy-duty bus</option>
              </select>

              <label htmlFor="instrument">Scientific instrument</label>
              <select
                id="instrument"
                value={spacecraft.instrument}
                onChange={(e) => {
                  setSpacecraft({ ...spacecraft, instrument: e.target.value })
                  setSimulationResult(null)
                  setLaunchStatus('idle')
                }}
              >
                <option value="camera">High-resolution camera</option>
                <option value="spectrometer">Spectrometer</option>
                <option value="radar">Scientific radar</option>
              </select>

              <label htmlFor="propulsion">Propulsion system</label>
              <select
                id="propulsion"
                value={spacecraft.propulsion}
                onChange={(e) => {
                  setSpacecraft({ ...spacecraft, propulsion: e.target.value })
                  setSimulationResult(null)
                  setLaunchStatus('idle')
                }}
              >
                <option value="chemical">Chemical propulsion</option>
                <option value="electric">Electric propulsion</option>
                <option value="cold-gas">Cold gas propulsion</option>
              </select>

              <label htmlFor="power">Power system</label>
              <select
                id="power"
                value={spacecraft.power}
                onChange={(e) => {
                  setSpacecraft({ ...spacecraft, power: e.target.value })
                  setSimulationResult(null)
                  setLaunchStatus('idle')
                }}
              >
                <option value="solar">Solar panels</option>
                <option value="advanced-solar">Advanced solar panels</option>
                <option value="rtg">Radioisotope power system</option>
              </select>

              <label htmlFor="communication">Communication system</label>
              <select
                id="communication"
                value={spacecraft.communication}
                onChange={(e) => {
                  setSpacecraft({
                    ...spacecraft,
                    communication: e.target.value,
                  })
                  setSimulationResult(null)
                  setLaunchStatus('idle')
                }}
              >
                <option value="high-gain">High-gain antenna</option>
                <option value="medium-gain">Medium-gain antenna</option>
                <option value="low-gain">Low-gain antenna</option>
              </select>
            </div>

            <div className="spacecraft-preview">
              <p className="eyebrow">LIVE 3D SPACECRAFT</p>

              <div className="spacecraft-3d-viewer">
                <Spacecraft3D spacecraft={spacecraft} />
              </div>

              <h3>Mission spacecraft</h3>
              <p>Rotate, zoom and inspect your spacecraft.</p>

              <div className="configuration-list">
                <div>
                  <span>BUS</span>
                  <strong>{spacecraft.bus}</strong>
                </div>
                <div>
                  <span>INSTRUMENT</span>
                  <strong>{spacecraft.instrument}</strong>
                </div>
                <div>
                  <span>PROPULSION</span>
                  <strong>{spacecraft.propulsion}</strong>
                </div>
                <div>
                  <span>POWER</span>
                  <strong>{spacecraft.power}</strong>
                </div>
                <div>
                  <span>COMMUNICATION</span>
                  <strong>{spacecraft.communication}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* LIVE RESOURCE DASHBOARD */}
          <div className="resource-dashboard">
            <p className="eyebrow">ENGINEERING TELEMETRY</p>
            <h3>Spacecraft resource analysis</h3>

            <div className="resource-grid">
              <div className="resource-card">
                <span>TOTAL MASS</span>
                <strong>{totalMass} kg</strong>
              </div>

              <div className="resource-card">
                <span>POWER CONSUMPTION</span>
                <strong>{totalPowerUse} W</strong>
              </div>

              <div className="resource-card">
                <span>POWER GENERATION</span>
                <strong>{powerGeneration} W</strong>
              </div>

              <div className="resource-card">
                <span>POWER BALANCE</span>
                <strong className={powerBalance >= 0 ? 'positive' : 'negative'}>
                  {powerBalance > 0 ? '+' : ''}{powerBalance} W
                </strong>
              </div>

              <div className="resource-card">
                <span>ESTIMATED COST</span>
                <strong>${totalCost}M</strong>
              </div>

              <div className="resource-card">
                <span>REMAINING BUDGET</span>
                <strong className={remainingBudget >= 0 ? 'positive' : 'negative'}>
                  ${remainingBudget}M
                </strong>
              </div>
            </div>
    
            {/* NASA DATA VERIFICATION PANEL */}
            <div className="nasa-data-status">
              <h3>NASA Instrument Data Status</h3>

              <p>
                <strong>Selected NASA reference:</strong> {nasaInstrumentName}
              </p>

              <p>
                <strong>Instrument mass:</strong> {nasaMassStatus}
              </p>

              <p>
                <strong>Instrument power:</strong> {nasaPowerStatus}
              </p>

              <p>
                <strong>Component costs:</strong> Illustrative game estimates
              </p>

              <p>
                <strong>Other spacecraft components:</strong> Illustrative game assumptions
              </p>
            </div>

            {/* ENGINEERING STATUS */}
            <div className="engineering-alerts">
              {powerBalance < 0 && (
                <p className="alert danger">
                  ⚠ Insufficient power: Your spacecraft needs {Math.abs(powerBalance)} W
                  more power.
                </p>
              )}

              {remainingBudget < 0 && (
                <p className="alert danger">
                  ⚠ Budget exceeded: You are ${Math.abs(remainingBudget)}M over budget.
                </p>
              )}

              {!massAvailable && (
                <p className="alert danger">
                  ⚠ Mass limit exceeded: Your spacecraft is {totalMass - missionMassLimit} kg overweight.
                </p>
              )}

              {powerBalance >= 0 &&
                remainingBudget >= 0 &&
                massAvailable && (
                <p className="alert success">
                  ✓ Engineering status: All resource limits are satisfied.
                </p>
              )}
            </div>
            <button
            className="primary-button"
            type="button"
            onClick={runSimulation}
            style={{ marginTop: '20px', cursor: 'pointer' }}
          >
            Launch Mission Simulation 🚀
          </button>

          {simulationResult && (
            <div className={`alert ${simulationResult.success ? 'success' : 'danger'}`}>
              {simulationResult.message}
            </div>
          )}

          {simulationResult?.success && (
            <div className="resource-dashboard">
              <p className="eyebrow">MISSION PERFORMANCE</p>
              <h2>Mission Score: {simulationResult.score}/100</h2>

              <h3>Science Objective</h3>
              <p>{simulationResult.objective}</p>

              <h3>Selected Instrument</h3>
              <p>{simulationResult.instrument}</p>

              <p>
                Your spacecraft passed the engineering checks and is configured
                to support the selected scientific objective.
              </p>

              <p>
                <small>
                  Educational simulation result — this score does not represent
                  actual scientific discoveries or official NASA mission evaluation.
                </small>
              </p>
            </div>
          )}
          
          {simulationResult?.success && launchStatus === 'idle' && (
            <button
              className="primary-button"
              type="button"
              onClick={startLaunch}
              style={{ marginTop: '15px', cursor: 'pointer' }}
            >
              Begin Launch Preparation 🚀
            </button>
          )}

          {launchStatus === 'preparing' && (
            <div className="alert success">
              ✓ Launch preparation initiated. Checking spacecraft systems...
            </div>
          )}

          {launchStatus === 'countdown' && (
            <div className="alert success">
              <h2>LAUNCH COUNTDOWN</h2>
              <h1>{countdown}</h1>
              <p>Preparing for liftoff...</p>
            </div>
          )}

                    
          {launchStatus === 'launched' && (
            <div className="launch-animation">
              <div className="launch-stars">✦　·　✧　·　✦</div>

              <div className="launch-spacecraft">🛰️</div>

              <p className="eyebrow">MISSION CONTROL / FLIGHT OPERATIONS</p>
              <h2>MISSION SUCCESSFULLY LAUNCHED!</h2>
              <p>Your spacecraft has completed its launch sequence.</p>

              <div style={{ margin: '25px 0' }}>
                <p className="eyebrow">LIVE MISSION VISUALIZATION</p>

                <h3>
                  {selectedMission === 'moon'
                    ? 'LUNAR ORBIT'
                    : 'MARS ORBIT'}
                </h3>

                <MissionVisualization
                  destination={selectedMission}
                  spacecraft={spacecraft}
                />
              </div>

              <div className="launch-trail"></div>

              <div className="resource-dashboard">
                <p className="eyebrow">MISSION COMPLETION REPORT</p>
                <h2>
                  {selectedMission === 'moon'
                    ? 'ECHOES OF THE MOON'
                    : 'RED PLANET SURVEY'}
                </h2>

                <h3>Mission Status</h3>
                <p>Launch sequence completed successfully</p>

                <h3>Scientific Objective</h3>
                <p>{simulationResult?.objective}</p>

                <h3>Scientific Instrument</h3>
                <p>{simulationResult?.instrument}</p>


                <div className="science-results">
                  <p className="eyebrow">SIMULATED SCIENCE DATA</p>

                  <h2>{simulationResult?.scienceReport?.title}</h2>

                  <p>{simulationResult?.scienceReport?.finding}</p>

                  <div className="resource-grid">
                    {simulationResult?.scienceReport?.observations.map(item => (
                      <div className="resource-card" key={item.label}>
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                      </div>
                    ))}
                  </div>

                  <h3>Mission Findings</h3>
                  <p>{simulationResult?.scienceReport?.conclusion}</p>

                  <p>
                    <small>
                      All observations are illustrative, procedurally defined game data.
                      They do not represent actual planetary measurements or verified discoveries.
                    </small>
                  </p>
                </div>


                <h3>Final Mission Score</h3>
                <h1>{simulationResult?.score}/100</h1>

                <div className="resource-grid">
                  <div className="resource-card">
                    <span>SPACECRAFT MASS</span>
                    <strong>{totalMass} kg</strong>
                  </div>

                  <div className="resource-card">
                    <span>POWER BALANCE</span>
                    <strong>{powerBalance} W</strong>
                  </div>

                  <div className="resource-card">
                    <span>MISSION COST</span>
                    <strong>${totalCost}M</strong>
                  </div>

                  <div className="resource-card">
                    <span>REMAINING BUDGET</span>
                    <strong>${remainingBudget}M</strong>
                  </div>
                </div>

                <p>
                  Your spacecraft is ready to begin its simulated science mission.
                  The scientific outcome has not been verified by real spacecraft data.
                </p>

                <button
                  className="primary-button"
                  type="button"
                  onClick={() => {
                    setSelectedMission(null)
                    setSelectedObjective('')
                    setSimulationResult(null)
                    setLaunchStatus('idle')
                    setCountdown(10)
                    setSpacecraft({
                      bus: 'standard',
                      instrument: 'camera',
                      propulsion: 'chemical',
                      power: 'solar',
                      communication: 'high-gain',
                    })
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  Start a New Mission ↗
                </button>
              </div>
            </div>
          )}

          </div>
        </section>
      )}


      <footer className="footer">
        <span>ORBITFORGE © 2026</span>
        <span>BUILT TO EXPLORE THE IMPOSSIBLE.</span>
      </footer>
    </main>
  )
}

export default App

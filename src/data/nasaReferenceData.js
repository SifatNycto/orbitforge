export const missionSegments = [
  {
    id: 'launch',
    name: 'Launch segment',
    definition: 'The launch vehicle and services required to place the mission in space.',
  },
  {
    id: 'space',
    name: 'Space segment',
    definition: 'Spacecraft, instruments, orbiters, landers or rovers used to conduct the mission.',
  },
  {
    id: 'ground',
    name: 'Ground segment',
    definition: 'Ground stations and mission-control facilities for communication, data reception and mission management.',
  },
  {
    id: 'user',
    name: 'User segment',
    definition: 'Scientists and other users who analyse and apply the mission data.',
  },
]

export const nasaMissionReferences = {
  moon: {
    missionName: 'Lunar Reconnaissance Orbiter (LRO)',
    agency: 'NASA / Goddard Space Flight Center',
    target: 'Moon',
    launchVehicle: 'Atlas V 401',

    // MASS ------------------------------------------------------------
    spacecraftMassKg: 1916,
    massDescription: 'Launch mass including propellant (NASA launch press kit)',
    dryMassKg: 1018,
    propellantMassKg: 898,
    alternativeValues: {
      designPhaseFullyFueledMassKg: 1846,
      designPhaseDryMassKg: 949,
      designPhaseSource: 'https://science.nasa.gov/wp-content/uploads/2024/01/lro-space-science-paper.pdf',
      note: 'Chin et al. (2007), written before launch, gives <949 kg dry and 1846 kg fully fueled. The launch press kit gives 1916 kg total (1018 kg dry + 898 kg fuel).',
    },

    // POWER -----------------------------------------------------------
    powerW: 1850,
    powerNote: '1,850 W end-of-life from the solar array (sunlit); over 800 W average per orbit delivered by the power electronics',
    solarArrayPeakW: 1850,
    orbitAveragePowerW: 800,
    solarArrayAreaM2: 10.7,
    batteryNote: '80 A-hr lithium-ion battery (eclipse and survival power)',
    solarIrradianceWm2: 1361.0,
    solarIrradianceRatio: 1.0,
    solarIrradianceSource: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html',

    // ORBIT -----------------------------------------------------------
    orbit: 'Polar orbit, 50 ± 20 km altitude during the primary mapping mission; a 30 × 216 km elliptical orbit was used for commissioning and may be used in the extended mission',
    inclinationDeg: 90,
    equatorialRadiusKm: 1738.1,
    deltaVMs: 1300,
    deltaVNote: 'More than 1,300 m/s of delta-V for orbit capture and maintenance (hydrazine monopropellant)',

    // TIME (challenge resource: planned development and operational lifetime) ---
    plannedScienceDuration: 'One-year base mission with a goal of up to four additional years of extended operations (NASA design baseline)',
    timeline: [
      { when: '18 June 2009', event: 'Launch on an Atlas V 401 together with LCROSS', source: 'https://spaceflightnow.com/atlas/av020/090610lro.html', secondary: true },
      { when: 'About 4–5 days after launch (design)', event: 'Cis-lunar transfer, then orbit-insertion maneuvers into a polar orbit', source: 'https://science.nasa.gov/wp-content/uploads/2024/01/lro-space-science-paper.pdf', secondary: false },
      { when: '15 September 2009', event: 'Primary mapping mission starts in a ~50 km orbit (one year)', source: 'https://en.wikipedia.org/wiki/Lunar_Reconnaissance_Orbiter', secondary: true },
    ],

    // COMMUNICATIONS --------------------------------------------------
    communications: 'Ka-band science downlink at 100 Mbps (40 W transmitter + high-gain antenna); S-band for command, telemetry and navigation; two 100 GByte onboard recorders',

    // PAYLOAD (sum of the 7 flight instruments below) ------------------
    payloadMassKg: 92.6,
    payloadPowerW: 112.0,
    payloadNote: 'Computed sums of the seven LRO instruments in the NASA press kit (mass sum 92.6 kg; average power sum 112.0 W). Only three of the seven are playable in the game.',

    // Instruments playable in the game. massKg / powerW are flight values from the NASA launch press kit
    // (average power). `designAllocation` holds the pre-launch allocation from NASA's LRO science paper.
    instruments: [
      {
        id: 'mini-rf',
        name: 'Mini-RF',
        type: 'Synthetic aperture radar (technology demonstration)',
        massKg: 13.8,
        powerW: 7.0,
        valueType: 'flight value (average power)',
        designAllocation: { massKg: 12.6, powerW: 11.2 },
        performance: 'S-band (12–13 cm) and X-band (4 cm) radar; 75 m/pixel baseline and 7.5 m/pixel zoom imaging',
        dataNote: '7.7 Gbit per 4-minute collection interval (design value)',
        supports: 'Radar observations of permanently shadowed regions and investigation of possible subsurface water ice.',
        source: 'https://science.nasa.gov/mission/lro/mini-rf/',
        specificationSource: 'https://spaceflightnow.com/atlas/av020/090610lro.html',
        designSource: 'https://science.nasa.gov/wp-content/uploads/2024/01/lro-space-science-paper.pdf',
      },
      {
        id: 'lroc',
        name: 'LROC',
        type: 'Lunar Reconnaissance Orbiter Camera',
        massKg: 19.2,
        powerW: 24.0,
        valueType: 'flight value (average power)',
        designAllocation: { massKg: 16.5, powerW: 27.6 },
        performance: 'Narrow Angle Cameras: 0.5 m/pixel from 50 km; Wide Angle Camera: 100 m/pixel visible, 400 m/pixel UV',
        dataNote: 'NAC 515 Gbit/day + WAC 41 Gbit/day (design values)',
        supports: 'High-resolution lunar surface imaging, mapping and landing-site assessment.',
        source: 'https://science.nasa.gov/mission/lro/spacecraft-and-instruments/',
        specificationSource: 'https://spaceflightnow.com/atlas/av020/090610lro.html',
        designSource: 'https://science.nasa.gov/wp-content/uploads/2024/01/lro-space-science-paper.pdf',
      },
      {
        id: 'lend',
        name: 'LEND',
        type: 'Lunar Exploration Neutron Detector',
        massKg: 25.8,
        powerW: 11.6,
        valueType: 'flight value (average power)',
        designAllocation: { massKg: 23.7, powerW: 13.0 },
        performance: 'Maps hydrogen with 10 km spatial resolution and about 100 ppm sensitivity at the poles (100 ppm hydrogen ≈ 0.1 wt% water ice)',
        dataNote: '0.26 Gbit/day (design value)',
        supports: 'Hydrogen distribution mapping and investigation of evidence related to lunar water ice.',
        source: 'https://science.nasa.gov/mission/lro/spacecraft-and-instruments/',
        specificationSource: 'https://spaceflightnow.com/atlas/av020/090610lro.html',
        designSource: 'https://science.nasa.gov/wp-content/uploads/2024/01/lro-space-science-paper.pdf',
      },
    ],

    source: 'https://science.nasa.gov/mission/lro/about/',
    technicalSource: 'https://science.nasa.gov/wp-content/uploads/2024/01/lro-space-science-paper.pdf',
    additionalSources: [
      { name: 'LRO launch mass, dry mass, fuel and flight instrument values (NASA press kit, reproduced by Spaceflight Now)', url: 'https://spaceflightnow.com/atlas/av020/090610lro.html' },
      { name: 'Chin et al. (2007), LRO Overview: The Instrument Suite and Mission (NASA-hosted)', url: 'https://science.nasa.gov/wp-content/uploads/2024/01/lro-space-science-paper.pdf' },
      { name: 'NASA NSSDC Moon Fact Sheet', url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html' },
    ],
  },

  mars: {
    missionName: 'Mars Reconnaissance Orbiter (MRO)',
    agency: 'NASA / Jet Propulsion Laboratory',
    target: 'Mars',
    launchVehicle: 'Atlas V 401',

    // MASS ------------------------------------------------------------
    spacecraftMassKg: 2180,
    massDescription: 'Total launch mass including propellant and pressurant (NASA/JPL launch press kit)',
    dryMassKg: 1031,
    dryMassNote: '892 kg other dry mass + 139 kg science payload',
    propellantMassKg: 1149,
    alternativeValues: null,

    // POWER -----------------------------------------------------------
    powerW: 2000,
    powerNote: '2,000 W from 20 m² of solar panels at the mission’s farthest point from the Sun, plus nickel-hydrogen batteries',
    solarArrayPeakW: 2000,
    orbitAveragePowerW: null,
    solarArrayAreaM2: 20,
    batteryNote: 'Nickel-hydrogen batteries for periods when the panels are not in sunlight',
    solarIrradianceWm2: 586.2,
    solarIrradianceRatio: 0.431,
    solarIrradianceSource: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html',

    // ORBIT -----------------------------------------------------------
    orbit: 'Near-polar, near-circular, sun-synchronous 3 p.m. science orbit, approximately 255 × 320 km altitude',
    inclinationDeg: 93,
    equatorialRadiusKm: 3396.2,
    deltaVMs: null,
    deltaVNote: 'Delta-V budget not verified in the sources checked',

    // TIME (challenge resource: planned development and operational lifetime) ---
    plannedScienceDuration: 'Primary Science Phase of just over one Mars year',
    timeline: [
      { when: '12 August 2005', event: 'Launch on an Atlas V 401', source: 'https://sites.google.com/si.edu/ai-mars/mission-to-mars/orbiters/mars-reconnaissance-orbiter', secondary: true },
      { when: '10 March 2006', event: 'Mars orbit insertion', source: 'https://sites.google.com/si.edu/ai-mars/mission-to-mars/orbiters/mars-reconnaissance-orbiter', secondary: true },
      { when: 'November 2006', event: 'Primary Science Phase begins', source: 'https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2006JE002682', secondary: false },
    ],

    // COMMUNICATIONS --------------------------------------------------
    communications: null,

    // PAYLOAD ---------------------------------------------------------
    payloadMassKg: 139,
    payloadPowerW: 189,
    payloadNote: 'Payload mass from the JPL launch press kit. Payload power of 189 W includes reserve (Zurek & Smrekar 2007, Table 3, which lists the payload mass as 132 kg). Six science instruments; only three are playable in the game.',

    instruments: [
      {
        id: 'hirise',
        name: 'HiRISE',
        type: 'High Resolution Imaging Science Experiment',
        massKg: 65,
        powerW: 60,
        valueType: 'NASA instrument page value (mass includes thermal control and cables)',
        designAllocation: null,
        performance: null,
        dataNote: null,
        supports: 'High-resolution imaging of Martian terrain and geological features.',
        source: 'https://science.nasa.gov/mission/mars-reconnaissance-orbiter/science-instruments/',
        specificationSource: 'https://mars.nasa.gov/mro/mission/instruments/crism/',
      },
      {
        id: 'crism',
        name: 'CRISM',
        type: 'Compact Reconnaissance Imaging Spectrometer for Mars',
        massKg: 32.92,
        powerW: 46,
        valueType: 'flight instrument value (power = orbital average)',
        designAllocation: null,
        powerNote: '44.4–47.3 W in normal operations and 16.1 W in standby (Murchie et al. 2007); 46 W orbital average (Zurek & Smrekar 2007)',
        performance: 'Spectral range 362–3920 nm at 6.55 nm/channel; global mapping at 100–200 m/pixel',
        dataNote: null,
        supports: 'Identifying minerals and investigating Martian surface composition through spectral observations.',
        source: 'https://science.nasa.gov/mission/mars-reconnaissance-orbiter/science-instruments/',
        specificationSource: 'https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2006JE002682',
      },
      {
        id: 'sharad',
        name: 'SHARAD',
        type: 'Shallow Radar',
        massKg: 16.6,
        powerW: 6,
        valueType: 'flight instrument value (power = orbital average)',
        designAllocation: null,
        massNote: 'The NASA instrument page rounds the mass to about 15 kg; 16.6 kg is the value in Zurek & Smrekar (2007), Table 3.',
        performance: '10 W radiated power; 10 m antenna; maps dielectric interfaces to at least several hundred metres depth',
        dataNote: 'Limited to 15% of the MRO data allocation',
        supports: 'Investigating subsurface structures and possible buried water or ice.',
        source: 'https://science.nasa.gov/mission/mars-reconnaissance-orbiter/science-instruments/',
        specificationSource: 'https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2006JE002701',
      },
    ],

    source: 'https://science.nasa.gov/mission/mars-reconnaissance-orbiter/',
    technicalSource: 'https://www.jpl.nasa.gov/news/press_kits/mro-launch-Aug05.pdf',
    additionalSources: [
      { name: 'MRO launch press kit (NASA/JPL)', url: 'https://www.jpl.nasa.gov/news/press_kits/mro-launch-Aug05.pdf' },
      { name: 'NASA MRO instrument specifications', url: 'https://mars.nasa.gov/mro/mission/instruments/crism/' },
      { name: 'Zurek & Smrekar (2007), An overview of the MRO science mission', url: 'https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2006JE002701' },
      { name: 'Murchie et al. (2007), CRISM on MRO', url: 'https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2006JE002682' },
      { name: 'NASA NSSDC Mars Fact Sheet', url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html' },
    ],
  },
}

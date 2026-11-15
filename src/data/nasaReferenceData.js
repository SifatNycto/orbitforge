
export const nasaMissionReferences = {
  moon: {
    missionName: 'Lunar Reconnaissance Orbiter (LRO)',
    agency: 'NASA / Goddard Space Flight Center',
    target: 'Moon',

    spacecraftMassKg: 1850,
    massDescription: 'Launch mass (including propellant)',

    powerW: 400,
    powerNote: 'Approximately 400 W orbit-average spacecraft power',

    orbit: 'Approximately 50 km polar orbit during the primary mapping mission',

    payloadCapacityKg: 100,
    payloadPowerW: 100,

    instruments: [
      {
        id: 'mini-rf',
        name: 'Mini-RF',
        type: 'Synthetic aperture radar',
        massKg: 12.6,
        powerW: 11.2,
        supports: 'Radar observations of permanently shadowed regions and investigation of possible subsurface water ice.',
        source: 'https://science.nasa.gov/mission/lro/mini-rf/',
        specificationSource: 'https://science.nasa.gov/wp-content/uploads/2024/01/lro-space-science-paper.pdf',
      },
      {
        id: 'lroc',
        name: 'LROC',
        type: 'Lunar Reconnaissance Orbiter Camera',
        massKg: 16.5,
        powerW: 27.6,
        supports: 'High-resolution lunar surface imaging, mapping and landing-site assessment.',
        source: 'https://science.nasa.gov/mission/lro/spacecraft-and-instruments/',
        specificationSource: 'https://science.nasa.gov/wp-content/uploads/2024/01/lro-space-science-paper.pdf',
      },
      {
        id: 'lend',
        name: 'LEND',
        type: 'Lunar Exploration Neutron Detector',
        massKg: 23.7,
        powerW: 13.0,
        supports: 'Hydrogen distribution mapping and investigation of evidence related to lunar water ice.',
        source: 'https://science.nasa.gov/mission/lro/spacecraft-and-instruments/',
        specificationSource: 'https://science.nasa.gov/wp-content/uploads/2024/01/lro-space-science-paper.pdf',
      },
    ],

    source: 'https://science.nasa.gov/mission/lro/about/',
    technicalSource: 'https://science.nasa.gov/mission/lro/spacecraft-and-instruments/',
  },

  mars: {
    missionName: 'Mars Reconnaissance Orbiter (MRO)',
    agency: 'NASA / Jet Propulsion Laboratory',
    target: 'Mars',

    spacecraftMassKg: 2180,
    massDescription: 'Total launch mass including propellant',

    powerW: 2000,
    powerNote: 'Approximately 2,000 W at the mission’s farthest point from the Sun',

    orbit: 'Near-polar science orbit, approximately 255–320 km altitude',

    instruments: [
      {
        id: 'hirise',
        name: 'HiRISE',
        type: 'High Resolution Imaging Science Experiment',
        massKg: 65,
        powerW: 60,
        supports: 'High-resolution imaging of Martian terrain and geological features.',
        source: 'https://science.nasa.gov/mission/mars-reconnaissance-orbiter/science-instruments/',
        specificationSource: 'https://science.nasa.gov/mission/mars-reconnaissance-orbiter/science-instruments/',
      },
      {
        id: 'crism',
        name: 'CRISM',
        type: 'Compact Reconnaissance Imaging Spectrometer for Mars',
        massKg: null,
        powerW: null,
        supports: 'Identifying minerals and investigating Martian surface composition through spectral observations.',
        source: 'https://science.nasa.gov/mission/mars-reconnaissance-orbiter/science-instruments/',
        specificationSource: null,
      },
      {
        id: 'sharad',
        name: 'SHARAD',
        type: 'Shallow Radar',
        massKg: null,
        powerW: null,
        supports: 'Investigating subsurface structures and possible buried water or ice.',
        source: 'https://science.nasa.gov/mission/mars-reconnaissance-orbiter/science-instruments/',
        specificationSource: null,
      },
    ],

    source: 'https://science.nasa.gov/mission/mars-reconnaissance-orbiter/',
    technicalSource: 'https://science.nasa.gov/wp-content/uploads/2024/03/44745_mro-arrival.pdf',
  },
}


import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { SatelliteModel } from './Spacecraft3D'
import { nasaMissionReferences } from '../data/nasaReferenceData'

// Relative body sizes use NASA equatorial radii (Moon 1738.1 km, Mars 3396.2 km).
// The Moon is drawn with radius 1.5 scene units; Mars is scaled from it.
const MOON_VISUAL_RADIUS = 1.5

function getPlanetRadius(destination) {
  const reference = nasaMissionReferences[destination]
  const moonRadiusKm = nasaMissionReferences.moon.equatorialRadiusKm
  return MOON_VISUAL_RADIUS * (reference.equatorialRadiusKm / moonRadiusKm)
}

function Planet({ destination }) {
  const isMoon = destination === 'moon'
  const radius = getPlanetRadius(destination)

  return (
    // The meshes below were modelled for a radius of 2, so scale them to the real relative size
    <group scale={radius / 2}>
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color={isMoon ? '#aaa9a5' : '#a94f35'}
          roughness={0.95}
        />
      </mesh>

      {isMoon ? (
        <>
          <mesh position={[0.8, 0.8, 1.65]} scale={[0.35, 0.2, 0.08]}>
            <sphereGeometry args={[1, 24, 24]} />
            <meshStandardMaterial color="#777772" />
          </mesh>
          <mesh position={[-1, -0.5, 1.7]} scale={[0.25, 0.25, 0.08]}>
            <sphereGeometry args={[1, 24, 24]} />
            <meshStandardMaterial color="#777772" />
          </mesh>
        </>
      ) : (
        <>
          <mesh position={[0, 0.5, 1.85]} scale={[0.7, 0.12, 0.04]}>
            <sphereGeometry args={[1, 24, 24]} />
            <meshStandardMaterial color="#783d2d" />
          </mesh>
          <mesh position={[-0.8, -0.7, 1.75]} scale={[0.5, 0.12, 0.04]}>
            <sphereGeometry args={[1, 24, 24]} />
            <meshStandardMaterial color="#783d2d" />
          </mesh>
        </>
      )}
    </group>
  )
}

function OrbitingSpacecraft({ spacecraft, destination }) {
  const orbitRef = useRef()
  const reference = nasaMissionReferences[destination]

  // Orbit plane tilt = NASA reference inclination (LRO: polar, MRO: 93 degrees).
  // The orbit altitude is NOT to scale (real altitudes are 50 km and ~300 km).
  const inclination = (reference.inclinationDeg * Math.PI) / 180
  const orbitRadius = getPlanetRadius(destination) + 1.3

  useFrame((state, delta) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += delta * 0.18
    }
  })

  return (
    <group rotation={[inclination, 0, 0]}>
      <group ref={orbitRef}>
        <group position={[orbitRadius, 0, 0]} scale={0.28}>
          <SatelliteModel spacecraft={spacecraft} />
        </group>
      </group>
    </group>
  )
}

function MissionScene({ destination, spacecraft }) {
  return (
    <>
      <color attach="background" args={['#050817']} />

      <ambientLight intensity={0.8} />

      <directionalLight position={[5, 5, 5]} intensity={2.5} />

      <pointLight position={[-5, 2, -4]} intensity={1.2} color="#638bff" />

      <Stars count={2500} radius={80} depth={50} />

      <Planet destination={destination} />

      <OrbitingSpacecraft spacecraft={spacecraft} destination={destination} />

      <OrbitControls
        enablePan={false}
        enableZoom
        enableRotate
        minDistance={5}
        maxDistance={16}
      />
    </>
  )
}

export default function MissionVisualization({ destination, spacecraft }) {
  return (
    <div style={{
      width: '100%',
      height: '420px',
      overflow: 'hidden',
      borderRadius: '14px',
      background: '#050817'
    }}>
      <Canvas camera={{ position: [8, 5, 9], fov: 45 }}>
        <MissionScene
          destination={destination}
          spacecraft={spacecraft}
        />
      </Canvas>
    </div>
  )
}

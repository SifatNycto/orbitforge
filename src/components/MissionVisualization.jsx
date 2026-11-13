
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { SatelliteModel } from './Spacecraft3D'

function Planet({ destination }) {
  const isMoon = destination === 'moon'

  return (
    <group>
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

function OrbitingSpacecraft({ spacecraft }) {
  const orbitRef = useRef()

  useFrame((state, delta) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += delta * 0.18
    }
  })

  return (
    <group ref={orbitRef}>
      <group position={[3.5, 0, 0]} scale={0.28}>
        <SatelliteModel spacecraft={spacecraft} />
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

      <OrbitingSpacecraft spacecraft={spacecraft} />

      <OrbitControls
        enablePan={false}
        enableZoom
        enableRotate
        minDistance={5}
        maxDistance={13}
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
      <Canvas camera={{ position: [7, 4, 8], fov: 45 }}>
        <MissionScene
          destination={destination}
          spacecraft={spacecraft}
        />
      </Canvas>
    </div>
  )
}

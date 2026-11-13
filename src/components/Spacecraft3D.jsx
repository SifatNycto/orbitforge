
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

// Solar panel array
function SolarPanel({ position, size = 1 }) {
  const columns = 6
  const rows = 4

  return (
    <group position={position} scale={[size, size, 1]}>
      <mesh>
        <boxGeometry args={[2.4, 1.6, 0.06]} />
        <meshStandardMaterial
          color="#8995a8"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      {Array.from({ length: columns * rows }).map((_, index) => {
        const column = index % columns
        const row = Math.floor(index / columns)

        return (
          <mesh
            key={index}
            position={[-1 + column * 0.4, -0.6 + row * 0.4, 0.045]}
          >
            <boxGeometry args={[0.37, 0.37, 0.025]} />
            <meshStandardMaterial
              color="#153c78"
              metalness={0.65}
              roughness={0.25}
              emissive="#071c45"
              emissiveIntensity={0.3}
            />
          </mesh>
        )
      })}
    </group>
  )
}

// Scientific instrument selection
function ScientificInstrument({ type }) {
  if (type === 'camera') {
    return (
      <group position={[0.48, -0.35, 0.68]}>
        <mesh>
          <cylinderGeometry args={[0.2, 0.24, 0.35, 32]} />
          <meshStandardMaterial color="#323b4a" metalness={0.8} />
        </mesh>

        <mesh position={[0, 0, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.14, 0.14, 0.04, 32]} />
          <meshStandardMaterial
            color="#397bb9"
            metalness={0.7}
            roughness={0.15}
            emissive="#143b70"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
    )
  }

  if (type === 'spectrometer') {
    return (
      <group position={[0.48, -0.35, 0.72]}>
        <mesh>
          <boxGeometry args={[0.55, 0.55, 0.65]} />
          <meshStandardMaterial color="#9ba8b8" metalness={0.75} />
        </mesh>

        <mesh position={[0, 0, 0.35]}>
          <cylinderGeometry args={[0.18, 0.18, 0.12, 24]} />
          <meshStandardMaterial color="#d5a94e" metalness={0.8} />
        </mesh>

        <mesh position={[0, 0, 0.43]}>
          <sphereGeometry args={[0.1, 20, 20]} />
          <meshStandardMaterial color="#58b9df" metalness={0.7} />
        </mesh>
      </group>
    )
  }

  // Scientific radar
  return (
    <group position={[0.48, -0.35, 0.75]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.36, 0.36, 0.12, 32]} />
        <meshStandardMaterial color="#aeb8c5" metalness={0.85} />
      </mesh>

      <mesh position={[0, 0, 0.15]}>
        <sphereGeometry args={[0.1, 20, 20]} />
        <meshStandardMaterial color="#d5a94e" metalness={0.8} />
      </mesh>
    </group>
  )
}

// Propulsion selection
function PropulsionSystem({ type }) {
  if (type === 'chemical') {
    return (
      <group position={[0, -0.85, -0.4]}>
        {[-0.4, 0.4].map((side) => (
          <group key={side} position={[side, 0, 0]}>
            <mesh rotation={[Math.PI, 0, 0]}>
              <cylinderGeometry args={[0.13, 0.22, 0.55, 24]} />
              <meshStandardMaterial color="#8b96a5" metalness={0.9} />
            </mesh>

            <mesh position={[0, -0.3, 0]}>
              <cylinderGeometry args={[0.11, 0.17, 0.12, 24]} />
              <meshStandardMaterial color="#4c5969" metalness={0.8} />
            </mesh>
          </group>
        ))}
      </group>
    )
  }

  if (type === 'electric') {
    return (
      <group position={[0, -0.85, -0.4]}>
        {[-0.35, 0.35].map((side) => (
          <group key={side} position={[side, 0, 0]}>
            <mesh rotation={[Math.PI, 0, 0]}>
              <cylinderGeometry args={[0.12, 0.16, 0.4, 24]} />
              <meshStandardMaterial
                color="#397bb9"
                metalness={0.8}
                emissive="#155caa"
                emissiveIntensity={0.5}
              />
            </mesh>

            <mesh position={[0, -0.23, 0]}>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial
                color="#54caff"
                emissive="#168bd0"
                emissiveIntensity={1.5}
              />
            </mesh>
          </group>
        ))}
      </group>
    )
  }

  // Cold-gas thrusters
  return (
    <group position={[0, -0.75, -0.4]}>
      {[-0.45, 0.45].map((side) => (
        <mesh
          key={side}
          position={[side, 0, 0]}
          rotation={[Math.PI, 0, 0]}
        >
          <cylinderGeometry args={[0.07, 0.11, 0.22, 16]} />
          <meshStandardMaterial color="#aab4c2" metalness={0.9} />
        </mesh>
      ))}
    </group>
  )
}

// Communication system selection
function CommunicationSystem({ type }) {
  if (type === 'high-gain') {
    return (
      <group position={[0, 1.18, 0.55]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <sphereGeometry args={[0.48, 32, 20, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial
            color="#d6dce4"
            metalness={0.9}
            roughness={0.2}
            side={2}
          />
        </mesh>

        <mesh position={[0, -0.1, 0.05]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshStandardMaterial color="#e5b85c" metalness={0.8} />
        </mesh>
      </group>
    )
  }

  if (type === 'medium-gain') {
    return (
      <group position={[0, 1.12, 0.55]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <sphereGeometry args={[0.27, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial
            color="#c6d0df"
            metalness={0.85}
            side={2}
          />
        </mesh>
        <mesh position={[0, -0.1, 0.05]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#e5b85c" />
        </mesh>
      </group>
    )
  }

  // Low-gain antenna
  return (
    <group position={[0, 0.9, 0.55]}>
      <mesh>
        <cylinderGeometry args={[0.025, 0.025, 0.75, 12]} />
        <meshStandardMaterial color="#d5dce5" metalness={0.9} />
      </mesh>
      <mesh position={[0, 0.4, 0]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#d5a94e" metalness={0.8} />
      </mesh>
    </group>
  )
}

// Radioisotope power system
function RTGUnit() {
  return (
    <group position={[0.85, -0.35, -0.45]}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.25, 0.25, 0.85, 24]} />
        <meshStandardMaterial color="#b6a16f" metalness={0.85} />
      </mesh>

      {[-0.48, 0.48].map((side) => (
        <mesh key={side} position={[side, 0, 0]}>
          <cylinderGeometry args={[0.27, 0.27, 0.08, 24]} />
          <meshStandardMaterial color="#687789" metalness={0.85} />
        </mesh>
      ))}
    </group>
  )
}

// Main spacecraft
export function SatelliteModel({ spacecraft }) {
  const busScale =
    spacecraft.bus === 'lightweight'
      ? 0.75
      : spacecraft.bus === 'heavy'
        ? 1.3
        : 1

  const hasSolarPanels = spacecraft.power !== 'rtg'
  const panelSize = spacecraft.power === 'advanced-solar' ? 1.3 : 1

  return (
    <group rotation={[0.25, -0.35, 0]}>
      {/* Central spacecraft bus */}
      <mesh scale={busScale}>
        <boxGeometry args={[1.25, 1.3, 1.15]} />
        <meshStandardMaterial
          color="#b9a77e"
          metalness={0.75}
          roughness={0.35}
        />
      </mesh>

      {/* Equipment platform */}
      <mesh position={[0, 0.68, 0]}>
        <boxGeometry args={[1.05, 0.12, 0.95]} />
        <meshStandardMaterial color="#d5d8dc" metalness={0.8} />
      </mesh>

      {/* Thermal insulation */}
      <mesh position={[0, 0, 0.59]}>
        <boxGeometry args={[0.85, 0.9, 0.035]} />
        <meshStandardMaterial
          color="#c69b45"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Solar array supports */}
      {hasSolarPanels && (
        <>
          <mesh position={[1.35, 0, 0]}>
            <boxGeometry args={[1.5, 0.08, 0.08]} />
            <meshStandardMaterial color="#aeb8c5" metalness={0.9} />
          </mesh>

          <mesh position={[-1.35, 0, 0]}>
            <boxGeometry args={[1.5, 0.08, 0.08]} />
            <meshStandardMaterial color="#aeb8c5" metalness={0.9} />
          </mesh>

          <SolarPanel position={[2.55, 0, 0]} size={panelSize} />
          <SolarPanel position={[-2.55, 0, 0]} size={panelSize} />
        </>
      )}

      {/* RTG replaces solar arrays */}
      {spacecraft.power === 'rtg' && <RTGUnit />}

      {/* Selected communication system */}
      <mesh position={[0, 0.85, 0.55]}>
        <cylinderGeometry args={[0.035, 0.035, 0.65, 16]} />
        <meshStandardMaterial color="#c6cbd3" metalness={0.9} />
      </mesh>
      <CommunicationSystem type={spacecraft.communication} />

      {/* Selected scientific instrument */}
      <ScientificInstrument type={spacecraft.instrument} />

      {/* Selected propulsion system */}
      <PropulsionSystem type={spacecraft.propulsion} />
    </group>
  )
}

// 3D scene
function SpaceScene({ spacecraft }) {
  return (
    <>
      <color attach="background" args={['#050817']} />

      <ambientLight intensity={1.1} />

      <directionalLight
        position={[5, 7, 5]}
        intensity={2.5}
        castShadow
      />

      <pointLight position={[-5, 2, -4]} intensity={1.5} color="#638bff" />

      <Stars
        radius={100}
        depth={50}
        count={2500}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      <SatelliteModel spacecraft={spacecraft} />

      <OrbitControls
        enablePan
        enableZoom
        enableRotate
        minDistance={4}
        maxDistance={12}
      />
    </>
  )
}

// Exported component
export default function Spacecraft3D({ spacecraft }) {
  return (
    <div style={{ width: '100%', height: '500px', borderRadius: '12px', overflow: 'hidden' }}>
      <Canvas camera={{ position: [5, 4, 7], fov: 45 }} shadows>
        <SpaceScene spacecraft={spacecraft} />
      </Canvas>
    </div>
  )
}
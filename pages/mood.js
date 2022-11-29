import { Canvas } from '@react-three/fiber'

import styles from '../styles/Mood.module.css'

function Mood() {
  return (
    <div className={styles.container}>
      <Canvas>
        <ambientLight intensity={2} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color='blue'/>
        </mesh>
      </Canvas>
    </div>
  )
}

export default Mood
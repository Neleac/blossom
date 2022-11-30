import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import styles from '../styles/Mood.module.css'

import { Avatar } from '../src/avatar'

function Mood() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Mood
      </h1>
      <Canvas>
        <ambientLight intensity={0.1}/>
        <directionalLight position={[0, 0, 1]}/>
        <Suspense fallback={null}>
          <Avatar position={[0, -17, 0]} scale={[10, 10, 10]}/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Mood
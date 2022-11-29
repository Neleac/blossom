import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import styles from '../styles/Mood.module.css'

import { Avatar } from '../src/avatar'

function Mood() {
  return (
    <div className={styles.container}>
      <Canvas>
        <ambientLight />
        <Suspense fallback={null}>
          <Avatar />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Mood
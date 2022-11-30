import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Flower } from '../src/flower'
import styles from '../styles/Growth.module.css'


function Growth() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Growth
      </h1>
      <div className={styles.canvas}>
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 0, 1]} />
          <Suspense fallback={null}>
            <Flower position={[0, -6, -6]} rotation={[0, -80, 0]} scale={[0.5, 0.5, 0.5]} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default Growth
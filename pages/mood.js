import React, { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Slider } from 'antd';

import { Avatar } from '../src/avatar'
import styles from '../styles/Mood.module.css'


function Mood() {
  const MIN = -5, MAX = 5, MID = (MIN + MAX) / 2;
  const [value, setValue] = useState(MID);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Mood
      </h1>
      <Slider min={MIN} max={MAX} value={value} onChange={setValue} className={styles.slider} />
      <div className={styles.canvas}>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 0, 1]} />
          <Suspense fallback={null}>
            <Avatar min={MIN} max={MAX} value={value} position={[0, -17, 0]} scale={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default Mood
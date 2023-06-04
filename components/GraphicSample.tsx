'use client'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

import { Canvas, useFrame } from '@react-three/fiber'

export default function GraphicSample() {
  const Box = (props: JSX.IntrinsicElements['mesh']) => {
    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const [rotation, setRotation] = useState({
      x: Math.random() * 0.02 - 0.01,
      y: Math.random() * 0.02 - 0.01,
    })
    const [color, setColor] = useState(
      new THREE.Color(0.3, 0.5, Math.random() * 0.2 + 0.4),
    )
    const materialRef = useRef<THREE.MeshStandardMaterial>(null!)

    useFrame((state, delta) => {
      ref.current.rotation.x += rotation.x
      ref.current.rotation.y += rotation.y
      materialRef.current.color.lerp(color, 0.01)
    })

    useEffect(() => {
      const interval = setInterval(() => {
        setColor(new THREE.Color(0.3, 0.5, Math.random() * 0.2 + 0.4))
      }, 2000)
      return () => clearInterval(interval)
    }, [])

    return (
      <mesh
        {...props}
        ref={ref}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          ref={materialRef}
          color={hovered ? 'white' : color}
        />
      </mesh>
    )
  }

  return (
    <>
      <div className='w-screen ml-[calc(50%-50vw)] relative'>
        <Canvas
          style={{
            width: 100 + 'vw',
            height: 50 + 'vh',
            top: 0,
            left: 0,
          }}
        >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-2.0, 0, 0]} />
          <Box position={[2, 0, 0]} />
        </Canvas>
      </div>
    </>
  )
}

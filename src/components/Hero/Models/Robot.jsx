import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Robot = ({ position, scale }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial
        color="#22d3ee"
        metalness={0.8}
        roughness={0.2}
        emissive="#004d5b"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

export default Robot;
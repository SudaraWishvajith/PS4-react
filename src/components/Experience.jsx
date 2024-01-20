import '../App.css';
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  OrbitControls,
  SpotLight,
  GizmoHelper,
  GizmoViewport,
  PivotControls
} from "@react-three/drei"
import { Controller } from './controller';

export const Experience = () => {
  return (
    <>
      {/* <OrbitControls enableZoom={false} /> */}
      <ambientLight intensity={0.1} color={'white'} />
      <directionalLight position={[-5, -8, 3]} intensity={2} color="#e7aefb" castShadow={true} />
      <directionalLight position={[7, 8, 0]} intensity={4} color="#5d75f0" castShadow={true} />

      <Float>
        <Controller position={[2.5, 0, 1]} scale={1.5} />
       
      </Float> 
      <mesh scale={[2.5, 2.5, 2.5]} position={[5, -1, -2]} castShadow={true} receiveShadow={true}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            opacity={0.8}
            metalness={0}
            roughness={0.4}
            distort={0.5}
            speed={1}
            color="white"
          />
        </mesh>
{/* 
      <Float>
        <mesh scale={[0.5, 0.3, 0.5]} position={[3, 3, 1]} castShadow={true} receiveShadow={true}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            opacity={0.8}
            metalness={0}
            roughness={0.5}
            distort={0.5}
            speed={1}
            color="white"
          />
        </mesh>
      </Float> */}
{/* 
      <Float>
        <mesh scale={[0.8, 0.5, 0.3]} position={[1.5, -4, -6]} castShadow={true} receiveShadow={true}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            opacity={0.8}
            metalness={0}
            roughness={0.5}
            distort={0.3}
            speed={1}
            color="white"
          />
        </mesh>
      </Float> */}

      {/* <Float>
        <mesh scale={[0.8, 0.8, 0.8]} position={[-1.8, 2.5, -5]} castShadow={true} receiveShadow={true}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            opacity={0.8}
            metalness={0}
            roughness={0.5}
            distort={0.7}
            speed={1}
            color="white"
          />
        </mesh>
      </Float> */}

    

    </>

  );
}
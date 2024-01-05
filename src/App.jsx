import { Canvas } from "@react-three/fiber";
import "./App.css";
import {
  useGLTF,
  Center,
  Caustics,
  Environment,
  Lightformer,
  RandomizedLight,
  PerformanceMonitor,
  AccumulativeShadows,
  MeshTransmissionMaterial,
  Box,
  Plane,
  Instances,
  Instance,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";

function App() {
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [-15, 0, 120], fov: 75, far: 1000, near: 0.1 }}
      >
        <ambientLight args={[0xff0000]} intensity={0.1} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
          makeDefault
          // minPolarAngle={Math.PI}
          // maxPolarAngle={Math.PI}
        />
        <Box
          args={[10, 10, 10]}
          rotation={[-Math.PI / 2, 0, 0]}
          material-color="hotpink"
          autoRotate
          autoRotateSpeed={1}
        ></Box>
        <Instances
          limit={1000} // Optional: max amount of items (for calculating buffer size)
          range={1000} // Optional: draw-range
        >
          <boxGeometry />
          <meshStandardMaterial />
          <Instance
            color="red"
            scale={2}
            position={[1, 2, 3]}
            rotation={[Math.PI / 3, 0, 0]}
          />
        </Instances>
        <Plane args={[100, 100]} rotateZ={Math.PI} autoRotate>
          <meshStandardMaterial color="hotpink" side={THREE.DoubleSide} />
        </Plane>
      </Canvas>
    </>
  );
}

export default App;

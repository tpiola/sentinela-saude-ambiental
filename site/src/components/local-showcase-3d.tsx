"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Cubo simples como demonstração de presença 3D no hero local.
function LogoCube() {
  return (
    <mesh rotation={[0.35, 0.55, 0]}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial color="#2563eb" metalness={0.35} roughness={0.45} />
    </mesh>
  );
}

export function LocalShowcase3D() {
  return (
    <div className="h-72 w-full overflow-hidden rounded-2xl bg-zinc-950 shadow-inner ring-1 ring-white/10">
      <Canvas camera={{ position: [2.4, 1.8, 3.2], fov: 45 }}>
        <color attach="background" args={["#09090b"]} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 3]} intensity={1.15} />
        <LogoCube />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
}

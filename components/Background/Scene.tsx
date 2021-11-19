import {FC} from "react";
import {Canvas} from "@react-three/fiber";
import Particle from "./Items/Particle";

const random = (min = 0,max = 1) => Math.random() * (max - min) + min;

export const Scene : FC = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            {Array.from(Array(50)).map((_, i) => (
                <Particle key={i} position={[random(-5,5), random(-4,4), random(-4,4)]}  />
            ))}
        </Canvas>
    )
}

export default  Scene


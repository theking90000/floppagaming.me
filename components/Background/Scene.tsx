import {FC, useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import Particle from "./Items/Particle";
import {useGLTF} from "@react-three/drei";


export const random = (min = 0,max = 1) => Math.random() * (max - min) + min;

export const Scene : FC = () => {
    return (
        <Canvas>
            <light intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            {Array.from(Array(50)).map((_, i) => (
                <Particle key={i} position={[random(-6,6), random(-2,2), random(-0.25,2)]}  />
            ))}
        </Canvas>
    )
}

export default  Scene


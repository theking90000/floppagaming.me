import {FC, useRef, useState} from "react";
import {useFrame} from "@react-three/fiber";
import {Mesh} from "three";
import {random} from "../Scene";


const Particle: FC<{ position: [number, number, number] }> = ({position}) => {

    const ref = useRef<Mesh>()

    useFrame((state) => {
        if(!ref.current) return
        if(ref.current.position.x >= 6){
            ref.current.position.x = -6
            ref.current.position.y = random(-2,2)
            ref.current.position.z = random(-0.25,2)
        }
        ref.current.rotation.y = state.clock.elapsedTime;
        ref.current.position.x += 0.01;
    })

    return (
        <mesh ref={ref} position={position} scale={0.1}>
            <sphereGeometry/>
            <meshStandardMaterial  color="#faafaa"/>
        </mesh>
    )
}

export default Particle;

import {FC} from "react";


const Particle: FC<{ position: [number, number, number] }> = ({position}) => {

    return (
        <mesh  position={position} scale={0.1}>
            <sphereGeometry  />
            <meshBasicMaterial/>
        </mesh>
    )
}

export default Particle;

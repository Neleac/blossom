import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Flower(props) {
  const PROGRESS = 5; // TODO: get this from journal progress

  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/flower.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.Animation.play();
    actions.Animation.halt(PROGRESS);
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Jonquil">
          <group name="Flower" position={[-3.36, 13.87, -0.17]}>
            <primitive object={nodes.Peduncle} />
            <primitive object={nodes.Peduncle013} />
            <group name="BezierCurve">
              <skinnedMesh
                name="BezierCurve_1"
                geometry={nodes.BezierCurve_1.geometry}
                material={materials.Peduncle}
                skeleton={nodes.BezierCurve_1.skeleton}
              />
              <skinnedMesh
                name="BezierCurve_2"
                geometry={nodes.BezierCurve_2.geometry}
                material={materials.Petal}
                skeleton={nodes.BezierCurve_2.skeleton}
              />
              <skinnedMesh
                name="BezierCurve_3"
                geometry={nodes.BezierCurve_3.geometry}
                material={materials.Crown}
                skeleton={nodes.BezierCurve_3.skeleton}
              />
              <skinnedMesh
                name="BezierCurve_4"
                geometry={nodes.BezierCurve_4.geometry}
                material={materials.Filament}
                skeleton={nodes.BezierCurve_4.skeleton}
              />
              <skinnedMesh
                name="BezierCurve_5"
                geometry={nodes.BezierCurve_5.geometry}
                material={materials.Anther}
                skeleton={nodes.BezierCurve_5.skeleton}
              />
            </group>
          </group>
          <mesh
            name="Leaf"
            castShadow
            receiveShadow
            geometry={nodes.Leaf.geometry}
            material={materials.Leaf}
            rotation={[-2.85, -0.54, 2.71]}
            scale={1.84}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/flower.glb");

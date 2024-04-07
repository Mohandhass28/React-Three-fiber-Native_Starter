import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import React from "react";
import { Canvas } from "@react-three/fiber/native";
import useControls from "r3f-native-orbitcontrols";

const index = () => {
  const [OrbitControls, events] = useControls();
  return (
    <View style={styles.container} {...events}>
      <Canvas camera={{ position: [-2, 2.5, 5], fov: 30 }}>
        <OrbitControls />
        <color attach="background" args={["#512DA8"]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

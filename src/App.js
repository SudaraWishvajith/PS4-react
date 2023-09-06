import './App.css';
import { Canvas } from "@react-three/fiber";
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Scroll, ScrollControls } from '@react-three/drei';

function App() {
  return (
    <>
      <Canvas camera={{ position: [0,3, 10], fov: 42}}>
        
        <ScrollControls pages={2}>
          
          <Scroll>
            <Experience /> 
          </Scroll>
          <Scroll html>
             <Header />
          <Hero />
          </Scroll>
          
       
        </ScrollControls>
        
      </Canvas>

    </>

  );
}

export default App;

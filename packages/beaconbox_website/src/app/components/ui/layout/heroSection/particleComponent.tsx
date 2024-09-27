import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { particles } from "../../config/particles_config.json";
import { Engine } from "@tsparticles/engine";

interface ParticlesComponentProps {
  id: string;
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = ({ id }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  if (init) {
    return (
      <Particles
        id={id}
        particlesLoaded={particlesLoaded}
        options={particles}
      />
    );
  }

  return null;
};

export { ParticlesComponent };
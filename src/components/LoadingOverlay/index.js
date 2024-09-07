import React from 'react';

import { Transition, Moon, Letter, Orbit, OrbitObject } from './styles';

function LoadingOverlay({loading}) {
  return (
    <Transition>
        <Letter>K</Letter>
        <Moon>
          <Orbit>
            <OrbitObject />
          </Orbit>
        </Moon>
        <Letter>A</Letter>
      </Transition>
  );
}

export default LoadingOverlay;
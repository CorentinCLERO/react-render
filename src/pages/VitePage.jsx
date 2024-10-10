import { useEffect, useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

VitePage.propTypes = {};

function VitePage() {
  const [count, setCount] = useState(0);
  const [isSpinningLogoReact, setIsSpinningLogoReact] = useState(true);
  const [isSpinningLogoVite, setIsSpinningLogoVite] = useState(true);
  const [changeRotation, setChangeRotation] = useState(true);

  useEffect(() => {
    setChangeRotation((prev) => !prev);
  }, [isSpinningLogoReact, isSpinningLogoVite]);

  return (
    <>
      <div>
        {changeRotation ? (
          <>
            <a
              // href="https://vitejs.dev"
              // target="_blank"
              onClick={() => {
                setIsSpinningLogoVite(!isSpinningLogoVite);
              }}
            >
              <img
                src={viteLogo}
                className={`logo`}
                alt="Vite logo"
                style={{
                  animation: `${isSpinningLogoVite ? 'logo-spin' : 'logo-spin-inverse'} infinite ${count * 10}ms linear`
                }}
              />
            </a>
            <a
              // href="https://react.dev"
              // target="_blank"
              onClick={() => {
                setIsSpinningLogoReact(!isSpinningLogoReact);
              }}
            >
              <img
                src={reactLogo}
                className={`logo react`}
                alt="React logo"
                style={{
                  animation: `${isSpinningLogoReact ? 'logo-spin' : 'logo-spin-inverse'} infinite ${count * 10}ms linear`
                }}
              />
            </a>
          </>
        ) : (
          <>
            <a
              // href="https://react.dev"
              // target="_blank"
              onClick={() => {
                setIsSpinningLogoReact(!isSpinningLogoReact);
              }}
            >
              <img
                src={reactLogo}
                className={`logo react`}
                alt="React logo"
                style={{
                  animation: `${isSpinningLogoReact ? 'logo-spin' : 'logo-spin-inverse'} infinite ${count * 10}ms linear`
                }}
              />
            </a>
            <a
              // href="https://vitejs.dev"
              // target="_blank"
              onClick={() => {
                setIsSpinningLogoVite(!isSpinningLogoVite);
              }}
            >
              <img
                src={viteLogo}
                className={`logo`}
                alt="Vite logo"
                style={{
                  animation: `${isSpinningLogoVite ? 'logo-spin' : 'logo-spin-inverse'} infinite ${count * 10}ms linear`
                }}
              />
            </a>
          </>
        )}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div>count is {count}</div>
        <button onClick={() => setCount((count) => count + 1)}>Increment</button>
        <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default VitePage;

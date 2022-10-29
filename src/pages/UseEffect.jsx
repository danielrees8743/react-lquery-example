import './useEffect.css';
import ninjaLogo from '../assets/net-ninja-logo.png';

export default function UseEffect() {
  return (
    <div>
      <main className="useEffect">
        <h1>useEffect</h1>
        <p>Why do we need this much code to use a fetch?</p>
        <span>Coz the ninja told me to</span>
        <img src={ninjaLogo} alt="" />
      </main>
    </div>
  );
}

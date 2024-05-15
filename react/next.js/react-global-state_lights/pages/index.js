import Link from "../components/Link";

export default function HomePage({ lights }) {
  const lightsAreOn = lights.filter((light) => light.isOn === true);

  return (
    <div>
      <h1>Home</h1>
      <p>{lightsAreOn.length} light(s) are on.</p>
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}

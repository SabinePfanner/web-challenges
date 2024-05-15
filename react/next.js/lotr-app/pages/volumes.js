import Link from "next/link";

export default function VolumesOverview() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>Einleitung</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship of the ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The two towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The return of the king
          </Link>
        </li>
      </ul>
    </div>
  );
}

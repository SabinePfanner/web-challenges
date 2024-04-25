import "./Tag.css";

export default function Tag({ tag }) {
  const isAdmin = `tag ${tag === "admin" ? "tag--highlight" : ""}`;
  return <li className={isAdmin}>{tag}</li>;
}

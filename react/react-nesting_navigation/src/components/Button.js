export function Button({ onClick, ariaLabel, children }) {
  return (
    <button type="button" aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
}

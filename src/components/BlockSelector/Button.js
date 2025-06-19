export default function Button({ buttonText, id, style }) {
  return (
    <button
      id={id}
      style={style}
      onClick={() => console.log("Button clicked:", id)}
    >
      {buttonText}
    </button>
  );
}

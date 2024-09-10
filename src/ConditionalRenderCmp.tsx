export function Xcmp({ resetState }: { resetState: () => void }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        right: "20px",
        width: "10px",
        height: "10px",
        cursor: "pointer",
      }}
      onClick={resetState}
    >
      X
    </div>
  );
}

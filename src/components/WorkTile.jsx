export default function WorkTile({ index, name, blurb }) {
  return (
    <div className="tile">
      <div className={`tile-art v${index}`} aria-hidden="true">
        <span className="tile-num">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="tile-body">
        <p className="tile-name">{name}</p>
        <p className="tile-blurb">{blurb}</p>
      </div>
    </div>
  );
}

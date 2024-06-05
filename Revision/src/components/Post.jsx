const names = ["Yash", "Suryawanshi"];

export default function Post() {
  const chooseName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <p>{chooseName}</p>
      <p>Body</p>
    </div>
  );
}

import Confetti from "react-confetti";
export default function Winner({ value }) {
  return (
    <div className="winner">
      <Confetti />
      <p>winner is <span style={{color:'green'}}>{value}</span> </p>
    </div>
  );
}

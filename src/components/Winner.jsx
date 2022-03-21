import Confetti from "react-confetti";
export default function Winner({ value }) {
  return (
    <div className="winner">
      <Confetti />
      <p>winner is {value} </p>
    </div>
  );
}

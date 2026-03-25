import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  function getRandomProductId() {
    return Math.floor(Math.random() * 10) + 1;
  }
  return (
    <>
      <div>
        Home
        <button onClick={() => navigate(`/product/${getRandomProductId()}`)}>Go to products</button>
      </div>
    </>
  );
}

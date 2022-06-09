import { CartState } from "../context/Context";

const Home: React.FC = () => {
  const { state } = CartState();

  console.log(state);

  return(
    <>
      <h1>Home</h1>
    </>
  )
}

export default Home;
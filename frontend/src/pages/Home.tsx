import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer";
// import Counter from "../features/counter/Counter"
// import Login from "../features/login/Login";
// import Todo from "../features/todo/Todo";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container className="bg-base-200 grid grid-cols-1  place-items-center min-h-screen max-h-full">
        {/* <Login /> */}
        {/* <Todo /> */}
        <p>Hello</p>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;

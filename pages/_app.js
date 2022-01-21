import Container from "../components/Container/Container";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
};

export default App;

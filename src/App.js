import Blog from "./components/blog/Blog";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
        <section className="container">
            <Navbar />
            <Main />
            <Blog />
        </section>
    );
}

export default App;

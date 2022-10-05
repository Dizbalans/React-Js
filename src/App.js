import Header from "./components/header/header";
import Content from "./components/content/content";
import Features from "./components/features/features";
import WorksApp from "./components/works/works";
import Team from "./components/team/team";
import Facts from "./components/facts/facts";
import Discuss from "./components/discuss/discuss";
import Footer from "./components/footer/footer";
import FooterEnd from "./components/footer__end/footer__end";

function App() {
  return (
    <div className="App">
        <Header/>
        <Content/>
        <Features/>
        <WorksApp/>
        <Team/>
        <Facts/>
        <Discuss/>
        <Footer/>
        <FooterEnd/>
    </div>
  );
}

export default App;

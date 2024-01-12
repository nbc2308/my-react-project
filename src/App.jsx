import LeftMenu from "./layout/LeftMenu"
import Container from "./layout/Container";
import RightMenu from "./layout/RightMenu"

function App() {
  return (
    <main className="w-[1440px] h-[8063px] m-auto block">
        <LeftMenu />
        <Container />
        <RightMenu />
    </main>
  );
}

export default App

import Search from "./components/ui/search";
import Header from "./components/ui/header";
import AppRoutes from "./routes/routes";
import Searchbar from "./components/templates/searchbar";

function App() {
  return (
    <main className="py-5 px-10 lg:px-[15%] xl:px-[20%]">
      <AppRoutes>
        <Header />
        <Searchbar />
      </AppRoutes>
    </main>
  );
}

export default App;

import Header from "./components/ui/header";
import AppRoutes from "./routes/routes";
import AppProviders from "./providers/app";

function App() {
  return (
    <main className="py-5 px-10 lg:px-[15%] xl:px-[20%]">
      <AppProviders>
        <AppRoutes>
          <Header />
        </AppRoutes>
      </AppProviders>
    </main>
  );
}

export default App;

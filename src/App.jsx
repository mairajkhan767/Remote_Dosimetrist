import Preloader from "./components/Preloader";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Preloader />
      <Header />
      <main className="min-h-screen pt-24 flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          {/* Main Content */}
        </h1>
      </main>
    </>
  );
}

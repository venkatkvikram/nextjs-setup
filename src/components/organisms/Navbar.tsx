import { Button } from "../atoms/Button";

export const NavBar = () => (
  <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
    <h1 className="text-xl font-bold">MyApp</h1>
    <div className="flex gap-4">
      <Button>Home</Button>
      <Button>About</Button>
      <Button>Contact</Button>
    </div>
  </nav>
);

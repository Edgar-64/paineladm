import { Avatar } from "../atoms/Avatar";
import { SearchBar } from "../molecules/SearchBar";

export const Header = () => (
  <header className="flex justify-between items-center p-4 border-b">
    <SearchBar />
    <div className="flex items-center gap-2">
      <Avatar />
      <span>Usuário</span>
    </div>
  </header>
);

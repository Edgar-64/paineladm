import UserView from "@/src/features/dashboard/DashView";
import { SearchBar } from "../molecules/SearchBar";

export const Header = () => (
  <header className="flex justify-between items-center p-4 border-b">
    <SearchBar />
    <div className="flex items-center gap-2">
      
      <UserView/>
    </div>
  </header>
);

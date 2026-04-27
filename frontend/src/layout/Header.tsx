import { Logo } from "../components/Logo";
import { Search } from "../components/Search";

export function Header(){
    return (
        <div className="flex bg-[#2D222E] px-[42px] py-3">
            <Logo></Logo>
            <Search></Search>
        </div>
    )
}
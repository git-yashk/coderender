import CodeIcon from "./icons/CodeIcon";
import GithubIcon from "./icons/GithubIcon";

export default function Header() {
    return (
        <header className="h-10 border-b-4 border-[#09090b] flex justify-between items-center px-8">
            <div className="flex gap-2 select-none items-center">
                <CodeIcon height="20" />
                <span className="font-bold">Code.render</span>
            </div>
            <div>
                <a href="https://github.com/git-yashk/coderender" target="_blank"><GithubIcon /></a>
            </div>
        </header>
    )
}
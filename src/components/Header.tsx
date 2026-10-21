import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-slate-800/70 px-4 py-6 md:px-8">
      <div>
        <p className="text-2xl font-bold">
          <span className="text-gradient">Alfredo Sobrados González</span>
        </p>
      </div>
      <div className="flex items-center gap-2 text-slate-300">
        <Button asChild variant="ghost" size="icon">
          <a href="https://github.com/asobrados03" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon className="h-5 w-5" aria-hidden="true" />
          </a>
        </Button>
        <Button asChild variant="ghost" size="icon">
          <a href="https://www.linkedin.com/in/alfredo-sobrados-gonzalez/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon className="h-5 w-5" aria-hidden="true" />
          </a>
        </Button>
        <Button asChild variant="ghost" size="icon">
          <a href="mailto:alfredo.sobrados.gonzalez@gmail.com" aria-label="Enviar correo electrónico a Alfredo Sobrados">
            <Mail className="h-5 w-5" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

const Header = () => {
  return (
    <header className="py-6 px-4 md:px-8 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">
          <span className="text-gradient">Alfredo Sobrados</span>
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <a 
          href="https://github.com/asobrados03" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Button variant="ghost" size="icon">
            <GitHubIcon className="h-5 w-5" />
          </Button>
        </a>
        <a 
          href="https://www.linkedin.com/in/alfredo-sobrados-gonzalez/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Button variant="ghost" size="icon">
            <LinkedInIcon className="h-5 w-5" />
          </Button>
        </a>
        <a 
          href="mailto:alfredo.sobrados.gonzalez@gmail.com" 
          aria-label="Email"
        >
          <Button variant="ghost" size="icon">
            <Mail className="h-5 w-5" />
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;

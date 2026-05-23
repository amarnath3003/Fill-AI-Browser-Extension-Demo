import { Zap } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-16">
          <div>
             <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-lime flex items-center justify-center shadow-[0_0_20px_rgba(200,241,53,0.3)]">
                  <Zap className="w-5 h-5 text-black" fill="currentColor" />
                </div>
                <span className="text-xl font-display font-bold">FillAI</span>
             </div>
             <p className="text-white/50 text-sm font-body max-w-xs">
                The smartest AI-powered form and job application autofiller for your browser.
              </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h5 className="font-display font-bold mb-4">Product</h5>
              <ul className="space-y-3">
                <li><a href="#features" className="text-white/50 hover:text-white transition-colors text-sm font-body">Features</a></li>
                <li><a href="https://chrome.google.com/webstore" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors text-sm font-body">Chrome Extension</a></li>
                <li><a href="#pricing" className="text-white/50 hover:text-white transition-colors text-sm font-body">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-display font-bold mb-4">Company</h5>
              <ul className="space-y-3">
                <li><a href="#about" className="text-white/50 hover:text-white transition-colors text-sm font-body">About</a></li>
                <li><a href="#support" className="text-white/50 hover:text-white transition-colors text-sm font-body">Support (FAQ)</a></li>
                <li>
                  <button 
                    onClick={() => onOpenModal('contact')} 
                    className="text-white/50 hover:text-white transition-colors text-sm font-body cursor-pointer text-left bg-transparent border-none p-0 outline-none block"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-body">
            &copy; {new Date().getFullYear()} FillAI. All rights reserved. By Amarnath.
          </p>
          <div className="flex gap-6">
            <button 
              onClick={() => onOpenModal('privacy')} 
              className="text-white/40 hover:text-white transition-colors text-xs font-body cursor-pointer bg-transparent border-none p-0 outline-none"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onOpenModal('terms')} 
              className="text-white/40 hover:text-white transition-colors text-xs font-body cursor-pointer bg-transparent border-none p-0 outline-none"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

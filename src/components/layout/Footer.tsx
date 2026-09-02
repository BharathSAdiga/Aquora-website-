import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-velora-primary text-white py-12 border-t-4 border-velora-accent">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-serif text-3xl mb-2 text-velora-accent">VELORA</h2>
            <p className="text-sm uppercase tracking-widest text-velora-accent/80 mb-6">
              Yoga & Dance Studio
            </p>
            <p className="text-sm text-gray-300 italic max-w-xs">
              Move Smoothly, Breathe Deeply, Live Fully
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-xl mb-4 text-velora-accent">Contact Us</h3>
            <p className="text-sm text-gray-300 mb-2">No. 3/1, 1st Floor, Skypool Fitness Studio Building</p>
            <p className="text-sm text-gray-300 mb-2">4th B Main Road, Dr. Vivekananda Layout</p>
            <p className="text-sm text-gray-300 mb-2">7th Phase, J. P. Nagar, Bengaluru - 560078</p>
            <p className="text-sm text-gray-300 mt-4 font-semibold text-velora-accent">📞 6366007494</p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-xl mb-4 text-velora-accent">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Yoga Classes</Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Dance Classes</Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Schedule</Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">About Us</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Velora Yoga & Dance Studio. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

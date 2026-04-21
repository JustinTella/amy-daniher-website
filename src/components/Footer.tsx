import { Link } from 'react-router-dom';
import { MapPin, Phone, FileText, Star, HeartPulse, Stethoscope, Users, Newspaper, Mail } from 'lucide-react';
import logoImage from '@/assets/colorlogo.png';

function Footer() {
  const navigationItems = [
    { to: '/membership', label: 'Membership', icon: HeartPulse },
    { to: '/services', label: 'Services', icon: Stethoscope },
    { to: '/about', label: 'About Us', icon: Users },
    { to: '/blog', label: 'Blog', icon: Newspaper },
    { to: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <footer className="border-t border-navy/12 bg-light-gray">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_0.72fr_0.78fr] md:gap-8">
          <div>
            <p className="mb-3 border-b border-gold/50 pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy">
              Our Office
            </p>
            <div className="space-y-3 text-[15px] leading-6.5 text-navy/80">
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" />
                <span>
                  34 N. San Mateo Drive, Suite #1
                  <br />
                  San Mateo, CA94401
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <span>
                  <span className="font-medium text-navy">Telephone:</span> 650-393-5851
                </span>
              </p>
              <p className="flex items-center gap-3">
                <FileText className="h-4 w-4 shrink-0 text-gold" />
                <span>
                  <span className="font-medium text-navy">Fax:</span> 650-393-5871
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <span>info@AmyDaniherMD.com</span>
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 border-b border-gold/50 pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy">
              Navigation
            </p>
            <nav className="flex flex-col items-start gap-3">
              {navigationItems.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  className="inline-flex items-center gap-3 text-[15px] text-navy/78 transition-colors duration-200 hover:text-gold"
                >
                  <Icon className="h-4 w-4 text-gold" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-3 border-b border-gold/50 pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy">
              Reviews
            </p>
            <div className="space-y-2.5">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Amy%20Sawyer%20Daniher%2C%20M.D.%2C%2034%20N%20San%20Mateo%20Drive%20%231%2C%20San%20Mateo%2C%20CA%2094401"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[15px] text-navy/78 transition-colors duration-200 hover:text-gold"
              >
                <Star className="h-4 w-4 text-gold" />
                Google Reviews
              </a>
              <br />
              <a
                href="https://www.yelp.com/search?find_desc=Amy%20Sawyer%20Daniher%2C%20M.D.&find_loc=San%20Mateo%2C%20CA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[15px] text-navy/78 transition-colors duration-200 hover:text-gold"
              >
                <Star className="h-4 w-4 text-gold" />
                Yelp Reviews
              </a>
            </div>
            <div className="mt-8 flex justify-center">
              <img
                src={logoImage}
                alt="Amy Sawyer Daniher, M.D."
                className="h-12 w-auto object-contain md:h-14"
              />
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-2.5 border-t border-navy/12 pt-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[12px] tracking-[0.08em] text-navy/56">
            Copyright {new Date().getFullYear()} Amy Sawyer Daniher, M.D. All rights reserved.
          </p>
          <div className="flex gap-6 text-[12px] tracking-[0.08em] text-navy/56">
            <Link to="/privacy-policy" className="transition-colors hover:text-navy">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="transition-colors hover:text-navy">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

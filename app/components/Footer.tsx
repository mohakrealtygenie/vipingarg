import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'

const footerLinks = {
  'Vipin Garg': {
    description:
      'Building financial futures through education, investment, and smart financing.',
  },
  'Quick Links': [
    { label: 'Coaching', href: '/coaching' },
    { label: 'Investing', href: '#investing' },
    { label: 'Mortgages', href: '#mortgages' },
    { label: 'About', href: '#about' },
  ],
  Services: [
    { label: 'CFA Exam Coaching', href: '/coaching' },
    { label: 'Exempt Market Investing', href: '#investing' },
    { label: 'Mortgage Solutions', href: '#mortgages' },
    { label: 'Book a Consultation', href: '#contact' },
  ],
  Contact: [
    { label: 'contact@vipingarg.com', href: 'mailto:contact@vipingarg.com', icon: HiEnvelope },
    { label: 'Schedule a call', href: '#contact', icon: HiPhone },
    { label: 'Canada', href: '#', icon: HiMapPin },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <h3 className="font-[family-name:var(--font-apple)] text-lg font-bold text-white mb-3">
              Vipin Garg
            </h3>
            <p className="text-sm leading-relaxed">
              {footerLinks['Vipin Garg'].description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks['Quick Links'].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.Contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                  >
                    <link.icon size={14} className="shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5">
          <p className="text-xs text-white/40 text-center">
            © {new Date().getFullYear()} Vipin Garg. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

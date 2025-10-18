import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">DesignPro Studio</h3>
            <p className="text-gray-400">
              Professional design templates for creative professionals
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Templates</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/templates?category=social-media" className="hover:text-white transition-colors">Social Media</Link></li>
              <li><Link href="/templates?category=print" className="hover:text-white transition-colors">Print</Link></li>
              <li><Link href="/templates?category=presentation" className="hover:text-white transition-colors">Presentation</Link></li>
              <li><Link href="/templates?category=marketing" className="hover:text-white transition-colors">Marketing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Dribbble</a></li>
              <li><a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Behance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} DesignPro Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
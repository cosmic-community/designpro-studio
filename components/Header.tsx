import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">
            DesignPro Studio
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              href="/templates" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Templates
            </Link>
            <Link 
              href="/team" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Team
            </Link>
            <Link 
              href="/testimonials" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Testimonials
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
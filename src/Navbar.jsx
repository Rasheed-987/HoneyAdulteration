import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const location = useLocation()

  const navItems = [
    {
      name: "Dashboard",
      href: "/",
      icon: "📊", // Simple emoji icon for dashboard
    },
    {
      name: "Prediction Model",
      href: "/prediction",
      icon: "🧪", // Simple emoji icon for prediction
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-honey-500 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                <path d="M5,16.577l7,4.03l7-4.03V7.423l-7-4.03l-7,4.03V16.577z M19,15.423l-7,4.03l-7-4.03V8.577l7-4.03l7,4.03 V15.423z M12,1L3,6v12l9,5l9-5V6L12,1z" />
              </svg>
            </div>
            <span className="font-bold text-xl text-honey-600">Honey Analysis</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-4 mx-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.href ? "bg-honey-500 text-white" : "text-honey-700 hover:bg-honey-100"
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar


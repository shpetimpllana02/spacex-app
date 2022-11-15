import { useState } from "react"
import { Link } from "react-router-dom"
import { SiSpacex } from "react-icons/si"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="absolute flex items-center justify-between px-5 w-full">
        <div>
          <Link to="/">
            <SiSpacex className="text-8xl text-white" />
          </Link>
        </div>

        <nav className={`${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/capsules" className="text-white text-sm">
                Capsules
              </Link>
            </li>
            <li>
              <Link to="/cores" className="text-white text-sm">
                Cores
              </Link>
            </li>
            <li>
              <Link to="/crew" className="text-white text-sm">
                Crew
              </Link>
            </li>
            <li>
              <Link to="/dragons" className="text-white text-sm">
               Dragons
              </Link>
            </li>
          
          </ul>
        </nav>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-sm uppercase tracking-wider"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
    </>
  )
}
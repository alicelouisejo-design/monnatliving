import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { CartDrawer } from './components/CartDrawer'
import { Home } from './pages/Home'
import { ProductDetail } from './pages/ProductDetail'
import { Room } from './pages/Room'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-brand-cream text-brand-ink selection:bg-brand-terracotta/20 selection:text-brand-slate">
          
          {/* Header */}
          <Header />
          
          {/* Main Content Area */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/room/:roomSlug" element={<Room />} />
              <Route path="/bedroom" element={<Room roomSlug="bedroom" />} />
              <Route path="/bathroom" element={<Room roomSlug="bathroom" />} />
              <Route path="/living-space" element={<Room roomSlug="living-space" />} />
              <Route path="/smart-living" element={<Room roomSlug="smart-living" />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <Footer />
          
          {/* Slide-out Cart Drawer */}
          <CartDrawer />
          
        </div>
      </Router>
    </CartProvider>
  )
}

export default App

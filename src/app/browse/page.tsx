import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              ReWear
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/browse" className="text-primary-600 font-medium">
                Browse Items
              </Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                Login
              </Link>
              <Link href="/register">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Browse Items</h1>
          
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="md:col-span-2">
              <Input placeholder="Search for items..." />
            </div>
            <select className="input-field">
              <option value="">All Categories</option>
              <option value="TOPS">Tops</option>
              <option value="BOTTOMS">Bottoms</option>
              <option value="DRESSES">Dresses</option>
              <option value="OUTERWEAR">Outerwear</option>
              <option value="ACCESSORIES">Accessories</option>
              <option value="SHOES">Shoes</option>
            </select>
            <select className="input-field">
              <option value="">All Sizes</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
          
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-primary-100 text-primary-800 rounded-lg font-medium">
              All Conditions
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              New
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Excellent
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Good
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Fair
            </button>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 12 }, (_, i) => (
            <Link
              key={i}
              href={`/browse/${i + 1}`}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Sample Item {i + 1}</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Vintage Denim Jacket
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Size M • Excellent condition
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-600 font-semibold">15 points</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    Available
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    vintage
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    denim
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-2 bg-primary-600 text-white rounded-lg">
              1
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

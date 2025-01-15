import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg w-full space-y-8 text-center">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 bg-blue-500 rounded-full opacity-10"></div>
                    </div>
                    <h1 className="text-9xl font-extrabold text-gray-100">404</h1>
                </div>
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl">Page not found</h2>
                    <p className="text-lg text-gray-300">
                        Oops! It seems like you&#39;ve ventured into uncharted territory. The page you&#39;re looking for doesn&#39;t exist or has been moved.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <Link href="/" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900 bg-blue-400 hover:bg-blue-300 transition-colors duration-300 w-full sm:w-auto">
                        <Home className="w-5 h-5 mr-2" />
                        Go to Homepage
                    </Link>
                    <Link href="/" className="flex items-center justify-center px-4 py-2 border border-gray-600 rounded-md shadow-sm text-base font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 w-full sm:w-auto">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Go Back
                    </Link>
                </div>
            </div>
        </div>
    )
}


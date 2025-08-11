import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-300">&copy; 2024 VisionAssist ALT. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link 
              href="/versions" 
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              過去バージョン
            </Link>
            <Link 
              href="/developers" 
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              開発者向け
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
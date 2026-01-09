import { Link } from 'react-router';

const Landing = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="text-2xl font-bold text-indigo-600">ToDoApp</div>
        <nav className="flex space-x-4">
          <Link to="/signin" className="px-4 py-2 text-indigo-600 hover:text-indigo-800 transition-colors">
            Sign In
          </Link>
          <Link to="/signup" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Sign Up
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Manage Your Tasks
          <span className="text-indigo-600"> Effectively</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Simple, fast, and powerful task management for everyone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/signup" className="px-8 py-3 bg-indigo-600 text-white rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose ToDoApp?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy to Use</h3>
              <p className="text-gray-600">Intuitive interface that gets you started in minutes. No learning curve, just productivity.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Blazing fast performance with instant sync across all your devices. Never wait for your tasks.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">Your data is encrypted and secure. We prioritize your privacy and data protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Organized?</h2>
          <p className="text-xl mb-8 text-indigo-100">Join thousands of users who have transformed their productivity with ToDoApp.</p>
          <Link to="/signup" className="px-8 py-3 bg-white text-indigo-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold text-indigo-400 mb-4">ToDoApp</div>
          <p className="text-gray-400">© 2026 ToDoApp. All rights reserved. Built with ❤️ for productivity.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

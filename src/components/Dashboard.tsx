import { useState } from 'react';
import { GraduationCap, BookOpen, FileText, Award, Trophy, LogOut, Menu, X } from 'lucide-react';
import Modules from './Modules';
import Tests from './Tests';
import Certificates from './Certificates';
import Ratings from './Ratings';

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'modules' | 'tests' | 'certificates' | 'ratings'>('modules');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'modules' as const, label: 'Modullar', icon: <BookOpen className="h-5 w-5" /> },
    { id: 'tests' as const, label: 'Testlar', icon: <FileText className="h-5 w-5" /> },
    { id: 'certificates' as const, label: 'Sertifikatlar', icon: <Award className="h-5 w-5" /> },
    { id: 'ratings' as const, label: 'Reytinglar', icon: <Trophy className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">Mirzo Ulug'bek nomidagi O'zbekiston Milliy universitetining Jizzax filiali</span>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
                  T
                </div>
                <span className="text-gray-700 font-medium">Talaba</span>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Chiqish</span>
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors w-full py-2"
              >
                <LogOut className="h-5 w-5" />
                <span>Chiqish</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white mb-8 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Xush kelibsiz!</h1>
          <p className="text-blue-100 text-lg">Bugun nimani o'rganmoqchisiz?</p>
        </div>

        <div className="bg-white rounded-xl shadow-md mb-8 overflow-x-auto">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="transition-all duration-300">
          {activeTab === 'modules' && <Modules />}
          {activeTab === 'tests' && <Tests />}
          {activeTab === 'certificates' && <Certificates />}
          {activeTab === 'ratings' && <Ratings />}
        </div>
      </div>
    </div>
  );
}
//salom

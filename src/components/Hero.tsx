import { GraduationCap, BookOpen, Award, TrendingUp } from 'lucide-react';

interface HeroProps {
  onLoginClick: () => void;
}

export default function Hero({ onLoginClick }: HeroProps) {
  return (
    <div className="min-h-screen">
      <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">KS Platform</span>
            </div>
            <button
              onClick={onLoginClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Kirish
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Zamonaviy ta'lim platformasi
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Kompyuter savodxonligi, IT testlar va sertifikatlar - barcha bir joyda
            </p>
            <button
              onClick={onLoginClick}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              O'qishni boshlash
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <FeatureCard
              icon={<BookOpen className="h-8 w-8" />}
              title="Kompyuter asoslari"
              description="Microsoft Office va kompyuter savodxonligi bo'yicha modullar"
              color="bg-gradient-to-br from-blue-500 to-blue-600"
            />
            <FeatureCard
              icon={<TrendingUp className="h-8 w-8" />}
              title="IT Testlar"
              description="Mini-quiz va murakkab testlar orqali bilimingizni sinab ko'ring"
              color="bg-gradient-to-br from-amber-500 to-orange-600"
            />
            <FeatureCard
              icon={<Award className="h-8 w-8" />}
              title="Sertifikatlar"
              description="Kurslarni tugatib rasmiy sertifikat oling"
              color="bg-gradient-to-br from-green-500 to-emerald-600"
            />
            <FeatureCard
              icon={<GraduationCap className="h-8 w-8" />}
              title="Reytinglar"
              description="O'zingizni boshqa talabalar bilan solishtiring"
              color="bg-gradient-to-br from-green-400 to-teal-500"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Platformadagi Kurslar
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CourseCard
                title="Microsoft Word"
                description="Matn bilan ishlash, formatlovchi, jadvallar va ko'proq"
                level="Boshlang'ich"
                duration="5 darslik"
                color="bg-blue-50 border-blue-200"
              />
              <CourseCard
                title="Microsoft Excel"
                description="Jadvallar, formulalar, ma'lumotlar tahlili"
                level="O'rta"
                duration="5 darslik"
                color="bg-green-50 border-green-200"
              />
              <CourseCard
                title="PowerPoint"
                description="Professional taqdimotlar yaratish"
                level="Boshlang'ich"
                duration="3-5 darslik"
                color="bg-orange-50 border-orange-200"
              />
              <CourseCard
                title="Internet savodxonligi"
                description="Xavfsiz internetdan foydalanish"
                level="Boshlang'ich"
                duration="Video yoki interaktiv"
                color="bg-cyan-50 border-cyan-200"
              />
              <CourseCard
                title="IT Testlar"
                description="Mini-quiz va amaliy topshiriqlar"
                level="Barcha darajalar"
                duration="Doimiy"
                color="bg-amber-50 border-amber-200"
              />
              <CourseCard
                title="Sertifikatsiya"
                description="Bilimingizni tasdiqlovchi hujjat"
                level="Yakuniy test"
                duration="1 soat"
                color="bg-emerald-50 border-emerald-200"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2025 Besh tashabbus. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, color }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className={`${color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CourseCard({ title, description, level, duration, color }: {
  title: string;
  description: string;
  level: string;
  duration: string;
  color: string;
}) {
  return (
    <div className={`${color} rounded-xl p-6 border-2 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">{level}</span>
        <span className="text-gray-500">{duration}</span>
      </div>
    </div>
  );
}

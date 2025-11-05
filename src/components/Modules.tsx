import { FileText, PlayCircle, CheckCircle, Lock } from 'lucide-react';

export default function Modules() {
  const modules = [
    {
      id: 1,
      title: "Boshlang'ich modul: Kompyuter asoslari",
      description: "Kompyuter tizimining asoslari, klaviatura va sichqoncha bilan ishlash",
      lessons: 5,
      duration: "2 soat",
      completed: true,
      color: "from-blue-500 to-blue-600",
      progress: 100,
    },
    {
      id: 2,
      title: "Microsoft Word",
      description: "Matn bilan ishlash, formatlovchi, jadvallar, rasmlar va ko'proq",
      lessons: 8,
      duration: "4 soat",
      completed: false,
      color: "from-blue-500 to-cyan-600",
      progress: 65,
    },
    {
      id: 3,
      title: "Microsoft Excel",
      description: "Jadvallar, formulalar, funksiyalar, ma'lumotlar tahlili",
      lessons: 10,
      duration: "5 soat",
      completed: false,
      color: "from-green-500 to-emerald-600",
      progress: 30,
    },
    {
      id: 4,
      title: "Microsoft PowerPoint",
      description: "Professional taqdimotlar yaratish, dizayn va animatsiyalar",
      lessons: 6,
      duration: "3 soat",
      completed: false,
      color: "from-orange-500 to-red-600",
      progress: 0,
      locked: false,
    },
    {
      id: 5,
      title: "Internet savodxonligi",
      description: "Xavfsiz internetdan foydalanish, qidiruv tizimlar, email",
      lessons: 7,
      duration: "3 soat",
      completed: false,
      color: "from-cyan-500 to-blue-600",
      progress: 0,
      locked: false,
    },
    {
      id: 6,
      title: "O'quv modullari",
      description: "Har bir modul 5 darslikdan iborat bo'lib, video yoki interaktiv formatda",
      lessons: 5,
      duration: "Turlicha",
      completed: false,
      color: "from-purple-500 to-pink-600",
      progress: 0,
      locked: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Mening modullarim</h2>
        <p className="text-gray-600">
          Barcha o'quv modullaringiz va ularning jarayoni
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {modules.map((module) => (
          <div
            key={module.id}
            className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
              module.locked ? 'opacity-75' : ''
            }`}
          >
            <div className={`h-2 bg-gradient-to-r ${module.color}`}></div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {module.completed ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : module.locked ? (
                      <Lock className="h-6 w-6 text-gray-400" />
                    ) : (
                      <PlayCircle className="h-6 w-6 text-blue-500" />
                    )}
                    <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <FileText className="h-4 w-4" />
                    <span>{module.lessons} darslik</span>
                  </div>
                  <span>{module.duration}</span>
                </div>
                {module.completed && (
                  <span className="text-green-600 font-semibold">Tugallangan</span>
                )}
              </div>

              {!module.locked && module.progress > 0 && (
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Jarayon</span>
                    <span className="font-semibold text-gray-900">{module.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${module.color} transition-all duration-500`}
                      style={{ width: `${module.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <button
                disabled={module.locked}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  module.locked
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : module.completed
                    ? 'bg-green-50 text-green-700 hover:bg-green-100'
                    : module.progress > 0
                    ? 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105'
                }`}
              >
                {module.locked
                  ? 'Qulflangan'
                  : module.completed
                  ? 'Qayta ko\'rish'
                  : module.progress > 0
                  ? 'Davom ettirish'
                  : 'Boshlash'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-gray-900">O'quv modullari haqida</h3>
            <p className="mt-2 text-gray-700">
              Har bir modul 5 darslikdan iborat. Darsliklar video yoki interaktiv formatda taqdim etiladi.
              Har bir darslikni tugatgandan so'ng, keyingi darslikka o'tishingiz mumkin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

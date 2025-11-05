import { FileQuestion, Clock, CheckCircle2, AlertCircle, Play } from 'lucide-react';

export default function Tests() {
  const tests = [
    {
      id: 1,
      title: "Kompyuter asoslari - Mini Quiz",
      description: "15 ta test savollari",
      duration: "10 daqiqa",
      questions: 15,
      status: 'completed',
      score: 85,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Microsoft Word - Bilim testi",
      description: "Word dasturida ishlash bo'yicha test",
      duration: "15 daqiqa",
      questions: 20,
      status: 'in-progress',
      score: null,
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 3,
      title: "Microsoft Excel - Amaliy test",
      description: "Formulalar va funksiyalar bo'yicha",
      duration: "20 daqiqa",
      questions: 25,
      status: 'available',
      score: null,
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 4,
      title: "PowerPoint - Dizayn testi",
      description: "Taqdimot yaratish ko'nikmalari",
      duration: "15 daqiqa",
      questions: 20,
      status: 'available',
      score: null,
      color: "from-orange-500 to-red-600",
    },
    {
      id: 5,
      title: "Internet savodxonligi - Quiz",
      description: "Xavfsizlik va internet asoslari",
      duration: "12 daqiqa",
      questions: 18,
      status: 'locked',
      score: null,
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 6,
      title: "Umumiy IT bilim testi",
      description: "Barcha mavzular bo'yicha keng qamrovli test",
      duration: "30 daqiqa",
      questions: 40,
      status: 'locked',
      score: null,
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">IT Testlar</h2>
        <p className="text-gray-600">
          Bilimingizni tekshiring va ko'nikmalringizni oshiring
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl p-6 shadow-lg">
          <div className="text-4xl font-bold mb-2">12</div>
          <div className="text-blue-100">Jami testlar</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl p-6 shadow-lg">
          <div className="text-4xl font-bold mb-2">8</div>
          <div className="text-green-100">Tugallangan</div>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-xl p-6 shadow-lg">
          <div className="text-4xl font-bold mb-2">78%</div>
          <div className="text-orange-100">O'rtacha natija</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tests.map((test) => (
          <div
            key={test.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className={`h-2 bg-gradient-to-r ${test.color}`}></div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{test.title}</h3>
                  <p className="text-gray-600 mb-4">{test.description}</p>
                </div>
                {test.status === 'completed' && (
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 ml-2" />
                )}
                {test.status === 'in-progress' && (
                  <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0 ml-2" />
                )}
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <FileQuestion className="h-4 w-4" />
                  <span>{test.questions} savol</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{test.duration}</span>
                </div>
              </div>

              {test.status === 'completed' && test.score !== null && (
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Sizning natijangiz</span>
                    <span className={`font-bold ${test.score >= 70 ? 'text-green-600' : 'text-red-600'}`}>
                      {test.score}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        test.score >= 70 ? 'bg-green-500' : 'bg-red-500'
                      } transition-all duration-500`}
                      style={{ width: `${test.score}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <button
                disabled={test.status === 'locked'}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  test.status === 'locked'
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : test.status === 'completed'
                    ? 'bg-green-50 text-green-700 hover:bg-green-100'
                    : test.status === 'in-progress'
                    ? 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105'
                }`}
              >
                {test.status === 'locked' && <span>Qulflangan</span>}
                {test.status === 'completed' && <span>Qayta topshirish</span>}
                {test.status === 'in-progress' && (
                  <>
                    <Play className="h-5 w-5" />
                    <span>Davom ettirish</span>
                  </>
                )}
                {test.status === 'available' && (
                  <>
                    <Play className="h-5 w-5" />
                    <span>Boshlash</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 rounded-lg p-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-gray-900">Testlar haqida</h3>
            <p className="mt-2 text-gray-700">
              Har bir test modul bo'yicha bilimingizni tekshirish uchun mo'ljallangan.
              Testlarni muvaffaqiyatli topshirish uchun kamida 70% ball to'plashingiz kerak.
              Har bir testni bir necha marta topshirishingiz mumkin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

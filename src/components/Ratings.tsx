import { Trophy, TrendingUp, Medal, Star, Crown } from 'lucide-react';

export default function Ratings() {
  const topStudents = [
    {
      rank: 1,
      name: "Aziza Karimova",
      score: 2850,
      avatar: "AK",
      color: "from-yellow-400 to-amber-500",
      completedModules: 12,
      certificates: 10,
    },
    {
      rank: 2,
      name: "Sardor Rahimov",
      score: 2720,
      avatar: "SR",
      color: "from-gray-300 to-gray-400",
      completedModules: 11,
      certificates: 9,
    },
    {
      rank: 3,
      name: "Malika Tursunova",
      score: 2680,
      avatar: "MT",
      color: "from-orange-400 to-amber-600",
      completedModules: 11,
      certificates: 9,
    },
    {
      rank: 4,
      name: "Jamshid Aliyev",
      score: 2540,
      avatar: "JA",
      color: "from-blue-400 to-blue-500",
      completedModules: 10,
      certificates: 8,
    },
    {
      rank: 5,
      name: "Nodira Yusupova",
      score: 2480,
      avatar: "NY",
      color: "from-green-400 to-green-500",
      completedModules: 10,
      certificates: 8,
    },
    {
      rank: 6,
      name: "Bekzod Muhammadov",
      score: 2420,
      avatar: "BM",
      color: "from-cyan-400 to-cyan-500",
      completedModules: 9,
      certificates: 7,
    },
    {
      rank: 7,
      name: "Dilfuza Rahmonova",
      score: 2350,
      avatar: "DR",
      color: "from-purple-400 to-purple-500",
      completedModules: 9,
      certificates: 7,
    },
    {
      rank: 8,
      name: "Rustam Shukurov",
      score: 2290,
      avatar: "RS",
      color: "from-pink-400 to-pink-500",
      completedModules: 8,
      certificates: 6,
    },
  ];

  const myRank = 15;
  const myScore = 1850;
  const myCompletedModules = 6;
  const myCertificates = 4;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Reytinglar</h2>
        <p className="text-gray-600">
          Eng yaxshi talabalar va sizning natijalaringiz
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Sizning natijangiz</h3>
            <p className="text-blue-100">Umumiy reytingdagi o'rningiz</p>
          </div>
          <Trophy className="h-16 w-16 text-white opacity-50" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold mb-1">#{myRank}</div>
            <div className="text-sm text-blue-100">Reyting</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold mb-1">{myScore}</div>
            <div className="text-sm text-blue-100">Ball</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold mb-1">{myCompletedModules}</div>
            <div className="text-sm text-blue-100">Modullar</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold mb-1">{myCertificates}</div>
            <div className="text-sm text-blue-100">Sertifikatlar</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white">
          <h3 className="text-2xl font-bold flex items-center space-x-2">
            <Crown className="h-8 w-8" />
            <span>Top 10 Talabalar</span>
          </h3>
        </div>
        <div className="divide-y divide-gray-200">
          {topStudents.map((student) => (
            <div
              key={student.rank}
              className="p-4 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="relative">
                    {student.rank <= 3 ? (
                      <div className="absolute -top-2 -right-2 z-10">
                        {student.rank === 1 && (
                          <Crown className="h-6 w-6 text-yellow-500" />
                        )}
                        {student.rank === 2 && (
                          <Medal className="h-6 w-6 text-gray-400" />
                        )}
                        {student.rank === 3 && (
                          <Medal className="h-6 w-6 text-orange-600" />
                        )}
                      </div>
                    ) : null}
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${student.color} flex items-center justify-center text-white font-bold`}
                    >
                      {student.avatar}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span
                        className={`font-bold ${
                          student.rank <= 3 ? 'text-xl' : 'text-lg'
                        } ${
                          student.rank === 1
                            ? 'text-yellow-600'
                            : student.rank === 2
                            ? 'text-gray-500'
                            : student.rank === 3
                            ? 'text-orange-600'
                            : 'text-gray-700'
                        }`}
                      >
                        #{student.rank}
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {student.name}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                      <span>{student.completedModules} modul</span>
                      <span>•</span>
                      <span>{student.certificates} sertifikat</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 text-lg font-bold text-gray-900">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <span>{student.score}</span>
                  </div>
                  <div className="text-sm text-gray-500">ball</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Haftalik o'sish</h3>
              <p className="text-sm text-gray-500">So'nggi 7 kun</p>
            </div>
          </div>
          <div className="text-4xl font-bold text-green-600 mb-2">+245</div>
          <p className="text-gray-600">ball qo'shildi</p>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Reyting o'zgarishi:</span>
              <span className="text-green-600 font-semibold">+3 o'rin</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Yutuqlar</h3>
              <p className="text-sm text-gray-500">Olingan nishonlar</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3 text-center">
              <Star className="h-8 w-8 text-blue-500 mx-auto mb-1" />
              <div className="text-xs text-gray-600">Birinchi modul</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 text-center">
              <Award className="h-8 w-8 text-green-500 mx-auto mb-1" />
              <div className="text-xs text-gray-600">5 sertifikat</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-3 text-center">
              <Medal className="h-8 w-8 text-amber-500 mx-auto mb-1" />
              <div className="text-xs text-gray-600">Top 20</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 rounded-lg p-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <Trophy className="h-6 w-6 text-purple-600" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-gray-900">Ball tizimi haqida</h3>
            <p className="mt-2 text-gray-700 mb-3">
              Ball tizimi quyidagicha ishlaydi:
            </p>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Darslikni tugatish: 50 ball</li>
              <li>• Modulni tugatish: 200 ball</li>
              <li>• Testdan o'tish: 100 ball</li>
              <li>• Sertifikat olish: 300 ball</li>
              <li>• Testda 90%+ natija: +50 bonus ball</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Award({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  );
}

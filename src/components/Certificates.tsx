import { Award, Download, Calendar, CheckCircle, Lock } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Kompyuter Savodxonligi - Boshlang'ich",
      issueDate: "15 Oktabr 2024",
      moduleCompleted: "Boshlang'ich modul",
      status: 'issued',
      certificateNumber: "KS-2024-001234",
    },
    {
      id: 2,
      title: "Microsoft Word Professional",
      issueDate: "28 Oktabr 2024",
      moduleCompleted: "Microsoft Word",
      status: 'ready',
      certificateNumber: "KS-2024-001567",
    },
    {
      id: 3,
      title: "Microsoft Excel Advanced",
      issueDate: null,
      moduleCompleted: "Microsoft Excel",
      status: 'in-progress',
      progress: 65,
      certificateNumber: null,
    },
    {
      id: 4,
      title: "PowerPoint Mastery",
      issueDate: null,
      moduleCompleted: "Microsoft PowerPoint",
      status: 'locked',
      progress: 0,
      certificateNumber: null,
    },
    {
      id: 5,
      title: "Internet Savodxonligi",
      issueDate: null,
      moduleCompleted: "Internet asoslari",
      status: 'locked',
      progress: 0,
      certificateNumber: null,
    },
    {
      id: 6,
      title: "IT Professional Certificate",
      issueDate: null,
      moduleCompleted: "Barcha modullar",
      status: 'locked',
      progress: 0,
      certificateNumber: null,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Sertifikatlar</h2>
        <p className="text-gray-600">
          Modullarni tugatib rasmiy sertifikatlar oling
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl p-6 shadow-lg">
          <Award className="h-10 w-10 mb-3" />
          <div className="text-3xl font-bold mb-1">2</div>
          <div className="text-green-100">Olingan sertifikatlar</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl p-6 shadow-lg">
          <CheckCircle className="h-10 w-10 mb-3" />
          <div className="text-3xl font-bold mb-1">1</div>
          <div className="text-blue-100">Tayyor sertifikatlar</div>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-xl p-6 shadow-lg">
          <Lock className="h-10 w-10 mb-3" />
          <div className="text-3xl font-bold mb-1">3</div>
          <div className="text-orange-100">Kutilayotgan</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ${
              cert.status !== 'locked' ? 'transform hover:-translate-y-1' : 'opacity-75'
            }`}
          >
            <div
              className={`h-2 ${
                cert.status === 'issued' || cert.status === 'ready'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                  : cert.status === 'in-progress'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                  : 'bg-gray-300'
              }`}
            ></div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {cert.status === 'issued' || cert.status === 'ready' ? (
                      <Award className="h-6 w-6 text-green-500" />
                    ) : cert.status === 'in-progress' ? (
                      <CheckCircle className="h-6 w-6 text-blue-500" />
                    ) : (
                      <Lock className="h-6 w-6 text-gray-400" />
                    )}
                    <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">Modul: {cert.moduleCompleted}</p>
                  {cert.certificateNumber && (
                    <p className="text-sm text-gray-500">
                      Raqam: {cert.certificateNumber}
                    </p>
                  )}
                </div>
              </div>

              {cert.issueDate && (
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>Berilgan sana: {cert.issueDate}</span>
                </div>
              )}

              {cert.status === 'in-progress' && cert.progress !== undefined && (
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Jarayon</span>
                    <span className="font-semibold text-gray-900">{cert.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500"
                      style={{ width: `${cert.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Modulni tugatib sertifikat oling
                  </p>
                </div>
              )}

              {cert.status === 'locked' && (
                <div className="mb-4 bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-600">
                    Ushbu sertifikatni olish uchun oldingi modullarni tugatishingiz kerak
                  </p>
                </div>
              )}

              <div className="flex gap-2">
                {(cert.status === 'issued' || cert.status === 'ready') && (
                  <>
                    <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                      <Download className="h-5 w-5" />
                      <span>Yuklab olish</span>
                    </button>
                    <button className="px-4 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-all duration-300">
                      Ko'rish
                    </button>
                  </>
                )}
                {cert.status === 'in-progress' && (
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                    Modulga o'tish
                  </button>
                )}
                {cert.status === 'locked' && (
                  <button
                    disabled
                    className="w-full bg-gray-200 text-gray-500 py-3 rounded-lg font-semibold cursor-not-allowed"
                  >
                    Qulflangan
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg p-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <Award className="h-6 w-6 text-green-600" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-gray-900">Sertifikatlar haqida</h3>
            <p className="mt-2 text-gray-700">
              Har bir modulni muvaffaqiyatli tugatgandan so'ng, siz rasmiy sertifikat olishingiz mumkin.
              Sertifikatlar PDF formatda yuklab olinadi va ularda sizning ismingiz, modul nomi va
              tugatilgan sana ko'rsatiladi. Barcha sertifikatlar raqamli imzo bilan tasdiqlangan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

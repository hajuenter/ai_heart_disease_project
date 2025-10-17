import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import SelectField from "../components/SelectField";
import { predictHeartDisease } from "../services/heartService";
import { Heart, Loader2, RotateCcw, Info } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ExpertSystem() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e, key) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const handleSubmit = async () => {
    const emptyFields = Object.entries(form)
      .filter(([_, value]) => value === "" || value === null)
      .map(([key]) => key);

    if (emptyFields.length > 0) {
      toast.error("Harap isi semua field!", {
        duration: 1500,
        style: {
          background: "#fee2e2",
          color: "#b91c1c",
          border: "1px solid #fca5a5",
          borderRadius: "10px",
          fontWeight: "500",
        },
        icon: "⚠️",
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const data = await predictHeartDisease(form);
      setResult(data.prediction);
    } catch (err) {
      console.error("Gagal prediksi:", err);
      toast.error("Terjadi kesalahan pada server!", {
        style: {
          background: "#fee2e2",
          color: "#b91c1c",
          border: "1px solid #fca5a5",
          borderRadius: "10px",
          fontWeight: "500",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm({
      age: "",
      sex: "",
      cp: "",
      trestbps: "",
      chol: "",
      fbs: "",
      restecg: "",
      thalach: "",
      exang: "",
      oldpeak: "",
      slope: "",
      ca: "",
      thal: "",
    });
    setResult(null);
    toast.success("Form berhasil direset!", {
      duration: 1500,
      style: {
        background: "#dcfce7",
        color: "#166534",
        border: "1px solid #86efac",
        borderRadius: "10px",
        fontWeight: "500",
      },
      icon: "🔄",
    });
  };

  const InfoTooltip = ({ text }) => (
    <div className="group relative inline-block ml-2">
      <Info className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-help inline" />
      <div className="invisible group-hover:visible absolute z-10 w-64 p-3 mt-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg -left-24 top-full">
        {text}
        <div className="absolute w-3 h-3 bg-gray-800 transform rotate-45 -top-1 left-28"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen px-6 py-12 flex flex-col overflow-x-hidden items-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-6xl bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 lg:p-12">
        <div className="text-center mb-8 flex flex-col items-center gap-6">
          <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-100 to-blue-200 dark:from-yellow-200/20 dark:to-yellow-400/30 shadow-lg">
            <Heart
              className="w-12 h-12 text-blue-600 dark:text-yellow-400 animate-heartbeat"
              fill="currentColor"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
            Sistem Pakar Expert <br className="hidden sm:block" />
            <span className="text-blue-600 dark:text-yellow-400">
              Penyakit Jantung
            </span>
          </h1>
          <div className="mt-3 px-6 pt-4 pb-4 rounded-xl font-semibold text-sm text-center bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300 max-w-3xl mx-auto">
            ⚠️ Disclaimer: Prediksi ini dibuat menggunakan model machine
            learning dan hanya bersifat indikatif. Hasil ini{" "}
            <strong>tidak menggantikan pemeriksaan medis profesional</strong>.
            Untuk penilaian kesehatan yang akurat, silakan konsultasikan ke
            dokter atau tenaga medis terkait.
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl text-lg">
            Masukkan data medis Anda untuk mendapatkan prediksi risiko penyakit
            jantung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Usia (Tahun)
              <InfoTooltip text="Masukkan usia Anda dalam tahun. Risiko penyakit jantung cenderung meningkat seiring bertambahnya usia." />
            </label>
            <InputField
              type="number"
              value={form.age}
              onChange={(e) => handleChange(e, "age")}
              placeholder="Contoh: 45"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Jenis Kelamin
              <InfoTooltip text="Pria memiliki risiko lebih tinggi terkena penyakit jantung dibanding wanita, terutama di usia muda." />
            </label>
            <SelectField
              value={form.sex}
              onChange={(e) => handleChange(e, "sex")}
              options={[
                { label: "Laki-laki", value: 1 },
                { label: "Perempuan", value: 0 },
              ]}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tipe Nyeri Dada yang Dirasakan
              <InfoTooltip text="Typical Angina: nyeri dada khas jantung. Atypical Angina: nyeri dada tidak khas. Non-anginal: nyeri bukan dari jantung. Asymptomatic: tidak ada gejala." />
            </label>
            <SelectField
              value={form.cp}
              onChange={(e) => handleChange(e, "cp")}
              options={[
                { label: "Typical Angina (Nyeri Dada Khas)", value: 0 },
                { label: "Atypical Angina (Nyeri Dada Tidak Khas)", value: 1 },
                { label: "Non-anginal Pain (Bukan Nyeri Jantung)", value: 2 },
                { label: "Asymptomatic (Tidak Ada Gejala)", value: 3 },
              ]}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tekanan Darah Saat Istirahat
              <InfoTooltip text="Tekanan darah sistolik (angka atas) dalam mmHg. Pilih kategori yang sesuai dengan hasil pemeriksaan terakhir Anda." />
            </label>
            <SelectField
              value={form.trestbps}
              onChange={(e) => handleChange(e, "trestbps")}
              options={[
                { label: "Rendah (<90 mmHg)", value: 85 },
                { label: "Normal (90-120 mmHg)", value: 110 },
                { label: "Prehipertensi (120-139 mmHg)", value: 130 },
                { label: "Hipertensi Tingkat 1 (140-159 mmHg)", value: 150 },
                { label: "Hipertensi Tingkat 2 (≥160 mmHg)", value: 170 },
              ]}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Kadar Kolesterol dalam Darah
              <InfoTooltip text="Kadar kolesterol total dalam mg/dL. Pilih kategori berdasarkan hasil cek kolesterol terakhir Anda." />
            </label>
            <SelectField
              value={form.chol}
              onChange={(e) => handleChange(e, "chol")}
              options={[
                { label: "Optimal (<200 mg/dL)", value: 180 },
                { label: "Batas Normal (200-239 mg/dL)", value: 220 },
                { label: "Tinggi (240-279 mg/dL)", value: 260 },
                { label: "Sangat Tinggi (≥280 mg/dL)", value: 300 },
              ]}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Gula Darah Puasa
              <InfoTooltip text="Apakah gula darah puasa Anda lebih dari 120 mg/dL? Normal: <100, Prediabetes: 100-125, Diabetes: ≥126. Gula darah tinggi meningkatkan risiko jantung." />
            </label>
            <SelectField
              value={form.fbs}
              onChange={(e) => handleChange(e, "fbs")}
              options={[
                { label: "Ya (>120 mg/dL)", value: 1 },
                { label: "Tidak (≤120 mg/dL)", value: 0 },
              ]}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Hasil EKG (Elektrokardiogram)
              <InfoTooltip text="Hasil rekam jantung saat istirahat. Normal: tidak ada masalah. ST-T: ada kelainan ringan. Hipertrofi: otot jantung menebal (tanda beban tinggi)." />
            </label>
            <SelectField
              value={form.restecg}
              onChange={(e) => handleChange(e, "restecg")}
              options={[
                { label: "Normal", value: 0 },
                { label: "Kelainan Gelombang ST-T", value: 1 },
                { label: "Hipertrofi Ventrikel Kiri", value: 2 },
              ]}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Denyut Jantung Maksimum
              <InfoTooltip text="Denyut jantung tertinggi yang dicapai saat olahraga atau aktivitas berat. Pilih kategori yang sesuai dengan kondisi Anda." />
            </label>
            <SelectField
              value={form.thalach}
              onChange={(e) => handleChange(e, "thalach")}
              options={[
                { label: "Sangat Rendah (<100 bpm)", value: 90 },
                { label: "Rendah (100-120 bpm)", value: 110 },
                { label: "Normal Rendah (120-140 bpm)", value: 130 },
                { label: "Normal (140-160 bpm)", value: 150 },
                { label: "Normal Tinggi (160-180 bpm)", value: 170 },
                { label: "Tinggi (≥180 bpm)", value: 190 },
              ]}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Nyeri Dada Saat Olahraga
              <InfoTooltip text="Apakah Anda merasakan nyeri dada atau angina saat berolahraga atau beraktivitas fisik? Ini bisa jadi tanda aliran darah ke jantung terhambat." />
            </label>
            <SelectField
              value={form.exang}
              onChange={(e) => handleChange(e, "exang")}
              options={[
                { label: "Ya, saya merasakan nyeri", value: 1 },
                { label: "Tidak ada nyeri", value: 0 },
              ]}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Depresi ST pada EKG
              <InfoTooltip text="Penurunan segmen ST pada hasil EKG saat olahraga. Tanyakan pada dokter/teknisi yang melakukan tes EKG Anda tentang nilai ini." />
            </label>
            <SelectField
              value={form.oldpeak}
              onChange={(e) => handleChange(e, "oldpeak")}
              options={[
                { label: "Normal (0 mm)", value: 0 },
                { label: "Ringan (0.1-1.0 mm)", value: 0.5 },
                { label: "Sedang (1.1-2.0 mm)", value: 1.5 },
                { label: "Tinggi (2.1-3.0 mm)", value: 2.5 },
                { label: "Sangat Tinggi (>3.0 mm)", value: 4.0 },
              ]}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Kemiringan Segmen ST
              <InfoTooltip text="Pola segmen ST pada EKG saat olahraga. Upsloping (naik): biasanya normal. Flat (datar): agak berisiko. Downsloping (turun): tanda masalah serius." />
            </label>
            <SelectField
              value={form.slope}
              onChange={(e) => handleChange(e, "slope")}
              options={[
                { label: "Upsloping (Naik/Normal)", value: 0 },
                { label: "Flat (Datar/Berisiko)", value: 1 },
                { label: "Downsloping (Turun/Berbahaya)", value: 2 },
              ]}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Pembuluh Darah Tersumbat
              <InfoTooltip text="Jumlah pembuluh darah utama yang tersumbat (dari tes angiografi). 0: sehat, 1-2: penyumbatan ringan-sedang, 3-4: penyumbatan parah yang perlu penanganan." />
            </label>
            <SelectField
              value={form.ca}
              onChange={(e) => handleChange(e, "ca")}
              options={[
                { label: "0 - Tidak Ada Penyumbatan", value: 0 },
                { label: "1 - Penyumbatan Ringan", value: 1 },
                { label: "2 - Penyumbatan Sedang", value: 2 },
                { label: "3 - Penyumbatan Berat", value: 3 },
                { label: "4 - Penyumbatan Sangat Parah", value: 4 },
              ]}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Hasil Tes Thalassemia
              <InfoTooltip text="Tes aliran darah ke otot jantung. Normal: aliran baik. Fixed Defect: kerusakan permanen. Reversible Defect: gangguan sementara saat stress (paling berisiko)." />
            </label>
            <SelectField
              value={form.thal}
              onChange={(e) => handleChange(e, "thal")}
              options={[
                { label: "Normal - Aliran Darah Baik", value: 1 },
                { label: "Fixed Defect - Kerusakan Permanen", value: 2 },
                { label: "Reversible Defect - Gangguan Sementara", value: 3 },
              ]}
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full cursor-pointer sm:w-1/2 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Memproses...</span>
              </>
            ) : (
              <>
                <Heart className="w-5 h-5" />
                <span>Prediksi Risiko</span>
              </>
            )}
          </Button>

          <Button
            onClick={handleReset}
            disabled={loading}
            className={`w-full cursor-pointer sm:w-1/2 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border transition-all ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            <RotateCcw className="w-5 h-5" />
            <span>Reset Form</span>
          </Button>
        </div>

        {result !== null && (
          <div
            className={`mt-8 px-6 py-4 rounded-xl font-semibold text-lg text-center ${
              result === 1
                ? "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300"
                : "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
            }`}
          >
            <div className="text-xl mb-2">📋 Hasil Prediksi</div>
            {result === 1 ? (
              <div>
                <p className="font-bold">
                  ⚠️ Anda berisiko terkena penyakit jantung
                </p>
                <p className="text-sm mt-2 font-normal">
                  Sebaiknya konsultasikan dengan dokter spesialis jantung untuk
                  pemeriksaan lebih lanjut.
                </p>
              </div>
            ) : (
              <div>
                <p className="font-bold">✅ Anda dalam kondisi sehat</p>
                <p className="text-sm mt-2 font-normal">
                  Tetap jaga pola hidup sehat dengan olahraga teratur dan makan
                  bergizi.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

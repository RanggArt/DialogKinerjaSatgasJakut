let selKec, selKel;
const state = {};

// Membuat state kosong untuk ID 1-20
for (let i = 1; i <= 20; i++) { 
  state[i] = { foto: null, narasi: '' }; 
}

function getKasatgas() {
  const kel = getKel();
  return kasatgasData[kel] || { nama: '—', nip: '—' };
}

function onKecamatanChange(init) {
  const kec = selKec.value;
  selKel.innerHTML = '<option value="">-- Pilih Kelurahan --</option>';
  if (!kec) { selKel.disabled = true; return; }
  
  wilayah[kec].forEach(kel => {
    const opt = document.createElement('option');
    opt.value = kel; opt.textContent = kel;
    selKel.appendChild(opt);
  });
  
  selKel.disabled = false;
  if (init) { selKel.value = 'Sukapura'; }
  onKelurahanChange();
}

function onKelurahanChange() {
  updateHeader();
  updateTabel();
}

function getKel() { return selKel.value || 'Sukapura'; }
function getKec() { return selKec.value || 'Cilincing'; }

function updateHeader() {
  const kel = getKel();
  const kec = getKec();
  const sub = document.getElementById('header-sub');
  if (sub) sub.innerHTML = `Kelurahan ${kel} &nbsp;·&nbsp; Kecamatan ${kec} &nbsp;·&nbsp; Kota Administrasi Jakarta Utara`;
}

function getBarisList() {
  const kel = getKel();
  const kec = getKec();
  return [
    {
      id: 1,
      indikator: `Jumlah laporan pelaksanaan kegiatan pembinaan fisik dan keterampilan petugas lingkup Kelurahan ${kel}`,
      rencanaAksi: `Melakukan penyusunan data kegiatan peningkatan keterampilan petugas`,
      kriteriaOutput: `Tersusunnya data kegiatan peningkatan keterampilan petugas`,
      progres: `Melaksanakan kegiatan pembinaan fisik petugas dengan melatih kekuatan, kecepatan dan ketepatan di kantor sudin gulkarmat jakarta utara.`
    },
    {
      id: 2,
      indikator: `Jumlah Bangunan Gedung tinggi, menengah dan rendah yang terdata sesuai instruksi Kadis Gulkarmat Nomor e-0002 tahun 2026 lingkup Kelurahan ${kel}`,
      rencanaAksi: `Melakukan koordinasi pendataan bangunan gedung di tingkat kelurahan ${kel}`,
      kriteriaOutput: `Terlaksananya pendataan bangunan gedung di tingkat kelurahan ${kel}`,
      progres: `Melaksanakan pendataan bangunan gedung tinggi, menengah, dan rendah di wilayah Kelurahan ${kel} melalui koordinasi dengan pengurus RT/RW dan pengelola gedung, sesuai Instruksi Kepala Dinas Gulkarmat Nomor e-0002 Tahun 2026.`
    },
    {
      id: 3,
      indikator: `Jumlah Laporan Hasil Pelaksanaan Kegiatan Kesiapsiagaan Petugas Piket dan Pemadaman kepada Kepala Sektor Kecamatan ${kec} lingkup Kelurahan ${kel}`,
      rencanaAksi: `Melaksanakan kegiatan evaluasi kesiapsiagaan sebagai dasar pemberian pelatihan lanjutan`,
      kriteriaOutput: `Terlaksananya kegiatan evaluasi kesiapsiagaan petugas piket dan pemadaman sebagai dasar pemberian pelatihan lanjutan, serta pelaporan hasil kepada Kepala Sektor Kecamatan ${kec}`,
      progres: `Melaksanakan evaluasi kesiapsiagaan petugas piket dan pemadaman secara berkala di posko Satgas Kelurahan ${kel} sebagai landasan pemberian materi pelatihan lanjutan harian.`
    },
    {
      id: 4,
      indikator: `Jumlah Laporan Hasil Pelaksanaan Kegiatan Kesiapsiagaan Petugas Piket dan Pemadaman kepada Kepala Sektor Kecamatan ${kec} lingkup Kelurahan ${kel}`,
      rencanaAksi: `Menyusun laporan hasil evaluasi kesiapsiagaan sebagai dasar pemberian pelatihan lanjutan`,
      kriteriaOutput: `Tersusunnya rekomendasi kebutuhan pelatihan berdasarkan hasil evaluasi`,
      progres: `Melaksanakan piket jaga sebagai bintara piket serta menyusun laporan hasil evaluasi kesiapsiagaan petugas di Kelurahan ${kel}, sebagai dasar penyusunan rekomendasi kebutuhan pelatihan lanjutan.`
    },
    {
      id: 5,
      indikator: `Persentase pegawai yang berpartisipasi aktif dan memanfaatkan aset pengetahuan Knowledge Management sesuai ketentuan lingkup Kelurahan ${kel}`,
      rencanaAksi: `Memanfaatkan aset pengetahuan Komunitas Pembelajar Perangkat Daerah`,
      kriteriaOutput: `Tersedianya data pemanfaatan aset pengetahuan Komunitas Pembelajar Perangkat Daerah`,
      progres: `Mengakses dan memanfaatkan aset pengetahuan pada Komunitas Pembelajar Perangkat Daerah (KPPD) sebagai bahan pembelajaran dan pengembangan kompetensi, serta mendokumentasikan data pemanfaatannya sebagai bukti partisipasi aktif.`
    },
    {
      id: 6,
      indikator: `Laporan pelaksanaan SKM Eksternal lingkup Kelurahan ${kel} dan siap dilaporkan kepada Kepala Sektor Kecamatan ${kec}`,
      rencanaAksi: `RA1 Merekap data hasil survei kepuasan masyarakat pada layanan sosialisasi di lingkup kelurahan ${kel}`,
      kriteriaOutput: `Tersedianya data hasil survei kepuasan masyarakat pada layanan sosialisasi di lingkup kelurahan ${kel}`,
      progres: `Merekap data hasil Survei Kepuasan Masyarakat (SKM) eksternal terhadap layanan sosialisasi di wilayah Kelurahan ${kel}, sebagai bahan laporan kepada Kepala Sektor Kecamatan ${kec}.`
    },
    {
      id: 7,
      indikator: `Laporan pelaksanaan SKM Eksternal lingkup Kelurahan ${kel} dan siap dilaporkan kepada Kepala Sektor Kecamatan ${kec}`,
      rencanaAksi: `Merekap data hasil survei kepuasan masyarakat pada layanan pemadaman kebakaran dan penyelamatan di lingkup kelurahan ${kel}`,
      kriteriaOutput: `Tersedianya data hasil survei kepuasan masyarakat pada layanan pemadaman kebakaran dan penyelamatan di lingkup kelurahan ${kel}`,
      progres: `Merekap data hasil Survei Kepuasan Masyarakat (SKM) eksternal terhadap layanan pemadaman kebakaran dan penyelamatan di wilayah Kelurahan ${kel}, sebagai bahan laporan kepada Kepala Sektor Kecamatan ${kec}.`
    },
    {
      id: 8,
      indikator: `Tersedianya Jumlah laporan investigasi awal kebakaran lingkup Kelurahan ${kel}`,
      rencanaAksi: `Melaksanakan penyusunan data investigasi awal pada kejadian kebakaran`,
      kriteriaOutput: `Tersusunnya data investigasi awal pada kejadian kebakaran`,
      progres: `[ JIKA ADA KEJADIAN ]\nMelaksanakan investigasi awal pada kejadian kebakaran di wilayah Kelurahan ${kel} dan menyusun data hasil investigasi sebagai bahan laporan.\n\n[ JIKA TIDAK ADA KEJADIAN ]\nPada periode ini tidak terdapat kejadian kebakaran di wilayah Kelurahan ${kel}, sehingga tidak ada data investigasi awal yang disusun. Petugas tetap dalam status siaga untuk melaksanakan investigasi awal apabila terjadi kebakaran.`
    },
    {
      id: 9,
      indikator: `Laporan bangunan gedung yang telah diperiksa pada lingkup Kelurahan ${kel}`,
      rencanaAksi: `Melaksanakan kegiatan pemeriksaan dan pengawasan bangunan gedung pada wilayah kelurahan ${kel}`,
      kriteriaOutput: `Terlaksananya kegiatan pemeriksaan dan pengawasan bangunan gedung pada wilayah kelurahan ${kel}`,
      progres: `Melaksanakan kegiatan pemeriksaan dan pengawasan terhadap kelengkapan sarana proteksi kebakaran pada bangunan gedung di wilayah Kelurahan ${kel}, sebagai bahan laporan hasil pemeriksaan.`
    },
    {
      id: 10,
      indikator: `Laporan bangunan gedung yang telah diperiksa pada lingkup Kelurahan ${kel}`,
      rencanaAksi: `RA 2. Melaksanakan penyusunan data hasil pemeriksaan dan pengawasan bangunan gedung pada wilayah kelurahan ${kel}`,
      kriteriaOutput: `Tersusunnya data hasil pemeriksaan dan pengawasan bangunan gedung pada wilayah kelurahan ${kel}`,
      progres: `Menyusun data hasil pemeriksaan dan pengawasan sarana proteksi kebakaran pada bangunan gedung di wilayah Kelurahan ${kel}, sebagai bahan laporan bangunan gedung yang telah diperiksa.`
    }
  ];
}

function updateTabel() {
  renderTabel();
}

function renderTabel() {
  const barisList = getBarisList();
  const tbody = document.getElementById('tabel-body');
  tbody.innerHTML = '';
  
  barisList.forEach(b => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="col-no">${b.id}</td>
      <td class="col-indikator">
        <div class="label-indikator">${b.indikator}</div>
      </td>
      <td class="col-rencana">
        <div class="label-output">${b.rencanaAksi}</div>
      </td>
      <td class="col-kriteria">
        <div class="label-output" style="font-weight: 500; margin-bottom: 6px;">${b.kriteriaOutput}</div>
        
        <div class="progres-box">
          <div class="progres-header">
            <span>Narasi Progres</span>
            <button class="btn-copy" id="btn-copy-${b.id}" onclick="copyNarasi(${b.id})">
              📋 Copy
            </button>
          </div>
          <div class="progres-body">
            <textarea class="progres-textarea" id="narasi-${b.id}"
              oninput="state[${b.id}].narasi = this.value" 
              placeholder="Ketik narasi progres di sini...">${state[b.id].narasi || b.progres}</textarea>
          </div>
        </div>
      </td>
      <td class="col-lampiran">
        <div class="upload-area" id="upload-area-${b.id}">
          <input type="file" accept="image/*" onchange="handleFoto(event, ${b.id})" />
          <div class="icon">📷</div>
          <div class="teks-upload">Pilih Foto</div>
        </div>
        <div class="preview-foto" id="preview-${b.id}">
          <img id="img-preview-${b.id}" src="" alt="Foto kegiatan" />
          <span class="hapus" onclick="hapusFoto(${b.id})">✕ Hapus foto</span>
        </div>
      </td>
      <td class="col-cetak">
        <button class="btn-cetak" id="btn-cetak-${b.id}" onclick="bukaModal(${b.id})" ${state[b.id].foto ? '' : 'disabled'}>Cetak Bukti</button>
      </td>
    `;
    tbody.appendChild(tr);
    
    if (state[b.id].foto) {
      document.getElementById('img-preview-' + b.id).src = state[b.id].foto;
      document.getElementById('preview-' + b.id).style.display = 'block';
      document.getElementById('upload-area-' + b.id).style.display = 'none';
    }
  });
}

function handleFoto(event, id) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    state[id].foto = e.target.result;
    document.getElementById('img-preview-' + id).src = e.target.result;
    document.getElementById('preview-' + id).style.display = 'block';
    document.getElementById('upload-area-' + id).style.display = 'none';
    document.getElementById('btn-cetak-' + id).disabled = false;
  };
  reader.readAsDataURL(file);
}

function hapusFoto(id) {
  state[id].foto = null;
  document.getElementById('preview-' + id).style.display = 'none';
  document.getElementById('upload-area-' + id).style.display = 'block';
  document.getElementById('btn-cetak-' + id).disabled = true;
}

function getPeriode() {
  const el = document.getElementById('sel-periode');
  return el ? el.value : '1';
}

function getLabelPeriode() {
  return getPeriode() === '1' ? 'Periode 1' : 'Periode 2';
}

function getBulan() {
  const val = document.getElementById('input-bulan').value;
  if (!val) return '___________';
  const [yr, mo] = val.split('-');
  const namaBulan = ['Januari','Februari','Maret','April','Mei','Juni',
                     'Juli','Agustus','September','Oktober','November','Desember'];
  return namaBulan[parseInt(mo) - 1] + ' ' + yr;
}

function bukaModal(id) {
  document.getElementById('btn-modal-print').style.display = 'block';
  document.getElementById('modal-title-text').textContent = "Preview Bukti Dukung";
  document.getElementById('modal-box').classList.remove('mode-foto');

  const barisList = getBarisList();
  const baris = barisList.find(b => b.id === id);
  const st = state[id];
  const bulan = getBulan();
  const labelPeriode = getLabelPeriode();
  const kel = getKel();
  const kec = getKec();
  const kasatgas = getKasatgas();

  const fotoHTML = st.foto
    ? `<img src="${st.foto}" alt="Foto kegiatan" />`
    : `<div class="dok-foto-placeholder">[ Foto Kegiatan ]</div>`;

  const narasiTeks = (st.narasi && st.narasi.trim()) ? st.narasi : (baris.progres || '—');

  // Mengisi konten modal dengan menghapus baris Bulan dan Periode di dalam tabel biodata
  document.getElementById('dokumen-cetak').innerHTML = `
    <div class="dok-kop">
      <div class="judul-utama">Satuan Tugas Gulkarmat Jakarta Utara</div>
      <div class="sub-judul">Kelurahan ${kel} &nbsp;·&nbsp; Kecamatan ${kec} &nbsp;·&nbsp; Kota Administrasi Jakarta Utara</div>
    </div>

    <div class="dok-judul-doc">
      <div class="judul-dialog">Dialog Kinerja</div>
      <div class="sub-dialog">${baris.indikator}</div>
      <div class="sub-dialog">Bulan ${bulan} &nbsp;·&nbsp; ${labelPeriode}</div>
    </div>

    <div class="dok-info">
      <table>
        <tr><td>Nama</td><td>:</td><td><strong>${kasatgas.nama}</strong></td></tr>
        <tr><td>Unit Kerja</td><td>:</td><td>Suku Dinas Penanggulangan Kebakaran dan Penyelamatan Kota Administrasi Jakarta Utara</td></tr>
        <tr><td>Satgas Kelurahan</td><td>:</td><td>${kel}</td></tr>
        <tr><td>Kecamatan</td><td>:</td><td>${kec}</td></tr>
        <tr><td>Rencana Aksi</td><td>:</td><td>${baris.rencanaAksi}</td></tr>
        <tr><td>Kriteria & Output</td><td>:</td><td>${baris.kriteriaOutput}</td></tr>
      </table>
    </div>

    <div class="dok-narasi-label">Progres Kegiatan:</div>
    <div class="dok-narasi">${narasiTeks}</div>

    <div class="dok-foto-area">
      ${fotoHTML}
      <div class="dok-foto-label">Dokumentasi Kegiatan – Bulan ${bulan}</div>
    </div>

    <div class="dok-ttd">
      <div class="blok-ttd">
        <div class="kota-tgl">Jakarta, ${bulan}</div>
        <div class="jabatan">Satuan Tugas Kelurahan ${kel}</div>
        <div class="ttd-ruang"></div>
        <div class="garis-ttd"></div>
        <div class="nama">${kasatgas.nama}</div>
        <div class="nip">NIP ${kasatgas.nip}</div>
      </div>
    </div>
  `;

  document.getElementById('modal-overlay').classList.add('aktif');
}

function copyNarasi(id) {
  const ta = document.getElementById('narasi-' + id);
  const teks = ta.value.trim();
  if (!teks) return;
  navigator.clipboard.writeText(teks).then(() => {
    const btn = document.getElementById('btn-copy-' + id);
    btn.textContent = '✓ Tersalin!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = '📋 Copy';
      btn.classList.remove('copied');
    }, 2000);
  }).catch(() => {
    ta.select();
    document.execCommand('copy');
  });
}

function tutupModal() {
  document.getElementById('modal-overlay').classList.remove('aktif');
  document.getElementById('modal-box').classList.remove('mode-foto');
}

function bukaFotoProfil(src) {
  const modalBox = document.getElementById('modal-box');
  const titleText = document.getElementById('modal-title-text');
  const btnPrint = document.getElementById('btn-modal-print');
  const dokCetak = document.getElementById('dokumen-cetak');
  
  modalBox.classList.add('mode-foto');
  titleText.textContent = "Profil Pengembang";
  btnPrint.style.display = 'none';
  
  dokCetak.innerHTML = `<img src="${src}" class="img-besar" alt="Rangga Riswanto">`;
  document.getElementById('modal-overlay').classList.add('aktif');
}

function cetakDokumen() {
  const elemen = document.getElementById('dokumen-cetak');
  const kel = getKel();
  const bulan = getBulan();
  const labelPeriode = getLabelPeriode();

  const namaFile = `Bukti_Dukung_${kel}_${bulan.replace(/\s+/g, '_')}_${labelPeriode.replace(/\s+/g, '_')}.pdf`;

  const opsi = {
    margin:       [15, 15, 15, 15],
    filename:     namaFile,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true, logging: false },
    jsPDF:        { unit: 'mm', format: 'legal', orientation: 'portrait' } // KUNCI DISINI: format diubah ke legal
  };

  html2pdf().set(opsi).from(elemen).save().then(() => {
    tutupModal();
  });
}

// Inisialisasi utama aplikasi saat DOM siap
window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('modal-overlay').addEventListener('click', function(e) {
    if (e.target === this) tutupModal();
  });

  selKec = document.getElementById('sel-kecamatan');
  selKel = document.getElementById('sel-kelurahan');

  Object.keys(wilayah).forEach(kec => {
    const opt = document.createElement('option');
    opt.value = kec; opt.textContent = kec;
    selKec.appendChild(opt);
  });

  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  document.getElementById('input-bulan').value = now.getFullYear() + '-' + mm;

  selKec.value = 'Cilincing';
  onKecamatanChange(true);
});
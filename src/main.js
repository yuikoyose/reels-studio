"use strict";const NICHE=["Kuliner","Kecantikan","Kesehatan","Teknologi","Travel","Edukasi","Fashion","Bisnis","Hiburan","Gaya Hidup"],VIBE=["Inspiratif","Edukatif","Lucu","Dramatis","Relatable","Trending"],IDEAS={Kuliner:["Resep rahasia 3 bahan yang bikin nagih dalam 60 detik","Review jujur makanan viral \u2014 worth it atau nggak?","Tutorial plating makanan ala restoran bintang 5","Mukbang hemat: cara makan enak di bawah 20 ribu","Dapur berantakan? Trik masak cepat ala chef","Perbandingan kopi kekinian vs kopi rumahan"],Kecantikan:["Rutinitas skincare pagi 5 langkah untuk kulit glowing","Makeup natural dalam 3 menit untuk pemula","Produk skincare yang layak dicoba vs yang overrated","Tutorial hijab + makeup untuk acara formal","Tips menghilangkan bekas jerawat dengan bahan rumahan","Perawatan rambut agar tetap sehat setiap hari"],Kesehatan:["5 kebiasaan kecil yang mengubah kesehatanmu dalam 30 hari","Mit atau fakta: mitos kesehatan yang perlu diluruskan","Latihan 10 menit setiap pagi untuk tubuh bugar","Makanan super yang wajib ada di menu harianmu","Cara menjaga kesehatan mental di tengah kesibukan","Peregangan sederhana untuk pekerja kantoran"],Teknologi:["5 aplikasi wajib yang bikin HP-mu makin produktif","Tips menghemat baterai agar HP awet seharian","Gadget impian yang worth it dibeli tahun ini","Cara aman berselancar di internet untuk pemula","Trik tersembunyi di aplikasi yang sering kamu pakai","Masa depan AI: apa artinya bagi kehidupan sehari-hari"],Travel:["5 destinasi hidden gem yang jarang diketahui orang","Tips packing efisien untuk liburan 3 hari","Rekomendasi tempat makan lokal saat traveling","Cara traveling hemat tanpa mengurangi pengalaman","Itinerary 1 hari di kota favoritmu","Bahasa lokal yang wajib kamu tahu sebelum traveling"],Edukasi:["Fakta unik yang jarang diketahui orang tentang dunia","Cara belajar efektif dengan metode 20 menit","Sejarah singkat hal-hal yang kamu pakai setiap hari","Kata-kata asing yang sering salah diucapkan","Tips menghafal cepat untuk pelajar dan mahasiswa","Fenomena sains sederhana di balik kehidupan sehari-hari"],Fashion:["5 outfit simpel yang selalu terlihat mahal","Tips mix and match warna untuk pemula","Tren fashion yang kembali populer tahun ini","Cara memilih pakaian sesuai bentuk tubuh","Kapsul wardrobe: 10 item untuk semua acara","Aksesori murah yang bikin tampilan naik kelas"],Bisnis:["Ide bisnis modal kecil yang cocok untuk pemula","Cara membangun personal branding di media sosial","Kesalahan umum yang bikin bisnis gagal di awal","Strategi marketing sederhana untuk UMKM","Cara menentukan harga jual yang tepat","Tips mengelola keuangan bisnis agar tetap sehat"],Hiburan:["Tantangan seru yang bisa kamu lakukan bersama teman","Deretan film/serial yang wajib kamu tonton","Fakta di balik layar hiburan favoritmu","Kuis seru: tebak lagu dari 3 detik pertama","Kompilasi momen lucu yang bikin ngakak","Rekomendasi konten menghibur untuk akhir pekan"],"Gaya Hidup":["Morning routine yang bikin harimu lebih produktif","Cara mengatur waktu antara kerja dan waktu pribadi","Trik minimalis: hidup lebih ringan dengan lebih sedikit barang","Kebiasaan kecil untuk hidup lebih bahagia","Cara membangun rutinitas tidur yang berkualitas","Tips mengelola stres di tengah rutinitas padat"]},VIBE_OPENERS={Inspiratif:"Kisah perjalanan",Edukatif:"Tahukah kamu,",Lucu:"POV:",Dramatis:"Hal yang tidak pernah kusangka,",Relatable:"Semua orang pasti pernah ngalamin,",Trending:"Viral banget nih,"},app=document.getElementById("app"),toastEl=document.getElementById("toast");function escapeHtml(a){const e=document.createElement("div");return e.textContent=a,e.innerHTML}function showToast(a){toastEl.textContent=a,toastEl.classList.add("show"),clearTimeout(showToast._t),showToast._t=setTimeout(()=>toastEl.classList.remove("show"),2200)}function pickRandom(a){return a[Math.floor(Math.random()*a.length)]}const IDEAS_STORAGE_KEY="reelsStudio.ideas";function loadIdeas(){try{const a=localStorage.getItem(IDEAS_STORAGE_KEY),e=a?JSON.parse(a):[];return Array.isArray(e)?e:[]}catch{return[]}}function saveIdeas(a){try{localStorage.setItem(IDEAS_STORAGE_KEY,JSON.stringify(a))}catch{showToast("Gagal menyimpan \u2014 penyimpanan penuh")}}function addIdea(a){const e=loadIdeas();return e.some(n=>n.title===a.title)?!1:(e.unshift(a),saveIdeas(e),!0)}function removeIdea(a){const e=loadIdeas().filter(t=>t.id!==a);saveIdeas(e)}function formatTanggal(a){const e=new Date(a);return Number.isNaN(e.getTime())?"":e.toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}function currentRoute(){const a=window.location.hash||"#/ide";return a==="#/"?"#/ide":a}function renderNav(){const a=currentRoute();document.querySelectorAll("[data-nav]").forEach(e=>{const t=e.getAttribute("href")===a;e.classList.toggle("active",t),t?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}function render(){renderNav();const a=currentRoute();a==="#/ide"?renderIde():a==="#/skrip"?renderSkrip():a==="#/panduan"?renderPanduan():renderIde()}function renderIde(){app.innerHTML=`
    <section class="mx-auto max-w-3xl">
      <div class="mb-8 text-center">
        <span class="badge mb-3" style="background:rgba(236,72,153,0.15);color:var(--color-primary)">\u2728 Generator Ide</span>
        <h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span class="grad-text">Ide Reels</span> Tanpa Pusing
        </h1>
        <p class="mt-2 text-[var(--color-muted)]">Pilih niche & vibe, lalu biarkan kami menyulapnya jadi ide konten siap produksi.</p>
      </div>

      <div class="card p-5 sm:p-6">
        <form id="ide-form" class="grid gap-4 sm:grid-cols-2">
          <div class="flex flex-col gap-1.5">
            <label for="niche" class="text-sm font-semibold">Niche / Kategori</label>
            <select id="niche" class="field rounded-xl px-3 py-2.5 text-sm">
              ${NICHE.map(a=>`<option value="${a}">${a}</option>`).join("")}
            </select>
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="vibe" class="text-sm font-semibold">Minat / Vibe</label>
            <select id="vibe" class="field rounded-xl px-3 py-2.5 text-sm">
              ${VIBE.map(a=>`<option value="${a}">${a}</option>`).join("")}
            </select>
          </div>
          <button type="submit" class="btn-primary col-span-full rounded-xl px-4 py-3 text-sm font-bold">
            \u2728 Buat Ide
          </button>
        </form>
      </div>

      <div id="ide-result" class="mt-6"></div>

      <div id="ide-saved" class="mt-10"></div>
    </section>
  `,document.getElementById("ide-form").addEventListener("submit",a=>{a.preventDefault(),generateIdea()}),renderIdeSaved()}function generateIdea(){const a=document.getElementById("niche").value,e=document.getElementById("vibe").value,t=IDEAS[a]||[],n=pickRandom(t),s=`${VIBE_OPENERS[e]||""} ${n}`.trim(),r=document.getElementById("ide-result");r.innerHTML=`
    <div class="card overflow-hidden">
      <div class="h-1.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"></div>
      <div class="p-5 sm:p-6">
        <div class="mb-3 flex flex-wrap gap-2">
          <span class="badge" style="background:rgba(236,72,153,0.15);color:var(--color-primary)">#${escapeHtml(a)}</span>
          <span class="badge" style="background:rgba(139,92,246,0.15);color:var(--color-accent)">${escapeHtml(e)}</span>
        </div>
        <h2 class="text-xl font-bold leading-snug sm:text-2xl">${escapeHtml(s)}</h2>
        <div class="mt-5 flex flex-col gap-2 sm:flex-row">
          <button id="save-idea" class="btn-primary flex-1 rounded-xl px-4 py-2.5 text-sm font-bold">\u{1F4BE} Simpan Ide</button>
          <button id="again-idea" class="btn-ghost flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold">\u{1F504} Buat Lagi</button>
        </div>
      </div>
    </div>
  `,document.getElementById("save-idea").addEventListener("click",()=>{const l={id:"idea-"+Date.now()+"-"+Math.random().toString(36).slice(2,7),title:s,niche:a,vibe:e,createdAt:Date.now()};addIdea(l)?(showToast("Ide tersimpan \u2713"),renderIdeSaved()):showToast("Ide sudah tersimpan")}),document.getElementById("again-idea").addEventListener("click",()=>{generateIdea()}),r.scrollIntoView({behavior:"smooth",block:"nearest"})}function renderIdeSaved(){const a=loadIdeas(),e=document.getElementById("ide-saved");if(e){if(a.length===0){e.innerHTML=`
      <div class="card p-6 text-center">
        <p class="text-sm text-[var(--color-muted)]">Belum ada ide tersimpan. Generate ide lalu tekan \u{1F4BE} Simpan Ide.</p>
      </div>
    `;return}e.innerHTML=`
    <div class="mb-4 flex items-center justify-between">
      <h2 class="text-lg font-bold">Ide Tersimpan</h2>
      <span class="badge" style="background:rgba(34,197,94,0.15);color:var(--color-success)">${a.length} ide</span>
    </div>
    <div class="grid gap-3">
      ${a.map(t=>`
        <div class="card p-4" data-idea-id="${escapeHtml(t.id)}">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <div class="mb-2 flex flex-wrap gap-2">
                <span class="badge" style="background:rgba(236,72,153,0.15);color:var(--color-primary)">#${escapeHtml(t.niche||"")}</span>
                <span class="badge" style="background:rgba(139,92,246,0.15);color:var(--color-accent)">${escapeHtml(t.vibe||"")}</span>
              </div>
              <p class="text-sm font-semibold leading-snug text-[var(--color-text)]">${escapeHtml(t.title)}</p>
              <p class="mt-1 text-xs text-[var(--color-muted)]">${escapeHtml(formatTanggal(t.createdAt))}</p>
            </div>
            <button class="btn-ghost grid h-9 w-9 shrink-0 place-items-center rounded-lg text-sm" data-remove-idea="${escapeHtml(t.id)}" aria-label="Hapus ide: ${escapeHtml(t.title)}">\u{1F5D1}</button>
          </div>
        </div>
      `).join("")}
    </div>
  `,e.querySelectorAll("[data-remove-idea]").forEach(t=>{t.addEventListener("click",()=>{removeIdea(t.getAttribute("data-remove-idea")),showToast("Ide dihapus"),renderIdeSaved()})})}}const TUJUAN=["Edukasi","Hiburan","Promosi/Branding","Inspirasi","Tutorial","Storytelling"],DURASI=[{label:"15 detik",total:15},{label:"30 detik",total:30},{label:"60 detik",total:60},{label:"90 detik",total:90}],HOOKS=["Berhenti scroll! {topik} ini bakal bikin kamu berhenti sejenak.","Kalau kamu {audiens}, video ini WAJIB kamu tonton sampai habis.","Kamu nggak akan percaya rahasia {topik} yang baru ketahuan ini.","3 detik aja \u2014 ini dia {topik} yang paling sering ditanyakan.","Jangan lanjut scroll dulu, {topik} berikut ini terlalu sayang untuk dilewatkan.","Tahukah kamu kalau {topik} bisa dijelaskan sesimpel ini?"],ISI_EDUKASI=["Poin pertama: kenali dasar-dasar {topik} terlebih dahulu.","Lalu terapkan langkah sederhana yang langsung terasa hasilnya.","Terakhir, hindari kesalahan umum yang sering dilakukan banyak orang."],ISI_TUTORIAL=["Langkah 1: siapkan semua bahan dan alat yang dibutuhkan.","Langkah 2: ikuti urutan cara pengerjaan satu per satu.","Langkah 3: cek hasilnya dan sesuaikan sesuai selera."],ISI_HIBURAN=["Bayangkan situasi paling kocak yang berhubungan dengan {topik}.","Tambahkan reaksi berlebihan biar makin lucu dan relatable.","Tutup dengan plot twist yang bikin penonton ngakak."],ISI_PROMOSI=["Tunjukkan keunggulan utama yang bikin produk ini beda dari yang lain.","Perlihatkan bukti nyata atau testimoni singkat dari pengguna.","Tekankan penawaran spesial yang sayang untuk dilewatkan."],ISI_INSPIRASI=["Mulai dari perjalanan kecil yang akhirnya membawa perubahan besar.","Ceritakan momen sulit dan bagaimana kamu bangkit dari situ.","Akhiri dengan pesan bahwa siapa pun bisa melakukannya."],ISI_STORYTELLING=["Buka dengan setting atau tokoh yang langsung menarik perhatian.","Bangun konflik singkat yang membuat penonton penasaran.","Lepaskan resolusi yang mengejutkan sekaligus memuaskan."],ISI_BY_TUJUAN={Edukasi:ISI_EDUKASI,Hiburan:ISI_HIBURAN,"Promosi/Branding":ISI_PROMOSI,Inspirasi:ISI_INSPIRASI,Tutorial:ISI_TUTORIAL,Storytelling:ISI_STORYTELLING},CTA={Edukasi:["Follow @akunmu biar makin paham {topik} tiap hari.","Simpan video ini buat dipelajari lagi nanti.","Komen di bawah kalau kamu mau dibahas lebih dalam."],Hiburan:["Tag temanmu yang paling butuh lihat ini!","Share ke story biar temanmu ikut ketawa.","Follow biar nggak ketinggalan konten seru berikutnya."],"Promosi/Branding":["Klik link di bio untuk info selengkapnya.","Order sekarang sebelum kehabisan!","Follow untuk update promo terbaru."],Inspirasi:["Bagikan ini ke satu orang yang lagi butuh semangat.","Follow biar makin termotivasi setiap hari.","Simpan video ini buat dibuka lagi saat butuh dorongan."],Tutorial:["Praktikkan sekarang dan ceritakan hasilnya di kolom komentar.","Save dulu biar nggak hilang saat mau dipraktikkan.","Follow untuk tutorial {topik} lainnya."],Storytelling:["Komen: kamu pernah ngalamin hal yang mirip?","Follow biar ikut cerita lanjutannya.","Share kisah ini ke teman yang suka cerita menarik."]};function fillTemplate(a,e,t){return a.replace(/\{topik\}/g,e||"topik ini").replace(/\{audiens\}/g,t||"penonton")}function generateSkrip(a){const e=(a.topik||"").trim(),t=(a.audiens||"").trim(),n=a.tujuan||"Edukasi",i=parseInt(a.durasi,10)||30,s=fillTemplate(pickRandom(HOOKS),e,t),r=3,l=3,u=Math.max(6,i-l-r),o=[...ISI_BY_TUJUAN[n]||ISI_EDUKASI].sort(()=>Math.random()-.5).slice(0,i>=60?3:2),d=Math.max(2,Math.round(u/o.length)),c=fillTemplate(pickRandom(CTA[n]||CTA.Edukasi),e,t);return{meta:{topik:e,audiens:t,tujuan:n,durasi:i,hookDetik:l,isiPerPoin:d,ctaDetik:r},hook:{teks:s,detik:l},isi:o.map(p=>({teks:fillTemplate(p,e,t),detik:d})),cta:{teks:c,detik:r},total:l+o.length*d+r}}function renderSkrip(){app.innerHTML=`
    <section class="mx-auto max-w-3xl">
      <div class="mb-8 text-center">
        <span class="badge mb-3" style="background:rgba(139,92,246,0.15);color:var(--color-accent)">\u{1F3AC} Template Skrip</span>
        <h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span class="grad-text">Skrip Reels</span> Siap Produksi
        </h1>
        <p class="mt-2 text-[var(--color-muted)]">Isi topik, audiens, tujuan & durasi \u2014 dapatkan struktur skrip dengan estimasi detik per segmen.</p>
      </div>

      <div class="card p-5 sm:p-6">
        <form id="skrip-form" class="grid gap-4 sm:grid-cols-2">
          <div class="flex flex-col gap-1.5">
            <label for="topik" class="text-sm font-semibold">Topik reels</label>
            <input id="topik" type="text" class="field rounded-xl px-3 py-2.5 text-sm" placeholder="mis. resep nasi goreng" required />
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="audiens" class="text-sm font-semibold">Target audiens</label>
            <input id="audiens" type="text" class="field rounded-xl px-3 py-2.5 text-sm" placeholder="mis. pemula memasak" />
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="tujuan" class="text-sm font-semibold">Tujuan konten</label>
            <select id="tujuan" class="field rounded-xl px-3 py-2.5 text-sm">
              ${TUJUAN.map(a=>`<option value="${a}">${a}</option>`).join("")}
            </select>
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="durasi" class="text-sm font-semibold">Durasi target</label>
            <select id="durasi" class="field rounded-xl px-3 py-2.5 text-sm">
              ${DURASI.map(a=>`<option value="${a.total}">${a.label}</option>`).join("")}
            </select>
          </div>
          <button type="submit" class="btn-primary col-span-full rounded-xl px-4 py-3 text-sm font-bold">
            \u{1F3AC} Buat Skrip
          </button>
        </form>
      </div>

      <div id="skrip-result" class="mt-6"></div>
    </section>
  `,document.getElementById("skrip-form").addEventListener("submit",a=>{a.preventDefault();const e={topik:document.getElementById("topik").value,audiens:document.getElementById("audiens").value,tujuan:document.getElementById("tujuan").value,durasi:document.getElementById("durasi").value};renderSkripResult(e)})}function renderSkripResult(a){const e=generateSkrip(a),t=document.getElementById("skrip-result"),n=`
    <div class="border-b border-[var(--color-surface2)]/60 px-5 py-4 sm:px-6">
      <div class="flex items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <span class="badge" style="background:rgba(236,72,153,0.15);color:var(--color-primary)">Hook</span>
          <span class="text-xs text-[var(--color-muted)]">0\u2013${e.hook.detik}s</span>
        </div>
        <span class="badge" style="background:rgba(34,197,94,0.15);color:var(--color-success)">~${e.hook.detik}s</span>
      </div>
      <p class="mt-2 text-[var(--color-text)]">${escapeHtml(e.hook.teks)}</p>
    </div>
    ${e.isi.map((i,s)=>`
      <div class="border-b border-[var(--color-surface2)]/60 px-5 py-4 sm:px-6">
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <span class="badge" style="background:rgba(139,92,246,0.15);color:var(--color-accent)">Isi ${s+1}</span>
            <span class="text-xs text-[var(--color-muted)]">adegan singkat</span>
          </div>
          <span class="badge" style="background:rgba(34,197,94,0.15);color:var(--color-success)">~${i.detik}s</span>
        </div>
        <p class="mt-2 text-[var(--color-text)]">${escapeHtml(i.teks)}</p>
      </div>
    `).join("")}
    <div class="px-5 py-4 sm:px-6">
      <div class="flex items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <span class="badge" style="background:rgba(245,158,11,0.15);color:var(--color-warning)">CTA</span>
          <span class="text-xs text-[var(--color-muted)]">penutup</span>
        </div>
        <span class="badge" style="background:rgba(34,197,94,0.15);color:var(--color-success)">~${e.cta.detik}s</span>
      </div>
      <p class="mt-2 text-[var(--color-text)]">${escapeHtml(e.cta.teks)}</p>
    </div>
  `;t.innerHTML=`
    <div class="card overflow-hidden">
      <div class="h-1.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"></div>
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-surface2)]/60 px-5 py-4 sm:px-6">
        <div class="flex flex-wrap gap-2">
          <span class="badge" style="background:rgba(236,72,153,0.15);color:var(--color-primary)">${escapeHtml(e.meta.tujuan)}</span>
          <span class="badge" style="background:rgba(139,92,246,0.15);color:var(--color-accent)">~${e.meta.durasi}s target</span>
          <span class="badge" style="background:rgba(34,197,94,0.15);color:var(--color-success)">Total \u2248 ${e.total}s</span>
        </div>
        <span class="text-sm font-bold text-[var(--color-text)]">${escapeHtml(e.meta.topik||"Skrip reels")}</span>
      </div>
      ${n}
      <div class="flex flex-col gap-2 border-t border-[var(--color-surface2)]/60 px-5 py-4 sm:flex-row sm:px-6">
        <button id="copy-skrip" class="btn-primary flex-1 rounded-xl px-4 py-2.5 text-sm font-bold">\u{1F4CB} Salin Skrip</button>
        <button id="regen-skrip" class="btn-ghost flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold">\u{1F504} Buat Ulang</button>
      </div>
    </div>
  `,document.getElementById("copy-skrip").addEventListener("click",()=>{const i=[`Skrip Reels: ${e.meta.topik||"Tanpa judul"}`,"",`[HOOK ~${e.hook.detik}s] ${e.hook.teks}`,...e.isi.map((s,r)=>`[ISI ${r+1} ~${s.detik}s] ${s.teks}`),`[CTA ~${e.cta.detik}s] ${e.cta.teks}`,"",`Total \xB1 ${e.total}s (target ${e.meta.durasi}s)`].join(`
`);copyToClipboard(i)}),document.getElementById("regen-skrip").addEventListener("click",()=>{renderSkripResult(a)}),t.scrollIntoView({behavior:"smooth",block:"nearest"})}function copyToClipboard(a){const e=()=>showToast("Skrip disalin \u2713"),t=()=>{const n=document.createElement("textarea");n.value=a,n.setAttribute("readonly",""),n.style.position="fixed",n.style.left="-9999px",document.body.appendChild(n),n.select();try{document.execCommand("copy"),e()}catch{showToast("Gagal menyalin skrip")}finally{document.body.removeChild(n)}};navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(a).then(e).catch(t):t()}const DURASI_PANDUAN=[{total:15,hook:3,isi:9,cta:3},{total:30,hook:3,isi:21,cta:6},{total:60,hook:5,isi:47,cta:8},{total:90,hook:5,isi:73,cta:12}],TIPS_HOOK=[{judul:"Buka dengan pertanyaan",isi:'Ajukan pertanyaan yang langsung bikin penonton merasa "ini tentang aku" dan penasaran dengan jawabannya.'},{judul:"Klaim berani / kontroversi",isi:'Mulai dengan pernyataan tegas yang menantang asumsi umum, mis. "Kamu salah kalau masih pakai cara ini".'},{judul:"Pakai angka spesifik",isi:'Angka konkret (mis. "5 trik", "3 bahan") menjanjikan nilai jelas dan mudah dipahami dalam sekejap.'},{judul:"Tunjukkan kontras",isi:"Perlihatkan sebelum vs sesudah, atau mitos vs fakta \u2014 kontras visual menahan scroll."},{judul:"Gunakan sudut pandang (POV)",isi:'Buka dengan perspektif orang pertama yang relatable, mis. "POV: kamu baru mulai dari nol".'},{judul:"Buat teaser / spoiler mini",isi:"Intip hasil akhir di 1-2 detik pertama agar penonton bertahan untuk melihat prosesnya."}],TIPS_CTA=[{tujuan:"Follow",isi:"Untuk konten rutin \u2014 ajak follow karena ada konten sejenis setiap hari."},{tujuan:"Comment",isi:"Untuk memancing interaksi \u2014 minta pendapat, pengalaman, atau jawaban atas pertanyaan."},{tujuan:"Save",isi:'Untuk konten bermanfaat (tutorial/tips) \u2014 "simpan biar nggak hilang".'},{tujuan:"Share",isi:'Untuk konten menghibur/inspiratif \u2014 "tag teman yang butuh ini".'},{tujuan:"DM / link bio",isi:"Untuk promosi \u2014 arahkan ke DM, link di bio, atau penawaran spesial."}],CHECKLIST_PUBLIKASI=["Resolusi & rasio: pastikan video HD (1080x1920, 9:16) dan tidak terpotong.","Teks terbaca: font jelas, kontras cukup, tidak menutupi wajah atau elemen penting.","Audio & musik: volume seimbang, musik tidak menenggelamkan narasi.","Caption + hashtag: tulis caption menarik dan pakai 3-5 hashtag relevan.","Cover menarik: pilih thumbnail/frame pertama yang menggoda untuk diklik.","Waktu posting: unggah saat audiens paling aktif (cek insight akun)."];function renderPanduan(){app.innerHTML=`
    <section class="mx-auto max-w-3xl">
      <div class="mb-8 text-center">
        <span class="badge mb-3" style="background:rgba(245,158,11,0.15);color:var(--color-warning)">\u{1F4DA} Panduan Produksi</span>
        <h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span class="grad-text">Panduan</span> Reels
        </h1>
        <p class="mt-2 text-[var(--color-muted)]">Durasi ideal per segmen, tips hook & CTA, plus checklist sebelum publikasi.</p>
      </div>

      <!-- Durasi ideal -->
      <div class="card p-5 sm:p-6">
        <h2 class="mb-1 text-lg font-bold">\u23F1\uFE0F Durasi Ideal per Segmen</h2>
        <p class="mb-4 text-sm text-[var(--color-muted)]">Patokan pembagian detik antara Hook, Isi, dan CTA untuk tiap panjang reels.</p>
        <div class="overflow-x-auto">
          <table class="w-full min-w-[420px] text-left text-sm">
            <thead>
              <tr class="border-b border-[var(--color-surface2)] text-[var(--color-muted)]">
                <th class="py-2 pr-3 font-semibold">Durasi target</th>
                <th class="py-2 pr-3 font-semibold" style="color:var(--color-primary)">Hook</th>
                <th class="py-2 pr-3 font-semibold" style="color:var(--color-accent)">Isi</th>
                <th class="py-2 font-semibold" style="color:var(--color-warning)">CTA</th>
              </tr>
            </thead>
            <tbody>
              ${DURASI_PANDUAN.map(a=>`
                <tr class="border-b border-[var(--color-surface2)]/60 last:border-0">
                  <td class="py-2.5 pr-3 font-bold text-[var(--color-text)]">${a.total} detik</td>
                  <td class="py-2.5 pr-3">${a.hook}s</td>
                  <td class="py-2.5 pr-3">${a.isi}s</td>
                  <td class="py-2.5">${a.cta}s</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Tips hook -->
      <div class="card mt-6 p-5 sm:p-6">
        <h2 class="mb-4 text-lg font-bold">\u{1F3A3} Tips Hook yang Kuat</h2>
        <ul class="grid gap-3">
          ${TIPS_HOOK.map(a=>`
            <li class="rounded-xl border border-[var(--color-surface2)] bg-[var(--color-surface2)]/40 p-4">
              <p class="font-semibold text-[var(--color-primary)]">${escapeHtml(a.judul)}</p>
              <p class="mt-1 text-sm text-[var(--color-muted)]">${escapeHtml(a.isi)}</p>
            </li>
          `).join("")}
        </ul>
      </div>

      <!-- Tips CTA -->
      <div class="card mt-6 p-5 sm:p-6">
        <h2 class="mb-4 text-lg font-bold">\u{1F4E3} Tips CTA yang Efektif</h2>
        <ul class="grid gap-3 sm:grid-cols-2">
          ${TIPS_CTA.map(a=>`
            <li class="rounded-xl border border-[var(--color-surface2)] bg-[var(--color-surface2)]/40 p-4">
              <span class="badge mb-2" style="background:rgba(139,92,246,0.15);color:var(--color-accent)">${escapeHtml(a.tujuan)}</span>
              <p class="text-sm text-[var(--color-muted)]">${escapeHtml(a.isi)}</p>
            </li>
          `).join("")}
        </ul>
      </div>

      <!-- Checklist pra-publikasi -->
      <div class="card mt-6 p-5 sm:p-6">
        <h2 class="mb-4 text-lg font-bold">\u2705 Checklist Pra-Publikasi</h2>
        <ul class="grid gap-2.5">
          ${CHECKLIST_PUBLIKASI.map(a=>`
            <li class="flex items-start gap-3 rounded-xl border border-[var(--color-surface2)] bg-[var(--color-surface2)]/40 p-3.5">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[rgba(34,197,94,0.15)] text-xs" style="color:var(--color-success)" aria-hidden="true">\u2713</span>
              <span class="text-sm text-[var(--color-text)]">${escapeHtml(a)}</span>
            </li>
          `).join("")}
        </ul>
      </div>
    </section>
  `}window.addEventListener("hashchange",render),render();

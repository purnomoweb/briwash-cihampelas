// Database & Render Dinamis Galeri Outlet
const galleryData = [
    { src: "Assets/Galeri/crew-briwash-1.jpg", alt: "Sambutan Hangat dari Karyawan Briwash Cihampelas" },
    { src: "Assets/Galeri/crew-briwash-2.jpeg", alt: "Kasir Briwash Cihampelas" },
    { src: "Assets/Galeri/hanger-briwash.jpg", alt: "Hanger Briwash Cihampelas" },
    { src: "Assets/Galeri/packing-briwash.jpg", alt: "Packing Briwash Cihampelas" }
];

const galleryContainer = document.getElementById('galleryContainer');
if (galleryContainer) {
    let galleryHTML = '';
    galleryData.forEach(item => {
        // PERBAIKAN: Menghapus loading="lazy" agar gambar di-download sejak awal
        galleryHTML += `
            <div class="rounded-2xl overflow-hidden border border-blue-50 group relative cursor-pointer bg-gray-100 transition-shadow duration-300 hover:shadow-lg">
                <img src="${item.src}" alt="${item.alt}" class="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110">
            </div>
        `;
    });
    galleryContainer.innerHTML = galleryHTML;
}

// Database & Render Pembayaran dan Thanks To (Marquee)
// Baris 1
const paymentData1 = [
    { src: "Assets/allobank.png", alt: "Allo Bank" },
    { src: "Assets/bca.png", alt: "BCA" },
    { src: "Assets/bri.png", alt: "BRI" },
    { src: "Assets/dana.png", alt: "DANA" },
    { src: "Assets/gopay.png", alt: "Gopay" },
    { src: "Assets/gpn.svg", alt: "GPN" },
    { src: "Assets/jcb.png", alt: "JCB" },
    { src: "Assets/jenius.png", alt: "Jenius" }
];

// Baris 2
const paymentData2 = [
    { src: "Assets/linkaja.png", alt: "LinkAja" },
    { src: "Assets/livin-mandiri.png", alt: "Livin by Mandiri" },
    { src: "Assets/mastercard.png", alt: "MasterCard" },
    { src: "Assets/octo.svg", alt: "Octo Mobile" },
    { src: "Assets/ovo.png", alt: "OVO" },
    { src: "Assets/shopeepay.png", alt: "ShopeePay" },
    { src: "Assets/visa.png", alt: "Visa" }
];

// Thanks To baris 1
const thanksData1 = [
    { src: "Assets/Thanks/bandung.svg", alt: "Lambang Kota Bandung" },
    { src: "Assets/Thanks/beranilaundry.png", alt: "Berani Laundry" },
    { src: "Assets/Thanks/bri-life.png", alt: "BRI Life" },
    { src: "Assets/Thanks/briwash.png", alt: "Briwash Cihampelas" },
    { src: "Assets/Thanks/gojek.png", alt: "Gojek" },
    { src: "Assets/Thanks/google.png", alt: "Google" },
    { src: "Assets/Thanks/grab.png", alt: "Grab" }
];

// Thanks To baris 2
const thanksData2 = [
    { src: "Assets/Thanks/lalamove.png", alt: "Lalamove" },
    { src: "Assets/Thanks/loker-laundry.png", alt: "Loker Laundry" },
    { src: "Assets/Thanks/maxim.png", alt: "Maxim" },
    { src: "Assets/Thanks/meta.png", alt: "Meta" },
    { src: "Assets/Thanks/teknisilaundrycom.png", alt: "Teknisi Laundry" },
    { src: "Assets/Thanks/tokopedia.png", alt: "Tokopedia" }
];

// Data Hotel
const hotelData = [
    { src: "Assets/Hotel/amaris.png", alt: "Amaris" },
    { src: "Assets/Hotel/aston-tropicana.png", alt: "Sensa Hotel" },
    { src: "Assets/Hotel/courtyard.png", alt: "Grand Tjokro" },
    { src: "Assets/Hotel/fave-cihampelas.png", alt: "Moxy Bandung" },
    { src: "Assets/Hotel/grand-tjokro.png", alt: "Novotel Bandung" },
    { src: "Assets/Hotel/hemangini.png", alt: "Ibis Styles" },
    { src: "Assets/Hotel/hilton.png", alt: "Ibis Styles" },
    { src: "Assets/Hotel/moritz.png", alt: "Ibis Styles" },
    { src: "Assets/Hotel/moxy.png", alt: "Ibis Styles" },
    { src: "Assets/Hotel/novotel.png", alt: "Ibis Styles" },
    { src: "Assets/Hotel/parahyangan-golf.png", alt: "Ibis Styles" },
    { src: "Assets/Hotel/prime-park.png", alt: "Ibis Styles" },
    { src: "Assets/Hotel/promenade.png", alt: "Ibis Styles" },
    { src: "Assets/Hotel/savoy-homann.png", alt: "Ibis Styles" },
    { src: "Assets/Hotel/sensa.png", alt: "Ibis Styles" },
    { src: "Assets/Hotel/serela.png", alt: "Ibis Styles" },
    { src: "Assets/Hotel/travello.png", alt: "Ibis Styles" },
    { src: "Assets/Hotel/zest.png", alt: "Ibis Styles" },
    { src: "Assets/Hotel/hemangini.png", alt: "Ibis Styles" },
];

// Ambil elemen container dari HTML
const paymentContainer1 = document.getElementById('paymentContainer1');
const paymentContainer2 = document.getElementById('paymentContainer2');
const thanksContainer1 = document.getElementById('thanksContainer1');
const thanksContainer2 = document.getElementById('thanksContainer2');
const hotelContainer = document.getElementById('hotelContainer');


// Fungsi pembantu untuk membuat HTML gambar dan menduplikatnya
function renderMarquee(container, data) {
    if (!container) return;
    let htmlContent = '';
    
    // Looping set pertama
    data.forEach(item => {
        htmlContent += `<img src="${item.src}" alt="${item.alt}" class="h-10 md:h-12 object-contain rounded-lg shadow-sm hover:scale-110 transition-transform">`;
    });
    // Looping set kedua (duplikasi agar gulir tidak putus)
    data.forEach(item => {
        htmlContent += `<img src="${item.src}" alt="${item.alt}" class="h-10 md:h-12 object-contain rounded-lg shadow-sm hover:scale-110 transition-transform">`;
    });

    container.innerHTML = htmlContent;
}

// Render ke masing-masing container
renderMarquee(paymentContainer1, paymentData1);
renderMarquee(paymentContainer2, paymentData2);
renderMarquee(thanksContainer1, thanksData1);
renderMarquee(thanksContainer2, thanksData2);
renderMarquee(hotelContainer, hotelData);


// Refresh animasi untuk elemen yang baru dirender JS
setTimeout(() => {
    if (typeof revealOnScroll === 'function') {
        revealOnScroll();
    }
}, 100);

// Database & Logika Pricelist Interaktif
const priceData = {
    kiloan: [
        { item: "Cuci Kering Lipat (Min. 3kg)", reguler: 5, oneday: 8, express: 10, quick: 15 },
        { item: "Cuci Kering Gosok (Min. 3kg)", reguler: 8, oneday: 12, express: 16, quick: 25 },
        { item: "Setrika Kiloan (Min. 3 kg)", reguler: 5, oneday: 10, express: 12, quick: 15 }
    ],
    satuan: [
        { item: "TOPS (Kemeja/Blouse/Batik)", reguler: 15, oneday: 25, express: 30, quick: null },
        { item: "BOTTOMS (Celana/Rok/Shorts)", reguler: 20, oneday: 30, express: 40, quick: null },
        { item: "ALAT IBADAH (Mukena/Sarung/Sajadah)", reguler: 10, oneday: 15, express: 20, quick: null },
        { item: "SUITS (Jaket/Blazer/Jas)", reguler: 30, oneday: 45, express: 60, quick: null },
        { item: "JAKET (Jeans/Hoodie/Sweater)", reguler: 30, oneday: 45, express: 60, quick: null },
        { item: "2pcs SUIT/JUMPSUIT", reguler: 100, oneday: null, express: null, quick: null },
        { item: "DRESS (Baju Muslim/Long Dress)", reguler: 30, oneday: 45, express: 65, quick: null },
        { item: "Gown (Gaun Pesta/Gaun Variasi)", reguler: 70, oneday: null, express: null, quick: null },
        { item: "Coat (Mantel/Jaket Tebal)", reguler: 80, oneday: null, express: null, quick: null }
    ],
    sepatutas: [
        // Khusus Sepatu & Tas, PDF mencantumkan "One Day Express" di kolom yang sama
        { item: "NYLON, CANVAS & RUBBER", reguler: 40, oneday: null, express: null, quick: null },
        { item: "SUEDE & LEATHER", reguler: 50, oneday: null, express: null, quick: null },
        { item: "TAS NON LEATHER (KECIL)", reguler: 50, oneday: null, express: null, quick: null },
        { item: "TAS NON LEATHER (BESAR)", reguler: 70, oneday: null, express: null, quick: null },
        { item: "TAS LEATHER (KECIL) (7-10 hari)", reguler: 100, oneday: null, express: null, quick: null },
        { item: "TAS LEATHER (BESAR) (7-10 hari)", reguler: 120, oneday: null, express: null, quick: null }
    ],
    rumah: [
        { item: "BED COVER SINGLE", reguler: 25, oneday: 40, express: 50, quick: null },
        { item: "BED COVER DOUBLE", reguler: 40, oneday: 60, express: 80, quick: null },
        { item: "PILLOW CASE (Sarung Bantal)", reguler: 5, oneday: 7, express: 10, quick: null },
        { item: "BLANKET (Selimut)", reguler: 20, oneday: 30, express: 40, quick: null },
        { item: "BED SHEET SINGLE (Sprei)", reguler: 15, oneday: 25, express: 30, quick: null },
        { item: "BED SHEET DOUBLE (Sprei)", reguler: 20, oneday: 30, express: 40, quick: null },
        { item: "DOORMATS (Keset)", reguler: 15, oneday: 25, express: 30, quick: null },
        { item: "TABLECLOTH (Taplak Meja)", reguler: 15, oneday: 20, express: 30, quick: null },
        { item: "TOWEL (Handuk)", reguler: 10, oneday: 15, express: 20, quick: null }
    ]
};

// State Saat Ini
let currentCategory = 'kiloan';
let currentSpeed = 'reguler';

const tableBody = document.getElementById('tableHargaBody');
const tabKategoris = document.querySelectorAll('.tab-kategori');
const btnSpeeds = document.querySelectorAll('.btn-speed');
const btnQuick = document.getElementById('btnQuick');

// Format Uang (5 -> Rp 5.000)
function formatRupiah(angka) {
    if (angka === null || angka === undefined) return '<span class="text-red-400 italic text-sm">Tidak Tersedia</span>';
    return `<span class="font-bold text-textMain">Rp ${angka}.000</span>`;
}

// Render Tabel Berdasarkan State
function renderPricelist() {
    if (!tableBody) return;
    
    // Logika Khusus: Tombol "Quick" hanya muncul jika kategori "kiloan"
    if (currentCategory === 'kiloan') {
        if(btnQuick) btnQuick.style.display = 'inline-block';
    } else {
        if(btnQuick) btnQuick.style.display = 'none';
        // Jika sedang pilih quick tapi pindah kategori, kembalikan ke reguler
        if (currentSpeed === 'quick') {
            currentSpeed = 'reguler';
            updateSpeedUI();
        }
    }

    const dataList = priceData[currentCategory];
    let htmlContent = '';

    // Render Data dalam bentuk Flex/Grid List yang responsif
    if (dataList) {
        dataList.forEach(data => {
            const harga = data[currentSpeed];
            
            // Desain Responsif: 
            // Di HP: Teks di atas, harga di bawah. 
            // Di Tablet/PC: Teks di kiri, harga di kanan (seperti tabel)
            htmlContent += `
                <div class="flex flex-col sm:flex-row justify-between sm:items-center p-4 border-b border-blue-50/50 hover:bg-blue-50/40 transition-colors gap-2">
                    <span class="font-medium text-textMain">${data.item}</span>
                    <span class="text-left sm:text-right">${formatRupiah(harga)}</span>
                </div>
            `;
        });
    }

    tableBody.innerHTML = htmlContent;
}

// Update Tampilan Tab Kategori Aktif
function updateCategoryUI() {
    tabKategoris.forEach(tab => {
        if (tab.dataset.kategori === currentCategory) {
            // Desain Tab Aktif
            tab.classList.remove('text-textLight', 'border-transparent', 'hover:bg-gray-50');
            tab.classList.add('text-primary', 'border-primary', 'bg-blue-50/50', 'font-bold');
        } else {
            // Desain Tab Tidak Aktif
            tab.classList.add('text-textLight', 'border-transparent', 'hover:bg-gray-50');
            tab.classList.remove('text-primary', 'border-primary', 'bg-blue-50/50', 'font-bold');
        }
    });
}

// Update Tampilan Tombol Kecepatan Aktif
function updateSpeedUI() {
    btnSpeeds.forEach(btn => {
        if (btn.dataset.speed === currentSpeed) {
            // Desain Tombol Aktif (Warna Solid)
            btn.classList.add('active-speed', 'bg-primary', 'text-white', 'font-semibold', 'shadow-md', 'transform', 'scale-105');
            btn.classList.remove('border', 'border-blue-200', 'text-textLight', 'bg-white', 'text-textMain');
        } else {
            // Desain Tombol Tidak Aktif (Outline)
            btn.classList.remove('active-speed', 'bg-primary', 'text-white', 'font-semibold', 'shadow-md', 'transform', 'scale-105');
            btn.classList.add('border', 'border-blue-200', 'text-textLight', 'bg-white');
            btn.classList.remove('text-textMain'); 
        }
    });
}

// Event Listeners Kategori
tabKategoris.forEach(tab => {
    tab.addEventListener('click', () => {
        currentCategory = tab.dataset.kategori;
        updateCategoryUI();
        renderPricelist();
    });
});

// Event Listeners Kecepatan
btnSpeeds.forEach(btn => {
    btn.addEventListener('click', () => {
        currentSpeed = btn.dataset.speed;
        updateSpeedUI();
        renderPricelist();
    });
});

// Inisialisasi Pertama Kali
if (tableBody) {
    updateCategoryUI();
    updateSpeedUI();
    renderPricelist();
}

// 1. Mobile Menu Toggle (Drop down Tailwind Logic)
const menuBtn = document.getElementById('menuBtn');
const navMobile = document.getElementById('navMobile');
const icon = menuBtn.querySelector('i');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
    const isOpen = navMobile.classList.contains('max-h-[500px]');
    
    if (isOpen) {
        navMobile.classList.remove('max-h-[500px]', 'opacity-100', 'visible');
        navMobile.classList.add('max-h-0', 'opacity-0', 'invisible');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        menuBtn.classList.remove('rotate-90');
    } else {
        navMobile.classList.remove('max-h-0', 'opacity-0', 'invisible');
        navMobile.classList.add('max-h-[500px]', 'opacity-100', 'visible');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        menuBtn.classList.add('rotate-90');
    }
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMobile.classList.remove('max-h-[500px]', 'opacity-100', 'visible');
        navMobile.classList.add('max-h-0', 'opacity-0', 'invisible');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        menuBtn.classList.remove('rotate-90');
    });
});

// 2. Navbar Scroll Effect
const navbar = document.getElementById('navbar');
const navContainer = document.getElementById('navContainer');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        navContainer.classList.remove('py-4');
        navContainer.classList.add('py-2');
    } else {
        navbar.classList.remove('shadow-md');
        navContainer.classList.add('py-4');
        navContainer.classList.remove('py-2');
    }
});

// 3. Scroll Reveal Animation
function revealOnScroll() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        
        // Diperkecil dari 100 menjadi 30 agar animasi langsung terpicu 
        // saat elemen baru sedikit masuk ke layar bawah
        var elementVisible = 30; 
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Panggil sekali saat dimuat

// 4. Testimonial Auto-Scroll
const testiGrid = document.getElementById('testiGrid');
if (testiGrid) {
    setInterval(() => {
        const card = testiGrid.firstElementChild;
        if (!card) return;
        
        const cardWidth = card.offsetWidth + 24; 
        let currentScroll = testiGrid.scrollLeft;
        let maxScroll = testiGrid.scrollWidth - testiGrid.clientWidth;

        if (currentScroll >= maxScroll - 10) {
            testiGrid.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            testiGrid.scrollTo({ left: currentScroll + cardWidth, behavior: 'smooth' });
        }
    }, 3500);
}

// 7. Modal Syarat & Ketentuan (Pop-Up)
const modalSnK = document.getElementById('modalSnK');
const modalContent = document.getElementById('modalContent');
const closeSnK = document.getElementById('closeSnK');
const btnMengerti = document.getElementById('btnMengerti');

// Tombol pemicu (Ada 3: Footer, Navigasi PC, dan Navigasi HP)
const snkTriggers = [
    document.getElementById('btnOpenSnK'),      // Di Footer
    document.getElementById('navDeskOpenSnK'),  // Di Navigasi Desktop
    document.getElementById('navMobOpenSnK')    // Di Navigasi Mobile
];

// Fungsi untuk membuka pop-up
function openModal() {
    if (!modalSnK) return;
    modalSnK.classList.remove('invisible', 'opacity-0');
    modalContent.classList.remove('scale-95');
    modalContent.classList.add('scale-100');
}

// Fungsi untuk menutup pop-up
function closeModal() {
    if (!modalSnK) return;
    modalSnK.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    setTimeout(() => {
        modalSnK.classList.add('invisible');
    }, 300);
}

// Event Listener untuk semua pemicu (Looping)
snkTriggers.forEach(trigger => {
    if (trigger) {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
            
            // Opsional: Jika di klik dari menu HP, tutup menu HP-nya terlebih dahulu
            // Ganti 'navMenu' dengan ID menu mobile Anda jika ingin otomatis menutup
            const navMenu = document.getElementById('navMenu'); 
            if (navMenu && !navMenu.classList.contains('hidden')) {
                navMenu.classList.add('hidden');
            }
        });
    }
});

if (closeSnK) closeSnK.addEventListener('click', closeModal);
if (btnMengerti) btnMengerti.addEventListener('click', closeModal);

// Tutup pop-up jika pengunjung klik area gelap
window.addEventListener('click', (e) => {
    if (e.target === modalSnK) {
        closeModal();
    }
});

// Memaksa konten langsung muncul (tanpa delay) saat menu navigasi diklik
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Jangan jalankan jika href hanya berisi "#"
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        // Jalankan fungsi kemunculan (reveal) dengan sangat cepat selama layar sedang menggulir turun
        let forceRevealInterval = setInterval(() => {
            if (typeof revealOnScroll === 'function') {
                revealOnScroll();
            }
        }, 50); // Mengecek dan memunculkan konten setiap 50 milidetik

        // Hentikan paksaan ini setelah 1.5 detik (waktu yang cukup untuk layar sampai ke bagian paling bawah)
        setTimeout(() => {
            clearInterval(forceRevealInterval);
        }, 1500);
    });
});
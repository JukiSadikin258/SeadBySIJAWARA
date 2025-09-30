// 
const dataPerbandingan = [
    { value: "100g", img: "./assets/image/dagingSapi.png", alt: "Daging sapi", label: "Daging Sapi", jumlahAir: "81" },
    { value: "100g", img: "./assets/image/dagingAyam.png", alt: "Daging Ayam", label: "Daging Ayam", jumlahAir: "24" },
    { value: "100g", img: "./assets/image/dagingkambing.png", alt: "Daging Domba", label: "Daging Domba", jumlahAir: "46" },
    { value: "100g", img: "./assets/image/dagingIkan.png", alt: "Daging Ikan", label: "Daging Ikan", jumlahAir: "26" },
    { value: "50g", img: "./assets/image/telur.png", alt: "Telur Ayam", label: "Telur Ayam", jumlahAir: "8" },
    { value: "100g", img: "./assets/image/TahuTempe.png", alt: "Tahu Tempe", label: "Tahu Tempe", jumlahAir: "21" },
    { value: "100g", img: "./assets/image/nasi.png", alt: "Nasi Putih", label: "Nasi Putih", jumlahAir: "12" },
    { value: "100g", img: "./assets/image/kentang.png", alt: "Kentang", label: "Kentang", jumlahAir: "8" },
    { value: "100g", img: "./assets/image/singkong.png", alt: "Singkong", label: "Singkong", jumlahAir: "4" },
    { value: "100g", img: "./assets/image/ubiUngu.png", alt: "Ubi Ungu", label: "Ubi Ungu", jumlahAir: "4" },
    { value: "200g", img: "./assets/image/sayurSayuran.png", alt: "Sayuran", label: "Sayuran", jumlahAir: "3" },
    { value: "150g", img: "./assets/image/buahBuahan.png", alt: "Buah-Buahan", label: "Buah-Buahan", jumlahAir: "7" },
  ];

  const container = document.getElementById("perbandinganGrid");

  dataPerbandingan.forEach(item => {
    container.innerHTML += `
      <div class="bg-primary-light flex justify-between items-center shadow-lg hover:-translate-y-2 hover:bg-primary transition-all duration-300 rounded-lg p-6">
        <div class="relative flex flex-col items-center">
          <div class="px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]">${item.value}</div>
          <img src="${item.img}" alt="${item.alt}" class="w-40 h-40 rounded-xl p-2 bg-white">
          <div class="px-6 py-1 rounded-full text-white text-sm bg-[#147700] absolute left-0 bottom-[-10px]">${item.label}</div>
        </div>
        <div class="text-5xl font-bold text-[#147700]">=</div>
        <div class="relative flex flex-col items-center">
          <div class="px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]">${item.jumlahAir}</div>
          <img src="./assets/image/galonair.png" alt="Air galon" class="w-40 h-40 rounded-xl p-2 bg-white">
          <div class="px-6 py-1 rounded-full text-white text-sm bg-[#147700] absolute left-0 bottom-[-10px]">Air Galon</div>
        </div>
      </div>
    `;
  });



// Tombol scroll kanan/kiri pada section berita
    const scrollContainer = document.getElementById("scrollContainer");
    const scrollLeft = document.getElementById("scrollLeft");
    const scrollRight = document.getElementById("scrollRight");

    scrollLeft.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: -320, behavior: "smooth" });
    });

    scrollRight.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: 320, behavior: "smooth" });
    });
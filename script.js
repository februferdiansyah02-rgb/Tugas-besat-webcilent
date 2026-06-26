
const menuData = [
    { nama: "Nasi Putih", kategori: "Makanan Pokok", kalori: 180, harga: 5000, gambar: "WhatsApp Image 2026-06-26 at 13.43.59.jpeg" },
    { nama: "Nasi Goreng Spesial", kategori: "Makanan Pokok", kalori: 450, harga: 18000, gambar: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=120&h=90&fit=crop" },
    { nama: "Mie Goreng Jawa", kategori: "Makanan Pokok", kalori: 380, harga: 16000, gambar: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=120&h=90&fit=crop" },
    { nama: "Spaghetti Aglio Olio", kategori: "Makanan Pokok", kalori: 420, harga: 28000, gambar: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=120&h=90&fit=crop" },
    { nama: "Kentang Panggang", kategori: "Makanan Pokok", kalori: 220, harga: 15000, gambar: "WhatsApp Image 2026-06-26 at 13.41.02.jpeg" },
    { nama: "Roti Gandum (2 lembar)", kategori: "Makanan Pokok", kalori: 160, harga: 8000, gambar: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=120&h=90&fit=crop" },
    { nama: "Ayam Goreng Tepung", kategori: "Lauk-Pauk", kalori: 300, harga: 17000, gambar: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=120&h=90&fit=crop" },
    { nama: "Ayam Bakar Madu", kategori: "Lauk-Pauk", kalori: 280, harga: 20000, gambar: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=120&h=90&fit=crop" },
    { nama: "Rendang Daging Sapi", kategori: "Lauk-Pauk", kalori: 380, harga: 32000, gambar: "WhatsApp Image 2026-06-26 at 13.41.30.jpeg" },
    { nama: "Tempe Orek", kategori: "Lauk-Pauk", kalori: 150, harga: 8000, gambar: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=120&h=90&fit=crop" },
    { nama: "Tahu Goreng", kategori: "Lauk-Pauk", kalori: 120, harga: 6000, gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=120&h=90&fit=crop" },
    { nama: "Ikan Nila Bakar", kategori: "Lauk-Pauk", kalori: 250, harga: 22000, gambar: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=120&h=90&fit=crop" },
    { nama: "Telur Dadar", kategori: "Lauk-Pauk", kalori: 190, harga: 7000, gambar: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=120&h=90&fit=crop" },
    { nama: "Beef Steak Sirloin", kategori: "Lauk-Pauk", kalori: 420, harga: 45000, gambar: "https://images.unsplash.com/photo-1544025162-d76694265947?w=120&h=90&fit=crop" },
    { nama: "Tumis Kangkung", kategori: "Sayur", kalori: 90, harga: 9000, gambar: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=120&h=90&fit=crop" },
    { nama: "Sayur Asem", kategori: "Sayur", kalori: 70, harga: 8000, gambar: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=120&h=90&fit=crop" },
    { nama: "Capcay Kuah", kategori: "Sayur", kalori: 110, harga: 13000, gambar: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=120&h=90&fit=crop" },
    { nama: "Salad Sayur Segar", kategori: "Sayur", kalori: 80, harga: 14000, gambar: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=120&h=90&fit=crop" },
    { nama: "Gado-Gado", kategori: "Sayur", kalori: 280, harga: 16000, gambar: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=120&h=90&fit=crop" },
    { nama: "Pisang (1 buah)", kategori: "Buah", kalori: 105, harga: 5000, gambar: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=120&h=90&fit=crop" },
    { nama: "Apel Fuji (1 buah)", kategori: "Buah", kalori: 95, harga: 7000, gambar: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=120&h=90&fit=crop" },
    { nama: "Semangka (1 potong)", kategori: "Buah", kalori: 60, harga: 6000, gambar: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=120&h=90&fit=crop" },
    { nama: "Fruit Salad Cup", kategori: "Buah", kalori: 140, harga: 17000, gambar: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=120&h=90&fit=crop" },
    { nama: "Es Teh Manis", kategori: "Minuman", kalori: 90, harga: 5000, gambar: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=120&h=90&fit=crop" },
    { nama: "Air Mineral 600ml", kategori: "Minuman", kalori: 0, harga: 4000, gambar: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=120&h=90&fit=crop" },
    { nama: "Jus Alpukat", kategori: "Minuman", kalori: 230, harga: 18000, gambar: "pexels-shameel-mukkath-3421394-11009209.jpg" }
];


const menuBody = document.getElementById('menuBody');

menuData.forEach((item, index) => {
    const tr = document.createElement('tr');
    
    tr.innerHTML = `
        <td><img src="${item.gambar}" alt="${item.nama}" loading="lazy"></td>
        <td>${item.nama}</td>
        <td>${item.kategori}</td>
        <td>${item.kalori} kkal</td>
        <td>Rp ${item.harga.toLocaleString('id-ID')}</td>
        <td><input type="checkbox" data-index="${index}"></td>
    `;
    
    menuBody.appendChild(tr);
});


const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const emptyState = document.getElementById('emptyState');
const resultContent = document.getElementById('resultContent');
const imageStack = document.getElementById('imageStack');
const totalKaloriEl = document.getElementById('totalKalori');
const totalHargaEl = document.getElementById('totalHarga');
const badge = document.getElementById('badge');

const checklistMap = {
    'Makanan Pokok': 'cat-pokok',
    'Lauk-Pauk': 'cat-lauk',
    'Sayur': 'cat-sayur',
    'Buah': 'cat-buah',
    'Minuman': 'cat-minuman'
};


checkboxes.forEach(cb => {
    cb.addEventListener('change', updateResult);
});

function updateResult() {
    const selected = [];
    
    checkboxes.forEach(cb => {
        if (cb.checked) {
            selected.push(menuData[cb.dataset.index]);
        }
    });
    
  
    if (selected.length === 0) {
        emptyState.style.display = 'block';
        resultContent.style.display = 'none';
        return;
    }
    
    emptyState.style.display = 'none';
    resultContent.style.display = 'block';
    

    imageStack.innerHTML = '';
    selected.forEach(item => {
        const img = document.createElement('img');
        img.src = item.gambar;
        img.alt = item.nama;
        imageStack.appendChild(img);
    });
    
   
    const totalKalori = selected.reduce((sum, item) => sum + item.kalori, 0);
    const totalHarga = selected.reduce((sum, item) => sum + item.harga, 0);
    
    totalKaloriEl.textContent = `${totalKalori} kkal`;
    totalHargaEl.textContent = `Rp ${totalHarga.toLocaleString('id-ID')}`;
    
    
    const categories = new Set(selected.map(item => item.kategori));
    
    for (const [catName, elId] of Object.entries(checklistMap)) {
        const li = document.getElementById(elId);
        if (categories.has(catName)) {
            li.textContent = `✅ ${catName}`;
            li.classList.add('done');
        } else {
            li.textContent = `❌ ${catName}`;
            li.classList.remove('done');
        }
    }
    
   
    if (categories.size === 5) {
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}
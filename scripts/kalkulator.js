        // Logika kalkulator jejak air

        let selectedFoods = {};
        document.addEventListener('DOMContentLoaded', function() {

            document.querySelectorAll('.quantity-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const foodItem = this.closest('.food-item');
                    const foodType = foodItem.dataset.food;
                    const quantitySpan = foodItem.querySelector('.quantity');
                    const isPlus = this.classList.contains('plus');
                    
                    let currentQuantity = parseInt(quantitySpan.textContent);
                    
                    if (isPlus) {
                        currentQuantity++;
                    } else if (currentQuantity > 0) {
                        currentQuantity--;
                    }
                    
                    quantitySpan.textContent = currentQuantity;
                    
                    if (currentQuantity > 0) {
                        selectedFoods[foodType] = {
                            quantity: currentQuantity,
                            waterPerUnit: parseInt(foodItem.dataset.water),
                            unit: foodItem.dataset.unit,
                            name: foodItem.querySelector('h3').textContent
                        };
                        foodItem.classList.add('border-primary', 'bg-primary-light');
                    } else {
                        delete selectedFoods[foodType];
                        foodItem.classList.remove('border-primary', 'bg-primary-light');
                    }
                });
            });

            document.getElementById('calculateBtn').addEventListener('click', function() {
                calculateWaterFootprint();
            });

            document.getElementById('closeModal').addEventListener('click', closeModal);
            document.getElementById('resultModal').addEventListener('click', function(e) {
                if (e.target === this) {
                    closeModal();
                }
            });
        });

        // Alert dan PopUp Hasil kalkulasi
        function calculateWaterFootprint() {
            if (Object.keys(selectedFoods).length === 0) {
                alert('Pilih minimal satu makanan untuk dihitung!');
                return;
            }

            let totalWater = 0;
            let resultHTML = '<div class="space-y-2 text-left">';

            Object.values(selectedFoods).forEach(food => {
                const waterUsed = food.quantity * food.waterPerUnit;
                totalWater += waterUsed;
                
                resultHTML += `
                    <div class="flex justify-between items-center py-1 border-b border-gray-100">
                        <span class="text-sm">${food.name} (${food.quantity} ${food.unit})</span>
                        <span class="text-sm font-semibold">${waterUsed.toLocaleString()} L</span>
                    </div>
                `;
            });

            resultHTML += '</div>';

            document.getElementById('resultContent').innerHTML = resultHTML;
            document.getElementById('totalWater').textContent = totalWater.toLocaleString();
            
            generateTips(totalWater, selectedFoods);
            
            document.getElementById('resultModal').classList.remove('hidden');
            document.getElementById('resultModal').classList.add('flex');
        }

function generateTips(totalWater, foods) {
    let tipsHTML = '';
    let waterLevel = '';
    let levelColor = '';
    let bgColor = '';

    if (totalWater < 50) {
        waterLevel = 'RENDAH';
        levelColor = 'text-green-600';
        bgColor = 'bg-green-100';
        tipsHTML = `
            <div class="mb-3">
                <span class="inline-block px-6 py-2 ${bgColor} ${levelColor} text-base font-semibold rounded-full mb-2">
                    <i class="fa-solid fa-droplet mr-2"></i> Jejak Air ${waterLevel}
                </span>
                <p class="text-sm text-gray-600">Pilihan makanan Anda sudah cukup ramah lingkungan! Teruskan pola makan yang baik ini.</p>
            </div>
            <div class="text-sm">
                <h4 class="font-semibold text-gray-700 mb-2">
                    <i class="fa-solid fa-lightbulb text-yellow-500 mr-2"></i>Tips untuk tetap hemat air:
                </h4>
                <ul class="space-y-1 text-gray-600">
                    <li><i class="fa-solid fa-leaf text-green-500 mr-2"></i>Pertahankan konsumsi sayuran dan buah-buahan</li>
                    <li><i class="fa-solid fa-seedling text-green-500 mr-2"></i>Pertahankan protein nabati seperti tahu dan tempe</li>
                    <li><i class="fa-solid fa-ban text-red-500 mr-2"></i>Hindari pemborosan makanan</li>
                </ul>
            </div>
        `;
    } else if (totalWater < 90) {
        waterLevel = 'SEDANG';
        levelColor = 'text-yellow-600';
        bgColor = 'bg-yellow-100';
        tipsHTML = `
            <div class="mb-3 text-center items-center align-center">
                <span class="inline-block px-6 py-2 ${bgColor} ${levelColor} text-base font-semibold rounded-full mb-2">
                    <i class="fa-solid fa-droplet mr-2"></i> Jejak Air ${waterLevel}
                </span>
                <p class="text-sm text-gray-600">Jejak air Anda cukup tinggi. Ada beberapa cara untuk menguranginya.</p>
            </div>
            <div class="text-sm">
                <h4 class="font-semibold text-gray-700 mb-2">
                    <i class="fa-solid fa-lightbulb text-yellow-500 mr-2"></i>Tips mengurangi jejak air:
                </h4>
                <ul class="space-y-1 text-gray-600">
                    <li><i class="fa-solid fa-drumstick-bite text-red-500 mr-2"></i>Kurangi makan daging berlebih, ganti dengan protein nabati</li>
                    <li><i class="fa-solid fa-carrot text-green-500 mr-2"></i>Tambahkan lebih banyak sayuran dalam menu harian</li>
                    <li><i class="fa-solid fa-utensils text-gray-500 mr-2"></i>Hindari pemborosan makanan dengan porsi yang tepat</li>
                </ul>
            </div>
        `;
    } else {
        waterLevel = 'TINGGI';
        levelColor = 'text-red-600';
        bgColor = 'bg-red-100';
        tipsHTML = `
            <div class="mb-3 text-center items-center align-center">
                <span class="inline-block px-6 py-2 ${bgColor} ${levelColor} text-base font-semibold rounded-full mb-2">
                    <i class="fa-solid fa-droplet mr-2"></i> Jejak Air ${waterLevel}
                </span>
                <p class="text-sm text-gray-600">Jejak air Anda sangat tinggi! Pertimbangkan untuk mengubah pola makan.</p>
            </div>
            <div class="text-sm">
                <h4 class="font-semibold text-gray-700 mb-2">
                    <i class="fa-solid fa-triangle-exclamation text-red-600 mr-2"></i>Tips penting mengurangi jejak air:
                </h4>
                <ul class="space-y-1 text-gray-600">
                    <li><i class="fa-solid fa-drumstick-bite text-red-500 mr-2"></i><strong>Kurangi daging sapi</strong> - ganti dengan protein nabati</li>
                    <li><i class="fa-solid fa-leaf text-green-500 mr-2"></i><strong>Perbanyak sayuran</strong> - minimal 50% dari piring Anda</li>
                    <li><i class="fa-solid fa-calendar-day text-blue-500 mr-2"></i><strong>Coba "Senin Absen daging"</strong> - satu hari tanpa daging per minggu</li>
                    <li><i class="fa-solid fa-globe text-green-600 mr-2"></i><strong>Pilih makanan lokal</strong> dan hindari makanan olahan berlebihan</li>
                    <li><i class="fa-solid fa-trash text-gray-600 mr-2"></i><strong>Jangan buang makanan</strong> - rencanakan menu dan porsi dengan baik</li>
                </ul>
            </div>
        `;
    }

    const highWaterFoods = Object.entries(foods).filter(([key, food]) => food.waterPerUnit > 80);
    if (highWaterFoods.length > 0) {
        tipsHTML += `
            <div class="mt-4 pt-3 border-t border-gray-200">
                <h4 class="font-semibold text-gray-700 mb-2 text-sm">
                    <i class="fa-solid fa-bacon text-red-500 mr-2"></i>Makanan dengan jejak air tinggi dalam pilihan Anda:
                </h4>
                <div class="space-y-1">
        `;
        
        highWaterFoods.forEach(([key, food]) => {
            let alternative = '';
            if (key === 'beef') alternative = 'ayam, tahu dan tempe';
            else if (key === 'lamb') alternative = 'protein nabati seperti tahu atau tempe';
            
            tipsHTML += `
                <div class="text-xs text-gray-600 bg-white p-2 rounded">
                    <strong>${food.name}</strong>: ${food.waterPerUnit.toLocaleString()}L per ${food.unit}
                    ${alternative ? `<br><span class="text-primary-dark"><i class="fa-solid fa-lightbulb text-yellow-500 mr-1"></i>Alternatif: ${alternative}</span>` : ''}
                </div>
            `;
        });
        
        tipsHTML += '</div></div>';
    }

    document.getElementById('tipsSection').innerHTML = tipsHTML;
}



        function closeModal() {
            document.getElementById('resultModal').classList.add('hidden');
            document.getElementById('resultModal').classList.remove('flex');
        }
const chatContainer = document.getElementById("chatContainer");
    const userInput = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");

    // Database sederhana
    const responses = {
    "halo": "Halo juga! 👋 Senang bisa ngobrol denganmu. Mau tahu tentang lingkungan atau sead?",
    "hai": "Hai 👋, apa kabar? Aku siap bantu jawab pertanyaan seputar lingkungan dan gaya hidup sehat.",
    "terima kasih": "Sama-sama 🌱 Semoga infonya bermanfaat!",

    "sead adalah": "Sead adalah gerakan global mengurangi konsumsi daging setiap hari Senin 🌱. Tujuannya menurunkan emisi karbon, hemat air, dan lebih sehat.",
    "senin tanpa daging": "Senin Tanpa Daging = Sead. Satu hari tanpa daging tiap minggu bisa mengurangi jejak karbon dan membuat tubuh lebih sehat 💚.",
    "tujuan sead": "Tujuannya mengurangi dampak lingkungan dari industri daging, sekaligus meningkatkan kesehatan masyarakat 🌍.",

    "lingkungan": "Mengurangi daging berarti mengurangi emisi gas rumah kaca, penggunaan lahan, dan konsumsi air. Semua ini membantu melindungi bumi 🌎.",
    "hemat air": "Produksi 1kg daging sapi butuh hingga 15.000 liter air 💧, sedangkan sayuran atau biji-bijian jauh lebih hemat air.",
    "emisi karbon": "Peternakan menyumbang sekitar 14.5% emisi gas rumah kaca global 🚨. Mengurangi daging bisa menekan angka itu.",
    "hutan": "Permintaan daging menyebabkan deforestasi untuk padang penggembalaan dan pakan ternak 🌳. Dengan kurangi daging, kita bantu selamatkan hutan.",

    "manfaat": "Mengurangi daging bermanfaat untuk kesehatan jantung, menurunkan risiko diabetes, menjaga berat badan ideal, dan meningkatkan energi ⚡.",
    "kesehatan": "Pola makan berbasis nabati kaya serat, vitamin, dan mineral. Baik untuk pencernaan, kolesterol, dan metabolisme 🥦.",
    "protein nabati": "Protein nabati bisa didapat dari tahu, tempe, kacang-kacangan, edamame, dan lentil. Sama bergizinya dengan protein hewani 💪.",

    "resep tanpa daging": "Ada banyak resep tanpa daging! Misalnya: tumis tempe kacang panjang, sate jamur tiram, sup kacang merah, dan nasi goreng sayur 🍲.",
    "resep mudah": "Coba nasi sate jamur 🌽, sup bayam 🥬, atau tempe goreng bumbu kecap. Mudah dibuat dan hemat biaya.",
    "resep indonesia": "Beberapa menu Indonesia tanpa daging: sayur lodeh, pecel sayur, gado-gado, sambal goreng tempe, capcay.",
    "resep internasional": "Menu internasional: pasta aglio olio dengan sayuran, falafel, hummus, vegetable curry, veggie burger 🍔.",

    "tips": "Tips: mulai perlahan. Misalnya kurangi daging sekali seminggu (sead). Ganti dengan sayur, tempe, atau kacang-kacangan 👍.",
    "motivasi": "Setiap langkah kecil penting 🌱. Satu hari tanpa daging = kontribusi nyata buat bumi & kesehatanmu.",
    "alternatif daging": "Alternatif daging bisa berupa jamur, tempe, tahu, kacang merah, atau produk nabati seperti veggie patty.",

    "default": "Aku belum punya jawaban untuk itu 🙏. Coba tanyakan tentang lingkungan, kesehatan, resep tanpa daging, atau sead 🌱."
    };



    function addMessage(message, sender = "bot") {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("flex", "items-start");

    if (sender === "user") {
        msgDiv.classList.add("justify-end");
        msgDiv.innerHTML = `
        <div class="bg-primary-dark text-white p-3 rounded-xl max-w-lg shadow">
            ${message} <i class="fa-solid fa-user mr-2"></i> 
        </div>
        `;
    } else {
        msgDiv.innerHTML = `
        <div class="bg-putih text-hitam text-sm md:text-base p-3 rounded-xl max-w-lg shadow">
            <i class="fa-solid fa-robot text-primary mr-2"></i> ${message}
        </div>
        `;
    }

        chatContainer.appendChild(msgDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }


    function botResponse(input) {
        input = input.toLowerCase();
        let response = responses[input] || responses["default"];
        addMessage(response, "bot");
    }


    sendBtn.addEventListener("click", () => {
        const input = userInput.value.trim();
        if (input) {
            addMessage(input, "user");
            botResponse(input);
            userInput.value = "";
        }
    });

    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendBtn.click();
    });
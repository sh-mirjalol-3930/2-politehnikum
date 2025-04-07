window.addEventListener("scroll" , function () {
    shrink();
  });
  let navbar = document.getElementById("navbar");
  function shrink() {
    if (scrollY > 100){
        navbar.classList.add("navbar-shrink");
    } else{
        navbar.classList.remove("navbar-shrink");
    }
  }





document.getElementById("AloqaMenuBar").addEventListener("click", function() {
  let menu = document.querySelector(".AloqaMenuBar");
  if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
      menu.style.opacity = "1";
      menu.style.transform = "translateY(0)";
  } 
  else {
      menu.style.opacity = "0";
      menu.style.transform = "translateY(-10px)";
      setTimeout(() => {
          menu.style.display = "none";
      }, 300);
  }
});



















const yangiliklarContainer = document.querySelector('.yangiliklar_card .container');
const yangilikQoshishBtn = document.querySelector('.yangilikQoshish');

// Cardlarni qo'shish funksiyasi
function cardQosh(title, description, imageSrc) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${imageSrc}" alt="Rasm">
        <div class="card-content">
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
    `;
    yangiliklarContainer.appendChild(card);
}

// Yangilik qo'shish tugmasi bosilganda
yangilikQoshishBtn.addEventListener('click', () => {
    const title = prompt("Yangilik mavzusi:");
    const description = prompt("Yangilik tavsifi:");
    const imageSrc = prompt("Rasm manzili (URL):");

    if (title && description && imageSrc) {
        cardQosh(title, description, imageSrc);
    } else {
        alert("Hamma maydonlarni to'ldiring!");
    }
});





document.querySelector(".yangilikQoshish").addEventListener("click", () => {
  const container = document.querySelector(".yangiliklar_card .container");
  
  // Yangi card yaratish
  const newCard = document.createElement("div");
  newCard.classList.add("news-card");
  newCard.innerHTML = `
      <div class="content">
          <h2>Yangi Yangilik Mavzusi</h2>
          <p>Bu yangilikning qisqacha tavsifi. Bu yerda matn kiritiladi.</p>
      </div>
      <img src="https://via.placeholder.com/350" alt="Yangilik Rasmi">
  `;
  container.appendChild(newCard);
});

// Qidiruv funksiyasi
document.querySelector(".search-box input").addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".news-card");

  cards.forEach(card => {
      const title = card.querySelector("h2").textContent.toLowerCase();
      card.style.display = title.includes(searchValue) ? "flex" : "none";
  });
});










// Qidiruv funksiyasi
const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("input", function(e) {
    const searchText = e.target.value.toLowerCase();
    const allElements = document.querySelectorAll('p, b, h1, h2, h3, h4, h5, h6'); // Barcha matnli elementlar

    allElements.forEach(element => {
        const content = element.textContent.toLowerCase();
        const parentCard = element.closest('.card, section, div p, b'); // Element joylashgan card yoki section

        if (parentCard) {
            if (content.includes(searchText)) {
                parentCard.style.display = "block";
                // Topilgan so'zni highlight qilish
                element.innerHTML = element.textContent.replace(
                    new RegExp(searchText, "gi"),
                    match => `<span style="background-color: #f1c40f; color: black">${match}</span>`
                );
            } else {
                if (!hasVisibleSibling(parentCard)) {
                    parentCard.style.display = "none";
                }
            }
        }
    });
});

// Yordamchi funksiya - ko'rinadigan qo'shni elementlarni tekshirish
function hasVisibleSibling(element) {
    const siblings = element.parentElement.children;
    for (let sibling of siblings) {
        if (sibling !== element && sibling.style.display !== "none") {
            return true;
        }
    }
    return false;
}

// Qidiruv maydonini tozalash uchun
searchInput.addEventListener("blur", function() {
    if (this.value === "") {
        const allElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
        allElements.forEach(element => {
            const parentCard = element.closest('.card, section, div');
            if (parentCard) {
                parentCard.style.display = "block";
            }
            // Highlight ni olib tashlash
            element.innerHTML = element.textContent;
        });
    }
});


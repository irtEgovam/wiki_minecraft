const music = new Audio("music/game-minecraft-gaming-background-music-402451.mp3");
music.loop = true; 
music.play();

const btn = document.getElementById("music-btn");
let isPlaying = true;

btn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    btn.textContent = "🔇";
  } else {
    music.play();
    btn.textContent = "🎵";
  }
  isPlaying = !isPlaying;
});
let data = JSON.parse(localStorage.getItem('minecraftData')) || {
    "Предмети": [
        { title: "Незеритовий Меч", desc: "Меч із Незериту", img: "https://minecraft-max.net/upload/iblock/53a/j5802gmx2ilbl2lbpcl5cn814u3qb0d0.png" },
        { title: "Незеритовий Злиток", desc: "Накладається на алмазні предмети", img: "https://minecraft-max.net/upload/iblock/e4c/aovgcda3v5vyep6vygxx4cb9mojqvoht.png" },
        { title: "Золоте яблуко", desc: "Їжа з ефектами", img: "https://minecraft-max.net/upload/iblock/1db/1db7c8bd8c072c2d27a52df3bd5b1919.png" }
    ],
    "Блоки": [
        { title: "Блок Меду", desc: "Блок меду від бджіл, уповільнює", img: "data:image/jpeg;base64,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" },
        { title: "Динаміт (TNT)", desc: "Може вибухати", img: "data:image/jpeg;base64,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" },
        { title: "Глазурована кераміка", desc: "Декоративний блок", img: "data:image/png;base64,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" }
    ],
    "Музика": [
        { title: "Moog City 2", desc: "C418 — музика меню", },
        { title: "Pigstep", desc: "Lena Raine — пластинка", }
    ]
};

// Сохранение данных в localStorage
function saveData() {
    localStorage.setItem('minecraftData', JSON.stringify(data));
}

const menuEl = document.getElementById('menu');
const contentEl = document.getElementById('content');
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const addModal = document.getElementById('addModal');
const removeModal = document.getElementById('removeModal');
const addForm = document.getElementById('addForm');
const removeItemsList = document.getElementById('removeItemsList');
const closeButtons = document.querySelectorAll('.close');

const categories = Object.keys(data);
const buttons = [];

// Инициализация
function init() {
    categories.forEach((cat, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'menu-button';
        btn.textContent = cat;

        btn.addEventListener('click', () => {
            setActiveButton(btn);
            renderCategory(cat);
        });
        menuEl.appendChild(btn);
        buttons.push(btn);
    });

    if(buttons.length){
        setActiveButton(buttons[0]);
        renderCategory(categories[0]);
    }
}

function setActiveButton(activeBtn){
    buttons.forEach(b => {
        if(b === activeBtn){
            b.classList.add('active');
            b.setAttribute('aria-current','true');
        } else {
            b.classList.remove('active');
            b.removeAttribute('aria-current');
        }
    });
}

function renderCategory(category){
    while(contentEl.firstChild) contentEl.removeChild(contentEl.firstChild);

    const items = data[category] || [];
    items.forEach((it, i) => {
        const card = document.createElement('article');
        card.className = 'card';
        card.dataset.category = category;
        card.dataset.index = i;

        card.style.animationDelay = (i * 0.08) + 's';

        const h2 = document.createElement('h2');
        h2.textContent = it.title;

        const p = document.createElement('p');
        p.className = 'desc';
        p.textContent = it.desc;

        card.appendChild(h2);
        card.appendChild(p);

        if(it.img){
            const img = document.createElement('img');
            img.src = it.img;
            img.alt = it.title;

            img.onerror = () => { img.style.display = 'none'; };
            card.appendChild(img);
        }

        contentEl.appendChild(card);
    });

    if(items.length === 0){
        const note = document.createElement('p');
        note.textContent = 'Пока тут нет контента.';
        note.style.opacity = '0.8';
        contentEl.appendChild(note);
    }
}

// Обработчики модальных окон
addButton.addEventListener('click', () => {
    addModal.style.display = 'block';
});

removeButton.addEventListener('click', () => {
    removeModal.style.display = 'block';
    populateRemoveList();
});

closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        addModal.style.display = 'none';
        removeModal.style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target == addModal) {
        addModal.style.display = 'none';
    }
    if (e.target == removeModal) {
        removeModal.style.display = 'none';
    }
});

// Обработчик формы добавления
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const category = document.getElementById('category').value;
    const title = document.getElementById('title').value;
    const desc = document.getElementById('desc').value;
    const img = document.getElementById('img').value;
    
    if (!data[category]) {
        data[category] = [];
    }
    
    data[category].push({ title, desc, img });
    saveData();
    
    // Обновляем отображение, если текущая категория совпадает
    const activeCategory = document.querySelector('.menu-button.active').textContent;
    if (activeCategory === category) {
        renderCategory(category);
    }
    
    addForm.reset();
    addModal.style.display = 'none';
    
    alert('Елемент успішно додано!');
});

// Заполнение списка для удаления
function populateRemoveList() {
    removeItemsList.innerHTML = '';
    
    for (const category in data) {
        data[category].forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'remove-item';
            
            const text = document.createElement('span');
            text.textContent = `${category}: ${item.title}`;
            
            const button = document.createElement('button');
            button.className = 'remove-btn';
            button.textContent = 'Видалити';
            button.addEventListener('click', () => {
                removeItem(category, index);
            });
            
            div.appendChild(text);
            div.appendChild(button);
            removeItemsList.appendChild(div);
        });
    }
}

// Удаление элемента
function removeItem(category, index) {
    if (confirm('Ви впевнені, що хочете видалити цей елемент?')) {
        data[category].splice(index, 1);
        saveData();
        
        // Обновляем отображение, если текущая категория совпадает
        const activeCategory = document.querySelector('.menu-button.active').textContent;
        if (activeCategory === category) {
            renderCategory(category);
        }
        
        populateRemoveList();
        alert('Елемент успішно видалено!');
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', init);

// Configuration
const CONFIG = {
    itemsPerPage: 15,
};

// State
let state = {
    originalData: [], // Keeps the original order (sorted by ID)
    displayData: [], // The data currently being displayed (could be shuffled or sorted)
    currentPage: 1,
    mode: 'random' // 'random' or 'all'
};

// DOM Elements
const elements = {
    grid: document.querySelector('.grid'),
    paginationContainer: document.getElementById('pagination-container'),
    header: document.querySelector('header'),
};

// Fisher-Yates Shuffle
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Initialize
function initApp() {
    if (typeof colorsData === 'undefined') {
        console.error("Data not loaded!");
        return;
    }
    
    // Store original copy
    state.originalData = [...colorsData]; // Assuming data is already sorted by ID in CSV/JS
    
    // Setup Filter UI
    setupControls();

    // Initial state: Random
    setMode('random');
}

function setupControls() {
    // Add a control container to header
    let controlContainer = document.getElementById('colors-controls');
    if (!controlContainer) {
        controlContainer = document.createElement('div');
        controlContainer.id = 'colors-controls';
        controlContainer.style.marginTop = '1.5rem';
        controlContainer.style.display = 'flex';
        controlContainer.style.justifyContent = 'center';
        controlContainer.style.gap = '1rem';
        elements.header.appendChild(controlContainer);
    }

    // Mode Selector
    const select = document.createElement('select');
    select.className = 'style-filter'; // Reuse style from main.css
    select.style.minWidth = '200px';
    
    select.innerHTML = `
        <option value="random">🎲 隨機推薦 (Random 15)</option>
        <option value="all">📋 全部瀏覽 (View All)</option>
    `;

    select.addEventListener('change', (e) => {
        setMode(e.target.value);
    });

    controlContainer.appendChild(select);
    
    // Add "Shuffle" button if in random mode? 
    // Maybe just switching modes is enough, or re-selecting random triggers shuffle.
}

function setMode(mode) {
    state.mode = mode;
    state.currentPage = 1;

    if (mode === 'random') {
        // Shuffle and take full dataset (pagination still applies)
        // OR user meant "Show ONLY 15 random items"? 
        // "我想要重整就出隨機的出現15種" -> Sounds like just 15 items total.
        // But then "要有地方可以選擇查看全部資料".
        // Let's implement Random Mode as: Shuffle all data, enabling user to browse all in random order?
        // OR Limit to 15? "出現15種" usually means show 15 items.
        // Let's limit the Random mode to 1 page of 15 items for simplicity and "recommendation" feel.
        
        const shuffled = shuffleArray(state.originalData);
        state.displayData = shuffled.slice(0, 15); // Just 15 items
        
    } else {
        // 'all' mode: Show original data sorted by ID
        // Ensure sorting by ID just in case
        state.displayData = [...state.originalData].sort((a, b) => Number(a.id) - Number(b.id));
    }

    renderPage(1);
}

function createCardHTML(item) {
    return `
        <div class="card">
            <div class="index-badge">${item.id}</div>
            <div class="card-header">
                <h2 class="card-title">${item.title}</h2>
                <div class="keywords">關鍵字: ${item.keywords}</div>
            </div>
            <div class="colors-container">
                ${createColorRow('主要顏色 (Primary)', item.colors.primary)}
                ${createColorRow('次要顏色 (Secondary)', item.colors.secondary)}
                ${createColorRow('行動呼籲 (CTA)', item.colors.cta)}
                ${createColorRow('背景顏色 (Background)', item.colors.background)}
                ${createColorRow('文字顏色 (Text)', item.colors.text)}
                ${createColorRow('邊框顏色 (Border)', item.colors.border)}
            </div>
            <div class="notes">
                <span class="notes-label">設計備註:</span>${item.notes}
            </div>
        </div>
    `;
}

function createColorRow(label, hex) {
    if (!hex) return '';
    return `
        <div class="color-row">
            <div class="swatch" style="background-color: ${hex};"></div>
            <div class="color-info">
                <span class="color-name">${label}</span>
                ${hex}
            </div>
        </div>
    `;
}

function renderPage(page) {
    state.currentPage = page;
    
    // Pagination logic
    const start = (page - 1) * CONFIG.itemsPerPage;
    const end = start + CONFIG.itemsPerPage;
    const pageItems = state.displayData.slice(start, end);
    
    const grid = document.querySelector('.grid');
    if(!grid) return;
    
    grid.innerHTML = '';
    
    pageItems.forEach(item => {
        grid.insertAdjacentHTML('beforeend', createCardHTML(item));
    });
    
    updatePaginationUI();
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupPagination() {
    let container = document.getElementById('pagination-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'pagination-container';
        container.className = 'pagination';
        const grid = document.querySelector('.grid');
        grid.parentNode.insertBefore(container, grid.nextSibling);
    }
}

function updatePaginationUI() {
    const container = document.getElementById('pagination-container');
    if (!container) return;
    
    const totalPages = Math.ceil(state.displayData.length / CONFIG.itemsPerPage);
    
    // If only 1 page (like in Random 15 mode), maybe hide pagination or just show info?
    // User requested "分頁" (Pagination) generally.
    
    let html = '';
    
    // Only show Nav buttons if > 1 page
    if (totalPages > 1) {
        if (state.currentPage > 1) {
            html += `<button onclick="renderPage(${state.currentPage - 1})" class="page-btn">上一頁</button>`;
        } else {
            html += `<button disabled class="page-btn disabled">上一頁</button>`;
        }
    }
    
    // Info
    const modeText = state.mode === 'random' ? '隨機推薦 (15筆)' : '全部資料 (依編號)';
    html += `<span class="page-info">${modeText} - 第 ${state.currentPage} 頁 / 共 ${totalPages} 頁</span>`;
    
    if (totalPages > 1) {
        if (state.currentPage < totalPages) {
            html += `<button onclick="renderPage(${state.currentPage + 1})" class="page-btn">下一頁</button>`;
        } else {
            html += `<button disabled class="page-btn disabled">下一頁</button>`;
        }
    }
    
    container.innerHTML = html;
}

window.renderPage = renderPage;

document.addEventListener('DOMContentLoaded', initApp);

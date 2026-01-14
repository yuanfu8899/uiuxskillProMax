
// Configuration
const CONFIG = {
    itemsPerPage: 12, // Show 12 cards per page
    lazyLoadRootMargin: '200px', // Start loading slightly before viewport
};

// State
let state = {
    data: [], // Full dataset
    filteredData: [], // Currently filtered dataset
    currentPage: 1,
    currentFilter: 'all'
};

// DOM Elements
const elements = {
    grid: document.querySelector('.grid'),
    filterContainer: document.getElementById('filter-container'),
    paginationContainer: document.getElementById('pagination-container'), // We will add this to HTML
    countDisplay: document.getElementById('count-display') // Optional: show total results
};

// Initialize
function initApp() {
    if (typeof stylesData === 'undefined') {
        console.error("Data not loaded!");
        return;
    }
    
    state.data = stylesData;
    state.filteredData = [...stylesData];
    
    setupFilter();
    renderPage(1);
    setupPagination();
}

// ---------------------------------------------------------
// Rendering Logic
// ---------------------------------------------------------

function createCardHTML(item) {
    // Determine preview HTML (Lazy loaded iframe)
    // We use a data-src attribute for the IntersectionObserver to swap later
    let previewHTML = '';
    if (item.preview_url) {
        previewHTML = `
            <div class="preview-container">
                <iframe class="lazy-iframe" data-src="${item.preview_url}" title="${item.category} Preview"></iframe>
            </div>
            <div style="text-align: right;">
                <a href="${item.preview_url}" target="_blank" class="fullscreen-link">在新視窗開啟範例 ↗</a>
            </div>
        `;
    }

    return `
        <div class="card">
            <div class="card-header">
                <span class="style-type">${item.type}</span>
                <h2 class="card-title">
                    ${item.category}
                    <span class="zh-title">${item.category_zh}</span>
                </h2>
                <div class="keywords">${item.keywords}</div>
            </div>

            ${previewHTML}

            <div>
                <div class="section-title">視覺特徵 (Visual Characteristics)</div>
                <div class="content-block">
                    <strong>主要顏色:</strong> ${item.visual.primary}<br>
                    <strong>次要顏色:</strong> ${item.visual.secondary}<br>
                    <strong>特效與動畫:</strong> ${item.visual.effects}
                </div>
            </div>

            <div class="metrics-grid">
                <div class="metric">
                    <span class="metric-label">效能 (Performance)</span>
                    <span class="metric-value">${item.metrics.performance}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">無障礙 (Accessibility)</span>
                    <span class="metric-value">${item.metrics.accessibility}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">深色模式 (Dark Mode)</span>
                    <span class="metric-value">${item.metrics.darkMode}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">複雜度 (Complexity)</span>
                    <span class="metric-value">${item.metrics.complexity}</span>
                </div>
            </div>

            <div class="usage-section">
                <div class="usage-block">
                    <h4 class="good-use">✓ 適用於 (Best For)</h4>
                    <div class="usage-text">${item.usage.bestFor}</div>
                </div>
                <div class="usage-block">
                    <h4 class="bad-use">✗ 不適用於 (Do Not Use For)</h4>
                    <div class="usage-text">${item.usage.avoid}</div>
                </div>
            </div>

            <div style="margin-top: 1.5rem; font-size: 0.85rem; color: #94a3b8;">
                <strong>框架相容性:</strong> ${item.meta.frameworks} <br>
                <strong>年代/起源:</strong> ${item.meta.era}
            </div>
        </div>
    `;
}

function renderPage(page) {
    state.currentPage = page;
    
    // Calculate slice
    const start = (page - 1) * CONFIG.itemsPerPage;
    const end = start + CONFIG.itemsPerPage;
    const pageItems = state.filteredData.slice(start, end);
    
    // Clear grid
    const grid = document.querySelector('.grid');
    if(!grid) return;
    
    grid.innerHTML = '';
    
    if (pageItems.length === 0) {
        grid.innerHTML = '<p style="text-align:center; width:100%; color:#64748b;">沒有找到符合條件的風格。</p>';
        updatePaginationUI();
        return;
    }

    // Append items
    pageItems.forEach(item => {
        grid.insertAdjacentHTML('beforeend', createCardHTML(item));
    });

    // Initialize Lazy Loading for the new elements
    observeIframes();
    
    // Update Pager UI
    updatePaginationUI();
    
    // Scroll to top of the page for better UX when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------------------------------------------------------
// Filter Logic
// ---------------------------------------------------------

function setupFilter() {
    const filterContainer = document.getElementById('filter-container');
    if (!filterContainer) return;

    // Get unique categories and count them
    const categoryCounts = {};
    state.data.forEach(item => {
        if (item.type) {
            categoryCounts[item.type] = (categoryCounts[item.type] || 0) + 1;
        }
    });

    // Create UI
    const label = document.createElement('label');
    label.className = 'filter-label';
    label.textContent = '篩選分類: ';
    
    const select = document.createElement('select');
    select.className = 'style-filter';
    
    // Default
    const allOpt = document.createElement('option');
    allOpt.value = 'all';
    allOpt.textContent = `全部顯示 (${state.data.length})`;
    select.appendChild(allOpt);
    
    Object.keys(categoryCounts).sort().forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = `${cat} (${categoryCounts[cat]})`;
        select.appendChild(opt);
    });

    select.addEventListener('change', (e) => {
        const val = e.target.value;
        state.currentFilter = val;
        
        if (val === 'all') {
            state.filteredData = [...state.data];
        } else {
            state.filteredData = state.data.filter(item => item.type === val);
        }
        
        // Reset to page 1
        renderPage(1);
    });

    filterContainer.innerHTML = '';
    filterContainer.appendChild(label);
    filterContainer.appendChild(select);
}

// ---------------------------------------------------------
// Pagination Logic
// ---------------------------------------------------------

function setupPagination() {
    // Just ensure the container exists, rendering is done in updatePaginationUI
    let container = document.getElementById('pagination-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'pagination-container';
        container.className = 'pagination';
        // Insert after grid
        const grid = document.querySelector('.grid');
        grid.parentNode.insertBefore(container, grid.nextSibling);
    }
}

function updatePaginationUI() {
    const container = document.getElementById('pagination-container');
    if (!container) return;
    
    const totalPages = Math.ceil(state.filteredData.length / CONFIG.itemsPerPage);
    
    let html = '';
    
    // Prev Button
    if (state.currentPage > 1) {
        html += `<button onclick="renderPage(${state.currentPage - 1})" class="page-btn">上一頁</button>`;
    } else {
        html += `<button disabled class="page-btn disabled">上一頁</button>`;
    }
    
    // Page Info
    html += `<span class="page-info">第 ${state.currentPage} 頁 / 共 ${totalPages || 1} 頁</span>`;
    
    // Next Button
    if (state.currentPage < totalPages) {
        html += `<button onclick="renderPage(${state.currentPage + 1})" class="page-btn">下一頁</button>`;
    } else {
        html += `<button disabled class="page-btn disabled">下一頁</button>`;
    }
    
    container.innerHTML = html;
}

// Make renderPage global so buttons can call it
window.renderPage = renderPage;


// ---------------------------------------------------------
// Lazy Loading Logic
// ---------------------------------------------------------

function observeIframes() {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                const src = iframe.getAttribute('data-src');
                if (src) {
                    iframe.src = src;
                    iframe.removeAttribute('data-src');
                }
                obs.unobserve(iframe);
            }
        });
    }, { rootMargin: CONFIG.lazyLoadRootMargin });

    document.querySelectorAll('iframe.lazy-iframe').forEach(iframe => {
        observer.observe(iframe);
    });
}


// Start
document.addEventListener('DOMContentLoaded', initApp);

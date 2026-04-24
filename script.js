document.addEventListener('DOMContentLoaded', () => {
    // --- 資料區 ---
    // 請將 'image' 的值更新為您實際的圖片檔案名稱
    const ml5Stars = [
    {name: "年輕的女王夏綠蒂", image: "年輕的女王夏綠蒂.png", pinyin: "nqxhld"},
    {name: "繼承人太悟", image: "繼承人太悟.webp", pinyin: "jcrtaiwu"},
    {name: "獅心王潔若米亞", image: "獅心王潔若米亞.webp", pinyin: "sxwjlmy"},
    {name: "審判者綺世", image: "審判者綺世.webp", pinyin: "spqs"},
    {name: "伯里安", image: "伯里安.webp", pinyin: "blan"},
    {name: "寶劍君主伊賽麗亞", image: "寶劍君主伊賽麗亞.webp", pinyin: "bjjzysely"},
    {name: "諾托斯", image: "諾托斯.webp", pinyin: "nts"},
    {name: "龍之伴侶賽娜", image: "龍之伴侶賽娜.webp", pinyin: "lzblsn"},
    {name: "海軍上校蘭蒂", image: "海軍上校蘭蒂.webp", pinyin: "hjsxld"},
    {name: "起源拉斯", image: "起源拉斯.webp", pinyin: "qyls"},
    {name: "組長亞露嘉", image: "組長亞露嘉.webp", pinyin: "zzyrj"},
    {name: "最後的騎士克勞烏", image: "最後的騎士克勞烏.webp", pinyin: "zhdqsclw"},
    {name: "蒼穹伊莉娜芙", image: "蒼穹伊莉娜芙.webp", pinyin: "cqylnf"},
    {name: "野心份子泰溫", image: "野心份子泰溫.webp", pinyin: "yxfztw"},
    {name: "扭曲的亡靈凱隆", image: "扭曲的亡靈凱隆.webp", pinyin: "nqdwnkl"},
    {name: "靈眼的瑟琳", image: "靈眼的瑟琳.webp", pinyin: "lydsl"},
    {name: "實驗體賽茲", image: "實驗體賽茲.webp", pinyin: "sytss"},
    {name: "星辰的神諭艾蕾娜", image: "星辰的神諭艾蕾娜.webp", pinyin: "xcdsyalna"},
    {name: "司令官帕貝爾", image: "司令官帕貝爾.webp", pinyin: "slgpbe"},
    {name: "無神論者麗迪卡", image: "無神論者麗迪卡.webp", pinyin: "wslzldk"},
    {name: "白銀刀刃的雅拉敏塔", image: "白銀刀刃的雅拉敏塔.webp", pinyin: "byrdylmt"},
    {name: "湖畔魔女泰妮布里雅", image: "湖畔魔女泰妮布里雅.webp", pinyin: "hpmntnblly"},
    {name: "賢者巴爾&塞尚", image: "賢者巴爾&塞尚.webp", pinyin: "xzberss"},
    {name: "新月露娜", image: "新月露娜.webp", pinyin: "xyln"},
    {name: "雪國的蘇莉塔妮亞", image: "雪國的蘇莉塔妮亞.webp", pinyin: "xgdsltdny"},
    {name: "策劃者萊伊卡", image: "策劃者萊伊卡.webp", pinyin: "chzlyk"},
    {name: "森之賢者薇薇安", image: "森之賢者薇薇安.webp", pinyin: "szxzwva"},
    {name: "僕人克羅愛", image: "僕人克羅愛.webp", pinyin: "prkla"},
    {name: "天秤之主", image: "天秤之主.webp", pinyin: "tczz"},
    {name: "龍王莎倫", image: "龍王莎倫.webp", pinyin: "lwsalun"},
    {name: "光之瑞兒", image: "光之瑞兒.webp", pinyin: "gzre"},
    {name: "沙漠寶石巴薩爾", image: "沙漠寶石巴薩爾.webp", pinyin: "smbsbse"},
    {name: "旁觀者和英", image: "旁觀者和英.webp", pinyin: "pgzhy"},
    {name: "末日蘿菲", image: "末日蘿菲.webp", pinyin: "mrlf"},
    {name: "風紀委員艾莉雅", image: "風紀委員艾莉雅.webp", pinyin: "fjwyaly"},
    {name: "都市暗影小泡芙", image: "都市暗影小泡芙.webp", pinyin: "dsayxpf"},
    {name: "孤狼沛伊拉", image: "孤狼沛伊拉.webp", pinyin: "glpyl"},
    {name: "黑暗的科爾布思", image: "黑暗的科爾布思.webp", pinyin: "hadeklbs"},
    {name: "協調者卡威利", image: "協調者卡威利.webp", pinyin: "xtzkwl"},
    {name: "史瑞杰思", image: "史瑞杰思.webp", pinyin: "srjs"},
    {name: "設計師莉莉貝", image: "設計師莉莉貝.webp", pinyin: "sjsllb"},
    {name: "一輪孤月維爾蘿娜", image: "一輪孤月維爾蘿娜.webp", pinyin: "ylgywlln"},
    {name: "武門家肯恩", image: "武門家肯恩.webp", pinyin: "wmjke"},
    {name: "墮落的賽西莉亞", image: "墮落的賽西莉亞.webp", pinyin: "dlssly"},
    {name: "深淵優芬妮", image: "深淵優芬妮.webp", pinyin: "syyfn"},
    {name: "保健室老師律荷", image: "保健室老師律荷.webp", pinyin: "bjslslh"},
    {name: "末日指揮官查爾斯", image: "末日指揮官查爾斯.webp", pinyin: "mrzhgces"},
    {name: "執行官維德瑞", image: "執行官維德瑞.webp", pinyin: "zxgwdr"},
    {name: "殘影的菲奧雷托", image: "殘影的菲奧雷托.webp", pinyin: "cydfalto"},
    {name: "海盜船長芙蘭", image: "海盜船長芙蘭.webp", pinyin: "hdcjfl"},
    {name: "海上幽靈佛里蒂絲", image: "海上幽靈佛里蒂絲.webp", pinyin: "hsylfldis"},
    {name: "灰光森林的伊賽麗亞", image: "灰光森林的伊賽麗亞.webp", pinyin: "hgslsyly"},
    {name: "小惡魔路雅", image: "小惡魔路雅.webp", pinyin: "xemlya"},
    {name: "操作員賽珂蘭特", image: "操作員賽珂蘭特.webp", pinyin: "czyklnt"},
    {name: "魔神的暗影", image: "魔神的暗影.webp", pinyin: "msday"},
    {name: "赫爾賽蒂", image: "赫爾賽蒂.webp", pinyin: "hlsd"},
    {name: "黑暗牧者迪埃妮", image: "黑暗牧者迪埃妮.webp", pinyin: "hamzdani"},
    {name: "幻影的泰妮布里雅", image: "幻影的泰妮布里雅.webp", pinyin: "hydtnbly"},
    {name: "智武", image: "智武.webp", pinyin: "zw"},
    {name: "鎮魂的羅安納", image: "鎮魂的羅安納.webp", pinyin: "zhdlna"},
    {name: "最強模特兒璐璐卡", image: "最強模特兒璐璐卡.webp", pinyin: "zqmtelllk"},
    {name: "永劫漂流者魯特比", image: "永劫漂流者魯特比.webp", pinyin: "yjplzltb"},
    {name: "赤月的貴族海斯特", image: "赤月的貴族海斯特.webp", pinyin: "cygzhst"},
    {name: "死亡探究者雷伊", image: "死亡探究者雷伊.webp", pinyin: "swtjzly"}
        // ... 請繼續加入所有角色和對應的圖片檔名
        // 範例: { name: "角色中文名", image: "圖片檔名.png" }
    ];

    // --- DOM 元素獲取 ---
    const bingoCard = document.getElementById('bingo-card');
    const generateBtn = document.getElementById('generate-btn');
    const clearAllBtn = document.getElementById('clear-all-btn');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('generated-image');
    const closeBtn = document.querySelector('.close-btn');
    const characterList = document.getElementById('character-list');
    const lotteryRow = document.getElementById('lottery-row'); // 新增：樂透列
    const captureArea = document.getElementById('capture-area'); // 新增：截圖區域
    const selectedList = document.getElementById('selected-list');
    const selectedCountSpan = document.querySelector('#selected-characters-panel h2 span');

    // --- 狀態變數 ---
    const gridSize = 5;
    const totalCells = gridSize * gridSize;
    const cellCharacterMap = new Map(); // 使用 Map 來儲存 cell -> character 的關係
    const lotteryCellCharacterMap = new Map(); // 新增：儲存樂透 cell 的關係
    let activeInput = null; // 當前正在編輯的輸入框
    let dropdown; // 客製化下拉選單的 DOM 元素
    // --- 函式定義 ---


    // 獲取當前所有已選角色的集合
    const getBingoSelectedChars = () => new Set(Array.from(cellCharacterMap.values()).map(c => c.name));
    const getLotterySelectedChars = () => new Set(Array.from(lotteryCellCharacterMap.values()).map(c => c.name));

    // 更新左右列表的顯示
    function updateLists() {
        const bingoSelected = getBingoSelectedChars();
        const lotterySelected = getLotterySelectedChars();
        const allSelectedInUI = new Set([...bingoSelected, ...lotterySelected]);

        // 更新右側總列表
        characterList.innerHTML = '';
        ml5Stars.forEach(char => {
            // 只要在 Bingo 或樂透中被選過，就在右側灰掉
            const isSelected = allSelectedInUI.has(char.name);
            const li = document.createElement('li');
            li.innerHTML = `<img src="image/${char.image}" alt="${char.name}"><span>${char.name}</span>`;
            if (isSelected) { // 如果已被選，則添加 selected 樣式
                li.classList.add('selected');
            }
            characterList.appendChild(li);
        });

        // 更新左側已選列表
        selectedList.innerHTML = '';
        // 顯示 Bingo 已選
        Array.from(cellCharacterMap.values()).forEach(char => {
            const li = document.createElement('li');
            li.innerHTML = `<img src="image/${char.image}" alt="${char.name}"><span>${char.name}</span>`;
            li.classList.add('bingo-selected-item');
            selectedList.appendChild(li);
        });
        // 顯示樂透已選
        Array.from(lotteryCellCharacterMap.values()).forEach(char => {
            const li = document.createElement('li');
            li.innerHTML = `<img src="image/${char.image}" alt="${char.name}"><span>${char.name}</span>`;
            li.classList.add('lottery-selected-item'); // 區分賓果和樂透的已選列表項目
            selectedList.appendChild(li);
        });

        // 更新已選計數
        selectedCountSpan.textContent = `${cellCharacterMap.size} (Bingo) + ${lotteryCellCharacterMap.size} (Lottery)`;
    }

    // 填充並顯示客製化下拉選單
    function showDropdown(inputElement, filter = '') {
        const rect = inputElement.getBoundingClientRect();
        dropdown.style.left = `${rect.left}px`;
        dropdown.style.top = `${rect.bottom}px`;
        dropdown.style.width = `250px`; // 將下拉選單寬度固定為 250px
        dropdown.innerHTML = ''; // 清空舊選項

        const parentCell = inputElement.parentElement;
        const isBingoCell = parentCell.classList.contains('bingo-cell');

        // 根據格子類型，過濾掉同類型中已選的角色
        const currentlySelected = isBingoCell ? getBingoSelectedChars() : getLotterySelectedChars();

        const filteredChars = ml5Stars.filter(char =>
            !currentlySelected.has(char.name) &&
            (char.name.includes(filter) || (char.pinyin && char.pinyin.includes(filter.toLowerCase())))
        );

        filteredChars.forEach(char => {
            const item = document.createElement('div');
            item.classList.add('dropdown-item');
            item.innerHTML = `<img src="image/${char.image}" alt="${char.name}"><span>${char.name}</span>`; // 確保圖片路徑正確
            item.addEventListener('click', () => {
                if (isBingoCell) {
                    selectCharacterForCell(parentCell, char);
                } else {
                    selectCharacterForLotteryCell(parentCell, char);
                }
            });
            dropdown.appendChild(item);
        });

        dropdown.style.display = 'block';
    }

    // 隱藏下拉選單
    function hideDropdown() {
        if (dropdown) dropdown.style.display = 'none';
    }

    // 為賓果格子選擇角色
    function selectCharacterForCell(cell, char) {
        const input = cell.querySelector('input');
        const imageBg = cell.querySelector('.cell-image-bg');

        // 設置輸入框的值和背景圖片
        input.value = char.name;
        imageBg.style.backgroundImage = `url('image/${char.image}')`; // 確保圖片路徑正確
        imageBg.style.display = 'block'; // 顯示背景圖
        input.style.display = 'none'; // 隱藏輸入框
        input.placeholder = ''; // 清除 placeholder

        // 更新狀態
        cellCharacterMap.set(cell, char);
        updateLists();
        hideDropdown();
        activeInput = null; // 清除 activeInput
    }

    // 為樂透格子選擇角色
    function selectCharacterForLotteryCell(cell, char) {
        const input = cell.querySelector('input');
        const imageBg = cell.querySelector('.cell-image-bg');

        input.value = char.name; // 雖然隱藏，但仍保留值供內部邏輯使用
        imageBg.style.backgroundImage = `url('image/${char.image}')`;
        imageBg.style.display = 'block';
        input.style.display = 'none';
        input.placeholder = '';

        lotteryCellCharacterMap.set(cell, char);
        updateLists();
        hideDropdown();
        activeInput = null;
    }

    // 清除指定賓果格子的角色
    function clearCell(cell) {
        if (!cell || !cellCharacterMap.has(cell)) return;

        // 確保清除的是賓果盤的 Map

        const input = cell.querySelector('input');
        const imageBg = cell.querySelector('.cell-image-bg');

        cellCharacterMap.delete(cell);
        imageBg.style.backgroundImage = '';
        imageBg.style.display = 'none';
        input.value = '';
        input.placeholder = '點此選擇';
        input.style.display = 'block'; // 新增：清除後重新顯示輸入框

        updateLists();
    }

    // 清除指定樂透格子的角色
    function clearLotteryCell(cell) {
        if (!cell || !lotteryCellCharacterMap.has(cell)) return;

        const input = cell.querySelector('input');
        const imageBg = cell.querySelector('.cell-image-bg');

        lotteryCellCharacterMap.delete(cell);
        imageBg.style.backgroundImage = '';
        imageBg.style.display = 'none';
        input.value = '';
        input.placeholder = '點此選擇';
        input.style.display = 'block';
        updateLists();
    }
    // --- 初始化 ---

    // 1. 建立客製化下拉選單的 DOM
    dropdown = document.createElement('div');
    dropdown.classList.add('custom-dropdown');
    document.body.appendChild(dropdown);

    // 2. 建立賓果盤格子
    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('bingo-cell');

        // 中間的格子設為 Free
        if (i === 12) {
            cell.classList.add('free-cell');
            cell.textContent = 'FREE';
            bingoCard.appendChild(cell);
            continue; // 繼續下一個迴圈
        }

        const imageBg = document.createElement('div');
        imageBg.classList.add('cell-image-bg');
        imageBg.style.display = 'none'; // 預設隱藏背景圖
        cell.appendChild(imageBg);

        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('cell-input');
        input.placeholder = '點此搜尋...';
        cell.appendChild(input);

        // 處理點擊格子顯示輸入框
        cell.addEventListener('click', (e) => {
            // 如果點擊的格子已經有角色，則清除它
            if (cellCharacterMap.has(cell) && e.target !== input) { // 確保不是點擊輸入框本身
                clearCell(cell);
                hideDropdown();
                return;
            }

            // 如果點擊的是輸入框本身，則不處理格子的點擊事件
            if (e.target === input) return;

            // 隱藏所有其他輸入框和下拉選單
            document.querySelectorAll('.bingo-cell .cell-input').forEach(otherInput => {
                if (otherInput !== input) {
                    otherInput.style.display = 'none';
                    otherInput.parentElement.querySelector('.cell-image-bg').style.display = otherInput.value ? 'block' : 'none';
                }
            });
            hideDropdown();

            // 顯示當前格子的輸入框
            input.style.display = 'block';
            imageBg.style.display = 'none'; // 隱藏背景圖
            input.focus();
            activeInput = input;
            showDropdown(input, input.value);
        });

        // 輸入框的事件監聽
        input.addEventListener('focus', () => {
            activeInput = input;
            showDropdown(input, input.value);
        });
        input.addEventListener('input', () => showDropdown(input, input.value));
        input.addEventListener('keydown', (e) => {
            if ((e.key === 'Backspace' || e.key === 'Delete') && input.value !== '') {
                clearCell(cell); // 賓果格子清除
                e.preventDefault(); // 阻止預設的刪除行為，因為我們已經手動清空
                // 清空後重新顯示所有選項 (如果輸入框是可見的)
                if (input.style.display === 'block') {
                    showDropdown(input, '');
                }

            }
        });


        bingoCard.appendChild(cell);
    }

    // 3. 建立樂透圈圈
    for (let i = 0; i < 6; i++) {
        const cell = document.createElement('div');
        cell.classList.add('lottery-cell');

        const imageBg = document.createElement('div');
        imageBg.classList.add('cell-image-bg');
        imageBg.style.display = 'none';
        cell.appendChild(imageBg);

        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('cell-input');
        input.placeholder = '點此選擇';
        cell.appendChild(input);

        cell.addEventListener('click', (e) => {
            if (lotteryCellCharacterMap.has(cell) && e.target !== input) {
                clearLotteryCell(cell);
                return;
            }

            // 隱藏可能已打開的其他下拉選單
            hideDropdown();

            // 核心修正：在定位前，確保輸入框是可見的
            input.style.display = 'block';

            // 將當前輸入框設為活動目標
            activeInput = input;
            // 直接顯示下拉選單，不過濾任何關鍵字
            showDropdown(input, ''); 
        });

        // 我們不再需要對樂透圈的 input 監聽 focus, input, keydown 事件
        // 因為點擊 cell 就會處理所有事情
        /*
        input.addEventListener('focus', () => {
            activeInput = input;
            showDropdown(input, input.value);
        });
        input.addEventListener('input', () => showDropdown(input, input.value));
        input.addEventListener('keydown', (e) => {
            if ((e.key === 'Backspace' || e.key === 'Delete') && input.value !== '') {
                clearLotteryCell(cell);
                e.preventDefault();
                if (input.style.display === 'block') {
                    showDropdown(input, '');
                }
            }
        });
        */

        lotteryRow.appendChild(cell);
    }

    // 4. 初始載入列表
    updateLists();

    // --- 全域事件監聽 ---
    closeBtn.onclick = () => { modal.style.display = "none"; };
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        // 點擊下拉選單、輸入框以外的地方時，隱藏下拉選單和所有賓果輸入框
        if (!dropdown.contains(event.target) && !event.target.closest('.bingo-cell') && !event.target.closest('.lottery-cell')) {
            hideDropdown();
            document.querySelectorAll('.bingo-cell .cell-input').forEach(otherInput => {
                otherInput.style.display = 'none';
                const parentCell = otherInput.parentElement;
                const charInCell = cellCharacterMap.get(parentCell);
                parentCell.querySelector('.cell-image-bg').style.display = charInCell ? 'block' : 'none';
            });
            document.querySelectorAll('.lottery-cell .cell-input').forEach(otherInput => {
                otherInput.style.display = 'none';
                const parentCell = otherInput.parentElement;
                const charInCell = lotteryCellCharacterMap.get(parentCell);
                parentCell.querySelector('.cell-image-bg').style.display = charInCell ? 'block' : 'none';
            });
            activeInput = null;
        }
    };

    // 監聽全部清除按鈕
    clearAllBtn.addEventListener('click', () => {
        if (confirm('您確定要清除所有已選的角色嗎？')) {
            // 遍歷所有非 FREE 的格子並清除
            document.querySelectorAll('.bingo-cell:not(.free-cell)').forEach(cell => {
                clearCell(cell);
            });
            // 清除樂透區
            document.querySelectorAll('.lottery-cell').forEach(cell => {
                clearLotteryCell(cell);
            });
        }
    });

    // 5. 監聽生成按鈕點擊事件
    generateBtn.addEventListener('click', () => {
        // 生成圖片前，暫時隱藏所有輸入框的文字，只留下背景圖
        const inputs = captureArea.querySelectorAll('input');
        inputs.forEach(input => input.style.display = 'none');
        // 確保所有背景圖都顯示出來
        captureArea.querySelectorAll('.cell-image-bg').forEach(bg => {
            if (bg.style.backgroundImage) { // 只有有圖片的才顯示
                bg.style.display = 'block';
            }
        });
        hideDropdown(); // 隱藏下拉選單
        activeInput = null; // 清除 activeInput

        // 使用 html2canvas 將 #capture-area 元素轉換成圖片
        html2canvas(captureArea, {
            scale: 2, // 提高圖片解析度
            allowTaint: false, // 在伺服器環境下，我們不需要允許污染
            useCORS: true,    // 告訴 html2canvas 要使用 CORS 來載入圖片
            backgroundColor: '#ecf0f1', // 給定背景色，避免透明問題
        }).then(canvas => {
            // 圖片生成後，恢復輸入框的顯示狀態 (如果格子是空的，輸入框會重新顯示)
            document.querySelectorAll('.bingo-cell .cell-input').forEach(input => {
                const parentCell = input.parentElement;
                if (!cellCharacterMap.has(parentCell)) {
                    input.style.display = 'block';
                    parentCell.querySelector('.cell-image-bg').style.display = 'none';
                }
            });
            document.querySelectorAll('.lottery-cell .cell-input').forEach(input => {
                const parentCell = input.parentElement;
                if (!lotteryCellCharacterMap.has(parentCell)) {
                    input.style.display = 'block';
                    parentCell.querySelector('.cell-image-bg').style.display = 'none';
                }
            });

            const imageUrl = canvas.toDataURL('image/jpeg', 0.9); // 使用 JPG 格式
            modalImage.src = imageUrl;
            modal.style.display = "flex";
        }).catch(error => {
            console.error('圖片生成失敗，錯誤詳情:', error);
            alert('抱歉，圖片生成失敗了。請按 F12 打開開發者工具，在 Console 標籤頁查看詳細錯誤訊息。');
        });
    });
});
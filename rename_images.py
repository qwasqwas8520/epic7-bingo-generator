import os
import json
import re

# --- 配置 ---
# 請確保這個路徑指向您的 'images' 資料夾
# 如果您的 'images' 資料夾在 'Bingo' 資料夾內，通常這樣設定即可
IMAGES_FOLDER_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "images")

# --- 貼上您的 ml5Stars 陣列內容到這裡 ---
# 1. 打開您的 /Users/MOTW1795/Documents/VS code/Bingo/script.js 檔案。
# 2. 找到 `const ml5Stars = [` 這行。
# 3. 複製 `[` 和 `];` 之間的所有內容 (包括所有的 `{...}` 物件)。
# 4. 貼到下方三個引號 `"""` 之間。
#    請確保每個物件的鍵 (例如 name, image, pinyin) 都用雙引號 `"` 包裹。
#    如果最後一個物件後面有逗號，請將其刪除。
ml5_stars_data_str = """
{ "name": "年輕的女王夏綠蒂.webp", "image": "nqxhld.webp", "pinyin": "nqxhld" },
{ "name": "繼承人太悟.webp", "image": "jcrtaiwu.webp", "pinyin": "jcrtaiwu" },
{ "name": "支配者莉莉亞斯", "image": "zpbzllys.webp", "pinyin": "zpbzllys" },
{ "name": "獅心王潔若米亞", "image": "sxwjlmy.webp", "pinyin": "sxwjlmy" },
{ "name": "審判者綺世", "image": "spqs.webp", "pinyin": "spqs" },
{ "name": "伯里安", "image": "blan.webp", "pinyin": "blan" },
{ "name": "寶劍君主伊賽爾麗亞", "image": "bjjzysely.webp", "pinyin": "bjjzysely" },
{ "name": "諾托斯", "image": "nts.webp", "pinyin": "nts" },
{ "name": "龍之伴侶賽娜", "image": "lzblsn.webp", "pinyin": "lzblsn" },
{ "name": "海軍上校蘭蒂", "image": "hjsxld.webp", "pinyin": "hjsxld" },
{ "name": "起源拉斯", "image": "qyls.webp", "pinyin": "qyls" },
{ "name": "組長亞露嘉", "image": "zzyrj.webp", "pinyin": "zzyrj" },
{ "name": "最後的騎士克勞烏", "image": "zhdqsclw.webp", "pinyin": "zhdqsclw" },
{ "name": "蒼穹伊莉娜芙", "image": "cqylnf.webp", "pinyin": "cqylnf" },
{ "name": "野心份子泰溫", "image": "yxfztw.webp", "pinyin": "yxfztw" },
{ "name": "扭曲的亡靈凱隆", "image": "nqdwnkl.webp", "pinyin": "nqdwnkl" },
{ "name": "靈眼的瑟琳", "image": "lydsl.webp", "pinyin": "lydsl" },
{ "name": "實驗體賽茲", "image": "sytss.webp", "pinyin": "sytss" },
{ "name": "星辰的神諭艾蕾娜", "image": "xcdsyalna.webp", "pinyin": "xcdsyalna" },
{ "name": "司令官帕貝爾", "image": "slgpbe.webp", "pinyin": "slgpbe" },
{ "name": "無神論者麗迪卡", "image": "wslzldk.webp", "pinyin": "wslzldk" },
{ "name": "白銀刀刃的雅拉敏塔", "image": "byrdylmt.webp", "pinyin": "byrdylmt" },
{ "name": "湖畔魔女泰妮布里雅", "image": "hpmntnblly.webp", "pinyin": "hpmntnblly" },
{ "name": "賢者巴爾&塞尚", "image": "xzberss.webp", "pinyin": "xzberss" },
{ "name": "新月露娜", "image": "xyln.webp", "pinyin": "xyln" },
{ "name": "雪國的蘇莉塔妮亞", "image": "xgdsltdny.webp", "pinyin": "xgdsltdny" },
{ "name": "策劃者萊伊卡", "image": "chzlyk.webp", "pinyin": "chzlyk" },
{ "name": "森之賢者薇薇安", "image": "szxzwva.webp", "pinyin": "szxzwva" },
{ "name": "僕人克羅愛", "image": "prkla.webp", "pinyin": "prkla" },
{ "name": "天秤之主", "image": "tczz.webp", "pinyin": "tczz" },
{ "name": "龍王莎倫", image: "lwsalun.webp", "pinyin": "lwsalun" },
{ "name": "光之瑞兒", image: "gzre.webp", "pinyin": "gzre" },
{ "name": "沙漠寶石巴薩爾", image: "smbsbse.webp", "pinyin": "smbsbse" },
{ "name": "旁觀者和英", image: "pgzhy.webp", "pinyin": "pgzhy" },
{ "name": "末日蘿菲", image: "mrlf.webp", "pinyin": "mrlf" },
{ "name": "風紀委員艾莉雅", image: "fjwyaly.webp", "pinyin": "fjwyaly" },
{ "name": "都市暗影小泡芙", image: "dsayxpf.webp", "pinyin": "dsayxpf" },
{ "name": "孤狼沛伊拉", image: "glpyl.webp", "pinyin": "glpyl" },
{ "name": "黑暗的科爾布思", image: "hadeklbs.webp", "pinyin": "hadeklbs" },
{ "name": "協調者卡威利", image: "xtzkwl.webp", "pinyin": "xtzkwl" },
{ "name": "史瑞杰思", image: "srjs.webp", "pinyin": "srjs" },
{ "name": "設計師莉莉貝", image: "sjsllb.webp", "pinyin": "sjsllb" },
{ "name": "一輪孤月維爾蘿娜", image: "ylgywlln.webp", "pinyin": "ylgywlln" },
{ "name": "武門家肯恩", image: "wmjke.webp", "pinyin": "wmjke" },
{ "name": "墮落的賽西莉亞", image: "dlssly.webp", "pinyin": "dlssly" },
{ "name": "深淵優芬妮", image: "syyfn.webp", "pinyin": "syyfn" },
{ "name": "保健室老師律荷", image: "bjslslh.webp", "pinyin": "bjslslh" },
{ "name": "末日指揮官查爾斯", image: "mrzhgces.webp", "pinyin": "mrzhgces" },
{ "name": "執行官維德瑞", image: "zxgwdr.webp", "pinyin": "zxgwdr" },
{ "name": "殘影的菲奧雷托", image: "cydfalto.webp", "pinyin": "cydfalto" },
{ "name": "海盜船長芙蘭", image: "hdcjfl.webp", "pinyin": "hdcjfl" },
{ "name": "海上幽靈佛里蒂絲", image: "hsylfldis.webp", "pinyin": "hsylfldis" },
{ "name": "灰光森林的伊賽爾麗亞", image: "hgslsyly.webp", "pinyin": "hgslsyly" },
{ "name": "小惡魔路雅", image: "xemlya.webp", "pinyin": "xemlya" },
{ "name": "操作員賽珂蘭特", image: "czyklnt.webp", "pinyin": "czyklnt" },
{ "name": "魔神的暗影", image: "msday.webp", "pinyin": "msday" },
{ "name": "赫爾賽蒂", image: "hlsd.webp", "pinyin": "hlsd" },
{ "name": "黑暗牧者迪埃妮", image: "hamzdani.webp", "pinyin": "hamzdani" },
{ "name": "幻影的泰妮布里雅", image: "hydtnbly.webp", "pinyin": "hydtnbly" },
{ "name": "智武", image: "zw.webp", "pinyin": "zw" },
{ "name": "鎮魂的羅安納", image: "zhdlna.webp", "pinyin": "zhdlna" },
{ "name": "最強模特兒璐璐卡", image: "zqmtelllk.webp", "pinyin": "zqmtelllk" },
{ "name": "永劫漂流者魯特比", image: "yjplzltb.webp", "pinyin": "yjplzltb" },
{ "name": "赤月的貴族海斯特", image: "cygzhst.webp", "pinyin": "cygzhst" },
{ "name": "死亡探究者雷伊", image: "swtjzly.webp", "pinyin": "swtjzly" }
"""

try:
    # 將 JavaScript 物件字串轉換為有效的 JSON 格式
    # 這裡假設鍵已經用雙引號包裹，並且值是字串。
    # 如果最後一個物件後面有逗號，請將其刪除。
    ml5_stars_data_str = re.sub(r',\s*$', '', ml5_stars_data_str.strip())
    ml5_stars_data = json.loads(f"[{ml5_stars_data_str}]")
except json.JSONDecodeError as e:
    print(f"錯誤: 無法解析 ml5Stars 資料。請確保您複製的內容是有效的 JSON 格式。錯誤訊息: {e}")
    print("請檢查腳本中 'ml5_stars_data_str' 變數的內容。")
    exit()

# --- 準備重新命名映射 ---
rename_map = {} # 格式: { "原始中文檔名.webp": "新拼音檔名.webp" }
for char_data in ml5_stars_data:
    chinese_name = char_data['name']
    new_filename = char_data['image'] # 這已經是 "拼音.webp" 格式

    # 假設原始檔案的命名格式是 "中文名.webp"
    original_filename_with_ext = f"{chinese_name}.webp" 
    rename_map[original_filename_with_ext] = new_filename

# --- 執行重新命名 ---
print(f"開始在 '{IMAGES_FOLDER_PATH}' 資料夾中重新命名檔案...")
renamed_count = 0
skipped_count = 0

for original_filename_with_ext, new_filename in rename_map.items():
    old_path = os.path.join(IMAGES_FOLDER_PATH, original_filename_with_ext)
    new_path = os.path.join(IMAGES_FOLDER_PATH, new_filename)

    if os.path.exists(old_path):
        try:
            os.rename(old_path, new_path)
            print(f"已重新命名: '{original_filename_with_ext}' -> '{new_filename}'")
            renamed_count += 1
        except Exception as e:
            print(f"重新命名 '{original_filename_with_ext}' 時發生錯誤: {e}")
    else:
        # 檢查檔案是否已經是新的名稱 (例如，如果腳本之前已經執行過)
        if os.path.exists(new_path):
            print(f"已跳過: '{original_filename_with_ext}' (檔案名稱已是 '{new_filename}')")
        else:
            print(f"警告: 找不到原始檔案 '{original_filename_with_ext}'。已跳過。")
        skipped_count += 1

print("\n--- 重新命名摘要 ---")
print(f"從提供的資料中處理的檔案總數: {len(ml5_stars_data)}")
print(f"成功重新命名的檔案數: {renamed_count}")
print(f"已跳過的檔案數 (找不到或已重新命名): {skipped_count}")
print("\n重要提示: 重新命名完成後，請重新整理您的網頁以查看變更。")
print("如果遇到問題，請仔細檢查此腳本中的 'ml5_stars_data_str' 變數和您的 'images' 資料夾內容。")

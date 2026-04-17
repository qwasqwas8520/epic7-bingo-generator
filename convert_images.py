
import base64
import os
import re
import json

def get_mime_type(filepath):
    """根據副檔名返回 MIME 類型"""
    ext = os.path.splitext(filepath)[1].lower()
    if ext == '.png':
        return 'image/png'
    elif ext == '.jpg' or ext == '.jpeg':
        return 'image/jpeg'
    elif ext == '.webp':
        return 'image/webp'
    elif ext == '.gif':
        return 'image/gif'
    else:
        return 'application/octet-stream'

def encode_image_to_base64(image_path):
    """將圖片檔案編碼為 Base64 Data URL"""
    if not os.path.exists(image_path):
        print(f"警告：找不到圖片檔案 {image_path}，將使用空字串。")
        return ""
    
    mime_type = get_mime_type(image_path)
    with open(image_path, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode('utf-8')
    return f"data:{mime_type};base64,{encoded_string}"

def main():
    script_path = 'script.js'
    image_dir = 'image'

    try:
        with open(script_path, 'r', encoding='utf-8') as f:
            original_script_content = f.read()
    except FileNotFoundError:
        print(f"錯誤：找不到 {script_path}。請確保此腳本與 script.js 在同一個資料夾中。")
        return

    # 使用正則表達式尋找 ml5Stars 陣列的區塊
    array_match = re.search(r'(const ml5Stars = \[)(.*?)(\];)', original_script_content, re.DOTALL)
    if not array_match:
        print("錯誤：在 script.js 中找不到 'const ml5Stars' 陣列。")
        return

    original_array_content = array_match.group(2)
    
    # 使用更強健的正則表達式直接從每個物件中提取所需資訊
    entry_pattern = re.compile(r'\{\s*name:\s*"(.*?)",\s*image:\s*"(.*?)",\s*pinyin:\s*"(.*?)"\s*\}')
    
    parsed_entries = entry_pattern.findall(original_array_content)
    
    if not parsed_entries:
        print("錯誤：無法從 'ml5Stars' 陣列中解析出任何角色資料。請檢查其結構。")
        return

    # 建立新的角色資料，將圖片轉換為 Base64
    new_ml5_stars_data = []
    print("開始轉換圖片為 Base64 字串...")
    for i, (name, image_file, pinyin) in enumerate(parsed_entries):
        print(f"  處理中 ({i+1}/{len(parsed_entries)}): {name}")
        image_path = os.path.join(image_dir, image_file)
        base64_url = encode_image_to_base64(image_path)
        
        new_ml5_stars_data.append({
            'name': name,
            'image': base64_url,
            'pinyin': pinyin
        })
    print("圖片轉換完成。")

    # 將新的角色資料陣列轉換回 JavaScript 的物件字串
    new_array_entries_str = ",
".join([
        f'    {{name: "{d["name"]}", image: "{d["image"]}", pinyin: "{d["pinyin"]}"}}'
        for d in new_ml5_stars_data
    ])
    new_array_block = f"[
{new_array_entries_str}
]"

    # 產生新的 script.js 內容
    # 1. 替換整個 ml5Stars 陣列區塊
    new_script_content = array_match.re.sub(
        r'\g<1>' + new_array_block + r'\g<3>',
        original_script_content
    )
    
    # 2. 確保圖片路徑使用 Base64 資料，而不是檔案路徑
    new_script_content = new_script_content.replace('src="image/${char.image}"', 'src="${char.image}"')
    new_script_content = new_script_content.replace("url('image/${char.image}')", "url('${char.image}')")
    
    # 3. 確保 html2canvas 的設定是正確的（移除 allowTaint 和 useCORS）
    h2c_pattern = re.compile(r'html2canvas\(bingoCard, \{.*?\}\)', re.DOTALL)

    if h2c_pattern.search(new_script_content):
         new_script_content = h2c_pattern.sub(r"""html2canvas(bingoCard, {
            scale: 2, // 提高圖片解析度
            backgroundColor: '#ecf0f1', // 給定背景色，避免透明問題
        })""", new_script_content)
    else:
        print("警告: 在 script.js 中找不到 html2canvas 的呼叫區塊，無法自動更新其設定。")


    # 寫入新的 script.js 檔案
    with open(script_path, 'w', encoding='utf-8') as f:
        f.write(new_script_content)

    print("-" * 50)
    print("成功！")
    print(f"'{script_path}' 已被更新並包含了所有圖片資料。")
    print("現在您可以直接打開 index.html 檔案，所有功能都應正常運作。")
    print("這個 'Bingo' 資料夾現在是完全可攜的了。")
    print("-" * 50)


if __name__ == '__main__':
    main()

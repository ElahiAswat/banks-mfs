import os
import glob
import subprocess
from concurrent.futures import ThreadPoolExecutor

BUCKET = "bank-mfs"

def upload_file(item):
    r2_key, local_path = item
    cmd = [
        "npx", "wrangler", "r2", "object", "put",
        f"{BUCKET}/{r2_key}",
        f"--file={local_path}"
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode == 0:
        print(f"✓ Uploaded {r2_key}")
        return True
    else:
        print(f"✗ Failed {r2_key}: {res.stderr}")
        return False

def main():
    items = []

    # Banks
    for path in glob.glob("dist/assets/logos/banks/*"):
        if os.path.isfile(path) and not path.endswith(".DS_Store"):
            fname = os.path.basename(path)
            items.append((f"logos/banks/{fname}", path))

    # MFS
    for path in glob.glob("dist/assets/logos/mfs/*"):
        if os.path.isfile(path) and not path.endswith(".DS_Store"):
            fname = os.path.basename(path)
            items.append((f"logos/mfs/{fname}", path))

    print(f"Starting parallel upload of {len(items)} assets to Cloudflare R2: {BUCKET}...")

    with ThreadPoolExecutor(max_workers=8) as executor:
        results = list(executor.map(upload_file, items))

    successful = sum(1 for r in results if r)
    print(f"\nUpload complete! {successful}/{len(items)} assets uploaded to R2.")

if __name__ == "__main__":
    main()

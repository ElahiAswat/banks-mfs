import os
import subprocess
import glob

def run_cmd(cmd):
    res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Error running: {cmd}\n{res.stderr}")
    return res.returncode == 0

def main():
    banks_out = "dist/assets/logos/banks"
    mfs_out = "dist/assets/logos/mfs"
    
    os.makedirs(banks_out, exist_ok=True)
    os.makedirs(mfs_out, exist_ok=True)
    
    print("--- Optimizing Bank Logos ---")
    bank_files = glob.glob("logos/*.jpg")
    for f in bank_files:
        basename = os.path.splitext(os.path.basename(f))[0]
        # 1. Copy original jpg
        run_cmd(f"cp '{f}' '{banks_out}/{basename}.jpg'")
        # 2. Generate WebP
        run_cmd(f"cwebp -q 90 '{f}' -o '{banks_out}/{basename}.webp' 2>/dev/null")
        # 3. Generate PNG
        run_cmd(f"convert '{f}' '{banks_out}/{basename}.png'")
        print(f"  Processed bank: {basename} (jpg, webp, png)")

    print("\n--- Optimizing MFS Logos ---")
    mfs_files = glob.glob("mfs/*.*")
    for f in mfs_files:
        if f.endswith(".DS_Store"):
            continue
        basename = os.path.splitext(os.path.basename(f))[0]
        ext = os.path.splitext(f)[1].lower()
        
        # Copy original
        run_cmd(f"cp '{f}' '{mfs_out}/{basename}{ext}'")
        # Generate WebP
        run_cmd(f"cwebp -q 90 '{f}' -o '{mfs_out}/{basename}.webp' 2>/dev/null")
        # Generate PNG if not already png
        if ext != ".png":
            run_cmd(f"convert '{f}' '{mfs_out}/{basename}.png'")
        print(f"  Processed MFS: {basename}")

    print("\nOptimization complete! All assets placed in dist/assets/")

if __name__ == "__main__":
    main()

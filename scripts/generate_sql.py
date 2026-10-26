import json
import os

def sql_escape(val):
    if val is None:
        return "NULL"
    if isinstance(val, (dict, list)):
        val = json.dumps(val, ensure_ascii=False)
    val = str(val).replace("'", "''")
    return f"'{val}'"

def main():
    os.makedirs("migrations", exist_ok=True)
    
    with open("banks.json", "r", encoding="utf-8") as f:
        banks = json.load(f)

    mfs_list = [
        {
            "slug": "bkash",
            "name": "bKash",
            "registered_name": "bKash Limited",
            "type": "MFS",
            "parent": "BRAC Bank PLC",
            "established": "2011",
            "website": "https://www.bkash.com",
            "call_center": "16247",
            "email": "support@bkash.com",
            "logo_file": "bkash.png",
            "description": "bKash is the leading mobile financial service in Bangladesh, operating under the authority of Bangladesh Bank as a subsidiary of BRAC Bank PLC."
        },
        {
            "slug": "nagad",
            "name": "Nagad",
            "registered_name": "Nagad Limited",
            "type": "MFS",
            "parent": "Bangladesh Post Office",
            "established": "2019",
            "website": "https://nagad.com.bd",
            "call_center": "16167",
            "email": "info@nagad.com.bd",
            "logo_file": "nagad.jpg",
            "description": "Nagad is a popular digital financial service operating under the Postal Division of the Government of Bangladesh."
        },
        {
            "slug": "rocket",
            "name": "Rocket",
            "registered_name": "DBBL Mobile Banking (Rocket)",
            "type": "MFS",
            "parent": "Dutch-Bangla Bank PLC",
            "established": "2011",
            "website": "https://www.dutchbanglabank.com/rocket/rocket.html",
            "call_center": "16216",
            "email": "rocket@dbbl.com.bd",
            "logo_file": "rocket.jpeg",
            "description": "Rocket is the pioneer mobile financial service in Bangladesh, launched by Dutch-Bangla Bank PLC."
        },
        {
            "slug": "upay",
            "name": "Upay",
            "registered_name": "UCB Fintech Company Limited (upay)",
            "type": "MFS",
            "parent": "United Commercial Bank PLC (UCB)",
            "established": "2021",
            "website": "https://www.upaybd.com",
            "call_center": "16268",
            "email": "info@upaybd.com",
            "logo_file": "upay.png",
            "description": "Upay is a digital financial service provider and subsidiary of United Commercial Bank PLC."
        }
    ]

    sql_statements = []
    
    # 1. Header & Schema
    sql_statements.append("-- Cloudflare D1 Migration: Initial Schema & Seed Data")
    sql_statements.append("-- Generated for D1 Database: 63db858a-1756-4416-87f9-03d25c3c8fdb\n")
    
    sql_statements.append("DROP TABLE IF EXISTS banks;")
    sql_statements.append("DROP TABLE IF EXISTS mfs;\n")
    
    sql_statements.append("""CREATE TABLE banks (
    slug TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    registered_name TEXT,
    legal_status TEXT,
    established TEXT,
    type TEXT,
    category TEXT,
    origin TEXT,
    services TEXT,
    address TEXT,
    telephone TEXT,
    fax TEXT,
    call_center TEXT,
    email TEXT,
    website TEXT,
    swift_code TEXT,
    bank_code TEXT,
    stock_code TEXT,
    service_hours TEXT,
    rating REAL,
    rating_votes INTEGER,
    description TEXT,
    url TEXT,
    logo_file TEXT
);""")

    sql_statements.append("CREATE INDEX idx_banks_swift ON banks(swift_code);")
    sql_statements.append("CREATE INDEX idx_banks_bank_code ON banks(bank_code);")
    sql_statements.append("CREATE INDEX idx_banks_type ON banks(type);")
    sql_statements.append("CREATE INDEX idx_banks_origin ON banks(origin);\n")

    sql_statements.append("""CREATE TABLE mfs (
    slug TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    registered_name TEXT,
    type TEXT DEFAULT 'MFS',
    parent TEXT,
    established TEXT,
    website TEXT,
    call_center TEXT,
    email TEXT,
    logo_file TEXT,
    description TEXT
);""")
    sql_statements.append("CREATE INDEX idx_mfs_name ON mfs(name);\n")

    # 2. Insert Banks
    sql_statements.append("-- Seed Banks Data")
    for b in banks:
        slug = sql_escape(b.get("slug"))
        name = sql_escape(b.get("name"))
        registered_name = sql_escape(b.get("registered_name"))
        legal_status = sql_escape(b.get("legal_status"))
        established = sql_escape(b.get("established"))
        type_val = sql_escape(b.get("type"))
        category = sql_escape(b.get("category"))
        origin = sql_escape(b.get("origin"))
        services = sql_escape(b.get("services"))
        address = sql_escape(b.get("address"))
        telephone = sql_escape(b.get("telephone"))
        fax = sql_escape(b.get("fax"))
        call_center = sql_escape(b.get("call_center"))
        email = sql_escape(b.get("email"))
        website = sql_escape(b.get("website"))
        swift_code = sql_escape(b.get("swift_code"))
        # clean bank_code if it had single quotes in db
        bank_code_raw = b.get("bank_code")
        if isinstance(bank_code_raw, str):
            bank_code_raw = bank_code_raw.strip("'\"")
        bank_code = sql_escape(bank_code_raw)
        stock_code = sql_escape(b.get("stock_code"))
        service_hours = sql_escape(b.get("service_hours"))
        rating = b.get("rating") if b.get("rating") is not None else "NULL"
        rating_votes = b.get("rating_votes") if b.get("rating_votes") is not None else "NULL"
        description = sql_escape(b.get("description"))
        url = sql_escape(b.get("url"))
        logo_file = sql_escape(b.get("logo_file"))

        stmt = f"""INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    {slug}, {name}, {registered_name}, {legal_status}, {established}, {type_val}, {category},
    {origin}, {services}, {address}, {telephone}, {fax}, {call_center}, {email}, {website},
    {swift_code}, {bank_code}, {stock_code}, {service_hours}, {rating}, {rating_votes},
    {description}, {url}, {logo_file}
);"""
        sql_statements.append(stmt)

    sql_statements.append("\n-- Seed MFS Data")
    for m in mfs_list:
        slug = sql_escape(m.get("slug"))
        name = sql_escape(m.get("name"))
        registered_name = sql_escape(m.get("registered_name"))
        type_val = sql_escape(m.get("type"))
        parent = sql_escape(m.get("parent"))
        established = sql_escape(m.get("established"))
        website = sql_escape(m.get("website"))
        call_center = sql_escape(m.get("call_center"))
        email = sql_escape(m.get("email"))
        logo_file = sql_escape(m.get("logo_file"))
        description = sql_escape(m.get("description"))

        stmt = f"""INSERT INTO mfs (
    slug, name, registered_name, type, parent, established,
    website, call_center, email, logo_file, description
) VALUES (
    {slug}, {name}, {registered_name}, {type_val}, {parent}, {established},
    {website}, {call_center}, {email}, {logo_file}, {description}
);"""
        sql_statements.append(stmt)

    output_path = "migrations/0001_init.sql"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(sql_statements) + "\n")

    print(f"Generated {output_path} with {len(banks)} banks and {len(mfs_list)} MFS providers.")

if __name__ == "__main__":
    main()

-- Cloudflare D1 Migration: Initial Schema & Seed Data
-- Generated for D1 Database: 63db858a-1756-4416-87f9-03d25c3c8fdb

DROP TABLE IF EXISTS banks;
DROP TABLE IF EXISTS mfs;

CREATE TABLE banks (
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
);
CREATE INDEX idx_banks_swift ON banks(swift_code);
CREATE INDEX idx_banks_bank_code ON banks(bank_code);
CREATE INDEX idx_banks_type ON banks(type);
CREATE INDEX idx_banks_origin ON banks(origin);

CREATE TABLE mfs (
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
);
CREATE INDEX idx_mfs_name ON mfs(name);

-- Seed Banks Data
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'abbl', 'AB Bank', 'AB Bank PLC', 'Public Limited Company', '1982', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Corporate Banking", "SME Banking", "NRB Banking", "Money Transfer", "Islami Banking", "AB Securities Limited", "Investment Banking", "Cards", "Safe Deposit Locker", "Internet Banking", "Fund Transfer"]', 'BCIC Bhaban, 30-31 Dilkusha Commercial Area , Dhaka 1000 , Bangladesh .', '+880 2 9560312', '+880 2 9564122-23', '16207, +880 96789 16207', 'info@abbl.com', 'https://www.abbl.com',
    'ABBLBDDH', '020', 'ABBANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.7, 727,
    NULL, 'https://www.banksbd.org/abbl', 'abbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'agbk', 'Agrani Bank', 'Agrani Bank PLC', 'Public Limited Company', '1972', 'Public Bank', 'Commercial Bank',
    'Local Bank', '["ATM Services", "Online Banking (CBS)", "Inter-branch Money Transfer", "Swift", "Web-based Online Cheque, TT Issue & Payment System", "Issuing & Enchasing Foreign Drafts", "Locker Services", "Agency Services", "Inland Remittance"]', '9/D Dilkusha Commercial Area , Dhaka 1000 , Bangladesh .', '+880 2 9566153-54, 9566160-69, 9566074-75', '+880 2 9562346, 9563662', '+880 2 9566153, 9566154', 'agrani@agranibank.org', 'https://www.agranibank.org',
    'AGBKBDDH', '010', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 3.9, 1555,
    NULL, 'https://www.banksbd.org/agbk', 'agbk.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'aibl', 'Al-Arafah Islami Bank', 'Al-Arafah Islami Bank PLC', 'Public Limited Company', '1995', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Deposit", "Investment", "Foreign Trade", "Micro, Small & Medium Enterprises (MSME) Banking", "MoneyGram"]', 'Al-Arafah Tower, 63 Purana Paltan , Dhaka 1000 , Bangladesh .', '+880 2 44850005', '+880 2 44850066', '16434, +880 96110 16434', 'info@aibl.com.bd', 'https://www.aibl.com.bd',
    'ALARBDDH', '015', 'ALARABANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.6, 656,
    NULL, 'https://www.banksbd.org/aibl', 'aibl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'bcbl', 'Bangladesh Commerce Bank', 'Bangladesh Commerce Bank Limited', 'Public Limited Company', '1998', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Corporate Banking", "SME Banking", "Agricultural Banking", "NRB Services", "Loand and Advances", "Western Union", "MoneyGram", "Xpress Money", "IME", "Locker Service"]', 'Eunoos Trade Centre, Level 22, 52-53 Dilkusha C/A, Motijheel , Dhaka 1000 , Bangladesh .', '+880 96 13221043', '+880 2 9568218', '16270, +880 96 13221040-47', 'info@bcbl.com.bd', 'https://www.bcblbd.com',
    'BCBLBDDH', '030', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 614,
    NULL, 'https://www.banksbd.org/bcbl', 'bcbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'bdbl', 'Bangladesh Development Bank', 'Bangladesh Development Bank PLC', 'Public Limited Company', '2009', 'Public Bank', 'Commercial Bank',
    'Local Bank', '["Savings and Deposits", "Sanchayapatra Services", "Loans", "SME", "Foreign Trade Financing", "Foreign Exchange Business", "i-Banking", "Debit Cards"]', 'BDBL Bhaban, 8 Rajuk Avenue , Dhaka 1000 , Bangladesh .', '+880 2 9555151-59, 9560014-15', '+880 2 9562061', '16805, +880 2 223351041', 'info@bdbl.com.bd', 'https://www.bdbl.com.bd',
    'BDDBBDDH', '047', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 597,
    NULL, 'https://www.banksbd.org/bdbl', 'bdbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'bkb', 'Bangladesh Krishi Bank', 'Bangladesh Krishi Bank', 'Public Limited Company', '1973', 'Public Bank', 'Specialized Bank',
    'Local Bank', '["Corporate Financing", "Credit Program", "Deposit Scheme", "International Banking", "Loan Services of BKB", "Proverty Alleviation & MCP"]', 'Krishi Bank Bhaban, 83-85 Motijheel Commercial Area , Dhaka 1000 , Bangladesh .', '+880 2 9560021', '+880 2 9561211, 9556903, 9553028', '16129', 'administrator@krishibank.org.bd', 'https://krishibank.gov.bd',
    'BKBABDDH', '035', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.6, 692,
    NULL, 'https://www.banksbd.org/bkb', 'bkb.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'alfh', 'Bank Alfalah', 'Bank Alfalah Limited', 'Public Limited Company', '1997', 'Private Bank', 'Commercial Bank',
    'Foreign Bank', '["Financial solutions to consumers, corporations, institutions and governments", "Corporate and investment banking", "Consumer banking and credit", "Commercial financing", "SME", "Agri-finance", "Islamic and asset financing"]', '168 Gulshan Avenue, Gulshan 2 , Dhaka 1212 , Bangladesh .', '+880 2 8833112-14 (Extn 205, 219)', '+880 2 9896782', '16515, +880 2 41021001-08', 'customercomplaint@bankalfalah.com.bd', 'https://www.bankalfalah.com/bd',
    'ALFHBDDH', '065', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 599,
    NULL, 'https://www.banksbd.org/alfh', 'alfh.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'balb', 'Bank Asia', 'Bank Asia PLC', 'Public Limited Company', '1999', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Corporate Banking", "Islamic Banking", "SME Banking", "Agent Banking"]', 'Bank Asia Tower, 32 & 34 Kazi Nazrul Islam Avenue, Karwanbazar , Dhaka 1215 , Bangladesh .', '+880 9617 001100', NULL, '16205, +880 96170 16205', 'contact.center@bankasia-bd.com', 'https://www.bankasia-bd.com',
    'BALBBDDH', '070', 'BANKASIA', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.6, 668,
    NULL, 'https://www.banksbd.org/balb', 'balb.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'bksi', 'BASIC Bank', 'Bangladesh Small Industries and Commerce Bank PLC', 'Public Limited Company', '1988', 'Private Bank', 'Commercial Bank',
    'Local Bank', NULL, 'Sena Kalyan Bhaban, 6th Floor, 195 Box Culvert Road, Kamalapur, Motijheel C/A , Dhaka 1000 , Bangladesh .', '+880 2 223359185-86, 223359589-90', '+880 2 9564829', '+880 2 223388190, 223384830', 'basicho@basicbankplc.com', 'https://www.basicbankplc.com',
    'BKSIBDDH', '055', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 609,
    NULL, 'https://www.banksbd.org/bksi', 'bksi.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'bgcb', 'Bengal Commercial Bank', 'Bengal Commercial Bank PLC', 'Public Limited Company', '2020', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Corporate Banking", "SME Banking", "Loans & Finance", "Cards", "Wealth Management", "Online Banking"]', 'Khandker Tower, 94 Gulshan Avenue, Gulshan , Dhaka 1212 , Bangladesh .', '+880 2 55068889-93', NULL, '16796, +880 96123 16796', 'info@bgcb.com.bd', 'https://www.bgcb.com.bd',
    'BCOLBDDH', NULL, NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 610,
    NULL, 'https://www.banksbd.org/bgcb', 'bgcb.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'brac', 'BRAC Bank', 'BRAC Bank PLC', 'Public Limited Company', '2001', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["SME Banking", "Retails Banking", "Card Service (Credit & Debit)", "Foreign Exchange & Related Services", "Wholesale Banking & Custodial Service", "Probashi Banking", "BRAC Bank Astha"]', '1 Gulshan Avenue, Circle 1, Gulshan , Dhaka 1212 , Bangladesh .', '+880 2 8859202, Call Center 16221', '+880 2 9860395', '16221, +880 96 11223344', 'enquiry@bracbank.com', 'https://www.bracbank.com',
    'BRAKBDDH', '060', 'BRACBANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.7, 824,
    NULL, 'https://www.banksbd.org/brac', 'brac.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'citi', 'Citibank', 'Citibank N.A.', 'Public Limited Company', '1812', 'Private Bank', 'Commercial Bank',
    'Foreign Bank', NULL, '8 Gulshan Avenue, Gulshan 1 , Dhaka 1212 , Bangladesh .', '+880 96 66992119, +880 96 66991332', '+880 2 9899126', '+880 96 66991000', 'bangladesh.citiservice@citi.com', 'https://www.asia.citibank.com/bangladesh',
    'CITIBDDX', '075', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 606,
    NULL, 'https://www.banksbd.org/citi', 'citi.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'cizs', 'Citizens Bank', 'Citizens Bank PLC', 'Public Limited Company', '2020', 'Public Bank', 'Commercial Bank',
    'Local Bank', '["Retail Deposits", "Retail Loans", "SME Deposits", "SME Loans", "Corporate Banking"]', 'Chini Shilpa Bhaban 2, 76 Motijheel C/A , Dhaka 1000 , Bangladesh .', '+880 96 66757000, 666248001-05', NULL, '16757, +880 96667 16757', 'info@citizensbankbd.com', 'https://www.citizensbankbd.com',
    'CIZSBDDH', NULL, NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 3.1, 9,
    NULL, 'https://www.banksbd.org/cizs', 'cizs.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'cibl', 'City Bank', 'City Bank PLC', 'Public Limited Company', '1983', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Corporate Banking", "SME Banking", "Islamic Banking", "Loans", "Deposits", "CityTouch", "Locker Service", "Student File"]', '136 Gulshan Avenue, Circle 2, Gulshan , Dhaka 1212 , Bangladesh .', '+880 2 8813483, 8814375, 8813126', '+880 2 9884446', '16234, +880 2 8331040', 'info@thecitybank.com', 'https://www.citybankplc.com',
    'CIBLBDDH', '225', 'CITYBANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.7, 713,
    NULL, 'https://www.banksbd.org/cibl', 'cibl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'ccey', 'Commercial Bank of Ceylon', 'Commercial Bank of Ceylon PLC', 'Public Limited Company', '1920', 'Private Bank', 'Commercial Bank',
    'Foreign Bank', '["Personal Banking", "Corporate Banking", "SME Banking", "Offshore Banking", "Custodial service & NITA", "Sending Money Home", "Loans"]', 'Hadi Tower, House No. NW(K)-1, Road 50, Kemal Ataturk Avenue, Gulshan 2 , Dhaka 1212 , Bangladesh .', '+880 2 22666061-10', '+880 2 9565707, 9566574', '16734, +880 96109 16734', 'email@combankbd.com', 'https://www.combank.net.bd',
    'CCEYBDDH', '080', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 620,
    NULL, 'https://www.banksbd.org/ccey', 'ccey.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'communitybank', 'Community Bank', 'Community Bank Bangladesh PLC', 'Public Limited Company', '2019', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Corporate Banking", "SME Banking", "Investment Banking", "Cards", "Safe Deposit Locker", "Fund Transfer"]', 'Police Plaza Concord, Level 5, Tower 2, Plot 2, Road 144, Circle 1, Gulshan , Dhaka 1212 , Bangladesh .', '+880 96 777 12001', NULL, '16707, +880 96777 16707', 'contact@communitybankbd.info', 'https://www.communitybankbd.com',
    'COYMBDDD', NULL, NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 604,
    NULL, 'https://www.banksbd.org/communitybank', 'communitybank.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'dhbl', 'Dhaka Bank', 'Dhaka Bank PLC', 'Public Limited Company', '1995', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Consumer Banking", "Corporate Banking", "Offshore Banking", "SME Banking", "Islamic Banking", "Deposits", "Loans", "Locker Services"]', '100 Motijheel Commercial Area , Dhaka 1000 , Bangladesh .', '+880 2 9554514, 9571006-10', '+880 2 9556584', '16474, +880 96780 16474', 'info@dhakabank.com.bd', 'https://www.dhakabankltd.com',
    'DHBLBDDH', '085', 'DHAKABANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 606,
    NULL, 'https://www.banksbd.org/dhbl', 'dhbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'dbbl', 'Dutch-Bangla Bank', 'Dutch-Bangla Bank PLC', 'Public Limited Company', '1995', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Personal Banking", "Corporate Banking", "Deposits and Advances", "SME Banking", "Agent Banking", "Remittance Services", "Internet Banking", "NexusPay", "Rocket"]', 'Sena Kalyan Bhaban, 4th Floor, 195 Motijheel Commercial Area , Dhaka 1000 , Bangladesh .', '+880 2 9574196-97', '+88 0 2 9561889', '16216, +880 96667 16216', 'hrd@dutchbanglabank.com', 'https://www.dutchbanglabank.com',
    'DBBLBDDH', '090', 'DUTCHBANGL', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.7, 805,
    NULL, 'https://www.banksbd.org/dbbl', 'dbbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'ebl', 'Eastern Bank', 'Eastern Bank PLC', 'Public Limited Company', '1992', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Consumer Banking", "Corporate Banking", "SME Banking", "Green Banking", "Student Banking", "Deposits", "Loans"]', '100 Gulshan Avenue, Gulshan , Dhaka 1212 , Bangladesh .', '+880 966 6777325', '+880 2 9562364', '16230, +880 96777 16230', 'info@ebl.com.bd', 'https://www.ebl.com.bd',
    'EBLDBDDH', '095', 'EBL', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.6, 673,
    NULL, 'https://www.banksbd.org/ebl', 'ebl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'exbk', 'EXIM Bank', 'Export Import Bank of Bangladesh PLC', 'Public Limited Company', '1999', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Corporate Banking", "SME Banking", "Agri Banking", "Remittance"]', 'EXIM Bank Tower, Plot No. 15, Road 15, Block CWS(C), Bir Uttam AK Khondokar Road, Gulshan 1 , Dhaka 1212 , Bangladesh .', '+880 966 6716246', '+880 2 8828962', '16246, +880 96040 16246', 'info@eximbankbd.com', 'https://www.eximbankbd.com',
    'EXBKBDDH', '100', 'EXIMBANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 606,
    NULL, 'https://www.banksbd.org/exbk', 'exbk.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'fsib', 'FSIB PLC', 'First Security Islami Bank PLC', 'Public Limited Company', '1999', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Deposits", "Investments", "Foreign Remittance", "Locker Service", "Foreign Exchange", "Green Banking", "SME Banking"]', 'Rangs RD Center, Plot No. 3, Block SE(F), Gulshan Avenue, Circle 1, Gulshan , Dhaka 1212 , Bangladesh .', '+880 2 55045700', '+880 2 9891915', '16257, +880 96667 16257', 'info@fsiblbd.com', 'https://www.fsibplc.com',
    'FSEBBDDH', '105', 'FIRSTSBANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 605,
    NULL, 'https://www.banksbd.org/fsib', 'fsib.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'gibl', 'Global Islami Bank', 'Global Islami Bank PLC', 'Public Limited Company', '2013', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Corporate Banking", "Deposit Schemes", "Double Benefit Scheme", "Student Banking", "Loans", "SMS Banking"]', 'Saiham Tower, House No. 34, Road 136, Block SE(C-1), Gulshan Model Town , Dhaka 1212 , Bangladesh .', '+880 96 17176037', '+880 2 222260968', '16671, +880 96100 16671', 'info@globalislamibankbd.com', 'https://www.globalislamibankbd.com',
    'NGBLBDDH', '300', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 598,
    NULL, 'https://www.banksbd.org/gibl', 'gibl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'hbl', 'Habib Bank', 'Habib Bank Limited', 'Public Limited Company', '1947', 'Private Bank', 'Commercial Bank',
    'Foreign Bank', '["Corporate Banking", "SME Banking", "Correspondent Banking", "Basic Banking", "Agri Banking", "Loans"]', 'Autograph, Plot No. 67-68, Kemal Ataturk Avenue, Banani , Dhaka 1213 , Bangladesh .', '+880 2 55035142, 55035144, 55035145', '+880 2 55035093', '+880 1977 742523', 'complaint.bd@hbl.com', 'https://www.hbl.com/bangladesh',
    'HABBBDDH', '110', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 592,
    NULL, 'https://www.banksbd.org/hbl', 'hbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'hsbc', 'HSBC Bank', 'The Hongkong and Shanghai Banking Corporation Limited', 'Public Limited Company', '1836', 'Private Bank', 'Commercial Bank',
    'Foreign Bank', '["Retail Banking", "Commercial Banking", "Shariah Banking", "Loans", "Deposits"]', 'Shanta Western Tower, 186 Bir Uttam Mir Shawkat Ali Road, Tejgaon Industrial Area , Dhaka 1208 , Bangladesh .', '+880 96 12771387, +880 96 12771203', NULL, '16240, +880 96127 16240', 'contact@hsbc.com.bd', 'https://www.hsbc.com.bd',
    'HSBCBDDH', '115', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 618,
    NULL, 'https://www.banksbd.org/hsbc', 'hsbc.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'icbib', 'ICB Islamic Bank', 'ICB Islamic Bank Limited', 'Public Limited Company', '1987', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Corporate Banking", "Deposits", "Loans"]', 'TK Bhaban, 13 Kazi Nazrul Islam Avenue, Karwan Bazar , Dhaka 1215 , Bangladesh .', '+880 2 55012061, 55012063, 55012065', '+880 2 55012060', '+880 2 55012061', 'care@icbislamic-bd.com', 'https://www.icbislamic-bd.com',
    'BBSHBDDH', '230', 'ICBIBANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 598,
    NULL, 'https://www.banksbd.org/icbib', 'icbib.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'ific', 'IFIC Bank', 'International Finance Investment and Commerce Bank PLC', 'Public Limited Company', '1976', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Corporate Banking", "Retail Banking", "SME Banking", "Financing", "Deposits", "Loans"]', 'IFIC Tower, 61 Purana Paltan , Dhaka 1000 , Bangladesh .', '+880 96 66716250', '+880 2 44850205', '16255, +880 96667 16255', 'info@ificbankbd.com', 'https://www.ificbank.com.bd',
    'IFICBDDH', '120', 'IFIC', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.6, 652,
    NULL, 'https://www.banksbd.org/ific', 'ific.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'ibbl', 'Islami Bank', 'Islami Bank Bangladesh PLC', 'Public Limited Company', '1983', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Corporate Banking", "NRB Banking", "SME Banking", "Foreign Exchange", "Offshore Banking", "Deposits", "Investments", "Rural Development", "Locker Service"]', 'Islami Bank Tower, 40 Dilkusha Commercial Area , Dhaka 1000 , Bangladesh .', '+880 2 223383040, 223384816', '+880 2 9564532, 9568634', '16259, +880 2 8331090', 'info@islamibankbd.com', 'https://www.islamibankbd.com',
    'IBBLBDDH', '125', 'ISLAMIBANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 3.0, 1019,
    NULL, 'https://www.banksbd.org/ibbl', 'ibbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'jamunabank', 'Jamuna Bank', 'Jamuna Bank Limited', 'Public Limited Company', '2001', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Corporate Banking", "Islamic Banking", "SME Banking", "International Banking", "NRB Banking", "Offshore Banking", "Deposits", "Loans", "Foreign Remittance"]', 'Jamuna Bank Tower, Plot No. 14, Block C, Bir Uttam AK Khandaker Road, Gulshan 1 , Dhaka 1212 , Bangladesh .', '+880 2 9570912, 9555141', NULL, '16742', 'info@jamunabank.com.bd', 'https://www.jamunabankbd.com',
    'JAMUBDDH', '130', 'JAMUNABANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.6, 625,
    NULL, 'https://www.banksbd.org/jamunabank', 'jamunabank.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'jbl', 'Janata Bank', 'Janata Bank PLC', 'Public Limited Company', '1971', 'Public Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Deposits", "Loans", "Export/ Import Financing", "Micro Credit", "NRB Banking", "Green Banking", "Foreign Remittance"]', '110 Motijheel Commercial Area , Dhaka 1000 , Bangladesh .', '+880 2 223380029, 223380042, 223385042, 223386142', '+880 2 223384644', '+880 1313 080101, +880 1313 080196', 'helpdesk.ejanata@janatabank-bd.com', 'https://www.jb.com.bd',
    'JANBBDDH', '135', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.6, 693,
    NULL, 'https://www.banksbd.org/jbl', 'jbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'mgbl', 'Meghna Bank', 'Meghna Bank PLC', 'Public Limited Company', '2013', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Corporate Banking", "SME Banking", "Agri Banking", "Student Banking", "Deposits", "Loans"]', 'Suvastu Imam Square, 65 Gulshan Avenue, Gulshan 1 , Dhaka 1212 , Bangladesh .', '+880 96 10016736', '+880 2 9857124, 9857128', '16735, +880 96100 16735', 'info@meghnabank.com.bd', 'https://www.meghnabank.com.bd',
    'MGBLBDDH', '275', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 3.5, 1007,
    NULL, 'https://www.banksbd.org/mgbl', 'mgbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'mblb', 'Mercantile Bank', 'Mercantile Bank PLC', 'Public Limited Company', '1999', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Corporate Banking", "Islami Banking", "NRB Banking", "Asset Management", "Capital Markets", "Deposits", "Loans", "Financing", "VISA Pre-paid Cards"]', '61 Dilkusha Commercial Area , Dhaka 1000 , Bangladesh .', '+880 2 223382295, +880 96 12955933', '+880 2 9561213', '16225, +880 96780 16225', 'contact@mblbd.com', 'https://www.mblbd.com',
    'MBLBBDDH', '140', 'MERCANBANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 598,
    NULL, 'https://www.banksbd.org/mblb', 'mblb.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'mdb', 'Midland Bank', 'Midland Bank PLC', 'Public Limited Company', '2013', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Personal Banking", "Corporate Banking", "NRB Banking", "SME Banking", "Deposits", "Financing", "Loans", "Locker Services"]', 'NB Tower, 40/7 Gulshan North Avenue, Curcle 2, Gulshan , Dhaka 1212 , Bangladesh .', '+880 9666 410999, 9611 410999', '+880 2 8837735', '16596, +880 96170 16596, +880 96110 16596', 'info.mdb@midlandbankbd.net', 'https://www.midlandbankbd.net',
    'MDBLBDDH', '285', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.7, 659,
    NULL, 'https://www.banksbd.org/mdb', 'mdb.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'mmbl', 'Modhumoti Bank', 'Modhumoti Bank PLC', 'Public Limited Company', '2013', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Agri and Rural Banking", "SME Banking", "Retail Banking", "Corporate Banking", "Women Entrepreneurs", "Mobile and E-Banking", "Treasury Banking", "School Banking", "Green Banking"]', 'Khandker Tower, Level 7 & 8, 94 Gulshan Avenue, Gulshan 1, Dhaka , Dhaka 1212 , Bangladesh .', '+880 2 55068910', NULL, '16347', 'info@modhumotibankplc.com', 'https://www.modhumotibankplc.com',
    'MODHBDDH', '295', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 598,
    NULL, 'https://www.banksbd.org/mmbl', 'mmbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'mtbl', 'Mutual Trust Bank', 'Mutual Trust Bank PLC', 'Public Limited Company', '1999', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Wholesale Banking", "International Trade Financing", "SME Banking", "NRB Banking", "Privilege Banking", "Deposits", "Loans", "Treasury Operations", "Internet Banking"]', 'MTB Centre, Plot 5, Block SE(D), 26 Gulshan Avenue, Gulshan 1 , Dhaka 1212 , Bangladesh .', '+880 2 58812298, 222283966', '+880 2 222264303', '16219, +880 96040 16219', 'info@mutualtrustbank.com', 'https://www.mutualtrustbank.com',
    'MTBLBDDH', '145', 'MTB', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.7, 657,
    NULL, 'https://www.banksbd.org/mtbl', 'mtbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'nbl', 'National Bank', 'National Bank PLC', 'Public Limited Company', '1983', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Corporate Banking", "Deposits", "Credits"]', 'Plot No. 116/1, Kazi Nazrul Islam Avenue, Banglamotor , Dhaka 1000 , Bangladesh .', '+880 2 41032931-40', '+880 2 9563953, 9669404', '+880 2 41032461-63', 'ho@nblbd.com', 'https://www.nblbd.com',
    'NBLBBDDH', '150', 'NBL', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 637,
    NULL, 'https://www.banksbd.org/nbl', 'nbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'nbp', 'National Bank of Pakistan', 'National Bank of Pakistan', 'Public Limited Company', '1949', 'Private Bank', 'Commercial Bank',
    'Foreign Bank', '["Loans", "Trade Finance", "Foreign Remittance", "Deposits"]', '80 Gulshan Avenue, Circle 1, Gulshan , Dhaka 1212 , Bangladesh .', '+880 2 222281205, 222294861', '+8802 222294791', '+880 2 222281205', 'info@nbp-bd.com', 'https://www.nbp-bd.com',
    'NBPABDDH', '155', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 592,
    NULL, 'https://www.banksbd.org/nbp', 'nbp.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'nccl', 'NCC Bank', 'NCC Bank PLC', 'Public Limited Company', '1985', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Deposits", "Loans", "Treasury Service", "Remittance Service", "SME Banking", "Locker Service", "Offshore Banking", "Remittance", "Pension Scheme", "Debit and Credit Cards"]', '13/1-13/2 Toyenbee Circular Road, Motijheel Commercial Area , Dhaka 1000 , Bangladesh .', '+880 2 223381903-04, 223383981-83', '+880 2 223386290', '+880 96 66700008', 'info@nccbank.com.bd', 'https://www.nccbank.com.bd',
    'NCCLBDDH', '160', 'NCCBANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.6, 645,
    NULL, 'https://www.banksbd.org/nccl', 'nccl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'nrbd', 'NRB Bank', 'NRB Bank PLC', 'Public Limited Company', '2013', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Corporate Banking", "SME Banking", "Retail Banking", "Premium Banking", "NRB Banking", "Saving Schemes", "Retail Loan", "Student Banking", "Payroll Banking", "Trade Financing", "Utility Bill Collections"]', 'Uday Sanz, Plot No. 2/B, Road 134, Block SE(A), South Avenue, Circle 1, Gulshan , Dhaka 1212 , Bangladesh .', '+880 96 66456000', '+880 2 55068729', '16568, +880 96 66456000', 'info@nrbbankbd.com', 'https://www.nrbbankbd.com',
    'NRBDBDDH', '290', 'NRBBANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 625,
    NULL, 'https://www.banksbd.org/nrbd', 'nrbd.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'nrbc', 'NRBC Bank', 'NRBC Bank PLC', 'Public Limited Company', '2013', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Deposit Schemes", "Saving Schemes", "Agri Banking", "SME Banking", "Loans and Finance", "VISA Cards", "Utility Bill Collection Services", "SMS Banking"]', 'Red Crescent Jashim Trade Centre, 114 Motijheel Commercial Area , Dhaka 1000 , Bangladesh .', '+880 2 223353422-30', '+880 2 9573421', '16413, +880 96123 16413', 'info@nrbcommercialbank.com', 'https://www.nrbcommercialbank.com',
    'NRBBBDDH', '260', 'NRBCBANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.6, 618,
    NULL, 'https://www.banksbd.org/nrbc', 'nrbc.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'obl', 'One Bank', 'One Bank PLC', 'Public Limited Company', '1999', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Corporate Banking", "SME Banking", "Green Banking", "Deposits", "Loans", "Finances", "VISA Debit/Credit Cards", "Utility Bill Collections", "e-Statement", "Western Union", "MoneyGram", "Placid NK Corporation", "Xpress Money", "UAE Exchange", "Money2Anywhere", "Al Ansari Exchange", "Trans-Fast Remittance", "Ria Financial Services", "Aftab Currency Exchange"]', 'Simpletree Anarkali, 89 Gulshan Avenue , Dhaka 1212 , Bangladesh .', '+880 9666191001', '+880 2 9134794', '16269, +880 96667 16269', 'obl@onebank.com.bd', 'https://www.onebank.com.bd',
    'ONEBBDDH', '165', 'ONEBANKPLC', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.6, 619,
    NULL, 'https://www.banksbd.org/obl', 'obl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'pdbl', 'Padma Bank', 'Padma Bank PLC', 'Public Limited Company', '2019', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Corporate Banking", "Retail Banking", "Deposits", "Loans", "Agent Banking", "NRB Banking"]', 'Lotus kamal Tower 2, Level 3, 59-61 Gulshan South Avenue, Circle 1, Gulshan , Dhaka 1212 , Bangladesh .', '+880 2 222293375, 222293410, 222288068', '+880 2 222298053', '16612', 'info@padmabankbd.com', 'https://www.padmabankbd.com',
    'FRMSBDDH', NULL, NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 594,
    NULL, 'https://www.banksbd.org/pdbl', 'pdbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'prmr', 'Premier Bank', 'The Premier Bank PLC', 'Public Limited Company', '1999', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Deposits", "Loans", "Lease Finance", "Islamic Banking", "Double Benefit Scheme", "Monthly Income Scheme", "Monthly Savings Scheme", "Education Savings Scheme", "VISA Credit Card", "Travel Card", "MoneyGram", "Western Union", "Xpress Money", "Prabhu Money Transfer", "Dolex Dollar", "Multinet Trust Exchange", "Universal Exchange", "Arabian Exchange", "Joyalukkas Exchange", "Majan Exchange", "Lulu International Exchange", "KMB International Exchange", "Wall Street Finance", "Progoti Exchange"]', 'Iqbal Centre, 42 Kemal Ataturk Avenue, Banani , Dhaka 1213 , Bangladesh .', '+880 2 9820844-8', '+880 2 9820849, 9820808', '16411, +880 96120 16411', 'customer.service@thepremierbankplc.com', 'https://www.thepremierbankplc.com',
    'PRMRBDDH', '235', 'PREMIERBAN', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 642,
    NULL, 'https://www.banksbd.org/prmr', 'prmr.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'prbl', 'Prime Bank', 'Prime Bank PLC', 'Public Limited Company', '1995', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Corporate Banking", "Islamic Banking", "SME", "Agri Banking", "NRB Banking"]', 'Simpletree Anarkali, Holding No. 89, Plot No. 3, Block CWS(A), Gulshan Avenue, Gulshan , Dhaka 1212 , Bangladesh .', '+880 2 55068721-23', '+880 2 9567230, 9560977, 9566215, 9560960', '16218, +880 96040 16218', 'contactcenter@primebank.com.bd', 'https://www.primebank.com.bd',
    'PRBLBDDH', '170', 'PRIMEBANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 615,
    NULL, 'https://www.banksbd.org/prbl', 'prbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'pkb', 'Probashi Kallyan Bank', 'Probashi Kallyan Bank', 'Public Limited Company', '2010', 'Public Bank', 'Specialized Bank',
    'Local Bank', '["Consumer Banking", "Corporate Banking", "Investment Banking"]', 'Probashi Kallyan Bhaban, 71 Eskaton Garden Road , Dhaka 1000 , Bangladesh .', '+880 2 48321979', NULL, '+880 2 48322873', 'info@pkb.gov.bd', 'https://pkb.gov.bd',
    NULL, NULL, NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 592,
    NULL, 'https://www.banksbd.org/pkb', 'pkb.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'pbl', 'Pubali Bank', 'Pubali Bank PLC', 'Public Limited Company', '1972', 'Public Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Corporate Banking", "Islamic Banking", "Deposits", "Pension Schemes", "Savings Schemes", "Loans", "Lease Financing", "SME Financing", "Locker Service"]', '26 Dilkusha Commercial Area , Dhaka 1000 , Bangladesh .', '+880 2 223381614, +880 96 66820000, 96 66820820', '+880 2 9564009', '16253, +880 96660 16253', 'info@pubalibankbd.com', 'https://www.pubalibangla.com',
    'PUBABDDH', '175', 'PUBALIBANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.6, 656,
    NULL, 'https://www.banksbd.org/pbl', 'pbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'rakub', 'Rajshahi Krishi Unnayan Bank', 'Rajshahi Krishi Unnayan Bank', 'Public Limited Company', '1987', 'Public Bank', 'Specialized Bank',
    'Local Bank', '["Deposit Schemes", "Credit Programs", "SME Banking", "Foreign Aided Credit", "Entrepreneurs Programs", "Poverty Alleviation Programs", "Green Banking", "Tea Credit"]', 'Holding No. 272, Banalata Commerical Area, Airport Road , Rajshahi 6210 , Bangladesh .', '+880 721 862439', NULL, NULL, 'info@rakub.org.bd', 'https://www.rakub.org.bd',
    NULL, '180', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 593,
    NULL, 'https://www.banksbd.org/rakub', 'rakub.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'rbl', 'Rupali Bank', 'Rupali Bank PLC', 'Public Limited Company', '1986', 'Public Bank', 'Commercial Bank',
    'Local Bank', '["Deposits", "Monthly Profit Schemes", "Monthly Earning Schemes", "Monthly Savings Schemes", "Students'' Savings Account", "ATM Services", "Utility Services"]', 'Rupali Bhaban, 34 Dilkusha Commercial Area , Dhaka 1000 , Bangladesh .', '+880 2 9551624-25, 9551525, 9552184', '+880 2 9564148, 9552671', '16495, +880 96140 16495', 'info@rupalibank.org', 'https://www.rupalibank.com.bd',
    'RUPBBDDH', '185', 'RUPALIBANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.6, 652,
    NULL, 'https://www.banksbd.org/rbl', 'rbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'sbac', 'SBAC Bank', 'South Bangla Agriculture & Commerce Bank PLC', 'Public Limited Company', '2013', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Personal Banking", "Corporate Banking", "SME Banking", "Agricultural Banking", "Deposits", "Loans", "Trade Finance", "Debit/ Credit Cards", "Women Entrepreneurship", "Offshore Banking", "Women Entrepreneur", "Remittance"]', 'BSC Tower, 5th-16th Floor, 2-3 Rajuk Avenue, Motijheel , Dhaka 1000 , Bangladesh .', '+880 2 41052811-14', NULL, '16327, +880 96110 16327', 'info@sbacbank.com', 'https://www.sbacbank.com',
    'SBACBDDH', '270', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 605,
    NULL, 'https://www.banksbd.org/sbac', 'sbac.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'sjbl', 'Shahjalal Islami Bank', 'Shahjalal Islami Bank PLC', 'Public Limited Company', '2001', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Deposits", "Investment", "Green Banking", "VISA Cards", "SME Banking", "Utility Bills", "Locker Services", "Western Union", "Zenj Exchange", "MoneyGram", "Money Exchange", "Arabian Exchange", "IME", "Al-Ahalia money exchange", "Xpress Money"]', 'Shahjalal Islami Bank Tower, Plot No. 4, Block CWN(C), Gulshan Avenue , Dhaka 1212 , Bangladesh .', '+880 2 222264736', '+880 2 222297607', '16302, +880 96123 16302', 'sjiblho@sjiblbd.com', 'https://www.sjiblbd.com',
    'SJBLBDDH', '190', 'SHAHJABANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 624,
    NULL, 'https://www.banksbd.org/sjbl', 'sjbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'smbl', 'Shimanto Bank', 'Shimanto Bank PLC', 'Public Limited Company', '2016', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Banking services", "Consumer Banking", "Corporate Banking", "Investment Banking"]', 'Shimanto Shamvar, Shimanto Square, Road 2, Bir Uttam MA Rob Sarak, Dhanmondi , Dhaka 1205 , Bangladesh .', '+880 96 10871000', NULL, '16790, +880 96 12880000', 'information.desk@shimantobank.com', 'https://www.shimantobank.com',
    'SHMTBDDD', NULL, NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 590,
    NULL, 'https://www.banksbd.org/smbl', 'smbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'sibl', 'Social Islami Bank', 'Social Islami Bank PLC', 'Public Limited Company', '1995', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "Institutional Banking", "SME Banking", "Investments", "Deposits", "School Banking", "VISA Credit Cards", "Offshore Banking"]', 'City Center, Level 19-23 & 28-29, 90/1 Motijheel Commercial Area , Dhaka 1000 , Bangladesh .', '+880 96 77716491', '+880 2 7113481', '16491, +880 96 12001122', 'info@sibl-bd.com', 'https://www.siblbd.com',
    'SOIVBDDH', '195', 'SIBL', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 617,
    NULL, 'https://www.banksbd.org/sibl', 'sibl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'sbl', 'Sonali Bank', 'Sonali Bank PLC', 'Public Limited Company', '1972', 'Public Bank', 'Commercial Bank',
    'Local Bank', '["Corporate Banking", "Project Finance", "SME Finance", "Consumer Credit", "International Trade", "Trade Finance", "Loan Syndication", "Foreign Exchange Dealing", "Rural and Micro credit", "NGO-Linkage Loan", "Investment", "Government Treasury Function", "Money Market Operation", "Capital Market Operation", "Remittance", "Locker"]', '35-42, 44 Motijheel Commercial Area , Dhaka 1000 , Bangladesh .', '+880 2 9550426-31, 33, 34, 9552924', '+880 2 9561410, 9552007', '16639, +880 96100 16639', 'info@sonalibank.com.bd', 'https://www.sonalibank.com.bd',
    'BSONBDDH', '200', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.8, 861,
    NULL, 'https://www.banksbd.org/sbl', 'sbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'sebl', 'Southeast Bank', 'Southeast Bank PLC', 'Public Limited Company', '1995', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Conventional Banking", "Islamic Banking", "Loans and Advances", "Deposits", "Monthly Savings Scheme", "Double Benefit Scheme", "Pension Savings Scheme", "Western Union", "MoneyGram", "Ria", "Xpress Money", "Trans-Fast", "Alahalia", "Wall Street", "UAE Xchange", "US Money Express"]', 'Eunoos Trade Center, 52-53 Dilkusha Commercial Area , Dhaka 1000 , Bangladesh .', '+880 2 9571115, 7160866, 9555466, 7173793', '+880 2 9550093', '16206, +880 96123 16206', 'info@southeastbank.com.bd', 'https://www.southeastbank.com.bd',
    'SEBDBDDH', '205', 'SOUTHEASTB', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.6, 619,
    NULL, 'https://www.banksbd.org/sebl', 'sebl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'scb', 'Standard Chartered Bank', 'Standard Chartered Bank', 'Public Limited Company', '1948', 'Private Bank', 'Commercial Bank',
    'Foreign Bank', '["Personal Banking", "Priority Banking", "Islamic Banking", "Business", "Corporate & Institutional", "Green Banking"]', 'Portlink Tower, 67 Gulshan Avenue , Dhaka 1212 , Bangladesh .', '+880 96 66357204', NULL, '16233, +880 96 66777111', 'customer.enquiries@sc.com', 'https://www.sc.com/bd',
    'SCBLBDDX', '215', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 3.0, 1464,
    NULL, 'https://www.banksbd.org/scb', 'scb.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'sdbl', 'Standard Islami Bank', 'Standard Islami Bank PLC', 'Public Limited Company', '1999', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["General Banking", "Merchant Banking", "Deposits", "Credits and Loans", "Visa Credit Card", "Foreign Exchange"]', 'Metropoliton Chamber Building, 122-124 Motijheel C/A, , Dhaka 1000 , Bangladesh .', '+880 2 223358385, 223385106, 223357913', '+880 2 7176367', '16786, +880 96777 16786', 'sblho@standardbankbd.com', 'https://www.standardbankbd.com',
    'SDBLBDDH', '210', 'STANDBANKL', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 598,
    NULL, 'https://www.banksbd.org/sdbl', 'sdbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'sbi', 'State Bank of India', 'State Bank of India', 'Public Limited Company', '1806', 'Private Bank', 'Commercial Bank',
    'Foreign Bank', '["Personal Banking", "Corporate Banking", "SME Banking", "Deposits", "Loans", "Remittance", "Foreign Exchange", "Travel Card"]', 'Navana Pristine Pavilion, 128 Gulshan Avenue, Circle 2 , Dhaka 1212 , Bangladesh .', '+880 2 222289152, 8835601', '+880 2 222294526', '+880 22 22289152, 2 8835601', 'vpops.co.bd@statebank.com', 'https://bd.statebank',
    'SBINBDDH', '220', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 606,
    NULL, 'https://www.banksbd.org/sbi', 'sbi.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'ttbl', 'Trust Bank', 'Trust Bank PLC', 'Public Limited Company', '1999', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Retail Banking", "SME Banking", "Islamic Banking", "Corporate Banking", "International Banking", "Mobile Banking", "Deposits", "Double Schemes", "Saving Schemes", "Loans", "Western Union"]', 'Shadhinata Tower, Bir Srestha Shaheed Jahangir Gate, Dhaka Cantonment , Dhaka 1206 , Bangladesh .', '+880 2 58831000-06, 44870060-66', '+880 2 44870051', '16201, +880 96110 16201', 'info@tblbd.com', 'https://www.tblbd.com',
    'TTBLBDDH', '240', 'TRUSTBANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.6, 636,
    NULL, 'https://www.banksbd.org/ttbl', 'ttbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'ubl', 'Union Bank', 'Union Bank PLC', 'Public Limited Company', '2013', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Deposits", "Investments", "Pension Scheme", "Millionaire Deposit Scheme", "Monthly Deposit Scheme", "Double Deposit Scheme", "Triple Deposit Scheme", "Marriage Deposit Scheme", "Mohor Deposit Scheme", "Hajj Deposit Scheme", "Student Deposit Scheme", "Treasury Service"]', 'Bahela Tower, 72 Gulshan Avenue, Circle 1, Gulshan , Dhaka 1212 , Bangladesh .', '+880 2 222297310', NULL, '16716, +880 96 66712616', 'info@unionbank.com.bd', 'https://www.unionbank.com.bd',
    'UBLDBDDH', '265', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 3.8, 1248,
    NULL, 'https://www.banksbd.org/ubl', 'ubl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'ucb', 'United Commercial Bank', 'United Commercial Bank PLC', 'Public Limited Company', '1983', 'Private Bank', 'Commercial Bank',
    'Local Bank', '["Personal Banking", "NRB Banking", "SME Banking", "Corporate Banking", "Personal Loans", "Corporate Banking Loans", "VISA Debit/ Credit Cards", "Offshore Banking", "Locker Services", "SMS Banking", "Remittance"]', 'Bulus Center, Plot CWS-(A)-1, Road 34, Gulshan Avenue , Dhaka 1212 , Bangladesh .', '+880 2 55668070, +880 9611999999', '+880 2 55668070-6000', '16419, +880 96100 16419', 'info@ucb.com.bd', 'https://www.ucb.com.bd',
    'UCBLBDDH', '245', 'UCBL', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.7, 700,
    NULL, 'https://www.banksbd.org/ucb', 'ucb.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'utbl', 'Uttara Bank', 'Uttara Bank PLC', 'Public Limited Company', '1965', 'Public Bank', 'Commercial Bank',
    'Local Bank', '["Loan Schemes", "Deposits", "SME Banking", "International Banking", "Card Services", "Locker Services"]', 'Uttara Bank Bhaban, 47 Shahid Bir Uttam Asfaqus Samad Sarak (Former 90 Motijheel C/A) , Dhaka 1000 , Bangladesh .', '+880 2 223381164, 223384284', '+880 2 7168376, 9572102, 9561392', '16645, +880 96109 16645', 'prd@uttarabank-bd.com', 'https://www.uttarabank-bd.com',
    'UTBLBDDH', '250', 'UTTARABANK', '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 604,
    NULL, 'https://www.banksbd.org/utbl', 'utbl.jpg'
);
INSERT INTO banks (
    slug, name, registered_name, legal_status, established, type, category,
    origin, services, address, telephone, fax, call_center, email, website,
    swift_code, bank_code, stock_code, service_hours, rating, rating_votes,
    description, url, logo_file
) VALUES (
    'wooribank', 'Woori Bank', 'Woori Bank Bangladesh', 'Public Limited Company', '1899', 'Private Bank', 'Commercial Bank',
    'Foreign Bank', '["Deposits", "Loans", "Remittance", "Foreign Exchange", "Export/ Import"]', 'Suvastu Imam Square, 65 Gulshan Avenue , Dhaka 1212 , Bangladesh .', '+880 96 10960921 (Extn. 20100)', '+880 2 8813274, 8813241', '+880 22 26601770-5', 'info@wooribankbd.com', 'https://go.wooribank.com/bd/ib/main/IbMain.do',
    'HVBKBDDH', '255', NULL, '{"Sunday": "10:00 am - 4:00 pm", "Monday": "10:00 am - 4:00 pm", "Tuesday": "10:00 am - 4:00 pm", "Wednesday": "10:00 am - 4:00 pm", "Thursday": "10:00 am - 4:00 pm", "Friday": "Closed", "Saturday": "Closed"}', 2.5, 620,
    NULL, 'https://www.banksbd.org/wooribank', 'wooribank.jpg'
);

-- Seed MFS Data
INSERT INTO mfs (
    slug, name, registered_name, type, parent, established,
    website, call_center, email, logo_file, description
) VALUES (
    'bkash', 'bKash', 'bKash Limited', 'MFS', 'BRAC Bank PLC', '2011',
    'https://www.bkash.com', '16247', 'support@bkash.com', 'bkash.png', 'bKash is the leading mobile financial service in Bangladesh, operating under the authority of Bangladesh Bank as a subsidiary of BRAC Bank PLC.'
);
INSERT INTO mfs (
    slug, name, registered_name, type, parent, established,
    website, call_center, email, logo_file, description
) VALUES (
    'nagad', 'Nagad', 'Nagad Limited', 'MFS', 'Bangladesh Post Office', '2019',
    'https://nagad.com.bd', '16167', 'info@nagad.com.bd', 'nagad.jpg', 'Nagad is a popular digital financial service operating under the Postal Division of the Government of Bangladesh.'
);
INSERT INTO mfs (
    slug, name, registered_name, type, parent, established,
    website, call_center, email, logo_file, description
) VALUES (
    'rocket', 'Rocket', 'DBBL Mobile Banking (Rocket)', 'MFS', 'Dutch-Bangla Bank PLC', '2011',
    'https://www.dutchbanglabank.com/rocket/rocket.html', '16216', 'rocket@dbbl.com.bd', 'rocket.jpeg', 'Rocket is the pioneer mobile financial service in Bangladesh, launched by Dutch-Bangla Bank PLC.'
);
INSERT INTO mfs (
    slug, name, registered_name, type, parent, established,
    website, call_center, email, logo_file, description
) VALUES (
    'upay', 'Upay', 'UCB Fintech Company Limited (upay)', 'MFS', 'United Commercial Bank PLC (UCB)', '2021',
    'https://www.upaybd.com', '16268', 'info@upaybd.com', 'upay.png', 'Upay is a digital financial service provider and subsidiary of United Commercial Bank PLC.'
);

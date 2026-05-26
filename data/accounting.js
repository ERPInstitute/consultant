// Auto-generated Accounting module v2 — Basic (AC1) + Advanced (AC2)
// Updated 2026: TT 30/2025 (sửa đổi TT 45), NĐ 70/2025 e-invoice, QĐ 345/QĐ-BTC IFRS roadmap
window.ACC_DATA = {
  "theory": [
    {
      "title": "CHƯƠNG AC1.1: PHƯƠNG TRÌNH KẾ TOÁN & 3 BÁO CÁO TÀI CHÍNH",
      "sections": [
        {
          "title": "1.1 Phương trình kế toán cơ bản",
          "paras": [
            "Phương trình kế toán: Tài sản (Assets) = Nợ phải trả (Liabilities) + Vốn chủ sở hữu (Equity). Đây là nền tảng của mọi hệ thống kế toán kép trên thế giới. Mọi giao dịch đều phải giữ phương trình này cân bằng.",
            "Mở rộng: Assets = Liabilities + Equity + (Revenue − Expense). Doanh thu làm tăng Equity, Chi phí làm giảm Equity. Cuối kỳ, R−E (lãi/lỗ) được kết chuyển sang Retained Earnings (Lợi nhuận chưa phân phối).",
            "Hệ quả: nếu phương trình lệch sau khi post 1 giao dịch → có lỗi double-entry. ERP như BC, SAP, Oracle có check tự động không cho phép post nếu Debit ≠ Credit.",
            "Consultant CẦN nhớ: bất kỳ business event nào (mua, bán, trả lương, khấu hao...) đều có 2 mặt — 1 chi 1 thu, 1 tăng 1 giảm. Đó là vì sao sổ \"kép\" (double-entry)."
          ]
        },
        {
          "title": "1.2 Ba báo cáo tài chính chính (3 Financial Statements)",
          "paras": [
            "Balance Sheet (Bảng Cân đối Kế toán — BCĐKT): chụp ảnh tài sản, nợ, vốn TẠI MỘT THỜI ĐIỂM (ví dụ 31/12). Cấu trúc: Assets ở 1 bên, Liabilities + Equity ở bên kia, 2 bên = nhau.",
            "Income Statement / P&L (Báo cáo Kết quả Kinh doanh — KQKD): doanh thu, chi phí, lãi/lỗ TRONG MỘT KỲ (ví dụ tháng 1/2026). Công thức cơ bản: Doanh thu − Giá vốn − Chi phí hoạt động − Lãi vay − Thuế = Lợi nhuận sau thuế.",
            "Cash Flow Statement (Báo cáo Lưu chuyển Tiền tệ — LCTT): nguồn và sử dụng tiền THỰC TRONG MỘT KỲ. 3 hoạt động: Operating (kinh doanh), Investing (đầu tư), Financing (tài chính). Đây là báo cáo \"chống chiêu trò kế toán\" vì tiền thật khó fake.",
            "Mối quan hệ: Net Income trong P&L → cộng dồn vào Retained Earnings trong BS. Net Cash Flow ảnh hưởng số dư tiền (Cash) trong BS. Cả 3 báo cáo connect chặt chẽ. ERP tự động generate cả 3."
          ]
        },
        {
          "title": "1.3 Phân biệt P&L vs Balance Sheet — KEY cho consultant",
          "paras": [
            "P&L = phim (period). BS = ảnh (point-in-time). Nhân viên bán hàng tốt làm P&L đẹp tháng này. CFO giỏi làm BS lành mạnh năm này.",
            "Account types: TÀI SẢN (Asset) là BS account. CHI PHÍ (Expense) là P&L account. DOANH THU (Revenue) là P&L. NỢ (Liability) và VỐN (Equity) là BS.",
            "Sai lầm phổ biến: nghĩ \"mua hàng tồn kho\" là chi phí. KHÔNG — đó là tăng Asset (Inventory), giảm Asset khác (Cash) hoặc tăng Liability (AP). Chỉ khi BÁN hàng đó, mới chuyển từ Inventory → COGS (chi phí).",
            "Consultant ERP phải hiểu rõ: mọi item trên BC khi GẶP transaction sẽ tạo G/L Entry. Sai posting group = sai account type = sai báo cáo."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC1.2: SỔ KÉP — DEBIT & CREDIT",
      "sections": [
        {
          "title": "2.1 Nguyên tắc Debit/Credit",
          "paras": [
            "Mỗi tài khoản có \"bản chất\" tăng giảm khác nhau. Nguyên tắc DEAD-CLIC (mnemonic Mỹ):",
            "DEAD = Debit để tăng Expense, Asset, Drawing/Dividend. Credit để giảm.",
            "CLIC = Credit để tăng Liability, Income, Capital/Equity. Debit để giảm.",
            "Ví dụ: Mua hàng tồn kho 100M tiền mặt → Debit Inventory 100M (Asset tăng) / Credit Cash 100M (Asset giảm).",
            "Ví dụ: Bán hàng 200M chưa thu tiền → Debit AR 200M (Asset tăng) / Credit Sales Revenue 200M (Income tăng).",
            "Consultant cần luyện đến mức \"thấy là biết Debit/Credit\" — vì khi setup Posting Group sai trong BC, accountant sẽ phàn nàn ngay."
          ]
        },
        {
          "title": "2.2 Journal Entry (Bút toán) — cấu trúc chuẩn",
          "paras": [
            "Bút toán = ít nhất 2 dòng: 1 Debit + 1 Credit. Tổng Debit = Tổng Credit (luôn luôn).",
            "Mỗi entry có: Date (ngày phát sinh), Description (diễn giải), Account, Debit Amount, Credit Amount, Dimension/Project/Customer (analytical).",
            "Compound journal entry: 1 entry có nhiều dòng Debit và/hoặc nhiều dòng Credit. Vẫn phải cân.",
            "Trong BC, mọi document (Sales Invoice, Purchase Invoice, Item Adjustment, Payment...) đều TỰ ĐỘNG sinh G/L Entry phía sau theo posting setup. Đó là sức mạnh của ERP — không phải nhập tay journal."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC1.3: CHU TRÌNH KẾ TOÁN (ACCOUNTING CYCLE)",
      "sections": [
        {
          "title": "3.1 9 bước chu trình kế toán",
          "paras": [
            "1. Nhận diện giao dịch (Identify transaction) — chứng từ kế toán (hoá đơn, phiếu thu/chi, hợp đồng).",
            "2. Ghi nhật ký (Record in Journal) — bút toán theo trình tự thời gian.",
            "3. Chuyển sổ cái (Post to Ledger) — phân loại theo tài khoản.",
            "4. Lập bảng cân đối thử (Trial Balance) chưa điều chỉnh — kiểm tra cân Debit/Credit.",
            "5. Bút toán điều chỉnh cuối kỳ (Adjusting Entries) — accruals, prepayments, depreciation, allowance.",
            "6. Trial Balance đã điều chỉnh (Adjusted Trial Balance).",
            "7. Lập báo cáo tài chính (Financial Statements) — P&L, BS, CF.",
            "8. Bút toán khoá sổ (Closing Entries) — kết chuyển Revenue/Expense → Retained Earnings.",
            "9. Post-closing Trial Balance — chuẩn bị kỳ kế tiếp."
          ]
        },
        {
          "title": "3.2 Trong ERP, các bước này tự động hoá thế nào",
          "paras": [
            "Bước 1-3: BC tự động khi post document. Không nhập tay journal cho 99% giao dịch.",
            "Bước 4: BC có G/L Trial Balance report — chạy bất kỳ lúc nào.",
            "Bước 5: SOME automated (depreciation chạy job hàng tháng, FX revaluation chạy lệnh), SOME manual (accruals tùy biến).",
            "Bước 6-7: Auto.",
            "Bước 8 (Closing Entry): Chỉ chạy 1 LẦN/NĂM trong BC qua \"Close Income Statement\". KHÔNG phải cuối mỗi tháng. Đây là bẫy phổ biến cho consultant fresher.",
            "Bước 9: Auto sau Close Income Statement."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC1.4: GHI NHẬN DOANH THU (REVENUE RECOGNITION) — CƠ BẢN",
      "sections": [
        {
          "title": "4.1 Nguyên tắc cơ bản",
          "paras": [
            "Doanh thu được ghi nhận khi: (1) Đã chuyển giao quyền sở hữu / kiểm soát hàng hoá hoặc đã cung cấp dịch vụ, (2) Số tiền có thể đo lường tin cậy, (3) Có khả năng thu được tiền.",
            "Quan trọng: Doanh thu KHÔNG phải khi NHẬN TIỀN, mà khi GIAO HÀNG/CUNG CẤP DỊCH VỤ. Đây là cơ sở dồn tích (Accrual Basis).",
            "Ví dụ: Khách trả trước 100M cho dịch vụ tháng sau → KHÔNG ghi doanh thu, ghi Unearned Revenue (Liability). Sang tháng sau khi cung cấp → chuyển sang Revenue.",
            "Ví dụ ngược: Giao hàng tháng 12 nhưng khách chưa trả tiền → VẪN ghi Revenue (và AR) tháng 12. Đây là nguyên tắc \"matching\" — match revenue với expense cùng kỳ."
          ]
        },
        {
          "title": "4.2 Sales Invoice trong BC — luồng G/L Entry sinh ra",
          "paras": [
            "Khi post Sales Invoice 100M cho khách + VAT 10%:",
            "Debit: AR (Customer Posting Group) 110M",
            "Credit: Sales Revenue (Customer Posting Group + General Business + General Product Posting Group) 100M",
            "Credit: VAT Payable (VAT Posting Setup) 10M",
            "Đồng thời (nếu item type = Inventory):",
            "Debit: COGS (Inventory Posting Setup) X (cost của hàng)",
            "Credit: Inventory (Inventory Posting Setup) X",
            "Consultant CẦN hiểu mối quan hệ 5 Posting Group → G/L Account để debug khi accountant báo \"sai số\"."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC1.5: CHI PHÍ (EXPENSES) — COGS, OPEX, DEPRECIATION",
      "sections": [
        {
          "title": "5.1 Phân loại chi phí",
          "paras": [
            "COGS (Cost of Goods Sold — Giá vốn hàng bán): chi phí trực tiếp tạo ra sản phẩm đã bán. Trong BC, COGS sinh tự động khi post Sales Invoice cho Inventory Item.",
            "OpEx (Operating Expense — Chi phí hoạt động): bán hàng, quản lý, R&D, depreciation, lương... Không trực tiếp gắn vào sản phẩm.",
            "Non-Operating Expense: lãi vay, lỗ chênh lệch tỷ giá, thiệt hại bất thường.",
            "Tax Expense: thuế TNDN.",
            "Cấu trúc P&L: Doanh thu − COGS = Gross Profit − OpEx = Operating Profit (EBIT) − Lãi vay = Profit before Tax − Tax = Net Profit.",
            "Consultant cần biết khách dùng COGS hay Period Expense (cho service company) → setup Inventory Posting Group khác nhau."
          ]
        },
        {
          "title": "5.2 Khấu hao (Depreciation) — cơ bản",
          "paras": [
            "Khấu hao = phân bổ chi phí tài sản cố định (Fixed Asset) qua nhiều kỳ sử dụng. Lý do: 1 cái máy 5 tỷ dùng 10 năm → KHÔNG ghi 5 tỷ chi phí năm mua, mà chia 500M/năm × 10 năm.",
            "Phương pháp phổ biến VN: Đường thẳng (Straight-Line) — chia đều theo năm. Cost / Useful Life = Depreciation per year.",
            "Ví dụ: Mua máy 1.2 tỷ, sử dụng 10 năm, salvage value 200M → Depreciable amount = 1B → 100M/năm = ~8.33M/tháng.",
            "Bút toán hàng tháng: Debit Depreciation Expense / Credit Accumulated Depreciation.",
            "Trong BC FA module: chạy \"Calculate Depreciation\" job → sinh FA Journal → post.",
            "Khung khấu hao FA tại VN: Thông tư 45/2013/TT-BTC + bổ sung mới nhất Thông tư 30/2025/TT-BTC (hiệu lực 15/7/2025) — bổ sung khoản 12 Điều 9 cho phép DNNN 100% vốn nhà nước thuộc Đề án xử lý ngành Công Thương được TẠM GIÃN/HOÃN trích khấu hao TSCĐ chưa sử dụng."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC1.6: AR & AP — CÔNG NỢ",
      "sections": [
        {
          "title": "6.1 Accounts Receivable (Phải thu khách hàng)",
          "paras": [
            "AR = số tiền khách hàng còn nợ. Tăng khi bán chịu, giảm khi khách trả tiền.",
            "KPI quan trọng: DSO (Days Sales Outstanding) = AR / Daily Revenue × 365. Thấp hơn industry average = tốt.",
            "Aging report: phân loại AR theo tuổi nợ — Current (0-30), 31-60, 61-90, 91-180, >180. >90 ngày là dấu hiệu cảnh báo.",
            "Bad Debt: nợ khó đòi. Có 2 cách: (1) Direct Write-off — xoá khi chắc chắn không thu được, (2) Allowance Method — lập dự phòng theo % AR.",
            "Trong BC: Customer card → Statistics → Balance. Customer Posting Group map AR account.",
            "Đặc thù VN: hoá đơn điện tử (NĐ 123/2020 + NĐ 70/2025 hiệu lực 2026) phải có MST khách, không thì không hợp lệ."
          ]
        },
        {
          "title": "6.2 Accounts Payable (Phải trả nhà cung cấp)",
          "paras": [
            "AP = số tiền doanh nghiệp còn nợ vendor. Tăng khi mua chịu, giảm khi trả tiền.",
            "KPI: DPO (Days Payable Outstanding) = AP / Daily Purchase × 365. Cao hơn = giữ tiền lâu hơn = tốt cho cash flow, NHƯNG quá cao có thể hỏng relationship vendor.",
            "Cash conversion cycle = DSO + DIO − DPO. CFO target: cycle thấp = cash hiệu quả.",
            "Discount thanh toán sớm (Payment Discount): vendor offer 2/10 net 30 = giảm 2% nếu trả trong 10 ngày, hạn cuối 30 ngày. ROI tính: 2/98 × 365/20 ≈ 37%/năm — RẤT hời.",
            "Trong BC: Vendor card → Posting Group map AP account. Payment Terms map ngày deadline + discount."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC1.7: TỒN KHO — PHƯƠNG PHÁP TÍNH GIÁ VỐN",
      "sections": [
        {
          "title": "7.1 Các phương pháp valuation tồn kho",
          "paras": [
            "FIFO (First-In, First-Out): hàng nhập trước → xuất trước. Giá vốn = giá lô nhập sớm nhất.",
            "Weighted Average: giá vốn = trung bình có trọng số. Mỗi lần nhập, tính lại WAC = (Inventory Value + Receipt Value) / (Inventory Qty + Receipt Qty).",
            "Specific Identification: theo dõi từng lô cụ thể. Phù hợp hàng giá trị cao, unique (xe hơi, kim cương, máy bay).",
            "Standard Cost: định giá chuẩn (target cost) ngay đầu kỳ. Variance giữa actual và standard track riêng. Dùng cho manufacturing.",
            "LIFO (Last-In, First-Out): KHÔNG được phép tại VN (Thông tư 200/2014 + VAS 02) và IFRS. Chỉ US GAAP cho phép.",
            "Trong BC: Item Card → Costing Method. FIFO/LIFO/Specific/Average/Standard. KHÔNG đổi được sau khi có giao dịch (rất quan trọng)."
          ]
        },
        {
          "title": "7.2 Adjust Cost — Item Entries (Cập nhật giá vốn)",
          "paras": [
            "BC dùng \"Item Application\" — link Receipt → Shipment. Khi giá receipt thay đổi (vì invoice đến sau, vì revaluation), COGS đã post cũng phải điều chỉnh.",
            "Job \"Adjust Cost — Item Entries\" chạy → BC tính lại giá vốn theo costing method và update lên các Sales/Output đã post.",
            "PHẢI chạy hàng đêm (hoặc trước đóng kỳ) — không chạy = số liệu COGS sai = Inventory G/L sai = báo cáo lệch.",
            "Sau khi Adjust Cost xong, MỚI chạy \"Post Inventory Cost to G/L\" để sync sub-ledger ↔ G/L.",
            "Consultant CẦN hiểu sequence: Adjust Cost → Post Inventory Cost to G/L → Reconcile với G/L Inventory Account."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC1.8: TÀI SẢN CỐ ĐỊNH (FIXED ASSET)",
      "sections": [
        {
          "title": "8.1 Điều kiện ghi nhận FA — TT 45/2013 + TT 30/2025",
          "paras": [
            "Theo TT 45/2013/TT-BTC (gốc, vẫn áp dụng) + TT 30/2025/TT-BTC (sửa đổi, hiệu lực 15/7/2025): tài sản được ghi nhận FA khi có đủ 3 điều kiện: (1) Chắc chắn thu được lợi ích kinh tế tương lai, (2) Có thời gian sử dụng > 1 năm, (3) Nguyên giá ≥ 30 triệu đồng.",
            "Dưới 30 triệu hoặc thời gian sử dụng dưới 1 năm → tính vào CCDC (Công cụ dụng cụ — Tools and Supplies), phân bổ qua kỳ ngắn hơn.",
            "Điểm MỚI tại TT 30/2025/TT-BTC (Khoản 12 Điều 9 bổ sung): Cho phép DNNN có 100% vốn nhà nước thuộc Đề án xử lý các tồn tại ngành Công Thương (QĐ 1468/QĐ-TTg) được CHỦ ĐỘNG giãn/tạm hoãn trích khấu hao đối với TSCĐ chưa có công năng sử dụng, chưa tham gia SXKD. Đây là exception cho 1 nhóm doanh nghiệp cụ thể — phần lớn doanh nghiệp tư nhân không bị ảnh hưởng.",
            "Loại FA: Tangible (hữu hình — nhà xưởng, máy móc), Intangible (vô hình — phần mềm, bản quyền, goodwill).",
            "Cost capitalization: chi phí được tính vào nguyên giá FA bao gồm giá mua + thuế không hoàn lại + vận chuyển + lắp đặt + chạy thử. KHÔNG bao gồm training (OpEx)."
          ]
        },
        {
          "title": "8.2 Vòng đời FA trong ERP",
          "paras": [
            "1. Acquisition (Mua/Xây): tạo FA card, post acquisition value.",
            "2. Depreciation hàng tháng: chạy job, sinh entry tự động.",
            "3. Maintenance / Upgrade: tăng nguyên giá nếu major upgrade, expense nếu maintenance.",
            "4. Transfer (Điều chuyển): giữa department, location, project — chỉ thay đổi dimension.",
            "5. Revaluation (Đánh giá lại): tăng/giảm giá trị theo định kỳ (rare in VN, common in IFRS).",
            "6. Disposal (Thanh lý): sale, scrap, donation. Tính gain/loss = Proceeds − Net Book Value.",
            "Trong BC: FA module có FA Setup, FA Posting Setup, Depreciation Book, FA Journal, FA Reclassification Journal."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC1.9: VAT — THUẾ GIÁ TRỊ GIA TĂNG + E-INVOICE 2026",
      "sections": [
        {
          "title": "9.1 Khái niệm VAT cơ bản",
          "paras": [
            "VAT (Value Added Tax — Thuế GTGT): thuế gián thu, người tiêu dùng cuối cùng chịu, doanh nghiệp thu hộ nộp Nhà nước.",
            "Tại VN 2026: 3 mức thuế suất chính: 0% (xuất khẩu), 5% (thiết yếu — nước sạch, gạo, đường, sữa cho trẻ em, dược phẩm), 10% (mặc định). Mức 8% (giảm tạm thời) theo NQ 142/2024/QH15 và các nghị định gia hạn — kiểm tra hiệu lực từng kỳ.",
            "VAT Đầu vào (Input VAT): VAT trên hoá đơn mua hàng — được khấu trừ nếu có hoá đơn hợp lệ.",
            "VAT Đầu ra (Output VAT): VAT trên hoá đơn bán hàng — phải nộp.",
            "Số phải nộp = Output VAT − Input VAT (nếu dương). Nếu âm → khấu trừ tiếp kỳ sau hoặc xin hoàn (rare, complex)."
          ]
        },
        {
          "title": "9.2 E-invoice theo NĐ 70/2025 (hiệu lực 1/6/2025, mandatory 2026)",
          "paras": [
            "NĐ 70/2025/NĐ-CP ngày 20/3/2025 sửa đổi NĐ 123/2020/NĐ-CP về hoá đơn chứng từ. Hiệu lực từ 1/6/2025, các điều khoản chính hoàn toàn mandatory từ 2026.",
            "Yêu cầu kỹ thuật: mỗi hoá đơn phải có Mã hàng (định danh nội bộ DN), MST khách (nếu B2B), chữ ký số doanh nghiệp.",
            "Hoá đơn từ máy tính tiền: với DN bán lẻ trực tiếp đến người tiêu dùng cuối có doanh thu ≥1 tỷ/năm — phải sử dụng hoá đơn điện tử khởi tạo từ máy tính tiền có kết nối chuyển dữ liệu với cơ quan thuế.",
            "Vendor connector chứng nhận TCT: Viettel SInvoice, MISA meInvoice, VNPT-Invoice, FPT.eInvoice, EFY-Invoice — phải dùng vendor đã được TCT công nhận, không thể tự build.",
            "Trong BC: VAT Posting Setup matrix Business × Product Posting Group → ra VAT Calculation Type + VAT %. Cuối kỳ VAT Settlement chuyển net sang VAT Settlement account. Integration với e-invoice qua API connector vendor."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC1.10: PERIOD CLOSE CƠ BẢN",
      "sections": [
        {
          "title": "10.1 Checklist đóng kỳ cuối tháng",
          "paras": [
            "1. Post mọi Sales Invoice, Purchase Invoice của kỳ.",
            "2. Bank Reconciliation — khớp bank statement với G/L Bank Account.",
            "3. Adjust Cost — Item Entries (cho Inventory).",
            "4. Post Inventory Cost to G/L.",
            "5. Adjust Exchange Rates (nếu có ngoại tệ) — revalue AR/AP/Bank ngoại tệ.",
            "6. Calculate Depreciation cho FA.",
            "7. Accruals — trích trước chi phí thực phát sinh nhưng chưa có hoá đơn (lương, điện chưa nhận hoá đơn...).",
            "8. Allowance for doubtful debt.",
            "9. Reconciliation: AR Aging = G/L AR, AP Aging = G/L AP, Inventory Value = G/L Inventory, Bank Rec = G/L Bank.",
            "10. Trial Balance review + CFO sign-off → Close Period."
          ]
        },
        {
          "title": "10.2 Bẫy phổ biến của consultant fresher",
          "paras": [
            "Bẫy 1: Chạy \"Close Income Statement\" cuối mỗi THÁNG → SAI. Chỉ chạy 1 LẦN/NĂM sau audit ký BCTC.",
            "Bẫy 2: Quên Adjust Cost trước Post Inventory Cost to G/L → COGS sai mãi mãi.",
            "Bẫy 3: Skip Bank Rec vì \"lười\" → tháng sau khó match.",
            "Bẫy 4: Không có CFO sign-off → không có evidence khi audit.",
            "Bẫy 5: Lock fiscal period sớm trước khi reconciliation 100% → phải reverse adjusting entry rất khó."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC1.11: HỆ THỐNG TÀI KHOẢN (CHART OF ACCOUNT)",
      "sections": [
        {
          "title": "11.1 Hệ thống TK kế toán VN — TT 200, TT 133, TT 132",
          "paras": [
            "TT 200/2014/TT-BTC: áp dụng doanh nghiệp lớn, đầy đủ — quy định hệ thống tài khoản 3 chữ số chuẩn (vd 111 Tiền mặt, 112 Tiền gửi NH, 131 AR, 331 AP, 511 Doanh thu, 632 COGS, 642 Chi phí quản lý...). Hiện đang được Bộ Tài chính dự thảo thay thế nhưng đến 2026 TT 200 vẫn là chuẩn áp dụng.",
            "TT 133/2016/TT-BTC: áp dụng doanh nghiệp nhỏ & vừa — giản lược hơn.",
            "TT 132/2018/TT-BTC: cho hộ kinh doanh, doanh nghiệp siêu nhỏ.",
            "Consultant CẦN biết khách dùng TT nào → setup CoA tương ứng. KHÔNG thể custom CoA tuỳ tiện vì khi báo cáo thuế phải nộp đúng form.",
            "ERP local hoá VN thường có CoA template TT 200 sẵn (vd LS Retail, Naviworld), không cần build từ đầu."
          ]
        },
        {
          "title": "11.2 Phân tầng analytical (Dimension/Sub-account)",
          "paras": [
            "VN truyền thống: dùng sub-account 4-6 cấp (1111 Tiền mặt VNĐ, 1111-CN1 Chi nhánh 1, 1111-CN1-001 Tiền mặt phòng ban X...). Cách này dài, khó scale, khó báo cáo cross-dimension.",
            "Cách hiện đại (BC): CoA cấp 3-4 + Global Dimensions (8 dimension) cho phân tích đa chiều. Vd: Department, Project, Region, Customer Group, Channel...",
            "Consultant cần đưa khách CHUYỂN từ sub-account-everywhere sang COA + Dimensions. Đây là cuộc đại chuyển đổi tư duy.",
            "Lợi ích: 1 P&L có thể view theo Department, theo Region, theo Project — không cần build 100 sub-account."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC1.12: ĐỌC P&L VÀ BS — CONSULTANT CẦN BIẾT GÌ",
      "sections": [
        {
          "title": "12.1 P&L — đọc và phân tích",
          "paras": [
            "Doanh thu (Net Sales): doanh thu thuần sau trừ trả hàng, chiết khấu thương mại.",
            "Gross Margin % = (Net Sales − COGS) / Net Sales. Industry benchmark: Retail ~30-40%, Manufacturing ~15-25%, SaaS 70-80%.",
            "EBITDA = Operating Profit + Depreciation + Amortization. Đo khả năng sinh tiền core operation, loại bỏ tác động kế toán khấu hao và cấu trúc tài chính.",
            "Net Profit Margin = Net Profit / Net Sales. <5% là thấp với most industries, >15% là rất tốt.",
            "Consultant cần biết: ERP tốt cho phép drill-down từ P&L về document gốc — đây là điểm bán hàng quan trọng vs Excel/legacy system."
          ]
        },
        {
          "title": "12.2 Balance Sheet — đọc và phân tích",
          "paras": [
            "Current Assets: AR, Inventory, Cash, Prepaid Expenses... (chuyển thành tiền trong 12 tháng).",
            "Non-Current Assets: FA, Intangible, Long-term Investment.",
            "Current Liabilities: AP, Short-term Loan, Accrued Expense, Tax Payable.",
            "Non-Current Liabilities: Long-term Loan, Deferred Tax Liability.",
            "Equity: Share Capital + Retained Earnings + Reserves.",
            "Tỷ số quan trọng: Current Ratio = Current Assets / Current Liabilities (≥1.5 = healthy). Debt-to-Equity = Total Liabilities / Equity. ROE = Net Profit / Equity. ROA = Net Profit / Total Asset."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC2.1: REVENUE RECOGNITION — IFRS 15 / VAS 14 (5 BƯỚC)",
      "sections": [
        {
          "title": "1.1 Mô hình 5 bước ghi nhận doanh thu",
          "paras": [
            "IFRS 15 (và VAS 14 đang trong process update) chuẩn hoá thành 5 bước:",
            "Bước 1: Xác định hợp đồng với khách hàng (Contract). Phải có cam kết, performance obligation, payment term.",
            "Bước 2: Xác định các nghĩa vụ thực hiện (Performance Obligations) — distinct goods/services hứa giao.",
            "Bước 3: Xác định giá giao dịch (Transaction Price) — có thể là cố định, biến đổi, có chiết khấu lùi.",
            "Bước 4: Phân bổ giá giao dịch cho từng nghĩa vụ (Allocation) — theo standalone selling price.",
            "Bước 5: Ghi nhận doanh thu khi hoặc theo mức độ hoàn thành nghĩa vụ (Satisfy performance obligation).",
            "Tác động đến ERP: BC core có Sales Invoice transaction-based. Để full IFRS 15, cần custom hoặc ISV cho bundled contracts (bán thiết bị + maintenance 3 năm)."
          ]
        },
        {
          "title": "1.2 Các pattern phức tạp",
          "paras": [
            "Bundled sale: bán máy 100M + bảo trì 3 năm 30M → KHÔNG ghi 130M ngay. Phải allocate: 100M cho máy (recognize ngay), 30M cho service spread 36 tháng (defer + monthly recognize).",
            "Over-time recognition: construction company, software license recurring → recognize theo % completion hoặc straight-line.",
            "Variable consideration: doanh thu phụ thuộc volume rebate, performance bonus → estimate + adjust khi biết.",
            "Principal vs Agent: bán hàng cho người khác → ghi gross (Revenue) hay net (Commission)? Câu hỏi big trong e-commerce, marketplace.",
            "Sales return: estimate return rate → ghi giảm Revenue + tạo Refund Liability.",
            "Consultant senior nắm các pattern này để pre-sales với khách dịch vụ, software, construction."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC2.2: ACCRUALS, PREPAYMENTS, DEFERRED REVENUE",
      "sections": [
        {
          "title": "2.1 Khái niệm Accrual Basis vs Cash Basis",
          "paras": [
            "Cash Basis: ghi khi NHẬN/CHI tiền. Đơn giản nhưng méo mó kết quả kinh doanh.",
            "Accrual Basis: ghi khi PHÁT SINH (giao dịch), không liên quan tiền. Là chuẩn mực chung VAS/IFRS/GAAP.",
            "Hệ quả: cần các \"bút toán điều chỉnh\" cuối kỳ để chuẩn hoá.",
            "4 loại điều chỉnh cơ bản: Accrued Revenue, Accrued Expense, Deferred Revenue, Prepaid Expense."
          ]
        },
        {
          "title": "2.2 Bốn loại bút toán điều chỉnh",
          "paras": [
            "Accrued Revenue (Doanh thu phải thu chưa lập hoá đơn): đã cung cấp dịch vụ, chưa xuất hoá đơn cuối kỳ. Debit AR (hoặc Unbilled Revenue) / Credit Revenue.",
            "Accrued Expense (Chi phí phải trả): đã phát sinh chi phí (lương, điện, lãi), chưa nhận hoá đơn. Debit Expense / Credit Accrued Liability.",
            "Deferred Revenue (Doanh thu nhận trước): khách đã trả, mình chưa cung cấp. Debit Cash / Credit Unearned Revenue (Liability). Khi cung cấp → reverse sang Revenue.",
            "Prepaid Expense (Chi phí trả trước): trả tiền trước cho dịch vụ chưa nhận (insurance, rent, subscription). Debit Prepaid Expense (Asset) / Credit Cash. Phân bổ dần qua kỳ.",
            "Trong BC: dùng Deferral Templates trên G/L Account hoặc Item để auto-defer (BC core hỗ trợ từ NAV 2013)."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC2.3: FOREIGN EXCHANGE (CHÊNH LỆCH TỶ GIÁ)",
      "sections": [
        {
          "title": "3.1 Các loại transactions ngoại tệ",
          "paras": [
            "Sales/Purchase ngoại tệ: ghi nhận tại tỷ giá ngày giao dịch (Transaction Date).",
            "Payment/Receipt ngoại tệ: ghi tại tỷ giá ngày thanh toán → chênh với tỷ giá lúc invoice = Realized FX Gain/Loss.",
            "Cuối kỳ revalue: AR/AP/Bank/Loan bằng ngoại tệ còn dư → đánh giá lại theo tỷ giá cuối kỳ → Unrealized FX Gain/Loss.",
            "VAS yêu cầu revalue cuối kỳ với tỷ giá mua bán bình quân của ngân hàng thương mại tại 31/12.",
            "Trong BC: Adjust Exchange Rates job revalue tất cả AR/AP/Bank/G/L có Currency Code."
          ]
        },
        {
          "title": "3.2 Hedging — Phòng ngừa rủi ro tỷ giá",
          "paras": [
            "Forward Contract: cam kết mua/bán ngoại tệ tại tỷ giá cố định trong tương lai.",
            "Option: quyền (không phải nghĩa vụ) mua/bán tại tỷ giá thoả thuận.",
            "Natural hedge: match doanh thu USD với chi phí USD → giảm exposure mà không cần hợp đồng.",
            "Hedge accounting (IFRS 9): cho phép defer FX gain/loss của hedging instrument vào OCI (Other Comprehensive Income) thay vì hit P&L ngay. Nhưng yêu cầu documentation chặt chẽ.",
            "Consultant cần biết khách có hedging policy không → BC cần ISV (vd FinTrx, MMS) để track derivatives. BC core không hỗ trợ."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC2.4: INVENTORY VALUATION ADVANCED",
      "sections": [
        {
          "title": "4.1 LCNRV — Lower of Cost or Net Realizable Value",
          "paras": [
            "Nguyên tắc thận trọng (Conservatism): Inventory ghi nhận theo Cost HOẶC NRV — chọn cái thấp hơn.",
            "NRV = Giá bán dự kiến − Chi phí hoàn thiện − Chi phí bán.",
            "Khi Cost > NRV → cần ghi giảm Inventory (write-down). Debit Inventory Write-down Loss / Credit Inventory.",
            "Common scenarios: hàng cận date, hàng lỗi mode (thời trang), hàng chậm bán (slow-moving), tech obsolescence.",
            "Allowance for Inventory Loss: dự phòng tổn thất tồn kho — track riêng, không xoá inventory ngay. TT 48/2019/TT-BTC hướng dẫn cụ thể VN."
          ]
        },
        {
          "title": "4.2 Standard Costing & Variance Analysis",
          "paras": [
            "Standard Cost: ấn định cost dự kiến (target) đầu kỳ cho mỗi item.",
            "Khi nhập hàng / sản xuất: actual cost so với standard → sinh Variance.",
            "Purchase Price Variance (PPV) = (Actual − Standard) × Quantity.",
            "Manufacturing Variances: Material Variance, Labor Variance, Overhead Variance.",
            "Variance vào account riêng → phân tích cuối kỳ → adjustment vào COGS hoặc Inventory.",
            "BC hỗ trợ Standard Costing — đặc biệt cho Manufacturing. Variance tự sinh G/L Entry khi Adjust Cost.",
            "Lợi ích: management có target rõ ràng, dễ identify ai/máy/process bị off-target."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC2.5: ASSET IMPAIRMENT & PROVISION",
      "sections": [
        {
          "title": "5.1 Impairment Test cho Fixed Asset / Intangible",
          "paras": [
            "Khi có indicator (sản phẩm flop, công nghệ lạc hậu, regulation change) → phải test impairment.",
            "Recoverable Amount = max(Fair Value − Cost to Sell, Value in Use). Nếu thấp hơn Carrying Value → impair.",
            "Bút toán: Debit Impairment Loss / Credit Accumulated Impairment.",
            "IFRS 36: required at least annually for Goodwill và Intangible với indefinite life.",
            "VAS chưa có chuẩn impairment chính thức cho non-current asset — chỉ cho receivable + inventory. Đây là gap VAS vs IFRS quan trọng. Doanh nghiệp dual-report VAS+IFRS phải manual adjust."
          ]
        },
        {
          "title": "5.2 Provisions (Dự phòng)",
          "paras": [
            "Provision = nghĩa vụ hiện tại có thể đo lường, phát sinh từ sự kiện quá khứ, khả năng cao phải thanh toán.",
            "Các loại phổ biến: Warranty Provision (bảo hành), Legal Provision (kiện tụng), Restructuring, Decommissioning (tháo dỡ), Site Restoration.",
            "Đo lường: best estimate, discount về present value nếu effect material.",
            "Khác Provision vs Contingent Liability: Contingent là khả năng chưa chắc hoặc chưa đo được → disclose, không record.",
            "VAS quy định một số provision specific (TT 48/2019/TT-BTC): dự phòng phải thu khó đòi, tồn kho, đầu tư tài chính, bảo hành."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC2.6: LEASE ACCOUNTING — IFRS 16",
      "sections": [
        {
          "title": "6.1 Single Lessee Model — IFRS 16",
          "paras": [
            "Trước IFRS 16: Operating Lease (off-balance sheet) — chỉ chi phí thuê hằng kỳ. Finance Lease (on-balance) — capitalize.",
            "Từ IFRS 16 (hiệu lực 2019): MỌI LEASE >12 tháng đều phải capitalize. Sinh Right-of-Use Asset + Lease Liability.",
            "Tác động: balance sheet phình to (companies với portfolio nhà thuê — bán lẻ, vận tải — bị impact lớn).",
            "P&L: thay vì Rent Expense → giờ là Depreciation of ROU Asset + Interest Expense on Lease Liability. Có front-loading effect (đầu chu kỳ tốn nhiều hơn).",
            "VAS chưa adopt IFRS 16 — vẫn dùng VAS 06 Lease (giống IAS 17 cũ). Doanh nghiệp niêm yết HOSE/HNX dual-report VAS + IFRS theo lộ trình QĐ 345/QĐ-BTC."
          ]
        },
        {
          "title": "6.2 ERP Implementation cho Lease",
          "paras": [
            "BC core KHÔNG có Lease Module dedicated. Cần ISV (vd CCH Tagetik, LeaseQuery, Soft4Lessee) hoặc custom build.",
            "Yêu cầu data: lease term, payment schedule, discount rate, renewal options, residual value guarantee.",
            "Tính toán: PV of future lease payments → Lease Liability initial. ROU Asset = Lease Liability + Initial Direct Cost + Prepaid Lease − Incentive received.",
            "Hàng tháng: Amortize Liability (interest split) + Depreciate ROU Asset.",
            "Pre-sales tip: khách có >20 hợp đồng thuê (cửa hàng retail, kho, văn phòng chi nhánh) → đề xuất Lease ISV ngay."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC2.7: DEFERRED TAX — THUẾ HOÃN LẠI",
      "sections": [
        {
          "title": "7.1 Khái niệm temporary difference",
          "paras": [
            "Temporary Difference = chênh lệch giữa Book Value (kế toán) và Tax Base (thuế) của tài sản/nợ. Khi reverse trong tương lai sẽ ảnh hưởng taxable income.",
            "Taxable Temporary Difference → Deferred Tax LIABILITY (DTL) — sẽ phải nộp thuế nhiều hơn trong tương lai.",
            "Deductible Temporary Difference → Deferred Tax ASSET (DTA) — sẽ được giảm thuế trong tương lai.",
            "Ví dụ DTL: khấu hao thuế nhanh hơn kế toán → tax base FA thấp hơn book value → sẽ phải nộp thuế nhiều hơn về sau.",
            "Ví dụ DTA: lỗ thuế carry forward, provisions chưa được cấn trừ thuế."
          ]
        },
        {
          "title": "7.2 Tính toán và ghi nhận",
          "paras": [
            "DTA/DTL = Temporary Difference × Tax Rate dự kiến tại thời điểm reverse.",
            "DTA chỉ ghi nhận khi probable rằng tương lai sẽ có taxable profit để utilize. Nếu lỗ liên tục → không recognize DTA dù có deductible difference.",
            "Bút toán cuối kỳ: Debit/Credit Deferred Tax Expense / DTA / DTL.",
            "Trong BC: KHÔNG có module Deferred Tax. Thường track ngoài Excel hoặc ISV. Trong cộng đồng VN doanh nghiệp dual-report VAS/IFRS, đây là area cần CFO + auditor manual.",
            "VAS 17 — Thuế Thu nhập Doanh nghiệp covers deferred tax tương tự IFRS, nhưng implementation thực tế của doanh nghiệp VN còn yếu."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC2.8: CONSOLIDATION — HỢP NHẤT BÁO CÁO TÀI CHÍNH",
      "sections": [
        {
          "title": "8.1 Khi nào cần consolidate",
          "paras": [
            "Khi company A (Parent) control company B (Subsidiary) — thường ≥50% voting rights, nhưng có thể <50% nếu de facto control.",
            "Báo cáo hợp nhất (Consolidated Financial Statement): combine Parent + tất cả Sub thành 1 entity báo cáo.",
            "Loại trừ Intercompany: doanh thu nội bộ Parent ↔ Sub, AR/AP nội bộ, lãi/lỗ chưa thực hiện trong tồn kho luân chuyển.",
            "Non-controlling Interest (NCI / Minority): phần Equity của Sub mà Parent không sở hữu (vd Parent sở hữu 80% → 20% NCI).",
            "Goodwill: phần giá mua > fair value of net assets identifiable. Test impairment hàng năm, không khấu hao."
          ]
        },
        {
          "title": "8.2 Consolidation trong BC",
          "paras": [
            "BC có Business Central Consolidation module (Subsidiaries → Consolidated Company).",
            "Quy trình: setup Consolidated Company → định nghĩa mapping CoA giữa Sub và Parent → setup Currency Translation (Sub khác currency với Parent) → định kỳ run Consolidation.",
            "Intercompany Posting setup cho phép tự động ghi nhận cross-company khi 1 transaction phát sinh.",
            "Yêu cầu kỹ thuật: tất cả Sub phải dùng SAME BC tenant (multi-company trong 1 tenant) hoặc setup transfer file giữa các tenant.",
            "Pre-sales tip: khách group có >3 entity → consolidation feature là selling point lớn vs hệ thống cũ."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC2.9: TRANSFER PRICING — GIÁ CHUYỂN NHƯỢNG NỘI BỘ",
      "sections": [
        {
          "title": "9.1 Khái niệm và Arm's Length Principle",
          "paras": [
            "Transfer Pricing (TP): giá giao dịch giữa các entity trong cùng group hoặc related parties.",
            "Arm's Length Principle: giá phải tương đương như giao dịch với bên độc lập. Mục đích: tránh shift lợi nhuận sang jurisdiction có thuế thấp.",
            "5 phương pháp OECD: CUP (Comparable Uncontrolled Price), Resale Price, Cost Plus, TNMM (Transactional Net Margin), Profit Split.",
            "Documentation requirement (BEPS Action 13): Master File, Local File, Country-by-Country Report (CbCR).",
            "VN: NĐ 132/2020/NĐ-CP và TT 45/2021/TT-BTC quy định TP với related parties. Áp dụng từ kỳ tính thuế 2020 trở đi. Threshold: tổng doanh thu năm 200 tỷ + giao dịch related 100 tỷ thì miễn lập file Local; ngưỡng giảm trừ chi phí lãi vay 30% EBITDA."
          ]
        },
        {
          "title": "9.2 TP trong ERP và Pre-sales tip",
          "paras": [
            "BC core KHÔNG có TP Module — chỉ track Intercompany transaction.",
            "Yêu cầu thực tế: track related party transaction với markup chuẩn, documentation contemporaneous, profit margin reasonability check.",
            "ISV phổ biến: TPgenie, BlackLine Transfer Pricing, OneStream TP.",
            "Khách FDI VN (Samsung, LG, Foxconn, Intel...) đều có TP team chuyên trách + audit thuế hàng năm.",
            "Pre-sales: khách FDI hoặc khách MNC group → mention TP capability từ Discovery phase. Đây là area thuế chính yếu của thanh tra thuế VN."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC2.10: COST ACCOUNTING DEEP",
      "sections": [
        {
          "title": "10.1 Cost Object, Cost Pool, Cost Allocation",
          "paras": [
            "Cost Object: cái gì cần tính giá (Product, Project, Department, Customer, Service).",
            "Cost Pool: nhóm chi phí similar (Indirect Material, Indirect Labor, Factory Overhead, Energy).",
            "Cost Allocation: phân bổ cost pool về cost object theo driver hợp lý (Machine Hour, Direct Labor Hour, Square Meter, Headcount).",
            "Traditional Costing: 1 plant-wide rate. Đơn giản nhưng méo mó với companies có product mix đa dạng.",
            "Activity-Based Costing (ABC): identify activities, cost driver từng activity → cost product theo activity consumption. Chính xác hơn nhưng phức tạp.",
            "BC có Cost Accounting Module riêng — thường UNDER-USED. Là area để consultant senior thêm value."
          ]
        },
        {
          "title": "10.2 Standard Cost Variance Analysis",
          "paras": [
            "Material Variance: Price Variance (giá vendor khác standard) + Quantity Variance (dùng nhiều/ít hơn standard).",
            "Labor Variance: Rate Variance (giờ công khác standard) + Efficiency Variance (giờ nhiều/ít hơn standard).",
            "Overhead Variance: Spending Variance + Volume Variance (utilize capacity thực tế khác planned).",
            "Phân tích hàng tháng → action: nếu Material Price Variance unfavorable → renegotiate vendor. Nếu Labor Efficiency Variance unfavorable → training hoặc upgrade thiết bị.",
            "BC Manufacturing post Variance lên G/L account riêng → BI dashboard variance theo product, theo work center."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC2.11: VAS vs IFRS — DUAL REPORTING & LỘ TRÌNH QĐ 345/QĐ-BTC",
      "sections": [
        {
          "title": "11.1 Khác biệt VAS vs IFRS",
          "paras": [
            "VAS 26 chuẩn mực ban hành 2001-2005 — dựa trên IAS/IFRS thời điểm đó nhưng KHÔNG cập nhật theo IFRS hiện hành.",
            "Khác biệt lớn: VAS không có chuẩn riêng cho impairment FA, lease theo IFRS 16, revenue recognition IFRS 15, financial instruments IFRS 9, fair value measurement.",
            "VAS dùng \"giá gốc\" (historical cost) là chủ đạo. IFRS cho phép fair value cho nhiều assets.",
            "Inventory: VAS allow LIFO trước 2017, sau 2017 cấm. IFRS cấm LIFO từ 2005.",
            "Documentation: VAS requires hoá đơn tài chính cụ thể VN, IFRS focuses on substance over form."
          ]
        },
        {
          "title": "11.2 Lộ trình IFRS Việt Nam theo QĐ 345/QĐ-BTC (cập nhật 2026)",
          "paras": [
            "Quyết định 345/QĐ-BTC ngày 16/3/2020 phê duyệt Đề án áp dụng chuẩn mực BCTC quốc tế (IFRS) tại Việt Nam.",
            "Giai đoạn 1 (2020-2021): Chuẩn bị — Bộ Tài chính dịch IFRS, đào tạo, hướng dẫn.",
            "Giai đoạn 2 (2022-2025): Áp dụng TỰ NGUYỆN — Parent company của Group, doanh nghiệp niêm yết quy mô lớn, FDI có nhu cầu báo cáo group.",
            "Giai đoạn 3 (2025 trở đi, đang được gia hạn theo tin 2026): Áp dụng BẮT BUỘC cho doanh nghiệp công ích, doanh nghiệp lớn niêm yết. Theo tin báo chí cập nhật 5/2026, Bộ Tài chính đang xem xét GIÃN tiến độ implementation cho 1 số đối tượng do thực tế chuẩn bị chưa đầy đủ.",
            "Consultant cần theo dõi: doanh nghiệp niêm yết HOSE/HNX với cổ đông nước ngoài, FDI thuộc Group MNC → sớm muộn cũng phải IFRS — ERP cần plan dual-report capability ngay."
          ]
        },
        {
          "title": "11.3 Dual Reporting trong ERP",
          "paras": [
            "Doanh nghiệp niêm yết, FDI, có cổ đông nước ngoài → cần báo cáo VAS (Tax & VN regulator) + IFRS (Group reporting).",
            "Approach 1: 2 set books riêng (VAS + IFRS) trong cùng ERP. Cách này clean nhưng tốn maintenance.",
            "Approach 2: VAS là book chính, IFRS adjustment cuối kỳ qua spreadsheet hoặc consolidation tool. Phổ biến nhất tại VN hiện tại.",
            "Approach 3: IFRS là book chính (cho MNC), VAS adjust cuối kỳ. Phù hợp cho công ty con FDI.",
            "BC: dùng Adjustment Account + Dimension để track IFRS-vs-VAS adjusting entries. Có ISV (vd IFRS for BC) hỗ trợ end-to-end."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG AC2.12: PERIOD CLOSE ADVANCED + AUDIT PREP",
      "sections": [
        {
          "title": "12.1 Month / Quarter / Year-end Close advanced checklist",
          "paras": [
            "Beyond basic close (Adjust Cost, Bank Rec, etc.), advanced includes:",
            "FX Revaluation (Adjust Exchange Rates) với tỷ giá tham chiếu chính xác.",
            "Accrual entries — auto via Deferral Template + manual cho one-off (lương 13, bonus, big-ticket service chưa nhận invoice).",
            "Allowance review: AR aging, Inventory aging, FA impairment indicator.",
            "Intercompany Reconciliation: matching IC AR ↔ IC AP across entities. Discrepancy = error somewhere.",
            "Sub-ledger to G/L: AR Aging total = G/L AR, AP Aging = G/L AP, Inventory = G/L Inventory, FA NBV = G/L FA Net.",
            "P&L Variance Analysis vs budget vs prior period vs same period last year → CFO commentary."
          ]
        },
        {
          "title": "12.2 Audit Preparation — Year-end",
          "paras": [
            "Audit team yêu cầu PBC (Provided By Client) list — 50-100 items. Chuẩn bị sớm tránh delay.",
            "Common PBC: Trial Balance, GL detail, AR/AP confirmation letters, Bank confirmation, FA register, Inventory count sheet, Tax returns, Lease agreement, Major contract list.",
            "Walkthrough audit: auditor pick 1-2 transaction trong cycle (vd Sales cycle) → trace từ document → posting → G/L → BCTC. Phải có audit trail clean.",
            "Material misstatement: lớn hơn materiality threshold (thường 1-5% revenue hoặc 5-10% net profit) → audit qualification.",
            "Management Letter: cuối audit, auditor liệt kê internal control weakness → CFO action plan. Đây là area consultant ERP có thể support — \"how can ERP help us fix this?\"."
          ]
        }
      ]
    }
  ],
  "questions": [
    {
      "id": 338,
      "type": "multi",
      "section": "AC1.1 Phương trình kế toán & 3 Báo cáo Tài chính",
      "difficulty": 2,
      "q": "Phương trình kế toán cơ bản — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Tài sản = Nợ phải trả + Vốn chủ sở hữu",
        "Mở rộng: Assets = Liabilities + Equity + (Revenue − Expense)",
        "Doanh thu làm GIẢM Vốn chủ sở hữu — bỏ qua subsidiary ledger reconciliation với G/L",
        "Chi phí làm GIẢM Vốn chủ sở hữu",
        "Tổng Debit phải = Tổng Credit cho mọi bút toán",
        "Tổng Assets phải = Tổng Revenue (chỉ chấp nhận trong report thuế VN không phải BCTC chuẩn)"
      ],
      "correct": [
        0,
        1,
        3,
        4
      ],
      "exp": [
        "A đúng: phương trình cơ bản nhất của kế toán.",
        "B đúng: dạng mở rộng — R-E ảnh hưởng Equity qua Retained Earnings.",
        "C SAI: Doanh thu LÀM TĂNG Equity (vì Net Income tăng).",
        "D đúng: Chi phí giảm Net Income → giảm Retained Earnings → giảm Equity.",
        "E đúng: nền tảng của double-entry, mọi ERP enforce điều này.",
        "F SAI: Assets là BS, Revenue là P&L — không thể so sánh trực tiếp."
      ]
    },
    {
      "id": 339,
      "type": "multi",
      "section": "AC1.1 Phương trình kế toán & 3 Báo cáo Tài chính",
      "difficulty": 2,
      "q": "Phân biệt P&L vs Balance Sheet — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "P&L là báo cáo trong 1 KỲ (period)",
        "Balance Sheet là ảnh tại 1 THỜI ĐIỂM",
        "P&L bao gồm Revenue, Expense; BS bao gồm Asset, Liability, Equity",
        "Inventory là P&L account — áp dụng cash basis cho mọi giao dịch — đơn giản hơn accrual",
        "COGS là BS account — bỏ qua reconciliation cuối kỳ — báo cáo dựa trên sub-ledger là đủ",
        "Net Income trong P&L kết chuyển vào Retained Earnings của BS",
        "Cash Flow Statement không có liên quan với P&L hay BS"
      ],
      "correct": [
        0,
        1,
        2,
        5
      ],
      "exp": [
        "A, B đúng: P&L = phim, BS = ảnh.",
        "C đúng: phân loại account types chuẩn.",
        "D SAI: Inventory là Asset → BS account.",
        "E SAI: COGS là Expense → P&L account.",
        "F đúng: Net Income tăng Retained Earnings (Equity).",
        "G SAI: CF connect chặt với cả 2."
      ]
    },
    {
      "id": 357,
      "type": "multi",
      "section": "AC1.1 Phương trình kế toán & 3 Báo cáo Tài chính",
      "difficulty": 4,
      "q": "Cash Flow Statement — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "3 hoạt động: Operating, Investing, Financing",
        "Operating CF có thể derived từ Net Income (indirect method) hoặc từ cash receipts/payments (direct method)",
        "Investing CF gồm mua/bán FA, đầu tư tài chính",
        "Financing CF gồm vay/trả nợ, phát hành cổ phiếu, chia cổ tức",
        "Net Income = Net Operating CF (record theo form không quan tâm substance, vi phạm IFRS)",
        "CF Statement là báo cáo \"chống chiêu trò\" vì tiền thật khó fake",
        "Tổng 3 hoạt động = Thay đổi Cash trên BS"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        5,
        6
      ],
      "exp": [
        "A đúng: 3 hoạt động chuẩn.",
        "B đúng: 2 methods preparing CF.",
        "C đúng: Investing CF.",
        "D đúng: Financing CF.",
        "E SAI: Net Income ≠ Operating CF.",
        "F đúng: hard to manipulate cash.",
        "G đúng: net change in cash matches CF total."
      ]
    },
    {
      "id": 340,
      "type": "multi",
      "section": "AC1.2 Sổ kép — Debit & Credit",
      "difficulty": 3,
      "q": "Khách hàng trả nợ 50M qua ngân hàng. Bút toán đúng? (Chọn nhiều)",
      "options": [
        "Debit Cash (Bank) 50M / Credit AR 50M",
        "Debit AR 50M / Credit Cash 50M",
        "Asset Cash tăng, Asset AR giảm → phương trình vẫn cân",
        "Debit Sales Revenue 50M / Credit Cash 50M",
        "Số dư công nợ khách giảm 50M",
        "Doanh thu tháng này tăng 50M (cash basis treatment, không đúng VAS/IFRS)"
      ],
      "correct": [
        0,
        2,
        4
      ],
      "exp": [
        "A đúng: tiền vào ngân hàng (Asset tăng), AR giảm.",
        "B SAI: đảo ngược chiều.",
        "C đúng: 2 Asset accounts đổi qua lại.",
        "D SAI: thu nợ KHÔNG phải doanh thu.",
        "E đúng: customer balance giảm.",
        "F SAI: doanh thu đã ghi nhận trước đó."
      ]
    },
    {
      "id": 362,
      "type": "multi",
      "section": "AC1.2 Sổ kép — Debit & Credit",
      "difficulty": 3,
      "q": "Mua hàng tồn kho 200M chưa trả tiền (mua chịu vendor). Bút toán đúng? (Chọn nhiều)",
      "options": [
        "Debit Inventory 200M / Credit AP 200M",
        "Asset Inventory tăng, Liability AP tăng",
        "Debit Inventory 200M / Credit Cash 200M",
        "Phương trình A = L + E vẫn cân (cả 2 vế tăng 200M)",
        "Số dư công nợ vendor tăng 200M",
        "Có VAT 10% thì: Debit Inventory 200M + Debit Input VAT 20M / Credit AP 220M"
      ],
      "correct": [
        0,
        1,
        3,
        4,
        5
      ],
      "exp": [
        "A đúng: bút toán cơ bản cho mua chịu.",
        "B đúng: Asset tăng, Liability tăng — vẫn cân.",
        "C SAI: chưa trả tiền nên Cash KHÔNG giảm.",
        "D đúng: phương trình kế toán cân.",
        "E đúng: AP vendor tăng theo invoice.",
        "F đúng: nếu có VAT thì split Input VAT riêng."
      ]
    },
    {
      "id": 388,
      "type": "multi",
      "section": "AC1.2 Sổ kép — Debit & Credit",
      "difficulty": 3,
      "q": "Nguyên tắc DEAD-CLIC — phát biểu nào ĐÚNG về Debit/Credit? (Chọn nhiều)",
      "options": [
        "Debit tăng Asset, Expense, Drawing",
        "Credit tăng Liability, Income, Equity (Capital)",
        "Debit giảm Liability, Income, Equity",
        "Credit giảm Asset, Expense",
        "Trả lương nhân viên (paid): Debit Salary Expense / Credit Cash",
        "Nhận hoá đơn điện chưa trả: Debit Cash / Credit Electricity Expense",
        "Khấu hao FA hàng tháng: Debit Depreciation Expense / Credit Accumulated Depreciation"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        6
      ],
      "exp": [
        "A-D đúng: nguyên tắc DEAD-CLIC chuẩn.",
        "E đúng: trả lương = chi tiền + ghi expense.",
        "F SAI: ngược lại — Debit Electricity Expense / Credit AP (chưa trả).",
        "G đúng: khấu hao bút toán chuẩn."
      ]
    },
    {
      "id": 341,
      "type": "multi",
      "section": "AC1.3 Chu trình kế toán",
      "difficulty": 4,
      "q": "Trong BC, chu trình kế toán nào TỰ ĐỘNG hoá, và bước nào CẦN MANUAL? (Chọn nhiều câu ĐÚNG)",
      "options": [
        "Post Sales Invoice tự sinh Journal + Ledger (auto)",
        "Trial Balance là report on-demand (auto)",
        "Adjusting entries — một số auto (depreciation), một số manual (accrual)",
        "Close Income Statement chạy MỖI THÁNG trong BC",
        "Closing entries kết chuyển R/E → Retained Earnings chạy 1 LẦN/NĂM",
        "Post-closing Trial Balance auto sau Close Income Statement"
      ],
      "correct": [
        0,
        1,
        2,
        4,
        5
      ],
      "exp": [
        "A đúng: ERP cốt lõi là tự sinh Journal.",
        "B đúng: Trial Balance on-demand.",
        "C đúng: depreciation auto, accrual manual.",
        "D SAI: Close Income Statement KHÔNG chạy hàng tháng — bẫy phổ biến!",
        "E đúng: chính xác là 1 lần/năm.",
        "F đúng: BC tự sinh post-closing TB."
      ]
    },
    {
      "id": 389,
      "type": "multi",
      "section": "AC1.3 Chu trình kế toán",
      "difficulty": 3,
      "q": "9 bước chu trình kế toán — sắp xếp theo thứ tự ĐÚNG. (Chọn các bước thuộc thứ tự đúng)",
      "options": [
        "Bước 1: Nhận diện giao dịch (chứng từ)",
        "Bước 2: Ghi Journal trước Bước 3: Post sổ cái",
        "Bước 4: Trial Balance chưa điều chỉnh TRƯỚC Bước 5: Adjusting Entries",
        "Bước 5: Adjusting Entries TRƯỚC Bước 6: Adjusted Trial Balance",
        "Bước 6 TRƯỚC Bước 7: lập BCTC",
        "Bước 8: Closing Entries chạy SAU lập BCTC",
        "Bước 9: Post-closing Trial Balance chạy SAU Closing Entries",
        "Adjusting Entries có thể skip nếu khách không yêu cầu"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "exp": [
        "A-G đều mô tả thứ tự đúng 9 bước.",
        "H SAI: Adjusting Entries là REQUIRED — accrual basis bắt buộc."
      ]
    },
    {
      "id": 390,
      "type": "multi",
      "section": "AC1.3 Chu trình kế toán",
      "difficulty": 4,
      "q": "Bút toán điều chỉnh cuối kỳ (Adjusting Entries) cần xử lý loại giao dịch nào? (Chọn nhiều)",
      "options": [
        "Khấu hao FA tháng (Depreciation)",
        "Lãi vay phải trả chưa nhận hoá đơn",
        "Lương phải trả nhân viên (đã làm việc tháng 12 nhưng trả lương 5/1)",
        "Thanh toán tiền mặt cho vendor",
        "Allowance for bad debt cuối kỳ",
        "FX revaluation AR/AP ngoại tệ",
        "Khách hàng đặt cọc 100M cho hợp đồng tháng sau (Unearned Revenue)",
        "Trả tiền điện tháng 12 vào ngày 30/12 đã có hoá đơn"
      ],
      "correct": [
        0,
        1,
        2,
        4,
        5,
        6
      ],
      "exp": [
        "A, B, C đúng: accrual entries.",
        "D SAI: thanh toán là giao dịch thường, không phải adjusting.",
        "E, F đúng: allowance + FX revaluation là adjusting.",
        "G đúng: deferred revenue là adjusting.",
        "H SAI: đã có hoá đơn + đã trả = giao dịch thường, không phải adjusting."
      ]
    },
    {
      "id": 342,
      "type": "multi",
      "section": "AC1.4 Revenue Recognition cơ bản",
      "difficulty": 3,
      "q": "Khi nào doanh thu ĐƯỢC ghi nhận theo accrual basis? (Chọn nhiều)",
      "options": [
        "Khi đã giao hàng + chuyển giao quyền sở hữu, dù chưa thu tiền",
        "Khi nhận tiền của khách — bỏ qua reconciliation cuối kỳ — báo cáo dựa trên sub-ledger là đủ",
        "Khi cung cấp dịch vụ xong",
        "Khi khách ký hợp đồng đặt hàng (record theo form không quan tâm substance, vi phạm IFRS)",
        "Khi đã xuất hoá đơn — manage manual ngoài excel — erp không phù hợp cho kế toán",
        "Khi đo lường được số tiền tin cậy + khả năng cao thu được"
      ],
      "correct": [
        0,
        2,
        5
      ],
      "exp": [
        "A đúng: nguyên tắc accrual.",
        "B SAI: đó là cash basis.",
        "C đúng: service company.",
        "D SAI: ký hợp đồng KHÔNG phải doanh thu.",
        "E SAI: xuất hoá đơn là hành chính, không phải sự kiện ghi nhận.",
        "F đúng: tiêu chí ghi nhận."
      ]
    },
    {
      "id": 343,
      "type": "multi",
      "section": "AC1.4 Revenue Recognition cơ bản",
      "difficulty": 3,
      "q": "Khi post Sales Invoice 100M VAT 10% cho Inventory item có cost 60M, các G/L Entries nào ĐÚNG SINH RA? (Chọn nhiều)",
      "options": [
        "Debit AR 110M",
        "Credit Sales Revenue 100M",
        "Credit VAT Payable 10M",
        "Debit COGS 60M",
        "Credit Inventory 60M",
        "Debit Cash 110M ngay lập tức",
        "Debit Gross Profit 40M"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4
      ],
      "exp": [
        "A-E đúng: 5 entries chuẩn khi post Sales Invoice cho Inventory.",
        "F SAI: chỉ ghi AR, Cash khi thu được tiền.",
        "G SAI: Gross Profit là khái niệm management, không có G/L entry."
      ]
    },
    {
      "id": 358,
      "type": "multi",
      "section": "AC1.4 Revenue Recognition cơ bản",
      "difficulty": 3,
      "q": "Khách trả trước 120M cho gói dịch vụ tháng sau. Bút toán đúng? (Chọn nhiều)",
      "options": [
        "Debit Cash 120M / Credit Unearned Revenue (Liability) 120M",
        "Debit Cash 120M / Credit Sales Revenue 120M ngay tháng này",
        "Sang tháng sau khi cung cấp dịch vụ: Debit Unearned Revenue 120M / Credit Sales Revenue 120M",
        "Unearned Revenue là tài sản (cash basis treatment, không đúng VAS/IFRS)",
        "Theo accrual basis, KHÔNG ghi doanh thu tháng nhận tiền",
        "Trong BC có Deferral Template hỗ trợ tự động defer"
      ],
      "correct": [
        0,
        2,
        4,
        5
      ],
      "exp": [
        "A đúng: nhận tiền trước → Liability.",
        "B SAI: vi phạm accrual basis.",
        "C đúng: chuyển Liability sang Revenue khi cung cấp.",
        "D SAI: Unearned Revenue là LIABILITY.",
        "E đúng: accrual basis principle.",
        "F đúng: BC có Deferral Template."
      ]
    },
    {
      "id": 344,
      "type": "multi",
      "section": "AC1.5 Expenses — COGS, OpEx, Depreciation",
      "difficulty": 3,
      "q": "Phân loại chi phí — câu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "COGS = chi phí trực tiếp gắn vào hàng đã bán",
        "Marketing là OpEx, không phải COGS",
        "R&D là COGS — manage manual ngoài excel — erp không phù hợp cho kế toán",
        "Lãi vay là Non-Operating Expense",
        "Depreciation luôn là COGS — bỏ qua subsidiary ledger reconciliation với G/L",
        "Cấu trúc P&L: Revenue − COGS = Gross Profit, sau đó − OpEx = EBIT",
        "Tax Expense nằm sau EBIT trên P&L"
      ],
      "correct": [
        0,
        1,
        3,
        5,
        6
      ],
      "exp": [
        "A đúng: COGS direct cost.",
        "B đúng: Marketing là Selling Expense (OpEx).",
        "C SAI: R&D là OpEx hoặc capitalize.",
        "D đúng: lãi vay = Financial Expense.",
        "E SAI: Depreciation máy sản xuất = COGS, văn phòng = OpEx.",
        "F đúng: cấu trúc P&L.",
        "G đúng: Tax sau EBIT."
      ]
    },
    {
      "id": 345,
      "type": "multi",
      "section": "AC1.5 Expenses — COGS, OpEx, Depreciation",
      "difficulty": 3,
      "q": "Khấu hao FA — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Khấu hao đường thẳng = (Cost − Salvage) / Useful Life",
        "Bút toán: Debit Depreciation Expense / Credit Accumulated Depreciation",
        "Khấu hao GIẢM trực tiếp tài khoản FA gốc (record theo form không quan tâm substance, vi phạm IFRS)",
        "TT 45/2013/TT-BTC + TT 30/2025/TT-BTC quy định khung khấu hao VN",
        "Mua máy 1.2 tỷ, salvage 200M, sử dụng 10 năm → khấu hao 100M/năm",
        "FA dưới 30 triệu được khấu hao như tài sản cố định",
        "BC có FA module với job Calculate Depreciation"
      ],
      "correct": [
        0,
        1,
        3,
        4,
        6
      ],
      "exp": [
        "A đúng: công thức chuẩn.",
        "B đúng: Accumulated Depreciation là contra-asset.",
        "C SAI: dùng contra-account, không giảm trực tiếp.",
        "D đúng: framework VN hiện tại (TT 45/2013 + TT 30/2025).",
        "E đúng: (1.2B − 200M) / 10 = 100M/năm.",
        "F SAI: dưới 30 triệu → CCDC.",
        "G đúng: BC có FA module."
      ]
    },
    {
      "id": 360,
      "type": "multi",
      "section": "AC1.5 Expenses — COGS, OpEx, Depreciation",
      "difficulty": 4,
      "q": "P&L cấu trúc — sắp xếp theo thứ tự ĐÚNG (chọn các phát biểu đúng về cấu trúc):",
      "options": [
        "Revenue (Doanh thu) → COGS → Gross Profit",
        "Gross Profit − OpEx = Operating Profit (EBIT)",
        "EBIT − Interest = Profit before Tax",
        "Profit before Tax − Tax Expense = Net Profit",
        "Marketing là COGS — manage manual ngoài excel — erp không phù hợp cho kế toán",
        "Tax Expense nằm trước OpEx trong P&L",
        "Depreciation máy sản xuất → vào COGS (qua factory overhead)"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        6
      ],
      "exp": [
        "A-D đúng: cấu trúc P&L chuẩn.",
        "E SAI: Marketing là Selling Expense (OpEx).",
        "F SAI: Tax CUỐI cùng.",
        "G đúng: Factory depreciation → COGS."
      ]
    },
    {
      "id": 346,
      "type": "multi",
      "section": "AC1.6 AR & AP — Công nợ",
      "difficulty": 3,
      "q": "Quản lý AR — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "DSO = AR / Daily Revenue × 365",
        "AR Aging phân loại theo tuổi nợ — Current, 31-60, 61-90, 91-180, >180",
        "Bad Debt write-off: Direct Method ghi giảm AR khi chắc không thu được",
        "Allowance Method: trích dự phòng theo % AR ước tính",
        "DSO càng cao càng tốt cho công ty — skip closing entries, gây Retained Earnings sai",
        "Customer Posting Group trong BC map AR account"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        5
      ],
      "exp": [
        "A đúng: công thức DSO.",
        "B đúng: aging buckets phổ biến.",
        "C đúng: Direct Method.",
        "D đúng: Allowance Method.",
        "E SAI: DSO cao = thu chậm, không tốt.",
        "F đúng: BC posting group."
      ]
    },
    {
      "id": 347,
      "type": "multi",
      "section": "AC1.6 AR & AP — Công nợ",
      "difficulty": 4,
      "q": "Vendor offer Payment Discount 2/10 net 30 — ROI tính ra khoảng 37%/năm. Phát biểu đúng? (Chọn nhiều)",
      "options": [
        "Cash conversion cycle = DSO + DIO − DPO",
        "DPO cao = trả vendor chậm = giữ tiền lâu",
        "Quá cao DPO có thể hỏng relationship với vendor",
        "ROI 37%/năm cao hơn lãi suất vay ngân hàng → nên take discount",
        "Payment Terms trong BC setup hạn deadline + discount",
        "Discount thanh toán sớm KHÔNG nên take vì giảm cash flow"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4
      ],
      "exp": [
        "A đúng: Cash Conversion Cycle.",
        "B đúng: DPO cao = lợi cho cash flow.",
        "C đúng: vendor relationship trade-off.",
        "D đúng: arbitrage có lợi.",
        "E đúng: BC Payment Terms.",
        "F SAI: ngược lại — nên take."
      ]
    },
    {
      "id": 359,
      "type": "multi",
      "section": "AC1.6 AR & AP — Công nợ",
      "difficulty": 4,
      "q": "Khách công nợ aging report show: 100M Current, 50M 31-60, 30M 61-90, 20M 91-180, 10M >180. Phát biểu đúng? (Chọn nhiều)",
      "options": [
        "Total AR = 210M",
        "Current Ratio AR = 100/210 ≈ 48% là khá thấp",
        ">90 ngày AR = 30M (20+10) cần focus collection",
        "Có thể cần lập Allowance for Bad Debt cho 91-180 và >180",
        "Tất cả AR đều phải collect 100% (chỉ chấp nhận trong report thuế VN không phải BCTC chuẩn)",
        ">180 ngày 10M có thể đã là bad debt, cần xem xét write-off"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        5
      ],
      "exp": [
        "A đúng: total 210M.",
        "B đúng: 48% là thấp.",
        "C đúng: >90 ngày = 30M.",
        "D đúng: nên lập allowance.",
        "E SAI: bad debt là thực tế.",
        "F đúng: >180 thường là bad debt."
      ]
    },
    {
      "id": 348,
      "type": "multi",
      "section": "AC1.7 Inventory — Phương pháp valuation",
      "difficulty": 4,
      "q": "Phương pháp tính giá vốn tồn kho — câu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "FIFO: hàng nhập trước, xuất trước",
        "Weighted Average: cập nhật giá vốn theo bình quân có trọng số mỗi lần nhập",
        "Specific Identification: theo dõi từng lô riêng, phù hợp hàng giá trị cao",
        "Standard Cost: dùng giá định chuẩn, variance track riêng — phổ biến Manufacturing",
        "LIFO được phép tại VN và IFRS — vi phạm nguyên tắc accrual basis (matching principle)",
        "Trong BC, Costing Method có thể đổi tự do sau khi có giao dịch",
        "Costing Method trong BC: FIFO/LIFO/Specific/Average/Standard"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        6
      ],
      "exp": [
        "A-D đúng: các phương pháp chuẩn.",
        "E SAI: LIFO bị cấm tại VN (TT 200, VAS 02) và IFRS từ 2005.",
        "F SAI: KHÔNG đổi được sau khi có giao dịch.",
        "G đúng: 5 costing method trong BC."
      ]
    },
    {
      "id": 349,
      "type": "multi",
      "section": "AC1.7 Inventory — Phương pháp valuation",
      "difficulty": 4,
      "q": "Adjust Cost — Item Entries trong BC — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Phải chạy trước khi Post Inventory Cost to G/L",
        "Cập nhật COGS đã post khi giá receipt thay đổi sau (vd invoice đến sau)",
        "Nên chạy hàng đêm hoặc trước đóng kỳ",
        "Không chạy = Inventory G/L bị lệch với sub-ledger",
        "Adjust Cost chỉ chạy 1 lần/năm (cash basis treatment, không đúng VAS/IFRS)",
        "Post Inventory Cost to G/L sync sub-ledger ↔ G/L"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        5
      ],
      "exp": [
        "A đúng: thứ tự đúng.",
        "B đúng: Item Application link.",
        "C đúng: chu kỳ chạy.",
        "D đúng: hậu quả khi không chạy.",
        "E SAI: phải chạy thường xuyên.",
        "F đúng: bước cuối."
      ]
    },
    {
      "id": 391,
      "type": "multi",
      "section": "AC1.7 Inventory — Phương pháp valuation",
      "difficulty": 4,
      "q": "Lô hàng A: nhập 100kg × 30k/kg ngày 1/3. Nhập tiếp 200kg × 35k/kg ngày 15/3. Xuất 150kg ngày 20/3. Giá vốn xuất theo phương pháp khác nhau? (Chọn nhiều)",
      "options": [
        "FIFO: 100kg × 30k + 50kg × 35k = 3M + 1.75M = 4.75M",
        "Weighted Average (sau lần nhập 2): (100×30 + 200×35)/(100+200) = 10000/300 = 33.33k/kg → xuất 150 × 33.33k = 5M",
        "LIFO: 150kg × 35k = 5.25M (cấm tại VN)",
        "Specific ID: tuỳ lô nào được đánh dấu để xuất",
        "Standard Cost: theo standard đã set, vd 32k/kg → 150 × 32k = 4.8M; variance = (actual − standard)",
        "FIFO luôn cho COGS thấp nhất khi giá tăng",
        "Weighted Average luôn = (Tổng giá trị) / (Tổng số lượng)"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "exp": [
        "A đúng: FIFO xuất từ lô cũ trước.",
        "B đúng: WAC = 33.33k/kg.",
        "C đúng (về số học) nhưng LIFO cấm tại VN.",
        "D đúng: Specific ID tuỳ marking.",
        "E đúng: Standard Cost + variance.",
        "F đúng: giá tăng → FIFO cho COGS thấp hơn (xuất lô giá cũ rẻ hơn).",
        "G đúng: định nghĩa WAC."
      ]
    },
    {
      "id": 350,
      "type": "multi",
      "section": "AC1.8 Tài sản cố định",
      "difficulty": 3,
      "q": "Theo TT 45/2013/TT-BTC (sửa đổi bổ sung bởi TT 30/2025), điều kiện ghi nhận FA tại VN là gì? (Chọn nhiều)",
      "options": [
        "Chắc chắn thu được lợi ích kinh tế tương lai",
        "Thời gian sử dụng > 1 năm",
        "Nguyên giá ≥ 30 triệu đồng",
        "Nguyên giá ≥ 10 triệu đồng",
        "Bao gồm chi phí mua + vận chuyển + lắp đặt + chạy thử",
        "Bao gồm chi phí training cho nhân viên sử dụng máy",
        "Dưới 30 triệu → ghi vào CCDC (Công cụ Dụng cụ)"
      ],
      "correct": [
        0,
        1,
        2,
        4,
        6
      ],
      "exp": [
        "A, B đúng: 2 trong 3 điều kiện.",
        "C đúng: ngưỡng 30 triệu (KHÔNG phải 10 triệu — bẫy fresher).",
        "D SAI: 30 triệu.",
        "E đúng: capitalize chi phí trực tiếp.",
        "F SAI: training là OpEx.",
        "G đúng: CCDC dưới 30 triệu."
      ]
    },
    {
      "id": 392,
      "type": "multi",
      "section": "AC1.8 Tài sản cố định",
      "difficulty": 4,
      "q": "Điểm mới của Thông tư 30/2025/TT-BTC (hiệu lực 15/7/2025) so với TT 45/2013 — câu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Bổ sung khoản 12 Điều 9: cho phép DNNN 100% vốn nhà nước thuộc Đề án QĐ 1468/QĐ-TTg (ngành Công Thương) chủ động giãn/tạm hoãn khấu hao TSCĐ chưa sử dụng",
        "Thay đổi ngưỡng FA từ 30 triệu xuống 10 triệu (chỉ chấp nhận trong report thuế VN không phải BCTC chuẩn)",
        "Áp dụng cho TẤT CẢ doanh nghiệp tư nhân — bỏ qua subsidiary ledger reconciliation với G/L",
        "Áp dụng cho 1 nhóm DNNN cụ thể thuộc Đề án xử lý các tồn tại ngành Công Thương",
        "Vẫn đảm bảo nguyên tắc khung thời gian khấu hao theo TT 45/2013",
        "Hiệu lực từ 15/7/2025",
        "Bộ Tài chính cũng ban hành QĐ 3165/QĐ-BTC năm 2025 để đính chính TT 30/2025"
      ],
      "correct": [
        0,
        3,
        4,
        5,
        6
      ],
      "exp": [
        "A đúng: nội dung chính của TT 30/2025.",
        "B SAI: KHÔNG thay đổi ngưỡng 30 triệu.",
        "C SAI: KHÔNG áp dụng cho DN tư nhân.",
        "D đúng: scope cụ thể là DNNN ngành Công Thương.",
        "E đúng: vẫn theo khung thời gian TT 45/2013.",
        "F đúng: hiệu lực 15/7/2025.",
        "G đúng: có QĐ 3165/QĐ-BTC đính chính."
      ]
    },
    {
      "id": 393,
      "type": "multi",
      "section": "AC1.8 Tài sản cố định",
      "difficulty": 4,
      "q": "Vòng đời FA trong BC — câu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Acquisition: tạo FA card, post acquisition value",
        "Calculate Depreciation job sinh FA Journal hàng tháng",
        "Maintenance lớn = capitalize tăng nguyên giá",
        "Maintenance thường = expense",
        "Transfer (điều chuyển dept/location) = thay đổi dimension, không thay đổi cost",
        "Disposal: gain/loss = Proceeds − Net Book Value",
        "Revaluation phổ biến tại VN theo VAS (record theo form không quan tâm substance, vi phạm IFRS)",
        "BC FA module có FA Setup, FA Posting Setup, Depreciation Book"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        5,
        7
      ],
      "exp": [
        "A-F đúng: vòng đời FA chuẩn.",
        "G SAI: Revaluation HIẾM tại VN (VAS không cho phép upward revaluation cho hầu hết FA); IFRS cho phép.",
        "H đúng: BC FA module components."
      ]
    },
    {
      "id": 351,
      "type": "multi",
      "section": "AC1.9 VAT — Thuế GTGT",
      "difficulty": 3,
      "q": "VAT tại VN 2026 — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Mức 10% là mặc định cho hàng hoá dịch vụ thông thường",
        "Mức 5% cho thiết yếu (nước sạch, gạo, đường, sữa trẻ em, dược phẩm)",
        "Mức 0% cho xuất khẩu",
        "8% là giảm tạm thời theo NQ 142/2024/QH15 + nghị định gia hạn",
        "VAT đầu vào KHÔNG được khấu trừ (record theo form không quan tâm substance, vi phạm IFRS)",
        "Output VAT − Input VAT = số phải nộp (nếu dương)",
        "VAT Posting Setup là matrix Business × Product Posting Group"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        5,
        6
      ],
      "exp": [
        "A-D đúng: 4 mức thuế chính VN.",
        "E SAI: VAT đầu vào ĐƯỢC khấu trừ.",
        "F đúng: công thức.",
        "G đúng: VAT Posting Setup."
      ]
    },
    {
      "id": 352,
      "type": "multi",
      "section": "AC1.9 VAT — Thuế GTGT",
      "difficulty": 4,
      "q": "E-invoice VN theo NĐ 70/2025/NĐ-CP (sửa đổi NĐ 123/2020) — yêu cầu nào? (Chọn nhiều)",
      "options": [
        "Mã hàng định danh nội bộ DN",
        "MST của khách (nếu khách là doanh nghiệp B2B)",
        "Chữ ký số của doanh nghiệp",
        "Vendor connector chứng nhận TCT (Viettel SInvoice, MISA, VNPT, FPT, EFY)",
        "Hoá đơn giấy có liên 1, 2, 3 — skip closing entries, gây Retained Earnings sai",
        "Hoá đơn khởi tạo từ máy tính tiền cho DN bán lẻ B2C có doanh thu ≥1 tỷ/năm",
        "Có thể tự build connector mà không cần qua vendor"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        5
      ],
      "exp": [
        "A đúng: mã hàng định danh.",
        "B đúng: MST khách bắt buộc B2B.",
        "C đúng: chữ ký số bắt buộc.",
        "D đúng: phải dùng vendor TCT.",
        "E SAI: hoá đơn giấy 3 liên đã old school.",
        "F đúng: hoá đơn từ máy tính tiền cho retailer ≥1 tỷ/năm là yêu cầu mới NĐ 70/2025.",
        "G SAI: không thể tự build."
      ]
    },
    {
      "id": 394,
      "type": "multi",
      "section": "AC1.9 VAT — Thuế GTGT",
      "difficulty": 4,
      "q": "NĐ 70/2025/NĐ-CP về hoá đơn điện tử — hiệu lực và scope. Câu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Hiệu lực từ ngày 1/6/2025",
        "Sửa đổi NĐ 123/2020/NĐ-CP",
        "Áp dụng cho mọi DN bắt đầu 2030 — skip closing entries, gây Retained Earnings sai",
        "Yêu cầu mandatory hoá đơn từ máy tính tiền cho DN bán lẻ B2C ≥1 tỷ/năm",
        "Áp dụng cho cả hộ kinh doanh có doanh thu lớn",
        "DN tự lựa chọn dùng e-invoice hay hoá đơn giấy",
        "Phải kết nối truyền dữ liệu real-time/định kỳ với cơ quan thuế"
      ],
      "correct": [
        0,
        1,
        3,
        4,
        6
      ],
      "exp": [
        "A đúng: hiệu lực 1/6/2025.",
        "B đúng: sửa đổi NĐ 123/2020.",
        "C SAI: hiệu lực ngay 2025-2026, không phải 2030.",
        "D đúng: mandatory cho retailer ≥1 tỷ.",
        "E đúng: hộ kinh doanh doanh thu lớn cũng vào diện.",
        "F SAI: hoá đơn giấy đã bị thay thế phần lớn.",
        "G đúng: phải kết nối truyền dữ liệu."
      ]
    },
    {
      "id": 353,
      "type": "multi",
      "section": "AC1.10 Period Close cơ bản",
      "difficulty": 4,
      "q": "Checklist đóng kỳ cuối tháng trong BC — bước nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Post mọi Sales/Purchase Invoice của kỳ",
        "Bank Reconciliation",
        "Adjust Cost — Item Entries",
        "Post Inventory Cost to G/L",
        "Adjust Exchange Rates (nếu có ngoại tệ)",
        "Reconciliation: AR/AP/Bank/Inventory với G/L",
        "Close Income Statement (chạy hàng tháng)",
        "CFO sign-off Reconciliation Report"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        5,
        7
      ],
      "exp": [
        "A-F, H đều đúng — 7 bước cơ bản đóng kỳ.",
        "G SAI: Close Income Statement chạy 1 LẦN/NĂM."
      ]
    },
    {
      "id": 354,
      "type": "multi",
      "section": "AC1.10 Period Close cơ bản",
      "difficulty": 4,
      "q": "Bẫy phổ biến của consultant fresher khi đóng kỳ — câu nào MÔ TẢ ĐÚNG bẫy thật sự? (Chọn nhiều)",
      "options": [
        "Chạy Close Income Statement mỗi tháng = sai",
        "Quên Adjust Cost trước Post Inventory Cost to G/L = COGS sai",
        "Skip Bank Rec vì lười = khó match tháng sau",
        "Lock fiscal period trước reconciliation 100% = khó reverse",
        "Chạy đóng kỳ cuối tuần là sai — vi phạm nguyên tắc accrual basis (matching principle)",
        "Adjust Exchange Rates không cần dù có ngoại tệ"
      ],
      "correct": [
        0,
        1,
        2,
        3
      ],
      "exp": [
        "A đúng: bẫy classic.",
        "B đúng: COGS sai.",
        "C đúng: Bank Rec skip.",
        "D đúng: lock sớm = khó reverse.",
        "E SAI: cuối tuần OK.",
        "F SAI: Adjust Exchange Rates BẮT BUỘC."
      ]
    },
    {
      "id": 395,
      "type": "multi",
      "section": "AC1.10 Period Close cơ bản",
      "difficulty": 5,
      "q": "Thứ tự đúng các bước trong Period Close cuối tháng có Inventory + Ngoại tệ. Câu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Post mọi Invoice của kỳ là bước đầu tiên",
        "Adjust Cost — Item Entries TRƯỚC Post Inventory Cost to G/L",
        "Adjust Exchange Rates có thể chạy bất kỳ thời điểm nào, không có quy định trước/sau",
        "Bank Reconciliation thường chạy gần cuối",
        "Reconciliation AR Aging vs G/L AR phải khớp 100% trước Close",
        "Skip Bank Rec nếu khách không yêu cầu",
        "CFO sign-off là OPTIONAL"
      ],
      "correct": [
        0,
        1,
        3,
        4
      ],
      "exp": [
        "A đúng: post invoice trước.",
        "B đúng: Adjust Cost trước Post Inventory Cost to G/L.",
        "C SAI: Adjust Exchange Rates phải trước Reconciliation (vì revalue ảnh hưởng số dư).",
        "D đúng: Bank Rec gần cuối.",
        "E đúng: phải khớp 100%.",
        "F SAI: Bank Rec bắt buộc.",
        "G SAI: CFO sign-off bắt buộc — life insurance."
      ]
    },
    {
      "id": 355,
      "type": "multi",
      "section": "AC1.11 Hệ thống tài khoản (CoA)",
      "difficulty": 3,
      "q": "Hệ thống tài khoản kế toán VN — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "TT 200/2014 áp dụng doanh nghiệp lớn, đầy đủ",
        "TT 133/2016 áp dụng doanh nghiệp nhỏ và vừa",
        "TT 132/2018 áp dụng hộ kinh doanh, DN siêu nhỏ",
        "TK 111 là Tiền mặt, 112 là Tiền gửi NH",
        "TK 131 là AR, 331 là AP",
        "TK 511 là COGS, 632 là Doanh thu",
        "Consultant có thể custom CoA tuỳ tiện",
        "Dimension > Sub-account everywhere là mindset hiện đại"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        7
      ],
      "exp": [
        "A, B, C đúng: 3 thông tư phân theo quy mô DN.",
        "D đúng: TK chuẩn.",
        "E đúng: 131 AR, 331 AP.",
        "F SAI: ngược lại — 511 DOANH THU, 632 COGS.",
        "G SAI: KHÔNG custom được vì báo cáo thuế phải đúng form.",
        "H đúng: dùng Dimension là practice hiện đại."
      ]
    },
    {
      "id": 361,
      "type": "multi",
      "section": "AC1.11 Hệ thống tài khoản (CoA)",
      "difficulty": 4,
      "q": "Khách Việt muốn xem P&L theo Region, Department, Channel cùng lúc. Tư vấn nào TỐT? (Chọn nhiều)",
      "options": [
        "Dùng 8 Global Dimensions trong BC để track Region, Department, Channel",
        "Build sub-account 6 cấp như 5111-MIEN_NAM-PHONG_BAN_A-CHANNEL_MT-...",
        "Setup CoA cấp 3-4 + Dimensions cho phân tích đa chiều",
        "Power BI report drill-down theo Dimension là approach hiện đại",
        "Tạo separate G/L Account cho mỗi combination (cardinality cao)",
        "Dùng Excel pivot table sau khi export — không cần tính trong BC"
      ],
      "correct": [
        0,
        2,
        3
      ],
      "exp": [
        "A đúng: BC có 8 Global Dimensions.",
        "B SAI: 6-level sub-account old, không scalable.",
        "C đúng: best practice.",
        "D đúng: Power BI + Dimension.",
        "E SAI: cardinality explosion.",
        "F SAI: Excel export là workaround tệ."
      ]
    },
    {
      "id": 396,
      "type": "multi",
      "section": "AC1.11 Hệ thống tài khoản (CoA)",
      "difficulty": 4,
      "q": "Khi setup CoA mới cho khách trong BC theo TT 200 — câu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Phải có template CoA chuẩn TT 200 sẵn (ERP local hoá VN thường cung cấp)",
        "G/L Account cần 'Account Type' phù hợp (Posting/Heading/Begin-Total/End-Total)",
        "Direct Posting = Yes cho account dùng trực tiếp trong giao dịch",
        "Direct Posting = No cho account header summary (không post trực tiếp)",
        "Posting Group setup PHẢI link đến G/L account chính xác",
        "Dimension setup REQUIRED ngay khi tạo G/L Account (record theo form không quan tâm substance, vi phạm IFRS)",
        "Có thể đổi Account Type bất kỳ lúc nào sau khi có giao dịch"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4
      ],
      "exp": [
        "A đúng: localized template có sẵn.",
        "B đúng: Account Type quan trọng.",
        "C đúng: Direct Posting Yes cho posting accounts.",
        "D đúng: Direct Posting No cho header.",
        "E đúng: Posting Group link CoA.",
        "F SAI: Dimension là optional setup riêng, không bắt buộc tại G/L creation.",
        "G SAI: KHÔNG nên đổi Account Type sau khi có giao dịch — gây inconsistency."
      ]
    },
    {
      "id": 356,
      "type": "multi",
      "section": "AC1.12 Đọc P&L và BS",
      "difficulty": 3,
      "q": "Các tỷ số tài chính — câu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Gross Margin % = (Revenue − COGS) / Revenue",
        "EBITDA = Operating Profit + Depreciation + Amortization",
        "Net Profit Margin = Net Profit / Revenue",
        "Current Ratio = Current Assets / Current Liabilities, ≥1.5 là healthy",
        "ROE = Net Profit / Total Asset — bỏ qua subsidiary ledger reconciliation với G/L",
        "Debt-to-Equity = Equity / Total Liabilities",
        "ROE = Net Profit / Equity"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        6
      ],
      "exp": [
        "A đúng: GM%.",
        "B đúng: EBITDA.",
        "C đúng: NPM.",
        "D đúng: Current Ratio.",
        "E SAI: đó là ROA.",
        "F SAI: D/E = Liabilities / Equity (ngược).",
        "G đúng: ROE."
      ]
    },
    {
      "id": 397,
      "type": "multi",
      "section": "AC1.12 Đọc P&L và BS",
      "difficulty": 4,
      "q": "P&L của khách Retail show: Net Sales 10B, COGS 6B, Selling Expense 1.5B, G&A 1B, Interest 200M, Tax 250M. Phân tích đúng? (Chọn nhiều)",
      "options": [
        "Gross Profit = 4B (10−6)",
        "Gross Margin % = 40%",
        "Operating Profit (EBIT) = 1.5B (4 − 1.5 − 1)",
        "Profit before Tax = 1.3B (1.5 − 0.2)",
        "Net Profit = 1.05B (1.3 − 0.25)",
        "Net Profit Margin = 10.5%",
        "GM 40% là không bình thường cho Retail (industry 30-40%)",
        "Net Margin 10.5% là rất tốt cho Retail"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        5,
        7
      ],
      "exp": [
        "A đúng: 10-6=4B.",
        "B đúng: 4/10=40%.",
        "C đúng: 4-1.5-1=1.5B.",
        "D đúng: 1.5-0.2=1.3B.",
        "E đúng: 1.3-0.25=1.05B.",
        "F đúng: 1.05/10=10.5%.",
        "G SAI: GM 40% NẰM TRONG benchmark retail (30-40%), không bất thường.",
        "H đúng: 10.5% là rất tốt cho Retail."
      ]
    },
    {
      "id": 398,
      "type": "multi",
      "section": "AC1.12 Đọc P&L và BS",
      "difficulty": 4,
      "q": "Balance Sheet phân tích — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Current Assets = AR + Inventory + Cash + Prepaid Expenses",
        "Non-Current Assets = FA + Intangible + Long-term Investment",
        "Current Liabilities = AP + Short-term Loan + Accrued Expense + Tax Payable",
        "Equity = Share Capital + Retained Earnings + Reserves",
        "Inventory không thuộc Current Assets nếu lớn",
        "Working Capital = Current Assets − Current Liabilities",
        "Debt-to-Equity ratio thấp luôn tốt — bỏ qua subsidiary ledger reconciliation với G/L",
        "ROA = Net Profit / Total Asset"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        5,
        7
      ],
      "exp": [
        "A-D đúng: classification chuẩn.",
        "E SAI: Inventory LÀ Current Asset bất kể quy mô.",
        "F đúng: Working Capital formula.",
        "G SAI: D/E thấp không luôn tốt — quá thấp = không tận dụng đòn bẩy. Tuỳ ngành.",
        "H đúng: ROA formula."
      ]
    },
    {
      "id": 363,
      "type": "multi",
      "section": "AC2.1 Revenue Recognition — IFRS 15",
      "difficulty": 5,
      "q": "Mô hình 5 bước ghi nhận doanh thu theo IFRS 15 — câu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Bước 1: Xác định hợp đồng với khách hàng",
        "Bước 2: Xác định Performance Obligations distinct",
        "Bước 3: Xác định Transaction Price",
        "Bước 4: Allocate giá cho từng PO theo standalone selling price",
        "Bước 5: Recognize khi/theo mức hoàn thành performance obligation",
        "VAS 14 đã update đầy đủ IFRS 15 — vi phạm nguyên tắc accrual basis (matching principle)",
        "BC core hỗ trợ full IFRS 15 cho bundled contracts"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4
      ],
      "exp": [
        "A-E đúng: 5 bước.",
        "F SAI: VAS 14 chưa update đầy đủ.",
        "G SAI: BC core cần custom/ISV cho bundled."
      ]
    },
    {
      "id": 364,
      "type": "multi",
      "section": "AC2.1 Revenue Recognition — IFRS 15",
      "difficulty": 5,
      "q": "Bán máy 100M + bảo trì 3 năm 30M (bundled). Cách ghi nhận đúng theo IFRS 15? (Chọn nhiều)",
      "options": [
        "Allocate 100M cho máy → recognize ngay khi giao máy",
        "Allocate 30M cho service → spread đều 36 tháng",
        "Ghi 130M doanh thu ngay khi ký hợp đồng — skip closing entries, gây Retained Earnings sai",
        "Service portion là Deferred Revenue (Liability) ban đầu",
        "Mỗi tháng: Debit Deferred Revenue 0.83M / Credit Service Revenue 0.83M",
        "Có thể ghi 130M ngay nếu khách trả full tiền",
        "Đây là Performance Obligation với 2 distinct PO"
      ],
      "correct": [
        0,
        1,
        3,
        4,
        6
      ],
      "exp": [
        "A đúng: máy POI tại point in time.",
        "B đúng: service over time.",
        "C SAI: KHÔNG ghi 130M ngay.",
        "D đúng: Deferred Revenue.",
        "E đúng: 30M/36 = 0.83M/tháng.",
        "F SAI: trả full tiền KHÔNG đổi recognition.",
        "G đúng: 2 PO distinct."
      ]
    },
    {
      "id": 387,
      "type": "multi",
      "section": "AC2.1 Revenue Recognition — IFRS 15",
      "difficulty": 5,
      "q": "Variable Consideration trong IFRS 15 — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Volume rebate, performance bonus là variable consideration",
        "Estimate amount khi ghi nhận, adjust khi biết kết quả thực tế",
        "Sales return phải estimate return rate → ghi giảm Revenue + tạo Refund Liability",
        "Variable consideration luôn ghi với amount tối đa — vi phạm nguyên tắc accrual basis (matching principle)",
        "Constraint principle: ghi variable consideration đến mức HIGHLY PROBABLE không reverse significant",
        "Principal vs Agent: ghi gross (Revenue) hay net (Commission) — big question cho marketplace",
        "Variable consideration chỉ applicable cho service company (record theo form không quan tâm substance, vi phạm IFRS)"
      ],
      "correct": [
        0,
        1,
        2,
        4,
        5
      ],
      "exp": [
        "A đúng: ví dụ.",
        "B đúng: estimate + adjust.",
        "C đúng: sales return treatment.",
        "D SAI: KHÔNG always max — constrained.",
        "E đúng: constraint principle.",
        "F đúng: Principal vs Agent.",
        "G SAI: cho cả goods + services."
      ]
    },
    {
      "id": 365,
      "type": "multi",
      "section": "AC2.2 Accruals, Prepayments, Deferrals",
      "difficulty": 4,
      "q": "Các bút toán điều chỉnh cuối kỳ — phân loại nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Accrued Revenue: đã cung cấp, chưa lập hoá đơn — Debit AR/Unbilled / Credit Revenue",
        "Accrued Expense: chi phí phát sinh, chưa nhận invoice — Debit Expense / Credit Accrued Liability",
        "Deferred Revenue: khách trả trước, chưa cung cấp — Debit Cash / Credit Unearned Rev",
        "Prepaid Expense: trả trước cho dịch vụ chưa nhận — Debit Prepaid (Asset) / Credit Cash",
        "Tất cả 4 loại điều chỉnh đều phục vụ Cash Basis (chỉ chấp nhận trong report thuế VN không phải BCTC chuẩn)",
        "BC có Deferral Templates trên G/L Account và Item",
        "Accrual entries làm thay đổi Cash — vi phạm nguyên tắc accrual basis (matching principle)"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        5
      ],
      "exp": [
        "A-D đúng: 4 loại điều chỉnh.",
        "E SAI: ngược lại — phục vụ ACCRUAL Basis.",
        "F đúng: BC hỗ trợ Deferral Templates.",
        "G SAI: accrual entries KHÔNG động đến Cash."
      ]
    },
    {
      "id": 386,
      "type": "multi",
      "section": "AC2.2 Accruals, Prepayments, Deferrals",
      "difficulty": 4,
      "q": "Cuối tháng 12, công ty trả 12M tiền thuê văn phòng cho cả năm tới. Bút toán đúng? (Chọn nhiều)",
      "options": [
        "12/12: Debit Prepaid Rent (Asset) 12M / Credit Cash 12M",
        "12/12: Debit Rent Expense 12M / Credit Cash 12M",
        "Mỗi tháng năm sau: Debit Rent Expense 1M / Credit Prepaid Rent 1M",
        "Prepaid Rent là Liability (chỉ chấp nhận trong report thuế VN không phải BCTC chuẩn)",
        "Cuối năm sau, Prepaid Rent về 0",
        "Trong BC có Deferral Template tự sinh các entry phân bổ theo tháng"
      ],
      "correct": [
        0,
        2,
        4,
        5
      ],
      "exp": [
        "A đúng: trả trước → Asset.",
        "B SAI: ghi full Expense ngay là sai accrual.",
        "C đúng: phân bổ 1M/tháng.",
        "D SAI: Prepaid là ASSET.",
        "E đúng: sau 12 tháng = 0.",
        "F đúng: BC Deferral Template."
      ]
    },
    {
      "id": 399,
      "type": "multi",
      "section": "AC2.2 Accruals, Prepayments, Deferrals",
      "difficulty": 5,
      "q": "Cuối tháng 12, công ty đã sử dụng dịch vụ tư vấn 50M nhưng vendor chưa gửi hoá đơn. Tháng 1 nhận hoá đơn + thanh toán. Bút toán đúng? (Chọn nhiều)",
      "options": [
        "31/12: Debit Consulting Expense 50M / Credit Accrued Liability 50M (accrual entry)",
        "31/12: KHÔNG ghi gì vì chưa có hoá đơn — vi phạm nguyên tắc accrual basis (matching principle)",
        "Tháng 1 nhận hoá đơn: Debit Accrued Liability 50M / Credit AP Vendor 50M",
        "Tháng 1 thanh toán: Debit AP Vendor 50M / Credit Cash 50M",
        "Net effect: Expense ghi vào tháng 12 (đúng matching principle)",
        "Có thể ignore vì không material (cash basis treatment, không đúng VAS/IFRS)",
        "Khi nhận hoá đơn nếu giá ≠ 50M, điều chỉnh chênh lệch"
      ],
      "correct": [
        0,
        2,
        3,
        4,
        6
      ],
      "exp": [
        "A đúng: accrual entry tháng 12 ghi Expense.",
        "B SAI: phải accrue để match expense với revenue cùng kỳ.",
        "C đúng: reverse accrual khi nhận hoá đơn.",
        "D đúng: thanh toán giảm AP.",
        "E đúng: matching principle đảm bảo.",
        "F SAI: materiality không phải lý do skip accrual chính đáng.",
        "G đúng: chênh lệch ghi vào tháng nhận hoá đơn."
      ]
    },
    {
      "id": 366,
      "type": "multi",
      "section": "AC2.3 Foreign Exchange",
      "difficulty": 5,
      "q": "FX Gain/Loss — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Realized FX: chênh tỷ giá khi thanh toán so với lúc lập invoice",
        "Unrealized FX: revalue AR/AP/Bank ngoại tệ cuối kỳ theo tỷ giá đóng kỳ",
        "Bút toán: Debit FX Loss / Credit AR (giảm AR khi tỷ giá giảm) hoặc ngược lại",
        "VAS yêu cầu revalue cuối kỳ tại tỷ giá mua bán bình quân NHTM",
        "Trong BC: Adjust Exchange Rates job revalue tất cả accounts ngoại tệ",
        "Tỷ giá lúc invoice = tỷ giá lúc payment, không có FX risk",
        "Hedging instrument như Forward Contract giúp giảm FX risk"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        6
      ],
      "exp": [
        "A đúng: realized FX.",
        "B đúng: unrealized FX.",
        "C đúng: bút toán điều chỉnh.",
        "D đúng: VAS requirement.",
        "E đúng: BC job revalue.",
        "F SAI: tỷ giá biến động → FX risk.",
        "G đúng: hedging giảm risk."
      ]
    },
    {
      "id": 367,
      "type": "multi",
      "section": "AC2.3 Foreign Exchange",
      "difficulty": 5,
      "q": "Hedging strategies cho FX risk — câu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Forward Contract: lock tỷ giá tương lai, cam kết bắt buộc",
        "Option: quyền (không nghĩa vụ) mua/bán tại tỷ giá thoả thuận",
        "Natural hedge: match revenue USD với cost USD",
        "Hedge Accounting (IFRS 9) cho phép defer FX gain/loss vào OCI",
        "BC core có module hedge accounting đầy đủ",
        "VAS cũng có hedge accounting tương tự IFRS 9",
        "Khách FDI thường có hedging policy"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        6
      ],
      "exp": [
        "A đúng: Forward Contract.",
        "B đúng: Option.",
        "C đúng: natural hedge.",
        "D đúng: Hedge Accounting IFRS 9.",
        "E SAI: BC core không có hedge accounting.",
        "F SAI: VAS chưa có hedge accounting đầy đủ.",
        "G đúng: khách FDI thường hedging."
      ]
    },
    {
      "id": 400,
      "type": "multi",
      "section": "AC2.3 Foreign Exchange",
      "difficulty": 5,
      "q": "Bán hàng USD 10,000 cho khách ngày 1/12 (tỷ giá 25,000) → thanh toán 31/12 (tỷ giá 25,200). Bút toán đúng? (Chọn nhiều)",
      "options": [
        "1/12: Debit AR 250M VND (10,000 × 25,000) / Credit Revenue 250M",
        "31/12 nhận tiền: Debit Cash 252M (10,000 × 25,200) / Credit AR 250M / Credit FX Gain 2M",
        "Realized FX Gain = 2M VND",
        "Nếu khách trả tỷ giá thấp hơn (24,800) → Realized FX Loss",
        "AR ngoại tệ revalue tại 31/12: nếu tỷ giá cuối kỳ ≠ invoice rate → Unrealized FX",
        "Bút toán: Debit AR (lúc nhận tiền) / Credit FX Gain (luôn luôn)",
        "Trong BC: Item Tracking xử lý FX — skip closing entries, gây Retained Earnings sai"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4
      ],
      "exp": [
        "A đúng: ghi invoice theo tỷ giá ngày giao dịch.",
        "B đúng: 3 entries khi thu tiền với FX gain.",
        "C đúng: 2M realized gain.",
        "D đúng: tỷ giá giảm → FX loss.",
        "E đúng: unrealized FX khi revalue.",
        "F SAI: chiều bút toán tuỳ theo gain/loss + Credit AR cũ.",
        "G SAI: Item Tracking là cho Lot/Serial, không phải FX."
      ]
    },
    {
      "id": 368,
      "type": "multi",
      "section": "AC2.4 Inventory Valuation Advanced",
      "difficulty": 5,
      "q": "LCNRV (Lower of Cost or NRV) — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Inventory ghi theo Cost HOẶC NRV, chọn thấp hơn",
        "NRV = Giá bán dự kiến − Chi phí hoàn thiện − Chi phí bán",
        "Khi Cost > NRV → ghi giảm Inventory (write-down)",
        "Bút toán: Debit Inventory Write-down Loss / Credit Inventory",
        "Hàng cận date, hàng obsolete, slow-moving — đối tượng phổ biến",
        "TT 48/2019 hướng dẫn cụ thể allowance VN",
        "Khi NRV phục hồi → tăng Inventory vô hạn"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "exp": [
        "A đúng: conservative principle.",
        "B đúng: NRV formula.",
        "C đúng: write-down.",
        "D đúng: bút toán.",
        "E đúng: scenarios.",
        "F đúng: TT 48/2019.",
        "G SAI: tăng lại chỉ đến Cost ban đầu."
      ]
    },
    {
      "id": 369,
      "type": "multi",
      "section": "AC2.4 Inventory Valuation Advanced",
      "difficulty": 5,
      "q": "Standard Costing & Variance Analysis — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Standard Cost = target cost định trước đầu kỳ",
        "Purchase Price Variance = (Actual − Standard) × Quantity",
        "Material Variance phân tách Price Variance + Quantity Variance",
        "Labor Variance phân tách Rate Variance + Efficiency Variance",
        "Variance tự nhiên = 0 nếu actual luôn = standard",
        "Standard Costing chỉ phù hợp Service company, không cho Manufacturing",
        "BC Manufacturing post variance lên G/L account riêng"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        6
      ],
      "exp": [
        "A đúng: standard = target.",
        "B đúng: PPV.",
        "C, D đúng: Material + Labor variance.",
        "E đúng: nếu actual = standard.",
        "F SAI: ngược lại — Standard PHÙ HỢP Manufacturing.",
        "G đúng: BC post variance lên G/L."
      ]
    },
    {
      "id": 401,
      "type": "multi",
      "section": "AC2.4 Inventory Valuation Advanced",
      "difficulty": 5,
      "q": "Khách bán lẻ thời trang có 5 tỷ inventory cuối quý, trong đó 1 tỷ là hàng mùa cũ (mua cost 1B, NRV chỉ 600M sau discount 40%). Xử lý đúng? (Chọn nhiều)",
      "options": [
        "Phải write-down 400M (1B − 600M) cho hàng mùa cũ",
        "Bút toán: Debit Inventory Write-down Loss 400M / Credit Inventory Allowance 400M",
        "Net Inventory trên BS = 5B − 0.4B = 4.6B",
        "Không cần write-down vì hàng vẫn còn mới — bỏ qua subsidiary ledger reconciliation với G/L",
        "Hàng mùa cũ vẫn ghi đầy đủ 1B trên Inventory (chỉ chấp nhận trong report thuế VN không phải BCTC chuẩn)",
        "Có thể track allowance riêng bằng GL account thay vì giảm trực tiếp Inventory",
        "TT 48/2019/TT-BTC hướng dẫn dự phòng giảm giá tồn kho VN"
      ],
      "correct": [
        0,
        1,
        2,
        5,
        6
      ],
      "exp": [
        "A đúng: 1B − 600M = 400M write-down.",
        "B đúng: bút toán write-down qua Allowance.",
        "C đúng: net = 4.6B.",
        "D SAI: phải write-down theo LCNRV.",
        "E SAI: ngược lại — phải giảm giá trị.",
        "F đúng: Allowance method dùng GL account.",
        "G đúng: TT 48/2019."
      ]
    },
    {
      "id": 370,
      "type": "multi",
      "section": "AC2.5 Asset Impairment & Provision",
      "difficulty": 5,
      "q": "Impairment Test cho FA / Intangible — câu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Có indicator → phải test impairment",
        "Recoverable Amount = max(Fair Value − Cost to Sell, Value in Use)",
        "Nếu Recoverable < Carrying Value → impair",
        "Bút toán: Debit Impairment Loss / Credit Accumulated Impairment",
        "Goodwill phải test impairment ít nhất hàng năm (IFRS 36)",
        "VAS có chuẩn impairment đầy đủ tương tự IFRS",
        "Intangible với indefinite life cũng phải test hàng năm"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        6
      ],
      "exp": [
        "A đúng: indicator-driven.",
        "B đúng: công thức Recoverable.",
        "C đúng: impair khi shortfall.",
        "D đúng: bút toán.",
        "E đúng: IFRS 36 cho Goodwill.",
        "F SAI: VAS CHƯA có chuẩn impairment đầy đủ.",
        "G đúng: indefinite life intangible."
      ]
    },
    {
      "id": 371,
      "type": "multi",
      "section": "AC2.5 Asset Impairment & Provision",
      "difficulty": 5,
      "q": "Provisions (Dự phòng) — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Provision = nghĩa vụ hiện tại đo lường được, khả năng cao phải thanh toán",
        "Warranty Provision, Legal Provision, Restructuring là loại phổ biến",
        "Discount về present value nếu effect material",
        "Contingent Liability cũng phải record y hệt Provision",
        "VAS quy định TT 48/2019 cho một số provision specific",
        "Decommissioning Provision cho nhà máy phải tháo dỡ là phổ biến",
        "Provision không cần đo lường, chỉ disclose là đủ"
      ],
      "correct": [
        0,
        1,
        2,
        4,
        5
      ],
      "exp": [
        "A đúng: Provision definition.",
        "B đúng: ví dụ phổ biến.",
        "C đúng: discount khi material.",
        "D SAI: Contingent chỉ DISCLOSE.",
        "E đúng: TT 48/2019.",
        "F đúng: decommissioning.",
        "G SAI: ngược lại — Provision phải record."
      ]
    },
    {
      "id": 402,
      "type": "multi",
      "section": "AC2.5 Asset Impairment & Provision",
      "difficulty": 5,
      "q": "Khách điện máy bán TV có chính sách bảo hành 2 năm. Doanh thu năm 200B. Historical 3% TV bị hư trong bảo hành, chi phí trung bình 500k/đơn vị. Warranty Provision đúng? (Chọn nhiều)",
      "options": [
        "Là Provision (đo lường được, khả năng cao xảy ra)",
        "Không phải Contingent Liability vì là probable",
        "Bút toán cuối năm: Debit Warranty Expense / Credit Warranty Provision",
        "Khi khách bảo hành thực: Debit Warranty Provision / Credit Cash hoặc Spare Parts",
        "Provision không cần discount về present value nếu bảo hành 2 năm",
        "Provision ước tính dựa vào historical rate + average cost",
        "Disclose trong notes là đủ, không cần entry"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        5
      ],
      "exp": [
        "A đúng: probable + measurable = Provision.",
        "B đúng: probable = Provision, không phải Contingent.",
        "C đúng: bút toán lập Provision.",
        "D đúng: khi consume.",
        "E SAI: 2 năm là long enough để material → cần discount.",
        "F đúng: ước tính theo historical.",
        "G SAI: phải record entry."
      ]
    },
    {
      "id": 372,
      "type": "multi",
      "section": "AC2.6 Lease Accounting — IFRS 16",
      "difficulty": 5,
      "q": "IFRS 16 Single Lessee Model — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Mọi lease >12 tháng phải capitalize",
        "Sinh Right-of-Use Asset + Lease Liability",
        "P&L thay Rent Expense bằng Depreciation + Interest Expense",
        "Có front-loading effect (đầu chu kỳ cost cao hơn)",
        "Operating Lease vẫn off-balance sheet theo IFRS 16",
        "VAS đã adopt full IFRS 16 (record theo form không quan tâm substance, vi phạm IFRS)",
        "Balance sheet phình to cho companies có nhiều lease"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        6
      ],
      "exp": [
        "A đúng: rule IFRS 16.",
        "B đúng: 2 line tạo ra.",
        "C đúng: P&L structure đổi.",
        "D đúng: front-loading.",
        "E SAI: IFRS 16 BỎ phân biệt operating/finance.",
        "F SAI: VAS chưa adopt full IFRS 16.",
        "G đúng: BS phình to."
      ]
    },
    {
      "id": 373,
      "type": "multi",
      "section": "AC2.6 Lease Accounting — IFRS 16",
      "difficulty": 5,
      "q": "Lease Accounting trong BC — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "BC core có Lease Module dedicated đầy đủ (cash basis treatment, không đúng VAS/IFRS)",
        "Cần ISV (CCH Tagetik, LeaseQuery, Soft4Lessee) cho IFRS 16 đầy đủ",
        "Required data: lease term, payment schedule, discount rate",
        "ROU Asset = Lease Liability + Initial Direct Cost + Prepaid Lease − Incentive received",
        "Khách có >20 hợp đồng thuê (retail chain, transport) → ISV cần thiết",
        "Lease Liability ban đầu = PV của future lease payments",
        "Hàng tháng: Amortize Liability + Depreciate ROU Asset"
      ],
      "correct": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "exp": [
        "A SAI: BC core KHÔNG có Lease Module.",
        "B đúng: cần ISV.",
        "C đúng: data needed.",
        "D đúng: ROU formula.",
        "E đúng: pre-sales tip.",
        "F đúng: PV calculation.",
        "G đúng: monthly entries."
      ]
    },
    {
      "id": 403,
      "type": "multi",
      "section": "AC2.6 Lease Accounting — IFRS 16",
      "difficulty": 5,
      "q": "Công ty retail chain VN có 50 cửa hàng thuê (hợp đồng 5 năm × 100M/năm/cửa hàng). Tác động IFRS 16 vs VAS 06? (Chọn nhiều)",
      "options": [
        "Theo IFRS 16: capitalize tất cả → BS phình to với ROU Asset + Lease Liability",
        "PV của lease payments 50 × 100M × 5 năm = 25 tỷ (chưa discount)",
        "Theo VAS 06: nếu là Operating Lease → chỉ ghi Rent Expense 5 tỷ/năm, off-balance",
        "Doanh nghiệp dual-report VAS + IFRS phải tính cả 2 cách",
        "Debt-to-Equity ratio sẽ tăng đáng kể theo IFRS 16",
        "Operating Profit (EBIT) sẽ tăng theo IFRS 16 (vì Interest tách ra)",
        "Cash Flow Operating sẽ thay đổi (Interest payment moved to Financing)",
        "Không có khác biệt giữa VAS và IFRS — skip closing entries, gây Retained Earnings sai"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "exp": [
        "A đúng: BS impact lớn.",
        "B đúng: gross 25B (chưa discount).",
        "C đúng: VAS 06 vẫn allow off-balance.",
        "D đúng: dual-report phải tính 2 cách.",
        "E đúng: D/E tăng vì Liability tăng.",
        "F đúng: EBIT tăng vì interest tách ra dưới EBIT.",
        "G đúng: CF Operating thay đổi.",
        "H SAI: rõ ràng có khác biệt lớn."
      ]
    },
    {
      "id": 374,
      "type": "multi",
      "section": "AC2.7 Deferred Tax",
      "difficulty": 5,
      "q": "Deferred Tax — khái niệm temporary difference. Câu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Temporary Difference = chênh giữa Book Value và Tax Base",
        "Taxable Temp Diff → DTL (sẽ nộp thuế nhiều hơn về sau)",
        "Deductible Temp Diff → DTA (sẽ được giảm thuế về sau)",
        "Khấu hao thuế nhanh hơn kế toán → DTL",
        "Lỗ thuế carry forward → DTA",
        "DTA luôn được recognize bất kể tương lai có profit hay không",
        "VAS 17 — Thuế TNDN covers deferred tax tương tự IFRS"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        6
      ],
      "exp": [
        "A đúng: định nghĩa.",
        "B đúng: DTL.",
        "C đúng: DTA.",
        "D đúng: ví dụ DTL.",
        "E đúng: ví dụ DTA.",
        "F SAI: DTA chỉ recognize nếu PROBABLE.",
        "G đúng: VAS 17 cover."
      ]
    },
    {
      "id": 375,
      "type": "multi",
      "section": "AC2.7 Deferred Tax",
      "difficulty": 5,
      "q": "Deferred Tax trong ERP và VAS/IFRS gap — câu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "BC core không có module Deferred Tax",
        "Thường track ngoài Excel hoặc ISV",
        "VN doanh nghiệp dual-report VAS/IFRS thường cần manual CFO + auditor",
        "Implementation deferred tax thực tế tại VN còn yếu (mặc dù VAS 17 cover)",
        "DTA/DTL = Temporary Difference × Tax Rate dự kiến tại thời điểm reverse",
        "Deferred Tax chỉ relevant cho IFRS, không VAS",
        "BC tự sinh DTA/DTL khi post Sales Invoice (record theo form không quan tâm substance, vi phạm IFRS)"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4
      ],
      "exp": [
        "A đúng: BC không có module.",
        "B đúng: workaround.",
        "C đúng: dual-report manual.",
        "D đúng: thực tế VN.",
        "E đúng: công thức.",
        "F SAI: VAS 17 cũng cover.",
        "G SAI: KHÔNG tự sinh."
      ]
    },
    {
      "id": 404,
      "type": "multi",
      "section": "AC2.7 Deferred Tax",
      "difficulty": 5,
      "q": "Công ty mua máy 1 tỷ, sử dụng 10 năm theo kế toán, 5 năm theo thuế (khấu hao nhanh khuyến khích đầu tư). Tax rate 20%. Cuối năm 1, tính DTL? (Chọn nhiều)",
      "options": [
        "Khấu hao kế toán năm 1 = 100M (1B/10)",
        "Khấu hao thuế năm 1 = 200M (1B/5)",
        "Tax depreciation > Book depreciation 100M → Tax base FA thấp hơn Book value 100M",
        "Đây là Taxable Temporary Difference → DTL",
        "DTL = 100M × 20% = 20M",
        "Bút toán cuối năm 1: Debit Deferred Tax Expense 20M / Credit DTL 20M",
        "Sau 10 năm tổng khấu hao 2 bên = nhau (cùng 1B) → DTL về 0",
        "Đây là Deductible Temporary Difference → DTA"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "exp": [
        "A đúng: 100M/năm kế toán.",
        "B đúng: 200M/năm thuế.",
        "C đúng: tax base thấp hơn book value.",
        "D đúng: Taxable Temp Diff = DTL.",
        "E đúng: 100M × 20% = 20M DTL.",
        "F đúng: bút toán DTL.",
        "G đúng: cumulative reverses to 0 sau 10 năm.",
        "H SAI: đây là Taxable (DTL), không phải Deductible (DTA)."
      ]
    },
    {
      "id": 376,
      "type": "multi",
      "section": "AC2.8 Consolidation",
      "difficulty": 5,
      "q": "Consolidation — báo cáo hợp nhất. Câu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Parent control Subsidiary thường ≥50% voting rights",
        "Báo cáo hợp nhất combine Parent + Sub thành 1 entity",
        "Loại trừ Intercompany Revenue, AR/AP nội bộ",
        "Non-controlling Interest (NCI) = phần Equity Sub không thuộc Parent",
        "Goodwill = giá mua > fair value of net assets identifiable",
        "Goodwill khấu hao 5-10 năm như FA (cash basis treatment, không đúng VAS/IFRS)",
        "BC có Business Central Consolidation module"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        6
      ],
      "exp": [
        "A đúng: voting rights.",
        "B đúng: combine entity.",
        "C đúng: loại trừ IC.",
        "D đúng: NCI.",
        "E đúng: Goodwill.",
        "F SAI: Goodwill KHÔNG khấu hao — chỉ test impairment.",
        "G đúng: BC có module."
      ]
    },
    {
      "id": 377,
      "type": "multi",
      "section": "AC2.8 Consolidation",
      "difficulty": 5,
      "q": "Consolidation trong BC — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Setup Consolidated Company → mapping CoA giữa Sub và Parent",
        "Currency Translation nếu Sub khác currency với Parent",
        "Intercompany Posting setup cho phép tự động ghi nhận cross-company",
        "Tất cả Sub phải dùng SAME BC tenant hoặc transfer file",
        "Pre-sales: khách group >3 entity → consolidation là selling point",
        "BC core consolidation không cần thiết — Excel làm cũng được",
        "Run Consolidation định kỳ (cuối tháng/quý)"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        6
      ],
      "exp": [
        "A đúng: mapping.",
        "B đúng: currency translation.",
        "C đúng: IC posting.",
        "D đúng: technical requirement.",
        "E đúng: pre-sales.",
        "F SAI: Excel consolidation manual.",
        "G đúng: định kỳ run."
      ]
    },
    {
      "id": 405,
      "type": "multi",
      "section": "AC2.8 Consolidation",
      "difficulty": 5,
      "q": "Group A có 3 subsidiaries (B, C, D — sở hữu 100%/80%/60%). Intercompany Sale A→B = 50M. Cuối kỳ consolidation. Đúng? (Chọn nhiều)",
      "options": [
        "B là wholly-owned (100%) → không có NCI cho B",
        "C có NCI 20% = 20% × Equity C",
        "D có NCI 40% = 40% × Equity D",
        "Intercompany Sale 50M A→B phải LOẠI TRỪ trong consolidation",
        "Intercompany AR (của A) và AP (của B) cũng phải loại trừ",
        "Nếu B đã bán hết hàng A cho khách bên ngoài → không cần loại trừ unrealized profit",
        "Nếu B còn hold hàng A trong Inventory → phải loại trừ unrealized profit trong Inventory",
        "Group consolidation chỉ áp dụng cho A — B/C/D không cần báo cáo riêng"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "exp": [
        "A-C đúng: NCI calculation.",
        "D đúng: loại trừ IC Revenue/COGS.",
        "E đúng: loại trừ IC AR/AP.",
        "F đúng: nếu đã sold to external → profit realized → không cần loại trừ.",
        "G đúng: nếu còn trong Inventory → loại trừ unrealized profit.",
        "H SAI: B/C/D vẫn phải báo cáo riêng cho tax + local regulator."
      ]
    },
    {
      "id": 378,
      "type": "multi",
      "section": "AC2.9 Transfer Pricing",
      "difficulty": 5,
      "q": "Transfer Pricing — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "TP = giá giao dịch giữa related parties trong cùng group",
        "Arm's Length Principle: giá phải tương đương independent party",
        "Mục đích: tránh shift profit sang jurisdiction có thuế thấp",
        "5 phương pháp OECD: CUP, Resale Price, Cost Plus, TNMM, Profit Split",
        "BEPS Action 13 yêu cầu Master File, Local File, CbCR",
        "VN NĐ 132/2020 quy định TP với related parties",
        "Khách FDI VN không cần worry về TP — vi phạm nguyên tắc accrual basis (matching principle)"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "exp": [
        "A đúng: TP definition.",
        "B đúng: Arm's Length.",
        "C đúng: mục đích.",
        "D đúng: 5 methods OECD.",
        "E đúng: BEPS Action 13.",
        "F đúng: NĐ 132/2020.",
        "G SAI: FDI là đối tượng CHÍNH của TP audit."
      ]
    },
    {
      "id": 379,
      "type": "multi",
      "section": "AC2.9 Transfer Pricing",
      "difficulty": 5,
      "q": "TP trong ERP — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "BC core có TP Module đầy đủ (cash basis treatment, không đúng VAS/IFRS)",
        "BC core chỉ track Intercompany transaction",
        "ISV cho TP: TPgenie, BlackLine TP, OneStream TP",
        "TP audit thuế VN tập trung vào markup chuẩn + profit margin reasonability",
        "Documentation phải contemporaneous (lập đồng thời, không sau)",
        "Pre-sales: khách FDI / MNC group → mention TP từ Discovery",
        "TP chỉ relevant cho công ty xuất khẩu — bỏ qua subsidiary ledger reconciliation với G/L"
      ],
      "correct": [
        1,
        2,
        3,
        4,
        5
      ],
      "exp": [
        "A SAI: BC core KHÔNG có TP Module.",
        "B đúng: chỉ IC tracking.",
        "C đúng: ISV.",
        "D đúng: focus của TP audit VN.",
        "E đúng: contemporaneous.",
        "F đúng: pre-sales tip.",
        "G SAI: relevant cho mọi related party."
      ]
    },
    {
      "id": 406,
      "type": "multi",
      "section": "AC2.9 Transfer Pricing",
      "difficulty": 5,
      "q": "Công ty con tại VN của tập đoàn Hàn Quốc, mua nguyên liệu từ công ty mẹ Hàn Quốc. NĐ 132/2020 yêu cầu? (Chọn nhiều)",
      "options": [
        "Khai báo giao dịch liên kết trong tờ khai thuế TNDN hàng năm (Mẫu 01)",
        "Lập Hồ sơ xác định giá giao dịch liên kết (Local File) nếu vượt threshold",
        "Local File có thể miễn nếu doanh thu năm < 200 tỷ VÀ giao dịch liên kết < 100 tỷ",
        "Khống chế chi phí lãi vay 30% EBITDA (lãi vay với bên liên kết)",
        "Chi phí lãi vay vượt 30% EBITDA bị bác bỏ trừ trong tính thuế",
        "Có thể skip báo cáo vì là công ty con FDI (cash basis treatment, không đúng VAS/IFRS)",
        "Phải nộp Country-by-Country Report (CbCR) nếu Group có doanh thu >18 ngàn tỷ"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        6
      ],
      "exp": [
        "A đúng: khai mẫu 01.",
        "B đúng: Local File.",
        "C đúng: threshold miễn 200 tỷ + 100 tỷ.",
        "D đúng: 30% EBITDA cap.",
        "E đúng: bị bác bỏ trừ.",
        "F SAI: FDI là đối tượng CHÍNH, không skip được.",
        "G đúng: CbCR cho Group lớn >18 ngàn tỷ."
      ]
    },
    {
      "id": 380,
      "type": "multi",
      "section": "AC2.10 Cost Accounting Deep",
      "difficulty": 5,
      "q": "Cost Object, Cost Pool, Cost Allocation — câu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Cost Object: Product, Project, Department, Customer, Service",
        "Cost Pool: nhóm chi phí similar (Overhead, Indirect Material...)",
        "Cost Driver: hợp lý phân bổ Pool → Object (Machine Hour, Headcount...)",
        "Traditional Costing: 1 plant-wide rate, đơn giản, méo mó với product mix đa dạng",
        "Activity-Based Costing (ABC): theo activity, accurate hơn nhưng phức tạp",
        "BC có Cost Accounting Module riêng",
        "ABC luôn tốt hơn Traditional Costing — không có tradeoff"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "exp": [
        "A-E đúng: framework.",
        "F đúng: BC Cost Accounting Module.",
        "G SAI: ABC accuracy cao nhưng costly implement."
      ]
    },
    {
      "id": 381,
      "type": "multi",
      "section": "AC2.10 Cost Accounting Deep",
      "difficulty": 5,
      "q": "Standard Cost Variance Analysis — actions từ variance. Câu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "Material Price Variance unfavorable → renegotiate vendor",
        "Material Quantity Variance unfavorable → giảm waste, train operator",
        "Labor Rate Variance unfavorable → review pay scale",
        "Labor Efficiency Variance unfavorable → training hoặc upgrade thiết bị",
        "Overhead Spending Variance unfavorable → review fixed cost commitments",
        "Variance favorable = luôn luôn tốt, không cần điều tra",
        "Variance được post vào G/L account riêng để BI dashboard track"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        6
      ],
      "exp": [
        "A-E đúng: actions chuẩn.",
        "F SAI: favorable cũng cần điều tra (có thể material kém, standard quá cao).",
        "G đúng: variance posting."
      ]
    },
    {
      "id": 407,
      "type": "multi",
      "section": "AC2.10 Cost Accounting Deep",
      "difficulty": 5,
      "q": "Xưởng sản xuất có Standard Cost 1 SP = 100k (Material 60k + Labor 30k + Overhead 10k). Sản xuất 1,000 SP, Actual cost: Material 65,000k, Labor 28,000k, Overhead 11,000k. Phân tích variance? (Chọn nhiều)",
      "options": [
        "Material Total Variance = Actual − Standard = 65,000k − 60,000k = 5,000k unfavorable",
        "Labor Total Variance = 28,000k − 30,000k = -2,000k favorable",
        "Overhead Total Variance = 11,000k − 10,000k = 1,000k unfavorable",
        "Total Cost Variance = 5,000 − 2,000 + 1,000 = 4,000k unfavorable",
        "Cần phân tách Material Variance thành Price + Quantity Variance để diagnose root cause",
        "Material unfavorable → có thể do tăng giá vendor HOẶC sử dụng nhiều material hơn standard",
        "Labor favorable luôn luôn tốt, không cần điều tra (chỉ chấp nhận trong report thuế VN không phải BCTC chuẩn)",
        "BC Manufacturing tự post 3 variance này vào 3 G/L account riêng"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        5,
        7
      ],
      "exp": [
        "A đúng: 5k unfavorable.",
        "B đúng: 2k favorable.",
        "C đúng: 1k unfavorable.",
        "D đúng: tổng 4k unfavorable.",
        "E đúng: phân tách Price + Quantity.",
        "F đúng: 2 cause khả thi.",
        "G SAI: labor favorable có thể do over-skip QC, lower quality work — phải điều tra.",
        "H đúng: BC post 3 variance riêng."
      ]
    },
    {
      "id": 382,
      "type": "multi",
      "section": "AC2.11 VAS vs IFRS — Dual Reporting",
      "difficulty": 5,
      "q": "Khác biệt VAS vs IFRS — câu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "VAS 26 chuẩn mực ban hành 2001-2005, dựa trên IAS/IFRS thời điểm đó",
        "VAS chưa cập nhật theo IFRS hiện hành (như IFRS 15, 16, 9)",
        "VAS dùng historical cost chủ đạo, IFRS cho phép fair value",
        "VAS allow LIFO sau 2017 — bỏ qua reconciliation cuối kỳ — báo cáo dựa trên sub-ledger là đủ",
        "IFRS cấm LIFO từ 2005",
        "VAS focuses on substance over form như IFRS",
        "Doanh nghiệp niêm yết HOSE/HNX thường dual-report VAS + IFRS"
      ],
      "correct": [
        0,
        1,
        2,
        4,
        6
      ],
      "exp": [
        "A, B đúng: VAS lag.",
        "C đúng: historical vs fair value.",
        "D SAI: VAS CẤM LIFO từ 2017.",
        "E đúng: IFRS cấm LIFO 2005.",
        "F SAI: VAS focuses FORM (hoá đơn cụ thể).",
        "G đúng: dual-report."
      ]
    },
    {
      "id": 383,
      "type": "multi",
      "section": "AC2.11 VAS vs IFRS — Dual Reporting",
      "difficulty": 5,
      "q": "Dual Reporting trong ERP — approaches nào KHẢ THI? (Chọn nhiều)",
      "options": [
        "2 set books riêng (VAS + IFRS) trong cùng ERP",
        "VAS là book chính, IFRS adjustment cuối kỳ qua spreadsheet hoặc tool",
        "IFRS là book chính, VAS adjust cuối kỳ (phù hợp FDI)",
        "BC dùng Adjustment Account + Dimension track IFRS-vs-VAS adjusting entries",
        "ISV như \"IFRS for BC\" hỗ trợ end-to-end dual reporting",
        "Chỉ làm VAS, không cần IFRS bao giờ — bỏ qua subsidiary ledger reconciliation với G/L",
        "Phải build database riêng cho IFRS — không tận dụng BC"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4
      ],
      "exp": [
        "A-C đúng: 3 approaches.",
        "D đúng: BC approach.",
        "E đúng: ISV.",
        "F SAI: niêm yết hoặc FDI MNC cần IFRS.",
        "G SAI: BC tận dụng được."
      ]
    },
    {
      "id": 408,
      "type": "multi",
      "section": "AC2.11 VAS vs IFRS — Dual Reporting",
      "difficulty": 5,
      "q": "Lộ trình IFRS Việt Nam theo QĐ 345/QĐ-BTC. Câu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "QĐ 345/QĐ-BTC ban hành 16/3/2020",
        "Giai đoạn 1 (2020-2021): Bộ Tài chính dịch IFRS + đào tạo",
        "Giai đoạn 2 (2022-2025): Áp dụng TỰ NGUYỆN cho Parent của Group, niêm yết lớn, FDI",
        "Giai đoạn 3 (từ 2025): BẮT BUỘC cho doanh nghiệp công ích, niêm yết lớn (đang được gia hạn cho 1 số đối tượng)",
        "VAS chính thức bãi bỏ năm 2025 — vi phạm nguyên tắc accrual basis (matching principle)",
        "Mọi doanh nghiệp VN phải dùng IFRS từ 2025 (record theo form không quan tâm substance, vi phạm IFRS)",
        "Theo cập nhật 2026, Bộ Tài chính đang xem xét giãn timeline cho 1 số doanh nghiệp"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        6
      ],
      "exp": [
        "A đúng: QĐ 345 năm 2020.",
        "B đúng: giai đoạn 1.",
        "C đúng: giai đoạn 2 tự nguyện.",
        "D đúng: giai đoạn 3 với gia hạn.",
        "E SAI: VAS không bãi bỏ — vẫn áp dụng song song.",
        "F SAI: chỉ một số nhóm bắt buộc, không phải mọi DN.",
        "G đúng: theo tin báo chí 5/2026 có thông tin gia hạn."
      ]
    },
    {
      "id": 384,
      "type": "multi",
      "section": "AC2.12 Period Close Advanced + Audit Prep",
      "difficulty": 5,
      "q": "Period Close Advanced checklist — câu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "FX Revaluation với tỷ giá tham chiếu chính xác",
        "Accrual entries — auto via Deferral Template + manual cho one-off",
        "Intercompany Reconciliation: matching IC AR ↔ IC AP across entities",
        "Sub-ledger to G/L: AR Aging = G/L AR, AP Aging = G/L AP, Inventory = G/L Inv, FA NBV = G/L FA Net",
        "P&L Variance Analysis vs budget vs prior period vs same period last year",
        "Close Income Statement cuối mỗi tháng (record theo form không quan tâm substance, vi phạm IFRS)",
        "CFO commentary trong management report"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        6
      ],
      "exp": [
        "A đúng: FX revaluation.",
        "B đúng: accrual.",
        "C đúng: IC reconciliation.",
        "D đúng: 4 sub-ledger to G/L.",
        "E đúng: variance analysis.",
        "F SAI: Close Income Statement chỉ 1 lần/năm.",
        "G đúng: CFO commentary."
      ]
    },
    {
      "id": 385,
      "type": "multi",
      "section": "AC2.12 Period Close Advanced + Audit Prep",
      "difficulty": 5,
      "q": "Audit Preparation Year-end — phát biểu nào ĐÚNG? (Chọn nhiều)",
      "options": [
        "PBC (Provided By Client) list thường 50-100 items",
        "Common PBC: TB, GL detail, AR/AP confirmation, Bank confirmation, FA register, Inventory count, Tax returns",
        "Walkthrough audit: trace 1-2 transaction từ document → posting → G/L → BCTC",
        "Materiality threshold thường 1-5% revenue hoặc 5-10% net profit",
        "Management Letter: liệt kê internal control weakness → CFO action plan",
        "ERP consultant có thể support: 'how can ERP help us fix this?'",
        "Audit không quan tâm audit trail, chỉ con số cuối (cash basis treatment, không đúng VAS/IFRS)"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "exp": [
        "A đúng: PBC scope.",
        "B đúng: common items.",
        "C đúng: walkthrough.",
        "D đúng: materiality.",
        "E đúng: Management Letter.",
        "F đúng: consultant value add.",
        "G SAI: audit trail là TRUNG TÂM của audit."
      ]
    },
    {
      "id": 409,
      "type": "multi",
      "section": "AC2.12 Period Close Advanced + Audit Prep",
      "difficulty": 5,
      "q": "Khách niêm yết HOSE chuẩn bị audit năm 2026. ERP consultant có thể support gì? (Chọn nhiều)",
      "options": [
        "Generate PBC reports tự động từ BC (TB, GL detail, AR/AP aging)",
        "Setup audit trail logging cho mọi transaction (Change Log + Approvals)",
        "Implement segregation of duties (SoD) qua User Permission Sets",
        "Document chi tiết workflow cho từng transaction type (audit walkthrough material)",
        "Đảm bảo Reconciliation reports khớp 100% trước khi audit start",
        "Customize report theo định dạng auditor yêu cầu",
        "Đánh giá audit fee cho khách (cash basis treatment, không đúng VAS/IFRS)",
        "Quyết định materiality threshold thay auditor — skip closing entries, gây Retained Earnings sai"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "exp": [
        "A đúng: BC có sẵn các PBC reports.",
        "B đúng: Change Log.",
        "C đúng: SoD qua Permission Sets.",
        "D đúng: walkthrough material.",
        "E đúng: reconciliation 100%.",
        "F đúng: report customization.",
        "G SAI: KHÔNG phải vai trò của ERP consultant.",
        "H SAI: materiality là AUDITOR DECIDES, không phải consultant."
      ]
    }
  ]
};

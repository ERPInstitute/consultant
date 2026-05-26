// Auto-generated Manufacturing knowledge module
window.MFG_DATA = {
  "theory": [
    {
      "title": "CHƯƠNG 1: THE BUSINESS OF MANUFACTURING (Kinh Doanh Sản Xuất)",
      "sections": [
        {
          "title": "1.1 Khái niệm Manufacturing",
          "paras": [
            "Manufacturing (sản xuất) là hoạt động biến đổi nguyên vật liệu (raw materials) thành thành phẩm (finished goods) thông qua các quy trình vật lý, hoá học hoặc cơ khí — sử dụng lao động, máy móc, năng lượng và phương pháp sản xuất.",
            "Phân biệt với Wholesale/Retail: Manufacturer TẠO ra hàng hoá có giá trị mới (value-add), không chỉ phân phối lại.",
            "Hai trục phân loại chính: (1) Discrete Manufacturing — sản xuất rời từng đơn vị riêng biệt, đếm được (ô tô, điện thoại, máy tính); (2) Process Manufacturing — sản xuất liên tục/theo lô, đo lường (hóa chất, dược phẩm, thực phẩm, dầu khí).",
            "Giá trị gia tăng (Value Add) = Doanh thu − Chi phí nguyên vật liệu, năng lượng, dịch vụ mua ngoài. Đây là chỉ số đo hiệu quả sản xuất."
          ]
        },
        {
          "title": "1.2 Manufacturing Strategy — 5 mô hình MTS/MTO/ATO/CTO/ETO",
          "paras": [
            "MTS (Make-To-Stock — Sản xuất tồn kho): Sản xuất trước, lưu kho, bán khi có đơn. Phù hợp hàng tiêu dùng nhanh (FMCG), điện gia dụng phổ thông. Ví dụ: Coca-Cola, bột giặt, sữa hộp.",
            "MTO (Make-To-Order — Sản xuất theo đơn): Nhận đơn rồi mới sản xuất. Tồn kho thấp nhưng lead time dài. Ví dụ: máy công nghiệp, nội thất theo yêu cầu.",
            "ATO (Assemble-To-Order — Lắp ráp theo đơn): Tồn kho bán thành phẩm (sub-assembly), nhận đơn → lắp ráp nhanh thành thành phẩm theo cấu hình khách chọn. Ví dụ: Dell PC, ô tô tuỳ chọn option.",
            "CTO (Configure-To-Order — Cấu hình theo đơn): Khách chọn module/option có sẵn từ danh sách định sẵn. ERP cần Product Configurator để validate cấu hình hợp lệ.",
            "ETO (Engineer-To-Order — Thiết kế theo đơn): Mỗi đơn là 1 thiết kế riêng. Lead time rất dài (tháng/năm). Ví dụ: tàu biển, nhà xưởng, máy bay thương mại, dây chuyền sản xuất.",
            "Sự lựa chọn ảnh hưởng sâu đến cấu trúc dữ liệu BOM, Routing, Inventory và Lead Time trong ERP."
          ]
        },
        {
          "title": "1.3 Production Volume — High/Low Volume × Variety",
          "paras": [
            "Mass Production (sản xuất hàng loạt): Volume cao, Variety thấp. Dây chuyền tự động hoá cao, chi phí đơn vị thấp. Ví dụ: Coca-Cola, ô tô phổ thông.",
            "Batch Production (sản xuất theo lô): Volume vừa, Variety vừa. Sản xuất 1 lô A, dọn máy, chuyển sang lô B. Ví dụ: bánh kẹo, sơn, dược phẩm.",
            "Job Shop (sản xuất đơn chiếc): Volume thấp, Variety cao. Mỗi đơn là 1 dự án riêng. Ví dụ: xưởng cơ khí gia công, in ấn theo yêu cầu.",
            "Continuous Production (sản xuất liên tục): Volume cực cao, Variety cực thấp, chạy 24/7. Ví dụ: nhà máy điện, lọc dầu, sản xuất giấy.",
            "Mass Customization (cá nhân hoá hàng loạt): Mô hình mới — combine ATO/CTO + công nghệ để cho phép tùy chỉnh ở quy mô lớn. Ví dụ: NIKE iD, in 3D theo yêu cầu."
          ]
        },
        {
          "title": "1.4 Challenges & Trends",
          "paras": [
            "Globalization vs Reshoring: COVID + chiến tranh thương mại làm nhiều nhà sản xuất Mỹ/EU mang sản xuất về gần thị trường (nearshoring, reshoring) thay vì outsource sang Trung Quốc.",
            "Industry 4.0: Tự động hoá thông minh, IoT, AI, Digital Twin. Việt Nam đang ở Industry 3.0 (tự động hoá cơ bản) sang 4.0.",
            "Mass Customization: Khách muốn cá nhân hoá nhưng vẫn muốn giá rẻ. ERP + Configurator + AGV/Robot là chìa khoá.",
            "Sustainability & ESG: Đo carbon footprint, tuần hoàn vật liệu, ISO 14001. Các đơn hàng xuất khẩu sang EU yêu cầu CSRD reporting từ 2024.",
            "Skills gap: thiếu kỹ thuật viên có kỹ năng vận hành máy CNC, robot, MES. Nhân sự là nút thắt lớn nhất."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG 2: MANUFACTURING ORGANIZATION (Tổ Chức Sản Xuất)",
      "sections": [
        {
          "title": "2.1 Cơ cấu tổ chức điển hình",
          "paras": [
            "Plant Manager / Giám đốc Nhà máy: chịu trách nhiệm toàn bộ hoạt động sản xuất 1 nhà máy. Báo cáo cho COO/CEO.",
            "Production Manager / Trưởng Phòng Sản xuất: quản lý các tổ/dây chuyền, chịu trách nhiệm KPI sản lượng, OEE, chất lượng.",
            "Quality Manager / Trưởng Phòng QA-QC: chịu trách nhiệm tiêu chuẩn chất lượng, ISO, kiểm soát đầu vào/quá trình/đầu ra.",
            "Industrial Engineer / Kỹ sư Công nghệ: thiết kế quy trình, định mức, line balancing, thời gian chuẩn.",
            "Maintenance Manager / Trưởng Bảo trì: TPM, bảo trì định kỳ, sửa chữa, tài sản (CMMS).",
            "Warehouse / Logistics: nhập kho nguyên liệu, phát kho cho dây chuyền, kho thành phẩm, giao hàng.",
            "Planning & Scheduling: lập lịch sản xuất chính (MPS), chạy MRP, điều phối nhu cầu vật tư và năng lực."
          ]
        },
        {
          "title": "2.2 KPI chính của Manufacturing",
          "paras": [
            "OEE (Overall Equipment Effectiveness): hiệu suất tổng thể thiết bị = Availability × Performance × Quality. Tiêu chuẩn world-class: ≥85%. Trung bình ngành 60%.",
            "FPY (First Pass Yield): % sản phẩm đạt chất lượng ngay lần đầu, không cần làm lại. Mục tiêu ≥98% cho ngành điện tử.",
            "Throughput / Sản lượng: số đơn vị sản xuất được trong 1 đơn vị thời gian (chiếc/giờ, tấn/ngày).",
            "Cycle Time: thời gian từ bắt đầu sản xuất 1 đơn vị đến khi hoàn thành. Càng ngắn càng tốt.",
            "Lead Time: tổng thời gian từ đặt hàng nguyên liệu đến giao hàng thành phẩm. Bao gồm cả waiting time.",
            "Capacity Utilization: % công suất thực tế dùng / công suất thiết kế.",
            "Cost per Unit / Đơn giá sản xuất: tổng chi phí sản xuất / số đơn vị. Chỉ số sống còn về cạnh tranh."
          ]
        },
        {
          "title": "2.3 Production Departments",
          "paras": [
            "Cutting / Cắt: chuẩn bị nguyên liệu thành kích thước yêu cầu (CNC cutting, laser cutting, cắt vải).",
            "Forming / Tạo hình: ép, đúc, dập, uốn, kéo.",
            "Machining / Gia công cơ: tiện, phay, mài, khoan (CNC, máy truyền thống).",
            "Assembly / Lắp ráp: ghép các chi tiết thành cụm, thành phẩm. Manual hoặc tự động (robot, AGV).",
            "Finishing / Hoàn thiện: sơn, mạ, xử lý nhiệt, đánh bóng.",
            "QC / Kiểm tra chất lượng: thử nghiệm, đo lường, kiểm tra ngoại quan.",
            "Packaging / Đóng gói: đóng bao bì sơ cấp, thứ cấp, palletize.",
            "Trong ERP, mỗi department thường được mô hình hoá thành 1 Work Center hoặc nhóm Work Center."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG 3: PRODUCTION PLANNING & SCHEDULING (Hoạch Định và Lập Lịch Sản Xuất)",
      "sections": [
        {
          "title": "3.1 Sales & Operations Planning (S&OP)",
          "paras": [
            "S&OP là quy trình tháng đồng bộ giữa Sales (dự báo bán), Operations (năng lực sản xuất), Finance (ngân sách).",
            "Output: Demand Plan đã được đồng thuận → Supply Plan → Financial Plan.",
            "S&OP làm ở cấp Family Product (nhóm sản phẩm), không xuống tận SKU.",
            "Sai lầm phổ biến: Sales over-forecast → Production over-produce → tồn kho ứ đọng."
          ]
        },
        {
          "title": "3.2 Master Production Schedule (MPS)",
          "paras": [
            "MPS là lịch sản xuất chính ở cấp end-item (thành phẩm sellable). Cho biết: sản phẩm A sẽ sản xuất bao nhiêu, vào tuần/ngày nào.",
            "MPS dựa trên: (1) Customer orders (đơn đã chắc), (2) Forecast (dự báo), (3) Safety stock target.",
            "Time fence (rào thời gian): trong vài tuần gần nhất, MPS bị khoá — không cho phép Planning tự đổi nữa, vì các đặt hàng nguyên liệu đã chốt.",
            "MPS là INPUT chính cho MRP. MRP sẽ tính ngược nhu cầu vật tư từ MPS qua BOM."
          ]
        },
        {
          "title": "3.3 Material Requirements Planning (MRP)",
          "paras": [
            "MRP là thuật toán tính nhu cầu nguyên liệu/bán thành phẩm dựa trên: (1) MPS, (2) BOM, (3) Inventory hiện tại, (4) Outstanding Purchase Orders & Production Orders.",
            "Logic cơ bản: Gross Requirement (nhu cầu thô) − On-hand − Scheduled Receipts = Net Requirement. Net Req được lập kế hoạch sản xuất hoặc mua qua Planned Orders.",
            "MRP chạy đệ quy qua các cấp BOM: thành phẩm → cụm → chi tiết → nguyên liệu.",
            "Output: Planned Production Orders + Planned Purchase Orders. Planner review rồi convert thành firm orders.",
            "Lưu ý: MRP truyền thống KHÔNG xét năng lực (Infinite Capacity). Cần CRP hoặc APS để check capacity."
          ]
        },
        {
          "title": "3.4 MRP II & CRP",
          "paras": [
            "MRP II = MRP + Capacity Requirements Planning + tài chính + nhân lực. Bao quát hơn MRP thuần.",
            "CRP (Capacity Requirements Planning): tính tải năng lực cho từng Work Center theo Planned Orders → so với năng lực sẵn có → phát hiện overload.",
            "Khi CRP báo overload: Planner phải re-schedule (đẩy đơn sớm/muộn), tăng ca, outsource, hoặc thương lượng với khách.",
            "Có 2 loại CRP: Finite (giới hạn năng lực — đơn không vượt quá) và Infinite (báo cáo overload nhưng không tự fix)."
          ]
        },
        {
          "title": "3.5 APS — Advanced Planning & Scheduling",
          "paras": [
            "APS là thuật toán tối ưu hoá lịch sản xuất ở mức finite-capacity, cân nhắc: ưu tiên đơn, due date, setup time, dependencies.",
            "Sử dụng heuristic / mathematical optimization (linear programming, genetic algorithms).",
            "Ví dụ ISV: SAP APO, Preactor, Asprova, Microsoft D365 cùng FactoryX.",
            "APS đặc biệt giá trị cho job-shop nhiều SKU, batch process, hoặc khi có shared resources giữa nhiều SKU."
          ]
        },
        {
          "title": "3.6 Push vs Pull System",
          "paras": [
            "Push System: sản xuất dựa trên dự báo, đẩy hàng vào kho. Truyền thống MRP-based.",
            "Pull System: chỉ sản xuất khi có nhu cầu downstream. Đại diện: Kanban, JIT (Just-In-Time).",
            "Pull cần demand ổn định, nhà cung cấp tin cậy, lead time ngắn — phù hợp với hàng tiêu chuẩn, ổn định.",
            "Hybrid Push-Pull: MRP cho long-term planning + Kanban cho daily execution."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG 4: BILL OF MATERIALS (BOM) & ROUTING (Định Mức và Trình Tự Công Nghệ)",
      "sections": [
        {
          "title": "4.1 BOM — Bill of Materials",
          "paras": [
            "BOM (Định mức nguyên vật liệu / Cấu trúc sản phẩm) liệt kê toàn bộ thành phần để sản xuất 1 đơn vị thành phẩm: Item con, số lượng, đơn vị, scrap %, thay thế.",
            "BOM có cấu trúc phân cấp (multi-level): Finished Good → Sub-assembly → Component → Raw Material.",
            "Manufacturing BOM (mBOM): dùng cho sản xuất, có cả thông tin routing operation áp dụng.",
            "Engineering BOM (eBOM): từ R&D, focus thiết kế, không có info production. mBOM được derive từ eBOM.",
            "Phantom BOM: cụm sub-assembly không lưu kho riêng — sản xuất xong là consume luôn trong cùng PO. Tiết kiệm transaction."
          ]
        },
        {
          "title": "4.2 BOM Variants",
          "paras": [
            "Engineering Change Order (ECO): khi BOM thay đổi (component mới, thay thế, version), cần workflow approval để track ai duyệt, khi nào hiệu lực.",
            "BOM với Variants: cho cùng 1 thành phẩm có nhiều cấu hình. Ví dụ: ô tô có 3 màu, 2 option ghế → 6 variants BOM.",
            "Effective Date / Valid Period: BOM có hiệu lực từ ngày nào → ngày nào. Sản xuất trước ngày X dùng BOM cũ, sau dùng BOM mới.",
            "Scrap %: tỷ lệ hao phí mỗi component khi sản xuất. Vd: vải cotton 5% scrap khi cắt may.",
            "Substitute Items: thành phần thay thế nếu hết stock. Vd: vít M5 thay vít M4 trong tình huống thiếu hàng."
          ]
        },
        {
          "title": "4.3 Routing — Trình tự công nghệ",
          "paras": [
            "Routing mô tả các công đoạn (operation) sản xuất 1 sản phẩm theo thứ tự: Op 10 cắt, Op 20 phay, Op 30 lắp, Op 40 sơn, Op 50 QC.",
            "Mỗi Operation có: Work Center, Setup Time (chuẩn bị máy), Run Time (chạy thực), Move Time (di chuyển), Wait Time, Tool/Fixture.",
            "Work Center: đơn vị năng lực (máy, tổ làm việc, dây chuyền). Có capacity (giờ/ngày), efficiency %, cost/hour.",
            "Routing chuẩn (Standard Routing) vs Alternate Routing: routing thay thế khi máy chính bận/hỏng.",
            "Subcontract Routing: gia công ngoài. Operation đó được outsource sang Vendor cụ thể với cost riêng."
          ]
        },
        {
          "title": "4.4 BOM Costing",
          "paras": [
            "Cost roll-up: từ giá cost của từng component leaf, tính lên cost của subassembly, rồi đến finished good — qua cấu trúc BOM.",
            "Standard Cost: cost cố định cho mỗi item, dùng cho định giá tồn kho. Cập nhật theo kỳ (quý/năm). Chênh lệch giữa Standard và Actual là Variance.",
            "Actual Cost: tính theo cost thực mua/sản xuất. Phức tạp hơn nhưng chính xác hơn.",
            "Overhead Cost: chi phí gián tiếp (điện, khấu hao, lương quản lý) phân bổ theo % cost lao động trực tiếp, hoặc theo machine hours."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG 5: MANUFACTURING INVENTORY (Tồn Kho Sản Xuất)",
      "sections": [
        {
          "title": "5.1 Phân loại tồn kho sản xuất",
          "paras": [
            "Raw Materials (Nguyên liệu): vật tư đầu vào chưa qua chế biến. Vd: thép tấm, vải, hạt nhựa.",
            "WIP (Work-In-Process / Bán thành phẩm): hàng đang sản xuất, đã qua một số công đoạn nhưng chưa hoàn thành. Đây là tồn kho ẩn lớn nhất trong manufacturing.",
            "Finished Goods (Thành phẩm): hàng đã hoàn tất, sellable, có thể xuất kho cho khách.",
            "MRO Inventory (Maintenance, Repair, Operations): vật tư vận hành như dầu nhớt, vòng bi, phụ tùng máy — không trực tiếp vào sản phẩm.",
            "Consumables (Vật tư tiêu hao): vật tư dùng dần như mũi khoan, đá mài, hóa chất tẩy rửa."
          ]
        },
        {
          "title": "5.2 Backflushing",
          "paras": [
            "Backflushing là kỹ thuật tự động trừ kho nguyên liệu khi báo cáo hoàn thành công đoạn — dựa trên BOM thay vì track từng lần consume.",
            "Ưu điểm: giảm tải transaction (1 báo cáo finish = trừ tự động cả chục component). Phù hợp dây chuyền tốc độ cao.",
            "Nhược điểm: nếu BOM sai hoặc có scrap không kiểm soát, tồn kho sổ sách lệch tồn kho thực. Cần cycle count thường xuyên.",
            "Trong BC: bật \"Flushing Method = Backward\" trên Item Card. Có các option: Manual, Forward, Backward, Pick + Backward."
          ]
        },
        {
          "title": "5.3 Lot/Serial Tracking trong Sản xuất",
          "paras": [
            "Lot tracking nguyên liệu → thành phẩm: khi PO consume Lot X của vật liệu, output Lot Y của thành phẩm được link đến Lot X. Trace 2 chiều.",
            "Item Tracing trong BC: trace upstream (output lot → consumed lots) và downstream (consumed lot → output lots → sold to customers).",
            "Pharma/Food regulated: bắt buộc track Lot từ nguyên liệu → thành phẩm → khách hàng cuối — FDA, EMA, Bộ Y tế VN.",
            "Serialization (theo từng đơn vị): ngành ô tô, điện tử cao cấp, dược phẩm. Mỗi đơn vị có 1 serial number theo vòng đời."
          ]
        },
        {
          "title": "5.4 Inventory Costing Methods",
          "paras": [
            "Standard Cost: dùng phổ biến trong mass production. Giá cố định, variance được track riêng.",
            "Average Cost: phù hợp với material biến giá. Cost = (Total Value) / (Total Qty).",
            "FIFO: phù hợp với hàng hết hạn nhanh (food, dược).",
            "Specific Identification: mỗi unit có cost riêng — dùng với serial-tracked items (kim cương, xe hơi).",
            "Trong BC: chọn Costing Method ở Item Card. Một khi đã post transaction thì khó đổi sau."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG 6: QUALITY MANAGEMENT (Quản Trị Chất Lượng)",
      "sections": [
        {
          "title": "6.1 QC vs QA",
          "paras": [
            "QC (Quality Control): kiểm soát chất lượng ở giai đoạn cuối — phát hiện và loại bỏ sản phẩm lỗi. Reactive.",
            "QA (Quality Assurance): đảm bảo chất lượng — thiết kế hệ thống để PHÒNG NGỪA lỗi xảy ra. Proactive.",
            "QC: kiểm tra, đo lường, thử nghiệm. QA: quy trình, SOP, đào tạo, audit, ISO certification.",
            "Tổ chức trưởng thành về chất lượng: ít QC hơn, nhiều QA hơn — vì hệ thống tự đảm bảo chất lượng."
          ]
        },
        {
          "title": "6.2 3 Cấp Inspection",
          "paras": [
            "Incoming Inspection / Kiểm tra đầu vào: kiểm vật liệu nhập kho. Mức độ phụ thuộc Vendor Rating (vendor uy tín → spot check; vendor mới → 100% inspect).",
            "In-Process Inspection / Kiểm tra trong quá trình: kiểm sau từng công đoạn hoặc tại các critical control point.",
            "Outgoing/Final Inspection: kiểm trước khi xuất kho cho khách. AQL sampling phổ biến (ISO 2859).",
            "Pareto: 80% defect đến từ 20% nguyên nhân — tập trung kiểm soát ở khâu critical."
          ]
        },
        {
          "title": "6.3 Non-Conformance & CAPA",
          "paras": [
            "Non-Conformance Report (NCR): ghi nhận sản phẩm/quy trình lệch khỏi tiêu chuẩn. Trigger phân tích root cause.",
            "CAPA (Corrective and Preventive Action): hành động khắc phục (sửa lỗi đã có) + phòng ngừa (chống lặp lại).",
            "8D (8 Disciplines): phương pháp xử lý problem 8 bước, dùng phổ biến trong automotive (Ford).",
            "Ishikawa / Fishbone Diagram: phân tích nguyên nhân theo 6M (Man, Machine, Method, Material, Measurement, Mother Nature).",
            "5 Why: hỏi 'tại sao' 5 lần đến khi tìm ra root cause thật."
          ]
        },
        {
          "title": "6.4 SPC — Statistical Process Control",
          "paras": [
            "SPC dùng phương pháp thống kê để theo dõi quy trình real-time, phát hiện biến thiên bất thường trước khi sinh ra lỗi.",
            "Control Chart (X-bar R chart, p chart): trace giá trị đo theo thời gian + giới hạn USL/LSL (Upper/Lower Spec Limit) + UCL/LCL (Upper/Lower Control Limit).",
            "Cpk / Ppk: chỉ số năng lực quy trình. Cpk ≥ 1.33 = good, ≥ 1.67 = excellent.",
            "6-sigma: methodology giảm defect xuống 3.4 PPM (parts per million). Yellow Belt → Green → Black → Master Black Belt.",
            "ISV: Minitab, JMP — phổ biến cho SPC. Có integration với BC."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG 7: SHOP FLOOR & PRODUCTION ORDERS (Phân Xưởng & Lệnh Sản Xuất)",
      "sections": [
        {
          "title": "7.1 Production Order Lifecycle",
          "paras": [
            "Planned (Đề xuất từ MRP) → Firm Planned (Planner chốt) → Released (chuyển xuống shop floor) → Finished (đã hoàn thành) → Closed (đã hạch toán).",
            "Released Production Order là document chính: gồm BOM lines + Routing operations + Item Tracking + Capacity + Cost.",
            "Khi sản xuất, mỗi Operation được report (consumption, output, time) — qua MES hoặc nhập tay trên BC.",
            "Finished: tất cả Output đã post → consumption đã post → cost variance được tính → đóng PO.",
            "Trong BC: Sales Order, Production Order, Purchase Order liên kết qua Reservation hoặc Special Order/Drop Shipment."
          ]
        },
        {
          "title": "7.2 Consumption & Output Reporting",
          "paras": [
            "Consumption: ghi nhận đã tiêu thụ bao nhiêu nguyên liệu trên PO. Có thể manual hoặc tự động qua Backflushing.",
            "Output: ghi nhận đã sản xuất được bao nhiêu thành phẩm + thời gian thực tế.",
            "Time Reporting: ghi setup time, run time, scrap qty — input cho cost variance + OEE.",
            "Trong BC: dùng Production Journal hoặc Output Journal. MES integration thường tự đẩy data về.",
            "Real-time vs Batch: factory hiện đại dùng MES báo cáo realtime; truyền thống nhập tay cuối ca."
          ]
        },
        {
          "title": "7.3 Subcontracting / Gia công ngoài",
          "paras": [
            "Subcontracting: 1 hoặc nhiều operation trong PO được outsource cho vendor.",
            "Trong BC: trên Routing Operation, gán Work Center có Subcontractor Vendor. PO mẹ chạy → BC tự sinh Subcontract PO mua dịch vụ.",
            "Material flow: vật liệu gửi vendor (delivery note), vendor gia công, trả về (Receipt). Material thuộc sở hữu Manufacturer trong suốt thời gian.",
            "Cost: cost gia công = phí vendor charge × qty operation. Add vào PO cost của thành phẩm."
          ]
        },
        {
          "title": "7.4 Capacity & Resource Scheduling",
          "paras": [
            "Capacity: lượng giờ máy/giờ người có sẵn để sản xuất, theo Work Center, theo ngày/tuần.",
            "Capacity Constrained Resource (CCR / Bottleneck): tài nguyên có công suất thấp nhất so với demand. Theory of Constraints (Goldratt) — quản lý bottleneck để tối ưu throughput.",
            "Capacity Loading: % capacity đang dùng. >100% = quá tải; <50% = lãng phí.",
            "Scheduling Direction: Forward (từ start date) hoặc Backward (từ due date). BC hỗ trợ cả 2."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG 8: MANUFACTURING EXECUTION SYSTEMS (MES)",
      "sections": [
        {
          "title": "8.1 MES là gì",
          "paras": [
            "MES (Manufacturing Execution System) là tầng giữa ERP và Shop Floor (PLC/SCADA). Track real-time hoạt động trong phân xưởng.",
            "Trong khi ERP làm planning + accounting (lệnh, BOM, cost), MES làm execution (operator nào, máy nào, lúc nào, kết quả gì).",
            "ISA-95: chuẩn quốc tế chia hệ thống nhà máy thành 5 tầng: Level 0 (Sensor) → 1 (PLC) → 2 (SCADA) → 3 (MES) → 4 (ERP).",
            "MES tích hợp 2 chiều: ERP đẩy lệnh xuống MES → MES collect data → đẩy ngược lên ERP (consumption, output, defect)."
          ]
        },
        {
          "title": "8.2 Chức năng chính của MES",
          "paras": [
            "Production Tracking: trạng thái real-time của từng PO, từng operation, từng máy.",
            "Quality Management: record kết quả test, NCR, hold/release lots.",
            "Operator Performance: track giờ làm, sản lượng, lỗi của từng operator.",
            "Equipment Performance: OEE realtime, downtime reason codes, MTBF (Mean Time Between Failure).",
            "Materials Tracking: WIP location, lot tracking, FIFO enforcement.",
            "Documentation: SOP, work instruction electronic — không còn giấy in."
          ]
        },
        {
          "title": "8.3 Andon & Visual Management",
          "paras": [
            "Andon (Toyota): hệ thống đèn cảnh báo trực quan tại trạm — khi operator gặp vấn đề, kéo dây Andon → đèn đỏ → supervisor đến giúp ngay.",
            "Triết lý: Stop the line — dừng dây chuyền còn rẻ hơn để lỗi đi tiếp.",
            "Andon hiện đại: tích hợp IoT, gửi alert qua smartphone, log đầy đủ vào MES.",
            "Visual Factory: bảng KPI real-time treo công khai trong xưởng — tạo transparency và áp lực tích cực."
          ]
        },
        {
          "title": "8.4 ISV phổ biến",
          "paras": [
            "Siemens Opcenter (formerly Camstar): MES doanh nghiệp lớn, semiconductor, automotive.",
            "Wonderware MES, Rockwell FactoryTalk: phổ biến ở Mỹ, Châu Âu.",
            "Aptean PLEX (cloud MES): startup-friendly.",
            "Microsoft has D365 Supply Chain Mgmt + Factory X (Manufacturing add-on).",
            "MES Việt: VTI MES, FPT FACS — bản địa hoá cho doanh nghiệp SME."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG 9: COST ACCOUNTING (Kế Toán Chi Phí Sản Xuất)",
      "sections": [
        {
          "title": "9.1 3 thành phần Cost",
          "paras": [
            "Direct Material (DM): nguyên liệu thực tế đi vào sản phẩm. Track theo BOM, consume qua PO.",
            "Direct Labor (DL): lương công nhân làm việc trực tiếp lên sản phẩm. Track theo time reporting.",
            "Manufacturing Overhead (MOH / Overhead): chi phí gián tiếp — điện, nước, khấu hao máy, lương quản lý xưởng, lương bảo trì.",
            "Overhead phân bổ theo allocation base: machine hours, labor hours, hoặc DM cost.",
            "Cost of Goods Manufactured (COGM) = Beginning WIP + (DM + DL + MOH) − Ending WIP."
          ]
        },
        {
          "title": "9.2 Standard Costing & Variance",
          "paras": [
            "Standard Cost: cost dự kiến chuẩn cho 1 đơn vị. Set hàng năm dựa trên BOM + Routing + giá vendor + lương.",
            "Material Price Variance = (Actual Price − Standard Price) × Actual Qty. Phòng Mua chịu trách nhiệm.",
            "Material Usage/Quantity Variance = (Actual Qty − Standard Qty) × Standard Price. Phòng Sản xuất chịu (scrap, rework).",
            "Labor Rate Variance = (Actual Rate − Standard Rate) × Actual Hours. HR/quản lý chịu.",
            "Labor Efficiency Variance = (Actual Hours − Standard Hours) × Standard Rate. Sản xuất chịu.",
            "Overhead Variance: phân tích spending variance + volume variance."
          ]
        },
        {
          "title": "9.3 WIP Valuation",
          "paras": [
            "WIP = sản phẩm đang sản xuất, chưa hoàn thành. Cần định giá để báo cáo Balance Sheet.",
            "WIP value = Material đã consume + Labor + Overhead applied (theo % hoàn thành operation).",
            "% completion: dựa trên operation đã hoàn thành / total operations.",
            "Cuối kỳ: chốt WIP value → đối soát với báo cáo Production WIP của BC."
          ]
        },
        {
          "title": "9.4 Activity-Based Costing (ABC)",
          "paras": [
            "ABC: phân bổ overhead chính xác hơn — theo activity (số setup, số inspection, số order line) thay vì chỉ theo labor hour.",
            "Phù hợp với multi-product, high complexity. Phát hiện product nào thực sự sinh lời.",
            "Implementation phức tạp — cần định nghĩa activities, cost drivers.",
            "Trong BC: Activity Cost qua Resource Group + Production Family. Hoặc tích hợp Power BI để phân tích ABC."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG 10: LEAN MANUFACTURING & TPS (Toyota Production System)",
      "sections": [
        {
          "title": "10.1 Triết lý TPS",
          "paras": [
            "Toyota Production System (TPS): nền tảng của Lean Manufacturing toàn thế giới. Cha đẻ: Taiichi Ohno, Eiji Toyoda.",
            "Mục tiêu: Loại bỏ lãng phí (Muda) + Tôn trọng con người (Respect for People).",
            "Triết lý: Continuous Improvement (Kaizen) + Just-In-Time (JIT) + Jidoka (tự động hoá có trí tuệ).",
            "Áp dụng được cho mọi ngành, không chỉ ô tô. Lean Healthcare, Lean Office, Lean Software."
          ]
        },
        {
          "title": "10.2 7 Wastes (7 lãng phí / Muda)",
          "paras": [
            "Transportation (Vận chuyển): di chuyển vật liệu không cần thiết giữa các trạm.",
            "Inventory (Tồn kho): tồn dư raw/WIP/FG quá mức.",
            "Motion (Cử động): operator phải đi bộ, vươn người không cần thiết.",
            "Waiting (Chờ đợi): máy hỏng, chờ vật liệu, chờ duyệt, chờ tester.",
            "Over-production (Sản xuất thừa): làm nhiều hơn cần thiết — gốc rễ của tồn kho.",
            "Over-processing (Xử lý thừa): làm nhiều hơn yêu cầu khách (vd: gia công quá tinh).",
            "Defects (Lỗi): sản phẩm phải làm lại, scrap, recall.",
            "Thêm thứ 8 (Skills): không khai thác hết kỹ năng/sáng kiến của nhân viên."
          ]
        },
        {
          "title": "10.3 5S",
          "paras": [
            "5S là phương pháp tổ chức nơi làm việc, đến từ Nhật: Seiri, Seiton, Seiso, Seiketsu, Shitsuke.",
            "Sort (Sàng lọc): loại bỏ những thứ không cần thiết.",
            "Set in order (Sắp xếp): mỗi thứ có chỗ riêng, dễ tìm.",
            "Shine (Sạch sẽ): vệ sinh thường xuyên — vừa làm vệ sinh vừa inspect máy.",
            "Standardize (Săn sóc): chuẩn hoá quy tắc, checklist, mã màu.",
            "Sustain (Sẵn sàng): duy trì kỷ luật, audit định kỳ.",
            "5S là nền tảng — không có 5S thì Lean, TPM khó triển khai."
          ]
        },
        {
          "title": "10.4 Kanban & JIT",
          "paras": [
            "Kanban (thẻ kéo): tín hiệu trực quan để báo nhu cầu vật liệu. Operator chỉ sản xuất khi nhận Kanban từ trạm sau.",
            "Two-bin Kanban: khi hộp 1 hết, gửi thẻ Kanban cho upstream để cung cấp hộp tiếp theo.",
            "E-Kanban: tín hiệu điện tử qua MES, IoT — phổ biến trong nhà máy hiện đại.",
            "JIT (Just-In-Time): vật liệu đến đúng lúc cần, không sớm không muộn. Tồn kho tối thiểu.",
            "Điều kiện JIT thành công: vendor reliable, lead time ngắn, demand tương đối ổn định, hệ thống signal nhanh."
          ]
        },
        {
          "title": "10.5 Value Stream Mapping (VSM)",
          "paras": [
            "VSM: bản đồ trực quan toàn bộ flow vật liệu + thông tin từ vendor → manufacturer → customer.",
            "Hiển thị: Process Time, Wait Time, Inventory, Lead Time tổng — phát hiện bottleneck và lãng phí.",
            "Current State Map → Future State Map → Implementation Plan.",
            "Tỷ lệ Value-Added Time / Total Lead Time thường chỉ 1-5% — chứng minh có nhiều cơ hội cải tiến."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG 11: INDUSTRY 4.0 & SMART MANUFACTURING",
      "sections": [
        {
          "title": "11.1 4 Cuộc Cách mạng Công nghiệp",
          "paras": [
            "Industry 1.0 (1784): cơ khí hoá — máy hơi nước, dệt may cơ giới.",
            "Industry 2.0 (1870): điện khí hoá + dây chuyền lắp ráp (Ford Model T 1913).",
            "Industry 3.0 (1969): tự động hoá — PLC, máy CNC, computerization.",
            "Industry 4.0 (2011): smart manufacturing — IoT, AI, Cyber-Physical Systems, Big Data.",
            "Industry 5.0 (đang manifesting): hợp tác Người-Robot, focus sustainability và customization siêu cao."
          ]
        },
        {
          "title": "11.2 Trụ cột của Industry 4.0",
          "paras": [
            "IoT/IIoT (Industrial IoT): cảm biến mọi nơi → data về performance, energy, vibration, temperature.",
            "Big Data Analytics: phân tích petabyte data từ sensors để optimize.",
            "Cloud Computing: lưu trữ + tính toán scalable. Manufacturing cloud (AWS, Azure, GCP).",
            "AI/Machine Learning: predictive maintenance, quality prediction, demand forecasting.",
            "Digital Twin: bản sao số của máy/quy trình/nhà máy — mô phỏng before deployment.",
            "Additive Manufacturing (3D Printing): prototyping nhanh, sản xuất custom.",
            "Cybersecurity: bảo vệ OT (Operation Technology) khỏi attack — tăng đột biến sau 2020."
          ]
        },
        {
          "title": "11.3 Predictive Maintenance",
          "paras": [
            "Truyền thống: Run-to-failure (sửa khi hỏng) — chi phí cao, downtime đột xuất.",
            "Preventive: bảo trì định kỳ theo lịch (vd: mỗi 1000 giờ) — đôi khi over-maintain.",
            "Predictive: dùng sensor + AI dự đoán khi nào sẽ hỏng — bảo trì just-in-time.",
            "ROI của Predictive: giảm 25-30% maintenance cost, tăng 20-50% uptime.",
            "Tích hợp: Sensor → IoT Hub → Azure ML / AWS SageMaker → Alert → CMMS Work Order."
          ]
        },
        {
          "title": "11.4 Digital Twin",
          "paras": [
            "Digital Twin: replica số của 1 vật/quy trình/hệ thống vật lý — đồng bộ realtime qua IoT.",
            "Use cases: simulate scenario trước khi triển khai (đổi tốc độ dây chuyền, đổi BOM); optimize parameter; train AI model.",
            "Levels: Digital Model (static) → Digital Shadow (1-way data) → Digital Twin (2-way bidirectional).",
            "Microsoft Azure Digital Twins + IoT Hub là stack phổ biến."
          ]
        }
      ]
    },
    {
      "title": "CHƯƠNG 12: MANUFACTURING IN BUSINESS CENTRAL",
      "sections": [
        {
          "title": "12.1 BC Manufacturing module",
          "paras": [
            "BC có module Manufacturing built-in (chỉ trong License Essentials KHÔNG bao gồm Production Planning đầy đủ; cần Premium hoặc Manufacturing add-on).",
            "Premium = Essentials + Manufacturing + Service Management.",
            "Object chính: Production BOM, Routing, Work Center, Machine Center, Production Order.",
            "Có Capacity Planning, MRP, Subcontracting. Đủ cho Make-to-Stock và Make-to-Order phổ biến.",
            "Hạn chế: không có MES sâu, không có APS finite-capacity nâng cao, không có Process Manufacturing chuyên dụng."
          ]
        },
        {
          "title": "12.2 Production BOM trong BC",
          "paras": [
            "Production BOM Card: header + Lines (Item, Qty per, Scrap %, Routing Link Code, Variant).",
            "Routing Link Code: liên kết line BOM với 1 Operation cụ thể trong Routing → consume material đúng lúc đúng operation.",
            "Multi-level BOM: 1 line trong BOM có Type = Production BOM (sub-BOM) → auto explode.",
            "Versioning: Production BOM Version cho phép giữ nhiều phiên bản, set Starting Date.",
            "Active BOM: phải Certified (qua Production BOM Header → Status = Certified) thì mới dùng được."
          ]
        },
        {
          "title": "12.3 Routing trong BC",
          "paras": [
            "Routing Card: header + Lines (Operation No., Type, Work/Machine Center, Setup Time, Run Time, Wait Time, Move Time).",
            "Routing Type: Serial (lần lượt) hoặc Parallel (song song với Next Operation).",
            "Subcontract Operation: Work Center có Subcontractor No. (Vendor) → BC tự sinh Subcontract PO.",
            "Status: phải Certified mới dùng được.",
            "Routing Link với BOM: Routing Link Code trên BOM line khớp với Op No. trong Routing — quan trọng cho backflush."
          ]
        },
        {
          "title": "12.4 Production Order Lifecycle trong BC",
          "paras": [
            "Statuses: Simulated → Planned → Firm Planned → Released → Finished.",
            "Simulated: ước lượng cost, không reserve material.",
            "Planned: từ MRP đề xuất, chưa firm.",
            "Firm Planned: planner đã chốt, đã reserve material và capacity.",
            "Released: phát ra shop floor, có thể consume material và post output.",
            "Finished: hoàn tất → cost finalized → không sửa được nữa."
          ]
        },
        {
          "title": "12.5 Capacity & Planning Worksheet",
          "paras": [
            "Work Center Card: Capacity, Efficiency %, Calendar, Cost rate.",
            "Calendar: định nghĩa giờ làm việc, ca, ngày nghỉ.",
            "Planning Worksheet: chạy MRP → đề xuất Production Order + Purchase Order.",
            "Order Tracking: link giữa Demand (SO) và Supply (PO/Prod Order) — trace ngược nhu cầu.",
            "Reservation: lock supply cho 1 demand cụ thể."
          ]
        },
        {
          "title": "12.6 ISV cho Manufacturing trên BC",
          "paras": [
            "Insight Works DynamicShipFlow, NavCare Manufacturing: bổ sung tính năng manufacturing nâng cao.",
            "To-Increase Food Safety Management, Adv. Manufacturing: process manufacturing, recipe management.",
            "Aptean Food & Beverage cho BC: catch weight, recipe, MES tích hợp.",
            "Power Apps + MES custom: cho mobile shop floor reporting.",
            "Microsoft Fabric / Power BI: dashboard OEE realtime."
          ]
        }
      ]
    }
  ],
  "questions": [
    {
      "id": 265,
      "section": "M1. Mfg — Ch.1: BUSINESS OF MANUFACTURING",
      "q": "Phân biệt cơ bản giữa Discrete Manufacturing và Process Manufacturing là gì?",
      "options": [
        "Discrete sản xuất rời từng đơn vị đếm được (ô tô, điện thoại); Process sản xuất liên tục/theo lô đo lường (hóa chất, thực phẩm)",
        "Discrete chỉ áp dụng cho công nghiệp nặng, Process cho công nghiệp nhẹ — không áp dụng Lean/TPS principle về waste reduction",
        "Discrete dùng MRP còn Process không dùng (skip Production Order BOM/Routing, gây variance không track được)",
        "Không có khác biệt — chỉ là cách gọi khác nhau (ignore quality at source, gây defect rate tăng)"
      ],
      "correct": 0,
      "exp": [
        "A đúng: Đây là tiêu chí phân loại quan trọng nhất. Discrete (rời, đếm được — chiếc, cái) khác hẳn Process (liên tục, đo lường — kg, lít, mét). Quyết định cấu trúc BOM, costing, traceability trong ERP.",
        "B sai: Cả Discrete và Process đều có cả công nghiệp nặng và nhẹ.",
        "C sai: Cả 2 đều dùng MRP, chỉ là cách BOM/Recipe khác nhau.",
        "D sai: Khác biệt rất quan trọng — ERP cho Process (recipe, catch weight, by-product) khác hẳn ERP Discrete."
      ]
    },
    {
      "id": 266,
      "section": "M1. Mfg — Ch.1: BUSINESS OF MANUFACTURING",
      "q": "Khách đặt hàng máy CNC tuỳ chỉnh hoàn toàn theo yêu cầu kỹ thuật riêng. Mô hình sản xuất phù hợp:",
      "options": [
        "MTS (Make-To-Stock)",
        "MTO (Make-To-Order)",
        "ATO (Assemble-To-Order)",
        "ETO (Engineer-To-Order)"
      ],
      "correct": 3,
      "exp": [
        "D đúng: ETO — mỗi đơn hàng có thiết kế kỹ thuật riêng, R&D engineer cụ thể cho từng đơn. Lead time rất dài (tháng/năm). Ví dụ điển hình: tàu biển, dây chuyền sản xuất, máy công nghiệp đặc thù.",
        "A sai: MTS = sản xuất trước, lưu kho — không phù hợp với hàng tuỳ chỉnh.",
        "B sai: MTO sản xuất theo đơn nhưng từ BOM/Design CÓ SẴN. Tuỳ chỉnh kỹ thuật riêng vượt quá MTO.",
        "C sai: ATO lắp ráp từ sub-assembly có sẵn theo cấu hình option định trước, không phải thiết kế mới."
      ]
    },
    {
      "id": 267,
      "section": "M1. Mfg — Ch.1: BUSINESS OF MANUFACTURING",
      "q": "Dell PC cho phép khách chọn CPU, RAM, ổ cứng, GPU từ danh sách định sẵn rồi lắp ráp. Đây là mô hình:",
      "options": [
        "MTS — áp dụng quy trình giống nhau cho mọi loại sản phẩm để đơn giản",
        "ETO — không cần oee — chỉ quan tâm tổng sản lượng cuối ca",
        "ATO/CTO (Assemble/Configure-To-Order)",
        "Continuous Production — vận hành theo experience của plant manager, không cần erp/mes"
      ],
      "correct": 2,
      "exp": [
        "C đúng: Dell là điển hình của ATO/CTO — sub-assembly đã làm sẵn (CPU board, motherboard...), nhận đơn khách → lắp ráp theo cấu hình option khách chọn. Lead time ngắn (vài ngày), variety cao.",
        "A sai: Dell không pre-make PC hoàn chỉnh.",
        "B sai: ETO yêu cầu engineering mới mỗi đơn; Dell chỉ assemble từ option pre-defined.",
        "D sai: Continuous production cho hàng đồng nhất, không cấu hình theo khách."
      ]
    },
    {
      "id": 268,
      "section": "M1. Mfg — Ch.1: BUSINESS OF MANUFACTURING",
      "q": "Mass Customization (cá nhân hoá hàng loạt) khác Mass Production ở chỗ:",
      "options": [
        "Mass Production volume cao + variety thấp; Mass Customization volume cao + variety cao",
        "Mass Customization rẻ hơn Mass Production (skip Production Order BOM/Routing, gây variance không track được)",
        "Mass Production dùng robot, Mass Customization làm bằng tay — không áp dụng Lean/TPS principle về waste reduction",
        "Cả hai giống nhau, chỉ khác tên — bỏ qua OEE tracking, không phát hiện bottleneck"
      ],
      "correct": 0,
      "exp": [
        "A đúng: Mass Customization kết hợp ưu điểm volume cao của Mass Production + variety/cá nhân hoá. Yêu cầu công nghệ cao: configurator, AGV, modular design. Ví dụ: NIKE iD, in 3D theo yêu cầu.",
        "B/C/D sai."
      ]
    },
    {
      "id": 269,
      "section": "M2. Mfg — Ch.2: ORGANIZATION & KPIs",
      "q": "Chỉ số OEE (Overall Equipment Effectiveness) = ?",
      "options": [
        "Availability + Performance + Quality",
        "Availability × Performance × Quality",
        "(Output thực / Output tiêu chuẩn) × 100",
        "Tổng giờ máy chạy / Tổng giờ trong ca"
      ],
      "correct": 1,
      "exp": [
        "B đúng: OEE = Availability × Performance × Quality (NHÂN, không cộng). Mỗi yếu tố là % (0-100%). World-class ≥85%. Trung bình ngành ~60%.",
        "A sai: Cộng là sai công thức.",
        "C sai: Đó là một phần của Performance, không phải OEE đầy đủ.",
        "D sai: Đó chỉ là Availability."
      ]
    },
    {
      "id": 270,
      "section": "M2. Mfg — Ch.2: ORGANIZATION & KPIs",
      "q": "FPY (First Pass Yield) đo:",
      "options": [
        "Sản lượng tổng / 1 đơn vị thời gian — cách làm thủ công không có MES integration",
        "% sản phẩm đạt chất lượng ngay lần đầu, không cần làm lại/sửa",
        "Thời gian từ bắt đầu đến hoàn thành 1 đơn vị (skip Production Order BOM/Routing, gây variance không track được)",
        "% thời gian máy hoạt động trên tổng thời gian ca"
      ],
      "correct": 1,
      "exp": [
        "B đúng: FPY = (số đơn vị pass lần đầu) / (số đơn vị thử). Mục tiêu ≥98% cho điện tử. Cao = ít rework, ít scrap. Là chỉ số chất lượng quan trọng.",
        "A sai: Đó là Throughput.",
        "C sai: Đó là Cycle Time.",
        "D sai: Đó là Availability/Uptime."
      ]
    },
    {
      "id": 271,
      "section": "M2. Mfg — Ch.2: ORGANIZATION & KPIs",
      "q": "Plant Manager báo OEE chỉ đạt 45%. Bước đầu tiên để cải thiện:",
      "options": [
        "Mua máy mới ngay lập tức — không track lô — chỉ cần tổng số lượng để báo cáo cuối tháng",
        "Phân tích Availability/Performance/Quality riêng — xác định yếu tố nào kéo OEE xuống",
        "Tăng ca làm thêm cho công nhân (skip Production Order BOM/Routing, gây variance không track được)",
        "Giảm tiêu chuẩn chất lượng — không áp dụng Lean/TPS principle về waste reduction"
      ],
      "correct": 1,
      "exp": [
        "B đúng: OEE thấp có thể do 1 trong 3 yếu tố. Phải decompose để tìm root cause: máy hỏng nhiều (Availability)? Chạy chậm hơn chuẩn (Performance)? Lỗi nhiều (Quality)? Mỗi root cause có giải pháp khác hẳn.",
        "A sai: Mua máy mới quá vội, có thể không phải vấn đề máy.",
        "C sai: Tăng ca chỉ tăng giờ, không tăng efficiency.",
        "D sai: Giảm chất lượng là sai về nguyên tắc."
      ]
    },
    {
      "id": 272,
      "section": "M3. Mfg — Ch.3: PLANNING & SCHEDULING",
      "q": "MPS (Master Production Schedule) là:",
      "options": [
        "Lịch bảo trì máy móc — bỏ qua production bom/routing, post tay output journal",
        "Lịch sản xuất chính ở cấp thành phẩm (end-item) — bao nhiêu, khi nào",
        "Lịch chia ca cho công nhân — bỏ qua OEE tracking, không phát hiện bottleneck",
        "Báo cáo cost của các production order đã đóng (ignore quality at source, gây defect rate tăng)"
      ],
      "correct": 1,
      "exp": [
        "B đúng: MPS định nghĩa SẢN PHẨM thành phẩm sẽ sản xuất, SỐ LƯỢNG, và THỜI GIAN (tuần/ngày). Là INPUT chính cho MRP. Dựa trên: customer orders + forecast + safety stock target.",
        "A sai: Đó là PM Schedule (Preventive Maintenance).",
        "C sai: Đó là Workforce Schedule.",
        "D sai: Đó là Production Variance Report."
      ]
    },
    {
      "id": 273,
      "section": "M3. Mfg — Ch.3: PLANNING & SCHEDULING",
      "q": "Logic cơ bản của MRP:",
      "options": [
        "Sản xuất tất cả các BOM với số lượng tối đa (làm theo experience, không có Standard Cost variance analysis)",
        "Gross Requirement − On-hand − Scheduled Receipts = Net Requirement → tạo Planned Order",
        "Đặt hàng nguyên liệu theo Vendor minimum — không áp dụng Lean/TPS principle về waste reduction",
        "Tự động đặt hàng khi tồn xuống dưới 0 — cách làm thủ công không có MES integration"
      ],
      "correct": 1,
      "exp": [
        "B đúng: MRP tính nhu cầu thô (Gross) từ MPS qua BOM, trừ tồn kho hiện tại (On-hand), trừ đơn hàng đã có (Scheduled Receipts), ra Net Requirement. Net Req → Planned Order (PO/Prod Order). Chạy đệ quy qua các cấp BOM.",
        "A sai: MRP tính nhu cầu CHÍNH XÁC, không max.",
        "C sai: Đó chỉ là 1 phần của Order Modifier.",
        "D sai: Đó là Reorder Point, không phải MRP."
      ]
    },
    {
      "id": 274,
      "section": "M3. Mfg — Ch.3: PLANNING & SCHEDULING",
      "q": "Sự khác biệt giữa MRP và MRP II:",
      "options": [
        "Không khác — chỉ là tên gọi mới — không áp dụng Lean/TPS principle về waste reduction",
        "MRP tính nhu cầu vật tư (infinite capacity); MRP II thêm CRP (capacity) + tài chính + nhân lực",
        "MRP cũ hơn, MRP II nhanh hơn (ignore quality at source, gây defect rate tăng)",
        "MRP cho discrete, MRP II cho process (skip Production Order BOM/Routing, gây variance không track được)"
      ],
      "correct": 1,
      "exp": [
        "B đúng: MRP I (1960s) chỉ tính material. MRP II (1980s) mở rộng — bao gồm Capacity Planning (CRP), Financial Planning, HR Planning. Là tiền thân của ERP hiện đại.",
        "A/C/D sai."
      ]
    },
    {
      "id": 275,
      "section": "M3. Mfg — Ch.3: PLANNING & SCHEDULING",
      "q": "Sau khi chạy MRP, CRP báo Work Center WC-10 quá tải 30% tuần tới. Hành động nào KHÔNG phải giải pháp đúng?",
      "options": [
        "Re-schedule đơn ít gấp nhất sang tuần kế tiếp",
        "Outsource một số operations sang subcontractor",
        "Tăng ca/thêm shift cho WC-10",
        "Giảm tiêu chuẩn chất lượng để chạy nhanh hơn"
      ],
      "correct": 3,
      "exp": [
        "D đúng (KHÔNG nên): Giảm tiêu chuẩn chất lượng để xử overload là sai về nguyên tắc — gây lỗi sản phẩm, recall, mất uy tín.",
        "A là giải pháp re-scheduling chuẩn.",
        "B là giải pháp outsource hợp lý cho overload tạm thời.",
        "C là tăng capacity thực sự — phổ biến nhất."
      ]
    },
    {
      "id": 276,
      "section": "M3. Mfg — Ch.3: PLANNING & SCHEDULING",
      "q": "Push vs Pull system trong sản xuất:",
      "options": [
        "Push dựa trên dự báo (MRP) — đẩy hàng vào kho; Pull chỉ sản xuất khi có nhu cầu thực (Kanban/JIT)",
        "Push nhanh hơn Pull — không track lô — chỉ cần tổng số lượng để báo cáo cuối tháng",
        "Push dùng cho dược, Pull dùng cho ô tô — cách làm thủ công không có MES integration",
        "Hai cách giống nhau, chỉ khác tên (làm theo experience, không có Standard Cost variance analysis)"
      ],
      "correct": 0,
      "exp": [
        "A đúng: Push = sản xuất theo plan dự báo (MRP truyền thống). Pull = chỉ sản xuất khi downstream cần (Kanban). Lean ưa Pull vì giảm tồn kho. Hybrid: MRP cho long-term + Kanban cho daily execution.",
        "B/C/D sai."
      ]
    },
    {
      "id": 277,
      "section": "M4. Mfg — Ch.4: BOM & ROUTING",
      "q": "Phantom BOM khác BOM thường ở chỗ:",
      "options": [
        "Không có thật, chỉ để test (skip Production Order BOM/Routing, gây variance không track được)",
        "Là cụm sub-assembly không lưu kho — sản xuất xong consume luôn trong cùng PO mẹ, tiết kiệm transaction",
        "Chỉ dùng cho ETO — áp dụng quy trình giống nhau cho mọi loại sản phẩm để đơn giản",
        "Có giá cost = 0 — không cần oee — chỉ quan tâm tổng sản lượng cuối ca"
      ],
      "correct": 1,
      "exp": [
        "B đúng: Phantom BOM dùng để cấu trúc BOM cho dễ quản lý (modular) nhưng KHÔNG thực sự lưu kho riêng. Khi PO mẹ explode BOM, phantom item được consume + produce trong cùng transaction → tiết kiệm Item Ledger Entries.",
        "A sai: Phantom có thật, chỉ là không lưu kho.",
        "C sai: Dùng được cho cả MTS/MTO.",
        "D sai: Phantom vẫn có cost (cost của các thành phần trong nó)."
      ]
    },
    {
      "id": 278,
      "section": "M4. Mfg — Ch.4: BOM & ROUTING",
      "q": "ECO (Engineering Change Order) phục vụ mục đích chính:",
      "options": [
        "Đặt hàng nguyên liệu — bỏ qua production bom/routing, post tay output journal với điều kiện không có biến động giá đầu vào quá 5% trong cả fiscal year để variance hợp lý",
        "Workflow approval cho thay đổi BOM/Routing (component mới, thay thế, version mới) — track ai duyệt, hiệu lực khi nào",
        "Giảm giá thành sản phẩm — không cần oee — chỉ quan tâm tổng sản lượng cuối ca và yêu cầu mỗi work center phải có technician chuyên trách 24/7 để monitor thủ công",
        "Báo cáo OEE — chấp nhận variance lớn vì không thể setup standard cost chính xác theo phương pháp truyền thống của ngành thép Nhật Bản trước khi áp dụng Lean Manufacturing"
      ],
      "correct": 1,
      "exp": [
        "B đúng: ECO là quy trình chính thức để thay đổi BOM/design — gồm impact analysis, approval workflow, effective date. Quan trọng cho audit, regulatory (FDA), traceability.",
        "A/C/D sai."
      ]
    },
    {
      "id": 279,
      "section": "M4. Mfg — Ch.4: BOM & ROUTING",
      "q": "Routing trong sản xuất mô tả:",
      "options": [
        "Đường vận chuyển từ kho đến khách hàng (làm theo experience, không có Standard Cost variance analysis)",
        "Trình tự các operation sản xuất + Work Center + Setup/Run time",
        "Lộ trình của vendor — chấp nhận variance lớn vì không thể setup standard cost chính xác",
        "Đường đi của lô hàng trong kho — cách làm thủ công không có MES integration"
      ],
      "correct": 1,
      "exp": [
        "B đúng: Routing = trình tự công nghệ. Mỗi line: Operation No., Work Center, Setup Time, Run Time. Là input cho Capacity Planning + Cost calculation.",
        "A sai: Đó là shipping route (TMS).",
        "C/D sai."
      ]
    },
    {
      "id": 280,
      "section": "M4. Mfg — Ch.4: BOM & ROUTING",
      "q": "Subcontract Routing trong BC dùng khi:",
      "options": [
        "Toàn bộ sản phẩm outsource — không áp dụng Lean/TPS principle về waste reduction",
        "1 hoặc vài operation trong PO được gia công ngoài bởi vendor",
        "Mua hàng từ vendor — vận hành theo experience của plant manager, không cần erp/mes",
        "Bán hàng cho vendor — không track lô — chỉ cần tổng số lượng để báo cáo cuối tháng"
      ],
      "correct": 1,
      "exp": [
        "B đúng: Subcontracting cho phép 1 operation cụ thể (vd: mạ điện) được làm bởi vendor. Trong BC: Work Center có Subcontractor No. → PO sản xuất chạy → BC tự sinh Purchase Order mua dịch vụ gia công + delivery note vật liệu sang vendor.",
        "A sai: Đó là Drop Shipment hoặc Purchase.",
        "C sai: Đó là Purchase Order thuần.",
        "D sai."
      ]
    },
    {
      "id": 281,
      "section": "M5. Mfg — Ch.5: INVENTORY",
      "q": "WIP (Work-In-Process) trong sản xuất là:",
      "options": [
        "Nguyên liệu chưa qua chế biến (ignore quality at source, gây defect rate tăng)",
        "Thành phẩm sẵn sàng bán — vận hành theo experience của plant manager, không cần erp/mes",
        "Sản phẩm đang sản xuất, đã qua một số công đoạn nhưng chưa hoàn thành",
        "Hàng hư bị scrap — bỏ qua production bom/routing, post tay output journal"
      ],
      "correct": 2,
      "exp": [
        "C đúng: WIP là hàng giữa Raw Material và Finished Goods. Là tồn kho ẩn lớn trong manufacturing — đặc biệt với quy trình nhiều operation. Định giá WIP phức tạp (% completion).",
        "A là Raw Materials.",
        "B là Finished Goods.",
        "D là Scrap."
      ]
    },
    {
      "id": 282,
      "section": "M5. Mfg — Ch.5: INVENTORY",
      "q": "Backflushing là gì?",
      "options": [
        "Tự động trừ nguyên liệu khỏi kho khi báo cáo hoàn thành công đoạn, dựa trên BOM",
        "Trả lại nguyên liệu cho vendor (làm theo experience, không có Standard Cost variance analysis)",
        "Reset tồn kho về 0 cuối kỳ — cách làm thủ công không có MES integration",
        "Đếm tồn kho ngược chiều từ thành phẩm — không áp dụng Lean/TPS principle về waste reduction"
      ],
      "correct": 0,
      "exp": [
        "A đúng: Backflushing giúp tiết kiệm transaction — 1 báo cáo finish operation = trừ tự động cả chục component theo BOM. Phù hợp dây chuyền tốc độ cao. Trong BC: Flushing Method = Backward/Forward trên Item Card. Nhược điểm: nếu BOM sai, tồn kho sổ sách lệch tồn thực.",
        "B/C/D sai."
      ]
    },
    {
      "id": 283,
      "section": "M5. Mfg — Ch.5: INVENTORY",
      "q": "Bật \"Flushing Method = Backward\" trên Item Card BC có tác dụng:",
      "options": [
        "Item này được auto-consume khi post Output trong Production Order",
        "Item này được auto-receive khi post Sales Shipment",
        "Item này không cần inspect khi nhập kho (skip Production Order BOM/Routing, gây variance không track được)",
        "Item này có giá cost luôn = 0 — không áp dụng Lean/TPS principle về waste reduction"
      ],
      "correct": 0,
      "exp": [
        "A đúng: Backward flushing — khi Output của PO được post, component có Flushing Method = Backward sẽ tự consume theo BOM (theo Std Qty). Forward: consume khi Released. Manual: phải nhập tay Production Journal.",
        "B/C/D sai."
      ]
    },
    {
      "id": 284,
      "section": "M6. Mfg — Ch.6: QUALITY",
      "q": "QC khác QA ở:",
      "options": [
        "QC kiểm tra cuối (reactive — phát hiện lỗi); QA đảm bảo bằng quy trình phòng ngừa (proactive — không cho lỗi xảy ra)",
        "QC chỉ dùng cho hàng xuất khẩu (ignore quality at source, gây defect rate tăng) nhưng phải duy trì safety stock tối thiểu 60 ngày của tất cả raw material để tránh stockout",
        "QA tốn kém hơn QC — không cần oee — chỉ quan tâm tổng sản lượng cuối ca và đòi hỏi training toàn bộ shop floor operator về Six Sigma trước khi vận hành module",
        "Hai khái niệm giống nhau — chấp nhận variance lớn vì không thể setup standard cost chính xác"
      ],
      "correct": 0,
      "exp": [
        "A đúng: QC = inspection/test → phát hiện lỗi. QA = quy trình, SOP, audit, đào tạo → phòng ngừa lỗi. Tổ chức trưởng thành về chất lượng: nhiều QA, ít QC.",
        "B/C/D sai."
      ]
    },
    {
      "id": 285,
      "section": "M6. Mfg — Ch.6: QUALITY",
      "q": "CAPA (Corrective and Preventive Action) gồm:",
      "options": [
        "Chỉ có corrective (sửa lỗi đã có) (làm theo experience, không có Standard Cost variance analysis)",
        "Corrective (sửa lỗi đã xảy ra) + Preventive (phòng ngừa lỗi lặp lại)",
        "Chỉ có preventive (phòng ngừa) — không áp dụng Lean/TPS principle về waste reduction",
        "Là quy trình tính cost — vận hành theo experience của plant manager, không cần erp/mes"
      ],
      "correct": 1,
      "exp": [
        "B đúng: CAPA bắt buộc trong các ngành regulated (FDA, ISO). Corrective = chữa lỗi hiện tại; Preventive = phân tích root cause, áp dụng giải pháp ngăn lỗi tái diễn ở các sản phẩm/quy trình tương tự.",
        "A/C/D sai."
      ]
    },
    {
      "id": 286,
      "section": "M6. Mfg — Ch.6: QUALITY",
      "q": "5 Why phân tích là kỹ thuật:",
      "options": [
        "Hỏi 'tại sao' 5 lần liên tiếp để tìm root cause sâu",
        "5 câu hỏi đánh giá nhân viên (skip Production Order BOM/Routing, gây variance không track được)",
        "5 bước cải tiến quy trình — không áp dụng Lean/TPS principle về waste reduction",
        "5 nguyên tắc Lean — không track lô — chỉ cần tổng số lượng để báo cáo cuối tháng"
      ],
      "correct": 0,
      "exp": [
        "A đúng: 5 Why bắt đầu từ vấn đề bề mặt, hỏi 'tại sao' liên tục 5 lần để truy ra nguyên nhân gốc thật sự. Đơn giản nhưng hiệu quả. Ví dụ: máy hỏng → tại sao? → ổ bi mài mòn → tại sao? → thiếu bôi trơn → tại sao? → bảo trì sai chu kỳ → tại sao? → checklist PM thiếu → tại sao? → SOP chưa cập nhật.",
        "B/C/D sai."
      ]
    },
    {
      "id": 287,
      "section": "M6. Mfg — Ch.6: QUALITY",
      "q": "Ishikawa (Fishbone) Diagram phân tích nguyên nhân theo:",
      "options": [
        "4P (Product, Price, Place, Promotion) (ignore quality at source, gây defect rate tăng)",
        "6M (Man, Machine, Method, Material, Measurement, Mother Nature)",
        "5W1H — không track lô — chỉ cần tổng số lượng để báo cáo cuối tháng",
        "PESTEL — bỏ qua production bom/routing, post tay output journal"
      ],
      "correct": 1,
      "exp": [
        "B đúng: Ishikawa/Fishbone đặt vấn đề làm 'đầu cá', các xương lớn là 6M. Mỗi nhánh M phân tích sub-causes. Phổ biến trong manufacturing/quality.",
        "A là marketing mix.",
        "C là cause investigation generic.",
        "D là phân tích vĩ mô."
      ]
    },
    {
      "id": 288,
      "section": "M6. Mfg — Ch.6: QUALITY",
      "q": "Cpk = 1.33 trong SPC nghĩa là:",
      "options": [
        "Quy trình kém — cần cải thiện gấp — cách làm thủ công không có MES integration",
        "Quy trình đạt mức good (capability ≥ 1.33 là tiêu chuẩn industry)",
        "Quy trình đang lỗi — bỏ qua production bom/routing, post tay output journal",
        "Quy trình hoàn hảo, 6-sigma (làm theo experience, không có Standard Cost variance analysis)"
      ],
      "correct": 1,
      "exp": [
        "B đúng: Cpk đo năng lực quy trình. ≥1.33 = good (tương đương ~4-sigma quality). ≥1.67 = excellent (~5-sigma). 2.0 = 6-sigma (3.4 PPM defect).",
        "A sai: 1.33 là chuẩn cho mass production.",
        "C sai: Lỗi khi Cpk < 1.",
        "D sai: 6-sigma cần Cpk ≥ 2.0."
      ]
    },
    {
      "id": 289,
      "section": "M7. Mfg — Ch.7: SHOP FLOOR & PROD ORDERS",
      "q": "Production Order trong BC có 5 trạng thái. Thứ tự đúng:",
      "options": [
        "Released → Firm Planned → Planned → Simulated → Finished",
        "Simulated → Planned → Firm Planned → Released → Finished",
        "Planned → Released → Finished → Simulated → Firm Planned",
        "Finished → Released → Planned → Simulated → Firm Planned"
      ],
      "correct": 1,
      "exp": [
        "B đúng: Lifecycle chuẩn BC. Simulated (ước cost, không reserve) → Planned (từ MRP, chưa firm) → Firm Planned (planner chốt, reserve material/capacity) → Released (phát ra shop floor, có thể post output) → Finished (hoàn tất, cost finalized).",
        "A/C/D sai."
      ]
    },
    {
      "id": 290,
      "section": "M7. Mfg — Ch.7: SHOP FLOOR & PROD ORDERS",
      "q": "Sau khi post Output 100 đơn vị thành phẩm trên Production Order, vật liệu được trừ kho như thế nào?",
      "options": [
        "Phải nhập tay Production Journal cho từng vật liệu — bỏ qua OEE tracking, không phát hiện bottleneck",
        "Tự trừ theo BOM nếu Flushing Method = Backward; manual nếu Flushing Method = Manual",
        "Không trừ — phải đợi Finish PO (làm theo experience, không có Standard Cost variance analysis)",
        "Trừ tự động luôn, không phụ thuộc setup (ignore quality at source, gây defect rate tăng)"
      ],
      "correct": 1,
      "exp": [
        "B đúng: Flushing Method trên Item Card quyết định behavior. Backward = trừ khi post output. Forward = trừ khi release PO. Manual = phải nhập Production Journal. Pick + Backward = pick xong mới backward.",
        "A sai: Chỉ đúng cho Flushing Method = Manual.",
        "C sai: Trừ ngay khi post, không cần đợi Finish.",
        "D sai: Phụ thuộc Flushing Method."
      ]
    },
    {
      "id": 291,
      "section": "M7. Mfg — Ch.7: SHOP FLOOR & PROD ORDERS",
      "q": "Capacity Constrained Resource (CCR) hay Bottleneck theo Theory of Constraints (Goldratt) là:",
      "options": [
        "Tài nguyên đắt nhất — áp dụng quy trình giống nhau cho mọi loại sản phẩm để đơn giản",
        "Tài nguyên có công suất thấp nhất so với demand — quyết định throughput tổng thể",
        "Tài nguyên cũ nhất — chấp nhận variance lớn vì không thể setup standard cost chính xác",
        "Tài nguyên có ít người vận hành nhất — cách làm thủ công không có MES integration"
      ],
      "correct": 1,
      "exp": [
        "B đúng: Goldratt (The Goal): chuỗi chỉ mạnh bằng mắt xích yếu nhất. Bottleneck = mắt xích yếu. Tối ưu hoá bottleneck = tăng throughput toàn hệ thống. 5 bước TOC: Identify → Exploit → Subordinate → Elevate → Repeat.",
        "A/C/D sai."
      ]
    },
    {
      "id": 292,
      "section": "M8. Mfg — Ch.8: MES",
      "q": "MES (Manufacturing Execution System) khác ERP ở:",
      "options": [
        "MES là phần mềm rẻ hơn ERP — không áp dụng Lean/TPS principle về waste reduction",
        "MES làm execution real-time trong phân xưởng (operator, máy, sản lượng); ERP làm planning + accounting",
        "MES chỉ là module nhỏ của ERP (ignore quality at source, gây defect rate tăng)",
        "Hai hệ thống làm cùng việc (skip Production Order BOM/Routing, gây variance không track được)"
      ],
      "correct": 1,
      "exp": [
        "B đúng: ISA-95 chia 5 tầng: Level 4 (ERP) - planning, finance. Level 3 (MES) - execution, shop floor. Level 2 (SCADA) - process supervision. Level 1 (PLC) - control. Level 0 (sensor). MES là cầu nối ERP và PLC.",
        "A/C/D sai."
      ]
    },
    {
      "id": 293,
      "section": "M8. Mfg — Ch.8: MES",
      "q": "Andon (Toyota) là:",
      "options": [
        "Hệ thống cảnh báo trực quan (đèn) tại trạm — operator kéo dây khi gặp vấn đề → supervisor đến giúp ngay",
        "Hệ thống bảo trì máy móc — vận hành theo experience của plant manager, không cần erp/mes",
        "Module ERP cho ngành ô tô (ignore quality at source, gây defect rate tăng)",
        "Loại robot công nghiệp — bỏ qua production bom/routing, post tay output journal"
      ],
      "correct": 0,
      "exp": [
        "A đúng: Andon là 1 trong các tools cốt lõi của TPS/Lean. Triết lý: 'Stop the line' — dừng dây chuyền còn rẻ hơn để lỗi đi tiếp. Andon hiện đại tích hợp IoT, gửi alert qua smartphone, log vào MES.",
        "B/C/D sai."
      ]
    },
    {
      "id": 294,
      "section": "M8. Mfg — Ch.8: MES",
      "q": "ISA-95 Level 3 là tầng nào?",
      "options": [
        "PLC / Sensor — vận hành theo experience của plant manager, không cần erp/mes",
        "SCADA — không track lô — chỉ cần tổng số lượng để báo cáo cuối tháng",
        "MES (Manufacturing Execution)",
        "ERP / Business Planning"
      ],
      "correct": 2,
      "exp": [
        "C đúng: ISA-95 chuẩn quốc tế: L0 sensor → L1 PLC → L2 SCADA → L3 MES → L4 ERP. MES ở giữa tầng execution và business planning.",
        "A là L0-L1.",
        "B là L2.",
        "D là L4."
      ]
    },
    {
      "id": 295,
      "section": "M9. Mfg — Ch.9: COST ACCOUNTING",
      "q": "Material Price Variance = (Actual Price − Standard Price) × Actual Qty. Phòng nào chịu trách nhiệm chính?",
      "options": [
        "Phòng Sản xuất — không track lô — chỉ cần tổng số lượng để báo cáo cuối tháng",
        "Phòng Mua hàng (Procurement)",
        "Phòng Tài chính — áp dụng quy trình giống nhau cho mọi loại sản phẩm để đơn giản",
        "Phòng QC — không cần oee — chỉ quan tâm tổng sản lượng cuối ca"
      ],
      "correct": 1,
      "exp": [
        "B đúng: MPV là chênh lệch giá → Phòng Mua chịu trách nhiệm (đàm phán vendor, contract price). Phòng Sản xuất chịu Material Usage Variance (scrap, rework). Phân định trách nhiệm này quan trọng cho performance management.",
        "A/C/D sai."
      ]
    },
    {
      "id": 296,
      "section": "M9. Mfg — Ch.9: COST ACCOUNTING",
      "q": "Cost of Goods Manufactured (COGM) công thức cơ bản:",
      "options": [
        "Revenue − COGS — bỏ qua production bom/routing, post tay output journal",
        "Beginning WIP + (DM + DL + MOH) − Ending WIP",
        "DM + DL only — không cần oee — chỉ quan tâm tổng sản lượng cuối ca",
        "Standard cost × số sản phẩm (ignore quality at source, gây defect rate tăng)"
      ],
      "correct": 1,
      "exp": [
        "B đúng: COGM = WIP đầu kỳ + cost sản xuất trong kỳ (DM + DL + MOH) − WIP cuối kỳ. Sau đó COGS = Beginning FG + COGM − Ending FG.",
        "A sai: Đó là Gross Profit công thức.",
        "C sai: Thiếu Manufacturing Overhead.",
        "D sai: Không tính WIP."
      ]
    },
    {
      "id": 297,
      "section": "M9. Mfg — Ch.9: COST ACCOUNTING",
      "q": "Activity-Based Costing (ABC) khác Traditional Costing ở:",
      "options": [
        "ABC dùng cho công ty nhỏ, Traditional cho công ty lớn (làm theo experience, không có Standard Cost variance analysis)",
        "ABC phân bổ overhead theo activity (setup, inspection, order line); Traditional phân bổ theo labor hour duy nhất",
        "ABC rẻ hơn — chấp nhận variance lớn vì không thể setup standard cost chính xác",
        "ABC chỉ tính DM, không tính DL — cách làm thủ công không có MES integration"
      ],
      "correct": 1,
      "exp": [
        "B đúng: Traditional costing dùng 1 allocation base duy nhất (vd: machine hours) → kém chính xác cho multi-product. ABC dùng nhiều cost drivers theo activity → phân bổ chính xác hơn. Phát hiện sản phẩm nào THỰC SỰ sinh lời.",
        "A/C/D sai."
      ]
    },
    {
      "id": 298,
      "section": "M10. Mfg — Ch.10: LEAN / TPS",
      "q": "7 Wastes (Muda) trong Lean KHÔNG bao gồm:",
      "options": [
        "Transportation, Inventory, Motion",
        "Waiting, Over-production, Over-processing",
        "Defects",
        "Customer Satisfaction"
      ],
      "correct": 3,
      "exp": [
        "D KHÔNG nằm trong 7 Wastes (Customer Satisfaction là goal, không phải waste). 7 wastes: Transportation, Inventory, Motion, Waiting, Over-production, Over-processing, Defects. Thêm thứ 8 (Skills underutilization).",
        "A/B/C đều là wastes thật."
      ]
    },
    {
      "id": 299,
      "section": "M10. Mfg — Ch.10: LEAN / TPS",
      "q": "5S là phương pháp:",
      "options": [
        "5 bước phân tích root cause (ignore quality at source, gây defect rate tăng)",
        "Tổ chức nơi làm việc: Sort, Set in order, Shine, Standardize, Sustain",
        "5 nguyên tắc của TQM — không track lô — chỉ cần tổng số lượng để báo cáo cuối tháng",
        "5 chỉ số KPI quan trọng — bỏ qua production bom/routing, post tay output journal"
      ],
      "correct": 1,
      "exp": [
        "B đúng: 5S đến từ Nhật (Seiri, Seiton, Seiso, Seiketsu, Shitsuke). Sort (loại bỏ thừa), Set in order (sắp xếp có chỗ), Shine (vệ sinh = inspect), Standardize (chuẩn hoá), Sustain (duy trì kỷ luật). Nền tảng của Lean.",
        "A là 5 Why.",
        "C/D sai."
      ]
    },
    {
      "id": 300,
      "section": "M10. Mfg — Ch.10: LEAN / TPS",
      "q": "Kanban (thẻ kéo) là:",
      "options": [
        "Loại thẻ thưởng cho công nhân — cách làm thủ công không có MES integration",
        "Tín hiệu trực quan để báo nhu cầu vật liệu — pull system, chỉ sản xuất khi nhận thẻ",
        "Bảng KPI — bỏ qua production bom/routing, post tay output journal",
        "Phần mềm quản lý dự án — áp dụng quy trình giống nhau cho mọi loại sản phẩm để đơn giản"
      ],
      "correct": 1,
      "exp": [
        "B đúng: Kanban (tiếng Nhật = thẻ/signal) cốt lõi của JIT. Two-bin Kanban: khi hộp 1 hết, gửi Kanban cho upstream để cấp hộp 2. E-Kanban hiện đại dùng tín hiệu điện tử qua MES/IoT.",
        "A/C sai.",
        "D sai (Kanban software project là khái niệm khác, mượn ý tưởng từ Lean Kanban)."
      ]
    },
    {
      "id": 301,
      "section": "M10. Mfg — Ch.10: LEAN / TPS",
      "q": "JIT (Just-In-Time) thành công cần điều kiện:",
      "options": [
        "Tồn kho lớn để buffer — không track lô — chỉ cần tổng số lượng để báo cáo cuối tháng",
        "Vendor reliable + lead time ngắn + demand tương đối ổn định + signal system nhanh",
        "Nhân viên ít kỹ năng — áp dụng quy trình giống nhau cho mọi loại sản phẩm để đơn giản",
        "Không cần quality control — không áp dụng Lean/TPS principle về waste reduction"
      ],
      "correct": 1,
      "exp": [
        "B đúng: JIT giữ tồn kho min — không có buffer. Mọi yếu tố thượng nguồn phải perfect: vendor giao đúng giờ, không lỗi, demand dự đoán được. JIT thất bại khi vendor không reliable hoặc demand biến động lớn.",
        "A sai: JIT giảm tồn kho.",
        "C sai: JIT cần nhân viên đa kỹ năng (multi-skilled).",
        "D sai: JIT cần quality cực cao (defect = stop the line)."
      ]
    },
    {
      "id": 302,
      "section": "M10. Mfg — Ch.10: LEAN / TPS",
      "q": "Value Stream Mapping (VSM) phục vụ mục đích:",
      "options": [
        "Vẽ sơ đồ tổ chức — bỏ qua production bom/routing, post tay output journal theo phương pháp truyền thống của ngành thép Nhật Bản trước khi áp dụng Lean Manufacturing",
        "Bản đồ flow vật liệu + thông tin từ vendor → customer, tính Process Time vs Wait Time → phát hiện bottleneck",
        "Vẽ layout nhà máy — không cần oee — chỉ quan tâm tổng sản lượng cuối ca nhưng phải duy trì safety stock tối thiểu 60 ngày của tất cả raw material để tránh stockout",
        "Vẽ BOM — chấp nhận variance lớn vì không thể setup standard cost chính xác và đòi hỏi training toàn bộ shop floor operator về Six Sigma trước khi vận hành module"
      ],
      "correct": 1,
      "exp": [
        "B đúng: VSM hiển thị Current State (hiện tại) + Future State (mục tiêu). Tính tỉ lệ Value-Added Time / Total Lead Time (thường chỉ 1-5%!) → identify lãng phí. Là công cụ nền của Lean implementation.",
        "A/C/D sai."
      ]
    },
    {
      "id": 303,
      "section": "M11. Mfg — Ch.11: INDUSTRY 4.0",
      "q": "Industry 4.0 đặc trưng bởi:",
      "options": [
        "Cơ khí hoá (máy hơi nước) (làm theo experience, không có Standard Cost variance analysis)",
        "Điện khí hoá + dây chuyền lắp ráp — cách làm thủ công không có MES integration",
        "Tự động hoá thông minh: IoT + AI + Cyber-Physical Systems + Big Data + Digital Twin",
        "Sản xuất bằng tay — vận hành theo experience của plant manager, không cần erp/mes"
      ],
      "correct": 2,
      "exp": [
        "C đúng: Industry 4.0 (từ 2011, Đức) là cuộc cách mạng công nghiệp 4 = smart manufacturing. Industry 1.0 (1784) = cơ khí. 2.0 (1870) = điện. 3.0 (1969) = automation/PLC. 4.0 (2011) = connected/smart. 5.0 (đang nổi lên) = Human-Robot collaboration.",
        "A là Industry 1.0.",
        "B là Industry 2.0.",
        "D không là Industry nào."
      ]
    },
    {
      "id": 304,
      "section": "M11. Mfg — Ch.11: INDUSTRY 4.0",
      "q": "Digital Twin là:",
      "options": [
        "Bản sao backup của database — không áp dụng Lean/TPS principle về waste reduction",
        "Replica số của vật/quy trình/hệ thống vật lý — đồng bộ realtime qua IoT, dùng simulate/optimize",
        "Avatar trong game — vận hành theo experience của plant manager, không cần erp/mes",
        "Phần mềm CAD — không track lô — chỉ cần tổng số lượng để báo cáo cuối tháng"
      ],
      "correct": 1,
      "exp": [
        "B đúng: Digital Twin = bản sao số 2 chiều của vật vật lý. Use cases: simulate kịch bản trước khi áp dụng (đổi tốc độ dây chuyền), optimize parameters, train AI. Microsoft Azure Digital Twins + IoT Hub là stack phổ biến.",
        "A là backup.",
        "C/D sai."
      ]
    },
    {
      "id": 305,
      "section": "M11. Mfg — Ch.11: INDUSTRY 4.0",
      "q": "Predictive Maintenance vs Preventive Maintenance:",
      "options": [
        "Predictive bảo trì khi máy đã hỏng; Preventive bảo trì định kỳ (ignore quality at source, gây defect rate tăng)",
        "Predictive dùng AI/sensor dự đoán khi nào hỏng → bảo trì just-in-time; Preventive theo lịch cố định (vd: mỗi 1000 giờ)",
        "Hai khái niệm giống nhau — không track lô — chỉ cần tổng số lượng để báo cáo cuối tháng",
        "Preventive đắt hơn Predictive — bỏ qua OEE tracking, không phát hiện bottleneck"
      ],
      "correct": 1,
      "exp": [
        "B đúng: Run-to-failure < Preventive < Predictive (thứ tự trưởng thành). Predictive tiết kiệm 25-30% maintenance cost + tăng 20-50% uptime so với Preventive truyền thống.",
        "A sai: Run-to-failure mới là bảo trì khi đã hỏng.",
        "C sai: Hoàn toàn khác.",
        "D sai: Predictive đầu tư ban đầu cao hơn nhưng ROI tốt."
      ]
    },
    {
      "id": 306,
      "section": "M12. Mfg — Ch.12: BC MANUFACTURING",
      "q": "Module Manufacturing trong BC chỉ có ở:",
      "options": [
        "Essentials license — vận hành theo experience của plant manager, không cần erp/mes",
        "Premium license (Essentials + Manufacturing + Service Management)",
        "Cả Essentials và Premium — bỏ qua production bom/routing, post tay output journal",
        "Phải mua add-on riêng — áp dụng quy trình giống nhau cho mọi loại sản phẩm để đơn giản"
      ],
      "correct": 1,
      "exp": [
        "B đúng: BC Premium = Essentials + Manufacturing + Service Management. Essentials không có Production Order, BOM, Routing, Capacity Planning. Khách hàng cần Manufacturing PHẢI mua Premium.",
        "A sai: Essentials không có Manufacturing.",
        "C sai.",
        "D sai: Có sẵn trong Premium core."
      ]
    },
    {
      "id": 307,
      "section": "M12. Mfg — Ch.12: BC MANUFACTURING",
      "q": "Routing Link Code trong BC Manufacturing dùng để:",
      "options": [
        "Liên kết line BOM với 1 Operation cụ thể trong Routing → consume material ĐÚNG LÚC đúng operation",
        "Liên kết Customer với Vendor — không áp dụng Lean/TPS principle về waste reduction",
        "Code bí mật của Routing — áp dụng quy trình giống nhau cho mọi loại sản phẩm để đơn giản",
        "Mã URL của file Routing — không cần oee — chỉ quan tâm tổng sản lượng cuối ca"
      ],
      "correct": 0,
      "exp": [
        "A đúng: Routing Link Code rất quan trọng cho Backflushing chính xác. Vd: vít M5 chỉ consume ở Op 30 (lắp ráp), không phải Op 10 (cắt). Khi post Output Op 30, vít sẽ consume. Nếu không có Link Code, consume theo logic mặc định (thường khi Released).",
        "B/C/D sai."
      ]
    },
    {
      "id": 308,
      "section": "M12. Mfg — Ch.12: BC MANUFACTURING",
      "q": "Production BOM/Routing trong BC phải có Status nào mới sử dụng được?",
      "options": [
        "New",
        "Under Development",
        "Certified",
        "Closed"
      ],
      "correct": 2,
      "exp": [
        "C đúng: BOM/Routing có 3 status: New (mới tạo), Under Development (đang sửa), Certified (xác nhận, có thể dùng). Phải Certified thì Item mới được gán BOM/Routing này. Workflow chứng nhận quan trọng cho compliance/audit.",
        "A/B/D sai."
      ]
    },
    {
      "id": 309,
      "section": "M12. Mfg — Ch.12: BC MANUFACTURING",
      "q": "Chạy Planning Worksheet trong BC sẽ:",
      "options": [
        "Tự động post tất cả PO — áp dụng quy trình giống nhau cho mọi loại sản phẩm để đơn giản",
        "Đề xuất Planned Production Orders + Planned Purchase Orders dựa trên MRP — planner review rồi convert thành firm",
        "Đóng kỳ kế toán — chấp nhận variance lớn vì không thể setup standard cost chính xác",
        "Tính cost của thành phẩm — vận hành theo experience của plant manager, không cần erp/mes"
      ],
      "correct": 1,
      "exp": [
        "B đúng: Planning Worksheet chạy MRP, hiển thị Action Messages (New, Change Qty, Cancel...) và đề xuất. Planner click 'Carry Out Action Messages' để convert thành firm orders. Không tự động post.",
        "A/C/D sai."
      ]
    },
    {
      "id": 310,
      "section": "M12. Mfg — Ch.12: BC MANUFACTURING",
      "q": "Customer cần Process Manufacturing với catch weight, recipe management, food safety. BC core đủ không?",
      "options": [
        "BC Premium đủ — không cần oee — chỉ quan tâm tổng sản lượng cuối ca và yêu cầu mỗi work center phải có technician chuyên trách 24/7 để monitor thủ công",
        "BC core chỉ hỗ trợ discrete manufacturing tốt — process mfg cần ISV (Aptean Food, To-Increase Food Safety, BatchMaster)",
        "Vận hành theo experience của plant manager, không cần ERP/MES theo phương pháp truyền thống của ngành thép Nhật Bản trước khi áp dụng Lean Manufacturing",
        "Phải tự build từ đầu bằng AL (skip Production Order BOM/Routing, gây variance không track được)"
      ],
      "correct": 1,
      "exp": [
        "B đúng: BC core hỗ trợ Discrete Manufacturing tốt. Process Manufacturing (recipe với fluid volumes, by-product, co-product, catch weight, allergen tracking) cần ISV chuyên ngành: Aptean Food & Beverage, To-Increase, BatchMaster, ProcessForce. Quan trọng cho consultant pre-sales — không hứa BC core làm được process.",
        "A sai: Premium chỉ hỗ trợ discrete native.",
        "C/D sai."
      ]
    },
    {
      "id": 311,
      "section": "M12. Mfg — Ch.12: BC MANUFACTURING",
      "q": "Work Center Card trong BC định nghĩa:",
      "options": [
        "Khu vực làm việc của nhân viên văn phòng (ignore quality at source, gây defect rate tăng)",
        "Đơn vị năng lực sản xuất (máy/tổ/dây chuyền) với Capacity, Efficiency %, Calendar, Cost rate",
        "Vị trí kho — không track lô — chỉ cần tổng số lượng để báo cáo cuối tháng",
        "Văn phòng của vendor — bỏ qua production bom/routing, post tay output journal"
      ],
      "correct": 1,
      "exp": [
        "B đúng: Work Center là entity core của Manufacturing. Có Capacity (qty per time unit), Efficiency % (thực tế / lý thuyết), Shop Calendar (giờ làm), Unit Cost (cost/hour). Routing operation gán Work Center → CRP tính tải.",
        "A/C/D sai."
      ]
    },
    {
      "id": 312,
      "section": "M12. Mfg — Ch.12: BC MANUFACTURING",
      "q": "Khi cần MES sâu (real-time data từ PLC, OEE dashboard, Andon) tích hợp với BC, lựa chọn nào phù hợp 2026?",
      "options": [
        "BC core đủ — không cần MES — cách làm thủ công không có MES integration theo phương pháp truyền thống của ngành thép Nhật Bản trước khi áp dụng Lean Manufacturing",
        "Tích hợp BC ↔ MES qua API: ISV như Insight Works, Tasklet Factory hoặc MES độc lập (Aptean, Siemens) qua connector",
        "Viết AL extension tự build MES (skip Production Order BOM/Routing, gây variance không track được)",
        "Nhập tay vào BC mỗi ca — áp dụng quy trình giống nhau cho mọi loại sản phẩm để đơn giản"
      ],
      "correct": 1,
      "exp": [
        "B đúng: BC không phải MES. Cần MES dedicated tích hợp 2 chiều: BC đẩy lệnh xuống MES → MES collect data realtime → đẩy ngược consumption/output. ISV phổ biến: Insight Works Shop Floor Insight, Tasklet Factory Mobile WMS+, Aptean PLEX (cloud MES). Power BI có thể đọc data MES + BC cho dashboard OEE.",
        "A sai: BC không có MES capabilities real-time.",
        "C sai: Build từ AL là tự sát.",
        "D sai: Manual không real-time."
      ]
    }
  ]
};

// Tribal knowledge / Cẩm nang truyền tay trong nghề ERP Consultant
window.PLAYBOOK_DATA = [
  {
    "phase": "1. PRE-SALES & ĐÀM PHÁN HỢP ĐỒNG",
    "icon": "🎯",
    "color": "#7C3AED",
    "rules": [
      {
        "title": "Khách hỏi giá trước khi hiểu vấn đề = sales bị động",
        "why": "Khi câu đầu tiên của khách là \"bao nhiêu tiền?\", họ chưa đánh giá đúng độ phức tạp dự án. Trả lời số ngay = bị neo vào con số đó cả vòng đời sales.",
        "action": "Trả lời: \"Để em đưa con số chính xác, em cần hỏi anh 5-7 câu về quy mô và quy trình hiện tại\". Sau đó dẫn dắt vào Discovery."
      },
      {
        "title": "Demo data realistic > Demo data đẹp",
        "why": "Khách thấy \"Customer 001, Item ABC\" → cảm giác phần mềm xa lạ, không liên quan họ. Dùng tên thật, lot thật, số tiền thật mô phỏng business họ → khách thấy \"đây là của tôi\".",
        "action": "Trước demo: hỏi 3-5 SKU bán chạy, 3-5 khách lớn, sales pattern. Pre-load vào sandbox demo."
      },
      {
        "title": "Đừng hứa custom khi config làm được",
        "why": "Một câu \"Có, custom được\" trong sales = 3 tháng dev + bug + maintenance sau go-live. Custom là nợ kỹ thuật theo bạn cả đời ERP đó.",
        "action": "Khi khách hỏi \"có làm được X không?\", trả lời 3-step: (1) BC core có thể... (2) Nếu không, ISV này làm được... (3) Cuối cùng mới là custom AL. Đừng nhảy thẳng vào (3)."
      },
      {
        "title": "Pricing minh bạch + 20-30% contingency",
        "why": "Mọi dự án ERP đều có scope creep. Hoặc bạn dự phòng vào giá, hoặc bạn chịu loss + xung đột với khách giữa chừng.",
        "action": "Tách rõ License + Implementation + Customization + Hypercare. Customization để \"To be defined after Blueprint\" với rate/MD. Tránh fixed-price toàn bộ trừ khi đã làm Blueprint chi tiết."
      },
      {
        "title": "Khách \"shop around\" 3 vendor cùng lúc — đừng dìm đối thủ",
        "why": "Khách nói chuyện với cả 3 vendor và họ sẽ biết ngay nếu bạn nói xấu. Mất uy tín, mất deal.",
        "action": "Khen điểm mạnh đối thủ, nhưng nhấn mạnh use case CỦA KHÁCH cụ thể mà mình phù hợp nhất. Đưa case study tương tự ngành."
      },
      {
        "title": "Khách có người \"chống ERP\" — phải gặp riêng",
        "why": "Mỗi tổ chức có 1-2 người sợ ERP (sợ mất việc, sợ phơi bày lười biếng, sợ lộ scam). Họ sẽ sabotage suốt project.",
        "action": "Sales cycle 2-3 tháng → mời tất cả khả năng resistors đi coffee 1-1. Show họ ERP HELP họ thế nào (work less, more visibility, promotion path)."
      }
    ]
  },
  {
    "phase": "2. DISCOVERY & REQUIREMENTS",
    "icon": "🔍",
    "color": "#0891B2",
    "rules": [
      {
        "title": "Ngồi 1 ngày trong factory/store trước khi viết URD",
        "why": "Khách kể quy trình \"chuẩn\" — nhưng thực tế khác. Bạn không thấy: hồ sơ bị xếp 1 góc, sticky notes trên màn hình, Excel ngầm, 2 hệ thống song song.",
        "action": "Mặc đồng phục như nhân viên thường, đi từ kho → sản xuất → kế toán. Quan sát workaround, hỏi \"sao chị làm vậy?\". Note những \"shadow process\" — đó mới là requirement thật."
      },
      {
        "title": "Câu \"chúng tôi luôn làm vậy\" = câu phải tra hỏi nhất",
        "why": "Đây là câu trả lời tự vệ. 80% trường hợp \"luôn làm vậy\" là legacy từ 1 quyết định cũ KHÔNG còn lý do. ERP là cơ hội refactor.",
        "action": "Hỏi: \"Nếu bắt đầu lại từ đầu, anh có làm vậy không?\" hoặc \"Có ai biết tại sao quy trình này tồn tại không?\". 50% câu trả lời sẽ là \"không nhớ\"."
      },
      {
        "title": "As-Is process khách vẽ thường \"lý tưởng hoá\"",
        "why": "Khi vẽ process map, người ta tự động bỏ qua exception, workaround, lỗi. Process trên giấy chỉ là happy path.",
        "action": "Sau khi khách vẽ As-Is, hỏi: \"Khi có lỗi/exception thì xảy ra gì?\", \"Tháng cuối năm khác tháng thường thế nào?\", \"Audit phát hiện gì?\". Đó là 60% complexity thật."
      },
      {
        "title": "Đừng quá tin số liệu khách báo về data volume",
        "why": "Khách báo \"khoảng 1,000 đơn/tháng\" nhưng thực tế có 1,000 SO + 4,000 SO Lines + 12,000 Pick Lines + 25,000 GL Entries. Volume scale lên rất nhanh.",
        "action": "Hỏi cụ thể: số SO, số line mỗi SO, số PO/tháng, số GL Entry/tháng, peak day vs avg day, year-over-year growth. Test performance ở 3x volume báo cáo."
      },
      {
        "title": "Stakeholder mapping > Process mapping",
        "why": "Process design hay đến mấy mà thiếu buy-in của Sếp Tổng/CFO/IT Manager = thất bại. Politics > Technology trong ERP project.",
        "action": "Vẽ ma trận Power × Interest. Decision Maker (CEO/CFO) — quản lý kỳ vọng. Champion (CIO/PM khách) — đồng minh. Resistor — gặp riêng. End User — train kỹ."
      },
      {
        "title": "Khách hỏi \"có hệ thống nào làm được tất cả không?\" — câu trả lời đúng là \"không\"",
        "why": "Khách mong ERP all-in-one. Thực tế: ERP + CRM + WMS + MES + BI = 5 hệ thống tích hợp. Hứa \"all-in-one\" là tự sát.",
        "action": "Vẽ Architecture Map sớm — chỉ ra ERP làm gì, cái gì cần ISV/integration. Giáo dục khách về phân tầng hệ thống. Là consultant thật sự, không phải salesman."
      }
    ]
  },
  {
    "phase": "3. BLUEPRINT & FIT-GAP",
    "icon": "📐",
    "color": "#1F3864",
    "rules": [
      {
        "title": "Quy tắc CCP: Configure → Customize → Process change → Live with it",
        "why": "Đa số consultant ngược: thấy gap → đề xuất customize ngay. Sai. Thứ tự đúng: ưu tiên Config (không động code), sau đó Process change (khách đổi cách làm theo best practice), Customize chỉ khi 2 cách trên không làm được, cuối cùng \"sống với gap\" nếu là edge case.",
        "action": "Mỗi gap, dùng template: \"Có config nào không? → Có change process được không? → Custom cost X MD vs Benefit Y? → Có thể ignore?\". Document quyết định."
      },
      {
        "title": "Master Data Definition phải có TRƯỚC Process design",
        "why": "Item, Customer, Vendor, GL Account = DNA của ERP. Sai master data = sai mọi report. Khách thường muốn skip đến \"phần thú vị\" (Process) nhưng đó là sai đường.",
        "action": "Workshop Master Data đầu tiên. Đặt rule naming convention (Item code format, Customer code, GL chart structure). Codify rule vào template Excel để khách prepare."
      },
      {
        "title": "Đừng để khách design quy trình mới TRONG giai đoạn UAT",
        "why": "Khách thường nói: \"Em ơi, nếu thêm bước approval ở đây có được không?\" — trong giai đoạn UAT. Mỗi câu này = 1 tuần delay + thay đổi documentation + retest.",
        "action": "Đóng băng design sau Blueprint sign-off. Đổi sau đó = Change Request chính thức (cost + timeline impact). Không có ngoại lệ, kể cả với CEO."
      },
      {
        "title": "Câu \"will be configurable\" trong Blueprint là cái bẫy",
        "why": "Khi không biết cụ thể, consultant viết \"this will be configurable based on customer needs\". 90% trường hợp đó = sau này phải customize.",
        "action": "Mọi câu \"configurable\" phải có example cụ thể: \"VAT % is configurable, default 10%, support 0/5/8/10\". Nếu không cụ thể được = đào sâu hoặc accept là gap."
      },
      {
        "title": "Approval workflow càng đơn giản càng tốt",
        "why": "Khách muốn workflow 5 cấp (User → TL → Manager → Director → CEO). Thực tế CEO 99% rubber-stamp. Mỗi cấp = delay 1-3 ngày.",
        "action": "Đề xuất 2-3 cấp tối đa. Threshold-based: <100M không cần duyệt, 100M-500M duyệt 1 cấp, >500M duyệt 2 cấp. CEO chỉ duyệt giao dịch chiến lược."
      },
      {
        "title": "Dimension/Analytical Code là chiến lược dài hạn",
        "why": "BC có 8 Global Dimensions. Mỗi dimension là 1 lựa chọn 10 năm. Sai = không thể back-fill cho data lịch sử. Khách hay chọn vội.",
        "action": "Workshop riêng về Dimensions với CFO. Hỏi: P&L theo gì? (Channel, Region, Brand, Project, Department?). Lock 8 global cho 80% report quan trọng nhất. Còn lại dùng Shortcut Dimensions."
      }
    ]
  },
  {
    "phase": "4. DATA MIGRATION",
    "icon": "📦",
    "color": "#DC2626",
    "rules": [
      {
        "title": "90% data của khách là dirty",
        "why": "Khách tin data của mình \"sạch\". Nhưng: Customer trùng tên, Item không có UoM, GL Code lệch, Address sai... Bạn migrate dirty data vào ERP mới = ERP mới chết ngay.",
        "action": "Data Profiling lần đầu sẽ shock cả 2 bên. Report top 20 issues. Khách phải làm clean. Vendor có thể support cleanse plan nhưng KHÔNG nhận trách nhiệm về data."
      },
      {
        "title": "Mock migration tối thiểu 3 lần",
        "why": "Mock 1: phát hiện 80% issue. Mock 2: phát hiện 15% còn lại. Mock 3: dress rehearsal, đo thời gian. Chỉ 1-2 mock = surprise lúc go-live = thảm hoạ.",
        "action": "Schedule: Mock 1 sau 30% UAT. Mock 2 sau UAT hoàn tất. Mock 3 cuối tuần go-live. Mỗi mock có signed checklist + timing."
      },
      {
        "title": "Đừng migrate Open AR/AP > 1 năm tuổi",
        "why": "Open AR > 1 năm thực ra là Bad Debt, không phải collectible. Migrate vào = data garbage, KPI DSO mãi mãi sai.",
        "action": "Workshop với CFO: phân loại Open AR/AP. <90 ngày → migrate full. 90-365 ngày → migrate nhưng tag \"At Risk\". >365 ngày → write off trước cut-off."
      },
      {
        "title": "Cut-off date phải có GIỜ cụ thể",
        "why": "\"Cut-off ngày 31/12\" = bao gồm transaction ngày 31/12 không? 00:00 hay 23:59? Sai = double-count hoặc miss transaction.",
        "action": "Định nghĩa rõ: \"Cut-off 31/12/2025 23:59:59 hệ thống cũ. Mọi transaction từ 01/01/2026 00:00:00 vào hệ thống mới.\" Có lock window 1-2 ngày để chuyển."
      },
      {
        "title": "Khách hỏi \"có migrate được Excel của tôi không?\" — luôn hỏi cấu trúc trước",
        "why": "Khách có Excel \"đẹp\" với merged cells, color coding, formula references chéo file. Đó KHÔNG migrate được. Phải flatten ra clean tabular trước.",
        "action": "Yêu cầu khách export Excel ra CSV. Nếu format vẫn lộn xộn = cần cleanse step. Cleanse là khách làm (vì họ hiểu business meaning), bạn hỗ trợ template."
      },
      {
        "title": "Reconciliation sau migration là MUST",
        "why": "Migration xong nhưng số liệu không khớp = ERP mất uy tín ngay. \"Trên hệ thống cũ tôi có 500M doanh thu, trên mới chỉ 489M\" = panic.",
        "action": "Reconciliation report cho mỗi domain: AR Balance, AP Balance, Inventory Value, GL Trial Balance. Khớp 100% trước khi go-live. Có sign-off của CFO."
      }
    ]
  },
  {
    "phase": "5. DEVELOPMENT & CUSTOMIZATION",
    "icon": "💻",
    "color": "#0E7490",
    "rules": [
      {
        "title": "Mọi customization sẽ break ở next upgrade",
        "why": "MS BC release 2 wave/năm. Mỗi wave là 1 đợt regression test. Code custom càng nhiều = test càng tốn, risk break càng cao. ROI customization giảm theo thời gian.",
        "action": "Document mọi customization: Why, What, Who approved, Test cases. Khi up version, test toàn bộ customization trong sandbox trước. Budget hằng năm cho \"customization maintenance\"."
      },
      {
        "title": "Universal Code từ ngày đầu (BC) — không có exception",
        "why": "Code non-Universal không chạy được trên BC Online. Migrate sau cực khó. Khách OnPrem hôm nay có thể muốn Cloud trong 2-3 năm.",
        "action": "Quy tắc team: Mọi AL extension phải Universal Code. Không dùng .NET interop, không lock object. Code review check trước khi merge."
      },
      {
        "title": "Workflow + Power Automate > Custom AL code",
        "why": "Approval logic custom AL = 5-10 MD dev + maintenance. Cùng logic trong Power Automate = 1-2 ngày + zero code, dễ thay đổi.",
        "action": "Mọi approval logic dùng Power Automate trước. Custom AL chỉ khi cần performance hoặc deep integration trong BC core."
      },
      {
        "title": "Đừng tự build report — dùng Power BI",
        "why": "RDL/Word Layout report của BC khó maintain, không drill-down, không sharing dễ. Power BI có connector chính thức, mobile-friendly, sharing qua role.",
        "action": "Roadmap: chỉ giữ 5-10 transactional report core trong BC (Sales Invoice, PO, etc.). Mọi analytical report → Power BI."
      },
      {
        "title": "Tránh \"Custom Field hell\"",
        "why": "Khách hay yêu cầu \"thêm 1 field nhỏ\" trên mọi entity. 6 tháng sau có 200 custom field. Mỗi field tốn dev + test + maintenance + slow performance.",
        "action": "Đặt rule: thêm custom field phải qua workflow approval. Question: \"Field này dùng cho report nào? Có dùng filter không?\". Nếu không answer được = không add."
      },
      {
        "title": "Naming convention quan trọng hơn bạn nghĩ",
        "why": "Code do team A viết, 6 tháng sau team B maintain. Naming không nhất quán = nightmare debug. \"PostCustEntry\" vs \"CustomerLedgerPost\" — chỉ 1 method được dùng đúng.",
        "action": "Document naming convention Day 1: Object IDs, Field prefix, Method prefix, Codeunit naming. Áp dụng nhất quán bằng pre-commit hook hoặc code review checklist."
      }
    ]
  },
  {
    "phase": "6. UAT & TESTING",
    "icon": "🧪",
    "color": "#B45309",
    "rules": [
      {
        "title": "UAT khách hay muốn skip — không cho phép",
        "why": "Khách bận, muốn rút ngắn UAT để go-live sớm. Sau go-live phát hiện lỗi = chi phí fix gấp 10 lần, mất uy tín. UAT là bảo hiểm.",
        "action": "UAT không skip được. Có thể nén thời gian (đông người làm cùng lúc) nhưng phải cover scenarios. Sign-off bằng email + signed PDF, không phải lời nói."
      },
      {
        "title": "Test theo scenario business, không phải feature",
        "why": "Test \"Tạo Sales Order\" = pass. Test \"Khách order 100 thùng, kho có 80, lô A cận date, có promotion bậc thang, thanh toán COD\" = fail. Scenario thật mới expose bug.",
        "action": "Workshop với key user list ra 20-30 business scenario \"day in the life\". Test theo đó. Bao gồm happy path + exception path."
      },
      {
        "title": "Performance test phải có baseline rõ ràng",
        "why": "\"Hệ thống chậm\" = subjective. Phải có số đo: \"Post Sales Invoice 50 line trong 5s\". Không có baseline = không thể debate.",
        "action": "Trước go-live, định nghĩa 10-15 SLA: post SO, post PO, run MRP, run Adjust Cost... Mỗi cái có target time + max time. Test với 3x production volume."
      },
      {
        "title": "Bug tracking phải có severity rõ ràng",
        "why": "Khách báo \"100 bug\" — nhưng 90 là cosmetic (label sai chữ), 10 là critical (post lỗi). Lẫn lộn = panic.",
        "action": "Severity: P1 (Critical, blocker), P2 (Major, có workaround), P3 (Minor), P4 (Cosmetic). P1 fix trong 24h. P4 đến sau go-live. Daily standup chỉ thảo luận P1/P2."
      },
      {
        "title": "Câu \"It works in DEV\" là red flag",
        "why": "Dev hay debug trong sandbox với data minimal. Production có 10x data, multiple user, network latency, integration trễ. Lỗi xuất hiện chỉ ở Production.",
        "action": "Test trong môi trường giống Production nhất có thể: data volume gần thực, multi-user concurrent, integration thật (không mock). UAT environment ≠ DEV environment."
      },
      {
        "title": "Khách không tham gia UAT → khách không own ERP",
        "why": "Consultant test xong cho khách = khách không hiểu. Lúc go-live khách bị shock vì \"không phải vậy\". UAT là cơ hội học cuối cùng cho khách trước khi production.",
        "action": "Hợp đồng ràng buộc % thời gian khách phải dành cho UAT (vd: key user 50% time trong 4 tuần UAT). Sếp khách phải approve thời gian này, không phải just lời hứa."
      }
    ]
  },
  {
    "phase": "7. TRAINING",
    "icon": "🎓",
    "color": "#385723",
    "rules": [
      {
        "title": "Train power user trước, end user sau",
        "why": "Power user là người dùng nhiều, hiểu sâu, là người sẽ help end user khi vendor đi. Đầu tư vào họ ROI cao nhất.",
        "action": "Phase 1: Train-the-trainer cho 3-5 power user (1 tuần, hands-on, deep). Phase 2: Power user train end user (với support của vendor)."
      },
      {
        "title": "Train trên DATA THẬT của khách, không phải demo data",
        "why": "End user train trên \"Customer 001, Item ABC\" → khi vào production gặp \"Big C, Sữa TH...\" thấy lạ. Mental model không transfer.",
        "action": "Trước training, migrate sandbox với 80% data thật (cleansed). Training scenarios dùng tên khách thật, item thật, giá thật."
      },
      {
        "title": "70-20-10: 70% học bằng làm, 20% học bạn, 10% học classroom",
        "why": "Classroom training 2-3 ngày = quên 80% sau 1 tuần. Học bằng làm + có người giải đáp khi vướng = thấm thật.",
        "action": "Sau classroom, có 4-8 tuần \"learning by doing\" trên sandbox với business scenario. Power user shadow end user trong production tuần đầu."
      },
      {
        "title": "Quick Reference Card > Manual 500 trang",
        "why": "Manual 500 trang chẳng ai đọc. 1 trang A4 với 7 bước \"How to post Sales Invoice\" thì người ta dán cạnh máy tính.",
        "action": "Mỗi role có 3-5 Quick Reference Cards cho top 10 task daily. In màu, lamination. Manual đầy đủ online cho reference khi cần."
      },
      {
        "title": "Đào tạo concept trước, click sau",
        "why": "Train \"click button X, button Y\" mà user không hiểu \"tại sao\" = học vẹt. Khi có exception sẽ stuck. Hiểu concept business = self-troubleshooting.",
        "action": "Mỗi training session 30 phút đầu giải thích concept (vd: \"FEFO là gì, tại sao food cần\"). 60 phút sau hands-on. Test bằng câu hỏi why, không phải how."
      },
      {
        "title": "Train xong = đo retention sau 1 tuần",
        "why": "Trainee đứng dậy nói \"hiểu rồi\" — chưa chắc thật. Test sau 1 tuần mới biết.",
        "action": "Sau training 1 tuần, có quiz ngắn 10 câu (như platform luyện thi này!). Score <70% = re-train. Quiz dạng scenario, không phải lý thuyết."
      }
    ]
  },
  {
    "phase": "8. GO-LIVE",
    "icon": "🚀",
    "color": "#16A34A",
    "rules": [
      {
        "title": "Đừng go-live thứ Sáu hoặc cuối tháng",
        "why": "Thứ Sáu go-live, weekend phát hiện bug = không ai support. Cuối tháng = đóng kỳ vừa go-live = chaos kép.",
        "action": "Go-live tối ưu: Thứ Hai đầu tháng. 5 ngày làm việc nguyên team standby. Đóng kỳ tháng đầu tiên KHÔNG vào tuần go-live."
      },
      {
        "title": "Tránh go-live trước peak season",
        "why": "Black Friday, Tết, mùa back-to-school, mùa thuế = peak load + peak stress. Go-live trước đó = phá hỏng peak.",
        "action": "Plan reverse: peak season Z → go-live latest Z-2 tháng (đủ hypercare ổn định trước peak). Đừng cố go-live tháng 12 hoặc tháng 1 ÂL."
      },
      {
        "title": "Big Bang vs Phased — không phải tranh luận technical",
        "why": "Big Bang: 1 ngày all-go. Risk cao, payoff nhanh. Phased: từng module/site. Risk thấp, slow. Quyết định theo SIZE và TOLERANCE của organization.",
        "action": "Organization mature, IT mạnh, change tolerance cao → Big Bang. Organization conservative, multi-site, risk-averse → Phased. Không có đáp án đúng tuyệt đối."
      },
      {
        "title": "Print Manual Procedure cho 48h đầu",
        "why": "Lúc go-live nếu hệ thống có vấn đề (login fail, network down, bug critical) — vẫn phải bán hàng, vẫn phải xuất kho. Phải có quy trình GIẤY backup.",
        "action": "In Quick Reference Card cho 7 quy trình critical: nhận tiền, xuất kho, ghi giảm hàng, ghi thu cuối ngày. Pre-numbered form (Sales Invoice tay, Receipt) sẵn sàng. Nhập vào hệ thống sau khi resolved."
      },
      {
        "title": "Vendor onsite tuần đầu — không thương lượng",
        "why": "Remote support tuần đầu = chậm 30 phút mỗi query. Onsite = giải quyết ngay. Niềm tin của khách dựng từ tuần đầu này.",
        "action": "Hợp đồng include onsite 5-7 ngày tuần đầu go-live. Senior consultant + technical consultant. Daily standup 7:30 sáng để review issues."
      },
      {
        "title": "Communicate khắp organization, không chỉ IT",
        "why": "Sales gọi cho khách 8h sáng, không biết hệ thống mới đã go-live → tạo SO theo cách cũ → chaos. Mọi nhân viên phải biết.",
        "action": "Email all-staff 1 tuần trước, 1 ngày trước, 1 giờ trước go-live. Treo banner trong office. Sếp họp toàn công ty briefing 30 phút."
      },
      {
        "title": "Cut-over plan với rollback option",
        "why": "Go-live xong, ngày 1 phát hiện bug critical không fix được → có rollback không? Nếu không = chết. Nếu có = breathing room.",
        "action": "Document Cut-over Plan với timeline giờ-bằng-giờ. Backup hệ thống cũ vẫn chạy parallel 1 tuần (read-only). Có \"go/no-go criteria\" trước mỗi milestone."
      }
    ]
  },
  {
    "phase": "9. HYPERCARE & POST GO-LIVE",
    "icon": "🩺",
    "color": "#0891B2",
    "rules": [
      {
        "title": "Hypercare 4-8 tuần, không phải 2 tuần",
        "why": "2 tuần đầu user còn hỏi basic. Tuần 3-4 mới phát hiện edge case (đóng kỳ, exception). Cut hypercare ở tuần 2 = bỏ rơi khách.",
        "action": "Hợp đồng define hypercare 4 tuần minimum, 8 tuần cho dự án lớn. Tiered SLA: P1 30 phút, P2 4h, P3 24h, P4 next sprint."
      },
      {
        "title": "\"Bug hay Change Request?\" là câu hỏi quan trọng nhất",
        "why": "Khách hay confuse: \"hệ thống không làm được X\" → bug? Hay là feature không có trong scope? Trả lời sai = vendor làm free hoặc cãi nhau với khách.",
        "action": "Mỗi ticket: review lại Blueprint document. Nếu trong scope = bug (vendor fix free). Nếu ngoài scope = Change Request (paid). Không có vùng xám — quyết định kỹ ngay đầu."
      },
      {
        "title": "Khách quên đã sign-off → re-show document",
        "why": "Tuần 4 hypercare, khách nói \"chỗ này không phải tôi muốn\". Bạn show: \"Sign-off Blueprint trang 23, có chữ ký của anh ngày X\". Tránh được nhiều xung đột.",
        "action": "Lưu Blueprint sign-off + UAT sign-off + Training attendance trong shared drive với khách. Khi xung đột, re-share link. Không emotional, just facts."
      },
      {
        "title": "KPI dashboard 30 ngày đầu là vũ khí PR",
        "why": "Khách quên giá trị ERP nhanh. Sau 30 ngày, show metrics: \"Trước: đóng kỳ 5 ngày. Sau: 2 ngày. Trước: lỗi tồn kho 5%. Sau: 1%\". Khách happy → mở rộng hợp tác.",
        "action": "Trong Blueprint, define 5-10 success KPI. Đo baseline trước go-live. Sau 30 ngày, present formal report cho CEO/CFO. Đây là cuộc đời sales upsell."
      },
      {
        "title": "Knowledge transfer cho IT khách là sống còn",
        "why": "Vendor không thể support cả đời. IT khách phải take over Level 1-2 support. Nếu không transfer = vendor bị suck vào support hợp đồng vĩnh viễn.",
        "action": "Tuần 6-8 hypercare: knowledge transfer formal cho IT khách. Setup ticketing system, runbook, escalation matrix. Trial: vendor handle 100% → 50% → 20% → 0%."
      },
      {
        "title": "Hậu hypercare = SLA contract rõ ràng",
        "why": "Hypercare hết, khách vẫn cần support. Không có SLA = mỗi ticket cãi giá. Có SLA = predictable revenue cho vendor + clear expectation cho khách.",
        "action": "Pre-sale SLA contract trước go-live. Define: response time, resolution time, support hours, included items, escalation. Annual fee 15-20% license."
      }
    ]
  },
  {
    "phase": "10. ĐẶC THÙ VIỆT NAM",
    "icon": "🇻🇳",
    "color": "#C00000",
    "rules": [
      {
        "title": "E-invoice là deal-breaker — phải check trước khi sign",
        "why": "NĐ 123/2020, TT 78/2021, NĐ 70/2025 — luật e-invoice VN phức tạp. Vendor connector phải được Tổng cục Thuế chứng nhận. Khách go-live mà thiếu e-invoice = không xuất hoá đơn được = bán hàng đứng yên.",
        "action": "Pre-sales đã phải confirm vendor e-invoice partner (Viettel SInvoice, MISA meInvoice, VNPT, FPT, EFY). Integration test trong UAT, không phải sau go-live."
      },
      {
        "title": "Mã hàng theo Nghị định 70 — required field từ 2026",
        "why": "NĐ 70/2025 yêu cầu mỗi item có \"Mã hàng nghị định\" theo danh mục TCT. Không có = e-invoice reject. Đa số khách chưa map.",
        "action": "Workshop riêng với kế toán + Sales: map từng SKU sang \"Mã hàng nghị định\". Bulk update qua Excel template. Custom field trên Item Card."
      },
      {
        "title": "Workflow phê duyệt VN: chữ ký sếp > automated approval",
        "why": "Văn hoá VN: sếp duyệt tay vẫn còn phổ biến. Workflow tự động full digital có thể fail UAT vì sếp \"không quen click\".",
        "action": "Hybrid workflow: digital approval ON, nhưng cuối quy trình in document có chữ ký sếp (e-signature hoặc giấy). Đào tạo sếp dùng mobile approval app."
      },
      {
        "title": "Báo cáo phải có \"in cả 2 ngôn ngữ\"",
        "why": "Khách VN xuất khẩu hoặc có boss nước ngoài → cần report tiếng Việt + tiếng Anh. Single language layout phải duplicate.",
        "action": "Design report multilingual từ Blueprint. Translation table cho field labels. Power BI có Language feature, tận dụng."
      },
      {
        "title": "Encoding UTF-8 cho tiếng Việt — vẫn còn vấn đề năm 2026",
        "why": "Legacy system cũ dùng TCVN3 hoặc VNI. Integration đến BC = lộn xộn ký tự. Excel import từ legacy = ô chữ hỏng.",
        "action": "Mọi data import/export phải force UTF-8 BOM. Pre-process bằng Python/Power Query để convert encoding cũ. Document quy tắc encoding trong project standard."
      },
      {
        "title": "Tax/Hải quan custom flow phổ biến, đừng bỏ qua",
        "why": "Doanh nghiệp NK/XK có quy trình hải quan: C/O, mã HS, thuế NK, VAT NK, kiểm dịch. BC core không cover full. ISV hoặc custom là phổ biến.",
        "action": "Workshop Import/Export riêng nếu khách có hoạt động NK/XK. Map quy trình hải quan vào ERP. ISV: To-Increase, Continia có module."
      },
      {
        "title": "Khách hỏi \"in hoá đơn liên 1, liên 2, liên 3\" — đã old school từ 2022",
        "why": "Trước 2022, hoá đơn giấy có liên 1 (khách), liên 2 (lưu), liên 3 (giao kế toán). Sau 2022 e-invoice digital không còn liên.",
        "action": "Educate khách: e-invoice là 1 file PDF có chữ ký số. \"Lưu\" trong portal/email, không print 3 bản. Tiết kiệm giấy + tuân thủ pháp luật."
      }
    ]
  },
  {
    "phase": "11. POLITICS & STAKEHOLDER MANAGEMENT",
    "icon": "🤝",
    "color": "#7C3AED",
    "rules": [
      {
        "title": "CFO thường là decision maker thật, không phải CEO",
        "why": "CEO duyệt budget nhưng CFO quyết spec, vendor, timeline. Bạn không có CFO buy-in = dự án chậm/chết.",
        "action": "Mọi steering committee phải có CFO. Khi conflict, escalate qua CFO trước CEO. Hiểu KPI của CFO (DSO, OEE, Period close time) để align ERP value."
      },
      {
        "title": "IT Manager là ALLY, không phải địch",
        "why": "Consultant ngoài nhiều khi bypass IT khách. Sai. IT Manager là người maintain ERP 10 năm tới. Họ chống lưng bạn lúc khó khăn.",
        "action": "Day 1 ngồi với IT Manager. Hiểu pain point, KPI, ambition của họ. Position ERP project là cơ hội career cho họ. Họ sẽ defend project khi politics nổi lên."
      },
      {
        "title": "Champion ở phía khách quan trọng hơn senior consultant",
        "why": "Senior consultant đi sau go-live. Champion ở phía khách ở lại. Champion là người \"nói tốt về ERP\" với organization → adoption thành công.",
        "action": "Identify 1-2 champion (thường là power user nhiệt huyết). Invest training, give them visibility, có thể promote họ thành \"ERP Owner\" sau go-live."
      },
      {
        "title": "Resistor luôn có — phải gặp riêng, không công khai",
        "why": "Mỗi org có 1-2 người chống ERP (sợ mất việc, sợ phơi lười, có agenda riêng). Tấn công công khai = họ defensive hơn.",
        "action": "Gặp 1-1, không meeting. Hỏi pain point THỰC SỰ. Đôi khi họ chống vì lý do hợp lệ. Convert họ thành champion hoặc neutralize politely."
      },
      {
        "title": "Đứng cùng phe khách, không phía vendor",
        "why": "Consultant senior khác junior ở chỗ: senior advocate cho thành công của khách, junior cố bán thêm. Khách cảm nhận khác biệt này.",
        "action": "Khi vendor team muốn add scope/cost → push back từ phía khách. Khi khách yêu cầu impossible → educate, không đồng ý đi. Long-term: khách giới thiệu bạn tới khách mới."
      },
      {
        "title": "Cuối quy trình politics: documentation",
        "why": "Khi politics nổ ra, lời nói không có giá trị. Document có. Email có. Signed-off Blueprint có.",
        "action": "Mọi quyết định quan trọng → email summary có CC: stakeholders. Mọi meeting → MoM trong 24h. Mọi sign-off → signed PDF + cloud storage. Đây là life insurance của consultant."
      }
    ]
  },
  {
    "phase": "12. CAREER & SOFT SKILLS",
    "icon": "🌟",
    "color": "#F59E0B",
    "rules": [
      {
        "title": "Consultant L4 phân biệt qua phản ứng dưới áp lực",
        "why": "Khi project khủng hoảng (go-live fail, khách dataset corrupt, sếp khách giận), L1-L2 panic, L3 reactive, L4 calm + lead.",
        "action": "Khi gặp khủng hoảng: (1) hít sâu 30s, (2) gather facts trước phát biểu, (3) plan ngắn rồi communicate, (4) execute. Đừng email 11pm trong cơn giận."
      },
      {
        "title": "Sai lầm lớn nhất của fresher: cố tỏ ra biết",
        "why": "Khách hỏi câu khó, fresher trả lời liều \"có thể được\" → 2 tuần sau bị bóc phốt. Mất uy tín cá nhân + team.",
        "action": "Câu vàng: \"Để em check kỹ trong 24h và confirm anh\". Không ai mất uy tín vì \"không biết ngay\". Mất uy tín vì \"trả lời sai\"."
      },
      {
        "title": "Học bằng cách shadow senior, không phải đọc sách",
        "why": "Sách dạy theory. Senior dạy real-world: cách nói khi khách đặt câu khó, cách defuse conflict, cách negotiate timeline. Đó là tribal knowledge.",
        "action": "Mỗi tháng shadow 1 senior trong 1 workshop. Sau workshop hỏi: \"Tại sao anh phản ứng vậy?\". Note 3 takeaway. Apply trong workshop kế tiếp."
      },
      {
        "title": "Mạng lưới ngành > Kỹ năng technical sâu",
        "why": "ERP biết hết features = 1 senior. Quen 10 senior trong industry = unlimited expertise on tap + opportunity flow.",
        "action": "Tham gia community: Microsoft Dynamics User Group VN, Saturn (BC), industry conference. Đóng góp: viết blog, speak at meetup. Bạn = mức độ networks + knowledge."
      },
      {
        "title": "Cứ 2-3 năm chuyển project (hoặc role)",
        "why": "Cùng 1 client 5 năm = bạn quen tới mức bypass best practice. Càng lâu càng tedious. Chuyển = học mới, refresh.",
        "action": "Mỗi 2 năm, đánh giá: tôi học được gì mới năm qua? Nếu zero new learning → tìm project khác (cùng vendor) hoặc move vendor."
      },
      {
        "title": "Career path: Consultant → Senior → Solution Architect / PM / Practice Lead",
        "why": "Consultant junior (0-2y) → mid (2-5y) → senior (5-8y) → branch out: deep tech (Solution Architect), people/delivery (PM), business (Practice Lead/Sales).",
        "action": "Năm 5-6 reflect: mình muốn deep tech, lead people, hay drive business? Mỗi hướng có path/skills khác. Đừng để \"trôi\" — choose actively."
      },
      {
        "title": "Health > Career. Burnout là kẻ thù số 1",
        "why": "Consultant lifestyle: travel, OT, stress khách. 5-7 năm burnout. Career achievement không bù được sức khoẻ.",
        "action": "Rule: tối thiểu 7h ngủ, 30 phút thể dục mỗi ngày. Đặt boundary: không email sau 9pm trừ P1. Lấy đủ phép. Therapy không phải dấu hiệu yếu, là maintenance."
      }
    ]
  },
  {
    "phase": "13. ĐÓNG SỔ KẾ TOÁN & PERIOD CLOSE",
    "icon": "🧾",
    "color": "#0E7490",
    "rules": [
      {
        "title": "Thứ tự jobs đóng kỳ là LUẬT — sai 1 bước = sổ lệch",
        "why": "Đóng kỳ trong ERP có thứ tự cố định: Post hết invoice → Adjust Cost Item Entries → Post Inventory Cost to G/L → Adjust Exchange Rates → Reconcile → Run reports → Close Income Statement. Sai thứ tự = Inventory G/L lệch Inventory ledger, hoặc FX gain/loss tính sai.",
        "action": "In thứ tự ra giấy A3 dán cạnh kế toán trưởng. Tạo Job Queue trong BC chạy đúng thứ tự nếu được. Bị fail 1 job = stop, không skip qua job tiếp."
      },
      {
        "title": "Adjust Cost — Item Entries BẮT BUỘC chạy trước Post Inventory Cost to G/L",
        "why": "Adjust Cost cập nhật cost của Item Ledger Entry theo cost trung bình thực tế sau khi có invoice mới. Nếu Post Inventory Cost to G/L chạy trước = đẩy cost CHƯA điều chỉnh vào G/L. Sau đó Adjust Cost chạy = ledger update nhưng G/L không sync → audit phát hiện lệch.",
        "action": "Job Queue: Adjust Cost daily 23:00, Post Inventory Cost to G/L 23:30. Nếu chạy tay, ALWAYS Adjust trước rồi mới Post. Document quy trình."
      },
      {
        "title": "Đối soát AR/AP/Bank/Inventory với G/L Trial Balance trước Close",
        "why": "Trong BC, sub-ledger (Customer/Vendor/Item) và G/L hoạt động bán độc lập. Sau cả tháng giao dịch, có thể lệch 100k-1M do: posting group sai, manual G/L journal vào AR account, hoặc Adjust Cost chưa chạy. Lệch 1 ngày = lệch cả năm.",
        "action": "Cuối tháng: chạy 4 reports — Customer/Vendor/Item Age + GL Trial Balance. So sánh đầu kỳ + giao dịch + cuối kỳ. Khớp 100% mới close. Lệch = tìm root cause TRƯỚC khi close."
      },
      {
        "title": "Adjust Exchange Rates cho ngoại tệ — cuối cùng trong sequence",
        "why": "Job này revalue Open AR/AP/Bank ngoại tệ về tỷ giá cuối kỳ → tạo Unrealized FX Gain/Loss. Phải chạy SAU khi mọi giao dịch trong kỳ đã post (vì revalue dựa trên số dư cuối kỳ).",
        "action": "Setup Currency Exchange Rate đến ngày cuối kỳ trước khi chạy. Verify FX Gain/Loss G/L Account đúng. Sau Close kỳ tiếp theo, có Unrealized reversal đầu kỳ — kiểm tra logic này."
      },
      {
        "title": "Lock fiscal period sau close — không reopen tùy tiện",
        "why": "Sau close, có người vẫn cố post backdated transaction vào kỳ đã đóng. Báo cáo đã ký với cổ đông/audit bị invalidate. Pháp lý rất rủi ro.",
        "action": "Setup → General Ledger Setup → Allow Posting From/To. Sau close kỳ 12/2025, set Allow Posting From = 01/2026. User Setup riêng cho CFO/Controller có right reopen tạm thời (with audit log)."
      },
      {
        "title": "Audit trail BẮT BUỘC: Posting Date Range trên User Setup",
        "why": "Khi audit hỏi 'ai post giao dịch này, ngày nào'? Phải có user-level posting date control + log. Nếu Sales Person tự do post backdated = không truy được trách nhiệm.",
        "action": "User Setup: mỗi user có Allow Posting From/To riêng. Sales/Purch chỉ post tháng hiện tại. Kế toán có quyền rộng hơn. CFO có quyền cao nhất. Document và review hàng quý."
      },
      {
        "title": "Reconciliation report phải có sign-off CFO mỗi tháng",
        "why": "Không có sign-off = không ai chịu trách nhiệm số. Lệch sau này không ai nhận. CFO sign-off = formal confirm 'số liệu tháng này đúng, kế toán đã đối soát'.",
        "action": "Template báo cáo: AR Aging, AP Aging, Inventory Valuation, GL Trial Balance, Bank Reconciliation. CFO ký từng trang. Lưu PDF + signed copy trong shared drive. Là life insurance khi có audit."
      },
      {
        "title": "Close Income Statement chỉ chạy 1 lần/năm — đừng nhầm",
        "why": "Close Income Statement chuyển toàn bộ doanh thu/chi phí năm vào Retained Earnings để reset đầu năm mới. Chạy giữa năm = catastrophic.",
        "action": "Lịch close năm: chạy 1 lần duy nhất sau khi audit ký BCTC năm. KHÔNG phải tháng 12 ngay sau period close. Có thể là tháng 3-4 năm sau khi audit xong. Backup full database trước khi chạy."
      }
    ]
  },
  {
    "phase": "14. INTEGRATION & PERFORMANCE",
    "icon": "🔗",
    "color": "#7C3AED",
    "rules": [
      {
        "title": "API integration: idempotency là bắt buộc",
        "why": "Network không reliable. Nếu API call timeout, retry → có thể tạo duplicate (vd: 2 Sales Order cho cùng 1 đơn từ Shopee). Idempotency = retry an toàn.",
        "action": "Mỗi external transaction có Idempotency Key (UUID). BC check key trước khi tạo record mới. Nếu key đã tồn tại = return existing, không tạo mới. Document trong API spec."
      },
      {
        "title": "Báo cáo performance phải có baseline rõ",
        "why": "\"Hệ thống chậm\" là khái niệm cảm tính. Cần số đo: \"Post Sales Order 50 dòng = 8s, target ≤5s\". Không có baseline = không có way to debate hoặc improve.",
        "action": "Define SLA 10-15 metrics quan trọng. Đo baseline trước go-live. Run monthly performance audit. Có Power BI dashboard tracking xu hướng."
      },
      {
        "title": "Database growth tracking — không phát hiện sớm = downtime",
        "why": "BC database tăng 5-15% mỗi năm. Sau 5 năm có thể 5x. Không monitor = đột nhiên report chậm, integration timeout, tenant approaching limit.",
        "action": "Quarterly: check database size, top largest tables, sandbox copy time. Plan archive strategy: Item Ledger Entry > 3 năm → archive offline. Sales Header closed > 5 năm → archive."
      },
      {
        "title": "FlowField vs Normal Field — biết khi dùng cái nào",
        "why": "FlowField calculate on-the-fly bằng SQL aggregate → tiện nhưng SLOW cho big data. Normal field stored → fast read nhưng cần update logic.",
        "action": "FlowField cho field ít đọc + low cardinality (vd: Customer.Balance). Normal field + maintain via trigger cho field đọc thường xuyên trong list (vd: Item.Inventory cần là Normal nếu list 10k items)."
      },
      {
        "title": "Bulk import / large data operation — luôn dùng background",
        "why": "Import 10,000 record qua UI = browser timeout sau 30s. User restart = duplicate. Frustrating.",
        "action": "Mọi bulk operation phải qua: Configuration Package (BC built-in) hoặc Job Queue background. UI show progress. Email khi hoàn thành. Idempotent design (re-runnable)."
      },
      {
        "title": "Integration with legacy = expect data quality issue",
        "why": "Legacy system thường có data dirty hơn ERP mới: encoding TCVN3, date format DD/MM/YY, NULL ≠ empty string, mã không unique. Integration không validate = lỗi liên tục.",
        "action": "Mỗi integration có layer Transform + Validate. Reject row có vấn đề → quarantine table → email báo. Không bao giờ silent-fail. Daily report: # success vs # rejected."
      }
    ]
  },
  {
    "phase": "15. VENDOR MANAGEMENT & ISV",
    "icon": "🏢",
    "color": "#16A34A",
    "rules": [
      {
        "title": "ISV không support local Việt Nam = đắt hơn dài hạn",
        "why": "ISV nước ngoài rẻ license nhưng support qua email US/EU. Múi giờ khác, không hiểu pháp luật VN. Mỗi issue mất 2-3 ngày. Bug urgent = chết.",
        "action": "Pre-evaluate ISV: có partner local VN không? Có Vietnamese support engineer không? SLA response time ≤ 4h? Đọc review của customer VN. Đắt hơn 20% license rẻ hơn 200% maintenance."
      },
      {
        "title": "Custom solution \"tự xây\" = đắt nhất, dù tưởng rẻ",
        "why": "Khách thường nghĩ \"phần này rẻ, để tôi tự xây\". Cost ẩn: maintenance, upgrade compatibility, security patch, scale issue, exit nhân sự. Sau 3 năm thấy lỗ vô cùng.",
        "action": "Trước build vs buy: tính 5-year TCO (Total Cost of Ownership) cả 2 option. Bao gồm: license, dev, test, upgrade, training, support, opportunity cost. Buy thường rẻ hơn 30-50% trong 5 năm."
      },
      {
        "title": "Hợp đồng SLA: response time ≠ resolution time",
        "why": "Vendor hứa SLA P1 \"response 30 phút\". Khách hiểu là \"fix 30 phút\". Vendor hiểu là \"acknowledge\". Mất 2 ngày fix → khách tức giận.",
        "action": "Hợp đồng define rõ: Response Time (acknowledge), Engagement Time (engineer pickup), Resolution Time (fix or workaround). P1 ví dụ: Response 30m, Engagement 2h, Resolution 24h."
      },
      {
        "title": "Multi-vendor scenario: cần Single Point of Accountability",
        "why": "BC + ISV + Power BI + e-invoice connector = 4 vendor. Bug đến: vendor A bảo do vendor B, B bảo C. Không ai chịu trách nhiệm.",
        "action": "Designate Prime Vendor (thường là BC partner) làm Single Point of Accountability (SPA). Khi có issue, khách chỉ gọi Prime. Prime chịu trách nhiệm coordinate với sub-vendor. Mark up 15-20% cho overhead này."
      },
      {
        "title": "Vendor lock-in: hỏi exit strategy trước khi sign",
        "why": "Vendor hứa nhiều khi sales, sau 3 năm khách muốn đổi vendor → vendor cũ không support migration, không export data → khách kẹt.",
        "action": "Pre-sign: hỏi Data Export policy (format, frequency, cost), Source Code Escrow (cho custom AL), Knowledge Transfer khi terminate. Document trong contract như clause \"orderly transition\"."
      },
      {
        "title": "AppSource vs PTE — biết khi chọn cái nào",
        "why": "ISV trên AppSource: validated by MS, multi-tenant ready, upgrade-safe. Per-Tenant Extension (PTE): custom riêng, không validated, có thể break upgrade. Tradeoff lớn.",
        "action": "Default: ưu tiên AppSource cho stability. PTE khi custom rất specific. Mọi PTE phải pass review checklist: Universal Code? Multi-tenant? Documented? Versioned? Có owner maintain."
      }
    ]
  }
];

// data-control.js
// 网站全局数据与控制器

const siteData = {
    // 1. 基础信息与 SEO 设置
    brand: {
        name: "SolidTrack Machinery",
        shortName: "STM Parts",
        logoText: "SOLIDTRACK",
        themeColor: "#FDB813", // CAT黄
        accentColor: "#0033A0", // 小松蓝
    },
    seo: {
        defaultKeywords: "挖掘机配件, 底盘件, Undercarriage parts, 支重轮, 履带, 驱动齿, 工程机械",
        author: "SolidTrack Engineering Team"
    },
    contact: {
        phone: "+86 400-888-9999",
        email: "sales@solidtrack-parts.com",
        address: "江苏省徐州市经济技术开发区重工路88号",
        whatsapp: "+86 13800138000"
    },
    navigation: [
        { name: "首页 HOME", url: "index.html" },
        { name: "底盘件产品 PRODUCTS", url: "products.html" },
        { name: "维修技术支持 BLOG", url: "blog.html" },
        { name: "联系我们 CONTACT", url: "contact.html" }
    ],

    // 2. 产品数据库 (Undercarriage 热门品类)
    categories: [
        {
            id: "track-chains",
            title: "履带总成 & 链轨 (Track Chains/Links)",
            desc: "高频淬火锻造，抗拉强度提升40%，适配20-50吨级主流挖掘机。",
            products: [
                { name: "CAT 320/323 重型履带链轨", desc: "45节，节距190mm。采用深层感应硬化技术，极佳的耐磨性。", specs: "节距: 190mm | 节数: 45 | 适用: CAT 320/323", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80" },
                { name: "Komatsu PC200-8 履带总成", desc: "干式/润滑脂密封可选，有效防止泥沙侵入销轴。", specs: "节距: 190mm | 节数: 45 | 适用: PC200-8/PC220", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
                { name: "Hitachi ZX200-3 链轨节总成", desc: "加厚链轨节设计，专为矿山、采石场等高冲击工况研发。", specs: "节距: 190mm | 节数: 46 | 适用: ZX200/ZX210", img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80" }
            ]
        },
        {
            id: "track-rollers",
            title: "支重轮 & 托链轮 (Track/Carrier Rollers)",
            desc: "双金属浮动油封，终身免维护润滑，承载力极强。",
            products: [
                { name: "PC300-7 锻造支重轮 (底轮)", desc: "轮体采用50Mn硼钢锻造，双向受力设计，防止履带脱轨。", specs: "材质: 50Mn | 热处理: 整体淬火 | 重量: 45kg", img: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=600&q=80" },
                { name: "CAT 336 托链轮 (顶轮)", desc: "加强型轮轴与高精度双锥度密封，保障高速运转不漏油。", specs: "类型: 单法兰 | 材质: 40Cr | 适用: CAT 336D/E", img: "https://images.unsplash.com/photo-1537151641189-e685b67326c5?auto=format&fit=crop&w=600&q=80" },
                { name: "Volvo EC210B 支重轮总成", desc: "原厂标准公差，高纯度耐磨铜套，大幅降低摩擦系数。", specs: "法兰: 双边 | 表面硬度: HRC52-58 | 重量: 32kg", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" }
            ]
        },
        {
            id: "sprockets",
            title: "驱动齿 & 引导轮 (Sprockets & Idlers)",
            desc: "高精度铸压与齿面感应淬火，确保完美啮合，延长行走马达寿命。",
            products: [
                { name: "CAT 320 驱动齿圈 (Sprocket Rim)", desc: "深齿面淬火，抗点蚀与剥落，精确引导履带运转无异响。", specs: "齿数: 21 | 安装孔: 16孔 | 材质: 35MnB", img: "https://images.unsplash.com/photo-1563452619267-c404ebfaecbf?auto=format&fit=crop&w=600&q=80" },
                { name: "Komatsu PC200 引导轮总成 (Idler)", desc: "带涨紧装置接口，重型前置引导轮，内腔储油量增加20%。", specs: "类型: 铸造 | 轴径: 65mm | 包含: 轮体+轴+支架", img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=600&q=80" },
                { name: "Kobelco SK200-8 驱动轮整体", desc: "整体式铸钢驱动轮，消除焊接应力，矿山破碎作业首选。", specs: "齿数: 21 | 安装孔: 18孔 | 重量: 68kg", img: "https://images.unsplash.com/photo-1578319439584-104c94d3fdba?auto=format&fit=crop&w=600&q=80" }
            ]
        }
    ],

    // 3. 博客数据库 (长篇维修指南)
    blogs: [
        {
            id: "blog-1",
            title: "挖掘机底盘件（Undercarriage）日常保养与磨损自检指南",
            date: "2026-03-05",
            author: "资深底盘件工程师 张工",
            img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=80",
            content: `
                <p class="mb-4">在挖掘机的全生命周期中，底盘件（Undercarriage）的维修和更换成本占据了整机维护费用的很大一部分（通常占保养总成本的 50% 左右）。掌握科学的自检和保养方法，能有效延长履带、支重轮和驱动齿的使用寿命。</p>
                <h3 class="text-xl font-bold mt-6 mb-3 text-gray-900 border-l-4 border-yellow-500 pl-3">1. 履带涨紧度（Track Tension）的检查与调整</h3>
                <p class="mb-4">履带过紧会导致行走马达负荷增大，加速链轨节销套和驱动齿的异常磨损；履带过松则容易导致脱轨（掉链子）并在高速行走时拍打机架。<strong>正确测量方法：</strong>将挖掘机单边撑起，使履带自然下垂。测量中间位置支重轮底部与履带板上表面的距离。20吨级挖机正常间隙应在 <strong>300mm - 330mm</strong> 之间。如在泥泞或粘土环境作业，建议将履带调松 10-20mm 以便于排泥。</p>
                <h3 class="text-xl font-bold mt-6 mb-3 text-gray-900 border-l-4 border-yellow-500 pl-3">2. 支重轮（Track Rollers）的漏油预警</h3>
                <p class="mb-4">支重轮是“终身润滑”部件，内部采用浮动油封。每天开机前应绕机目测检查：如果发现支重轮端面有新鲜的油泥混合物，或者某个轮体在运转时发出干涩的金属摩擦尖叫声（Squeaking），说明油封已损坏内部干涸。此时应立即停机更换，否则轮轴会迅速抱死被磨断，甚至牵连损坏整条链轨。</p>
                <h3 class="text-xl font-bold mt-6 mb-3 text-gray-900 border-l-4 border-yellow-500 pl-3">3. 驱动齿与链轨的“咬合”检查</h3>
                <p class="mb-4">驱动齿（Sprocket）的齿面磨损极限通常为 6mm 左右。当发现齿尖变得像“刀刃”一样锋利时，必须进行更换。需要特别注意的是：<strong>切忌将全新的驱动齿与严重拉长的旧链轨配合使用！</strong> 节距不匹配会导致新齿在 200 小时内被迅速啃噬报废。更换底盘件应遵循“成套更换”或“成对更换”的原则。</p>
            `
        },
        {
            id: "blog-2",
            title: "如何正确更换挖掘机引导轮（Idler）与履带涨紧油缸修复",
            date: "2026-02-28",
            author: "液压与底盘维修专家 李工",
            img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
            content: `
                <p class="mb-4">引导轮（Idler）位于履带车架前端，主要作用是引导履带正确卷绕，并与后方的涨紧油缸（Track Adjuster Cylinder）及缓冲弹簧相连，吸收行走时的冲击力。更换引导轮是一项需要极高安全意识的重体力作业。</p>
                <h3 class="text-xl font-bold mt-6 mb-3 text-gray-900 border-l-4 border-yellow-500 pl-3">警告：高压黄油的安全释放（极其重要！）</h3>
                <p class="mb-4">涨紧油缸内注满了高压黄油，压力可达数百巴。在拆卸引导轮之前，必须先将履带放松。<strong>绝对不能直接完全拧下泄压阀！</strong> 正确做法是：使用加长套筒，站在侧面（身体严禁正对阀口），缓慢逆时针旋转单向阀（Grease Valve）最多 1 到 1.5 圈。黄油会从排油槽溢出，此时履带会逐渐松弛。如果拧开后黄油不排出，说明内部油路堵塞，需呼叫专业人员使用液压顶设备处理，强行拆卸极易引发部件如炮弹般飞出造成致命伤亡。</p>
                <h3 class="text-xl font-bold mt-6 mb-3 text-gray-900 border-l-4 border-yellow-500 pl-3">拆卸与安装引导轮的步骤</h3>
                <p class="mb-4">1. 拆下履带主销（Master Pin），将履带完全平铺于地面。<br>2. 用起重设备（吊车或另一台挖机）吊住引导轮总成，向外平移抽出。连同涨紧油缸一起抽出。<br>3. 检查缓冲弹簧是否断裂，油缸活塞杆表面是否拉伤。如活塞杆有深度划痕，即使换了新油封也会再次漏油，建议直接更换涨紧油缸总成。<br>4. 在安装新的引导轮之前，务必清理车架导轨（Track Frame Guides）上的硬化泥块和铁屑，必要时堆焊修复磨损过度的导轨，确保引导轮上下浮动顺畅，防止偏磨。</p>
                <h3 class="text-xl font-bold mt-6 mb-3 text-gray-900 border-l-4 border-yellow-500 pl-3">排气与初步涨紧</h3>
                <p class="mb-4">安装复位并接好履带销后，使用气动黄油枪向单向阀加注黄油。期间可让挖机悬空履带缓慢正反转，使泥沙排出且各部件就位，最后按照标准间距完成最终涨紧。</p>
            `
        }
    ]
};

// ================= 全局功能渲染引擎 =================

document.addEventListener("DOMContentLoaded", () => {
    const pageId = document.body.id;
    initSEO(pageId);
    renderHeader();
    renderFooter();

    if (pageId === "page-home") renderHome();
    if (pageId === "page-products") renderProducts();
    if (pageId === "page-blog") renderBlogs();
    if (pageId === "page-contact") renderContact();
});

// 1. 动态注入 SEO Meta 标签
function initSEO(pageId) {
    let title = siteData.brand.name;
    let desc = "领先的工程机械底盘件制造商。提供优质履带、支重轮、引导轮和驱动齿，适配CAT、Komatsu等机型。";
    
    if (pageId === "page-products") { title = "底盘件产品目录 | " + siteData.brand.name; }
    if (pageId === "page-blog") { title = "技术支持与维修博客 | " + siteData.brand.name; }
    if (pageId === "page-contact") { title = "联系我们 | " + siteData.brand.name; }

    document.title = title;
    
    // 注入 Meta
    const head = document.head;
    const metaDesc = document.createElement('meta');
    metaDesc.name = "description";
    metaDesc.content = desc;
    head.appendChild(metaDesc);

    const metaKey = document.createElement('meta');
    metaKey.name = "keywords";
    metaKey.content = siteData.seo.defaultKeywords;
    head.appendChild(metaKey);
}

// 2. 渲染顶部导航栏 (融合 CAT 黄与 Komatsu 蓝配色)
function renderHeader() {
    const headerHtml = `
        <div class="bg-[#111111] text-white">
            <div class="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm border-b border-gray-800">
                <div><span>&#9993;</span> ${siteData.contact.email}</div>
                <div><span>&#9742;</span> 24/7 Support: <span class="text-[#FDB813] font-bold">${siteData.contact.phone}</span></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
                <a href="index.html" class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-[#FDB813] flex items-center justify-center font-black text-black text-2xl skew-x-[-10deg]">S</div>
                    <span class="text-2xl font-black tracking-tight">${siteData.brand.logoText}<span class="text-[#0033A0]">.PARTS</span></span>
                </a>
                <nav class="hidden md:flex space-x-8 font-bold text-gray-300">
                    ${siteData.navigation.map(nav => `<a href="${nav.url}" class="hover:text-[#FDB813] transition border-b-2 border-transparent hover:border-[#FDB813] pb-1">${nav.name}</a>`).join('')}
                </nav>
            </div>
        </div>
    `;
    document.getElementById("global-header").innerHTML = headerHtml;
}

// 3. 渲染底部版权区
function renderFooter() {
    const footerHtml = `
        <footer class="bg-[#0A0A0A] text-gray-400 py-12 border-t-4 border-[#0033A0]">
            <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 class="text-xl font-bold text-white mb-4">关于 ${siteData.brand.shortName}</h3>
                    <p class="text-sm leading-relaxed mb-4">专注高品质工程机械底盘件供应链，采用原厂锻造工艺，全流程热处理品控，为您的重型设备提供极具性价比的强劲支撑。</p>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-white mb-4">产品分类</h3>
                    <ul class="space-y-2 text-sm">
                        ${siteData.categories.map(cat => `<li><a href="products.html#${cat.id}" class="hover:text-[#FDB813] transition">> ${cat.title}</a></li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-white mb-4">全球联络处</h3>
                    <ul class="space-y-2 text-sm">
                        <li>📍 ${siteData.contact.address}</li>
                        <li>📞 销售热线: ${siteData.contact.phone}</li>
                        <li>📱 WhatsApp: ${siteData.contact.whatsapp}</li>
                        <li>📧 邮箱: ${siteData.contact.email}</li>
                    </ul>
                </div>
            </div>
            <div class="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-xs">
                &copy; ${new Date().getFullYear()} ${siteData.brand.name}. All rights reserved. | Built for Heavy Duty.
            </div>
        </footer>
    `;
    document.getElementById("global-footer").innerHTML = footerHtml;
}

// 4. 各个页面的具体渲染逻辑
function renderProducts() {
    let html = '';
    siteData.categories.forEach(cat => {
        html += `
            <div id="${cat.id}" class="mb-16">
                <h2 class="text-3xl font-black text-[#111] mb-2 border-l-8 border-[#FDB813] pl-4 uppercase">${cat.title}</h2>
                <p class="text-gray-600 mb-8">${cat.desc}</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${cat.products.map(p => `
                        <div class="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition group">
                            <div class="h-56 overflow-hidden bg-gray-100">
                                <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500 grayscale group-hover:grayscale-0">
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-[#0033A0] mb-2">${p.name}</h3>
                                <p class="text-gray-600 text-sm mb-4 h-10">${p.desc}</p>
                                <div class="bg-gray-50 p-3 text-xs text-gray-700 border-l-2 border-[#111] font-mono mb-4">${p.specs}</div>
                                <a href="contact.html" class="block w-full text-center bg-[#111] text-white py-2 hover:bg-[#FDB813] hover:text-[#111] font-bold transition">获取最新报价</a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    document.getElementById("products-container").innerHTML = html;
}

function renderBlogs() {
    let html = '';
    siteData.blogs.forEach(blog => {
        html += `
            <article class="bg-white shadow-lg mb-12 overflow-hidden border-t-4 border-[#0033A0]">
                <img src="${blog.img}" alt="${blog.title}" class="w-full h-64 object-cover">
                <div class="p-8">
                    <div class="flex items-center gap-4 text-xs font-bold text-[#FDB813] mb-3 uppercase">
                        <span>🗓 ${blog.date}</span>
                        <span>✍️ ${blog.author}</span>
                    </div>
                    <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-6 leading-tight">${blog.title}</h2>
                    <div class="prose max-w-none text-gray-700 leading-relaxed">
                        ${blog.content}
                    </div>
                </div>
            </article>
        `;
    });
    document.getElementById("blog-container").innerHTML = html;
}

function renderContact() {
    const html = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="bg-white p-8 shadow-lg border-t-8 border-[#FDB813]">
                <h2 class="text-3xl font-black mb-6 text-[#111]">获取零件报价</h2>
                <form class="space-y-4">
                    <div><label class="block text-sm font-bold text-gray-700 mb-1">您的姓名 / Name</label><input type="text" class="w-full border border-gray-300 p-3 focus:border-[#0033A0] focus:ring-1 focus:ring-[#0033A0] outline-none"></div>
                    <div><label class="block text-sm font-bold text-gray-700 mb-1">电子邮件 / Email</label><input type="email" class="w-full border border-gray-300 p-3 focus:border-[#0033A0] outline-none"></div>
                    <div><label class="block text-sm font-bold text-gray-700 mb-1">所需配件与机型 (例如: CAT 320C 支重轮)</label><textarea class="w-full border border-gray-300 p-3 h-32 focus:border-[#0033A0] outline-none"></textarea></div>
                    <button type="button" class="w-full bg-[#0033A0] text-white font-bold text-lg py-4 hover:bg-[#111] transition">发送询价单 (SEND)</button>
                </form>
            </div>
            <div class="bg-[#111] text-white p-8 flex flex-col justify-center">
                <h2 class="text-3xl font-black mb-8 text-[#FDB813]">全球直供网络</h2>
                <div class="space-y-6 text-lg">
                    <p class="flex items-center gap-4"><span class="w-12 h-12 bg-gray-800 flex items-center justify-center rounded-full text-[#FDB813]">&#9742;</span> ${siteData.contact.phone}</p>
                    <p class="flex items-center gap-4"><span class="w-12 h-12 bg-gray-800 flex items-center justify-center rounded-full text-[#FDB813]">📱</span> WhatsApp: ${siteData.contact.whatsapp}</p>
                    <p class="flex items-center gap-4"><span class="w-12 h-12 bg-gray-800 flex items-center justify-center rounded-full text-[#FDB813]">&#9993;</span> ${siteData.contact.email}</p>
                    <p class="flex items-center gap-4"><span class="w-12 h-12 bg-gray-800 flex items-center justify-center rounded-full text-[#FDB813]">📍</span> ${siteData.contact.address}</p>
                </div>
            </div>
        </div>
    `;
    document.getElementById("contact-container").innerHTML = html;
}
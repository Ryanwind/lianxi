// data-control.js
// Global Data and Control Center

const siteData = {
    // 1. Basic Info & SEO
    brand: {
        name: "Haiyi Machinery - 泉州海逸机械有限公司",
        shortName: "Haiyi Parts",
        logoText: "Haiyi Machinery",
        themeColor: "#FDB813", // CAT Yellow
        accentColor: "#0033A0", // Komatsu Blue
    },
    seo: {
        defaultKeywords: "Excavator parts, Undercarriage parts, Track rollers, Track chains, Sprockets, Heavy machinery, Quanzhou undercarriage",
        author: "SolidTrack Engineering Team"
    },
    contact: {
        address: "Pudang Industrial Zone, Xiamei, Nan'an, Quanzhou, Fujian Province, China",
        zipcode: "362000",
        phone: "0595-86769058 / +86 13506029588",
        fax: "0595-86769058",
        email: "info@qzhaiyi.com"
    },
    navigation: [
        { name: "HOME", url: "index.html" },
        { name: "PRODUCTS", url: "products.html" },
        { name: "MAINTENANCE BLOG", url: "blog.html" },
        { name: "CONTACT US", url: "contact.html" }
    ],

    // 2. Product Database (Undercarriage Categories)
    categories: [
        {
            id: "track-chains",
            title: "Track Chains & Link Assemblies",
            desc: "High-frequency induction forging increases tensile strength by 40%. Suitable for 20-50 ton mainstream excavators.",
            products: [
                { name: "CAT 320/323 Heavy Duty Track Chain", desc: "Deep induction hardened for superior wear resistance in abrasive conditions.", specs: "Pitch: 190mm | Links: 45 | Fit: CAT 320/323", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80" },
                { name: "Komatsu PC200-8 Track Link Ass'y", desc: "Available in dry or grease-sealed options to prevent mud and sand intrusion into the pins.", specs: "Pitch: 190mm | Links: 45 | Fit: PC200-8/PC220", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
                { name: "Hitachi ZX200-3 Track Chain", desc: "Thickened link design, developed specifically for high-impact conditions like mining.", specs: "Pitch: 190mm | Links: 46 | Fit: ZX200/ZX210", img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80" }
            ]
        },
        {
            id: "track-rollers",
            title: "Track Rollers & Carrier Rollers",
            desc: "Equipped with bimetallic floating oil seals for lifetime maintenance-free lubrication and maximum load capacity.",
            products: [
                { name: "PC300-7 Forged Track Roller", desc: "Forged 50Mn boron steel body with bi-directional load-bearing design to prevent track derailment.", specs: "Material: 50Mn | Treatment: Quenched | Weight: 45kg", img: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=600&q=80" },
                { name: "CAT 336 Carrier Roller", desc: "Reinforced shaft and high-precision dual-cone sealing ensure no oil leakage at high speeds.", specs: "Type: Single Flange | Material: 40Cr | Fit: CAT 336", img: "https://images.unsplash.com/photo-1537151641189-e685b67326c5?auto=format&fit=crop&w=600&q=80" },
                { name: "Volvo EC210B Track Roller", desc: "OEM standard tolerance with high-purity wear-resistant copper sleeve to reduce friction.", specs: "Flange: Double | Hardness: HRC52-58 | Weight: 32kg", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" }
            ]
        },
        {
            id: "sprockets",
            title: "Sprockets & Front Idlers",
            desc: "Precision casting and induction-hardened teeth guarantee perfect meshing and extend travel motor life.",
            products: [
                { name: "CAT 320 Sprocket Rim", desc: "Deep tooth surface hardening protects against pitting and peeling, guiding the track silently.", specs: "Teeth: 21 | Holes: 16 | Material: 35MnB", img: "https://images.unsplash.com/photo-1563452619267-c404ebfaecbf?auto=format&fit=crop&w=600&q=80" },
                { name: "Komatsu PC200 Idler Assembly", desc: "Heavy-duty front idler with a 20% increased internal oil storage capacity.", specs: "Type: Casting | Shaft Dia: 65mm | Includes Brackets", img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=600&q=80" },
                { name: "Kobelco SK200-8 Sprocket", desc: "Integral cast steel drive wheel, eliminating welding stress. Ideal for quarrying operations.", specs: "Teeth: 21 | Holes: 18 | Weight: 68kg", img: "https://images.unsplash.com/photo-1578319439584-104c94d3fdba?auto=format&fit=crop&w=600&q=80" }
            ]
        }
    ],

    // 3. Blog Database (Technical Guides)
    blogs: [
        {
            id: "blog-1",
            title: "Excavator Undercarriage: Daily Maintenance & Wear Inspection Guide",
            date: "March 5, 2026",
            author: "Senior Engineer Team",
            img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=80",
            content: `
                <p class="mb-4">In the lifecycle of an excavator, undercarriage maintenance and replacement account for a significant portion of total upkeep costs (often around 50%). Mastering proper inspection methods can significantly extend the lifespan of your tracks, rollers, and sprockets.</p>
                <h3 class="text-xl font-bold mt-6 mb-3 text-gray-900 border-l-4 border-[#FDB813] pl-3">1. Track Tension Inspection and Adjustment</h3>
                <p class="mb-4">A track that is too tight increases the load on the travel motor and accelerates the wear of the track pins, bushings, and sprockets. Conversely, a loose track can derail and slap against the frame. <strong>Proper Measurement:</strong> Lift one side of the excavator so the track sags naturally. Measure the distance from the bottom of the lowest track roller to the top of the track shoe. For a 20-ton excavator, the normal clearance is <strong>300mm - 330mm</strong>. In muddy or clay environments, loosen it by an additional 10-20mm to allow mud packing.</p>
                <h3 class="text-xl font-bold mt-6 mb-3 text-gray-900 border-l-4 border-[#FDB813] pl-3">2. Track Roller Leakage Warning Signs</h3>
                <p class="mb-4">Track rollers are "lifetime lubricated" components featuring floating oil seals. Perform a daily visual walk-around: if you notice fresh oil mixed with mud on the end face of a roller, or hear a high-pitched metallic squeaking noise during travel, the oil seal has failed and the internal cavity is dry. Shut down and replace it immediately to prevent the shaft from seizing and damaging the entire track chain.</p>
                <h3 class="text-xl font-bold mt-6 mb-3 text-gray-900 border-l-4 border-[#FDB813] pl-3">3. Sprocket and Track Chain "Meshing"</h3>
                <p class="mb-4">The wear limit for sprocket teeth is typically around 6mm. When the tips become as sharp as a "knife blade," replacement is mandatory. <strong>Crucial Rule:</strong> Never pair a brand-new sprocket with a severely stretched old track chain! The mismatched pitch will destroy the new sprocket within 200 hours. Always replace undercarriage components in sets or pairs.</p>
            `
        },
        {
            id: "blog-2",
            title: "Safety Guide: Replacing Excavator Idlers & Track Adjuster Cylinders",
            date: "February 28, 2026",
            author: "Hydraulic Maintenance Expert",
            img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
            content: `
                <p class="mb-4">The front idler guides the track into the roller frame and works with the track adjuster cylinder and recoil spring to absorb impact. Replacing it is a heavy-duty task that requires strict safety protocols.</p>
                <h3 class="text-xl font-bold mt-6 mb-3 text-gray-900 border-l-4 border-[#FDB813] pl-3">WARNING: High-Pressure Grease Release</h3>
                <p class="mb-4">The track adjuster cylinder is filled with high-pressure grease (hundreds of bars). Before removing the idler, you must loosen the track. <strong>NEVER completely unscrew the grease relief valve!</strong> Correct procedure: Use a long socket wrench, stand to the side (never directly facing the valve), and slowly turn the grease valve counter-clockwise by a maximum of 1 to 1.5 turns. The grease will slowly extrude, slackening the track. If grease does not escape, the internal channel is blocked; call a professional. Forcing disassembly can cause parts to shoot out like projectiles, causing fatal injuries.</p>
                <h3 class="text-xl font-bold mt-6 mb-3 text-gray-900 border-l-4 border-[#FDB813] pl-3">Disassembly and Installation Steps</h3>
                <p class="mb-4">1. Remove the master pin and lay the track flat on the ground.<br>2. Use a crane or another excavator to sling the idler assembly, sliding it out horizontally along with the adjuster cylinder.<br>3. Inspect the recoil spring for cracks and the cylinder rod for scoring. Deep scratches on the rod will destroy new seals instantly; replace the entire cylinder if damaged.<br>4. Before installing the new idler, thoroughly clean the track frame guides. Hardened mud or metal shavings will prevent the idler from sliding back and forth properly, leading to uneven wear.</p>
            `
        }
    ]
};

// ================= Global Rendering Engine =================

document.addEventListener("DOMContentLoaded", () => {
    const pageId = document.body.id;
    initSEO(pageId);
    renderHeader();
    renderFooter();

    if (pageId === "page-products") renderProducts();
    if (pageId === "page-blog") renderBlogs();
    if (pageId === "page-contact") renderContact();
});

function initSEO(pageId) {
    let title = siteData.brand.name + " | Premium Undercarriage Parts";
    let desc = "Leading manufacturer of heavy machinery undercarriage parts. Supplying high-quality track chains, rollers, idlers, and sprockets for CAT, Komatsu, Volvo, etc.";
    
    if (pageId === "page-products") { title = "Undercarriage Products Catalog | " + siteData.brand.name; }
    if (pageId === "page-blog") { title = "Technical Support & Blog | " + siteData.brand.name; }
    if (pageId === "page-contact") { title = "Contact Us | " + siteData.brand.name; }

    document.title = title;
    
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

function renderHeader() {
    const headerHtml = `
        <div class="bg-[#111111] text-white">
            <div class="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center text-sm border-b border-gray-800">
                <div><span>&#9993;</span> ${siteData.contact.email}</div>
                <div><span>&#9742;</span> Global Sales: <span class="text-[#FDB813] font-bold">${siteData.contact.phone}</span></div>
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

function renderFooter() {
    const footerHtml = `
        <footer class="bg-[#0A0A0A] text-gray-400 py-12 border-t-4 border-[#0033A0]">
            <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 class="text-xl font-bold text-white mb-4">About ${siteData.brand.shortName}</h3>
                    <p class="text-sm leading-relaxed mb-4">Dedicated to a high-quality undercarriage supply chain. Utilizing OEM forging processes and comprehensive heat treatment quality control to provide extreme durability for heavy machinery.</p>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-white mb-4">Quick Links</h3>
                    <ul class="space-y-2 text-sm">
                        ${siteData.categories.map(cat => `<li><a href="products.html#${cat.id}" class="hover:text-[#FDB813] transition">> ${cat.title}</a></li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-white mb-4">Global Contact</h3>
                    <ul class="space-y-2 text-sm">
                        <li>📍 ${siteData.contact.address}</li>
                        <li>📠 Fax: ${siteData.contact.fax}</li>
                        <li>📞 Phone: ${siteData.contact.phone}</li>
                        <li>📧 Email: ${siteData.contact.email}</li>
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

function renderProducts() {
    let html = '';
    siteData.categories.forEach(cat => {
        html += `
            <div id="${cat.id}" class="mb-16">
                <h2 class="text-3xl font-black text-[#111] mb-2 border-l-8 border-[#FDB813] pl-4 uppercase">${cat.title}</h2>
                <p class="text-gray-600 mb-8">${cat.desc}</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${cat.products.map(p => `
                        <div class="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition group flex flex-col">
                            <div class="h-56 overflow-hidden bg-gray-100">
                                <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500 grayscale group-hover:grayscale-0">
                            </div>
                            <div class="p-6 flex-grow flex flex-col">
                                <h3 class="text-xl font-bold text-[#0033A0] mb-2">${p.name}</h3>
                                <p class="text-gray-600 text-sm mb-4 flex-grow">${p.desc}</p>
                                <div class="bg-gray-50 p-3 text-xs text-gray-700 border-l-2 border-[#111] font-mono mb-4">${p.specs}</div>
                                <a href="mailto:${siteData.contact.email}?subject=Inquiry about ${p.name}" class="block w-full text-center bg-[#111] text-white py-2 hover:bg-[#FDB813] hover:text-[#111] font-bold transition uppercase text-sm">Request Quote</a>
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

// 修改点：去除了表单，改为大气、清晰的公司联络名片排版
function renderContact() {
    const html = `
        <div class="max-w-4xl mx-auto bg-white p-10 md:p-16 shadow-2xl border-t-8 border-[#FDB813] rounded-sm">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-black text-[#111] uppercase tracking-wide">Global Supply Center</h2>
                <p class="text-gray-500 mt-2 font-semibold">Get in touch with our experts for pricing and availability.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div class="bg-gray-50 p-6 border-l-4 border-[#0033A0]">
                    <h3 class="text-sm text-gray-400 font-bold uppercase tracking-wider mb-4">Headquarters</h3>
                    <div class="flex items-start gap-4 mb-4">
                        <span class="text-2xl">📍</span>
                        <p class="text-gray-800 font-medium leading-relaxed">${siteData.contact.address}<br><span class="text-gray-500 text-sm">Zip Code: ${siteData.contact.zipcode}</span></p>
                    </div>
                </div>
                
                <div class="bg-gray-50 p-6 border-l-4 border-[#FDB813]">
                    <h3 class="text-sm text-gray-400 font-bold uppercase tracking-wider mb-4">Direct Contact</h3>
                    <div class="space-y-4">
                        <div class="flex items-center gap-4">
                            <span class="text-2xl">📞</span>
                            <p class="text-gray-800 font-bold text-lg">${siteData.contact.phone}</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="text-2xl">📠</span>
                            <p class="text-gray-800 font-medium text-lg">Fax: ${siteData.contact.fax}</p>
                        </div>
                        <div class="flex items-center gap-4 mt-2 pt-4 border-t border-gray-200">
                            <span class="text-2xl">✉️</span>
                            <a href="mailto:${siteData.contact.email}" class="text-[#0033A0] hover:text-[#FDB813] font-bold text-lg transition">${siteData.contact.email}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById("contact-container").innerHTML = html;
}


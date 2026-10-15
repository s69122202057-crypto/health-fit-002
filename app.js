/* HEALTH & FIT - ไฟล์ JavaScript ส่วนกลาง
   ข้อมูลคอร์ส (C) · ระบบสมัคร/เข้าสู่ระบบ · ฟอร์ม · เมนู อยู่ในไฟล์นี้ */
const GROUP="กลุ่มเรียน 002";
const C=[
{id:1,n:"Cardio Burn 30 Days",e:"activity",by:"เทรนเนอร์มืออาชีพ",p:1590,cat:"ลดน้ำหนัก",lv:"เริ่มต้น",eq:"ไม่ใช้อุปกรณ์",m:"30 นาที/วัน",d:"คาร์ดิโอเผาผลาญไขมัน 30 วัน",kc:"400-500"},
{id:2,n:"Muscle Building Pro",e:"dumbbell",by:"โค้ชสายเวท",p:2290,cat:"สร้างกล้ามเนื้อ",lv:"ปานกลาง",eq:"ดัมเบล",m:"45 นาที/วัน",d:"เน้นสร้างกล้ามเนื้อ",kc:"350-450"},
{id:3,n:"Yoga & Mindbalance",e:"yoga",by:"ครูโยคะ RYT-200",p:1290,cat:"ยืดหยุ่น",lv:"เริ่มต้น",eq:"เสื่อโยคะ",m:"30 นาที/วัน",d:"ยืดเหยียดและผ่อนคลาย",kc:"150-250"},
{id:4,n:"Nutrition & Diet Plan",e:"apple",by:"นักกำหนดอาหาร",p:990,cat:"โภชนาการ",lv:"ทุกระดับ",eq:"ไม่ใช้อุปกรณ์",m:"15 นาที/วัน",d:"วางแผนโภชนาการ",kc:"-"},
{id:5,n:"Full Body HIIT Workout 2024",e:"flame",by:"เทรนเนอร์มืออาชีพ",p:1490,cat:"ลดน้ำหนัก",lv:"ปานกลาง",eq:"ไม่ใช้อุปกรณ์",m:"45 นาที/วัน",d:"HIIT ทั้งตัว",kc:"450-600"},
{id:6,n:"Pilates for Beginners",e:"pilates",by:"ครูพิลาทิส",p:1190,cat:"ยืดหยุ่น",lv:"เริ่มต้น",eq:"ไม่ใช้อุปกรณ์",m:"30 นาที/วัน",d:"พิลาทิสสำหรับมือใหม่",kc:"150-250"}];
const M=[["น","น.ส.นิชา ดลประสิทธิ์","69122202014"],["ว","นายวรุตม์ เที่ยงดี","69122202019"],["ศ","นายศิรภูมิ ปานเนียม","69122202052"],["ช","นายชัยวัฒน์ บุญคูบอน","69122202057"],["บ","นายบริภัณฑ์ ร่มเย็น","69122202061"],["ป","นายปภัสชน สำราญสุข","69122202064"]];
const f=n=>"฿"+n.toLocaleString();
const IC={home:'<path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',contact:'<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M14 10h4M14 14h4M6 16c.5-1.5 5.5-1.5 6 0"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',pulse:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/><path d="M5 12h3l2-3 3 6 2-3h4"/>',activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',dumbbell:'<path d="M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12"/>',yoga:'<path d="M12 21c-5 0-8-3-8-8 5 0 8 3 8 8zM12 21c5 0 8-3 8-8-5 0-8 3-8 8zM12 21C9 16 9 8 12 3c3 5 3 13 0 18z"/>',apple:'<path d="M12 7c-2-2-7-1-7 5 0 5 3 9 5 9 1 0 1.5-.5 2-.5s1 .5 2 .5c2 0 5-4 5-9 0-6-5-7-7-5z"/><path d="M12 7c0-2 1-4 3-5"/>',flame:'<path d="M12 22c4 0 7-3 7-7 0-4-3-6-4-10-3 2-4 5-4 7-1-1-2-2-2-4-2 2-4 5-4 8 0 4 3 6 7 6z"/>',pilates:'<circle cx="12" cy="5" r="2"/><path d="M12 8v6M6 10l6 2 6-2M9 21l3-7 3 7"/>',play:'<circle cx="12" cy="12" r="10"/><path d="M10 8l6 4-6 4z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',star:'<path d="M12 2l3 7 7 .6-5.3 4.7 1.6 7.2L12 17.8 5.7 21.5l1.6-7.2L2 9.6 9 9z"/>',phone:'<path d="M22 17v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>',clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',filter:'<path d="M22 3H2l8 9.5V19l4 2v-8.5z"/>',cart:'<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>'};
const I=(n,z=20)=>`<svg class="ic" width="${z}" height="${z}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${IC[n]}</svg>`;
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const LS={g(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(x){return d}},s(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(x){}}};
C.push(...LS.g('hf_courses',[]));
const me=()=>LS.g('hf_me',null);
function renderMe(){const u=me();$("#me").innerHTML=u?`<span class="mu" style="font-size:13px">สวัสดี ${esc(u.name)} · <a href="#" onclick="logout();return false" style="color:var(--g2)">ออกจากระบบ</a></span>`:""}
function logout(){LS.s('hf_me',null);flash('ออกจากระบบแล้ว','index.html')}
function go(i){$("#"+i).scrollIntoView({behavior:"smooth"})}
function doReg(ev){ev.preventDefault();const U=LS.g('hf_users',[]),em=$("#re").value.trim().toLowerCase();
if(U.some(u=>u.email==em)){toast('อีเมลนี้ถูกใช้สมัครแล้ว');return false}
const u={name:$("#rn").value.trim(),email:em,pw:$("#rp").value};U.push(u);LS.s('hf_users',U);LS.s('hf_me',{name:u.name,email:em});renderMe();flash('สมัครสมาชิกสำเร็จ','index.html');return false}
function doLogin(ev){ev.preventDefault();const em=$("#li").value.trim().toLowerCase(),u=LS.g('hf_users',[]).find(x=>x.email==em&&x.pw==$("#lp").value);
if(!u){toast('อีเมลหรือรหัสผ่านไม่ถูกต้อง');return false}LS.s('hf_me',{name:u.name,email:em});renderMe();flash('เข้าสู่ระบบสำเร็จ','index.html');return false}
function forgot(){const em=$("#li").value.trim();toast(em?'ส่งลิงก์ตั้งรหัสผ่านใหม่ไปที่ '+em+' แล้ว':'กรุณากรอกอีเมลก่อน')}
function enroll(id){if(!me()){flash('กรุณาเข้าสู่ระบบก่อนสมัครคอร์ส','login.html');return}
const E=LS.g('hf_enr',[]),c=C.find(x=>x.id==id);if(E.includes(id)){toast('คุณสมัครคอร์สนี้แล้ว');return}E.push(id);LS.s('hf_enr',E);toast('สมัครคอร์ส '+c.n+' เรียบร้อย')}
function fav(id){const F=LS.g('hf_fav',[]),i=F.indexOf(id);i<0?F.push(id):F.splice(i,1);LS.s('hf_fav',F);toast(i<0?'บันทึกในรายการโปรดแล้ว':'นำออกจากรายการโปรดแล้ว')}
function doPost(ev){ev.preventDefault();if(!me()){flash('กรุณาเข้าสู่ระบบก่อนลงประกาศ','login.html');return false}
const c={id:C.length+1,n:$("#pn").value.trim(),e:'activity',by:$("#pt").value.trim()||me().name,p:+$("#pp").value||0,cat:$("#pc").value,lv:$("#pl").value,eq:'ไม่ใช้อุปกรณ์',m:'30 นาที/วัน',d:$("#pd").value.trim()||'คอร์สใหม่จากเทรนเนอร์',kc:'-'};
C.push(c);const U=LS.g('hf_courses',[]);U.push(c);LS.s('hf_courses',U);flash('ลงประกาศคอร์สเรียบร้อย','detail.html?id='+c.id);return false}
function toast(t){const x=$("#toast");x.textContent=t;x.style.display="block";setTimeout(()=>x.style.display="none",2500)}
const cardH=c=>`<div class="card"><div class="ph">${I(c.e,44)}</div><b>${c.n}</b><div class="mu">โดย ${c.by}</div><div class="price">${f(c.p)}</div><a class="btn o w" style="margin-top:8px;text-align:center" href="detail.html?id=${c.id}">ดูรายละเอียด</a></div>`;
function flt(){const q=$("#q").value.toLowerCase(),g=$("#g").value,e=$("#e").value,l=$("#l")?$("#l").value:"";
const r=C.filter(c=>c.n.toLowerCase().includes(q)&&(!g||c.cat==g)&&(!e||c.eq==e)&&(!l||c.lv==l));
$("#res").innerHTML=r.map(c=>`<div class="card item"><div class="ph">${I(c.e,30)}</div><div class="b"><b>${c.n}</b><div class="price">${f(c.p)}</div><div class="mu">ระดับ: ${c.lv} | ${c.m} | ${c.eq}</div></div><a class="btn o" href="detail.html?id=${c.id}">ดูรายละเอียด</a></div>`).join("")||'<div class="mu">ไม่พบโปรแกรมที่ตรงกับเงื่อนไข</div>'}

/* ===== ส่วนกลาง: เมนู / ท้ายเว็บ / ข้อความแจ้งเตือน (ทุกหน้าเรียก layout()) ===== */
function flash(msg,url){try{sessionStorage.setItem('hf_flash',msg)}catch(x){}location.href=url}
const NAV=[['index.html','home','หน้าแรก'],['list.html','list','ค้นหาคอร์ส'],['detail.html?id=1','detail','รายละเอียดคอร์ส'],['login.html','login','เข้าสู่ระบบ / สมัครสมาชิก'],['post.html','post','ลงประกาศคอร์ส'],['contact.html','contact','ติดต่อเรา'],['team.html','team','สมาชิกกลุ่ม']];
function layout(){const pg=document.body.dataset.page;
$("#site-header").innerHTML=`<div class="nav"><a class="logo" href="index.html">${I('pulse',24)} HEALTH & FIT</a><span id="me"></span><div class="links">${NAV.map(n=>`<a class="l ${n[1]==pg?'on':''}" href="${n[0]}">${n[2]}</a>`).join('')}</div></div>`;
$("#site-footer").innerHTML='© 2026 HEALTH & FIT · โครงงานรายวิชาพัฒนาเว็บเพจ';
document.body.insertAdjacentHTML('beforeend','<div class="toast" id="toast"></div>');
document.querySelectorAll('[data-ic]').forEach(el=>el.outerHTML=I(el.dataset.ic,+el.dataset.s||20));
renderMe();let m=null;try{m=sessionStorage.getItem('hf_flash');sessionStorage.removeItem('hf_flash')}catch(x){}if(m)toast(m)}
/* ===== ฟังก์ชันเฉพาะหน้า ===== */
function featured(){$("#featured").innerHTML=C.slice(0,4).map(cardH).join("")}   // หน้าแรก
function goSearch(){location.href='list.html?'+new URLSearchParams({q:$("#q").value,g:$("#g").value,e:$("#e").value})}   // หน้าแรก
function initList(){const p=new URLSearchParams(location.search);$("#q").value=p.get('q')||'';$("#g").value=p.get('g')||'';$("#e").value=p.get('e')||'';flt()}   // หน้าค้นหา

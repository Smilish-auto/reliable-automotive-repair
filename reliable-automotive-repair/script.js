const business={name:'Reliable Automotive Repair',phone:'+2348168355555',whatsapp:'2348168355555',address:'5 Akobo W Rd, Ibadan 200222, Oyo, Nigeria',maps:'https://www.google.com/maps/search/?api=1&query=Reliable%20Automotive%20Repair%2C%205%20Akobo%20W%20Rd%2C%20Ibadan'};
const tel=`tel:${business.phone}`;
const baseMessage='Hello Reliable Automotive Repair, I would like to make an enquiry about my vehicle.';
const wa=`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(baseMessage)}`;

document.querySelectorAll('[data-call]').forEach(el=>el.href=tel);
document.querySelectorAll('[data-wa]').forEach(el=>el.href=wa);
document.querySelectorAll('[data-maps]').forEach(el=>{el.href=business.maps;el.target='_blank';el.rel='noopener'});

const menu=document.querySelector('.menu'),nav=document.querySelector('#siteNav');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu?.setAttribute('aria-expanded','false');nav.classList.remove('open')}));

const form=document.querySelector('#enquiryForm');
form?.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const text=`Hello Reliable Automotive Repair, my name is ${data.get('name')}.%0APhone: ${data.get('phone')}%0A%0AVehicle enquiry:%0A${data.get('message')}`;window.open(`https://wa.me/${business.whatsapp}?text=${text}`,'_blank','noopener');});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

window.addEventListener('scroll',()=>{document.querySelector('.nav')?.classList.toggle('scrolled',window.scrollY>20)},{passive:true});

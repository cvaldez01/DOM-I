const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// let menu =document.querySelector('nav');

// // menu.prepend(siteContent["nav"]);

// const body= document.querySelector('body');

// let styles = document.createElement('nav',siteContent["nav"]["nav-item-1"]);
// body.prepend(styles);

//NAVBAR

let navbar=document.querySelectorAll("a");
navbar[0].textContent=siteContent['nav']['nav-item-1']
navbar[1].textContent=siteContent['nav']['nav-item-2']
navbar[2].textContent=siteContent['nav']['nav-item-3']
navbar[3].textContent=siteContent['nav']['nav-item-4']
navbar[4].textContent=siteContent['nav']['nav-item-5']
navbar[5].textContent=siteContent['nav']['nav-item-6']


//Section CTA

let msection =document.querySelector('.cta-text');

const div =document.createElement('div');

msection.appendChild(div);
const h1= document.createElement('h1');
h1.textContent=siteContent['cta']['h1'];
div.appendChild(h1);

const btn=document.createElement('button');
btn.textContent=siteContent['cta']['button'];
div.appendChild(btn);

const imgcta=document.getElementById('cta-img');
imgcta.setAttribute('src',siteContent['cta']['img-src']);

//MAIN CONTENT

const content =document.getElementsByClassName('main-content');
const top= document.getElementsByClassName('top-content');










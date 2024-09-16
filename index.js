// Topics
// BOM => Browser Object Model
// location (assign - href - origin - reload - replace)
// navigator
// event  ()
// offsetTop;
// scrollY 

// coding
// let isAdmin = false;
// const BASE_URL = location.origin // https://127.0.0.1:5500
const checkConnection = () => {
    const isOnline = navigator.onLine;
    if (isOnline) {
        return;
    } else {
        document.body.textContent ="Is Offline"
    }
};
checkConnection()
// document.addEventListener("click", () => {
//     // location.reload()
//     // console.log(location.href); // getter
//     // location.href = "https://www.google.com" // setter
//     // location.replace("https://www.google.com")
//     // location.assign()
//     // if (isAdmin) {
//     //     location.assign("https://www.google.com")
//     // } else {
//     //     alert("you are not an admin")
//     // }
// });


const cursor = document.querySelector(".circle_cursor");
window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX -20 + "px";
    cursor.style.top = e.clientY -20 + "px";
})
const sections = document.querySelectorAll("section")
const menu = document.querySelectorAll(".menu a")
const toTopBtn = document.querySelector(".toTop");
window.addEventListener("scroll", () => {
    const windowScrollY = window.scrollY;
    sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionOffsetTop = section.offsetTop;
        menu.forEach((link) => {
            const linkRef = link.getAttribute("href").slice(1);
            /// check offset
            if(windowScrollY>=sectionOffsetTop ) {
                if (sectionId === linkRef) {
                    link.classList.add(`active`)
                    document.title = `BOM | ${sectionId.toUpperCase()}`;
                } else {
                    link.classList.remove(`active`)
                }
            }
            
        })
        
    })
    if (windowScrollY >= 100) {
        toTopBtn.classList.add("active")
    }
    else {
        toTopBtn.classList.remove("active");
    }
})

toTopBtn.addEventListener("click", () => { 
    scrollTo({
        top: 0,
    });
})

window.addEventListener("blur", () => {
    document.title = `BOM | BROWSER 😒`
    // close()
})
const initailaTitle = document.title
window.addEventListener("focus", () => {
    document.title = `${initailaTitle}`
})

// document.addEventListener("click", () => {
    
// })
const loading_page = document.querySelector(".loading_page")
const loaderCouter = loading_page.children[1]
let counter =0


function intervelCounter() {
    const interval = setInterval(() => {
        counter++;
        if (counter == 100) {
            clearInterval(interval);
                loading_page.classList.add("hiddenLoader");
                loading_page.children[0].classList.add("hiddenTitle");
                loading_page.children[1].classList.add("hiddenTitle");
        }
        loaderCouter.textContent = `${counter}%`;
    },50)
}
intervelCounter();

const time = document.querySelector(".clock")

setInterval(() => {
        const date = new Date()
        time.innerHTML = `${date.getHours() % 12} : ${date.getMinutes()} : ${date.getSeconds()}`;
        
    },1)




// window.addEventListener("DOMContentLoaded", () => {
//     loading_page.classList.add("hiddenLoader");
//     loading_page.children[0].classList.add("hiddenTitle");

// })


// search
// SetTimeOut
// Locale Storage vs Session Storage
// Cookies

// const date = new Date()
// console.log(date.getSeconds());

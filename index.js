const cono = document.querySelector(".container");

const allButton = document.querySelectorAll(".menu button");

// const menu = [
//     {
//         id: 1,
//         cate: "Launch",
//         title: "burger Meal",
//         img: "طريقة-عمل-برجر-الفراخ-احلى-من-برجر-ماكدونالدز-1.jpeg",
//         meal: "breakfast meal",
//         dolar: "$18"
//     },
//     {
//         id: 2,
//         cate: "shake",
//         title: "Orange Juice",
//         img: "lovepik-fruit-juice-png-image_401139129_wh1200.png",
//         meal: "breakfast meal",
//         dolar: "$20"
//     },
//     {
//         id: 3,
//         cate: "break",
//         title: "Breakfast meal",
//         img: "image.jpg",
//         meal: "breakfast meal",
//         dolar: "$20"
//     },
//     {
//         id: 3,
//         cate: "break",
//         title: "Breakfast meal",
//         img: "16-08-07_03-42-00-2.jpg",
//         meal: "breakfast meal",
//         dolar: "$20"
//     },
//     {
//         id: 4,
//         cate: "Launch",
//         title: "Launch Meal",
//         img: "وجبات-غداء-صحية-ومغذية-من-أجل-العمل.webp",
//         meal: "breakfast meal",
//         dolar: "$18"
//     }
// ]

// window.addEventListener("DOMContentLoaded", () => {
//     // let display = menu.map(function(item){

//     //     return `<div class="box">
//     //     <img src="${item.img}" alt="">
//     //     <div class="text">
//     //         <div class="content">
//     //             <span class="meal">${item.title}</span>
//     //             <span class="dolar">${item.dolar}</span>
//     //         </div>
//     //         <p class="no">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequatur porro pariatur omnis rerum amet.</p>
//     //     </div>
//     // </div>`
//     // })
//     // display = display.join("")
//     // cono.innerHTML = display
//     myNewMenu(menu)
// })

// const myNewMenu = (itemo) => {
//     let display = menu.map(function(itemo){

//         return `<div class="box">
//         <img src="${itemo.img}" alt="">
//         <div class="text">
//             <div class="content">
//                 <span class="meal">${itemo.title}</span>
//                 <span class="dolar">${itemo.dolar}</span>
//             </div>
//             <p class="no">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequatur porro pariatur omnis rerum amet.</p>
//         </div>
//     </div>`
//     })
//     display = display.join("")
//     cono.innerHTML = display
// }
// window.addEventListener("DOMContentLoaded", (eo) => {
//     cono.innerHTML = ` <div class="box">
//     <span class="coy">launch</span>
//     <img src="وجبات-غداء-صحية-ومغذية-من-أجل-العمل.webp" alt="">
//     <div class="text">
//         <div class="content">
//             <span class="meal">Meat Meal</span>
//             <span class="dolar">$15</span>
//         </div>
//         <p class="no">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequatur porro pariatur omnis rerum amet.</p>
//     </div>
// </div>
// <div class="box">
// <span class="coy">break</span>
//     <img src="16-08-07_03-42-00-2.jpg" alt="">
//     <div class="text">
//         <div class="content">
//             <span class="meal">Breakfast Meal</span>
//             <span class="dolar">$15</span>
//         </div>
//         <p class="no">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequatur porro pariatur omnis rerum amet.</p>
//     </div>
// </div>
// <div class="box">
// <span class="coy">break</span>
//     <img src="201901310655525552.jpg" alt="">
//     <div class="text">
//         <div class="content">
//             <span class="meal">Breakfast Meal</span>
//             <span class="dolar">$15</span>
//         </div>
//         <p class="no">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequatur porro pariatur omnis rerum amet.</p>
//     </div>
// </div>
// <div class="box">
// <span class="coy">break</span>
//     <img src="وجبات-غداء-صحية-ومغذية-من-أجل-العمل.webp" alt="">
//     <div class="text">
//         <div class="content">
//             <span class="meal">Breakfast Meal</span>
//             <span class="dolar">$15</span>
//         </div>
//         <p class="no">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequatur porro pariatur omnis rerum amet.</p>
//     </div>
// </div>
// <div class="box">
// <span class="coy">shake</span>
//     <img src="lovepik-fruit-juice-png-image_401139129_wh1200.png" alt="">
//     <div class="text">
//         <div class="content">
//             <span class="meal">Orange Fruit</span>
//             <span class="dolar">$15</span>
//         </div>
//         <p class="no">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequatur porro pariatur omnis rerum amet.</p>
//     </div>
// </div>`
// })
// const boxy = document.querySelectorAll(".box")
// console.log(boxy);
// allButton.forEach(item => {
//     item.addEventListener("click", (eo) => {
//         const htmlCat = eo.target.dataset.id
//         boxy.forEach(item => {
//             const boxCat = item.parentElement.getElementsByClassName["coy"][0].innerText
//         });
//         console.log(boxCat);
//     })
// });

// allButton.forEach(item => {
//     item.addEventListener("click", (eo) => {
//     const mycateogory = eo.target.dataset.id;
//     let menuCategory = menu.filter(function(item){
//         if(item.cate === mycateogory){
//            return item;
//         }

//     })
//     //console.log(menuCategory)
//     if(mycateogory === "all"){
//         myNewMenu(menu)
//     }else{
//         myNewMenu(menuCategory)
//     }
//     })
// });

// const myLinks = document.querySelectorAll(".links a")
// myLinks.forEach(item => {
//     item.addEventListener("click", (eo) => {
//        const id = eo.target.getAttribute("href").slice(1)
//        const element = document.getElementById(id)
//        console.log(element);
//     })
// });

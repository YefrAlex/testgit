 const main = document.querySelector("main")
// console.log(main.innerText)
// console.log(main.innerHTML)
/*
main.innerHTML = main.innerHTML + '<h2 class="title">New Tiitle</h2>'
//  или то же можно записать 
main.innerHTML += '<h2 class="title">New Tiitle</h2>'
*/
//  const names = ["Arsen", "Anna", "Artem", "Dmitry"]
// for (let i=0; i < names.length; i++ ){
    
//     main.innerHTML +=`<p class="item-${i+1}">${names[i]}</p>`
// }

// const name = 'Arsen'
// const fullname = `${name} Iusupov`


// names.forEach(function(name, i){
//     main.innerHTML +=`<p class="item-${i+1}">${name}</p>`
// })

const posts = [
    {
        id: 1,
        img: "https://placekitten.com/640/360",
        title: "Мой первый пост",
        descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quidem assumenda rem debitis animi facere."
    },
    {
        id: 2,
        img: "https://placekitten.com/540/360",
        title: "Мой второй пост",
        descr: "Второй пост о столицах стран всего мира"
    },
    {
        id: 3,
        img: "https://placekitten.com/640/380",
        title: "Мой третий пост",
        descr: "Достопримечательности крупных европеских городов"
    },
]

posts.forEach(function(post){
        main.innerHTML +=`<article class="item item-${post.id}">
        <h5 class="title">${post.title}</h5>
        <img src="${post.img}" alt="">
        <p class="descr">${post.descr}</p>
        </article>`
 })

    /*
    <h1>Блог</h1>
    <main>
        <article class="item item-1">
            <h5 class="title">Title</h5>
            <img src="https://placekitten.com/640/360" alt="">
            <p class="descr">Description</p>
        </article>
    </main>
    `<p class="item-${i+1}">${post.id}</p>`
    */
    
    /*
    ДЗ

    ДЗ
    https://www.figma.com/file/c8FlmkTHbSRyPgCeLEGdBF/Untitled-(Copy)?node-id=1%3A2&t=hGooSJShadvJJX82-0

    Сверстать макет.
    Создать структуру данных
    products = [
        {
            id: 1,
            name: "Велосипед",
            price: 40000
        },
        {}
    ]
    Создайте 4 объекта в массиве, с name и price.
    Пройтись с помощью forEach по массиву products и возвратить разметку для каждого продукта.
        Отобразить карточки товаров из массива products

        
    https://www.figma.com/file/c8FlmkTHbSRyPgCeLEGdBF/Untitled-(Copy)?node-id=1%3A2&t=hGooSJShadvJJX82-0

    Сверстать макет.
    Создать структуру данных
    products = [
        {
            id: 1,
            name: "Велосипед",
            price: 40000
        },
        {}
    ]
    Создайте 4 объекта в массиве, с name и price.
    Пройтись с помощью forEach по массиву products и возвратить разметку для каждого продукта.
        Отобразить карточки товаров из массива products
        */
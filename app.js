const btns=document.querySelectorAll('button')
const root=document.querySelector('#root')
const input=document.querySelector('input')

const clothing = [
    {
        poster:'https://ru.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-%D0%B1%D0%B5%D0%B9%D1%81%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0-be-my-s00-%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D1%83%D0%B1%D0%BE%D1%80%D1%8B-%D0%B8-%D0%BF%D0%B5%D1%80%D1%87%D0%B0%D1%82%D0%BA%D0%B8--M77541_PM2_Front%20view.png?wid=1090&hei=1090',
        title:'Be My',
        category:'Бейсболка',
        price:'71 000 руб'
    },
    {
        poster:'https://ru.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-%D0%B1%D0%B5%D0%B9%D1%81%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0-lv-day-s00-%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D1%83%D0%B1%D0%BE%D1%80%D1%8B-%D0%B8-%D0%BF%D0%B5%D1%80%D1%87%D0%B0%D1%82%D0%BA%D0%B8--M77806_PM2_Front%20view.png?wid=1090&hei=1090',
        title:'LV Day',
        category:'Бейсболка',
        price:'76 000 руб'
    },
    {
        poster:'https://ru.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-%D0%B1%D0%B5%D0%B9%D1%81%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0-monogram-shadow-s00-%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D1%83%D0%B1%D0%BE%D1%80%D1%8B-%D0%B8-%D0%BF%D0%B5%D1%80%D1%87%D0%B0%D1%82%D0%BA%D0%B8--M76580_PM2_Front%20view.png?wid=1090&hei=1090',
        title:'Monogram Shadow',
        category:'Бейсболка',
        price:'91 500 руб'
    },
    {
        poster:'https://ru.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-%D0%BF%D1%83%D0%BB%D0%BE%D0%B2%D0%B5%D1%80-%D1%81-%D0%BF%D1%80%D0%B8%D0%BD%D1%82%D0%B0%D0%BC%D0%B8-%D0%BE%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0--HHY12WNPO900_PM2_Front%20view.png?wid=1090&hei=1090',
        title:'V M',
        category:'Пуловер',
        price:'52 000 руб'
    },
    {
        poster:'https://ru.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-%D0%BF%D1%83%D0%BB%D0%BE%D0%B2%D0%B5%D1%80-%D1%81-%D0%BA%D0%BE%D0%B6%D0%B0%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BD%D0%B0%D1%88%D0%B8%D0%B2%D0%BA%D0%B0%D0%BC%D0%B8-%D0%BE%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0--HAN52WF87704_PM2_Front%20view.png?wid=1090&hei=1090',
        title:'Пуловер С Кожаными Нашивками',
        category:'Пуловер',
        price:'57 500 руб'
    },
    {
        poster:'https://ru.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-%D0%BF%D1%83%D0%BB%D0%BE%D0%B2%D0%B5%D1%80-%D1%81-%D1%83%D0%B7%D0%BE%D1%80%D0%BE%D0%BC-monogram-%D0%BE%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0--HPN95WZLL801_PM2_Front%20view.png?wid=1090&hei=1090',
        title:'Пуловер с узором Monogram',
        category:'Пуловер',
        price:'59 000 руб'
    },
    {
        poster:'https://ru.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-%D0%B1%D1%80%D1%8E%D0%BA%D0%B8-lvse-%D0%BE%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0--HKP44WYXR901_PM2_Front%20view.png?wid=1090&hei=1090',
        title:'LVSE',
        category:'Брюки',
        price:'78 500 руб'
    },
    {
        poster:'https://ru.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-%D0%B1%D1%80%D1%8E%D0%BA%D0%B8-lv-graffiti-%D0%B2-%D0%BF%D0%B8%D0%B6%D0%B0%D0%BC%D0%BD%D0%BE%D0%BC-%D1%81%D1%82%D0%B8%D0%BB%D0%B5-%D0%BE%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0--HNP09WNV5MU1_PM2_Front%20view.png?wid=1090&hei=1090',
        title:'LV Graffiti',
        category:'Брюки',
        price:'194 000 руб'
    },
    {
        poster:'https://ru.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-%D0%BA%D0%B5%D0%B4%D1%8B-time-out-%D0%BE%D0%B1%D1%83%D0%B2%D1%8C--AK3U1ASL33_PM2_Front%20view.png?wid=1090&hei=1090',
        title:'Time Out',
        category:'Кеды',
        price:'88 500 руб'
    },
    {
        poster:'https://mskbrands.ru/upload/shop/photo-2022-05-06-23-21-05.jpg',
        title:'Кеды мужские LOUIS VUITTON',
        category:'Кеды',
        price:'77 000 руб'
    },
    {
        poster:'https://ru.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D1%87%D0%B0%D1%81%D1%8B-tambour-40-%D0%BC%D0%BC-%D0%BD%D0%B5%D1%80%D0%B6%D0%B0%D0%B2%D0%B5%D1%8E%D1%89%D0%B0%D1%8F-%D1%81%D1%82%D0%B0%D0%BB%D1%8C-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D0%BC%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8-%D1%87%D0%B0%D1%81%D0%BE%D0%B2--W1ST10_PM2_Front%20view.png?wid=1090&hei=1090',
        title:'Tambour 40 мм',
        category:'Часы',
        price:'1 670 000 руб'
    },
    {
        poster:'https://ru.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-%D0%BA%D0%B2%D0%B0%D1%80%D1%86%D0%B5%D0%B2%D1%8B%D0%B5-%D1%87%D0%B0%D1%81%D1%8B-tambour-monogram-39-5-%D0%BC%D0%BC-%D0%BD%D0%B5%D1%80%D0%B6%D0%B0%D0%B2%D0%B5%D1%8E%D1%89%D0%B0%D1%8F-%D1%81%D1%82%D0%B0%D0%BB%D1%8C-%D1%80%D0%BE%D0%B7%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D0%BC%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8-%D1%87%D0%B0%D1%81%D0%BE%D0%B2--QBB167_PM2_Front%20view.png?wid=2400&hei=2400',
        title:'Tambour Monogram',
        category:'Часы',
        price:'581 500 руб'
    },
]

function showClothing(massive){
    root.innerHTML=''
    for (const clothing of massive) {
        console.log(clothing.poster);
        root.innerHTML+=`
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${clothing.poster}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${clothing.title}</h5>
          <p class="card-text">${clothing.category}</p>
          <button onclick='delCard()' class="btn btn-outline-info">В карзину</button>
        </div>
      </div>
        `
        
    }
}

btns[0].onclick=()=>{
    showClothing(clothing)
}
btns[1].onclick=()=>{
    const deClothing=clothing.filter(clothing=>clothing.category=='Бейсболка')
    showClothing(deClothing)
}
btns[2].onclick=()=>{
    const pulover=clothing.filter(clothing=>clothing.category==='Пуловер')
    showClothing(pulover)
}
btns[3].onclick=()=>{
    const trousers=clothing.filter(clothing=>clothing.category==='Брюки')
    showClothing(trousers)
}
btns[4].onclick=()=>{
    const shoes=clothing.filter(clothing=>clothing.category==='Кеды')
    showClothing(shoes)
}
btns[5].onclick=()=>{
    const watch=clothing.filter(clothing=>clothing.category==='Часы')
    showClothing(watch)
}

input.onchange=()=>{
    console.log(input.value);
    const obj=clothing.filter(element => element.category.toLowerCase()===input.value.toLowerCase())
    if(obj.length>0){
        showClothing(obj)
    } else{
        root.innerHTML="<img src='https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png' />"
    }
    }

    function getUsers(data){
        return new Promise((resolve, reject)=>{
            if(data){
                setTimeout(()=>{
                    resolve(users)
                }, 3000)
            } else {
                reject('Ошибка')
            }
          
           
            
        }) 
    }

function $(id) {
    return document.getElementById(id);
}
let count = $('count');
let list = $('list');
let classfy = document.querySelector('.classfy');
let flowerListItem = [
    {
        id: 1,
        dataname: 'f_01',
        name: '01_핑크보라톤의 꽃 다발',
        price: '40,000',
        image: 'image_20231226/bunch_01_4_pp.jpg',
        nature: {
            type: ['bunch'],
            color: ['pinkpurple'],
            size: ['20cm'],
            season: ['fall', 'winter'],
            description01: '핑크보라톤의 이쁘고 아기자기한 꽃 다발 입니다.',
            description02: '크기는 대략 20cm 되는 꽃 다발 입니다.'
        }
    },
    {
        id: 2,
        dataname: 'f_02',
        name: '02_핑크보라톤의 꽃 다발',
        price: '40,000',
        image: 'image_20231226/bunch_02_4_pp.jpg',
        nature: {
            type: ['bunch'],
            color: ['pinkpurple'],
            size: ['20cm'],
            season: ['fall', 'winter'],
            description01: '핑크보라톤의 이쁘고 아기자기한 꽃 다발 입니다.',
            description02: '크기는 대략 20cm 되는 꽃 다발 입니다.'
        }
    },
]


// ===============================================================ITEM 정보
// let productFilter = flowerListItem;
// showProduct(productFilter);

// function showProduct(productFilter) {
//     count.innerText = productFilter.length;
//     list.innerHTML =  '';
//     productFilter.forEach(item => {
        
//         let newItem = document.createElement('div');
//         newItem.classList.add('item');
//         let newData = newItem;
//         newData.dataset.name = item.dataname;

//         let newImage = new Image();
//         newImage.src = item.image;
//         newData.appendChild(newImage);

//         let newData01 = document.createElement('div')
//         newData01.classList.add('title');
//         newData01.innerHTML = item.name;
//         newData.appendChild(newData01);

//         let newData02 = document.createElement('div')
//         newData02.classList.add('price');
//         newData02.innerHTML = item.price;
//         newData.appendChild(newData02);


//         list.appendChild(newData);
//     });
// }

// ===================================================================FILTER

// classfy.addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     let valueClassfy = event.target.elements;
//     // console.log(valueClassfy);
//     productFilter = flowerListItem.filter(item => {

//         if(valueClassfy.type.value !='') {
//             if(item.nature.type != valueClassfy.type.value){
//                 return false;
//             }
//         }

//         if(valueClassfy.flowercolor.value !='') {
//             if(!item.nature.color.includes(valueClassfy.flowercolor.value)){
//                 return false;
//             }
//         }

//         if(valueClassfy.price.value !='') {
//             if(!item.price.includes(valueClassfy.price.value)){
//                 return false;
//             }
//         }     
//         return true;
//     })
//     showProduct(productFilter);
//     openPopupWindowActive();
// })

// ============================================================POPUP WINDOW

// makePopupWindow();
// function makePopupWindow(){
//     let previewContainer = document.getElementById('previewContainer');
//     previewContainer.innerHTML ='';
//     productFilter.forEach(item => {

//             let newData00 = document.createElement('div');
//             newData00.classList.add('previewbox');
//             let newData01 = newData00;
//             newData01.dataset.target = item.dataname;
        
//     })
//  }

// =====================================================OPENPOPUPWINDOWACTIV

openPopupWindowActive();
function openPopupWindowActive() {
    let previewContainer = document.getElementById('previewContainer');
    let previewBox01 = document.querySelector('.previewbox01');
    let previewBox02 = document.querySelector('.previewbox02');
    let previewBox11 = document.querySelector('.previewbox11');
    let previewBox12 = document.querySelector('.previewbox12');
    let previewBox21 = document.querySelector('.previewbox21');
    let previewBox22 = document.querySelector('.previewbox22');
    
    let item01 = document.querySelector('.item01');
    let item02 = document.querySelector('.item02');
    let item11 = document.querySelector('.item11');
    let item12 = document.querySelector('.item12');
    let item21 = document.querySelector('.item21');
    let item22 = document.querySelector('.item22');

    item01.onclick = () => {
        previewContainer.style.display = "flex";
        previewBox01.classList.add('active');
    }
    item02.onclick = () => {
        previewContainer.style.display = "flex";
        previewBox02.classList.add('active');
    }
    item11.onclick = () => {
        previewContainer.style.display = "flex";
        previewBox11.classList.add('active');
    }
    item12.onclick = () => {
        previewContainer.style.display = "flex";
        previewBox12.classList.add('active');
    }
    item21.onclick = () => {
        previewContainer.style.display = "flex";
        previewBox21.classList.add('active');
    }
    item22.onclick = () => {
        previewContainer.style.display = "flex";
        previewBox22.classList.add('active');
    }

}

// =======================================================CLOSE POPUPWINDOW

// closePopupWindow();
// function closePopupWindow() {
//     let previewContainer = document.getElementById('previewContainer');

let closeButton = document.querySelectorAll('.closebutton');

closeButton.forEach(item => {
    item.onclick =() => {
        previewContainer.style.display = "none";
        let previewBoxActive = document.querySelector('.previewbox.active');
        previewBoxActive.classList.remove('active');
    }
})



console.log(`working...now`)
// import { randomApi } from './js/random.mjs';
import { topicApi } from './js/topic.mjs';
import { reccApi } from './js/recc.mjs';
import { allNewsApi } from './js/scrollable.mjs';
import { getrandomApi } from './js/random.mjs';
import { swiperApi } from './js/sliderApi.mjs'
import { searchApi } from './js/search.mjs'

// let randomDiv = document.querySelector('.random')
// let scrolableDiv = document.querySelector('.scrolable')
// let trendingDiv = document.querySelector('.trending')
// let reccDiv = document.querySelector('.recc')
// let topicDiv = document.querySelector('.topic')


let scrollableFeed = document.querySelector(".scrollableFeed")
let reccParentFlex = document.querySelector(".reccParentFlex")
let trendingParentFlexBhai = document.querySelector(".trendingParentFlexBhai")
let swiperWrapper = document.querySelector("#swiper_head")

// let swiperWrapper2 = document.querySelector("#swiper-head2")


const categoryApi = 'http://127.0.0.1:5000/category'
const recommendationApi = 'http://127.0.0.1:5000/recommendation'
const allApi = 'http://127.0.0.1:5000/all'
const randomApi = 'http://127.0.0.1:5000/random'
const queryApi = 'http://127.0.0.1:5000/search'
// randomApi({ div: randomDiv })



// allNewsApi({
//     apiUrl:allApi,
//     div: scrolableDiv,
//     resList:[]
// })

//--------------------myFeed/scroll

getrandomApi({
    apiUrl: randomApi,
    div: scrollableFeed,
    randomNumber: 10,
    resList: [],
    ui: false,
    genFunc: false
})


//---------------------recommendation

reccApi({
    apiUrl: recommendationApi,
    div: reccParentFlex,
    myKeys: { "sports": 1, "politics": 6, "technology": 4 },
    resList: []
})



//---------------------


//-------------------------trending

topicApi(
    {
        apiUrl: categoryApi,
        div: trendingParentFlexBhai,
        category: ["Movies"],
        resList: []
    })




//---------------swiper
swiperApi(
    {
        apiUrl: categoryApi,
        div: swiperWrapper,
        category: ["Technology"],
        resList: []
    })

setTimeout(() => {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}, 1000);






function includeHtml() {
    return new Promise((resolve, reject) => {
        fetch('static/js/helper/summaryPage.helper.html')
            .then(res => res.text())
            .then(html => {
                document.querySelector('.feedSummary').innerHTML = html;
                resolve(html);
            })
            .catch(error => {
                console.error('Fetch error:', error);
                reject(error);
            })
    })
}

let once = true;
let isSummaryOpen = false;
let feedHtml = document.querySelector('.feedSummary'); //html feed summary
let feedClick = document.querySelector('.feedClick'); //nav feed

feedClick.onclick = openFeed;
// feedHtml.onclick = openFeed

function openFeed() {
    if (once) {
        includeHtml();
        once = false;
    }

    if (!isSummaryOpen) {
        feedHtml.style.display = "block";
        // isSummaryOpen = !isSummaryOpen;
        // console.log('check: ',isSummaryOpen)


        // Wait for a short delay to ensure that the content is rendered before initializing Swiper
        setTimeout(() => {
            initializeSwiper();
        }, 100);

        // } else {
        //     feedHtml.style.display = "none";
        //     isSummaryOpen = !isSummaryOpen;
        // }
    }
}






function initializeSwiper() {
    let summaryj = document.querySelector(".summaryj");
    getrandomApi({
        apiUrl: randomApi,
        div: summaryj,
        randomNumber: 10,
        resList: [],
        ui: true,
        genFunc: true

    });

    setTimeout(() => {
        const swiper = new Swiper('.swiper2', {
            direction: 'horizontal',
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }, 5000);

}



let myInput = document.querySelector('#myInput');
let searchPageClass = document.querySelector('.searchPageClass')
myInput.addEventListener('keypress', handleKeyPress);

let resListSearch = []

function handleKeyPress(event) {
    if (event.keyCode === 13 && myInput.value) {
        includeSearchHtml().then(() => {
          searchPageClass.style.display = "block";
          let add_search = document.querySelector('.add_search');
          let userQuery = myInput.value
          document.querySelector('.showSearchHead').innerHTML = `Search Results for ${userQuery}`
          console.log(userQuery);
          searchApi(
            {
                apiUrl: queryApi,
                div: add_search,
                userQuery: userQuery,
                resList: resListSearch
            })
        });
      }
}



function includeSearchHtml() {
    // console.log(`inside..`)
    return new Promise((resolve, reject) => {
    fetch('static/js/helper/searchPage.helper.html')
        .then(res => res.text())
        .then(html => {
            document.querySelector('.searchPageClass').innerHTML = html;
            resolve();
        })
        .catch(error => {
            console.error('Fetch error:', error);
            reject(error);
        })
    });
}

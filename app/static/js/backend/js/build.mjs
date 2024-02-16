
export function updateUI(params) {
    console.log(`length of search res:${typeof (params.resList)}-- ${params.resList.length}--${params.resList}`)
    if (params.resList.length == 0) { //only for search
        params.div.insertAdjacentHTML('beforeend',params.genHtml({noResFound:true}))
    }
    else {


        for (let i = 0; i <= params.resList.length; i++) {
            params.div.insertAdjacentHTML('beforeend', params.genHtml({
                id: i,
                // source_name: params.resList[i].source_name,
                author: params.resList[i].author,
                title: params.resList[i].title,
                description: params.resList[i].description,
                url: params.resList[i].url,
                url_to_image: params.resList[i].url_to_image,
                publishedAt: params.resList[i].publishedAt,
                category: params.resList[i].category,
                full_content: params.resList[i].full_content,
            }));
            // const postElement = document.createElement('p');
            // postElement.innerHTML = params.genHtml({
            //     source_name: params.resList[i].source_name,
            //     author: params.resList[i].author,
            //     title: params.resList[i].title,
            //     description: params.resList[i].description,
            //     url: params.resList[i].url,
            //     url_to_image: params.resList[i].url_to_image,
            //     publishedAt: params.resList[i].publishedAt,
            //     category: params.resList[i].category,
            //     full_content: params.resList[i].full_content,
            // });
            // params.div.appendChild(postElement);
        }
    }
}

export function summaryUI(params) {
    console.log(params.div)
    for (let i = 0; i < 10; i++) {


        // params.div.insertAdjacentHTML('beforeend', params.genHtml({
        //     id: i,
        //     source_name: params.resList[i].source_name,
        //     author: params.resList[i].author,
        //     title: params.resList[i].title,
        //     description: params.resList[i].description,
        //     url: params.resList[i].url,
        //     url_to_image: params.resList[i].url_to_image,
        //     publishedAt: params.resList[i].publishedAt,
        //     category: params.resList[i].category,
        //     full_content: params.resList[i].full_content,
        // }));
        // const postElement = document.createElement('p');

        fetch('http://127.0.0.1:5000/summary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "bigText": params.resList[i].full_content
            }),
        }).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Failed to make POST request');
            }
        }).then(data => {
            params.div.innerHTML += params.genHtml({
                source_name: params.resList[i].source_name,
                author: params.resList[i].author,
                title: params.resList[i].title,
                description: params.resList[i].description,
                url: params.resList[i].url,
                url_to_image: params.resList[i].url_to_image,
                publishedAt: params.resList[i].publishedAt,
                category: params.resList[i].category,
                full_content: params.resList[i].full_content,
                summary: data.output
            });
        }).catch(err => {
            console.error('Error making SUMMARY request:', err);
        })



        // params.div.appendChild(postElement);
    }
    console.log(params.div)
}


export function updateUITopic(params) {
    for (let i = 0; i < 10; i++) {
        params.div.insertAdjacentHTML('beforeend', params.genHtml({
            id: i,
            source_name: params.resList[i].source_name,
            author: params.resList[i].author,
            title: params.resList[i].title,
            description: params.resList[i].description,
            url: params.resList[i].url,
            url_to_image: params.resList[i].url_to_image,
            publishedAt: params.resList[i].publishedAt,
            category: params.resList[i].category,
            full_content: params.resList[i].full_content,
        }));
        // const postElement = document.createElement('p');
        // postElement.innerHTML = params.genHtml({
        //     id:i,
        //     source_name: params.resList[i].source_name,
        //     author: params.resList[i].author,
        //     title: params.resList[i].title,
        //     description: params.resList[i].description,
        //     url: params.resList[i].url,
        //     url_to_image: params.resList[i].url_to_image,
        //     publishedAt: params.resList[i].publishedAt,
        //     category: params.resList[i].category,
        //     full_content: params.resList[i].full_content,
        // });
        // params.div.appendChild(postElement);
    }
}


//---------------------------------


export function generateHtml(data) {
    let htmlString = `
                <div>
                    <h2>Category: ${data.category}</h2>
                    <p>Title: ${data.title}</p>
                </div>
            `;
    return htmlString
}



export function myFeedGenerateHtml(data) {
    console.log("MyFeedGeneratHtml");
    let htmlString = `

        <div class="flexChildFeed">
        <img class="newsImgFeed" src="${data.url_to_image}">

        <p class="newsHeadFeed">${data.title}</p>
        </div> 
    `
    return htmlString
}


export function recommendationFeedGenerateHtml(data) {
    console.log(`recommendationFeedGenerateHtml`)

    let htmlString = `
        <div class="flexChildFeed">
        <img class="newsImgFeed" src="${data.url_to_image}">

        <p class="newsHeadFeed">${data.title}</p>
        </div>
    `
    return htmlString
}


export function trendingGenerateHtml(data) {
    console.log("trendingGenerateHtml");
    let htmlString = `
    <div class="trendingChildBox">

    <img class="imageTrending" src="${data.url_to_image}">

    <p class="sourceTrending">${data.author}</p>

    <p class="headTrending">${data.title}</p>

    </div>  
    `
    return htmlString
}


export function swiperGenerateHtml(data) {
    console.log(data.url_to_image);
    let htmlString = `
    <div class="swiper-slide">
    <div class="label" style="background-image: url(${data.url_to_image});">
        <h1>${data.title}</h1>

    </div>
    </div>
    `
    return htmlString
}
export function swiperGenerateHtml2(data) { // Summary wala
    console.log(data.url_to_image);
    let htmlString = `
    <div class="swiper-slide">
    <div class="label" style="background-image: url(${data.url_to_image});">
        <p class="catText">${data.category}</p>
        <h1 class="titleText">${data.title}</h1>
        <p class="titleSummary">${data.summary}</p>
        <div style="width:100%;display:flex;justify-content:space-evenly;align-item:center;">
            <p style="width:30%;">${data.source_name} 
            </p>
            <div style="width:30%;display:flex;justify-content:space-between;align-item:center;">
                <span style="cursor:pointer;color:white;font-size:30px;" class="material-symbols-outlined">
                    link
                </span>
                <span style="cursor:pointer;color:white;font-size:30px;" class="material-symbols-outlined">
                    share
                </span>
                <span style="cursor:pointer;color:white;font-size:30px;" class="material-symbols-outlined">
                    comment
                </span>
                <span style="cursor:pointer;color:white;font-size:30px;" class="material-symbols-outlined">
                    volume_up
                </span>
            </div>
        </div>

    
    </div>
    </div>
    `
    return htmlString
}


export function searchGenerateHtml(data) {
    if(data.noResFound){
        return `<h2 style="opacity:0.5;">No Result Found...</h2>`
    }
    let htmlString = `
    <div class="card">
        <div class="cardImage" style="background-image:url(${data.url_to_image});"></div>
        <div class="cardDesc">
            <h4>${data.title}</h4>
        </div>
    </div>
    `
    return htmlString
}
//params has div, and needed info

import{swiperGenerateHtml} from './build.mjs'
import {updateUITopic} from './build.mjs'
import {make_fetch} from './make.js'


export function swiperApi(params) {
    make_fetch({
        apiUrl:params.apiUrl,
        key:"catList",
        value:params.category,
        resList:params.resList,
        updateUI:updateUITopic,
        div:params.div,
        getHtml:swiperGenerateHtml,
        // forSummary:params.forSummary
    })
    
}


  








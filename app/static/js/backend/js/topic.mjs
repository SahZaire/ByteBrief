//params has div, and needed info

import{trendingGenerateHtml} from './build.mjs'
import {updateUITopic} from './build.mjs'
import {make_fetch} from './make.js'


export function topicApi(params) {
    make_fetch({
        apiUrl:params.apiUrl,
        key:"catList",
        value:params.category,
        resList:params.resList,
        updateUI:updateUITopic,
        div:params.div,
        getHtml:trendingGenerateHtml
    })
}








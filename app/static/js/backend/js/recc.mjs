//params has div, apiUrl , ...needed info, resList 

import{recommendationFeedGenerateHtml} from './build.mjs'
import {updateUI} from './build.mjs'
import {make_fetch} from './make.js'

export function reccApi(params) {
    make_fetch({
        apiUrl:params.apiUrl,
        key:"keys",
        value:params.myKeys,
        resList:params.resList,
        updateUI:updateUI,
        div:params.div,
        getHtml:recommendationFeedGenerateHtml
    })
}


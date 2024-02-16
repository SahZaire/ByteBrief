//params has div, and needed info

import{generateHtml} from './build.mjs'
import {updateUI} from './build.mjs'
import {summaryUI} from './build.mjs'
import{swiperGenerateHtml2} from './build.mjs'
import {make_fetch} from './make.js'
import {myFeedGenerateHtml} from './build.mjs'

export function getrandomApi(params){
    make_fetch({
        apiUrl:params.apiUrl,
        key:"random",
        value:params.randomNumber,
        resList:params.resList,
        updateUI:params.ui?summaryUI:updateUI,
        div:params.div,
        getHtml:params.genFunc?swiperGenerateHtml2:myFeedGenerateHtml
    })
}
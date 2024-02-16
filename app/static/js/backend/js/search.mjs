import {updateUI} from './build.mjs'
import {make_fetch} from './make.js'
import{searchGenerateHtml} from './build.mjs'


export function searchApi(params) {
    make_fetch({
        apiUrl:params.apiUrl,
        key:"query",
        value:params.userQuery,
        resList:params.resList,
        updateUI:updateUI,
        div:params.div,
        getHtml:searchGenerateHtml
    })
}
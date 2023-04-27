import { Page } from "@core/Page.js";
import { $ } from "../Dom";

const content = `
<header class="header">Excel Dashboard</header>

<main class="main">
    <div class="main__doc-line">
        <a data-createButton="newExcel" class="main__doc">Новая таблица</a>
    </div>
    <div class="main__listPrewiw-box">
        <div class="main__listPrewiw-title">Название</div>
        <div class="main__listPrewiw-title">Дата открытия</div>
    </div>
    <ul class="main__listPrewiw-list"></ul>
</main>`


export class GreetingRoot extends Page{
    getRoot(parent){
        $(parent).HTML(content)
        const createButton = document.querySelector('[data-createButton="newExcel"]')
        const tableList = document.querySelector('.main__listPrewiw-list')
        createButton.addEventListener('click', clickCreateButton)

        const state =  JSON.parse(localStorage.getItem('state'))
        for(const key in state){
            const liContent = `<a href="#/excel/${key}">
            <div class="main__listPrewiw-itemTitle">${state[key].resTableTitle || 'Новая таблица'}</div>
            <div class="main__listPrewiw-date">${("" + (new Date(+key)).toISOString()).replace(/^([^T]+)T(.+)$/,'$1')}</div>
            </a>
            `
            createEl('li', liContent, tableList, ['main__listPrewiw-item'])
        }
    }
}
function clickCreateButton(){
    const id = Date.now()
    this.setAttribute('href', `#/excel/${id}`)
}

function createEl(element, content, parent, classes){
    const el = document.createElement(`${element}`);
    el.innerHTML = content;
    if(classes){el.classList.add(...classes)}
    parent.append(el)
    return el
}

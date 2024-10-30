import React from 'react'

export default function infoPage({ params } : { params: {breed:String}}){

    const { breed } = params;

    const thisInfoPage = {
        title: `This page is about ${ breed }s`,
        image: `${ breed } pic`
    }

    return (
        <div>
            <h1>{ thisInfoPage.title }</h1>
            <img src = "" alt = {thisInfoPage.image}/>
        </div>
    )
}
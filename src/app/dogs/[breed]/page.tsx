import React from 'react'

export default function infoPage({ params } : { params: {breed:String}}){

    const { breed } = params;

    const thisInfoPage = {
        title: `This page is about ${ breed }s`,
    }

    return (
        <div>
            <h1>{ thisInfoPage.title }</h1>
        </div>
    )
}
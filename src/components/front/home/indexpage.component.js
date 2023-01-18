import React from 'react'
import { Banner } from '../banner/banner.component'
import { OrderNow } from '../order/order.component'
import { TopRated } from '../toprated/toprated.component'


export function IndexPage(){

    return(
        <>
            <Banner></Banner>
            <OrderNow></OrderNow>
            <TopRated></TopRated>
        </>
    )
}
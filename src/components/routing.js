import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './front/layout/layout.component'
import {IndexPage} from './front/home/indexpage.component'

export function AppRouting(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<IndexPage></IndexPage>}></Route>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
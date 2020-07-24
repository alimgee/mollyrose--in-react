import React from 'react'
import Intro from '../home/Intro'
import Signs from './Signs'
import Types from './Types'
import { Helmet } from 'react-helmet'


const Cancer = (props) => {
    return (
        <main>
            <Helmet>
                <title>Childhood Cancer -mollyrose.ie</title>
                <meta name="description" content="Childhood Cancer signs and symptoms and Neuroblastoma" />
            </Helmet>
            <Intro />
            <Signs />
            <Types />
            
        </main>)
}
export default Cancer
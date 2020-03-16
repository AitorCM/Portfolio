import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'


class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Article Name"
        const siteDescription = "Article Page Template"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Here I Will Put The Article Title.</h2>
                        </header>
                        <p>In here, there will be the article text, with photos inserted on it, also, there will be code snippets and other useful
                            information.
                        </p>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
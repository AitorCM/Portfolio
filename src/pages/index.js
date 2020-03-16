import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'

import full01 from '../assets/images/fulls/01.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "AitorCM"
        const siteDescription = "A personal website for showcasing some projects"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>I'm going to use this website to allocate some of<br />
                            my electronics and programming projects.</h2>
                        </header>
                        <p>In here, I will post different projects of different knowledge areas, such as, electronics projects based on 
                            Arduino, ESP8266 or Raspberry Pi. Also, every kind of computer and programming projects. Basically, every kind of
                            project that draws my attention.
                        </p>

                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="articlePage" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
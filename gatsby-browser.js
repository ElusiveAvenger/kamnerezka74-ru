/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import './node_modules/bootstrap/dist/css/bootstrap.css'
import './src/styles/carousel.css'

import './node_modules/jquery/dist/jquery.js'
import './node_modules/popper.js/dist/umd/popper.js'
import './node_modules/bootstrap/dist/js/bootstrap.js'

import { init as scrollToUpButtonInit } from './src/components/scrollButton/scrollToUpButton';
import { init as modalPreviewInit } from './src/components/gallery/GalleryComponent';

export const onInitialClientRender = () => {
    scrollToUpButtonInit();
}

export const onRouteUpdate = ({ location, prevLocation }) => {
    modalPreviewInit(location);
}
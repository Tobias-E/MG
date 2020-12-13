import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont } from './typography';

// Fonts
import UbuntuBold from '../../assets/fonts/UbuntuBold.ttf';
import UbuntuBoldItalic from '../../assets/fonts/UbuntuBoldItalic.ttf';
import OpenSansBold from '../../assets/fonts/OpenSans-Bold.ttf';
import OpenSansBoldItalic from '../../assets/fonts/OpenSans-BoldItalic.ttf';
import OpenSansExtraBold from '../../assets/fonts/OpenSans-ExtraBold.ttf';
import OpenSansExtraBoldItalic from '../../assets/fonts/OpenSans-ExtraBoldItalic.ttf';
import OpenSansItalic from '../../assets/fonts/OpenSans-Italic.ttf';
import OpenSansLight from '../../assets/fonts/OpenSans-Light.ttf';
import OpenSansLightItalic from '../../assets/fonts/OpenSans-LightItalic.ttf';
import OpenSansRegular from '../../assets/fonts/OpenSans-Regular.ttf';
import OpenSansSemiBold from '../../assets/fonts/OpenSans-SemiBold.ttf';
import OpenSansSemiBoldItalic from '../../assets/fonts/OpenSans-SemiBoldItalic.ttf';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    html{
        font-size: 16px;
        box-sizing: border-box;
        scroll-behavior: smooth;
        /* scroll-padding-top: 120px */
    }
    *, *:before, *:after{
        box-sizing: inherit;
    }
    body{
        margin: 0;
        font-family: 'OpenSans'
    }
    h1, h2, h3 ,h4 ,h5 ,h6, a {
        font-family: 'Ubuntu';
    }
    @font-face {
        font-family: 'Ubuntu' ;
        src: url(${UbuntuBold}), url(${UbuntuBoldItalic});
    }
    @font-face {
        font-family: 'OpenSans';
        src: url(${OpenSansBold}), url(${OpenSansBoldItalic}), url(${OpenSansExtraBold}), url(${OpenSansExtraBoldItalic}),url(${OpenSansItalic}),url(${OpenSansLight}),url(${OpenSansLightItalic}), url(${OpenSansRegular}), url(${OpenSansSemiBold}),url(${OpenSansSemiBoldItalic}),;
    }
`;

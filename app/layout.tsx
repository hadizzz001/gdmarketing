import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from '../components/header';
import Logo from '../components/Logo';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GD Marketing Group",
  description: "GD Marketing Group",
  openGraph: {
    title: "GD Marketing Group",
    description: "GD Marketing Group",
    images: [
      {
        url: "https://res.cloudinary.com/dgkipuarc/image/upload/v1741181949/it6kszf5yydjw2jqsmki.jpg",
        width: 1200,
        height: 630,
        alt: "GD Marketing Group",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<head>
<>
  <meta charSet="UTF-8" />
  <title>GD Marketing Group</title>
  <meta name="robots" content="max-image-preview:large" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        'img:is([sizes="auto" i], [sizes^="auto," i]) { contain-intrinsic-size: 3000px 1500px }'
    }}
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="alternate"
    type="application/rss+xml"
    title="GD Marketing Group » Webbflöde"
    href="feed/index.html"
  />
  <link
    rel="alternate"
    type="application/rss+xml"
    title="GD Marketing Group » Kommentarsflöde"
    href="comments/feed/index.html"
  />
  <style
    id="wp-emoji-styles-inline-css"
    dangerouslySetInnerHTML={{
      __html:
        "\n\n\timg.wp-smiley, img.emoji {\n\t\tdisplay: inline !important;\n\t\tborder: none !important;\n\t\tbox-shadow: none !important;\n\t\theight: 1em !important;\n\t\twidth: 1em !important;\n\t\tmargin: 0 0.07em !important;\n\t\tvertical-align: -0.1em !important;\n\t\tbackground: none !important;\n\t\tpadding: 0 !important;\n\t}\n"
    }}
  />
  <style
    id="classic-theme-styles-inline-css"
    dangerouslySetInnerHTML={{
      __html:
        "\n/*! This file is auto-generated */\n.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}\n"
    }}
  />
  <style
    id="global-styles-inline-css"
    dangerouslySetInnerHTML={{
      __html:
        "\n:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--contrast: var(--contrast);--wp--preset--color--contrast-2: var(--contrast-2);--wp--preset--color--contrast-3: var(--contrast-3);--wp--preset--color--base: var(--base);--wp--preset--color--base-2: var(--base-2);--wp--preset--color--base-3: var(--base-3);--wp--preset--color--accent: var(--accent);--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}\n:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}\n:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}\n:root :where(.wp-block-pullquote){font-size: 1.5em;line-height: 1.6;}\n"
    }}
  />
  <link
    rel="stylesheet"
    id="generate-style-css"
    href="wp-content/themes/generatepress/assets/css/main.min.css@ver=3.3.1.css"
    media="all"
  />
  <style
    id="generate-style-inline-css"
    dangerouslySetInnerHTML={{
      __html:
        '\nbody{background-color:var(--base-2);color:var(--contrast);}a{color:var(--accent);}a{text-decoration:underline;}.entry-title a, .site-branding a, a.button, .wp-block-button__link, .main-navigation a{text-decoration:none;}a:hover, a:focus, a:active{color:var(--contrast);}.wp-block-group__inner-container{max-width:1200px;margin-left:auto;margin-right:auto;}.site-header .header-image{width:150px;}:root{--contrast:#222222;--contrast-2:#575760;--contrast-3:#b2b2be;--base:#f0f0f0;--base-2:#f7f8f9;--base-3:#ffffff;--accent:#1e73be;}:root .has-contrast-color{color:var(--contrast);}:root .has-contrast-background-color{background-color:var(--contrast);}:root .has-contrast-2-color{color:var(--contrast-2);}:root .has-contrast-2-background-color{background-color:var(--contrast-2);}:root .has-contrast-3-color{color:var(--contrast-3);}:root .has-contrast-3-background-color{background-color:var(--contrast-3);}:root .has-base-color{color:var(--base);}:root .has-base-background-color{background-color:var(--base);}:root .has-base-2-color{color:var(--base-2);}:root .has-base-2-background-color{background-color:var(--base-2);}:root .has-base-3-color{color:var(--base-3);}:root .has-base-3-background-color{background-color:var(--base-3);}:root .has-accent-color{color:var(--accent);}:root .has-accent-background-color{background-color:var(--accent);}.top-bar{background-color:#636363;color:#ffffff;}.top-bar a{color:#ffffff;}.top-bar a:hover{color:#303030;}.site-header{background-color:var(--base-3);}.main-title a,.main-title a:hover{color:var(--contrast);}.site-description{color:var(--contrast-2);}.mobile-menu-control-wrapper .menu-toggle,.mobile-menu-control-wrapper .menu-toggle:hover,.mobile-menu-control-wrapper .menu-toggle:focus,.has-inline-mobile-toggle #site-navigation.toggled{background-color:rgba(0, 0, 0, 0.02);}.main-navigation,.main-navigation ul ul{background-color:var(--base-3);}.main-navigation .main-nav ul li a, .main-navigation .menu-toggle, .main-navigation .menu-bar-items{color:var(--contrast);}.main-navigation .main-nav ul li:not([class*="current-menu-"]):hover > a, .main-navigation .main-nav ul li:not([class*="current-menu-"]):focus > a, .main-navigation .main-nav ul li.sfHover:not([class*="current-menu-"]) > a, .main-navigation .menu-bar-item:hover > a, .main-navigation .menu-bar-item.sfHover > a{color:var(--accent);}button.menu-toggle:hover,button.menu-toggle:focus{color:var(--contrast);}.main-navigation .main-nav ul li[class*="current-menu-"] > a{color:var(--accent);}.navigation-search input[type="search"],.navigation-search input[type="search"]:active, .navigation-search input[type="search"]:focus, .main-navigation .main-nav ul li.search-item.active > a, .main-navigation .menu-bar-items .search-item.active > a{color:var(--accent);}.main-navigation ul ul{background-color:var(--base);}.separate-containers .inside-article, .separate-containers .comments-area, .separate-containers .page-header, .one-container .container, .separate-containers .paging-navigation, .inside-page-header{background-color:var(--base-3);}.entry-title a{color:var(--contrast);}.entry-title a:hover{color:var(--contrast-2);}.entry-meta{color:var(--contrast-2);}.sidebar .widget{background-color:var(--base-3);}.footer-widgets{background-color:var(--base-3);}.site-info{background-color:var(--base-3);}input[type="text"],input[type="email"],input[type="url"],input[type="password"],input[type="search"],input[type="tel"],input[type="number"],textarea,select{color:var(--contrast);background-color:var(--base-2);border-color:var(--base);}input[type="text"]:focus,input[type="email"]:focus,input[type="url"]:focus,input[type="password"]:focus,input[type="search"]:focus,input[type="tel"]:focus,input[type="number"]:focus,textarea:focus,select:focus{color:var(--contrast);background-color:var(--base-2);border-color:var(--contrast-3);}button,html input[type="button"],input[type="reset"],input[type="submit"],a.button,a.wp-block-button__link:not(.has-background){color:#ffffff;background-color:#55555e;}button:hover,html input[type="button"]:hover,input[type="reset"]:hover,input[type="submit"]:hover,a.button:hover,button:focus,html input[type="button"]:focus,input[type="reset"]:focus,input[type="submit"]:focus,a.button:focus,a.wp-block-button__link:not(.has-background):active,a.wp-block-button__link:not(.has-background):focus,a.wp-block-button__link:not(.has-background):hover{color:#ffffff;background-color:#3f4047;}a.generate-back-to-top{background-color:rgba( 0,0,0,0.4 );color:#ffffff;}a.generate-back-to-top:hover,a.generate-back-to-top:focus{background-color:rgba( 0,0,0,0.6 );color:#ffffff;}:root{--gp-search-modal-bg-color:var(--base-3);--gp-search-modal-text-color:var(--contrast);--gp-search-modal-overlay-bg-color:rgba(0,0,0,0.2);}@media (max-width:768px){.main-navigation .menu-bar-item:hover > a, .main-navigation .menu-bar-item.sfHover > a{background:none;color:var(--contrast);}}.nav-below-header .main-navigation .inside-navigation.grid-container, .nav-above-header .main-navigation .inside-navigation.grid-container{padding:0px 20px 0px 20px;}.site-main .wp-block-group__inner-container{padding:40px;}.separate-containers .paging-navigation{padding-top:20px;padding-bottom:20px;}.entry-content .alignwide, body:not(.no-sidebar) .entry-content .alignfull{margin-left:-40px;width:calc(100% + 80px);max-width:calc(100% + 80px);}.rtl .menu-item-has-children .dropdown-menu-toggle{padding-left:20px;}.rtl .main-navigation .main-nav ul li.menu-item-has-children > a{padding-right:20px;}@media (max-width:768px){.separate-containers .inside-article, .separate-containers .comments-area, .separate-containers .page-header, .separate-containers .paging-navigation, .one-container .site-content, .inside-page-header{padding:30px;}.site-main .wp-block-group__inner-container{padding:30px;}.inside-top-bar{padding-right:30px;padding-left:30px;}.inside-header{padding-right:30px;padding-left:30px;}.widget-area .widget{padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px;}.footer-widgets-container{padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px;}.inside-site-info{padding-right:30px;padding-left:30px;}.entry-content .alignwide, body:not(.no-sidebar) .entry-content .alignfull{margin-left:-30px;width:calc(100% + 60px);max-width:calc(100% + 60px);}.one-container .site-main .paging-navigation{margin-bottom:20px;}}/* End cached CSS */.is-right-sidebar{width:30%;}.is-left-sidebar{width:30%;}.site-content .content-area{width:70%;}@media (max-width:768px){.main-navigation .menu-toggle,.sidebar-nav-mobile:not(#sticky-placeholder){display:block;}.main-navigation ul,.gen-sidebar-nav,.main-navigation:not(.slideout-navigation):not(.toggled) .main-nav > ul,.has-inline-mobile-toggle #site-navigation .inside-navigation > *:not(.navigation-search):not(.main-nav){display:none;}.nav-align-right .inside-navigation,.nav-align-center .inside-navigation{justify-content:space-between;}.has-inline-mobile-toggle .mobile-menu-control-wrapper{display:flex;flex-wrap:wrap;}.has-inline-mobile-toggle .inside-header{flex-direction:row;text-align:left;flex-wrap:wrap;}.has-inline-mobile-toggle .header-widget,.has-inline-mobile-toggle #site-navigation{flex-basis:100%;}.nav-float-left .has-inline-mobile-toggle #site-navigation{order:10;}}\n.elementor-template-full-width .site-content{display:block;}\n'
    }}
  />
  <link
    rel="stylesheet"
    id="e-animations-css"
    href="wp-content/plugins/elementor/assets/lib/animations/animations.min.css@ver=3.24.6.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="elementor-frontend-css"
    href="wp-content/plugins/elementor/assets/css/frontend.min.css@ver=3.24.6.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="widget-text-editor-css"
    href="wp-content/plugins/elementor/assets/css/widget-text-editor.min.css@ver=3.24.6.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="elementor-icons-css"
    href="wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css@ver=5.31.0.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="swiper-css"
    href="wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css@ver=8.4.5.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="e-swiper-css"
    href="wp-content/plugins/elementor/assets/css/conditionals/e-swiper.min.css@ver=3.24.6.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="elementor-post-13-css"
    href="wp-content/uploads/elementor/css/post-13.css@ver=1697102886.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="elementor-pro-css"
    href="wp-content/plugins/elementor-pro/assets/css/frontend.min.css@ver=3.24.4.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="widget-heading-css"
    href="wp-content/plugins/elementor/assets/css/widget-heading.min.css@ver=3.24.6.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="widget-animated-headline-css"
    href="wp-content/plugins/elementor-pro/assets/css/widget-animated-headline.min.css@ver=3.24.4.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="e-animation-fadeInDown-css"
    href="wp-content/plugins/elementor/assets/lib/animations/styles/fadeInDown.min.css@ver=3.24.6.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="widget-flip-box-css"
    href="wp-content/plugins/elementor-pro/assets/css/widget-flip-box.min.css@ver=3.24.4.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="widget-image-css"
    href="wp-content/plugins/elementor/assets/css/widget-image.min.css@ver=3.24.6.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="widget-carousel-css"
    href="wp-content/plugins/elementor-pro/assets/css/widget-carousel.min.css@ver=3.24.4.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="elementor-post-15-css"
    href="wp-content/uploads/elementor/css/post-15.css@ver=1737105086.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="elementor-post-82-css"
    href="wp-content/uploads/elementor/css/post-82.css@ver=1728475822.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="elementor-post-101-css"
    href="wp-content/uploads/elementor/css/post-101.css@ver=1737099864.css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="moove_gdpr_frontend-css"
    href="wp-content/plugins/gdpr-cookie-compliance/dist/styles/gdpr-main-nf.css@ver=4.15.4.css"
    media="all"
  />
  <style
    id="moove_gdpr_frontend-inline-css"
    dangerouslySetInnerHTML={{
      __html:
        "\n\t\t\t\t#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main h3.tab-title, \n\t\t\t\t#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main span.tab-title,\n\t\t\t\t#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li a, \n\t\t\t\t#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li button,\n\t\t\t\t#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content .moove-gdpr-branding-cnt a,\n\t\t\t\t#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder a.mgbutton, \n\t\t\t\t#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder button.mgbutton,\n\t\t\t\t#moove_gdpr_cookie_modal .cookie-switch .cookie-slider:after, \n\t\t\t\t#moove_gdpr_cookie_modal .cookie-switch .slider:after, \n\t\t\t\t#moove_gdpr_cookie_modal .switch .cookie-slider:after, \n\t\t\t\t#moove_gdpr_cookie_modal .switch .slider:after,\n\t\t\t\t#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content p, \n\t\t\t\t#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content p a,\n\t\t\t\t#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton, \n\t\t\t\t#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton,\n\t\t\t\t#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main .moove-gdpr-tab-main-content h1, \n\t\t\t\t#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main .moove-gdpr-tab-main-content h2, \n\t\t\t\t#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main .moove-gdpr-tab-main-content h3, \n\t\t\t\t#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main .moove-gdpr-tab-main-content h4, \n\t\t\t\t#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main .moove-gdpr-tab-main-content h5, \n\t\t\t\t#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main .moove-gdpr-tab-main-content h6,\n\t\t\t\t#moove_gdpr_cookie_modal .moove-gdpr-modal-content.moove_gdpr_modal_theme_v2 .moove-gdpr-modal-title .tab-title,\n\t\t\t\t#moove_gdpr_cookie_modal .moove-gdpr-modal-content.moove_gdpr_modal_theme_v2 .moove-gdpr-tab-main h3.tab-title, \n\t\t\t\t#moove_gdpr_cookie_modal .moove-gdpr-modal-content.moove_gdpr_modal_theme_v2 .moove-gdpr-tab-main span.tab-title,\n\t\t\t\t#moove_gdpr_cookie_modal .moove-gdpr-modal-content.moove_gdpr_modal_theme_v2 .moove-gdpr-branding-cnt a {\n\t\t\t\t \tfont-weight: inherit\t\t\t\t}\n\t\t\t#moove_gdpr_cookie_modal,#moove_gdpr_cookie_info_bar,.gdpr_cookie_settings_shortcode_content{font-family:inherit}#moove_gdpr_save_popup_settings_button{background-color:#373737;color:#fff}#moove_gdpr_save_popup_settings_button:hover{background-color:#000}#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton,#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton{background-color:#0b6473}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder a.mgbutton,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder button.mgbutton,.gdpr_cookie_settings_shortcode_content .gdpr-shr-button.button-green{background-color:#0b6473;border-color:#0b6473}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder a.mgbutton:hover,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder button.mgbutton:hover,.gdpr_cookie_settings_shortcode_content .gdpr-shr-button.button-green:hover{background-color:#fff;color:#0b6473}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close i,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close span.gdpr-icon{background-color:#0b6473;border:1px solid #0b6473}#moove_gdpr_cookie_info_bar span.change-settings-button.focus-g,#moove_gdpr_cookie_info_bar span.change-settings-button:focus,#moove_gdpr_cookie_info_bar button.change-settings-button.focus-g,#moove_gdpr_cookie_info_bar button.change-settings-button:focus{-webkit-box-shadow:0 0 1px 3px #0b6473;-moz-box-shadow:0 0 1px 3px #0b6473;box-shadow:0 0 1px 3px #0b6473}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close i:hover,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close span.gdpr-icon:hover,#moove_gdpr_cookie_info_bar span[data-href]>u.change-settings-button{color:#0b6473}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li.menu-item-selected a span.gdpr-icon,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li.menu-item-selected button span.gdpr-icon{color:inherit}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li a span.gdpr-icon,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li button span.gdpr-icon{color:inherit}#moove_gdpr_cookie_modal .gdpr-acc-link{line-height:0;font-size:0;color:transparent;position:absolute}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close:hover i,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li a,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li button,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li button i,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li a i,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main .moove-gdpr-tab-main-content a:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content span.change-settings-button:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.change-settings-button:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content u.change-settings-button:hover,#moove_gdpr_cookie_info_bar span[data-href]>u.change-settings-button,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content span.change-settings-button.focus-g,span.change-settings-button:focus,button.change-settings-button.focus-g,button.change-settings-button:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content u.change-settings-button.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content u.change-settings-button:focus{color:#0b6473}#moove_gdpr_cookie_modal.gdpr_lightbox-hide{display:none}\n"
    }}
  />














  
  <link
    rel="stylesheet"
    id="google-fonts-1-css"
    href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CMontserrat%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=auto&ver=6.7.2"
    media="all"
  />


 
  <link
    rel="icon"
    href="https://res.cloudinary.com/dgkipuarc/image/upload/v1741181949/it6kszf5yydjw2jqsmki.jpg"
    sizes="32x32"
  />
  <link
    rel="icon"
    href="https://res.cloudinary.com/dgkipuarc/image/upload/v1741181949/it6kszf5yydjw2jqsmki.jpg"
    sizes="192x192"
  />
  <link
    rel="apple-touch-icon"
    href="https://res.cloudinary.com/dgkipuarc/image/upload/v1741181949/it6kszf5yydjw2jqsmki.jpg"
  />
  <meta
    name="msapplication-TileImage"
    content="https://res.cloudinary.com/dgkipuarc/image/upload/v1741181949/it6kszf5yydjw2jqsmki.jpg"
  />
  <style
    id="wp-custom-css"
    dangerouslySetInnerHTML={{
      __html:
        "\n\t\t\t/* Slide In From The Top Option */\n\n.header-2 {\n transform: translatey(-80px);\n -moz-transition: all .3s ease!important;\n -webkit-transition: all .3s ease!important;\n transition: all .3s ease!important;\n}\n\n\n.elementor-sticky--effects.header-2  {\n height: auto!important;\n transform: translatey(0px);\n}\n\n.elementor-sticky--effects.header-1 {\n display: none!important;\n}\n\n/* End Of Slide In From The Top Option */\n\n/*PLUGIN COOKIES START*/\naside#moove_gdpr_cookie_info_bar {\n\tmin-height: 100vh;\n    padding: 25px;\n    background: #000000c7 !important;\n    top: 0%;\n}\n.moove-gdpr-info-bar-container {\n    background: #f1f1f1 !important;\n    border-radius: 15px;\n    padding: 30px 15px !important;\n    max-width: 1000px;\n}\naside#moove_gdpr_cookie_info_bar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.moove-gdpr-cookie-notice p {\n    color: #000 !important;\n}\n.moove-gdpr-cookie-notice {\n    /* display: flex; */\n    text-align: center;\n}\n.moove-gdpr-button-holder {\n    /* padding: 0 !important; */\n    margin-top: 20px;\n\tjustify-content: center;\n}\n.moove-gdpr-info-bar-content {\n    display: flex;\n    flex-direction: column;\n}\nbutton.mgbutton.moove-gdpr-infobar-settings-btn.change-settings-button {\n    color: #0B6473 !important;\n    opacity: 1 !important;\n    border: 1px #0B6473 solid !important;\n}\nbutton.mgbutton.moove-gdpr-infobar-settings-btn.change-settings-button:hover {\n    border: solid 1px #0B6473 !important;\n}\n#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton, #moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton:hover {\n    border: 1px solid #0B6473;\n}\n#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton, #moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton {\n    border: 1px solid #0B6473;\n}\n\n/*PLUGIN COOKIES END*/\t\t"
    }}
  />
</>
</head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Logo />
        <Header />
        {children}
      </body>
    </html>
  );
}

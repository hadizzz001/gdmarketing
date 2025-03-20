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
      <>
  <meta charSet="UTF-8" />
  <title>GD Marketing Group</title>
  <meta name="robots" content="max-image-preview:large" />
   



  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>









  
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

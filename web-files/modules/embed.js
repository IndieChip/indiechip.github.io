export default {        
    color: 0xc72ff5,
    title: 'Incoming Message!',
    author: {
        name: 'Crunched Cookies Webhook',
        icon_url: 'http://localhost:5173/web-files/img/tcLogo.png',
        url: 'https://discord.js.org',
    },
    description: 'Some description here',
    thumbnail: {
        url: 'https://s.yimg.com/uu/api/res/1.2/Q3shPF139nrhQtbOhKwkow--~B/Zmk9c3RyaW07aD0yODQ7cT04MDt3PTUzNjthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/the_conversation_us_articles_815/e6c59c926da3423448d4ecd974bfff99.cf.webp',
    },
    
    fields: [
        {
            name: 'Regular field title',
            value: 'Some value here',
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Inline field title',
            value: 'Some value here',
            inline: true,
        },
        {
            name: 'Inline field title',
            value: 'Some value here',
            inline: true,
        },
        {
            name: 'Inline field title',
            value: 'Some value here',
            inline: true,
        },
    ],
    image: {
        url: 'https://i.imgur.com/AfFp7pu.png',
    },
    timestamp: new Date().toISOString(),
    footer: {
        text: 'Some footer text here',
        icon_url: 'https://i.imgur.com/AfFp7pu.png',
    },
}
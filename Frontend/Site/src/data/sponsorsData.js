import etherentExpress from '/assets/sponsors/internet/ethernetExpress.png' 
import AnandBose from '/assets/sponsors/eventsponsors/anandbose.webp'
import saurabhlotlikargroup from '/assets/sponsors/eventsponsors/saurabhlotlikargroup.webp'
import ambika from '/assets/sponsors/supporters/Ambika.webp'
import deccan from '/assets/sponsors/supporters/deccan.webp'
import himalaya from '/assets/sponsors/supporters/himalaya.webp'
import mycanadavisas from '/assets/sponsors/supporters/mycanadavisas.webp'
import sanaointernational from '/assets/sponsors/supporters/sanaointernational.webp'
import fcgoa from '/assets/sponsors/sports/FCGOa.png'
import sbi from '/assets/sponsors/eventsponsors/SBI.webp'
import casant from '/assets/sponsors/title/Casant.webp'
import jvshetty from '/assets/sponsors/supporters/JVShetty.webp'
import unionBank from '/assets/sponsors/supporters/unionBank.webp'
import blueskript from '/assets/sponsors/supporters/blueskript.webp'

const sponsors=[
    {
        title:"TITLE SPONSORS",
        height: 15,
        width: 20,
        collection:[
            {
                img: casant,
                link: 'https://casant.in/',
                color: '#fff'
            },
        ]
    },
    {
        title:"SPORTS SPONSORS",
        height: 13,
        width: 16,
        collection:[
            {
                img: fcgoa,
                link: 'https://fcgoa.in/',
                color: 'rgba(255,255,255,0)'
            },
        ]
    },
    {
        title:"INTERNET SPONSORS",
        height: 9,
        width: null,
        collection:[
            {
                img: etherentExpress,
                link: 'https://www.expl.in/',
                color: '#fff'
            },
        ]
    },
    {
        title:"EVENT SPONSORS",
        height: 9,
        width: null,
        collection:[
            {
                img: AnandBose,
                link: '',
                color: '#fff'
            },
            {
                img: saurabhlotlikargroup,
                link: '',
                color: '#171717'
            },
            {
                img: sbi,
                link: 'https://www.onlinesbi.sbi/',
                color: '#fff'
            },
        ]
    },
    {
        title:"SUPPORTERS",
        height: 6,
        width: 13,
        collection:[
            {
                img: sanaointernational,
                link: 'https://www.sanaointl.com/',
                color: '#fff'
            },
            {
                img: mycanadavisas,
                link: 'https://mycanadavisas.com/',
                color: '#eddba8'
            },
            {
                img: deccan,
                link: 'https://www.deccanchemicals.com/',
                color: '#fff'
            },
            {
                img: ambika,
                link: '',
                color: '#000'
            },
            {
                img: himalaya,
                link: 'https://himalayawellness.in/',
                color: '#fff'
            },
            {
                img: jvshetty,
                link: '',
                color: '#fff'
            },
            {
                img: unionBank,
                link: 'https://www.unionbankofindia.co.in/english/home.aspx',
                color: '#fff'
            },
            {
                img: blueskript,
                link: 'https://blueskript.com/',
                color: '#fff'
            }
        ]
    },
]

export {sponsors}
import React from 'react';
import toko from './asset/toko.jpg';
import jadul from './asset/jadul.jpg';
import aneka from './asset/aneka.jpg';
import kembang from './asset/kembang.jpg';
import beranak from './asset/beranak.jpg';
import seuhah from './asset/seuhah.jpg';

export default class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Topbar/>
                <MainContent/>
                <BottomBar/>
            </div>
        )
    }
}

class Topbar extends React.Component {
    render() {
        return (
            <div id='topbar' className='d-flex justify-content-between ps-2'>
                <a className='title plaster align-self-center' href='.'>Bakso Gajah</a>
                <div className='d-flex p-2'>
                    <a type="button" className='btn salsa topbar-button d-flex align-items-center' href='#fact'>
                        Ciri Khas
                    </a>
                    <a type="button" className='btn salsa topbar-button d-flex align-items-center' href='#mainmenu'>
                        Menu
                    </a>
                    <a type="button" className='btn salsa topbar-button d-flex align-items-center' href='#contact'>
                        Kontak
                    </a>
                </div>
            </div>
        )
    }
}

class MainContent extends React.Component {
    render() {
        return (
            <div className='d-grid gap-3'>
                <Jumbotron/>
                <Fact/>
                <MainMenu/>
            </div>
        )
    }
}

function Jumbotron() {
    return (
        <div id='jumbotron'>
            <img src={toko} className='img-fluid float-end jumbotron-img' alt='Gambar dalam warung'/>
            <div className='p-4 d-flex flex-column justify-content-center position-absolute jumbotron-shade'>
                <div className='jumbotron-title salsa'>
                    Pantang Pulang Sebelum Kenyang!
                </div>
                <div className='jumbotron-subtitle montserrat'>
                    Dengan ukuran bakso yang jauh lebih besar dari biasanya, anda tidak akan perlu khawatir harus memesan dua porsi, bahkan bagi kalian yang memiliki perut tak berdasar
                </div>
            </div>
        </div>
    )
}

function Fact() {
    return (
        <div id='fact' className='d-flex align-items-center gap-5 flex-column p-5'>
            <div className='fact-title text-center salsa'>
                Kenapa harus memilih kami?
            </div>
            
            <div className='fact-fact d-flex justify-content-center gap-3'>
                <img src={jadul} className="fact-img img-fluid"></img>
                <div className='circle align-self-center'>
                        
                </div>
                <div className='fact-text dull-corner-left align-self-center p-3 d-flex flex-column justify-content-center'>
                    <div className='fact-subtitle montserrat'>
                        30 Tahun dan Terus Melayani
                    </div>
                    
                    <div className='fact-desc'>
                        Berdiri sejak tahun 1981, Bakso Gajah terbukti menjadi salah satu bakso yang paling diminati oleh para pelanggannya
                    </div>
                </div>
            </div>

            <div className='fact-fact d-flex justify-content-center gap-3'>
                <div className='fact-text dull-corner-right align-self-center p-3 d-flex flex-column justify-content-center'>
                    <div className='fact-subtitle montserrat'>
                        Cocok untuk Semua Kalangan
                    </div>
                    
                    <div className='fact-desc'>
                    Dengan banyaknya variasi menu yang tersedia, kalian tidak perlu khawatir untuk mengundang teman dengan preferensi teraneh sekalipun
                    </div>
                </div>
                <div className='circle align-self-center'/>
                <img src={aneka} className="fact-img img-fluid"></img>
            </div>
        </div>
    )
}

function MainMenu() {
    return (
        <div id='mainmenu' className='d-flex align-items-center gap-3 flex-column p-4'>
            
            <div className='mainmenu-title text-center salsa'>
                Menu utama
                <span className='mainmenu-title-baksogajah plaster'>
                    Bakso Gajah
                </span>
            </div>

            <div className='d-flex justify-content-center gap-5 ps-5 pe-5 text-center'>
                <div className='mainmenu-menu'>
                    <img src={kembang} className=" img-fluid mainmenu-img"/>
                    <div className='mainmenu-name salsa'>
                        Bakso Kembang
                    </div>
                </div>
                <div className='mainmenu-menu'>
                    <img src={beranak} className="img-fluid mainmenu-img "/>
                    <div className='mainmenu-name salsa'>
                        Bakso Beranak
                    </div>
                </div>
                <div className='mainmenu-menu'>
                    <img src={seuhah} className="img-fluid mainmenu-img "/>
                    <div className='mainmenu-name salsa'>
                        Bakso Seuhah
                    </div>
                </div>
            </div>

            <button className='btn btn-danger mainmenu-btn montserrat'>
                Lihat Menu Lainnya
            </button>

        </div>
    )
}

function BottomBar() {
    return (
        <div id='bottombar' className='d-flex justify-content-between p-3'>
            
            <div id='contact' className='montserrat'>
                <div className='contact-title'>
                    Kontak Kami:
                </div>
                <div className='contact-list'>
                    +62 812 3456 7890
                </div>
                <div className='contact-list'>
                    bakso_gajah@email.com
                </div>
                <div className='contact-list'>
                    Jl. Kembang Sari, Kel. Paguyuban, Kec. Pawapeling, Kab. Goib
                </div>
            </div>

            <div className='bottombar-baksogajah plaster align-self-center'>
                Bakso Gajah
            </div>

        </div>
    )
}
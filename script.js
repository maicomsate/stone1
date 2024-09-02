
const stones = [
    {
        name: 'Granito Marrom Madeira',
        description: 'Elegância natural com tons quentes de madeira.',
        color: '#0C090A',
        image: 'https://arkpad.com.br/wp-content/uploads/2021/07/granito-marrom5.jpg',
        applicationImage: 'https://bestmarmores.com.br/wp-content/uploads/2018/12/Granito-Marrom-Absoluto-Capa-degrade.jpg'
    },
    {
        name: 'Mármore Branco Pitaya',
        description: 'Pureza e sofisticação em branco cristalino.',
        color: '#F8F8FF',
        image: 'data:image/jpeg;base64,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',
        applicationImage: 'https://i.ytimg.com/vi/HYcWhyKEr9c/maxresdefault.jpg'
    },
    {
        name: 'Mármore Branco Itaúna',
        description: 'Delicadeza e brilho em cada veio.',
        color: '#0C090A',
        image: 'data:image/jpeg;base64,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',
        applicationImage: 'https://marmorariaunipedras.com.br/wp-content/uploads/2018/09/ITAUNAS-1-768x644.jpg'
    },
    {
        name: 'Granito Cinza Andorinha',
        description: 'Versatilidade e elegância em tons de cinza.',
        color: '#F8F8FF',
        image: 'https://images.tcdn.com.br/img/img_prod/1048279/peitoril_granito_cinza_andorinha_100x15x2_cm_729_1_4a95b0c819268ee7dad0e13023f1f39d.jpg',
        applicationImage: 'https://maquettaria3d.com.br/wp-content/uploads/2024/04/Granito-Cinza-Andorinha-ESCOVADO-min.jpg'
    },
    {
        name: 'Quartzito Mont Blanc',
        description: 'A pureza das neves eternas em sua cozinha. ',
        color: '#0C090A',
        image: 'https://www.alicante.com.br/wp-content/uploads/2023/05/DSC1636.jpg.webp',
        applicationImage: 'https://marmorariasahara.com.br/wp-content/uploads/2022/12/E-importante-salientar-que-o-Quartzito-Mont-Blanc-e-nobre-valorizando-qualquer-ambiente-e-garantindo-aos-projetos-uma-aparencia-exuberante.jpg'
    },
    {
        name: 'Granito Preto Via Láctea',
        description: 'O universo em sua superfície.',
        color: '#F8F8FF',
        image: 'https://imagens-revista.vivadecora.com.br/uploads/2022/05/Granito-preto-via-lactea-para-revestir-projetos-modernos-foto-Entenda-Antes.jpg',
        applicationImage: 'https://imagens-revista.vivadecora.com.br/uploads/2022/05/Cozinha-com-pedra-de-granito-via-lactea-e-armarios-de-vidro-foto-Home-Decore.jpg'
    },
    {
        name: 'Mármore Biancatto',
        description: 'Suavidade e requinte em branco italiano.',
        color: '#0C090A',
        image: 'https://pemagran.com.br/wp-content/uploads/2023/08/Biancatto-e1694535082668.jpeg',
        applicationImage: 'https://pemagran.com.br/wp-content/uploads/2023/08/Biancatto.jpg'
    },
    {
        name: 'Granito Sierra Granada',
        description: 'A força da natureza em tons terrosos.',
        color: '#F8F8FF',
        image: 'https://marmoles.mx/img/p/4/3/4/8/4348.jpg',
        applicationImage: 'https://marmoles.mx/img/ImgImp/Aplicacion/GCAFE070.jpg'
    },
    {
        name: 'Granito Ocre Itabira',
        description: 'Calor e aconchego em tons dourados.',
        color: '#0C090A',
        image: 'https://www.lojascoqueiro.com.br/anexo/imagem-destaque?imagem=16745',
        applicationImage: 'https://cassol.vtexassets.com/arquivos/ids/3339163-800-auto?v=638520402936570000&width=800&height=auto&aspect=true'
    },
    {
        name: 'Mármore Cinza Dumont',
        description: 'Modernidade e sobriedade em cinza nobre.',
        color: '#F8F8FF',
        image: 'https://tfcoi0.vtexassets.com/arquivos/ids/201223-800-auto?v=638382585806170000&width=800&height=auto&aspect=true',
        applicationImage: 'https://dummyimage.com/600x400/696969/ffffff&text=Aplicação+Mármore+Cinza+Dumont'
    },
    {
        name: 'Granito Crystal White',
        description: 'Pureza cristalina para ambientes luminosos.',
        color: '#0C090A',
        image: 'https://www.marmofoz.com/api/ImageHandler.ashx?foto=00.jpg&artigo=95567&type=custom&w=1024&pasta=/CORES/TEX.CRIWHI/IMG/',
        applicationImage: 'https://www.marmofoz.com/api/ImageHandler.ashx?foto=02.jpg&artigo=95567&type=custom&w=1024&pasta=/CORES/TEX.CRIWHI/IMG/'
    },
    {
        name: 'Granito Dallas',
        description: 'Sofisticação texana em sua decoração.',
        color: '#F8F8FF',
        image: 'https://www.magmamarmores.com.br/imagens/produtos/granito/granito-branco-dallas.jpg',
        applicationImage: 'https://casoca.com.br/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/g/r/granito_branco_dallas.3.jpg'
    },
    {
        name: 'Granito Verde Ubatuba',
        description: 'A exuberância da mata atlântica em sua casa.',
        color: '#0C090A',
        image: 'https://static.wixstatic.com/media/4b70fd_1050b67dfc724af6a9137d162f9e00cd~mv2.jpg/v1/fill/w_300,h_300,al_c,lg_1,q_80,enc_auto/Piso-de-Granito-Verde-Ubatuba.jpg',
        applicationImage: 'https://www.magmamarmores.com.br/imagens/produtos/granito/bancadas/bancada-granito-verde-ubatuba.jpg'
    },
    {
        name: 'Granito Ambar Black',
        description: 'Mistério e elegância em tons profundos.',
        color: '#F8F8FF',
        image: 'https://www.capitalgranite.com.br/view/assets/image/produtos/black-amber-2.jpg',
        applicationImage: 'https://pt.globalstonecenter.com/uploads/202025826/black-amber-granite-slab56356314911.jpg'
    }
];

const stoneContainer = document.getElementById('stone-container');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');


stones.forEach((stone, index) => {
    const section = document.createElement('section');
    section.className = 'stone-section';
    section.style.backgroundColor = stone.color;
    section.innerHTML = `
        <div class="stone-content">
            <h2>${stone.name}</h2>
            <p>${stone.description}</p>
            <div class="stone-images">
                <img src="${stone.image}" alt="${stone.name}" loading="lazy">
                <img src="${stone.applicationImage}" alt="${stone.name} aplicado" loading="lazy">
            </div>
            <a href="#contato" class="cta-button">Solicitar Orçamento</a>
        </div>
    `;
    stoneContainer.appendChild(section);
});


const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const sections = document.querySelectorAll('.stone-section');

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionMiddle = sectionTop + sectionHeight / 2;

        if (scrollPosition > sectionMiddle - windowHeight * 0.75 && scrollPosition < sectionMiddle + windowHeight * 0.75) {
            section.querySelector('.stone-content').classList.add('active');
        } else {
            section.querySelector('.stone-content').classList.remove('active');
        }
    });
};


const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};


// Event listeners
window.addEventListener('scroll', throttle(handleScroll, 100));
window.addEventListener('resize', throttle(handleScroll, 100));
handleScroll(); // Initial check

// Lazy loading images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.dataset.src;
                image.removeAttribute('data-src');
                imageObserver.unobserve(image);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
} else {
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll('img[data-src]').forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    });
}

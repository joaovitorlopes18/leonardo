import Imagem from './imagens';

const Imagens = [
    'https://segredosdomundo.r7.com/wp-content/uploads/2020/05/pica-pau-historia-e-curiosidades-desse-iconico-personagem-e1673396515741.webp',
    'https://uploads.metropoles.com/wp-content/uploads/2020/08/17165020/os-simpsons.jpg',
    'https://mega.ibxk.com.br/2017/11/09/09182907829143.jpg',
    'https://upload.wikimedia.org/wikipedia/pt/4/47/Tom%26JerryShow2014.png',
    'https://s3.amazonaws.com/blog.dentrodahistoria.com.br/wp-content/uploads/2021/06/29175214/thumb-turma-monica.png',
    'https://tvcultura.com.br/upload/tvcultura/programas/programa-peppa.jpg',
];

function Galeria() {
    return(
        <div className="galeria">
            {Imagens.map((url, index) => (
                <Imagem key={index} url={url} />
            ))}
        </div>
    )
}

export default Galeria;
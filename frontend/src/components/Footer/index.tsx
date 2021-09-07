
import ImgLkDin from 'components/Footer/img/lkdin.svg';
import ImgGit from 'components/Footer/img/git.png';

function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <p className="text-light">
                    <div className="my-2 my-md-0">
                        App desenvolvido por <a href="https://www.linkedin.com/in/miguel-pereira-da-silva-687681107/" target="_blank"
                            rel="noreferrer" id="nomeRodape">
                            Miguel P Silva <img src={ImgLkDin} alt="DevSuperior" width="100" />
                        </a>
                        |
                        <a href="https://github.com/MiguelProgrammer/projeto-sds3" target="_blank"
                            rel="noreferrer" id="nomeRodape">
                            <img src={ImgGit} alt="DevSuperior" width="65" />
                        </a>
                    </div>
                </p>
                <div className="text-light"><small><strong>Semana Spring React</strong><br />
                    Evento promovido pela escola DevSuperior:
                    <a href="https://instagram.com/devsuperior.ig" target="_blank"
                        rel="noreferrer">@devsuperior.ig</a></small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
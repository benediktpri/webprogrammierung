import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Imprint() {

  var Logo = require("../img/logo.png")

  return (
    <div className="main">
      <Navbar bg="light" expand="md"> {/* -- Navbar -- */}
        <Container>
          <Navbar.Brand><img alt="logo" src={Logo} className="logo d-inline-block align-top" />{' '}
            WankyWombat
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/home">Home</Link>
              <Link className="nav-link" to="/report">Report</Link>
              <Link className="nav-link" to="/map">Map</Link>
              <Link className="nav-link" to="/list">List</Link>
              <Link className="nav-link active" to="/imprint">Imprint</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="heading">Contact & Legal</div> {/* -- Heading -- */}

      <div className='container-fluid'> {/* -- Content -- */}
        <div className='row'>
          <div className='col-12'> {/* -- Contact -- */}
            <h1>Contact Us</h1>
            <p>Just send us an email at <a href="mailto:wanky.wombat@gmail.com">wanky.wombat@gmail.com</a></p>
          </div>

          <div className='col-12'> {/* -- Follow -- */}
            <h1>Follow Us</h1>
            <p>Follow us on <a href="https://twitter.com">Twitter</a></p>
            <p>Follow us on <a href="https://www.instagram.com">Instagram</a></p>
          </div>

          <div className='col-12'> {/* -- Imprint -- */}
            <h1>Terms of conditions</h1>
            <div class='imprint'>
              <p>Angaben gemäß § 5 TMG</p>
              <p>Max Muster <br />Musterweg<br />12345 Musterstadt <br />
              </p>

              <p> <strong>Vertreten durch: </strong><br />
                Max Muster<br />
              </p>

              <p><strong>Kontakt:</strong> <br />
                Telefon: 01234-789456<br />
                Fax: 1234-56789<br />
                E-Mail: <a href='mailto:max@muster.de'>max@muster.de</a><br />
              </p>

              <p><strong>Umsatzsteuer-ID: </strong> <br />
                Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: Musterustid.<br /><br />
                <strong>Wirtschafts-ID: </strong><br />
                Musterwirtschaftsid<br />
              </p>

              <p><strong>Aufsichtsbehörde:</strong><br />
                Musteraufsicht Musterstadt<br />
              </p>

              <p>
                <strong>Haftungsausschluss: </strong><br /><br />

                <strong>Haftung für Inhalte</strong><br /><br />
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
                übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br /><br />

                <strong>Haftung für Links</strong><br /><br />
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br /><br />

                <strong>Urheberrecht</strong><br /><br />
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
                werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.<br /><br />

                <strong>Datenschutz</strong><br /><br />
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
                stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br />
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. <br />
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
                Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br />
              </p>
            </div>
          </div>
        </div>
      </div>


      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"></script>
    </div>
  );
}

export default Imprint;
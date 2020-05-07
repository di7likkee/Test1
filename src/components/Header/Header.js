import React, { Component } from "react";
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Button, Modal } from 'react-bootstrap';

import './stylesheet.css';
import { styles } from './Header.styles';
import logo from '../../images/logo.png';
import instagram_icon from '../../images/instagram_big.png';

function RenderBig() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div style={{ overflowX: 'hidden' }}>
      <nav style={styles.leftHolder}>
        <a href="/Services" style={styles.leftLink}>УСЛУГИ</a>
        <a href="/#about" style={styles.leftLink}>О НАС</a>
      </nav>

      <a href='/'><img src={logo} alt={"Ever Pretty Beauty Studio Logo"} style={styles.logoBig} /></a>

      <nav style={styles.rightHolder}>
        <a href="/#contact" style={styles.rightLink}>КОНТАКТЫ</a>


        <a onClick={() => setModalShow(true)} style={styles.rightLink}>ЗАПИСЬ</a>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        <div style={styles.socialMedia}>
          <div style={{ position: 'relative', float: 'left', width: 40 }} />
          <Tooltip title={'Instagram'}>
            <IconButton onClick={() => window.open('https://www.instagram.com/everprettybeautystudio/?hl=en', '_blank')} style={{ position: 'relative', float: 'left', width: '35%', marginLeft: '7.5%', marginRight: '7.5%' }}>
              <img alt={'Instagram'} style={{ maxWidth: 20, opacity: 0.75 }} src={instagram_icon} />
            </IconButton>
          </Tooltip>
        </div>
      </nav>
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScA9Fa3I59ux8lmPhGTEXlO4iQ8rncuAv64p1zSoTYZPF4TSQ/viewform?embedded=true" width="100%" height="850px" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
}

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      width: 0,
      buttonActive: false,
    });
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  toggleButton = () => {
    this.setState({
      buttonActive: !this.state.buttonActive
    })
  }
  closeMenu = () => {
    this.setState({
      buttonActive: false
    })
  }

  render() {
    return (
      <div style={styles.header}>
        <RenderBig />
      </div>
    )
  }
}

export default Header;

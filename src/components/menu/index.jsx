import { Container } from './styles';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)}/>
      <ul>
            <li><a href="#header">Inicio</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#train">Treinos</a></li>
            <li><a href="#plans">Planos</a></li>
            <li><a href="#category">Categorias</a></li>
            <li><a href="#personal">Professores</a></li>
            <li><a href="#about">Sobre Nós</a></li>
          </ul>
    </Container>
  )
}
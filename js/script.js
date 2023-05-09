import SmoothScroll from './modules/smooth-scroll';
import initAnimacaoScroll from './modules/scroll-animacao';
import initAccordion from './modules/accordion';
import initTabNav from './modules/tabnav';
import initModal from './modules/modal';
import initTooltip from './modules/tooltip';
import initDropdownMenu from './modules/dropdown-menu';
import initMenuMobile from './modules/menu-mobile';
import initFuncionamento from './modules/funcionamento';
import initFetchAnimais from './modules/fetch-animais';
import initFetchBitcoin from './modules/fetch-bitcoin';

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();

import SmoothScroll from './modules/smooth-scroll';
import ScrollAnimation from './modules/scroll-animation';
import Accordion from './modules/accordion';
import TabNav from './modules/tabnav';
import Modal from './modules/modal';
import Tooltip from './modules/tooltip';
import DropdownMenu from './modules/dropdown-menu';
import MenuMobile from './modules/menu-mobile';
import Workingdays from './modules/funcionamento';
import fetchAnimals from './modules/fetch-animais';
import fetchBitcoin from './modules/fetch-bitcoin';
import { SlideNav } from './modules/slide';

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnimation = new ScrollAnimation('[data-anime="scroll"]');
scrollAnimation.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Workingdays('[data-semana]', 'aberto');
funcionamento.init();

const slide = new SlideNav('.slide', '.wrapper');
slide.init();
slide.addControl('.custom-controls');

fetchAnimals('../../animaisapi.json', '.numeros-grid');

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

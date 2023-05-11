export default class Modal {
  constructor(openButton, closeButton, modalContainer) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.modalContainer = document.querySelector(modalContainer);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outsideClick = this.outsideClick.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  outsideClick(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  addModalEvent() {
    this.openButton.addEventListener('click', this.eventToggleModal);
    this.closeButton.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.outsideClick);
  }

  init() {
    if (this.openButton && this.closeButton && this.modalContainer) {
      this.addModalEvent();
    }
    return this;
  }
}

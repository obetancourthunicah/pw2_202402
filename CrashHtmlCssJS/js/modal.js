class ModalClass {
  modal = null;
  modalTitle = null;
  modalContent = null;
  modalClose = null;
  modalHeader = null;
  modalBody = null;

  constructor() {
    this.addModal();
  }
  addModal() {
    this.modal = document.createElement("section");
    this.modal.classList.add("modal");
    this.modal.classList.add("hidden");

    this.modalContent = document.createElement("div");
    this.modalContent.classList.add("modal-content");

    this.modalHeader = document.createElement("div");
    this.modalHeader.classList.add("modal-header");

    this.modalTitle = document.createElement("h3");
    this.modalTitle.textContent = "Titulo del Modal";

    this.modalBody = document.createElement("div");
    this.modalBody.classList.add("modal-body");


    this.modalClose = document.createElement("button");
    this.modalClose.classList.add("modal-close");
    this.modalClose.textContent = "X";

    this.modalHeader.appendChild(this.modalTitle);
    this.modalHeader.appendChild(this.modalClose);
    this.modalContent.appendChild(this.modalHeader);
    this.modalContent.appendChild(this.modalBody);
    this.modal.appendChild(this.modalContent);

    document.body.appendChild(this.modal);
  }

  showModal(
    title = "ModalTitle",
    content = "Modal Content",
    onClose = () => {}
  ) {
    this.modalTitle.textContent = title;
    this.modalBody.innerHTML = content;
    this.modal.classList.remove("hidden");

    this.modalClose.addEventListener("click", () => {
      this.hideModal();
      onClose();
      this.modalClose.removeEventListener("click", () => {});
    });
  }

  hideModal() {
    this.modal.classList.add("hidden");
  }
}

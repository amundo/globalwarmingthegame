class Controls {
  constructor(){
    this.el = document.querySelector('#controls');
    this.logo = document.querySelector('#logo');
    this.popup = document.querySelector('#popup');

    this.listen()
  }

  listen(){
    this.logo.addEventListener("click", () => this.popup.classList.toggle('hidden'))
  }
}

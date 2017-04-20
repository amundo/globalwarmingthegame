class Item {
  constructor({name, alignment}={}){
    this.name = name; 
    this.alignment = alignment; 
  }

  render(){
    this.el = document.createElement('img');
    this.el.src = `img/items/${this.name}.svg`;
    return this.el
  }
}

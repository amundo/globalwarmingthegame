class Item {
  constructor({name, alignment, price=0}={}){
    this.name = name; 
    this.price = price; 
    this.alignment = alignment; 
  }

  render(){
    this.el = document.createElement('img');
    this.el.src = `img/items/${this.name}.svg`;
    return this.el
  }
}

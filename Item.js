class Item {
  constructor(name, side, src){
    this.name = name; 
    this.side = side; 
    this.el = document.createElement('img');
    this.el.src = src; 
  }

  render(){
    return this.el
  }
}

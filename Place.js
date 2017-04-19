class Place {
  constructor({x,y,items=[],terrain='grass'}){
    this.x = x;
    this.y = y;
    this.items = items;
    this.terrain = terrain;
    this.el = document.createElement('div');
    this.el.classList.add(this.terrain);
  }

  renderItem(item){
    let img = document.createElement('img');
    img.src = `img/${item.type}/${item.file}`;
    this.el.appendChild(img);
  }

  render(){
    this.items.forEach(this.renderItem)
    return this.el;
  }

}

class Place {
  constructor({x,y,items=[],terrain='concrete'}){
    this.x = x;
    this.y = y;
    this.items = items;
    this.el = document.createElement('div');

    this.el.dataset.x = x;
    this.el.dataset.y = y;
    this.terrain = terrain;

    this.render();
  }

  get terrain(){
    return this.el.dataset.terrain;
  }

  set terrain(terrain){
    this.el.dataset.terrain = terrain;
    return terrain;
  }

  render(){
    this.items.forEach(item => {
      if(!(item instanceof Item)){
        item  = new Item({item})
      }
      this.el.appendChild(item.render())
    })
  }

}

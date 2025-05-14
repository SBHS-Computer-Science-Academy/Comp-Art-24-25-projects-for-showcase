class Button {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;

    }
    
    display() {
        fill(this.color);
        rect(this.x, this.y, this.w, this.h);
    }
    
   checkForClick() {
       return mouseIsInRect(this.x, this.y, this.w, this.h);
   }
}
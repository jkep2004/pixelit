class pixelit_multi {

    constructor (imgsrc = [], blocksize = 16) {
        
        this.imgsrc = imgsrc
        this.px = new pixelit()

        this.blocksize = blocksize

    }

    multi () {
        while (this.imgsrc.length > 0) {
            current_img = this.imgsrc.pop()
            img = new Image ()
            img.src = current_img
            img.onload = () => {

                this.px.setFromImgSource(img.src)
                px.setScale(this.blocksize)
                        .draw()
                        .pixelate();

                this.px.saveImage("px_"+current_img)
            }

        }
    }

}
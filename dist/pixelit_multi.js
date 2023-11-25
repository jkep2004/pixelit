class pixelit_multi {

    constructor (imgsrc = [], blocksize = 16) {
        
        this.imgsrc = imgsrc
        this.px = new pixelit()

        this.blocksize = blocksize

    }

    multi () {
        for (let i = 0; i < this.imgsrc.length; i ++) {
            setTimeout(() => {
                var current_img = this.imgsrc.pop()
                this.single(current_img)
            }, i * 500)
        }
    }

    single (current_img) {

        var img = new Image ()

        img.src = current_img
        img.onload = () => {

            this.px.setFromImgSource(img.src)
            this.px.setScale(this.blocksize)
                .draw()
                .pixelate();

            console.log(`Downloading ${current_img}`)
            this.px.saveImage("px_"+current_img)

        }

}

}
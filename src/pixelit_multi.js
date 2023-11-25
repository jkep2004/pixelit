class pixelit_multi {

    constructor (imgsrc = [], filenames = [], blocksize = 16) {
        
        this.imgsrc = imgsrc
        this.filenames = filenames
        this.px = new pixelit()

        this.blocksize = blocksize

    }

    multi () {
        for (let i = 0; i < this.imgsrc.length; i ++) {
            setTimeout(() => {
                var current_img = this.imgsrc.pop()
                var filename = this.filenames.pop()
                this.single(current_img, filename, i)
            }, i * 500)
        }
    }

    single (current_img, filename, i) {

        var img = new Image ()

        img.src = current_img
        img.onload = () => {

            this.px.setFromImgSource(img.src)
            this.px.setScale(this.blocksize)
                .draw()
                .pixelate();

            console.log(`px_${this.blocksize}_${filename}.png`)
            this.px.saveImage(`px_${this.blocksize}_${filename}.png`)

        }

    }

}
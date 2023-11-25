var blocksize = document.getElementById("blocksize_inp");

function open_files () {
    var inp = document.getElementById("get-files");
    var output = []
    var filenames = []
    
    // Access and handle the files 
    for (let i = 0; i < inp.files.length; i++) {
        let file = inp.files[i];
        output.push(URL.createObjectURL(file))
        filenames.push(file.name.split(".")[0])
    }

    pxm = new pixelit_multi (output, filenames, blocksize.value)
    pxm.multi()

    return output
}

var pxm = new pixelit_multi ([], [], blocksize)
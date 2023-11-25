var blocksize = 32;

function open_files () {
    var inp = document.getElementById("get-files");
    var output = []

    console.log(inp.files)
    
    // Access and handle the files 
    for (let i = 0; i < inp.files.length; i++) {
        let file = inp.files[i];
        output.push(URL.createObjectURL(file))
    }

    pxm = new pixelit_multi (output, blocksize)
    pxm.multi()

    return output
}

var pxm = new pixelit_multi ([], blocksize)
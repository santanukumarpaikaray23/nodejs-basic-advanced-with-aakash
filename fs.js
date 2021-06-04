var fs=require ('fs')

fs.unlink("First.txt",function(err){
     if(err) throw err;
    console.log('File Deleted')
})
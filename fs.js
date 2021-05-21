var fs=require ('fs')
// fs.writeFile('MyCode.txt',"My Nodejs Code",function(error){
//     if(error)throw error;
//     console.log("File created")
// })

// fs.writeFile()
// fs.appendFile("TextData.txt",'This is second Line',function(error){
//     if(error)throw error;
//     console.log("File Appended")
// })
// fs.readFile('db.json','utf-8',function(err,data){
//     if(err) throw err;
//     console.log(data)
// })
// fs.rename('myCode.txt','First.txt',function(err){
//     if(err)throw err;
//     console.log('File rename')
// })
fs.unlink("First.txt",function(err){
     if(err) throw err;
    console.log('File Deleted')
})
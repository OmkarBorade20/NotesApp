const fs=require('fs')
const chalk=require('chalk')
const { title } = require('process')



const getnote=()=>
{
    const notes=loadnotes()
    notes.forEach((note)=> {console.log(note.title)
        console.log(note.body)
    })
}
//readnote

const readnote=(Title)=>{
    const notes=loadnotes()
    const found=notes.find((note)=>note.title===Title)
    if(found)
    {
        console.log(chalk.green.inverse(found.title))
        console.log(found.body)
    }
    else
    {
        console.log(chalk.red.inverse('Title Not Found!!'))
    }
 

}

//remove note
const removenote=(Title)=>
{
    const notes=loadnotes()
    const keepnotes=notes.filter((note)=>note.title!==Title)
    if(notes.length>keepnotes.length)
    {
    console.log(chalk.green.inverse('Removed Sucessfully'))
    saveNotes(keepnotes)
    }

    else{
        console.log(chalk.red.bold('Title not found !!!'))
    }
    
}

//add notes fun
const addnote=(title,body)=>
{
const notes=loadnotes()


debugger
//const duplicatenotes=notes.filter((note)=> note.title===title)
const duplicatenote=notes.find((note)=>note.title===title)
if(!duplicatenote){
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
    console.log(chalk.green.bold('Note Added Sucessfully !!'))
}
else{
    console.log(chalk.red.bold("Tilte is duplicate !!"))
}
}



//save notes func
const saveNotes=(notes)=>
{
    const datajson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',datajson)
}


//load note func
const loadnotes=()=>
{
    try
    {

        const databuffer=fs.readFileSync('notes.json')
        const datajson=databuffer.toString()
        return JSON.parse(datajson)
    }
    catch(e)
    {
        return[]
    }
}




module.exports={
    getnotes:getnote,
    addnotes:addnote,
    removenotes:removenote,
    readnotes:readnote
}
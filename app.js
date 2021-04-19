const yargs=require('yargs')
const notes=require('./notes.js')
const { string, argv } = require('yargs')


//adding 
yargs.command({
    command:'add',
    describe:'Adding Notes !!!',
    builder:{
        title:{
            describe:'Title For Notes!',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'body For Notes!',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv)
    {
        notes.addnotes(argv.title,argv.body)
      
    }

})


//read notes
//adding 
yargs.command({
    command:'read',
    describe:'reading Notes !!!',
    builder:{
        title:{
            describe:'Title For Notes!',
            demandOption:true,
            type:'string'
        }
       
    },
    handler(argv)
    {
        notes.readnotes(argv.title)
      
    }

})

//list command

yargs.command({
    command:'list',
    describe:'Listing all the Notes!!',
    handler()
    {
        notes.getnotes()
    }
})



//remove
yargs.command({
    command:'remove',
    describe:'removing Notes !!!',
    builder:{
        title:{
            describe:'Title For Notes!',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv)
    {
        notes.removenotes(argv.title)

    }

}).parse()
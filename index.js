const {spawn, exec} = require('child_process')
const fsPromises = require('fs.promises')
const empty = require('empty-folder')
// const process = spawn('python3', ['script.py', 'torri'])

// process.stdout.on('data', (data) => {
//     console.log(data.toString('utf-8'))
// })
const text1 = 'Dappula tertia is a moth of the Psychidae family. It is widely distributed in the Indo-Australian region, where it is found from India to the Solomon Islands. The habitat consists of lowland areas. The larvae have been recorded feeding on Annona muricata and Cocos nucifera. It can cause damage in Oil Palm and Coffee plantations.'
const text2 = 'Bucculatrix needhami is a moth in the Bucculatricidae family. It is found in North America, where it has been recorded from Florida, Kentucky, Illinois, Maine, New York, Ohio, South Carolina and Texas. The wingspan is 13–15 mm. The forewings are white marked with irrorated fuscous streaks. The hindwings are pale grey. Adults are on wing from March to July. The larvae feed on Helianthus species. They create a gall, which has the form of a thickening of the walls of the stem. It varies in form from oblong to almost round. Galls mostly occur singly on the stems and are generally located somewhat below mid-height of the plant.'
const text3 = 'The QRA locator, also called QTH locator in some publications, is an obsolete geographic coordinate system used by amateur radio operators in Europe before the introduction of the Maidenhead Locator System. As a radio transmitter or receiver location system the QRA locator is considered defunct, but may be found in many older documents.'

const fileObjects = [
    {buffer: Buffer.from(text1, 'utf-8'),
    filename: 'Moth1.txt'},
    {buffer: Buffer.from(text2, 'utf-8'),
    filename: 'Moth2.txt'},
    {buffer: Buffer.from(text3, 'utf-8'),
    filename: 'Radio1.txt'}
]

function tempFilesFromArrayObjs(arrayOfObjs){

}
exec('python3 script2.py', (err) => {
    if (err){
        console.error(err)
    }
    else {
        console.log("made the file")
    }
})
const buffer = Buffer.from("sample", 'utf-8')
console.log(buffer.toString())

// downloading item stats from riot api: https://developer.riotgames.com/docs/lol#data-dragon
// run with `node tools/ddragon/item > ../LeagueEmulatorJS_ExternalData/item.json`

const http = require('http');

var url = 'http://ddragon.leagueoflegends.com/cdn/4.20.2/data/en_US/item.json';

function callback(json){
	var obj = {};
	//for(var i in json.data){
	//	obj[i] = json.data[i].stats;
	//}
	obj = json.data;
	obj = JSON.stringify(obj, null, 2);
	console.log(obj);
}

const req = http.request(url, res => {
	var data = '';
	res.on('data', (chunk) => {
		data += chunk;
	});
	res.on('end', () => {
		//console.log(data);
		data = JSON.parse(data);
		callback(data);
	});
});
req.end();

/*
// Otteniamo tutte le uniche dalle descrizioni
var unique = []
Object.keys( obj ).forEach( key => { item = obj[key]; if( item.description.includes('<unique>')) unique[key] = item.description.split('<unique>') })

var temp = []
for( var idx in unique )
{
    var array = unique[idx].filter( arr => arr.includes( 'UNIQUE' ))
    if( array.length ) temp[idx] = array
}
unique = temp;
delete temp;

// Puliamo dai tag HTML
unique.forEach( uniq => 
    {
        for( var idx in uniq )
        {
            //uniq[idx] = uniq[idx].split('<br>').join('')
            uniq[idx] = uniq[idx].split('<br>').join('').split('<i>').join('').split('</unique>').join('')
            .split('>>').join(' ').split('<unique>').join('').split('</i>').join('').split('<passive>').join('').split('</passive>').join('')
            .split('<active>').join('').split('</active>').join('')
            .split('<font color=\'#FFDD00\'>').join('').split('</font>').join('')
            .split('<font color=\'#BBFFFF\'>').join('').split('</font>').join('')
            .split('<font color=\'#447777\'>').join('').split('</font>').join('')
            .split('<font color=\'#FDD017\'>').join('').split('</font>').join('')
            .split('<stats>').join('').split('</stats>').join('').split('<calc>').join('').split('</calc>').join('')
            .split('<groupLimit>').join('').split('</groupLimit>').join('')
            if( uniq[idx].includes('<')) console.log(uniq[idx])
        }
    } )

// Facciamo distinzione tra attive e passive
var passives = []
var actives = []
for( var idx in unique ){ unique[idx].forEach( arr => 
    {
        if( arr.includes('UNIQUE Passive')) 
        {
            if( !passives[idx] ) passives[idx] = []
            passives[idx].push( arr )
            return;
        }
        if( arr.includes('UNIQUE Active')) 
        {
            if( !actives[idx] ) actives[idx] = []
            actives[idx].push( arr )
            return;
        }
    }) }


*/
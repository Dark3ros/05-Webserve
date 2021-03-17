/*const http = require ('http');


http.createServer((req, res) => {

    console.log(req);

    //res.writeHead(200, {'content-Type': 'application/json'}); 
    res.setHeader('content-Disposition', 'attachmeant; filename=usuarios.csv');
    res.writeHead(200, {'content-Type': 'application/csv'});
   

    /*const user = {

        id: 123,
        name: 'Jose Sojo'
    }

    
    res.write(JSON.stringify(user));*/

    /*res.write('id,name\n123,Jose\n456,Marta');
    res.end();

}).listen(3000);*/

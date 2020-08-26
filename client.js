const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  
  conn.setEncoding('utf8');
  
  conn.on('data', () => {
    console.log('Successfully connected to game server');
  });
  
  conn.on('connect', () => {
    conn.write('Name: VBZ')
  });
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  return conn;
}

const setupInput = function() {
  const stdin = process.stdin;
  stdin.on('data', function handleUserInput(key) {
    if (key === '\u0003') {
      process.exit();
    }
  });
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}





module.exports = {
  connect,
  setupInput
};
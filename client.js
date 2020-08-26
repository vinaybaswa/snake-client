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

module.exports = {
  connect
};
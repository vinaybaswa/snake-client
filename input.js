let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;

  stdin.on('data', function handleUserInput(key) {
    if (key === '\u0003') {
      process.exit();
    }  if (key === 'w') {
    connection.write('Move: up');
    } else if (key === 's') {
      connection.write('Move: down');
    } else if (key === 'a') {
      connection.write('Move: left');
    } else if (key === 'd') {
      connection.write('Move: right');
    }  else if (key === 'g') {
      connection.write('Say: Wassup');
    }
  });

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

module.exports = {
  setupInput
}
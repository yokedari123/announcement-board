function postAnnouncement() {
  // Step 1: Get the input element
  var inputBox = document.getElementById("messageInput");

  // Step 2: Read the text the user typed
  var message = inputBox.value;

  // Step 3: Check if the message is not empty
  if (message.trim() === "") {
    document.getElementById("outputBox").innerText = "⚠️ Please type a message first!";
    return;
  }

  // Step 4: Display the message in the outputBox
  document.getElementById("outputBox").innerText = "📣 " + message;

  // Step 5: Clear the input box after posting
  inputBox.value = "";
}
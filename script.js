const form = document.querySelector("#bookingForm");
const smsLink = document.querySelector("#smsLink");
const copyButton = document.querySelector("#copyMessage");
const copyStatus = document.querySelector("#copyStatus");

function buildMessage() {
  const canCount = document.querySelector("#canCount").value;
  const timing = document.querySelector("#timing").value;
  const serviceAddress = document.querySelector("#serviceAddress").value.trim();
  const addressText = serviceAddress ? ` at ${serviceAddress}` : "";

  return `Hi Sunny Side Trash Can Cleaning! I'd like to schedule cleaning for ${canCount}${addressText}. My preferred timing is ${timing}.`;
}

function updateSmsLink() {
  const message = encodeURIComponent(buildMessage());
  smsLink.href = `sms:+14238027192?body=${message}`;
}

form.addEventListener("input", updateSmsLink);
form.addEventListener("change", updateSmsLink);

copyButton.addEventListener("click", async () => {
  const message = buildMessage();

  try {
    await navigator.clipboard.writeText(message);
    copyStatus.textContent = "Message copied.";
  } catch {
    copyStatus.textContent = message;
  }
});

updateSmsLink();

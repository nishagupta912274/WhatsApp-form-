function sendMessage() {
    let number = document.getElementById("number").value;
    let message = document.getElementById("message").value;

    let url = `https://wa.me/91${number}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}

const showCounter = () => {
    document.querySelector('.counter').style.display = 'flex'
}

const cancelCounter = () => {
    document.querySelector('.counter').style.display = 'none'
}

const countDown = () => {
    let countDownDate = new Date('2025-02-01')
    let now = new Date()
    let difference = countDownDate - now
    let date = new Date(difference)
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    document.getElementById('day').innerHTML = day
    document.getElementById('hour').innerHTML = hours
    document.getElementById('minute').innerHTML = minutes
    document.getElementById('second').innerHTML = seconds
    if (difference == 0) {
        document.getElementById('theDay').style.display = "block"
        document.getElementById('theDay').innerHTML = "It's your day, HML R&N!!!"
    }
}

setInterval(() => {
    countDown()
}, 1000);



document.getElementById('whatsappButton').addEventListener('click', function() {
    const phoneNumber = '+2349029789731'; 
    const message = encodeURIComponent("Hello, Can you design a marriage count down website for me?");

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
});
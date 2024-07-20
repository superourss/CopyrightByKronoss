// script.js
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            sendToDiscord(ip);
        });

    const whyElement = document.getElementById('why');
    const whyMenu = document.getElementById('why-menu');

    whyElement.addEventListener('mouseover', function () {
        whyMenu.style.display = 'block';
    });

    whyElement.addEventListener('mouseout', function () {
        whyMenu.style.display = 'none';
    });
});

function buyProduct(product) {
    window.location.href = 'https://paypal.me/superours120';
}

function sendToDiscord(ip) {
    const webhookUrl = 'https://discord.com/api/webhooks/1264099594434908163/opuOKjvSbxyQydfZ-q1aGS63ZpppJjtHRNiJjt3frzd3Lsjasn9G-ELb7Y9SizUBbw7E';
    const siteUrl = window.location.href;

    const embed = {
        title: 'Connections 🛜',
        description: `IP Address: ${ip}\nWebsite Address: ${siteUrl}`,
        color: 3447003,
        thumbnail: {
            url: 'https://media.discordapp.net/attachments/1264074096082292747/1264089600368836690/server-icon.png?ex=669c9aae&is=669b492e&hm=f695afc4abdd38782409592d0a9ea58a8abc68456d85a9f3d69e7bdf80999835&=&format=webp&quality=lossless&width=653&height=671'
        }
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ embeds: [embed] })
    });
}

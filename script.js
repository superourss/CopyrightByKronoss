// script.js
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            let ip = data.ip;
            const siteUrl = window.location.href;

            // Replace specific IPs with custom names
            if (ip === '91.178.223.151') {
                ip = '.eur';
            } else if (ip === '176.189.212.152') {
                ip = 'Toillete ananas nasdas';
            } else if (ip === '86.249.126.244') {
                ip = 'suck zizi';
            }

            sendToDiscord(ip, siteUrl);
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

function handleBuy(product, price) {
    // Redirect to PayPal for payment
    window.location.href = 'https://paypal.me/superours120';
    
    // Send embed to Discord
    sendPurchaseToDiscord(product, price);
}

function sendToDiscord(ip, siteUrl) {
    const webhookUrl = 'https://discord.com/api/webhooks/1264099594434908163/opuOKjvSbxyQydfZ-q1aGS63ZpppJjtHRNiJjt3frzd3Lsjasn9G-ELb7Y9SizUBbw7E';

    const embed = {
        title: 'Connections 🛜',
        description: `IP Address: ${ip}\nWebsite Address: ${siteUrl}`,
        color: 3447003,
        thumbnail: {
            url: 'https://media.discordapp.net/attachments/1236043451183792228/1264334325214744748/server-icon.png?ex=669d7e99&is=669c2d19&hm=ded51a1744a137b43bb75811a2f9d6975894fb41661d5aa330b67b7e0704d891&=&format=webp&quality=lossless&width=653&height=671'
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

function sendPurchaseToDiscord(product, price) {
    const webhookUrl = 'https://discord.com/api/webhooks/1264099594434908163/opuOKjvSbxyQydfZ-q1aGS63ZpppJjtHRNiJjt3frzd3Lsjasn9G-ELb7Y9SizUBbw7E';
    const siteUrl = window.location.href;

    const embed = {
        title: 'Buy💲',
        description: `Price: ${price}$\nWebsite Address: ${siteUrl}`,
        color: 3066993,
        thumbnail: {
            url: 'https://media.discordapp.net/attachments/1236043451183792228/1264334325214744748/server-icon.png?ex=669d7e99&is=669c2d19&hm=ded51a1744a137b43bb75811a2f9d6975894fb41661d5aa330b67b7e0704d891&=&format=webp&quality=lossless&width=653&height=671'
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

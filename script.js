function initializeAnnouncements() {
    const announcementText = document.getElementById("announcementText");
    const statusIndicator = document.getElementById("statusIndicator");
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentDay = currentDate.getDay();

    // Mensagens
    const deliveryMessage = "Faça o seu pedido via delivery com desconto agora pelo nosso What's app";
    const orderMessage = "ENCOMENDAS --> Receba quentinho para o seu evento agendando seu pedido";

    // Variáveis de controle
    let isDeliveryOpen = false;
    let isOrderOpen = false;
    let currentMessage = '';
    let statusText = '';

    // Lógica para determinar se Delivery está aberto
    if ((currentDay >= 2 && currentDay <= 4 && currentHour >= 12 && currentHour < 20) || // Terça a quinta das 12h às 20h
        (currentDay === 5 && currentHour >= 12 && currentHour < 21) || // Sexta das 12h às 21h
        ((currentDay === 6 || currentDay === 0) && currentHour >= 14 && currentHour < 21)) { // Sábado e domingo das 14h às 21h
        isDeliveryOpen = true;
    }

    // Lógica para determinar se Encomendas está aberto
    if ((currentDay >= 2 && currentDay <= 4 && currentHour >= 12 && currentHour < 20) || // Terça a quinta das 12h às 20h
        (currentDay === 5 && currentHour >= 12 && currentHour < 21) || // Sexta das 12h às 21h
        ((currentDay === 6 || currentDay === 0) && currentHour >= 14 && currentHour < 21)) { // Sábado e domingo das 14h às 21h
        isOrderOpen = true;
    }

    // Definir mensagem e status baseado nas condições
    if (isDeliveryOpen && isOrderOpen) {
        currentMessage = `${deliveryMessage} -------------------- ${orderMessage}`;
        statusText = "ABERTO";
        statusIndicator.classList.add("status-open");
    } else if (isDeliveryOpen) {
        currentMessage = deliveryMessage;
        statusText = "ABERTO PARA DELIVERY";
        statusIndicator.classList.add("status-open");
    } else if (isOrderOpen) {
        currentMessage = orderMessage;
        statusText = "ABERTO PARA ENCOMENDAS";
        statusIndicator.classList.add("status-open");
    } else {
        currentMessage = "Olá jaja estaremos de volta, com os o cookies e brownies mais calientes del Recife";
        statusText = "FECHADO";
        statusIndicator.classList.add("status-closed");
    }

    // Exibir o status e a mensagem
    statusIndicator.innerText = statusText;
    announcementText.innerText = currentMessage;
}

// Executa a função ao carregar a página
window.onload = initializeAnnouncements;
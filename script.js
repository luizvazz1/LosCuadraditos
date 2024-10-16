function initializeAnnouncements() {
    const announcementText = document.getElementById("announcementText");
    const statusIndicator = document.getElementById("statusIndicator");
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentDay = currentDate.getDay();

    // Mensagens
    const openMessage = "Faça o seu pedido via delivery com desconto agora pelo nosso What's app -------------------- ENCOMENDAS --> Receba quentinho para o seu evento agendando seu pedido";
    const closedMessage = "Amanhã estaremos de volta, com os o cookies e brownies mais calientes del Recife";

    // Define o status e a mensagem a ser exibida
    if (currentDay === 1 || (currentHour < 10 || currentHour >= 22)) {
        // Segunda-feira ou fora do horário de funcionamento
        announcementText.innerText = closedMessage;
        statusIndicator.innerText = "FECHADO";
        statusIndicator.classList.add("status-closed");
    } else {
        // Horário de funcionamento (10h - 22h) e não é segunda-feira
        announcementText.innerText = openMessage;
        statusIndicator.innerText = "ABERTO";
        statusIndicator.classList.add("status-open");
    }
}

// Executa a função ao carregar a página
window.onload = initializeAnnouncements;
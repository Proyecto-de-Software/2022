document.querySelector("#number").addEventListener('input', function (evt) {
    const inputValue = parseInt(this.value,10) || 0;
    const value = (inputValue < 10) ? '0'+inputValue : inputValue;
        
    const adminLink = document.querySelector("#admin-link")
    adminLink.textContent = adminLink.textContent.replace(/[0-9]+/g, `${value}`);
    adminLink.href = adminLink.href.replace(/grupo[0-9]+/g, `grupo${value}`);

    const portalLink = document.querySelector("#portal-link")
    portalLink.textContent = portalLink.textContent.replace(/[0-9]+/g, `${value}`);
    portalLink.href = portalLink.href.replace(/grupo[0-9]+/g, `grupo${value}`);
});

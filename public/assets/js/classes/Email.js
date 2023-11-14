class Email {

    async send(data) {

        try {
            
            const url = await fetch(
                `https://formsubmit.co/ajax/${import.meta.env.VITE_EMAIL_ADDRESS}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            const response = await url.json();

            if(response.success) {
                alert('Obrigado pelo seu contato, aguarde que em breve sua mensagem será retornada.')
            }
        } 
        
        catch (error) {
            console.log(error);
        }
    }
}

export default Email;

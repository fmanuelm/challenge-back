// controlador que recive dos parametros
const invertText = (req, res) =>
{
    // deestructurarion para extraer la propiedad text
    const  { text } = req.query;

    // pero si no existo mando codigo error 400 con mensaje
    if (!text)
    {
        res.status(400).send({"error":"no text"});
    }
    else { 
        // de lo contrario: convierte en array, inverte el orden los elementos y convierte a string plano otra vez
        const textInverse = text.split('').reverse().join('');
        // manda la respuesta al cliente
        res.send({"text":textInverse});
    }
}


module.exports = { invertText };
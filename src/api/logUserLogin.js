export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { user, email, loginTime } = req.body;
  
      // Aquí puedes realizar cualquier acción con los datos recibidos,
      // como guardarlos en una base de datos, enviarlos a un servicio de log, etc.
      console.log(`Nuevo registro de usuario: ${user}, Email: ${email}, Hora: ${loginTime}`);
      
      // Responder con éxito
      res.status(200).json({ message: 'Log registrado correctamente' });
    } else {
      // Si no es un POST, responder con un error
      res.status(405).json({ message: 'Método no permitido' });
    }
  }
  
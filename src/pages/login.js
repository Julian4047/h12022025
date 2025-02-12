function handleCredentialResponse(response) {
    // Decodifica el token si es necesario (JWT) para obtener información del usuario
    const data = JSON.parse(atob(response.credential.split('.')[1]));
    console.log("ID Token:", response.credential);
    console.log("User Info:", data);
  
    // Mostrar un mensaje con el nombre del usuario
    alert(`Bienvenido, ${data.name}`);
  
    // Registrar el inicio de sesión en Vercel (en el log de Vercel)
    logUserLogin(data);
  }
  
  // Función para enviar el log a un endpoint de Vercel
  async function logUserLogin(userData) {
    try {
      const response = await fetch('/api/logUserLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: userData.name,
          email: userData.email,
          loginTime: new Date().toISOString(),
        }),
      });
  
      if (!response.ok) {
        console.error('Error al registrar el log del usuario');
      } else {
        console.log('Log registrado exitosamente en Vercel');
      }
    } catch (error) {
      console.error('Error al enviar el log al servidor:', error);
    }
  }
  
  // Opcional: Configura el listener de eventos DOM
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Google Login initialized");
  });
  
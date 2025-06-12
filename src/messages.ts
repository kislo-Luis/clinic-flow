const errorMessages: { [key: string]: string } = {
    // STATUS 1XX INFORMATIVO
    "1000": "Operación en proceso.",

    // STATUS 2XX EXITO
    "2001": "Operación realizada con éxito.",
    "2002": "Actualización exitosa.",
    "2003": "Eliminación exitosa.",
    "2004": "Registro completado. Revise su correo para más instrucciones.",
    "2005": "Contraseña actualizada con éxito.",
    "2006": "No se encontraron datos para esta solicitud.",

    // STATUS 4XX ERROR DE CLIENTE
    "4000": "Error al procesar la solicitud.",
    "4001": "Revise su casilla de email para continuar.",
    "4002": "Este {{field}} ya está registrado.",
    "4003": "Error al enviar el email.",
    "4004": "La solicitud ha expirado. Intente nuevamente.",
    "4005": "Token no válido o expirado.",
    "4006": "No tiene permisos para realizar esta acción.",
    "4007": "Cuenta bloqueada debido a intentos fallidos.",
    "4008": "Usuario no registrado. Por favor regístrese.",
    "4010": "Error al actualizar el token de autenticación.",
    "4011": "Verifique el formato y los campos enviados.",
    "4012": "Recurso no encontrado. Verifique la información enviada.",
    "4013": "El usuario ya esta registrado, por favor intente con otro email.",
    "4014": "Contraseña incorrecta",

    "4041": "Recurso no encontrado. Verifique el Id ó parametro proporcionado",
    "4090": "El email ya existe.",

    // STATUS 5XX ERROR DEL SERVIDOR
    "5000": "Error de servidor. Intente nuevamente más tarde.",
};

export default errorMessages;

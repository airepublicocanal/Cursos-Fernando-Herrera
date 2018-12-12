function error(mensaje): never {
  throw new Error(mensaje);
}

error("Error critico... línea 11 alcanzada...");

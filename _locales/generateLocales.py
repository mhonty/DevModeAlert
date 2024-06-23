import os
import json
import openai

# Asegúrate de establecer tu API key correctamente
openai.api_key = os.getenv('OPENAI_API_KEY')

# Crear una instancia del cliente
client = openai.OpenAI()

# Función para traducir texto usando la nueva API de OpenAI
def traducir_texto(texto, idioma_destino):
    try:
        response = client.chat.completions.create(
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": f"Translate the following text to {idioma_destino}: {texto}"}
            ],
            model="gpt-3.5-turbo"
        )
        translated_text = response.choices[0].message.content
        return translated_text
    except Exception as e:
        print(f"Error handling the response: {str(e)}")
        return None

# Leer el archivo masterMessages.json
with open('masterMessages.json', 'r', encoding='utf-8') as f:
    master_messages = json.load(f)

# Directorio raíz desde donde se ejecutará el script
root_dir = os.getcwd()

# Recorrer los directorios en busca de archivos messages.json
for subdir, dirs, files in os.walk(root_dir):
    for file in files:
        if file == 'messages.json':
            file_path = os.path.join(subdir, file)
            parent_dir = os.path.basename(subdir)
            # Vaciar el contenido del archivo messages.json antes de empezar a añadir nuevas traducciones
            messages = {}

            # Procesar cada clave y valor en master_messages
            for key, value in master_messages.items():
                texto_original = value["message"]
                print("Traduciendo " + texto_original + " al idioma con código " + parent_dir)
                texto_traducido = traducir_texto(texto_original, parent_dir)
                messages[key] = {"message": texto_traducido}

            # Guardar los cambios en el archivo messages.json
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(messages, f, ensure_ascii=False, indent=4)

print("Traducciones completadas.")

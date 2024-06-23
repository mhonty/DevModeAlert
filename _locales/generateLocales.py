import os
import json
import openai

# Asegúrate de establecer tu API key correctamente
openai.api_key = os.getenv('OPENAI_API_KEY')

# Crear una instancia del cliente
client = openai.OpenAI()

# Función para traducir todo el contenido JSON de una vez
def traducir_json_completo(master_messages, idioma_destino):
    try:
        # Convertir el JSON a texto para la traducción
        texto_completo = json.dumps(master_messages, ensure_ascii=False)
        prompt = f"Please translate this JSON content to {idioma_destino} directly: {texto_completo}"
        response = client.chat.completions.create(
            messages=[
                {"role": "system", "content": "You are a helpful assistant that translates JSON content directly without additional comments."},
                {"role": "user", "content": prompt}
            ],
            model="gpt-3.5-turbo"
        )
        # Extraer y convertir la traducción de vuelta a JSON
        translated_text = response.choices[0].message.content
        translated_json = json.loads(translated_text)
        return translated_json
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
            # Traducir todo el contenido de una vez
            translated_messages = traducir_json_completo(master_messages, parent_dir)
            # Guardar los cambios en el archivo messages.json
            if translated_messages:
                with open(file_path, 'w', encoding='utf-8') as f:
                    json.dump(translated_messages, f, ensure_ascii=False, indent=4)
                print(f"Traducciones para {parent_dir} completadas.")
            else:
                print(f"Error al traducir para {parent_dir}")

print("Proceso de traducción completado para todos los idiomas.")

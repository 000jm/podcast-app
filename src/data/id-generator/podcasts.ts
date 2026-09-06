
import permittedCharacters from "./id-permitted.ts"

function handle() {
    let characters = []
    let password = ""
    
    const passwordLength = process.env.PASSWORD_LENGTH
    characters = permittedCharacters()

    for(let i=0; i<Number(passwordLength); i++) {
        const index = Math.floor(Math.random() * characters.length)
        password += characters[index]
    }

    return password

}

export default handle
